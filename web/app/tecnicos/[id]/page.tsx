'use client'

import Link from 'next/link'
import { ArrowLeft, Star, Award, Briefcase, TrendingUp, Calendar } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockTechnicians, mockOrders } from '@/lib/mockData'

export default function TechnicianDetail({ params }: { params: { id: string } }) {
  const tech = mockTechnicians.find(t => t.id === params.id) || mockTechnicians[0]
  const techOrders = mockOrders.filter(o => o.technicianId === tech.id)

  return (
    <div className="space-y-8 pt-8">
      <Link href="/tecnicos" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
        <ArrowLeft size={20} />
        <span>Volver</span>
      </Link>

      <div className="grid grid-cols-3 gap-6">
        {/* Información */}
        <div className="col-span-2 space-y-6">
          <div className="card">
            <h1 className="text-3xl font-bold text-gray-900">{tech.name}</h1>
            <div className="flex items-center space-x-4 mt-4">
              <StatusBadge status={tech.status} variant={tech.status === 'Disponible' ? 'success' : 'info'} />
              <div className="flex items-center space-x-2 text-yellow-500">
                <Star size={20} fill="currentColor" />
                <span className="font-bold text-lg">{tech.rating}</span>
              </div>
            </div>

            <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{tech.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium text-gray-900">{tech.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Especialidades</p>
                <div className="flex flex-wrap gap-2">
                  {tech.specialties.map(spec => (
                    <span key={spec} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Órdenes */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Órdenes Asignadas</h2>
            <div className="space-y-3">
              {techOrders.map(order => (
                <Link
                  key={order.id}
                  href={`/ordenes/${order.id}`}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.clientName}</p>
                    </div>
                    <StatusBadge status={order.status} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="space-y-4">
          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Métricas</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Trabajos Completados</p>
                <p className="text-3xl font-bold text-green-600">{tech.completedOrders}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Órdenes Activas</p>
                <p className="text-3xl font-bold text-blue-600">{tech.assignedOrders}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Calificación</p>
                <p className="text-3xl font-bold text-yellow-500">{tech.rating}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Ubicación</h3>
            <p className="text-lg font-bold text-gray-900">{tech.location}</p>
          </div>

          <div className="card space-y-3">
            <h3 className="text-sm font-bold text-gray-500 uppercase">Acciones</h3>
            <button className="w-full btn-primary">Asignar Orden</button>
            <button className="w-full btn-secondary">Ver Disponibilidad</button>
          </div>
        </div>
      </div>
    </div>
  )
}
