import React from 'react'

export function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        callback()
      }
    }
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [callback])
}
