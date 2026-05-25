export interface Order {
  id: string
  clientName: string
  type: string
  status: 'Pendiente' | 'Programada' | 'En Ejecución' | 'Finalizada'
  date: string
  time: string
  location: string
  address: string
  description: string
  priority: 'Baja' | 'Media' | 'Alta'
  checklistItems: ChecklistItem[]
  supplies: string[]
}

export interface ChecklistItem {
  id: string
  name: string
  completed: boolean
}

export interface Trap {
  id: string
  code: string
  location: string
  status: 'Activa' | 'Pendiente' | 'Inactiva'
  lastCheck: string
  bait: number
}

export interface PlagueControl {
  id: string
  clientId: string
  clientName: string
  type: string
  traps: Trap[]
}

export interface Technician {
  id: string
  name: string
  email: string
  phone: string
  specialties: string[]
  status: string
  avatar: string
}

export interface Notification {
  id: string
  type: string
  title: string
  message: string
  timestamp: string
  read: boolean
}
