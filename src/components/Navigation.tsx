
import { Home, Search, Heart, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-orange-200 z-50">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 text-red-500">
            <Home className="w-5 h-5" />
            <span className="text-xs">Inicio</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 text-gray-500">
            <Search className="w-5 h-5" />
            <span className="text-xs">Buscar</span>
          </Button>
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
          >
            <Plus className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 text-gray-500">
            <Heart className="w-5 h-5" />
            <span className="text-xs">Favoritos</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 text-gray-500">
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
