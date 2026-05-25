import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { mockTechnicianOrders } from '../mockData'

interface ExecuteServiceScreenProps {
  navigation: any
  route: any
}

const ExecuteServiceScreen: React.FC<ExecuteServiceScreenProps> = ({ navigation, route }) => {
  const { orderId } = route.params
  const order = mockTechnicianOrders.find(o => o.id === orderId) || mockTechnicianOrders[0]
  const [checkedItems, setCheckedItems] = useState<string[]>(
    order.checklistItems.filter(i => i.completed).map(i => i.id)
  )
  const [notes, setNotes] = useState('')
  const [startTime] = useState(new Date().toLocaleTimeString())

  const toggleCheckItem = (itemId: string) => {
    setCheckedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
      )
  }

  const allCompleted = checkedItems.length === order.checklistItems.length

  return (
    <ScrollView style={styles.container}>
      {/* Timer */}
      <View style={styles.header}>
        <View style={styles.timerCard}>
          <Text style={styles.timerLabel}>Tiempo Transcurrido</Text>
          <Text style={styles.timerValue}>00:45:30</Text>
          <Text style={styles.startTime}>Iniciado: {startTime}</Text>
        </View>
      </View>

      {/* Checklist */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Checklist de Ejecución</Text>
        <Text style={styles.progress}>
          {checkedItems.length} de {order.checklistItems.length} completados
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(checkedItems.length / order.checklistItems.length) * 100}%` },
            ]}
          />
        </View>

        {order.checklistItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.checklistItem}
            onPress={() => toggleCheckItem(item.id)}
          >
            <Text style={styles.checkbox}>
              {checkedItems.includes(item.id) ? '✅' : '☐'}
            </Text>
            <Text style={[
              styles.itemText,
              checkedItems.includes(item.id) && styles.itemTextCompleted,
            ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Observaciones */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Observaciones</Text>
        <TextInput
          style={styles.input}
          placeholder="Agregar notas sobre el servicio..."
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />
      </View>

      {/* Acciones */}
      <View style={styles.section}>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Evidence', { orderId })}
        >
          <Text style={styles.buttonSecondaryText}>📸 Cargar Evidencias</Text>
        </TouchableOpacity>

        {allCompleted && (
          <TouchableOpacity
            style={[styles.button, styles.buttonSuccess]}
            onPress={() => navigation.navigate('OrderDetail', { orderId })}
          >
            <Text style={styles.buttonText}>✅ Finalizar Servicio</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  timerCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1e40af',
  },
  timerLabel: {
    fontSize: 14,
    color: '#1e40af',
    marginBottom: 8,
  },
  timerValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 4,
  },
  startTime: {
    fontSize: 12,
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
  progress: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10b981',
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  checkbox: {
    fontSize: 20,
    marginRight: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#111827',
    flex: 1,
  },
  itemTextCompleted: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  buttonSecondaryText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSuccess: {
    backgroundColor: '#10b981',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default ExecuteServiceScreen
