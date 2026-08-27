-- Blue Lightning Decks & Patios — lead storage
-- Run this once in the Supabase dashboard: SQL Editor > New query > Run.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  -- The quick form on the homepage only requires name and phone.
  name        text not null,
  phone       text not null,
  email       text,

  city         text,
  project_type text,
  budget       text,
  referral     text,        -- how they found us
  description  text,
  call_time    text,
  form_source  text,        -- which form produced the lead
  transcript   text,        -- full conversation, for AI chat leads

  -- Sales pipeline, editable straight from the Supabase table editor.
  status     text not null default 'new'
             check (status in ('new', 'contacted', 'quoted', 'won', 'lost')),
  notes      text,
  email_sent boolean default false
);

-- Newest leads first: the dashboard's default view.
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- Deny all client-side access. The API routes use the service_role key, which
-- bypasses RLS, so no policies are needed. Without this, the anon key would be
-- able to read every lead.
alter table public.leads enable row level security;

comment on table public.leads is
  'Consultation requests from bluelightning.us. Written by /api/contact and /api/chat-summary.';
