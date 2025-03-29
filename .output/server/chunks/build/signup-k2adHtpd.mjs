import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { N, y } from "./input-BnCMX1ET.mjs";
import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { n } from "./index-Dp7-MY6g.mjs";
import { toast } from "sonner";
import { U as Ut } from "../nitro/nitro.mjs";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "axios";
import "node:http";
import "node:https";
import "node:events";
import "node:buffer";
import "node:fs";
import "node:path";
import "node:crypto";
import "node:async_hooks";
import "vinxi/lib/invariant";
import "vinxi/lib/path";
import "node:url";
import "@tanstack/router-core";
import "tiny-invariant";
import "@tanstack/start-server-core";
import "@tanstack/start-client-core";
import "next-themes";
import "zod";
import "node:stream";
import "isbot";
import "react-dom/server";

const q = function () {
  const { mutate: m, isPending: s } = useMutation({
      mutationKey: ["login"],
      mutationFn: n,
      onSuccess: (e) => {},
      onError: (e) => {
        var _a, _b;
        const r = e;
        console.error(
          "Login error",
          (_a = r.response) == null ? void 0 : _a.data.data,
        ),
          toast("An error occured", {
            description: (_b = r.response) == null ? void 0 : _b.data.data,
            descriptionClassName: "!text-neutral-700",
          });
      },
    }),
    { handleSubmit: i, Field: t } = useForm({
      defaultValues: { username: "", email: "", password: "" },
      onSubmit: async ({ value: e }) => {
        m(e);
      },
      validators: { onChange: Ut },
    });
  return jsxs("div", {
    className: "w-full h-screen flex flex-row",
    children: [
      jsx("div", { className: "lg:w-1/2 lg:flex hidden bg-primary" }),
      jsxs("div", {
        className:
          "relative flex lg:w-1/2 w-full h-full items-center justify-center",
        children: [
          jsx("img", {
            src: "/lumon.png",
            alt: "lumon logo",
            className: "absolute top-0 left-0 w-16 h-16 object-cover",
          }),
          jsxs("form", {
            onSubmit: (e) => {
              e.preventDefault(), e.stopPropagation(), i();
            },
            className: "flex w-[320px] items-start flex-col gap-4",
            children: [
              jsx("h1", {
                className: "text-2xl text-center font-semibold mb-2",
                children: "Sign Up",
              }),
              jsxs("div", {
                className: "w-full flex flex-col gap-3",
                children: [
                  jsx(t, {
                    name: "username",
                    children: (e) =>
                      jsx(Fragment, {
                        children: jsx(N, {
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
                  jsx(t, {
                    name: "email",
                    children: (e) =>
                      jsx(Fragment, {
                        children: jsx(N, {
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
                  jsx(t, {
                    name: "password",
                    children: (e) =>
                      jsx(Fragment, {
                        children: jsx(N, {
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
                  jsxs(Link, {
                    to: "/login",
                    className: "text-xs",
                    children: [
                      "Already have an account? ",
                      jsx("span", {
                        className: "text-primary",
                        children: "Login here",
                      }),
                    ],
                  }),
                ],
              }),
              jsx(y, { isLoading: s, className: "w-full", children: "Login" }),
            ],
          }),
        ],
      }),
    ],
  });
};

export { q as component };
//# sourceMappingURL=signup-k2adHtpd.mjs.map
