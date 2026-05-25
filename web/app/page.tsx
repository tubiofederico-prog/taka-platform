'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  TrendingUp,
  FileText,
  ClipboardCheck,
  Users,
  AlertCircle,
  Plus,
  ChevronRight,
} from 'lucide-react'
import KPICard from '@/components/ui/KPICard'
import StatusBadge from '@/components/ui/StatusBadge'
import Modal from '@/components/ui/Modal'
import { mockOrders, mockQuotes, mockAlerts } from '@/lib/mockData'

export default function Dashboard() {
  const [showNewOrderModal, setShowNewOrderModal] = useState(false)
  const [showNewQuoteModal, setShowNewQuoteModal] = useState(false)

  const activeOrders = mockOrders.filter(o => ['En Ejecución', 'Programada'].includes(o.status)).length
  const unreadAlerts = mockAlerts.filter(a => !a.read).length
  const pendingQuotes = mockQuotes.filter(q => q.status !== 'Rechazada').length

  return (
    <div className="space-y-8 pt-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Dashboard Ejecutivo</h1>
        <p className="text-gray-500 mt-2">Bienvenido al panel de control de Taka</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-6">
        <KPICard title="Órdenes Activas" value={activeOrders} icon={ClipboardCheck} color="blue" trend={12} />
        <KPICard title="Servicios Programados" value="8" icon={FileText} color="purple" trend={5} />
        <KPICard title="Cotizaciones Pendientes" value={pendingQuotes} icon={TrendingUp} color="green" trend={-3} />
        <KPICard title="Técnicos en Campo" value="3" icon={Users} color="orange" trend={8} />
      </div>

      {/* Alertas Críticas */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
            <AlertCircle className="text-red-500" />
            <span>Alertas Críticas ({unreadAlerts})</span>
          </h2>
          <Link href="/alertas" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Ver todas
          </Link>
        </div>
        <div className="space-y-3">
          {mockAlerts.slice(0, 3).map(alert => (
            <div key={alert.id} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-red-500">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{alert.type}</p>
                <p className="text-sm text-gray-500">{alert.message}</p>
              </div>
              <StatusBadge status={alert.priority === 'Alta' ? 'Urgente' : 'Normal'} />
            </div>
          ))}
        </div>
      </div>

      {/* Accesos Rápidos y Órdenes */}
      <div className="grid grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="card">
          <h3 className="font-bold text-gray-900 mb-4">Accesos Rápidos</h3>
          <div className="space-y-3">
            <button
              onClick={() => setShowNewOrderModal(true)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <span className="flex items-center space-x-2">
                <Plus size={18} />
                <span>Crear Orden</span>
              </span>
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => setShowNewQuoteModal(true)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors"
            >
              <span className="flex items-center space-x-2">
                <Plus size={18} />
                <span>Crear Cotización</span>
              </span>
              <ChevronRight size={18} />
            </button>
            <Link
              href="/agenda"
              className="w-full flex items-center justify-between p-3 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
            >
              <span className="flex items-center space-x-2">
                <Plus size={18} />
                <span>Agendar Servicio</span>
              </span>
              <ChevronRight size={18} />
            </Link>
            <Link
              href="/reportes"
              className="w-full flex items-center justify-between p-3 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
            >
              <span className="flex items-center space-x-2">
                <Plus size={18} />
                <span>Ver Reportes</span>
              </span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Próximas Órdenes */}
        <div className="col-span-2 card">
          <h3 className="font-bold text-gray-900 mb-4">Próximas Órdenes</h3>
          <div className="space-y-3">
            {mockOrders.slice(0, 3).map(order => (
              <Link
                key={order.id}
                href={`/ordenes/${order.id}`}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.clientName} • {order.type}</p>
                  <p className="text-xs text-gray-400 mt-1">{order.date} - {order.time}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <StatusBadge status={order.status} />
                    <p className="text-xs text-gray-500 mt-1">{order.progress}%</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modales */}
      <Modal isOpen={showNewOrderModal} onClose={() => setShowNewOrderModal(false)} title="Crear Nueva Orden" size="medium">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
            <select className="input-field">
              <option>Seleccionar cliente...</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Servicio</label>
            <select className="input-field">
              <option>Fumigación</option>
              <option>Limpieza</option>
              <option>Mantenimiento</option>
              <option>Control de Plagas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea className="input-field" rows={3}></textarea>
          </div>
          <div className="flex space-x-3">
            <button className="flex-1 btn-primary">Crear Orden</button>
            <button onClick={() => setShowNewOrderModal(false)} className="flex-1 btn-secondary">Cancelar</button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={showNewQuoteModal} onClose={() => setShowNewQuoteModal(false)} title="Crear Nueva Cotización" size="medium">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
            <select className="input-field">
              <option>Seleccionar cliente...</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Servicio</label>
            <select className="input-field">
              <option>Fumigación Integral</option>
              <option>Limpieza Profunda</option>
              <option>Mantenimiento Mensual</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monto</label>
            <input type="number" className="input-field" placeholder="0.00" />
          </div>
          <div className="flex space-x-3">
            <button className="flex-1 btn-primary">Crear Cotización</button>
            <button onClick={() => setShowNewQuoteModal(false)} className="flex-1 btn-secondary">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
