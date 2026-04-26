import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ children, className = '', padding = '20px', onClick }) => {
  const style: React.CSSProperties = {
    backgroundColor: '#1a1a24',
    border: '1px solid #2e2e42',
    borderRadius: '10px',
    padding,
    cursor: onClick ? 'pointer' : 'default',
  }
  return <div style={style} className={className} onClick={onClick}>{children}</div>
}