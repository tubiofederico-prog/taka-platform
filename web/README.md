# Taka Platform - Web (Next.js)

Plataforma B2B ultra premium para gestión operativa de empresas de servicios de mantenimiento, limpieza, fumigación y control de plagas.

## 🚀 Características

- **Dashboard Ejecutivo**: KPIs, gráficos, alertas críticas y accesos rápidos
- **Gestión de Clientes**: Listado, búsqueda, filtros y detalle con historial
- **Cotizaciones**: Creación, seguimiento y conversión a órdenes
- **Órdenes de Trabajo**: Gestión completa con asignación de técnicos
- **Agenda y Planificación**: Vistas diaria, semanal y mensual
- **Gestión de Técnicos**: Perfiles, especialidades, métricas y disponibilidad
- **Insumos y Inventario**: Control de stock, alertas y costos
- **Control de Plagas**: Plano interactivo con puntos de trampas
- **Facturación**: Creación, seguimiento y descarga de facturas
- **Cobranza**: Aging de deuda y alertas de vencimiento
- **Alertas Inteligentes**: Sistema de notificaciones en tiempo real
- **Reportes**: Múltiples reportes con gráficos mockeados
- **Configuración**: Usuarios, roles, permisos e integraciones

## 📋 Instalación

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Entrar a la carpeta web
cd web

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:3000
```

## 📁 Estructura del Proyecto

```
web/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── globals.css         # Estilos globales
│   ├── page.tsx            # Dashboard
│   ├── clientes/           # Gestión de clientes
│   ├── ordenes/            # Gestión de órdenes
│   ├── cotizaciones/       # Gestión de cotizaciones
│   ├── agenda/             # Planificación
│   ├── tecnicos/           # Gestión de técnicos
│   ├── insumos/            # Inventario
│   ├── plagas/             # Control de plagas
│   ├── facturacion/        # Facturación
│   ├── alertas/            # Alertas
│   ├── reportes/           # Reportes
│   └── configuracion/      # Configuración
├── components/
│   ├── layout/             # Sidebar, Header
│   └── ui/                 # KPICard, StatusBadge, Modal, etc.
├── lib/
│   └── mockData.ts         # Datos mockeados
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Componentes Disponibles

- **Sidebar**: Navegación lateral con menú completo
- **Header**: Buscador, notificaciones, perfil de usuario
- **KPICard**: Cards de métricas con iconos y tendencias
- **StatusBadge**: Insignias de estado con colores automáticos
- **Modal**: Diálogos reutilizables
- **DataTable**: Tablas con headers y estilos

## 🔄 Flujos Principales

### 1. Crear Cotización → Orden → Compra → Entrega
- Dashboard → "Crear Cotización"
- Cotizaciones → Estado "Aprobada"
- Crear Orden desde cotización
- Asignar técnico
- Agendar servicio
- Ejecutar y cerrar

### 2. Control de Plagas
- Plagas → "Nuevo Monitoreo"
- Cargar plano del cliente
- Ubicar trampas en el plano
- Revisar trampas
- Generar informe

### 3. Facturación y Cobranza
- Órdenes entregadas → Pendiente de Facturación
- Facturación → "Nueva Factura"
- Marcar como facturada
- Seguimiento de cobro
- Alertas de vencimiento

## 📊 Datos Mockeados

Todos los datos están en `lib/mockData.ts`:
- 5 clientes de ejemplo
- 4 técnicos profesionales
- 5 órdenes en diferentes estados
- 4 cotizaciones
- 4 facturas
- 5 insumos/materiales
- 4 alertas críticas
- 4 usuarios del sistema

## 🎯 Navegación

Todas las páginas son navegables desde la **Sidebar**:
- Dashboard
- Clientes
- Cotizaciones
- Órdenes
- Agenda
- Técnicos
- Insumos
- Control de Plagas
- Facturación
- Alertas
- Reportes
- Configuración

## 💡 Notas de Desarrollo

- Sin conexión real a bases de datos
- Sin APIs reales
- Todos los datos son mockeados
- Los modales y formularios son completamente funcionales visualmente
- Los estados se pueden cambiar manualmente en mockData.ts
- Ideal para demostraciones comerciales

## 🚀 Próximos Pasos

Para hacer este prototipo completamente funcional:
1. Conectar a un backend real
2. Implementar autenticación
3. Agregar validaciones en formularios
4. Implementar carga de archivos reales
5. Agregar paginación en tablas
6. Implementar búsqueda real
7. Agregar más gráficos interactivos

## 📄 Licencia

Taka Platform © 2024
