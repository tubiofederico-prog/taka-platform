import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import StatusBadge from '../components/StatusBadge'
import { mockPlagues } from '../mockData'

interface TrapDetailScreenProps {
  navigation: any
  route: any
}

const TrapDetailScreen: React.FC<TrapDetailScreenProps> = ({ navigation, route }) => {
  const { trapId } = route.params
  const allTraps = mockPlagues.flatMap(p => p.traps)
  const trap = allTraps.find(t => t.id === trapId) || allTraps[0]
  const [notes, setNotes] = useState('')
  const [newBait, setNewBait] = useState(trap.bait.toString())

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Trampa {trap.code}</Text>
          <Text style={styles.location}>{trap.location}</Text>
        </View>
        <StatusBadge status={trap.status} size="large" />
      </View>

      {/* Información */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Código</Text>
          <Text style={styles.value}>{trap.code}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Ubicación</Text>
          <Text style={styles.value}>{trap.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Estado</Text>
          <StatusBadge status={trap.status} size="small" />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Última Revisión</Text>
          <Text style={styles.value}>{trap.lastCheck}</Text>
        </View>
      </View>

      {/* Cebo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Control de Cebo</Text>
        <View style={styles.baitContainer}>
          <Text style={styles.baitLabel}>Nivel Actual</Text>
          <View style={styles.baitBar}>
            <View
              style={[
                styles.baitFill,
                { width: `${trap.bait}%` },
              ]}
            />
          </View>
          <Text style={styles.baitPercentage}>{trap.bait}%</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Actualizar Nivel</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="0-100"
              value={newBait}
              onChangeText={setNewBait}
              keyboardType="numeric"
            />
            <Text style={styles.inputUnit}>%</Text>
          </View>
        </View>
      </View>

      {/* Observaciones */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Observaciones</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Agregar notas sobre la trampa..."
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />
      </View>

      {/* Acciones */}
      <View style={styles.section}>
        {trap.status === 'Pendiente' && (
          <TouchableOpacity
            style={[styles.button, styles.buttonSuccess]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>✅ Marcar como Revisada</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonSecondaryText}>Volver</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  location: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
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
  },
  baitContainer: {
    marginBottom: 16,
  },
  baitLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  baitBar: {
    height: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  baitFill: {
    height: '100%',
    backgroundColor: '#1e40af',
  },
  baitPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  inputGroup: {
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  inputUnit: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  textarea: {
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
  buttonSuccess: {
    backgroundColor: '#10b981',
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

export default TrapDetailScreen
