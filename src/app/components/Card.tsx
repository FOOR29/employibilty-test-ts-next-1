import React from "react";
import { CardProps } from "../types";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  status,
  onClick,
}) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'bg-emerald-500 shadow-emerald-500/50';
      case 'Dead':
        return 'bg-rose-500 shadow-rose-500/50';
      default:
        return 'bg-slate-500 shadow-slate-500/50';
    }
  };

  return (
    <div 
      className="group w-[320px] rounded-2xl bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-md border border-gray-100"
      onClick={onClick}
    >
      {/* Imagen con overlay y badge */}
      <div className="relative h-[240px] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        {imageUrl && (
          <>
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Badge de status flotante */}
            {status && (
              <div className="absolute top-3 right-3">
                <span 
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${getStatusStyles(status)}`}
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  {status}
                </span>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-5">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        
        {/* Descripción */}
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Separador visual */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
            Rick and Morty
          </p>
        </div>
      </div>
    </div>
  );
};
