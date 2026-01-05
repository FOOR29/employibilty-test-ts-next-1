'use client';

import { useMemo, useState } from 'react';
import { UseFetch } from '../hooks/useFetch'; 
import { RICK_AND_MORTY_API } from '@/services/api'; 
import FiltersPanel from '@/app/components/FiltersPanel';
import DashboardHeader from '@/app/components/DashboardHeader';
import LoadingState from '@/app/components/ui/LoadingState';
import { Card } from '../components/Card';
import { useCharacterStats } from '../hooks/useCharacterStats';
import { useCharacterFilter } from '../hooks/useCharacterFilter';

export default function DashboardPage() {
  const { data: characters, loading, error } = UseFetch(RICK_AND_MORTY_API);
  
  // Estados de filtros
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // hook personalizado para estadísticas
  const stats = useCharacterStats(characters);

  // Hook personalizado para filtrar
  const filteredCharacters = useCharacterFilter({
    characters,
    search,
    statusFilter
  });

  // Total de personajes visibles
  const totalCharacters = useMemo(() => {
    return filteredCharacters.length;
  }, [filteredCharacters]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg m-4">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">

      {/* Header y Estadísticas */}
      <div className="flex justify-center items-center gap-2">
        <DashboardHeader stats={stats} />
      </div>

      {/* Filtro */}
      <FiltersPanel
        search={search}
        statusFilter={statusFilter}
        totalVisible={totalCharacters}
        onSearchChange={setSearch}
        onStatusChange={setStatusFilter}
      />

      {/* Lista */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredCharacters.map(character => (
          <Card
            key={character.id}
            title={character.name}
            description={`Especie: ${character.species}`}
            imageUrl={character.image}
            avatarUrl={character.image}
            status={character.status}
            onClick={() => console.log('Click en:', character.name)}
          />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="alert alert-info mt-4">
          No se encontraron resultados.
        </div>
      )}
    </div>
  );
}
