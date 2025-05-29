
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ChefInfoProps {
  chefName: string;
}

const ChefInfo = ({ chefName }: ChefInfoProps) => {
  return (
    <Card className="mb-6 bg-white/80 backdrop-blur-sm border-orange-200">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {chefName.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Chef {chefName}</h3>
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
  );
};

export default ChefInfo;
