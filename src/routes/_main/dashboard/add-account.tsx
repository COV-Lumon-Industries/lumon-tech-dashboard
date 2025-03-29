import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/dashboard/add-account")({
  component: AccountProviderSelection,
});

const providers = [
  { id: "mtn", name: "MTN Mobile Money", type: "momo", available: true },
  { id: "voda", name: "Vodafone Cash", type: "momo", available: false },
  { id: "airtel", name: "AirtelTigo Money", type: "momo", available: false },
  { id: "gcb", name: "GCB Bank", type: "bank", available: false },
  { id: "absa", name: "Absa Bank", type: "bank", available: false },
];

function AccountProviderSelection() {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedProvider === "mtn") {
      navigate({ to: "/dashboard/file-upload" });
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex  flex-col items-start mb-6 ">
        <Link to="/dashboard">
          <div className="flex items-center gap-3">
            <ArrowLeft className="h-4 w-4 " />
            <h2>Back</h2>
          </div>
        </Link>
        <h1 className="text-2xl font-bold mt-4">Connect Account</h1>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Select Service Provider</h2>
        <p className="text-sm text-gray-500">
          Currently only MTN Mobile Money is supported
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((provider) => (
            <Card
              key={provider.id}
              className={`p-4 cursor-pointer transition-all h-full flex flex-col ${
                provider.id === selectedProvider
                  ? "border-2 border-primary shadow-md"
                  : "border hover:shadow-md"
              } ${
                !provider.available
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-primary"
              }`}
              onClick={() =>
                provider.available && setSelectedProvider(provider.id)
              }
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                      provider.type === "momo"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {provider.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{provider.name}</h3>
                    <p className="text-sm text-gray-500">
                      {provider.type.replace("-", " ")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-end pt-6">
          <Button onClick={handleContinue} disabled={!selectedProvider}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
