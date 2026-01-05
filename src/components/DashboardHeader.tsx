import { DashboardHeaderProps } from "@/app/types";

export default function DashboardHeader({ stats }: DashboardHeaderProps) {
  const statsData = [
    {
      label: 'Total',
      value: stats.total || 0,
      colorClass: 'text-blue-600',
      bgClass: 'bg-blue-50 border-blue-200'
    },
    {
      label: 'Alive',
      value: stats.alive || 0,
      colorClass: 'text-emerald-600',
      bgClass: 'bg-emerald-50 border-emerald-200'
    },
    {
      label: 'Dead',
      value: stats.dead || 0,
      colorClass: 'text-rose-600',
      bgClass: 'bg-rose-50 border-rose-200'
    },
    {
      label: 'Unknown',
      value: stats.unknown || 0,
      colorClass: 'text-gray-600',
      bgClass: 'bg-gray-50 border-gray-200'
    }
  ];

  return (
    <header className="mb-8">
      {/* Título */}
      <h1 className="flex justify-center items-center text-3xl font-bold text-gray-900 mb-6">
        Dashboard de Personajes
      </h1>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl border-2 ${stat.bgClass} px-6 p-1 transition-all duration-200 hover:shadow-lg`}
          >
            <p className="text-sm font-medium text-gray-600 mb-2">
              {stat.label}
            </p>
            <p className={`text-3xl font-bold ${stat.colorClass}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
