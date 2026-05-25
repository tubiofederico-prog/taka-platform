interface StatusBadgeProps {
  status: string
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
}

const statusColors = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
}

const getStatusVariant = (status: string): keyof typeof statusColors => {
  const lowerStatus = status.toLowerCase()
  if (lowerStatus.includes('finalizada') || lowerStatus.includes('pagada') || lowerStatus.includes('entregada'))
    return 'success'
  if (lowerStatus.includes('en ejecución') || lowerStatus.includes('en servicio')) return 'info'
  if (lowerStatus.includes('programada') || lowerStatus.includes('pendiente')) return 'warning'
  if (lowerStatus.includes('vencida') || lowerStatus.includes('cancelada')) return 'error'
  return 'default'
}

const StatusBadge = ({ status, variant }: StatusBadgeProps) => {
  const colorClass = statusColors[variant || getStatusVariant(status)]
  return (
    <span className={`badge ${colorClass}`}>
      {status}
    </span>
  )
}

export default StatusBadge
