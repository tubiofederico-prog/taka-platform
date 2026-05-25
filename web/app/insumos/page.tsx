'use client'

import { AlertTriangle, Package, Plus } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockSupplies } from '@/lib/mockData'

export default function Insumos() {
  const lowStockSupplies = mockSupplies.filter(s => s.stock <= s.minStock)

  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Insumos y Materiales</h1>
        <button className="btn-primary flex items-center space-x-2">
          <Plus size={20} />
          <span>Agregar Insumo</span>
        </button>
      </div>

      {/* Alertas de Stock */}
      {lowStockSupplies.length > 0 && (
        <div className="card bg-red-50 border-l-4 border-red-500">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
            <div>
              <h2 className="font-bold text-red-900">{lowStockSupplies.length} insumos con stock bajo</h2>
              <p className="text-sm text-red-800">Requieren compra urgente</p>
            </div>
          </div>
        </div>
      )}

      {/* Tabla de Insumos */}
      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="table-cell text-left font-semibold text-gray-900">Nombre</th>
              <th className="table-cell text-left font-semibold text-gray-900">Categoría</th>
              <th className="table-cell text-left font-semibold text-gray-900">Stock</th>
              <th className="table-cell text-left font-semibold text-gray-900">Mínimo</th>
              <th className="table-cell text-left font-semibold text-gray-900">Costo</th>
              <th className="table-cell text-left font-semibold text-gray-900">Estado</th>
              <th className="table-cell text-right font-semibold text-gray-900">Acción</th>
            </tr>
          </thead>
          <tbody>
            {mockSupplies.map(supply => {
              const isLowStock = supply.stock <= supply.minStock
              return (
                <tr
                  key={supply.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    isLowStock ? 'bg-red-50' : ''
                  }`}
                >
                  <td className="table-cell font-medium text-gray-900">{supply.name}</td>
                  <td className="table-cell text-gray-600">{supply.category}</td>
                  <td className="table-cell">
                    <div className="flex items-center space-x-2">
                      <Package size={16} className="text-gray-400" />
                      <span className={isLowStock ? 'font-bold text-red-600' : 'text-gray-900'}>
                        {supply.stock} {supply.unit}
                      </span>
                    </div>
                  </td>
                  <td className="table-cell text-gray-600">{supply.minStock}</td>
                  <td className="table-cell text-gray-600 font-medium">${supply.cost}</td>
                  <td className="table-cell">
                    {isLowStock ? (
                      <StatusBadge status="Stock Bajo" variant="error" />
                    ) : (
                      <StatusBadge status="Adecuado" variant="success" />
                    )}
                  </td>
                  <td className="table-cell text-right">
                    {isLowStock && (
                      <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                        Comprar
                      </button>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Total de Insumos</p>
          <p className="text-3xl font-bold text-gray-900">{mockSupplies.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Stock Total (Costo)</p>
          <p className="text-3xl font-bold text-gray-900">
            ${(mockSupplies.reduce((sum, s) => sum + s.stock * s.cost, 0)).toLocaleString()}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Bajo Stock</p>
          <p className="text-3xl font-bold text-red-600">{lowStockSupplies.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">En Alerta</p>
          <p className="text-3xl font-bold text-orange-600">{lowStockSupplies.length}</p>
        </div>
      </div>
    </div>
  )
}
