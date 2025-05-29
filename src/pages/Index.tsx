import { useState } from "react";
import { Heart, Search, Star, Play, Clock, Users, ChefHat, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RecipeDetail from "@/components/RecipeDetail";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todas", icon: "🍅" },
    { id: "spicy", name: "Picantes", icon: "🌶️" },
    { id: "creamy", name: "Cremosas", icon: "🥛" },
    { id: "fresh", name: "Frescas", icon: "🌿" },
    { id: "exotic", name: "Exóticas", icon: "🌍" }
  ];

  const recipes = [
    {
      id: 1,
      title: "Salsa Chimichurri Argentino",
      chef: "María González",
      time: "15 min",
      difficulty: "Fácil",
      rating: 4.8,
      reviews: 234,
      category: "fresh",
      spiciness: 1,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
      video: "https://example.com/video1",
      description: "Una salsa fresca y aromática perfecta para carnes asadas",
      ingredients: [
        "1 taza de perejil fresco",
        "4 dientes de ajo",
        "1/4 taza de vinagre de vino tinto",
        "1/2 taza de aceite de oliva",
        "1 cucharadita de orégano",
        "Sal y pimienta al gusto"
      ],
      steps: [
        "Picar finamente el perejil y el ajo",
        "Mezclar con vinagre y dejar reposar 10 minutos",
        "Agregar aceite de oliva gradualmente",
        "Condimentar con orégano, sal y pimienta",
        "Dejar reposar 30 minutos antes de servir"
      ]
    },
    {
      id: 2,
      title: "Salsa de Ají Amarillo Peruano",
      chef: "Carlos Mendoza",
      time: "25 min",
      difficulty: "Medio",
      rating: 4.9,
      reviews: 189,
      category: "spicy",
      spiciness: 4,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400",
      video: "https://example.com/video2",
      description: "Salsa picante tradicional peruana con un sabor único",
      ingredients: [
        "8 ajíes amarillos",
        "2 dientes de ajo",
        "1/4 taza de aceite vegetal",
        "2 cucharadas de vinagre",
        "Sal al gusto"
      ],
      steps: [
        "Hervir los ajíes hasta que estén tiernos",
        "Retirar venas y semillas",
        "Licuar con ajo, aceite y vinagre",
        "Condimentar con sal",
        "Colar para obtener textura suave"
      ]
    },
    {
      id: 3,
      title: "Salsa Alfredo Clásica",
      chef: "Isabella Romano",
      time: "20 min",
      difficulty: "Fácil",
      rating: 4.7,
      reviews: 456,
      category: "creamy",
      spiciness: 0,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
      video: "https://example.com/video3",
      description: "Cremosa salsa italiana perfecta para pastas",
      ingredients: [
        "1/2 taza de mantequilla",
        "1 taza de crema de leche",
        "1 taza de queso parmesano rallado",
        "2 dientes de ajo",
        "Nuez moscada al gusto"
      ],
      steps: [
        "Derretir mantequilla a fuego medio",
        "Agregar ajo picado y sofreír",
        "Incorporar crema de leche",
        "Añadir queso parmesano gradualmente",
        "Condimentar con nuez moscada"
      ]
    },
    {
      id: 4,
      title: "Salsa Teriyaki Casera",
      chef: "Hiroshi Tanaka",
      time: "30 min",
      difficulty: "Medio",
      rating: 4.6,
      reviews: 312,
      category: "exotic",
      spiciness: 1,
      image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400",
      video: "https://example.com/video4",
      description: "Auténtica salsa japonesa con balance perfecto de sabores",
      ingredients: [
        "1/2 taza de salsa de soja",
        "1/4 taza de mirin",
        "2 cucharadas de azúcar",
        "1 cucharada de sake",
        "1 cucharadita de jengibre rallado"
      ],
      steps: [
        "Combinar todos los ingredientes en una olla",
        "Cocinar a fuego medio hasta que hierva",
        "Reducir fuego y cocinar 15 minutos",
        "Remover hasta que espese",
        "Colar antes de usar"
      ]
    },
    {
      id: 5,
      title: "Salsa Romesco Catalana",
      chef: "Jordi Puig",
      time: "40 min",
      difficulty: "Medio",
      rating: 4.8,
      reviews: 198,
      category: "spicy",
      spiciness: 3,
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400",
      video: "https://example.com/video5",
      description: "Tradicional salsa española con tomates y frutos secos",
      ingredients: [
        "4 tomates maduros",
        "2 pimientos rojos asados",
        "1/4 taza de almendras tostadas",
        "2 dientes de ajo",
        "2 cucharadas de vinagre de jerez",
        "1/4 taza de aceite de oliva"
      ],
      steps: [
        "Asar tomates y pimientos",
        "Pelar y despepitar los tomates",
        "Tostar almendras y ajo",
        "Triturar todos los ingredientes",
        "Agregar aceite gradualmente"
      ]
    },
    {
      id: 6,
      title: "Salsa Tzatziki Griega",
      chef: "Elena Papadopoulos",
      time: "15 min",
      difficulty: "Fácil",
      rating: 4.5,
      reviews: 267,
      category: "fresh",
      spiciness: 0,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=400",
      video: "https://example.com/video6",
      description: "Refrescante salsa griega con yogur y pepino",
      ingredients: [
        "2 tazas de yogur griego",
        "1 pepino grande",
        "3 dientes de ajo",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de vinagre",
        "Eneldo fresco"
      ],
      steps: [
        "Rallar y escurrir el pepino",
        "Picar finamente el ajo",
        "Mezclar yogur con pepino y ajo",
        "Agregar aceite y vinagre",
        "Decorar con eneldo fresco"
      ]
    }
  ];

  const filteredRecipes = activeCategory === "all" 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory);

  const toggleFavorite = (recipeId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(recipeId)) {
      newFavorites.delete(recipeId);
    } else {
      newFavorites.add(recipeId);
    }
    setFavorites(newFavorites);
  };

  const getSpicyIcons = (level) => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      icons.push(
        <Flame
          key={i}
          className={`w-3 h-3 ${
            i < level 
              ? "text-red-500 fill-red-500" 
              : "text-gray-300"
          }`}
        />
      );
    }
    return icons;
  };

  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
        isFavorite={favorites.has(selectedRecipe.id)}
        onToggleFavorite={() => toggleFavorite(selectedRecipe.id)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  SalsaChef
                </h1>
                <p className="text-sm text-gray-600">Recetas de salsas del mundo</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar salsas..."
                  className="pl-10 w-64 bg-white/50 border-orange-200"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  : "bg-white/70 border-orange-200 hover:bg-orange-50"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-orange-200 cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-red-500 ml-1" />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.has(recipe.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </Button>
                <Badge className="absolute bottom-2 left-2 bg-gradient-to-r from-red-500 to-orange-500">
                  {recipe.difficulty}
                </Badge>
                {/* Spiciness indicator */}
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  {getSpicyIcons(recipe.spiciness)}
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-lg line-clamp-2 text-gray-800">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {recipe.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{recipe.rating}</span>
                    <span className="text-sm text-gray-500">({recipe.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center">
                      <ChefHat className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{recipe.chef}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-gray-500">Picor:</span>
                    <div className="flex space-x-0.5">
                      {getSpicyIcons(recipe.spiciness)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;
