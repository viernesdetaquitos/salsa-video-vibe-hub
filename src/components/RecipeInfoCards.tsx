
import { MapPin, ChefHat, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface RecipeInfoCardsProps {
  origin: string;
  category: string;
  calories: number;
}

const RecipeInfoCards = ({ origin, category, calories }: RecipeInfoCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
        <CardContent className="p-4 text-center">
          <MapPin className="w-6 h-6 mx-auto mb-2 text-red-500" />
          <h3 className="font-semibold text-gray-800">Origen</h3>
          <p className="text-sm text-gray-600">{origin}</p>
        </CardContent>
      </Card>
      <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
        <CardContent className="p-4 text-center">
          <ChefHat className="w-6 h-6 mx-auto mb-2 text-orange-500" />
          <h3 className="font-semibold text-gray-800">Categoría</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </CardContent>
      </Card>
      <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
        <CardContent className="p-4 text-center">
          <Flame className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
          <h3 className="font-semibold text-gray-800">Calorías</h3>
          <p className="text-sm text-gray-600">{calories} kcal</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeInfoCards;
