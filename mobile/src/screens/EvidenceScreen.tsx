import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

interface EvidenceScreenProps {
  navigation: any
  route: any
}

const EvidenceScreen: React.FC<EvidenceScreenProps> = ({ navigation, route }) => {
  const { orderId } = route.params
  const [evidence, setEvidence] = useState([
    { id: '1', type: 'Antes', timestamp: '10:00', color: '#fee2e2' },
    { id: '2', type: 'Durante', timestamp: '10:45', color: '#fef3c7' },
  ])

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Carga de Evidencias</Text>
        <Text style={styles.subtitle}>Orden {orderId}</Text>
      </View>

      {/* Instrucciones */}
      <View style={styles.instructionsCard}>
        <Text style={styles.instructionsTitle}>📸 Cómo Cargar Evidencias</Text>
        <Text style={styles.instruction}>1. Antes: Estado inicial del área</Text>
        <Text style={styles.instruction}>2. Durante: Proceso de ejecución</Text>
        <Text style={styles.instruction}>3. Después: Resultado final</Text>
      </View>

      {/* Evidencias Cargadas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Evidencias Cargadas ({evidence.length})</Text>
        {evidence.map(photo => (
          <View key={photo.id} style={[styles.photoCard, { backgroundColor: photo.color }]}>
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoIcon}>📷</Text>
            </View>
            <View style={styles.photoInfo}>
              <Text style={styles.photoType}>{photo.type}</Text>
              <Text style={styles.photoTime}>{photo.timestamp}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteIcon}>×</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Botones de Carga */}
      <View style={styles.section}>
        <TouchableOpacity style={[styles.uploadButton, { backgroundColor: '#fee2e2' }]}>
          <Text style={styles.uploadIcon}>📷</Text>
          <Text style={styles.uploadText}>Foto Antes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.uploadButton, { backgroundColor: '#fef3c7' }]}>
          <Text style={styles.uploadIcon}>📷</Text>
          <Text style={styles.uploadText}>Foto Durante</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.uploadButton, { backgroundColor: '#dcfce7' }]}>
          <Text style={styles.uploadIcon}>📷</Text>
          <Text style={styles.uploadText}>Foto Después</Text>
        </TouchableOpacity>
      </View>

      {/* Acciones */}
      <View style={styles.section}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>✅ Confirmar Evidencias</Text>
        </TouchableOpacity>
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
  instructionsCard: {
    backgroundColor: '#eff6ff',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  instructionsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 12,
  },
  instruction: {
    fontSize: 13,
    color: '#1e40af',
    marginBottom: 6,
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
  photoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  photoPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoIcon: {
    fontSize: 28,
  },
  photoInfo: {
    flex: 1,
    marginLeft: 12,
  },
  photoType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  photoTime: {
    fontSize: 12,
    color: '#6b7280',
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 24,
    color: '#ef4444',
    fontWeight: 'bold',
  },
  uploadButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  uploadIcon: {
    fontSize: 32,
    marginBottom: 4,
  },
  uploadText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
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

export default EvidenceScreen
