'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, ChevronRight } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import Modal from '@/components/ui/Modal'
import { mockQuotes } from '@/lib/mockData'

export default function Cotizaciones() {
  const [showNewQuote, setShowNewQuote] = useState(false)

  const quotesbyStatus = {
    Borrador: mockQuotes.filter(q => q.status === 'Borrador'),
    Enviada: mockQuotes.filter(q => q.status === 'Enviada'),
    Aprobada: mockQuotes.filter(q => q.status === 'Aprobada'),
    Rechazada: mockQuotes.filter(q => q.status === 'Rechazada'),
    Vencida: mockQuotes.filter(q => q.status === 'Vencida'),
  }

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Cotizaciones</h1>
          <p className="text-gray-500 mt-2">Gestiona presupuestos y propuestas comerciales</p>
        </div>
        <button onClick={() => setShowNewQuote(true)} className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Nueva Cotización</span>
        </button>
      </div>

      {/* Cards por Estado */}
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(quotesbyStatus).map(([status, quotes]) => (
          <div key={status} className="card">
            <h3 className="font-bold text-gray-900 mb-2">{status}</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">{quotes.length}</p>
            <div className="space-y-2">
              {quotes.map(quote => (
                <Link
                  key={quote.id}
                  href={`/cotizaciones/${quote.id}`}
                  className="block p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="text-sm font-medium text-gray-900">{quote.id}</p>
                  <p className="text-xs text-gray-500">${quote.amount}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lista Completa */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-cell text-left font-semibold text-gray-900">ID</th>
              <th className="table-cell text-left font-semibold text-gray-900">Cliente</th>
              <th className="table-cell text-left font-semibold text-gray-900">Servicio</th>
              <th className="table-cell text-left font-semibold text-gray-900">Monto</th>
              <th className="table-cell text-left font-semibold text-gray-900">Vence en</th>
              <th className="table-cell text-left font-semibold text-gray-900">Estado</th>
              <th className="table-cell text-right font-semibold text-gray-900">Acción</th>
            </tr>
          </thead>
          <tbody>
            {mockQuotes.map(quote => (
              <tr key={quote.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="table-cell font-medium text-gray-900">{quote.id}</td>
                <td className="table-cell text-gray-600">{quote.clientName}</td>
                <td className="table-cell text-gray-600">{quote.serviceType}</td>
                <td className="table-cell font-medium text-gray-900">${quote.amount}</td>
                <td className="table-cell text-gray-600">
                  <span className={quote.expiringIn < 0 ? 'text-red-600' : 'text-gray-600'}>
                    {Math.abs(quote.expiringIn)} días
                  </span>
                </td>
                <td className="table-cell">
                  <StatusBadge status={quote.status} />
                </td>
                <td className="table-cell text-right">
                  <Link href={`/cotizaciones/${quote.id}`} className="text-blue-600 hover:text-blue-700">
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={showNewQuote} onClose={() => setShowNewQuote(false)} title="Nueva Cotización" size="large">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
              <select className="input-field">
                <option>Seleccionar cliente...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Servicio</label>
              <select className="input-field">
                <option>Fumigación Integral</option>
                <option>Limpieza Profunda</option>
                <option>Control de Plagas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monto</label>
              <input type="number" className="input-field" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Válido por</label>
              <select className="input-field">
                <option>7 días</option>
                <option>15 días</option>
                <option>30 días</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea className="input-field" rows={4}></textarea>
          </div>
          <div className="flex space-x-3">
            <button type="button" className="flex-1 btn-primary">Guardar</button>
            <button type="button" onClick={() => setShowNewQuote(false)} className="flex-1 btn-secondary">Cancelar</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
