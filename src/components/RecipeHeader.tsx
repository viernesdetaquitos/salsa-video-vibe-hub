
import { ArrowLeft, Heart, Star, Clock, Users, Play, Share, Bookmark, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Recipe {
  id: number;
  title: string;
  chef: string;
  time: string;
  difficulty: string;
  rating: number;
  reviews: number;
  spiciness: number;
  image: string;
  video: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
  suggestedDishes: string[];
  origin: string;
  category: string;
  servings: number;
  calories: number;
}

interface RecipeHeaderProps {
  recipe: Recipe;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const RecipeHeader = ({ recipe, onBack, isFavorite, onToggleFavorite }: RecipeHeaderProps) => {
  const getSpicyIcons = (level: number) => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      icons.push(
        <Flame
          key={i}
          className={`w-4 h-4 ${
            i < level 
              ? "text-red-500 fill-red-500" 
              : "text-gray-300"
          }`}
        />
      );
    }
    return icons;
  };

  return (
    <header className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="bg-white/80 backdrop-blur-md hover:bg-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleFavorite}
            className="bg-white/80 backdrop-blur-md hover:bg-white"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 backdrop-blur-md hover:bg-white"
          >
            <Share className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 backdrop-blur-md hover:bg-white"
          >
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="relative h-80 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="bg-white/90 hover:bg-white text-red-600 rounded-full w-20 h-20"
          >
            <Play className="w-8 h-8 ml-1" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          <div className="flex items-center space-x-4 flex-wrap gap-y-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{recipe.rating}</span>
              <span className="text-white/80">({recipe.reviews} reseñas)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings} porciones</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {recipe.difficulty}
            </Badge>
            <div className="flex items-center space-x-1">
              <span className="text-sm">Picor:</span>
              <div className="flex space-x-0.5">
                {getSpicyIcons(recipe.spiciness)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RecipeHeader;
