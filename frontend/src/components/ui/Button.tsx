import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children, onClick, variant = 'primary', size = 'md',
  disabled = false, loading = false, type = 'button', className = ''
}) => {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: 'none', cursor: disabled || loading ? 'not-allowed' : 'pointer',
    fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, borderRadius: '10px',
    transition: 'opacity 0.2s', opacity: disabled || loading ? 0.6 : 1,
    padding: size === 'sm' ? '6px 12px' : size === 'lg' ? '12px 24px' : '8px 16px',
    fontSize: size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14px',
  }
  const variants: Record<string, React.CSSProperties> = {
    primary:   { backgroundColor: '#6366f1',   color: '#ffffff' },
    secondary: { backgroundColor: '#1a1a24',   color: '#f0f0f5',    border: '1px solid #2e2e42' },
    ghost:     { backgroundColor: 'transparent',     color: '#f0f0f5',    border: '1px solid transparent' },
    danger:    { backgroundColor: '#ef4444',      color: '#ffffff' },
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} style={{ ...base, ...variants[variant] }} className={className}>
      {loading ? '...' : children}
    </button>
  )
}