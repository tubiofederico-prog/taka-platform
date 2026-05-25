'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, User } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import Modal from '@/components/ui/Modal'
import { mockOrders } from '@/lib/mockData'

export default function Agenda() {
  const [viewMode, setViewMode] = useState<'dia' | 'semana' | 'mes'>('dia')
  const [selectedDate, setSelectedDate] = useState('2024-05-25')
  const [showEventModal, setShowEventModal] = useState(false)

  const dayOrders = mockOrders.filter(o => o.date === selectedDate)

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Agenda y Planificación</h1>
        <button onClick={() => setShowEventModal(true)} className="btn-primary">
          Nuevo Evento
        </button>
      </div>

      {/* Controles de Vista */}
      <div className="card flex items-center space-x-4">
        <div className="flex space-x-2">
          {(['dia', 'semana', 'mes'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === mode
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="input-field w-48"
        />
      </div>

      {/* Vista del Día */}
      {viewMode === 'dia' && (
        <div className="space-y-4">
          {dayOrders.length > 0 ? (
            dayOrders.map(order => (
              <div key={order.id} className="card border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900">{order.id}</p>
                    <p className="text-gray-600 mt-1">{order.clientName}</p>
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{order.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{order.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{order.technicianName}</span>
                      </div>
                    </div>
                  </div>
                  <StatusBadge status={order.status} />
                </div>
              </div>
            ))
          ) : (
            <div className="card text-center py-12">
              <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No hay servicios programados para este día</p>
            </div>
          )}
        </div>
      )}

      {/* Vista de Calendario Mensual */}
      {viewMode === 'mes' && (
        <div className="card">
          <div className="grid grid-cols-7 gap-2">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
              <div key={day} className="p-3 text-center font-bold text-gray-600">
                {day}
              </div>
            ))}
            {[...Array(35)].map((_, i) => (
              <div key={i} className="min-h-24 border border-gray-200 p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                {i < 31 && (
                  <>
                    <p className="font-medium text-gray-900">{i + 1}</p>
                    {i + 1 === 25 && (
                      <div className="mt-1 space-y-1">
                        <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded truncate">Ord 1</div>
                        <div className="bg-purple-100 text-purple-800 text-xs p-1 rounded truncate">Ord 2</div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal isOpen={showEventModal} onClose={() => setShowEventModal(false)} title="Agendar Servicio" size="medium">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
            <select className="input-field">
              <option>Seleccionar...</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
              <input type="date" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hora</label>
              <input type="time" className="input-field" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Técnico</label>
            <select className="input-field">
              <option>Seleccionar...</option>
            </select>
          </div>
          <div className="flex space-x-3">
            <button type="button" className="flex-1 btn-primary">Agendar</button>
            <button type="button" onClick={() => setShowEventModal(false)} className="flex-1 btn-secondary">Cancelar</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
