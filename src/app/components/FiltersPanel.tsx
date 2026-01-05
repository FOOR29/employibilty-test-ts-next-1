// components/FiltersPanel.tsx

interface FiltersPanelProps {
  search: string;
  statusFilter: string;
  totalVisible: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function FiltersPanel({
  search,
  statusFilter,
  totalVisible,
  onSearchChange,
  onStatusChange,
}: FiltersPanelProps) {
  return (
    <div className="mb-6 mx-20 p-4 rounded-xl bg-gray-50 border-2 border-gray-200">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        
        {/* Select de status */}
        <div className="md:w-48">
          <select
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
            value={statusFilter}
            onChange={e => onStatusChange(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        {/* Input de búsqueda - crece para llenar el espacio */}
        <div className="flex-1">
          <input
            type="text"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Buscar personaje..."
            value={search}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>

        {/* Contador de resultados */}
        <div className="md:w-auto">
          <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 border border-blue-200 h-full">
            <span className="text-xl font-bold text-blue-600">
              {totalVisible}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              {totalVisible !== 1 ? 'visibles' : 'visible'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
