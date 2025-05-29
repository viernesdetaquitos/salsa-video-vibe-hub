
import { ArrowLeft, Heart, Star, Clock, Users, Play, Share, Bookmark, Flame, Lightbulb, Utensils, ChefHat, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("ingredients");

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Recipe Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardContent className="p-4 text-center">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <h3 className="font-semibold text-gray-800">Origen</h3>
              <p className="text-sm text-gray-600">{recipe.origin}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardContent className="p-4 text-center">
              <ChefHat className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <h3 className="font-semibold text-gray-800">Categoría</h3>
              <p className="text-sm text-gray-600">{recipe.category}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardContent className="p-4 text-center">
              <Flame className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
              <h3 className="font-semibold text-gray-800">Calorías</h3>
              <p className="text-sm text-gray-600">{recipe.calories} kcal</p>
            </CardContent>
          </Card>
        </div>

        {/* Chef Info */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {recipe.chef.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Chef {recipe.chef}</h3>
                <p className="text-sm text-gray-600">Especialista en salsas internacionales</p>
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="sm" className="border-orange-200">
                  Seguir
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-orange-200">
          <CardContent className="p-4">
            <p className="text-gray-700 leading-relaxed">{recipe.description}</p>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 overflow-x-auto">
          <Button
            variant={activeTab === "ingredients" ? "default" : "ghost"}
            onClick={() => setActiveTab("ingredients")}
            className={
              activeTab === "ingredients"
                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                : "bg-white/70 border-orange-200 hover:bg-orange-50"
            }
          >
            Ingredientes
          </Button>
          <Button
            variant={activeTab === "steps" ? "default" : "ghost"}
            onClick={() => setActiveTab("steps")}
            className={
              activeTab === "steps"
                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                : "bg-white/70 border-orange-200 hover:bg-orange-50"
            }
          >
            Preparación
          </Button>
          <Button
            variant={activeTab === "tips" ? "default" : "ghost"}
            onClick={() => setActiveTab("tips")}
            className={
              activeTab === "tips"
                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                : "bg-white/70 border-orange-200 hover:bg-orange-50"
            }
          >
            Tips
          </Button>
          <Button
            variant={activeTab === "dishes" ? "default" : "ghost"}
            onClick={() => setActiveTab("dishes")}
            className={
              activeTab === "dishes"
                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                : "bg-white/70 border-orange-200 hover:bg-orange-50"
            }
          >
            Platillos
          </Button>
        </div>

        {/* Tab Content */}
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
          <CardContent className="p-6">
            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Ingredientes ({recipe.ingredients.length})
                </h3>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
                      <span className="text-gray-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "steps" && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Pasos de preparación
                </h3>
                <div className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tips" && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                  Tips del Chef
                </h3>
                <div className="space-y-4">
                  {recipe.tips.map((tip, index) => (
                    <div key={index} className="flex space-x-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "dishes" && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-green-500" />
                  Platillos sugeridos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recipe.suggestedDishes.map((dish, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
                      <Utensils className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-medium">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

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
