'use client'

import { useState } from 'react'
import { Save, Lock, Users, Settings as SettingsIcon } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { mockUsers } from '@/lib/mockData'

export default function Configuracion() {
  const [activeTab, setActiveTab] = useState<'empresa' | 'usuarios' | 'integraciones' | 'configuracion'>('empresa')

  return (
    <div className="space-y-8 pt-8">
      <h1 className="text-4xl font-bold text-gray-900">Configuración</h1>

      {/* Tabs */}
      <div className="card border-b border-gray-200">
        <div className="flex space-x-1">
          {[
            { key: 'empresa' as const, label: 'Datos de la Empresa' },
            { key: 'usuarios' as const, label: 'Usuarios y Roles' },
            { key: 'integraciones' as const, label: 'Integraciones' },
            { key: 'configuracion' as const, label: 'Configuración General' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 font-medium transition-colors border-b-2 ${
                activeTab === tab.key
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido por Tab */}
      <div className="space-y-6">
        {activeTab === 'empresa' && (
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Información de la Empresa</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" defaultValue="Taka Services" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">RFC</label>
                  <input type="text" defaultValue="TSE-123456-ABC" className="input-field" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
                  <input type="text" defaultValue="Madrid, España" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue="info@taka.com" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" defaultValue="+34 912 345 678" className="input-field" />
                </div>
              </div>
              <button type="button" className="btn-primary flex items-center space-x-2">
                <Save size={18} />
                <span>Guardar Cambios</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === 'usuarios' && (
          <div className="space-y-4">
            <div className="card">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Usuarios del Sistema</h2>
              <div className="space-y-3">
                {mockUsers.map(user => (
                  <div key={user.id} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {user.role}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <SettingsIcon size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Roles y Permisos</h2>
              <div className="space-y-3">
                {[
                  { name: 'Administrador', permissions: 'Acceso total' },
                  { name: 'Coordinador Operativo', permissions: 'Órdenes, Técnicos, Agenda' },
                  { name: 'Comercial', permissions: 'Clientes, Cotizaciones' },
                  { name: 'Finanzas', permissions: 'Facturación, Cobranza' },
                ].map(role => (
                  <div key={role.name} className="p-4 border border-gray-200 rounded-lg">
                    <p className="font-medium text-gray-900">{role.name}</p>
                    <p className="text-sm text-gray-500">{role.permissions}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integraciones' && (
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Integraciones Conectadas</h2>
            <div className="space-y-4">
              {[
                { name: 'Gmail', status: 'Conectado', icon: '📧' },
                { name: 'WhatsApp Business', status: 'Conectado', icon: '💬' },
                { name: 'Google Drive', status: 'Conectado', icon: '☁️' },
                { name: 'Twilio', status: 'No conectado', icon: '📱' },
              ].map(service => (
                <div key={service.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{service.icon}</span>
                    <p className="font-medium text-gray-900">{service.name}</p>
                  </div>
                  <StatusBadge
                    status={service.status}
                    variant={service.status === 'Conectado' ? 'success' : 'warning'}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'configuracion' && (
          <div className="card">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Configuración General</h2>
            <form className="space-y-6">
              <div>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="font-medium text-gray-900">Notificaciones por email</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Días para alertar facturación pendiente
                </label>
                <input type="number" defaultValue="5" className="input-field w-32" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Días para alertar cobranza vencida
                </label>
                <input type="number" defaultValue="3" className="input-field w-32" />
              </div>
              <button type="button" className="btn-primary flex items-center space-x-2">
                <Save size={18} />
                <span>Guardar Cambios</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
