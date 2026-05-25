'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Filter, ChevronRight } from 'lucide-react'
import Modal from '@/components/ui/Modal'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockClients } from '@/lib/mockData'

export default function Clientes() {
  const [showNewClientModal, setShowNewClientModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('Todos')

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'Todos' || client.type === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Gestión de Clientes</h1>
          <p className="text-gray-500 mt-2">Administra la base de datos de clientes</p>
        </div>
        <button
          onClick={() => setShowNewClientModal(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Nuevo Cliente</span>
        </button>
      </div>

      {/* Búsqueda y Filtros */}
      <div className="card flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="input-field w-48"
        >
          <option>Todos</option>
          <option>Empresa Privada</option>
          <option>Entidad Gubernamental</option>
          <option>Cliente Particular</option>
        </select>
        <button className="btn-secondary flex items-center space-x-2">
          <Filter size={18} />
          <span>Filtros</span>
        </button>
      </div>

      {/* Tabla de Clientes */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-cell text-left font-semibold text-gray-900">Nombre</th>
              <th className="table-cell text-left font-semibold text-gray-900">Tipo</th>
              <th className="table-cell text-left font-semibold text-gray-900">Contacto</th>
              <th className="table-cell text-left font-semibold text-gray-900">Órdenes</th>
              <th className="table-cell text-left font-semibold text-gray-900">Gasto Total</th>
              <th className="table-cell text-left font-semibold text-gray-900">Estado</th>
              <th className="table-cell text-right font-semibold text-gray-900">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map(client => (
              <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="table-cell font-medium text-gray-900">{client.name}</td>
                <td className="table-cell text-gray-600">{client.type}</td>
                <td className="table-cell text-gray-600">
                  <div>
                    <p className="text-sm">{client.email}</p>
                    <p className="text-xs text-gray-500">{client.phone}</p>
                  </div>
                </td>
                <td className="table-cell text-gray-600 font-medium">{client.totalOrders}</td>
                <td className="table-cell text-gray-600 font-medium">${client.totalSpent.toLocaleString()}</td>
                <td className="table-cell">
                  <StatusBadge status={client.status} variant="success" />
                </td>
                <td className="table-cell text-right">
                  <Link
                    href={`/clientes/${client.id}`}
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

      {/* Modal Nuevo Cliente */}
      <Modal isOpen={showNewClientModal} onClose={() => setShowNewClientModal(false)} title="Crear Nuevo Cliente" size="large">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Cliente</label>
              <input type="text" className="input-field" placeholder="Ingrese el nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Cliente</label>
              <select className="input-field">
                <option>Empresa Privada</option>
                <option>Entidad Gubernamental</option>
                <option>Cliente Particular</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="input-field" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input type="tel" className="input-field" placeholder="+34 123 456 789" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección Principal</label>
              <input type="text" className="input-field" placeholder="Calle, número, ciudad" />
            </div>
          </div>

          <div className="flex space-x-3">
            <button type="button" className="flex-1 btn-primary">Crear Cliente</button>
            <button
              type="button"
              onClick={() => setShowNewClientModal(false)}
              className="flex-1 btn-secondary"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
