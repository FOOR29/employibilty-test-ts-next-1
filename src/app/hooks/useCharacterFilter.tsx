import { useEffect, useState } from 'react';
import { characters, UseCharacterFilterProps } from '../types';

export function useCharacterFilter({ 
  characters, 
  search, 
  statusFilter 
}: UseCharacterFilterProps) {
  const [filteredCharacters, setFilteredCharacters] = useState<characters[]>([]);

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

  return filteredCharacters;
}
