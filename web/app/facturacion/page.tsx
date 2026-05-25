'use client'

import { Plus, Download } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockInvoices } from '@/lib/mockData'

export default function Facturacion() {
  const pendingInvoices = mockInvoices.filter(i => i.status !== 'Pagada')
  const totalPending = pendingInvoices.reduce((sum, i) => sum + i.amount, 0)

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Facturación</h1>
        <button className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Nueva Factura</span>
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Total Facturado</p>
          <p className="text-3xl font-bold text-gray-900">
            ${mockInvoices.reduce((sum, i) => sum + i.amount, 0).toLocaleString()}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Pendiente de Cobro</p>
          <p className="text-3xl font-bold text-orange-600">${totalPending.toLocaleString()}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Pagadas</p>
          <p className="text-3xl font-bold text-green-600">
            {mockInvoices.filter(i => i.status === 'Pagada').length}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Vencidas</p>
          <p className="text-3xl font-bold text-red-600">
            {mockInvoices.filter(i => i.status === 'Vencida').length}
          </p>
        </div>
      </div>

      {/* Tabla */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-cell text-left font-semibold text-gray-900">Factura</th>
              <th className="table-cell text-left font-semibold text-gray-900">Cliente</th>
              <th className="table-cell text-left font-semibold text-gray-900">Monto</th>
              <th className="table-cell text-left font-semibold text-gray-900">Fecha</th>
              <th className="table-cell text-left font-semibold text-gray-900">Vencimiento</th>
              <th className="table-cell text-left font-semibold text-gray-900">Estado</th>
              <th className="table-cell text-right font-semibold text-gray-900">Acción</th>
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map(invoice => (
              <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="table-cell font-medium text-gray-900">{invoice.id}</td>
                <td className="table-cell text-gray-600">{invoice.clientName}</td>
                <td className="table-cell font-bold text-gray-900">${invoice.amount}</td>
                <td className="table-cell text-gray-600">{invoice.issuedAt}</td>
                <td className="table-cell text-gray-600">{invoice.dueAt}</td>
                <td className="table-cell">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="table-cell text-right">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-end space-x-1">
                    <Download size={16} />
                    <span>PDF</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
