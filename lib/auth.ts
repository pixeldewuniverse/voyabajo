import type { AuthSession, User } from './types'

const MOCK_USER: User = {
  id: 'U001',
  name: 'Merchant VoyaBajo',
  email: 'merchant@voyabajo.id',
  phone: '081234567890',
  joinedAt: '2023-09-01',
}

const MOCK_TOKEN = 'mock-jwt-token-voyabajo-2024'

export function mockLogin(email: string, password: string): AuthSession | null {
  if (email === 'merchant@voyabajo.id' && password === 'voyabajo123') {
    return { token: MOCK_TOKEN, user: MOCK_USER }
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
