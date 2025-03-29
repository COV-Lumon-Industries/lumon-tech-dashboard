import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { wait } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

type formType = {
  email: string;
  password: string;
};

function RouteComponent() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: formType) => {
      await wait(2000);
      console.log("Login data", data);
    },
    onSuccess: (data) => {
      console.log("Login successful", data);
    },
    onError: (error) => {
      console.error("Login error", error);
    },
  });

  const { handleSubmit, Field } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      mutate(value);
    },
  });

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="lg:w-1/2 lg:flex hidden bg-blue-900"></div>
      <div className="flex lg:w-1/2 w-full h-full items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          className="flex w-[320px] items-start flex-col gap-4"
        >
          <h1 className="text-2xl text-center font-semibold mb-2">Login</h1>
          <div className="w-full flex flex-col gap-3">
            <Field
              name="email"
              children={(field) => {
                // Avoid hasty abstractions. Render props are great!
                return (
                  <>
                    <Input
                      id={field.name}
                      label="Email"
                      type="email"
                      placeholder="Email"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      fieldInfo={field}
                    />
                  </>
                );
              }}
            />
            <Field
              name="password"
              children={(field) => {
                return (
                  <>
                    <Input
                      id={field.name}
                      label="Password"
                      type="password"
                      placeholder="Password"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      fieldInfo={field}
                    />
                  </>
                );
              }}
            />
          </div>
          <Button isLoading={isPending} className="">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
