export const tokens = {
  primary: '#6366f1',
  primaryFg: '#ffffff',
  background: '#0f0f13',
  surface: '#1a1a24',
  surfaceAlt: '#24243200',
  text: '#f0f0f5',
  textMuted: '#8b8b9e',
  accent: '#a78bfa',
  error: '#ef4444',
  success: '#22c55e',
  warning: '#f59e0b',
  border: '#2e2e42',
  fontFamily: 'Inter, system-ui, sans-serif',
  borderRadius: '10px',
} as const
export type Tokens = typeof tokens