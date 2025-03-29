// src/routes/_main/dashboard/addaccount/mtn-upload.tsx
import { useState } from "react";
import { FileText, Upload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/dashboard/file-upload")({
  component: MtnUploadPage,
});

function MtnUploadPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsUploading(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex  flex-col items-start mb-6 ">
        <Link to="/dashboard/add-account">
          <div className="flex items-center gap-3">
            <ArrowLeft className="h-4 w-4 " />
            <h2>Back</h2>
          </div>
        </Link>
        <h1 className="text-2xl font-bold mt-4">Connect Account</h1>
      </div>

      <div className="space-y-6">
        <div className="p-4 border rounded-lg bg-gray-50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-bold">
            M
          </div>
          <div>
            <p className="font-medium">MTN Mobile Money</p>
            <p className="text-sm text-gray-500">Ghana</p>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Upload MTN Transaction History</Label>
          <p className="text-sm text-gray-500">
            Please upload your MTN statement to connect your account
          </p>

          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500 text-center mb-2">
              Drag and drop your MTN statement here
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
            <div className="flex items-center text-sm p-2 bg-gray-50 rounded">
              <FileText className="h-4 w-4 mr-2 text-gray-500" />
              <span className="truncate">{selectedFile.name}</span>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outline">Cancel</Button>
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? "Connecting..." : "Connect Account"}
          </Button>
        </div>
      </div>
    </div>
  );
}
