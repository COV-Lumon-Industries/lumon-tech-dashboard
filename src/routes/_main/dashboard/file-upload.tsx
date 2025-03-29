// src/routes/_main/dashboard/addaccount/mtn-upload.tsx
import { Button } from "@/components/ui/button";
import { FileUpload03 } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { WaitingDialog } from "@/features/home/processing-dialog";
import { CreateTransactionData, PostDocument } from "@/services/account";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_main/dashboard/file-upload")({
  component: MtnUploadPage,
});

function MtnUploadPage() {
  const [uriId, setUriId] = useState("");

  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: ["create_transactions", uriId],
    mutationFn: CreateTransactionData,
    onSuccess:()=>{
      setOpen(false);
    },
    onError:()=>{
      setOpen(false);
      toast.error("Error creating transaction data")
    }
  });

  const { mutate: postDocument, isPending: isPostingDocument } = useMutation({
    mutationKey: ["post_documents", uriId],
    mutationFn: PostDocument,
    onSuccess: () => {
      mutate(uriId);
    },
  });

  console.log("apple",uriId)
  function handleConnnectAccount() {
    if (uriId) {
      setOpen(true);
      postDocument(uriId);
    }
  }
  return (
    <>
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

            <FileUpload03 setUriId={setUriId} />
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <Button isLoading={isPostingDocument || isPending} onClick={()=>{
              mutate(uriId)
            }}>
              Connect Account
            </Button>
          </div>
        </div>
      </div>
      <WaitingDialog open={open} setOpen={setOpen} />
    </>
  );
}
