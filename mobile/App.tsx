import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'

// Screens
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import OrdersScreen from './src/screens/OrdersScreen'
import OrderDetailScreen from './src/screens/OrderDetailScreen'
import ExecuteServiceScreen from './src/screens/ExecuteServiceScreen'
import EvidenceScreen from './src/screens/EvidenceScreen'
import PlaguesScreen from './src/screens/PlaguesScreen'
import TrapDetailScreen from './src/screens/TrapDetailScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import NotificationsScreen from './src/screens/NotificationsScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#e5e7eb',
        borderBottomWidth: 1,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerTintColor: '#1e40af',
    }}
  >
    <Stack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{ title: 'Inicio' }}
    />
    <Stack.Screen
      name="OrderDetail"
      component={OrderDetailScreen}
      options={{ title: 'Detalle de Orden' }}
    />
    <Stack.Screen
      name="ExecuteService"
      component={ExecuteServiceScreen}
      options={{ title: 'Ejecutar Servicio' }}
    />
    <Stack.Screen
      name="Evidence"
      component={EvidenceScreen}
      options={{ title: 'Cargar Evidencias' }}
    />
  </Stack.Navigator>
)

const OrdersStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#e5e7eb',
        borderBottomWidth: 1,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerTintColor: '#1e40af',
    }}
  >
    <Stack.Screen
      name="OrdersStack"
      component={OrdersScreen}
      options={{ title: 'Mis Órdenes' }}
    />
    <Stack.Screen
      name="OrderDetail"
      component={OrderDetailScreen}
      options={{ title: 'Detalle de Orden' }}
    />
    <Stack.Screen
      name="ExecuteService"
      component={ExecuteServiceScreen}
      options={{ title: 'Ejecutar Servicio' }}
    />
  </Stack.Navigator>
)

const PlaguesStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#e5e7eb',
        borderBottomWidth: 1,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerTintColor: '#1e40af',
    }}
  >
    <Stack.Screen
      name="PlaguesStack"
      component={PlaguesScreen}
      options={{ title: 'Control de Plagas' }}
    />
    <Stack.Screen
      name="TrapDetail"
      component={TrapDetailScreen}
      options={{ title: 'Detalle de Trampa' }}
    />
  </Stack.Navigator>
)

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1e40af',
      tabBarInactiveTintColor: '#9ca3af',
      tabBarStyle: {
        borderTopColor: '#e5e7eb',
        borderTopWidth: 1,
        paddingBottom: 8,
        height: 60,
      },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStackNavigator}
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>🏠</Text>,
      }}
    />
    <Tab.Screen
      name="OrdersTab"
      component={OrdersStackNavigator}
      options={{
        tabBarLabel: 'Órdenes',
        tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>📋</Text>,
      }}
    />
    <Tab.Screen
      name="PlaguesTab"
      component={PlaguesStackNavigator}
      options={{
        tabBarLabel: 'Plagas',
        tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>🐛</Text>,
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarLabel: 'Notificaciones',
        tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>🔔</Text>,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>👤</Text>,
      }}
    />
  </Tab.Navigator>
)

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!isLoggedIn ? (
            <Stack.Screen
              name="Login"
              component={() => <LoginScreen onLogin={() => setIsLoggedIn(true)} />}
            />
          ) : (
            <Stack.Screen name="MainApp" component={BottomTabNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
