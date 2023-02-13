import React from 'react'
import { useEscapeKey } from '../../hooks/useEscapeKey'

export const ToastContext = React.createContext(null)

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])

  useEscapeKey(handleEscape)

  const handleAddToast = React.useCallback((message, variant) => {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]
    setToasts(nextToasts)
  }, [toasts])

  const dismissToast = React.useCallback((id) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id)
    })
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, handleAddToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
