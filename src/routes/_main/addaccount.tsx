import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, PlusCircle, ArrowLeft } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";


interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
  accountType: "bank" | "momo";
  provider: string;
}

const banks = [
  { id: "boa", name: "Bank of America" },
  { id: "chase", name: "Chase Bank" },
  { id: "wells", name: "Wells Fargo" },
  { id: "citi", name: "Citibank" },
  { id: "barclays", name: "Barclays" },
];

const momoProviders = [
  { id: "mtn", name: "MTN Mobile Money" },
  { id: "voda", name: "Vodafone Cash" },
  { id: "airtel", name: "AirtelTigo Money" },
  { id: "orange", name: "Orange Money" },
  { id: "tgo", name: "T-Go Money" },
];

export const Route = createFileRoute("/_main/addaccount")({
  component: RouteComponent,
});


export function RouteComponent(){
  const [accountType, setAccountType] = useState<"bank" | "momo">("bank");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const [newAccount, setNewAccount] = useState({
    name: "",
    currency: "USD",
    balance: 0,
    provider: "",
  });

  const simulateUpload = async ( ) => {
    setIsUploading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUploading(false);
    return true;
  };

  const providers = accountType === "bank" ? banks : momoProviders;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddAccount = async () => {
    if (!newAccount.name || !newAccount.provider) return;

    if (selectedFile) {
      const uploadSuccess = await simulateUpload();
      if (!uploadSuccess) return;
    }

    const account: Account = {
      id: Date.now().toString(),
      name: newAccount.name,
      balance: newAccount.balance,
      currency: newAccount.currency,
      accountType: accountType,
      provider: newAccount.provider,
    };

    // Here you would typically call an API to save the account
    console.log("Account created:", account);
    
  
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Add New Account</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          {/* Account Type Selection */}
          <div className="space-y-2">
            <Label>Account Type</Label>
            <Tabs 
              defaultValue="bank" 
              className="w-full" 
              onValueChange={(value) => setAccountType(value as "bank" | "momo")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bank">Bank</TabsTrigger>
                <TabsTrigger value="momo">Mobile Money</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Provider Selection */}
          <div className="space-y-2">
            <Label htmlFor="provider">
              {accountType === "bank" ? "Select Bank" : "Select Mobile Money Provider"}
            </Label>
            <Select
              value={newAccount.provider}
              onValueChange={(value) => setNewAccount({ ...newAccount, provider: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={accountType === "bank" ? "Select a bank" : "Select a provider"} />
              </SelectTrigger>
              <SelectContent>
                {providers.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    {provider.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Account Details */}
          <div className="space-y-2">
            <Label htmlFor="name">Account Name</Label>
            <Input
              id="name"
              value={newAccount.name}
              onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
              placeholder={accountType === "bank" ? "e.g. Checking Account" : "e.g. Personal Account"}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={newAccount.currency}
                onValueChange={(value) => setNewAccount({ ...newAccount, currency: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="GHS">GHS</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="balance">Initial Balance</Label>
              <Input
                id="balance"
                type="number"
                value={newAccount.balance}
                onChange={(e) =>
                  setNewAccount({
                    ...newAccount,
                    balance: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="space-y-2">
            <Label>Upload Transaction History (Optional)</Label>
            <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 text-center mb-2">
                Drag and drop your transaction file here
              </p>
              <Input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".csv,.xlsx,.pdf"
                onChange={handleFileChange}
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="outline" type="button" size="sm">
                  Browse Files
                </Button>
              </Label>
            </div>
            {selectedFile && (
              <div className="flex items-center text-sm mt-2 p-2 bg-gray-50 rounded">
                <FileText className="h-4 w-4 mr-2 text-gray-500" />
                <span className="truncate">{selectedFile.name}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6">
            <Button 
              variant="outline" 
            >
              Cancel
            </Button>
            <Button 
              onClick={handleAddAccount} 
              disabled={isUploading || !newAccount.provider || !newAccount.name}
            >
              {isUploading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Account
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}