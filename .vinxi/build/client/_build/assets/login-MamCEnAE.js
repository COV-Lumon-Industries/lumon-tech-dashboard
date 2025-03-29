import { a as c, b as u, t as d, j as a } from "./client-B6Fwjkna.js";
import { I as t, B as h } from "./input-CHU7cpM5.js";
import { u as x, b as p, a as g, L as j } from "./index-B1QYg5Sc.js";
const N = function () {
  const { login: r } = c(),
    o = u(),
    { mutate: l, isPending: i } = x({
      mutationKey: ["login"],
      mutationFn: p,
      onSuccess: (e) => {
        r({ token: e.data.token, ...e.data.user }), o({ to: "/dashboard" });
      },
      onError: (e) => {
        d("An error occured", {
          description: e.response?.data.data,
          descriptionClassName: "!text-neutral-700",
        });
      },
    }),
    { handleSubmit: m, Field: n } = g({
      defaultValues: { username: "", password: "" },
      onSubmit: async ({ value: e }) => {
        l(e);
      },
    });
  return a.jsxs("div", {
    className: "w-full h-screen flex flex-row",
    children: [
      a.jsx("div", { className: "lg:w-1/2 lg:flex hidden bg-primary" }),
      a.jsxs("div", {
        className:
          "relative flex lg:w-1/2 w-full h-full items-center justify-center ",
        children: [
          a.jsx("img", {
            src: "/lumon.png",
            alt: "lumon logo",
            className: "absolute top-0 left-0 w-16 h-16 object-cover",
          }),
          a.jsxs("form", {
            onSubmit: (e) => {
              e.preventDefault(), e.stopPropagation(), m();
            },
            className: "flex w-[320px] items-start flex-col gap-4",
            children: [
              a.jsx("h1", {
                className: "text-2xl text-center font-semibold mb-2",
                children: "Login",
              }),
              a.jsxs("div", {
                className: "w-full flex flex-col gap-3",
                children: [
                  a.jsx(n, {
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
                      a.jsx(a.Fragment, {
                        children: a.jsx(t, {
                          id: e.name,
                          label: "Username",
                          placeholder: "Username",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (s) => e.handleChange(s.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a.jsx(n, {
                    name: "password",
                    children: (e) =>
                      a.jsx(a.Fragment, {
                        children: a.jsx(t, {
                          id: e.name,
                          label: "Password",
                          type: "password",
                          placeholder: "Password",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (s) => e.handleChange(s.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a.jsxs(j, {
                    to: "/signup",
                    className: "text-xs",
                    children: [
                      "Don't have an account? ",
                      a.jsx("span", {
                        className: "text-primary",
                        children: "Create here",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(h, {
                isLoading: i,
                className: "w-full",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { N as component };
