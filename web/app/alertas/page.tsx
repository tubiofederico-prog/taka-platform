'use client'

import Link from 'next/link'
import { AlertCircle, CheckCircle, Trash2 } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockAlerts } from '@/lib/mockData'

export default function Alertas() {
  const unreadAlerts = mockAlerts.filter(a => !a.read)
  const readAlerts = mockAlerts.filter(a => a.read)

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Alertas Inteligentes</h1>
        {unreadAlerts.length > 0 && (
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Marcar todo como leído
          </button>
        )}
      </div>

      {/* Alertas Sin Leer */}
      {unreadAlerts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Sin Leer ({unreadAlerts.length})</h2>
          <div className="space-y-3">
            {unreadAlerts.map(alert => (
              <div
                key={alert.id}
                className="card border-l-4 border-red-500 bg-red-50 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-gray-900">{alert.type}</p>
                      <p className="text-gray-600">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.createdAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <StatusBadge
                      status={alert.priority}
                      variant={alert.priority === 'Alta' ? 'error' : 'warning'}
                    />
                    <div className="flex items-center space-x-2">
                      <Link
                        href={alert.type.includes('Orden') ? `/ordenes/${alert.relatedId}` : '/'}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Ver
                      </Link>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alertas Leídas */}
      {readAlerts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Leídas ({readAlerts.length})</h2>
          <div className="space-y-3">
            {readAlerts.map(alert => (
              <div key={alert.id} className="card border-l-4 border-gray-300 opacity-75">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-gray-900">{alert.type}</p>
                      <p className="text-gray-600">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.createdAt}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mockAlerts.length === 0 && (
        <div className="card text-center py-12">
          <AlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">No hay alertas</p>
        </div>
      )}
    </div>
  )
}
