
import { Play, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RecipeHeader from "./RecipeHeader";
import RecipeInfoCards from "./RecipeInfoCards";
import ChefInfo from "./ChefInfo";
import RecipeTabContent from "./RecipeTabContent";

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

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const RecipeDetail = ({ recipe, onBack, isFavorite, onToggleFavorite }: RecipeDetailProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <RecipeHeader 
        recipe={recipe}
        onBack={onBack}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <RecipeInfoCards 
          origin={recipe.origin}
          category={recipe.category}
          calories={recipe.calories}
        />

        <ChefInfo chefName={recipe.chef} />

        {/* Description */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-orange-200">
          <CardContent className="p-4">
            <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
          </CardContent>
        </Card>

        <RecipeTabContent 
          ingredients={recipe.ingredients}
          steps={recipe.steps}
          tips={recipe.tips}
          suggestedDishes={recipe.suggestedDishes}
        />

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-3">
          <Button className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
            <Play className="w-4 h-4 mr-2" />
            Ver Video Completo
          </Button>
          <Button variant="outline" className="border-orange-200 hover:bg-orange-50">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
