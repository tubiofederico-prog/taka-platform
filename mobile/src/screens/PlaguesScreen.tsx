import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import StatusBadge from '../components/StatusBadge'
import { mockPlagues } from '../mockData'

interface PlaguesScreenProps {
  navigation: any
}

const PlaguesScreen: React.FC<PlaguesScreenProps> = ({ navigation }) => {
  const allTraps = mockPlagues.flatMap(p => p.traps.map(t => ({ ...t, clientName: p.clientName })))
  const pendingTraps = allTraps.filter(t => t.status === 'Pendiente')

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Control de Plagas</Text>
        <Text style={styles.subtitle}>Gestión de Trampas</Text>
      </View>

      {/* Resumen */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{allTraps.length}</Text>
          <Text style={styles.statLabel}>Trampas</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statValue, { color: '#10b981' }]}>
            {allTraps.filter(t => t.status === 'Activa').length}
          </Text>
          <Text style={styles.statLabel}>Activas</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statValue, { color: '#f59e0b' }]}>
            {pendingTraps.length}
          </Text>
          <Text style={styles.statLabel}>Pendientes</Text>
        </View>
      </View>

      {/* Alertas */}
      {pendingTraps.length > 0 && (
        <View style={styles.alertCard}>
          <Text style={styles.alertIcon}>⚠️</Text>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>{pendingTraps.length} trampas pendientes</Text>
            <Text style={styles.alertSubtitle}>Requieren revisión urgente</Text>
          </View>
        </View>
      )}

      {/* Lista de Trampas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mis Trampas</Text>
        {allTraps.map(trap => (
          <TouchableOpacity
            key={trap.id}
            style={styles.trapCard}
            onPress={() => navigation.navigate('TrapDetail', { trapId: trap.id })}
          >
            <View style={styles.trapHeader}>
              <View>
                <Text style={styles.trapCode}>Trampa {trap.code}</Text>
                <Text style={styles.trapLocation}>{trap.location}</Text>
              </View>
              <StatusBadge status={trap.status} size="small" />
            </View>
            <View style={styles.trapDetails}>
              <Text style={styles.trapDetail}>Última revisión: {trap.lastCheck}</Text>
              <View style={styles.baitBar}>
                <View
                  style={[
                    styles.baitFill,
                    { width: `${trap.bait}%` },
                  ]}
                />
              </View>
              <Text style={styles.baitText}>Cebo: {trap.bait}%</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 20 }} />
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
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  stat: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  alertCard: {
    backgroundColor: '#fef3c7',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  alertIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400e',
  },
  alertSubtitle: {
    fontSize: 12,
    color: '#b45309',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  trapCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  trapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  trapCode: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  trapLocation: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  trapDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 12,
  },
  trapDetail: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  baitBar: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 4,
  },
  baitFill: {
    height: '100%',
    backgroundColor: '#1e40af',
  },
  baitText: {
    fontSize: 11,
    color: '#6b7280',
  },
})

export default PlaguesScreen
