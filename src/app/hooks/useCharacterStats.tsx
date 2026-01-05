import { useEffect, useState } from 'react';
import { characters } from '../types';

export function useCharacterStats(characters: characters[]) {
  const [stats, setStats] = useState<Record<string, number>>({});

  useEffect(() => {
    if (characters.length > 0) {
      const alive = characters.filter(c => c.status === 'Alive').length;
      const dead = characters.filter(c => c.status === 'Dead').length;
      const unknown = characters.filter(c => c.status === 'unknown').length;

      setStats({
        total: characters.length,
        alive,
        dead,
        unknown,
      });
    }
  }, [characters]);

  return stats;
}
