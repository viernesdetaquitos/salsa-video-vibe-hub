
import { useState } from "react";
import { Lightbulb, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface RecipeTabContentProps {
  ingredients: string[];
  steps: string[];
  tips: string[];
  suggestedDishes: string[];
}

const RecipeTabContent = ({ ingredients, steps, tips, suggestedDishes }: RecipeTabContentProps) => {
  const [activeTab, setActiveTab] = useState("ingredients");

  // Provide fallbacks for undefined arrays
  const safeIngredients = ingredients || [];
  const safeSteps = steps || [];
  const safeTips = tips || [];
  const safeSuggestedDishes = suggestedDishes || [];

  return (
    <>
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
                Ingredientes ({safeIngredients.length})
              </h3>
              <div className="space-y-3">
                {safeIngredients.map((ingredient, index) => (
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
                {safeSteps.map((step, index) => (
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
                {safeTips.map((tip, index) => (
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
                {safeSuggestedDishes.map((dish, index) => (
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
    </>
  );
};

export default RecipeTabContent;
