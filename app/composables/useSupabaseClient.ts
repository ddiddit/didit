import { createClient } from '@supabase/supabase-js'

let client: ReturnType<typeof createClient> | null = null

export const useSupabaseClient = () => {
  const config = useRuntimeConfig()

  if (!client) {
    client = createClient(
      config.public.supabaseUrl,
      config.public.supabaseAnonKey
    )
  }

  return client
}