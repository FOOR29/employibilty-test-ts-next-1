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
    <div
      className="mb-4 p-3 rounded"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="row g-2">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar personaje..."
            value={search}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={statusFilter}
            onChange={e => onStatusChange(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="col-md-2 d-flex align-items-center">
          <span className="text-muted">
            Total visibles: {totalVisible}
          </span>
        </div>
      </div>
    </div>
  );
}
