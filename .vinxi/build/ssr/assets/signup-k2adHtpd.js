import { jsxs as n, jsx as a, Fragment as o } from "react/jsx-runtime";
import { I as l, B as p } from "./input-BnCMX1ET.js";
import { useMutation as c } from "@tanstack/react-query";
import { Link as u } from "@tanstack/react-router";
import { useForm as d } from "@tanstack/react-form";
import { p as h } from "./index-Dp7-MY6g.js";
import { toast as g } from "sonner";
import { u as f } from "./ssr-y1P2B_7Y.js";
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
const q = function () {
  const { mutate: m, isPending: s } = c({
      mutationKey: ["login"],
      mutationFn: h,
      onSuccess: (e) => {},
      onError: (e) => {
        const r = e;
        console.error("Login error", r.response?.data.data),
          g("An error occured", {
            description: r.response?.data.data,
            descriptionClassName: "!text-neutral-700",
          });
      },
    }),
    { handleSubmit: i, Field: t } = d({
      defaultValues: { username: "", email: "", password: "" },
      onSubmit: async ({ value: e }) => {
        m(e);
      },
      validators: { onChange: f },
    });
  return n("div", {
    className: "w-full h-screen flex flex-row",
    children: [
      a("div", { className: "lg:w-1/2 lg:flex hidden bg-primary" }),
      n("div", {
        className:
          "relative flex lg:w-1/2 w-full h-full items-center justify-center",
        children: [
          a("img", {
            src: "/lumon.png",
            alt: "lumon logo",
            className: "absolute top-0 left-0 w-16 h-16 object-cover",
          }),
          n("form", {
            onSubmit: (e) => {
              e.preventDefault(), e.stopPropagation(), i();
            },
            className: "flex w-[320px] items-start flex-col gap-4",
            children: [
              a("h1", {
                className: "text-2xl text-center font-semibold mb-2",
                children: "Sign Up",
              }),
              n("div", {
                className: "w-full flex flex-col gap-3",
                children: [
                  a(t, {
                    name: "username",
                    children: (e) =>
                      a(o, {
                        children: a(l, {
                          id: e.name,
                          label: "Username",
                          placeholder: "username",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (r) => e.handleChange(r.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a(t, {
                    name: "email",
                    children: (e) =>
                      a(o, {
                        children: a(l, {
                          id: e.name,
                          label: "Email",
                          type: "email",
                          placeholder: "Email",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (r) => e.handleChange(r.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a(t, {
                    name: "password",
                    children: (e) =>
                      a(o, {
                        children: a(l, {
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
                  n(u, {
                    to: "/login",
                    className: "text-xs",
                    children: [
                      "Already have an account? ",
                      a("span", {
                        className: "text-primary",
                        children: "Login here",
                      }),
                    ],
                  }),
                ],
              }),
              a(p, { isLoading: s, className: "w-full", children: "Login" }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { q as component };
