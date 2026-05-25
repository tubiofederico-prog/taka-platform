'use client'

import Link from 'next/link'
import { ArrowLeft, Download, Send, CheckCircle, AlertCircle } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockQuotes } from '@/lib/mockData'

export default function QuoteDetail({ params }: { params: { id: string } }) {
  const quote = mockQuotes.find(q => q.id === params.id) || mockQuotes[0]

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <Link href="/cotizaciones" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
          <ArrowLeft size={20} />
          <span>Volver</span>
        </Link>
        <div className="flex items-center space-x-3">
          <StatusBadge status={quote.status} />
          <span className={`text-sm font-medium ${quote.expiringIn < 0 ? 'text-red-600' : 'text-green-600'}`}>
            {quote.expiringIn < 0 ? 'Vencida' : `Vence en ${quote.expiringIn} días`}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="card">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{quote.id}</h1>

            <div className="space-y-6 border-b border-gray-200 pb-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-500">Cliente</p>
                  <p className="text-lg font-medium text-gray-900">{quote.clientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tipo de Servicio</p>
                  <p className="text-lg font-medium text-gray-900">{quote.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monto</p>
                  <p className="text-2xl font-bold text-blue-600">${quote.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Válida hasta</p>
                  <p className="text-lg font-medium text-gray-900">{quote.validUntil}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-gray-900 mb-3">Detalles del Servicio</h3>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <ul className="space-y-2 text-gray-600">
                  <li>• Inspección previa sin costo</li>
                  <li>• Materiales de calidad premium</li>
                  <li>• Garantía de servicio 30 días</li>
                  <li>• Técnicos certificados y capacitados</li>
                  <li>• Disponible inmediatamente después de aprobación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card space-y-3">
            <h3 className="font-bold text-gray-900">Acciones</h3>
            {quote.status === 'Borrador' && (
              <>
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Send size={18} />
                  <span>Enviar</span>
                </button>
                <button className="w-full btn-secondary">Editar</button>
              </>
            )}
            {quote.status === 'Enviada' && (
              <>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center space-x-2">
                  <CheckCircle size={18} />
                  <span>Marcar Aprobada</span>
                </button>
                <button className="w-full btn-secondary">Rechazar</button>
              </>
            )}
            {quote.status === 'Aprobada' && (
              <Link href="/" className="w-full btn-primary text-center">
                Crear Orden
              </Link>
            )}
            <button className="w-full btn-secondary flex items-center justify-center space-x-2">
              <Download size={18} />
              <span>Descargar PDF</span>
            </button>
          </div>

          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3">Información</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Creada</p>
                <p className="font-medium text-gray-900">{quote.createdAt}</p>
              </div>
              <div>
                <p className="text-gray-500">Estado</p>
                <StatusBadge status={quote.status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
