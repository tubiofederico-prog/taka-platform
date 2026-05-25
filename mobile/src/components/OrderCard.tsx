import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import StatusBadge from './StatusBadge'
import { Order } from '../types'

interface OrderCardProps {
  order: Order
  onPress: () => void
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onPress }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return '#ef4444'
      case 'Media':
        return '#f59e0b'
      default:
        return '#10b981'
    }
  }

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.card,
      pressed && styles.pressed,
    ]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.orderId}>{order.id}</Text>
          <Text style={styles.client}>{order.clientName}</Text>
        </View>
        <StatusBadge status={order.status} />
      </View>

      <View style={styles.content}>
        <Text style={styles.type}>{order.type}</Text>
        <Text style={styles.time}>📅 {order.date} - {order.time}</Text>
        <Text style={styles.location}>📍 {order.location}</Text>
      </View>

      {order.priority === 'Alta' && (
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor('Alta') }]}>
          <Text style={styles.priorityText}>⚠️ Prioridad Alta</Text>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    marginBottom: 12,
  },
  pressed: {
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  client: {
    fontSize: 14,
    color: '#6b7280',
  },
  content: {
    marginBottom: 12,
  },
  type: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#6b7280',
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 8,
  },
  priorityText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
})

export default OrderCard
