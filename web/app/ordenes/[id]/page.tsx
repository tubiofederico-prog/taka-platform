'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, User, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import Modal from '@/components/ui/Modal'
import { mockOrders, mockTechnicians } from '@/lib/mockData'

export default function OrderDetail({ params }: { params: { id: string } }) {
  const order = mockOrders.find(o => o.id === params.id) || mockOrders[0]
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [selectedTechnician, setSelectedTechnician] = useState(order.technicianId)

  return (
    <div className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/ordenes" className="text-blue-600 hover:text-blue-700">
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{order.id}</h1>
            <p className="text-gray-500 mt-1">{order.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <StatusBadge status={order.status} />
          {order.priority === 'Alta' && (
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
              Prioridad Alta
            </span>
          )}
        </div>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-3 gap-6">
        {/* Información General */}
        <div className="col-span-2 space-y-6">
          {/* Datos Principales */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Información General</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Cliente</p>
                <Link href={`/clientes/${order.clientId}`} className="text-lg font-medium text-blue-600 hover:text-blue-700">
                  {order.clientName}
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tipo de Servicio</p>
                <p className="text-lg font-medium text-gray-900">{order.type}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Fecha y Hora</p>
                  <p className="font-medium text-gray-900">{order.date} a las {order.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-medium text-gray-900">{order.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Técnico Asignado */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <User size={20} />
                <span>Técnico Asignado</span>
              </h2>
              <button
                onClick={() => setShowAssignModal(true)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Cambiar
              </button>
            </div>
            {selectedTechnician ? (
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  CM
                </div>
                <div>
                  <p className="font-medium text-gray-900">{order.technicianName}</p>
                  <p className="text-sm text-gray-500">{order.technicianName === 'Sin asignar' ? 'No asignado' : 'Técnico en campo'}</p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 font-medium">Sin técnico asignado</p>
              </div>
            )}
          </div>

          {/* Insumos */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Insumos Requeridos</h2>
            <div className="space-y-2">
              {order.supplies.map((supply, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-gray-900 font-medium">{supply}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Ver Stock</button>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline de Actividad */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Timeline de Actividad</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-200 mt-2"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="font-medium text-gray-900">Orden Creada</p>
                  <p className="text-sm text-gray-500">{order.createdAt} por Fernando Rodríguez</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-200 mt-2"></div>
                </div>
                <div className="pt-1">
                  <p className="font-medium text-gray-900">Técnico Asignado</p>
                  <p className="text-sm text-gray-500">2024-05-23 a {order.technicianName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Acciones */}
        <div className="space-y-4">
          {/* Progreso */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3">Progreso</h3>
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${order.progress}%` }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{order.progress}% completado</p>
            </div>
          </div>

          {/* Acciones Rápidas */}
          <div className="card space-y-3">
            <h3 className="font-bold text-gray-900">Acciones</h3>
            <button className="w-full btn-primary text-sm">Iniciar Servicio</button>
            <button className="w-full btn-secondary text-sm">Cargar Evidencia</button>
            <button className="w-full btn-secondary text-sm">Agregar Comentario</button>
            <button className="w-full btn-secondary text-sm">Reprogramar</button>
            {order.status === 'En Ejecución' && (
              <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 text-sm">
                Finalizar Servicio
              </button>
            )}
          </div>

          {/* Información Adicional */}
          <div className="card space-y-3">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Estado</p>
              <StatusBadge status={order.status} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Creada</p>
              <p className="text-sm font-medium text-gray-900">{order.createdAt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Asignar Técnico */}
      <Modal isOpen={showAssignModal} onClose={() => setShowAssignModal(false)} title="Asignar Técnico" size="medium">
        <div className="space-y-4">
          <div className="space-y-3">
            {mockTechnicians.map(tech => (
              <label key={tech.id} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="technician"
                  value={tech.id}
                  checked={selectedTechnician === tech.id}
                  onChange={(e) => setSelectedTechnician(e.target.value)}
                  className="w-4 h-4"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium text-gray-900">{tech.name}</p>
                  <p className="text-sm text-gray-500">{tech.specialties.join(', ')}</p>
                </div>
                <span className="text-xs font-medium text-gray-500">{tech.assignedOrders} órdenes activas</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-3">
            <button className="flex-1 btn-primary">Asignar</button>
            <button onClick={() => setShowAssignModal(false)} className="flex-1 btn-secondary">Cancelar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
