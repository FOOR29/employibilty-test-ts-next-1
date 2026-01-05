import { DashboardHeaderProps } from "@/app/types";


export default function DashboardHeader({ stats }: DashboardHeaderProps) {
  return (
    <header>
      <h1 className="mb-4 text-2xl font-bold">Dashboard de Personajes</h1>

      {/* Estadísticas */}
      <div className="flex justify-center items-center bg-amber-300 gap-2">
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h6>Total</h6>
            <p className="fw-bold">{stats.total || 0}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h6>Alive</h6>
            <p className="fw-bold text-success">{stats.alive || 0}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h6>Dead</h6>
            <p className="fw-bold text-danger">{stats.dead || 0}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center p-3 shadow-sm">
            <h6>Unknown</h6>
            <p className="fw-bold text-warning">{stats.unknown || 0}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
