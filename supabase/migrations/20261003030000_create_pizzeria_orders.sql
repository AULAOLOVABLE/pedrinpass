create extension if not exists pgcrypto;

create table if not exists public.pizzas (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  price numeric(10,2) not null check (price >= 0),
  image_url text,
  is_available boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(trim(customer_name)) between 2 and 120),
  customer_phone text not null check (char_length(customer_phone) between 8 and 30),
  items jsonb not null check (jsonb_typeof(items) = 'array' and jsonb_array_length(items) between 1 and 30),
  total_amount numeric(10,2) not null check (total_amount >= 0),
  delivery_time timestamptz not null,
  payment_method text not null check (payment_method in ('pix','card','cash')),
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.pizzas enable row level security;
alter table public.orders enable row level security;

drop policy if exists "Public can view available pizzas" on public.pizzas;
create policy "Public can view available pizzas" on public.pizzas for select to anon, authenticated using (is_available = true);

drop policy if exists "Anonymous customers can create orders" on public.orders;
create policy "Anonymous customers can create orders" on public.orders for insert to anon
with check (delivery_time >= now() + interval '30 minutes' and jsonb_typeof(items) = 'array' and jsonb_array_length(items) between 1 and 30);

grant select on public.pizzas to anon, authenticated;
grant insert on public.orders to anon;
