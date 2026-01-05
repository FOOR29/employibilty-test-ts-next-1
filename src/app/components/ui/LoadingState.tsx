export default function LoadingState() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="relative">
        {/* Spinner animado */}
        <div className="w-20 h-20 border-8 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-green-400 rounded-full opacity-20 animate-ping"></div>
        </div>
      </div>
      
      {/* Texto */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Cargando personajes...
        </h2>
      </div>
    </div>
  );
}
