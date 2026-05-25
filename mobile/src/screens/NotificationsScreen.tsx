import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { mockNotifications } from '../mockData'

interface NotificationsScreenProps {
  navigation: any
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ navigation }) => {
  const [notifications, setNotifications] = useState(mockNotifications)
  const unreadCount = notifications.filter(n => !n.read).length

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'Nueva Orden':
        return '📋'
      case 'Cambio de Agenda':
        return '📅'
      case 'Trampa Pendiente':
        return '🐛'
      default:
        return '🔔'
    }
  }

  const unreadNotifications = notifications.filter(n => !n.read)
  const readNotifications = notifications.filter(n => n.read)

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Notificaciones</Text>
          {unreadCount > 0 && (
            <Text style={styles.unreadBadge}>{unreadCount} nuevas</Text>
          )}
        </View>
        {unreadCount > 0 && (
          <TouchableOpacity onPress={handleMarkAllAsRead}>
            <Text style={styles.markAllButton}>Marcar todas</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={[
          ...unreadNotifications,
          ...readNotifications,
        ]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.notificationCard,
              !item.read && styles.notificationUnread,
            ]}
            onPress={() => handleMarkAsRead(item.id)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{getNotificationIcon(item.type)}</Text>
              {!item.read && <View style={styles.unreadDot} />}
            </View>

            <View style={styles.content}>
              <Text style={[
                styles.title,
                !item.read && styles.titleUnread,
              ]}>
                {item.title}
              </Text>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.timestamp}>
                {new Date(item.timestamp).toLocaleString('es-ES', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </View>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>→</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔔</Text>
            <Text style={styles.emptyText}>Sin notificaciones</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  unreadBadge: {
    fontSize: 12,
    color: '#1e40af',
    marginTop: 4,
  },
  markAllButton: {
    fontSize: 12,
    color: '#1e40af',
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  notificationUnread: {
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  iconContainer: {
    position: 'relative',
    marginRight: 12,
    marginTop: 2,
  },
  icon: {
    fontSize: 24,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1e40af',
    position: 'absolute',
    top: -2,
    right: -2,
  },
  content: {
    flex: 1,
  },
  titleUnread: {
    fontWeight: 'bold',
    color: '#111827',
  },
  message: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  timestamp: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 4,
  },
  actionButton: {
    paddingHorizontal: 8,
  },
  actionIcon: {
    fontSize: 16,
    color: '#d1d5db',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
  },
})

export default NotificationsScreen
