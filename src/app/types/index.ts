// tiapdo persnajaes 

export interface characters {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

// tipado header 
export interface DashboardHeaderProps {
  stats: {
    total?: number;
    alive?: number;
    dead?: number;
    unknown?: number;
  };
}

// card tipado
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  status?: string;
  avatarUrl?: string;
  onClick?: () => void;
}

// character filter
export interface UseCharacterFilterProps {
  characters: characters[];
  search: string;
  statusFilter: string;
}

// fileter panel
export interface FiltersPanelProps {
  search: string;
  statusFilter: string;
  totalVisible: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}