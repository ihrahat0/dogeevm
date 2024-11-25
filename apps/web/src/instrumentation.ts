export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const Sentry = await import('@sentry/nextjs')
    const { ProfilingIntegration } = await import('@sentry/profiling-node')
    
    Sentry.init({
      dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0,
      profilesSampleRate: 1.0,
      integrations: [new ProfilingIntegration()],
      enabled: process.env.NODE_ENV === 'production',
    })
  }
} 