import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import http from "@/lib/axios";
import { LoanSchema, LoanSchemaTypeValues } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function RequestLoanDialog() {
  const form = useForm<LoanSchemaTypeValues>({
    resolver: zodResolver(LoanSchema),
    defaultValues: {
      amount: 1000,
      interest_rate: 5.75,
      loan_duration: 24,
      purpose: "Home Renovation",
    },
  });

  
  const m = useMutation({
    mutationKey: ["request-loan"],
    mutationFn: async (values: LoanSchemaTypeValues) => {
      return http.post("/loan-requests", {
        ...values,
        amount: values.amount * 100,
      });
    },
    onSuccess: () => {
      form.reset();
      toast.success("Loan request submitted successfully");
    },
  });

  function onSubmit(values: LoanSchemaTypeValues) {
    m.mutate(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white">
          Request Loan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a loan</DialogTitle>
          <DialogDescription>
            Fill out this form for peer-to-peer loans. Note: Your credit score
            determines how trust worthy you are for this loan
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Amount</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interest_rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interest Rate (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loan_duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Duration (months)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" isLoading={m.isPending} className="w-full">
              Submit Loan Application
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
