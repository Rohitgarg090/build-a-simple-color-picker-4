import React from 'react'

interface InputProps {
  label?: string
  error?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  disabled?: boolean
  name?: string
  id?: string
  required?: boolean
}

export const Input: React.FC<InputProps> = ({
  label, error, placeholder, value, onChange,
  type = 'text', disabled = false, name, id, required = false
}) => {
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '8px 12px', fontSize: '14px',
    backgroundColor: '#1a1a24', color: '#f0f0f5',
    border: '1px solid ' + (error ? '#ef4444' : '#2e2e42'),
    borderRadius: '10px', outline: 'none',
    fontFamily: 'Inter, system-ui, sans-serif', boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1,
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      {label && <label htmlFor={id} style={{ fontSize: '13px', fontWeight: 500, color: '#f0f0f5' }}>{label}{required && ' *'}</label>}
      <input id={id} name={name} type={type} placeholder={placeholder} value={value}
        onChange={onChange} disabled={disabled} required={required} style={inputStyle} />
      {error && <span style={{ fontSize: '12px', color: '#ef4444' }}>{error}</span>}
    </div>
  )
}