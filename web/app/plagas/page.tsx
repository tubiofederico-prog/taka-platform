'use client'

import { useState } from 'next'
import { Plus, Upload, AlertCircle } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import Modal from '@/components/ui/Modal'

const mockTraps = [
  { id: '1', code: 'T-001', location: 'Entrada Principal', status: 'Activa', lastCheck: '2024-05-24', bait: '70%' },
  { id: '2', code: 'T-002', location: 'Almacén', status: 'Pendiente', lastCheck: '2024-05-20', bait: '30%' },
  { id: '3', code: 'T-003', location: 'Cocina', status: 'Activa', lastCheck: '2024-05-25', bait: '85%' },
  { id: '4', code: 'T-004', location: 'Sótano', status: 'Inactiva', lastCheck: '2024-05-18', bait: '0%' },
]

export default function ControlDePlagas() {
  const [showNewClient, setShowNewClient] = useState(false)
  const [selectedTrap, setSelectedTrap] = useState<string | null>(null)

  const pendingTraps = mockTraps.filter(t => t.status === 'Pendiente')

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Control de Plagas</h1>
        <button onClick={() => setShowNewClient(true)} className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Nuevo Monitoreo</span>
        </button>
      </div>

      {/* Alertas */}
      {pendingTraps.length > 0 && (
        <div className="card bg-yellow-50 border-l-4 border-yellow-500">
          <div className="flex items-center space-x-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0" size={24} />
            <div>
              <h2 className="font-bold text-yellow-900">{pendingTraps.length} trampas pendientes de revisión</h2>
              <p className="text-sm text-yellow-800">Requieren inspección urgente</p>
            </div>
          </div>
        </div>
      )}

      {/* Vista de Plano Simulado */}
      <div className="card">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Plano de Control de Plagas</h2>
        <div className="relative w-full h-96 bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
          {/* Plano simulado */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                <Upload className="text-gray-300" size={48} />
              </div>
              <p className="text-gray-500">Carga un plano (JPG, PNG, PDF)</p>
            </div>

            {/* Puntos de trampas superpuestos */}
            {mockTraps.map((trap, idx) => (
              <button
                key={trap.id}
                onClick={() => setSelectedTrap(trap.id)}
                className={`absolute w-8 h-8 rounded-full border-2 font-bold text-xs text-white transition-all ${
                  trap.status === 'Activa'
                    ? 'bg-green-500 border-green-700'
                    : trap.status === 'Pendiente'
                    ? 'bg-yellow-500 border-yellow-700'
                    : 'bg-gray-400 border-gray-600'
                } flex items-center justify-center`}
                style={{
                  left: `${20 + idx * 20}%`,
                  top: `${30 + idx * 15}%`,
                }}
                title={trap.code}
              >
                {trap.code.split('-')[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabla de Trampas */}
      <div className="card overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Puntos de Control</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-cell text-left font-semibold text-gray-900">Código</th>
              <th className="table-cell text-left font-semibold text-gray-900">Ubicación</th>
              <th className="table-cell text-left font-semibold text-gray-900">Estado</th>
              <th className="table-cell text-left font-semibold text-gray-900">Última Revisión</th>
              <th className="table-cell text-left font-semibold text-gray-900">Cebo</th>
              <th className="table-cell text-right font-semibold text-gray-900">Acción</th>
            </tr>
          </thead>
          <tbody>
            {mockTraps.map(trap => (
              <tr key={trap.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="table-cell font-medium text-gray-900">{trap.code}</td>
                <td className="table-cell text-gray-600">{trap.location}</td>
                <td className="table-cell">
                  <StatusBadge
                    status={trap.status}
                    variant={
                      trap.status === 'Activa'
                        ? 'success'
                        : trap.status === 'Pendiente'
                        ? 'warning'
                        : 'default'
                    }
                  />
                </td>
                <td className="table-cell text-gray-600">{trap.lastCheck}</td>
                <td className="table-cell">
                  <div className="w-32">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: trap.bait }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{trap.bait}</p>
                  </div>
                </td>
                <td className="table-cell text-right">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    {trap.status === 'Pendiente' ? 'Revisar' : 'Editar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={showNewClient} onClose={() => setShowNewClient(false)} title="Nuevo Monitoreo" size="medium">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
            <select className="input-field">
              <option>Seleccionar cliente...</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Plaga</label>
            <select className="input-field">
              <option>Roedores</option>
              <option>Insectos</option>
              <option>Hormigas</option>
              <option>Cucarachas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cargar Plano</label>
            <input type="file" className="input-field" accept="image/*,.pdf" />
          </div>
          <div className="flex space-x-3">
            <button type="button" className="flex-1 btn-primary">Crear</button>
            <button type="button" onClick={() => setShowNewClient(false)} className="flex-1 btn-secondary">Cancelar</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
