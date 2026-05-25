# Taka Platform 🔧

**Prototipo Visual B2B Ultra Premium para Gestión Operativa Integral**

Plataforma completa de software para empresas de servicios (mantenimiento, limpieza, fumigación, control de plagas) con experiencias web y móvil totalmente integradas.

---

## 📦 Qué es Taka

Taka es un sistema modular que centraliza:
- ✅ **Gestión de Clientes** - CRM completo
- ✅ **Cotizaciones y Órdenes** - Pipeline comercial y operativo
- ✅ **Planificación** - Agenda y asignación de técnicos
- ✅ **Ejecución** - Checklist y evidencias en campo
- ✅ **Control de Plagas** - Gestión de trampas y monitoreo
- ✅ **Facturación y Cobranza** - Ciclo financiero completo
- ✅ **Reportes** - Analytics y KPIs
- ✅ **Alertas Inteligentes** - Sistema de notificaciones

**Diseñado para demos comerciales, listo para presentar a clientes empresariales.**

---

## 🏗️ Arquitectura

```
taka/
├── web/                      # Plataforma Web (Next.js)
│   ├── app/                  # 13 módulos principales
│   ├── components/           # Componentes reutilizables
│   └── lib/mockData.ts       # Datos ficticios realistas
│
└── mobile/                   # App Móvil (React Native)
    ├── src/screens/          # 10 pantallas
    ├── src/components/       # Componentes nativos
    └── src/mockData.ts       # Datos del técnico en campo
```

---

## 🚀 Stack Tecnológico

### Web (Versión Escritorio)
- **Framework**: Next.js 15 (App Router)
- **UI**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Gráficos**: Recharts (mockeados)
- **Manejo de Fechas**: date-fns

### Mobile (Versión Campo)
- **Framework**: React Native (Expo)
- **Navegación**: React Navigation
- **Lenguaje**: TypeScript
- **Cámara**: expo-camera
- **Localización**: expo-location
- **SVG**: react-native-svg

---

## 📂 Estructura de Carpetas Detallada

### Web (`/web`)

```
web/
├── app/
│   ├── page.tsx                           # Dashboard Ejecutivo
│   ├── layout.tsx                         # Layout principal
│   ├── globals.css                        # Estilos globales
│   ├── clientes/
│   │   ├── page.tsx                       # Listado de clientes
│   │   └── [id]/page.tsx                  # Detalle de cliente
│   ├── ordenes/
│   │   ├── page.tsx                       # Gestión de órdenes
│   │   └── [id]/page.tsx                  # Detalle de orden
│   ├── cotizaciones/
│   │   ├── page.tsx                       # Gestión comercial
│   │   └── [id]/page.tsx                  # Detalle de cotización
│   ├── agenda/page.tsx                    # Calendario y planificación
│   ├── tecnicos/
│   │   ├── page.tsx                       # Directorio de técnicos
│   │   └── [id]/page.tsx                  # Perfil del técnico
│   ├── insumos/page.tsx                   # Inventario
│   ├── plagas/page.tsx                    # Control de plagas
│   ├── facturacion/page.tsx               # Facturación
│   ├── alertas/page.tsx                   # Sistema de alertas
│   ├── reportes/page.tsx                  # Reportes y analytics
│   └── configuracion/page.tsx             # Configuración del sistema
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx                    # Navegación lateral
│   │   └── Header.tsx                     # Header superior
│   └── ui/
│       ├── KPICard.tsx                    # Cards de métricas
│       ├── StatusBadge.tsx                # Insignias de estado
│       └── Modal.tsx                      # Diálogos reutilizables
│
├── lib/mockData.ts                        # Base de datos mockeada
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

### Mobile (`/mobile`)

```
mobile/
├── src/
│   ├── screens/
│   │   ├── LoginScreen.tsx                # Login del técnico
│   │   ├── HomeScreen.tsx                 # Dashboard de inicio
│   │   ├── OrdersScreen.tsx               # Mis órdenes
│   │   ├── OrderDetailScreen.tsx          # Detalle de orden
│   │   ├── ExecuteServiceScreen.tsx       # Ejecución en campo
│   │   ├── EvidenceScreen.tsx             # Carga de fotos
│   │   ├── PlaguesScreen.tsx              # Control de plagas
│   │   ├── TrapDetailScreen.tsx           # Detalle de trampa
│   │   ├── ProfileScreen.tsx              # Perfil del técnico
│   │   └── NotificationsScreen.tsx        # Notificaciones
│   │
│   ├── components/
│   │   ├── StatusBadge.tsx                # Badge de estado
│   │   └── OrderCard.tsx                  # Card de orden
│   │
│   ├── types.ts                           # Tipos TypeScript
│   └── mockData.ts                        # Datos mockeados
│
├── App.tsx                                # Componente raíz
├── app.json                               # Configuración Expo
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Módulos Principales (WEB)

### 1. **Dashboard Ejecutivo**
- KPIs en tiempo real
- Gráficos de actividad
- Alertas críticas
- Accesos rápidos

### 2. **Gestión de Clientes**
- Búsqueda y filtros
- Detalle completo
- Historial de servicios
- Contactos y ubicaciones

### 3. **Gestión Comercial**
- Cotizaciones
- Estados: Borrador → Enviada → Aprobada → Convertida
- Conversión a órdenes

### 4. **Órdenes de Trabajo**
- Crear, asignar, programar
- Seguimiento de estado
- Asignación de técnicos
- Timeline de actividad

### 5. **Agenda**
- Vista diaria, semanal, mensual
- Filtros por técnico y cliente
- Creación rápida de eventos

### 6. **Gestión de Técnicos**
- Perfiles completos
- Especialidades
- Métricas de rendimiento
- Disponibilidad

### 7. **Insumos e Inventario**
- Control de stock
- Alertas de bajo stock
- Costos por insumo
- Movimientos de inventario

### 8. **Control de Plagas**
- Plano interactivo
- Puntos de trampa
- Revisiones y monitoreo
- Informes

### 9. **Facturación**
- Creación de facturas
- Seguimiento de pagos
- Estados: Pendiente → Pagada
- Exportación a PDF

### 10. **Cobranza**
- Aging de deuda
- Alertas de vencimiento
- Historial de pagos
- Monto pendiente por cliente

### 11. **Alertas Inteligentes**
- Órdenes sin técnico
- Stock bajo
- Facturas vencidas
- Trampas pendientes

### 12. **Reportes**
- Operativo
- Comercial
- Financiero
- Por técnico
- Por cliente

### 13. **Configuración**
- Usuarios y roles
- Permisos
- Datos de empresa
- Integraciones

---

## 📱 Pantallas Móviles (MOBILE)

1. **Login** - Acceso con rol
2. **Home** - Dashboard del día
3. **Órdenes** - Listado de servicios asignados
4. **Detalle de Orden** - Información completa
5. **Ejecución de Servicio** - Checklist interactivo
6. **Carga de Evidencias** - Fotos antes/durante/después
7. **Control de Plagas** - Gestión de trampas
8. **Detalle de Trampa** - Revisión y registro
9. **Notificaciones** - Alertas del sistema
10. **Perfil** - Información del técnico

---

## 🔄 Flujos Principales

### **Flujo Comercial**
```
Cliente → Cotización → Aprobación → Orden → Ejecución → Entrega → Factura → Cobro
```

### **Flujo Operativo**
```
Orden Creada → Asignar Técnico → Agendar → Ejecutar → Cargar Evidencias → Cerrar
```

### **Flujo de Plagas**
```
Plano Cargado → Ubicar Trampas → Revisar → Registrar → Generar Informe
```

---

## 📊 Datos Mockeados Realistas

### Clientes (5 ejemplos)
- Industrial Solutions SA (Empresa Privada)
- Municipalidad de Madrid (Entidad Gubernamental)
- García & Asociados (Empresa Privada)
- Juan López Rodríguez (Particular)
- Logística Global Iberia (Empresa Privada)

### Técnicos (4 profesionales)
- Carlos Mendoza - Fumigación, Control de Plagas
- María García - Limpieza, Desinfección
- Roberto Díaz - Impermeabilización, Reparación
- Ana Martínez - Fumigación, Inspecciones

### Estados Reales
- Órdenes en diferentes etapas
- Cotizaciones vencidas y vigentes
- Facturas pagadas y pendientes
- Trampas activas y revisadas

---

## 💡 Características Destacadas

✨ **100% Visual** - Interfaz profesional lista para presentar
🎯 **Totalmente Navegable** - Todos los botones tienen comportamiento visual
📊 **Datos Realistas** - Información mockeada coherente y creíble
🔐 **Componentes Reutilizables** - Arquitectura modular escalable
📱 **Responsive Design** - Se adapta a cualquier pantalla
🎨 **Ultra Premium** - Diseño corporativo de alto nivel
⚡ **Rendimiento** - Carga instantánea sin APIs externas
🔔 **Sistema de Alertas** - Notificaciones inteligentes

---

## 🚀 Instalación Rápida

### Web
```bash
cd web
npm install
npm run dev
# Abre http://localhost:3000
```

### Mobile
```bash
cd mobile
npm install
npm start
# Escanea con Expo Go
```

---

## 📖 Documentación

- [Web README](./web/README.md) - Detalles de la versión web
- [Mobile README](./mobile/README.md) - Detalles de la app móvil

---

## 🎓 Casos de Uso

✅ **Demo Comercial** - Presentar a prospectos
✅ **Prototipo Funcional** - MVP para validación
✅ **Documentación Visual** - Entender flujos del negocio
✅ **Training Interno** - Capacitar al equipo
✅ **Design System** - Base para desarrollo real
✅ **Proof of Concept** - Validar viabilidad

---

## 🔐 Notas de Seguridad

- ⚠️ **Sin Datos Reales** - Todo es mockeado
- ⚠️ **Sin APIs Externas** - Completamente aislado
- ⚠️ **Para Demostración** - No usar en producción
- ✅ **TypeScript** - Type-safe
- ✅ **Validaciones Básicas** - Inputs seguros

---

## 🚀 Próximos Pasos (Para Producción)

1. **Backend Real** - API en Node.js/Python/Go
2. **Base de Datos** - PostgreSQL/MongoDB
3. **Autenticación** - JWT/OAuth
4. **Cámara/GPS** - Integración real
5. **Sincronización** - Offline-first
6. **Push Notifications** - Firebase
7. **Analytics** - Tracking de eventos
8. **CI/CD** - Deployment automático

---

## 📝 Licencia

Taka Platform © 2024

---

## 🎯 Objetivo Final

> **Taka es un prototipo visual completo y profesional que permite demostrar cómo una empresa de servicios puede centralizar y automatizar completamente sus operaciones: desde la captación de clientes, pasando por la ejecución en campo, hasta la facturación y cobranza.**

Perfecto para:
- 🤝 Reuniones comerciales
- 💼 Presentaciones a inversores
- 👥 Capacitación de equipos
- 🎓 Documentación de requisitos
- 🔄 Validación de flujos de negocio

---

**¡Listo para usar! 🚀**
