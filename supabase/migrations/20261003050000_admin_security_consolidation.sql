-- Server-side admin authorization.
-- Assign roles only to trusted auth.users rows:
-- insert into public.user_roles (user_id, role) values ('USER_UUID', 'admin');

create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin','staff')),
  created_at timestamptz not null default now()
);

create table if not exists public.admin_audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid not null references auth.users(id) on delete restrict,
  action text not null,
  target_table text not null,
  target_id uuid,
  old_data jsonb,
  new_data jsonb,
  created_at timestamptz not null default now()
);

alter table public.user_roles enable row level security;
alter table public.admin_audit_log enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select private.is_admin(); $$;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "Admins can read orders" on public.orders;
create policy "Admins can read orders" on public.orders for select to authenticated using ((select private.is_admin()));
drop policy if exists "Admins can update orders" on public.orders;
create policy "Admins can update orders" on public.orders for update to authenticated using ((select private.is_admin())) with check ((select private.is_admin()));
drop policy if exists "Admins can read audit log" on public.admin_audit_log;
create policy "Admins can read audit log" on public.admin_audit_log for select to authenticated using ((select private.is_admin()));

drop trigger if exists orders_admin_audit on public.orders;
create or replace function public.audit_order_admin_action()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  if (select private.is_admin()) then
    insert into public.admin_audit_log(actor_user_id, action, target_table, target_id, old_data, new_data)
    values (auth.uid(), 'order_updated', TG_TABLE_NAME, coalesce(NEW.id, OLD.id), to_jsonb(OLD), to_jsonb(NEW));
  end if;
  return NEW;
end;
$$;
create trigger orders_admin_audit after update on public.orders for each row execute function public.audit_order_admin_action();

revoke all on public.user_roles from anon, authenticated;
revoke all on public.admin_audit_log from anon, authenticated;
grant select, update on public.orders to authenticated;
grant select on public.admin_audit_log to authenticated;
