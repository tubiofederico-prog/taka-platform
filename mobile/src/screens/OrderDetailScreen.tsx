import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import StatusBadge from '../components/StatusBadge'
import { mockTechnicianOrders } from '../mockData'

interface OrderDetailScreenProps {
  navigation: any
  route: any
}

const OrderDetailScreen: React.FC<OrderDetailScreenProps> = ({ navigation, route }) => {
  const { orderId } = route.params
  const order = mockTechnicianOrders.find(o => o.id === orderId) || mockTechnicianOrders[0]
  const [expandedChecklist, setExpandedChecklist] = useState(true)

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.orderId}>{order.id}</Text>
          <Text style={styles.client}>{order.clientName}</Text>
        </View>
        <StatusBadge status={order.status} size="large" />
      </View>

      {/* Información General */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Tipo</Text>
          <Text style={styles.value}>{order.type}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Fecha</Text>
          <Text style={styles.value}>{order.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Hora</Text>
          <Text style={styles.value}>{order.time}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Ubicación</Text>
          <Text style={styles.value}>{order.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Dirección</Text>
          <Text style={styles.value}>{order.address}</Text>
        </View>
        {order.priority === 'Alta' && (
          <View style={[styles.infoRow, { backgroundColor: '#fee2e2', borderRadius: 8, padding: 8 }]}>
            <Text style={[styles.label, { color: '#dc2626' }]}>⚠️ Prioridad</Text>
            <Text style={[styles.value, { color: '#dc2626' }]}>ALTA</Text>
          </View>
        )}
      </View>

      {/* Descripción */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{order.description}</Text>
      </View>

      {/* Insumos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Insumos Requeridos</Text>
        {order.supplies.map((supply, index) => (
          <View key={index} style={styles.supplyItem}>
            <Text style={styles.supplyName}>✓ {supply}</Text>
          </View>
        ))}
      </View>

      {/* Checklist */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.checklistHeader}
          onPress={() => setExpandedChecklist(!expandedChecklist)}
        >
          <Text style={styles.sectionTitle}>Checklist Operativo</Text>
          <Text style={styles.expandIcon}>{expandedChecklist ? '▼' : '▶'}</Text>
        </TouchableOpacity>

        {expandedChecklist && (
          <View style={styles.checklistContainer}>
            {order.checklistItems.map(item => (
              <View key={item.id} style={styles.checklistItem}>
                <Text style={styles.checkbox}>{item.completed ? '✅' : '⭕'}</Text>
                <Text style={[
                  styles.checklistItemText,
                  item.completed && styles.checklistItemCompleted,
                ]}>
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Botones de Acción */}
      <View style={styles.section}>
        {order.status === 'Programada' && (
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => navigation.navigate('ExecuteService', { orderId: order.id })}
          >
            <Text style={styles.buttonText}>Iniciar Servicio</Text>
          </TouchableOpacity>
        )}

        {order.status === 'En Ejecución' && (
          <>
            <TouchableOpacity
              style={[styles.button, styles.buttonPrimary]}
              onPress={() => navigation.navigate('ExecuteService', { orderId: order.id })}
            >
              <Text style={styles.buttonText}>Continuar Servicio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={() => navigation.navigate('Evidence', { orderId: order.id })}
            >
              <Text style={styles.buttonSecondaryText}>Cargar Evidencias</Text>
            </TouchableOpacity>
          </>
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  client: {
    fontSize: 14,
    color: '#6b7280',
  },
  section: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    textAlign: 'right',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  supplyItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  supplyName: {
    fontSize: 14,
    color: '#111827',
  },
  checklistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandIcon: {
    fontSize: 14,
    color: '#6b7280',
  },
  checklistContainer: {
    marginTop: 12,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  checkbox: {
    fontSize: 16,
    marginRight: 12,
  },
  checklistItemText: {
    fontSize: 14,
    color: '#111827',
    flex: 1,
  },
  checklistItemCompleted: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonPrimary: {
    backgroundColor: '#1e40af',
  },
  buttonSecondary: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondaryText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default OrderDetailScreen
