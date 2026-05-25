'use client'

import { Search, Bell, Settings, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-64 right-0 bg-white border-b border-gray-200 h-16 z-10">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar órdenes, clientes..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6 ml-8">
          <button className="relative text-gray-600 hover:text-gray-900">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          <button className="text-gray-600 hover:text-gray-900">
            <Settings size={20} />
          </button>

          <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Fernando Rodríguez</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
            <button className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              FR
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
