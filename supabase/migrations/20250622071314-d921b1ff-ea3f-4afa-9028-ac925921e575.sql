
-- Create a table for waitlist signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the waitlist table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert into waitlist (public signup)
CREATE POLICY "Anyone can sign up for waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading waitlist data (you may want to restrict this later)
CREATE POLICY "Anyone can view waitlist" 
  ON public.waitlist 
  FOR SELECT 
  USING (true);
