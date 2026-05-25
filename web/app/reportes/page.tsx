'use client'

import { BarChart3, FileText, Download, Filter } from 'lucide-react'

const mockReports = [
  {
    id: '1',
    name: 'Reporte Operativo Mensual',
    description: 'Resumen de órdenes, técnicos y servicios',
    date: '2024-05-25',
    status: 'Disponible',
  },
  {
    id: '2',
    name: 'Reporte de Facturación',
    description: 'Ingresos, facturas pendientes y cobradas',
    date: '2024-05-25',
    status: 'Disponible',
  },
  {
    id: '3',
    name: 'Reporte de Cobranza',
    description: 'Análisis de deuda por cliente',
    date: '2024-05-25',
    status: 'Disponible',
  },
  {
    id: '4',
    name: 'Reporte de Control de Plagas',
    description: 'Actividad de trampas y plagas detectadas',
    date: '2024-05-24',
    status: 'Disponible',
  },
]

export default function Reportes() {
  return (
    <div className="space-y-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Reportes e Informes</h1>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Filter size={18} />
            <span>Filtrar</span>
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="card space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Reporte</label>
            <select className="input-field">
              <option>Todos</option>
              <option>Operativo</option>
              <option>Financiero</option>
              <option>Control de Plagas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Período</label>
            <select className="input-field">
              <option>Mes actual</option>
              <option>Mes anterior</option>
              <option>Últimos 3 meses</option>
              <option>Últimos 12 meses</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Formato</label>
            <select className="input-field">
              <option>PDF</option>
              <option>Excel</option>
              <option>Ambos</option>
            </select>
          </div>
        </div>
        <button className="btn-primary w-full">Generar Reporte</button>
      </div>

      {/* Reportes Disponibles */}
      <div className="grid grid-cols-2 gap-6">
        {mockReports.map(report => (
          <div key={report.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <BarChart3 className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{report.name}</h3>
                <p className="text-gray-600">{report.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-gray-500">{report.date}</p>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                    <Download size={16} />
                    <span className="text-sm font-medium">Descargar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos Mockeados */}
      <div className="card">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Gráfico de Actividad Mensual</h2>
        <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">Gráfico de barras mockeado</p>
            <div className="flex items-end justify-center space-x-2 mt-6 h-32">
              {[45, 52, 68, 72, 85, 92, 78].map((height, i) => (
                <div
                  key={i}
                  className="w-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
