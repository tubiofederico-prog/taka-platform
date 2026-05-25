import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { mockTechnicianOrders, mockNotifications } from '../mockData'
import StatusBadge from '../components/StatusBadge'

interface HomeScreenProps {
  navigation: any
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const nextOrder = mockTechnicianOrders.find(o => o.status === 'Programada' || o.status === 'En Ejecución')
  const completedToday = mockTechnicianOrders.filter(o => o.status === 'Finalizada').length
  const unreadNotifications = mockNotifications.filter(n => !n.read).length

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días 👋</Text>
          <Text style={styles.name}>Carlos Mendoza</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>CM</Text>
        </View>
      </View>

      {/* Resumen del Día */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumen del Día</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{mockTechnicianOrders.length}</Text>
            <Text style={styles.statLabel}>Órdenes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{completedToday}</Text>
            <Text style={styles.statLabel}>Completadas</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{unreadNotifications}</Text>
            <Text style={styles.statLabel}>Notificaciones</Text>
          </View>
        </View>
      </View>

      {/* Próxima Orden */}
      {nextOrder && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próxima Orden</Text>
          <TouchableOpacity
            style={styles.orderCard}
            onPress={() => navigation.navigate('OrderDetail', { orderId: nextOrder.id })}
            activeOpacity={0.8}
          >
            <View style={styles.orderCardHeader}>
              <View style={styles.orderCardTitle}>
                <Text style={styles.orderId}>{nextOrder.id}</Text>
                <Text style={styles.client}>{nextOrder.clientName}</Text>
              </View>
              <StatusBadge status={nextOrder.status} size="small" />
            </View>
            <Text style={styles.orderType}>{nextOrder.type}</Text>
            <Text style={styles.orderTime}>📅 {nextOrder.date} - {nextOrder.time}</Text>
            <Text style={styles.orderLocation}>📍 {nextOrder.location}</Text>
            {nextOrder.status === 'En Ejecución' && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigation.navigate('ExecuteService', { orderId: nextOrder.id })}
              >
                <Text style={styles.actionButtonText}>Continuar Servicio →</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>
      )}

      {/* Accesos Rápidos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accesos Rápidos</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => navigation.navigate('OrdersTab')}
          >
            <Text style={styles.quickActionIcon}>📋</Text>
            <Text style={styles.quickActionText}>Ver Órdenes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => navigation.navigate('PlaguesTab')}
          >
            <Text style={styles.quickActionIcon}>🐛</Text>
            <Text style={styles.quickActionText}>Control de Plagas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Text style={styles.quickActionIcon}>🔔</Text>
            <Text style={styles.quickActionText}>Notificaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickAction}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.quickActionIcon}>👤</Text>
            <Text style={styles.quickActionText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  greeting: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  orderCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3b82f6',
    borderLeftWidth: 4,
  },
  orderCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  orderCardTitle: {
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
  orderType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  orderTime: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  orderLocation: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickAction: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
})

export default HomeScreen
