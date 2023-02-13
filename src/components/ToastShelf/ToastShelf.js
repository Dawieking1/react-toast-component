import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts?.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} message={message} variant={variant}>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
