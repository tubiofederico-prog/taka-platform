'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Filter, ChevronRight } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockOrders } from '@/lib/mockData'

export default function Ordenes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('Todos')

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'Todos' || order.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const statuses = ['Todos', 'Pendiente', 'Programada', 'En Ejecución', 'Finalizada', 'Cancelada']

  return (
    <div className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Órdenes de Trabajo</h1>
          <p className="text-gray-500 mt-2">Gestiona todas las órdenes de servicio</p>
        </div>
        <Link href="/" className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Nueva Orden</span>
        </Link>
      </div>

      {/* Búsqueda y Filtros */}
      <div className="card space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por ID, cliente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button className="btn-secondary flex items-center space-x-2">
            <Filter size={18} />
            <span>Filtros Avanzados</span>
          </button>
        </div>

        {/* Estado Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Tabla de Órdenes */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-cell text-left font-semibold text-gray-900">ID Orden</th>
              <th className="table-cell text-left font-semibold text-gray-900">Cliente</th>
              <th className="table-cell text-left font-semibold text-gray-900">Servicio</th>
              <th className="table-cell text-left font-semibold text-gray-900">Fecha</th>
              <th className="table-cell text-left font-semibold text-gray-900">Técnico</th>
              <th className="table-cell text-left font-semibold text-gray-900">Estado</th>
              <th className="table-cell text-left font-semibold text-gray-900">Progreso</th>
              <th className="table-cell text-right font-semibold text-gray-900">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="table-cell font-medium text-gray-900">{order.id}</td>
                <td className="table-cell text-gray-600">{order.clientName}</td>
                <td className="table-cell text-gray-600">{order.type}</td>
                <td className="table-cell text-gray-600">{order.date}</td>
                <td className="table-cell text-gray-600">{order.technicianName}</td>
                <td className="table-cell">
                  <StatusBadge status={order.status} />
                </td>
                <td className="table-cell">
                  <div className="w-32">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${order.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{order.progress}%</p>
                  </div>
                </td>
                <td className="table-cell text-right">
                  <Link
                    href={`/ordenes/${order.id}`}
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1"
                  >
                    <span>Ver</span>
                    <ChevronRight size={16} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
