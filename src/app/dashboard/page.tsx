'use client';

import { useEffect, useMemo, useState } from 'react';
import { UseFetch } from '../hooks/useFetch'; 
import { RICK_AND_MORTY_API } from '@/services/api'; 
import { characters } from '../types'; 
import Loading from '@/components/ui/Loading';
import FiltersPanel from '@/app/components/FiltersPanel';
import DashboardHeader from '@/app/components/DashboardHeader';

export default function DashboardPage() {
  const { data: characters, loading, error } = UseFetch(RICK_AND_MORTY_API);
  
  const [filteredCharacters, setFilteredCharacters] = useState<characters[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [stats, setStats] = useState<Record<string, number>>({});

  useEffect(() => {
    if (characters.length > 0) {
      calculateStats(characters);
      setFilteredCharacters(characters);
    }
  }, [characters]);

  const calculateStats = (list: characters[]) => {
    const alive = list.filter(c => c.status === 'Alive').length;
    const dead = list.filter(c => c.status === 'Dead').length;
    const unknown = list.filter(c => c.status === 'unknown').length;

    setStats({
      total: list.length,
      alive,
      dead,
      unknown,
    });
  };

  useEffect(() => {
    let temp = [...characters];

    if (search) {
      temp = temp.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      temp = temp.filter(c => c.status === statusFilter);
    }

    setFilteredCharacters(temp);
  }, [search, statusFilter, characters]);

  const totalCharacters = useMemo(() => {
    return filteredCharacters.length;
  }, [filteredCharacters]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-2xl font-bold">Dashboard de Personajes</h1>

      {/* Estadísticas */}
      <div className="flex justify-center items-center bg-amber-300 gap-2">
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
      <div className="row">
        {filteredCharacters.map(character => (
          <div key={character.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={character.image}
                alt={character.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  <span
                    className={`badge ${
                      character.status === 'Alive'
                        ? 'bg-success'
                        : character.status === 'Dead'
                        ? 'bg-danger'
                        : 'bg-secondary'
                    }`}
                  >
                    {character.status}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Especie: {character.species}
                </p>
              </div>
            </div>
          </div>
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
