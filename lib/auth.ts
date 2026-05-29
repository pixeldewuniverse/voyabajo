import type { AuthSession } from './types'
import { mockUser } from './mockData'

const MOCK_TOKEN = 'mock-jwt-token-voyabajo-2024'

export function mockLogin(email: string, password: string): AuthSession | null {
  if (email === 'merchant@voyabajo.id' && password === 'voyabajo123') {
    return { token: MOCK_TOKEN, user: mockUser }
  }
  return null
}

export function getSession(): AuthSession | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem('voyabajo_session')
  if (!raw) return null
  try { return JSON.parse(raw) as AuthSession } catch { return null }
}

export function saveSession(session: AuthSession) {
  localStorage.setItem('voyabajo_session', JSON.stringify(session))
}

export function clearSession() {
  localStorage.removeItem('voyabajo_session')
}

export function isAuthenticated(): boolean {
  return getSession() !== null
}
