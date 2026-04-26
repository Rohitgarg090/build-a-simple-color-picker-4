import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const colors: Record<string, React.CSSProperties> = {
    success: { backgroundColor: '#22c55e' + '20', color: '#22c55e' },
    warning: { backgroundColor: '#f59e0b' + '20', color: '#f59e0b' },
    error:   { backgroundColor: '#ef4444'   + '20', color: '#ef4444'   },
    info:    { backgroundColor: '#a78bfa'  + '20', color: '#a78bfa'  },
    default: { backgroundColor: '#1a1a24',         color: '#8b8b9e', border: '1px solid #2e2e42' },
  }
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center',
    padding: '2px 8px', borderRadius: '999px',
    fontSize: '12px', fontWeight: 500,
    ...colors[variant],
  }
  return <span style={style} className={className}>{children}</span>
}