'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, FileText, Briefcase } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockClients, mockOrders, mockQuotes } from '@/lib/mockData'

export default function ClientDetail({ params }: { params: { id: string } }) {
  const client = mockClients.find(c => c.id === params.id) || mockClients[0]
  const clientOrders = mockOrders.filter(o => o.clientId === client.id)
  const clientQuotes = mockQuotes.filter(q => q.clientId === client.id)

  return (
    <div className="space-y-8 pt-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link
          href="/clientes"
          className="text-blue-600 hover:text-blue-700 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Volver</span>
        </Link>
      </div>

      {/* Información General */}
      <div className="card">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{client.name}</h1>
            <p className="text-gray-500 mt-2">ID: {client.id}</p>
            <div className="mt-4">
              <StatusBadge status={client.status} variant="success" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail size={18} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{client.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone size={18} />
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">{client.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Tipo</p>
              <p className="font-medium text-gray-900">{client.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Cliente Desde</p>
              <p className="font-medium text-gray-900">{client.createdAt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ubicaciones */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <MapPin size={20} />
          <span>Ubicaciones / Sedes</span>
        </h2>
        <div className="space-y-3">
          {client.locations.map(location => (
            <div key={location.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">{location.name}</p>
                  <p className="text-sm text-gray-500">{location.address}</p>
                </div>
                {location.active && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Activa
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Órdenes y Cotizaciones */}
      <div className="grid grid-cols-2 gap-6">
        {/* Órdenes */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Briefcase size={20} />
            <span>Órdenes ({clientOrders.length})</span>
          </h2>
          <div className="space-y-2">
            {clientOrders.map(order => (
              <Link
                key={order.id}
                href={`/ordenes/${order.id}`}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-xs text-gray-500">{order.type}</p>
                </div>
                <StatusBadge status={order.status} />
              </Link>
            ))}
          </div>
        </div>

        {/* Cotizaciones */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <FileText size={20} />
            <span>Cotizaciones ({clientQuotes.length})</span>
          </h2>
          <div className="space-y-2">
            {clientQuotes.map(quote => (
              <Link
                key={quote.id}
                href={`/cotizaciones/${quote.id}`}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{quote.id}</p>
                  <p className="text-xs text-gray-500">${quote.amount}</p>
                </div>
                <StatusBadge status={quote.status} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
