create table if not exists public.drinks (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  price numeric(10,2) not null check (price >= 0),
  image_url text,
  is_available boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.drinks enable row level security;
grant select on public.drinks to anon, authenticated;
drop policy if exists "Anyone can view available drinks" on public.drinks;
create policy "Anyone can view available drinks" on public.drinks for select to anon, authenticated using (is_available = true);
alter table public.orders add column if not exists order_type text not null default 'delivery' check (order_type in ('delivery','pickup'));

insert into public.drinks (name, description, price)
select * from (values
('Coca-Cola 350ml','Lata gelada',6.00),
('Coca-Cola Zero 350ml','Lata gelada',6.00),
('Guaraná Antarctica 350ml','Lata gelada',6.00),
('Fanta Laranja 350ml','Lata gelada',6.00),
('Água Mineral 500ml','Sem gás',4.00)
) as v(name,description,price)
where not exists (select 1 from public.drinks d where d.name=v.name);
