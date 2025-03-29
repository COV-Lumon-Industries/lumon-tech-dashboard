import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { postRegisterUser } from '@/services';
import { z } from 'zod';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useAuth } from '@/context/auth-provider';
import { PhoneInput } from '@/components/ui/phone-input';
import { cn } from '@/lib';

export const Route = createFileRoute("/_auth/signup")({
  component: RouteComponent,
});

export const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),

  email: z.string().email("Invalid email format"),

  phone_number: z
    .string()
    .min(9, "Invalid phone number"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long"),
});

function RouteComponent() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: postRegisterUser,
    onSuccess: (data) => {
      login({
        token: data.data.token,
        ...data.data.user,
      });

      navigate({
        to: "/dashboard",
      });
      toast("Account created successfully");
    },
    onError: (err) => {
      const error = err as AxiosError<{ data: string }>;
      console.error("Login error", error.response?.data.data);
      toast("An error occured", {
        description: error.response?.data.data,
        descriptionClassName: "!text-neutral-700",
      });
    },
  });

  const { handleSubmit, Field } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
    onSubmit: async ({ value }) => {
      mutate(value);
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="lg:w-1/2 lg:flex hidden bg-primary"></div>
      <div className="relative flex lg:w-1/2 w-full h-full items-center justify-center">
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
          <h1 className="text-2xl text-center font-semibold mb-2">Sign Up</h1>
          <div className="w-full flex flex-col gap-3">
            <Field
              name="username"
              children={(field) => {
                return (
                  <>
                    <Input
                      id={field.name}
                      label="Username"
                      placeholder="username"
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
              name="email"
              children={(field) => {
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
              name="phone_number"
              children={(field) => {
                return (
                  <div className='w-full flex flex-col gap-2'>
                    <label
                      htmlFor={field.name}
                      className={cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                      )}
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      id={field.name}
                      placeholder="Phone Number"
                      defaultCountry='GH'
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e)}
                    />
                    {field?.state.meta.isTouched && field.state.meta.errors.length ? (
                      <em className="text-xs text-red-700">
                        {field.state.meta.errors.map((error) => error?.message).join(", ")}
                      </em>
                    ) : null}
                  </div>
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
            <Link to="/login" className="text-xs">
              Already have an account?{" "}
              <span className="text-primary">Login here</span>
            </Link>
          </div>
          <Button isLoading={isPending} className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
