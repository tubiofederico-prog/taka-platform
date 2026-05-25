'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  FileText,
  Briefcase,
  Calendar,
  Package,
  Zap,
  BarChart3,
  Settings,
  LogOut,
  Bug,
  ShoppingCart,
} from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()

  const menuItems = [
    { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/clientes', icon: Users, label: 'Clientes' },
    { href: '/cotizaciones', icon: FileText, label: 'Cotizaciones' },
    { href: '/ordenes', icon: Briefcase, label: 'Órdenes' },
    { href: '/agenda', icon: Calendar, label: 'Agenda' },
    { href: '/tecnicos', icon: Users, label: 'Técnicos' },
    { href: '/insumos', icon: Package, label: 'Insumos' },
    { href: '/plagas', icon: Bug, label: 'Control de Plagas' },
    { href: '/facturacion', icon: ShoppingCart, label: 'Facturación' },
    { href: '/alertas', icon: Zap, label: 'Alertas' },
    { href: '/reportes', icon: BarChart3, label: 'Reportes' },
    { href: '/configuracion', icon: Settings, label: 'Configuración' },
  ]

  return (
    <aside className="sidebar">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-primary">Taka</h1>
        <p className="text-xs text-gray-500 mt-1">Platform</p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-primary font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 pt-4 border-t border-gray-200">
        <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full transition-colors">
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
