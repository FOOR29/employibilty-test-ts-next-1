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