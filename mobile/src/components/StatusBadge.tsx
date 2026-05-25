import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface StatusBadgeProps {
  status: string
  size?: 'small' | 'medium' | 'large'
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'medium' }) => {
  const getStatusColor = (status: string) => {
    const lower = status.toLowerCase()
    if (lower.includes('finalizada') || lower.includes('pagada'))
      return '#10b981'
    if (lower.includes('en ejecución') || lower.includes('en servicio'))
      return '#3b82f6'
    if (lower.includes('programada') || lower.includes('pendiente'))
      return '#f59e0b'
    if (lower.includes('cancelada') || lower.includes('vencida'))
      return '#ef4444'
    if (lower.includes('activa'))
      return '#10b981'
    return '#6b7280'
  }

  const color = getStatusColor(status)
  const sizeStyles = {
    small: { paddingHorizontal: 8, paddingVertical: 4 },
    medium: { paddingHorizontal: 12, paddingVertical: 6 },
    large: { paddingHorizontal: 16, paddingVertical: 8 },
  }

  return (
    <View style={[styles.badge, { backgroundColor: color + '20', borderColor: color }, sizeStyles[size]]}>
      <Text style={[styles.text, { color }]}>
        {status}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
})

export default StatusBadge
