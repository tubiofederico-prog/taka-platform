'use client'

import Link from 'next/link'
import { Star, Briefcase, CheckCircle, MapPin } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockTechnicians } from '@/lib/mockData'

export default function Tecnicos() {
  return (
    <div className="space-y-8 pt-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Gestión de Técnicos</h1>
        <p className="text-gray-500 mt-2">Equipo de profesionales en campo</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {mockTechnicians.map(tech => (
          <Link key={tech.id} href={`/tecnicos/${tech.id}`}>
            <div className="card cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.email}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {tech.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-medium">{tech.rating}</span>
                  </div>
                  <StatusBadge status={tech.status} variant={tech.status === 'Disponible' ? 'success' : 'info'} />
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Especialidades</p>
                  <p className="text-sm font-medium text-gray-900">{tech.specialties.join(', ')}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle size={16} />
                    <span>{tech.completedOrders} trabajos completados</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Briefcase size={16} />
                    <span>{tech.assignedOrders} órdenes activas</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={16} />
                  <span>{tech.location}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
