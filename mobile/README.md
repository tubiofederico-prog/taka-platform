# Taka Platform - Mobile (React Native)

Aplicación móvil premium para técnicos de campo que ejecutan servicios de mantenimiento, limpieza, fumigación y control de plagas.

## 🚀 Características

- **Login Seguro**: Acceso con rol de técnico o supervisor
- **Home Dashboard**: Resumen del día, próxima orden y accesos rápidos
- **Mis Órdenes**: Listado filtrable de órdenes asignadas
- **Detalle de Orden**: Información completa con checklist operativo
- **Ejecución de Servicio**: Checklist interactivo con timer y observaciones
- **Carga de Evidencias**: Fotos antes, durante y después del servicio
- **Control de Plagas**: Gestión de trampas con ubicación y cebo
- **Detalle de Trampa**: Registro de revisiones y nivel de cebo
- **Notificaciones**: Sistema de alertas en tiempo real
- **Perfil de Usuario**: Información personal y estadísticas

## 📋 Instalación

### Requisitos
- Node.js 18+
- npm o yarn
- Expo CLI (`npm install -g expo-cli`)
- iPhone o Android para testing

### Pasos

```bash
# 1. Entrar a la carpeta mobile
cd mobile

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm start

# 4. Abrir en Android o iOS
# Escanear QR con:
# - Expo Go (iPhone/Android)
# - Android Emulator
# - iOS Simulator
```

## 📁 Estructura del Proyecto

```
mobile/
├── src/
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── OrdersScreen.tsx
│   │   ├── OrderDetailScreen.tsx
│   │   ├── ExecuteServiceScreen.tsx
│   │   ├── EvidenceScreen.tsx
│   │   ├── PlaguesScreen.tsx
│   │   ├── TrapDetailScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── NotificationsScreen.tsx
│   ├── components/
│   │   ├── StatusBadge.tsx
│   │   └── OrderCard.tsx
│   ├── types.ts
│   └── mockData.ts
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Navegación

### Bottom Tab Navigator
- **Inicio**: Dashboard del técnico
- **Órdenes**: Mis órdenes de trabajo
- **Plagas**: Control de plagas
- **Notificaciones**: Alertas y mensajes
- **Perfil**: Información personal

### Stack Navigator (por Tab)
Cada tab tiene su propio stack de navegación para vistas detalladas

## 🔄 Flujos Principales

### 1. Ejecutar Orden
1. Home → Ver próxima orden
2. Iniciar servicio
3. Completar checklist
4. Cargar evidencias
5. Firma del cliente
6. Finalizar

### 2. Control de Plagas
1. Tab Plagas → Listar trampas
2. Seleccionar trampa
3. Registrar revisión
4. Actualizar nivel de cebo
5. Agregar observaciones
6. Guardar

### 3. Gestión de Notificaciones
1. Tab Notificaciones
2. Ver alertas (nuevas órdenes, cambios de agenda, etc.)
3. Marcar como leída
4. Acceder a detalle relacionado

## 💾 Datos Mockeados

```typescript
// mockData.ts contiene:
- 3 órdenes en diferentes estados
- 1 cliente con múltiples trampas
- 1 perfil de técnico
- 3 notificaciones
```

## 🎯 Credenciales de Demostración

**Técnico**
- Email: carlos@taka.com
- Rol: Técnico

**Supervisor**
- Email: supervisor@taka.com
- Rol: Supervisor

## 🔒 Seguridad

- Validaciones de entrada
- TypeScript para type-safety
- Gestión de permisos (cámara, localización)
- Datos sensibles en contexto local

## 📱 Dispositivos Soportados

- ✅ iPhone 12+
- ✅ Android 10+
- ✅ iPad Pro
- ✅ Android Tablets

## 🚀 Build para Producción

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

## 📝 Notas

- Sin conexión real a backend
- Todos los datos son mockeados
- Perfecto para demostraciones comerciales
- Interfaz completamente funcional

## 🔮 Próximas Mejoras

- Integración con backend real
- Cámara y almacenamiento de fotos
- GPS y mapas
- Sincronización offline
- Push notifications reales
- Firma digital

## 📄 Licencia

Taka Platform © 2024
