import { jsxs as a, jsx as t, Fragment as n } from "react/jsx-runtime";
import { I as s, B as u } from "./input-BnCMX1ET.js";
import { useMutation as d } from "@tanstack/react-query";
import { useNavigate as h, Link as g } from "@tanstack/react-router";
import { useForm as f } from "@tanstack/react-form";
import { a as x } from "./index-Dp7-MY6g.js";
import { toast as v } from "sonner";
import { a as w } from "./ssr-y1P2B_7Y.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "axios";
import "next-themes";
import "zod";
import "tiny-invariant";
import "node:stream";
import "isbot";
import "react-dom/server";
import "@tanstack/start-server-core";
const H = function () {
  const { login: l } = w(),
    m = h(),
    { mutate: i, isPending: c } = d({
      mutationKey: ["login"],
      mutationFn: x,
      onSuccess: (e) => {
        l({ token: e.data.token, ...e.data.user }), m({ to: "/dashboard" });
      },
      onError: (e) => {
        v("An error occured", {
          description: e.response?.data.data,
          descriptionClassName: "!text-neutral-700",
        });
      },
    }),
    { handleSubmit: p, Field: o } = f({
      defaultValues: { username: "", password: "" },
      onSubmit: async ({ value: e }) => {
        i(e);
      },
    });
  return a("div", {
    className: "w-full h-screen flex flex-row",
    children: [
      t("div", { className: "lg:w-1/2 lg:flex hidden bg-primary" }),
      a("div", {
        className:
          "relative flex lg:w-1/2 w-full h-full items-center justify-center ",
        children: [
          t("img", {
            src: "/lumon.png",
            alt: "lumon logo",
            className: "absolute top-0 left-0 w-16 h-16 object-cover",
          }),
          a("form", {
            onSubmit: (e) => {
              e.preventDefault(), e.stopPropagation(), p();
            },
            className: "flex w-[320px] items-start flex-col gap-4",
            children: [
              t("h1", {
                className: "text-2xl text-center font-semibold mb-2",
                children: "Login",
              }),
              a("div", {
                className: "w-full flex flex-col gap-3",
                children: [
                  t(o, {
                    name: "username",
                    validators: {
                      onChange: ({ value: e }) =>
                        e
                          ? e.length < 3
                            ? "First name must be at least 3 characters"
                            : void 0
                          : "A first name is required",
                    },
                    children: (e) =>
                      t(n, {
                        children: t(s, {
                          id: e.name,
                          label: "Username",
                          placeholder: "Username",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (r) => e.handleChange(r.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  t(o, {
                    name: "password",
                    children: (e) =>
                      t(n, {
                        children: t(s, {
                          id: e.name,
                          label: "Password",
                          type: "password",
                          placeholder: "Password",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (r) => e.handleChange(r.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a(g, {
                    to: "/signup",
                    className: "text-xs",
                    children: [
                      "Don't have an account? ",
                      t("span", {
                        className: "text-primary",
                        children: "Create here",
                      }),
                    ],
                  }),
                ],
              }),
              t(u, { isLoading: c, className: "w-full", children: "Login" }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { H as component };
