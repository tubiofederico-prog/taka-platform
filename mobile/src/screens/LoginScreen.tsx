import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'

interface LoginScreenProps {
  onLogin: () => void
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('carlos@taka.com')
  const [password, setPassword] = useState('••••••••')
  const [selectedRole, setSelectedRole] = useState('technician')

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>🔧 Taka</Text>
        <Text style={styles.title}>Plataforma Premium</Text>
        <Text style={styles.subtitle}>Gestión de Servicios de Campo</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.roleSelector}>
          <Text style={styles.label}>Seleccionar Rol</Text>
          <View style={styles.roleButtons}>
            <TouchableOpacity
              style={[
                styles.roleButton,
                selectedRole === 'technician' && styles.roleButtonActive,
              ]}
              onPress={() => setSelectedRole('technician')}
            >
              <Text style={[
                styles.roleButtonText,
                selectedRole === 'technician' && styles.roleButtonTextActive,
              ]}>
                👨‍🔧 Técnico
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.roleButton,
                selectedRole === 'supervisor' && styles.roleButtonActive,
              ]}
              onPress={() => setSelectedRole('supervisor')}
            >
              <Text style={[
                styles.roleButtonText,
                selectedRole === 'supervisor' && styles.roleButtonTextActive,
              ]}>
                👨‍💼 Supervisor
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="usuario@taka.com"
            value={email}
            onChangeText={setEmail}
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            editable={false}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={onLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.credentials}>
        <Text style={styles.credentialsTitle}>Credenciales de Demostración</Text>
        <View style={styles.credentialItem}>
          <Text style={styles.credentialLabel}>Técnico:</Text>
          <Text style={styles.credentialValue}>carlos@taka.com</Text>
        </View>
        <View style={styles.credentialItem}>
          <Text style={styles.credentialLabel}>Supervisor:</Text>
          <Text style={styles.credentialValue}>supervisor@taka.com</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9fafb',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  roleSelector: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  roleButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    alignItems: 'center',
  },
  roleButtonActive: {
    borderColor: '#1e40af',
    backgroundColor: '#eff6ff',
  },
  roleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  roleButtonTextActive: {
    color: '#1e40af',
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#1e40af',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  credentials: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#1e40af',
  },
  credentialsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 12,
  },
  credentialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  credentialLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  credentialValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
})

export default LoginScreen
