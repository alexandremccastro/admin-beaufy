import { defineStore } from 'pinia'

export interface Notification {
  message: string
  color: string
  timeout: number
  show: boolean
  variant:
    | 'flat'
    | 'text'
    | 'elevated'
    | 'tonal'
    | 'outlined'
    | 'plain'
    | undefined
}

export interface State {
  notifications: Partial<Notification>[]
}

export const snackbarStore = defineStore('snackbar', {
  state: (): State => ({ notifications: [] }),

  actions: {
    pushNotification(notification: Partial<Notification>) {
      this.notifications.push({ ...notification, show: true })
    },
  },
})
