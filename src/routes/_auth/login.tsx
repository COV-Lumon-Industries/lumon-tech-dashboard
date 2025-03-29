import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { postLoginUser } from "@/services";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useAuth } from "@/context/auth-provider";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: postLoginUser,
    onSuccess: (data) => {
      login({
        token: data.data.token,
        ...data.data.user,
      });

      navigate({
        to: "/dashboard",
      });
    },
    onError: (err) => {
      const error = err as AxiosError<{ data: string }>;
      toast("An error occured", {
        description: error.response?.data.data,
        descriptionClassName: "!text-neutral-700",
      });
    },
  });

  const { handleSubmit, Field } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      mutate(value);
    },
  });

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="lg:w-1/2 lg:flex hidden bg-primary"></div>
      <div className="relative flex lg:w-1/2 w-full h-full items-center justify-center ">
        <img
          src="/lumon.png"
          alt="lumon logo"
          className="absolute top-0 left-0 w-16 h-16 object-cover"
        />
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
              name="username"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? "A first name is required"
                    : value.length < 3
                      ? "First name must be at least 3 characters"
                      : undefined,
              }}
              children={(field) => {
                return (
                  <>
                    <Input
                      id={field.name}
                      label="Username"
                      placeholder="Username"
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
            <Link to="/signup" className="text-xs">
              Don't have an account?{" "}
              <span className="text-primary">Create here</span>
            </Link>
          </div>
          <Button isLoading={isPending} className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
