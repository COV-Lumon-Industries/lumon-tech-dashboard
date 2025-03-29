import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { N, y } from './input-BnCMX1ET.mjs';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { a } from './index-Dp7-MY6g.mjs';
import { toast } from 'sonner';
import { O as Ot } from '../nitro/nitro.mjs';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import 'axios';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/start-client-core';
import 'next-themes';
import 'zod';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const H = function() {
  const { login: l } = Ot(), m = useNavigate(), { mutate: i, isPending: c } = useMutation({ mutationKey: ["login"], mutationFn: a, onSuccess: (e) => {
    l({ token: e.data.token, ...e.data.user }), m({ to: "/dashboard" });
  }, onError: (e) => {
    var _a;
    toast("An error occured", { description: (_a = e.response) == null ? void 0 : _a.data.data, descriptionClassName: "!text-neutral-700" });
  } }), { handleSubmit: p, Field: o } = useForm({ defaultValues: { username: "", password: "" }, onSubmit: async ({ value: e }) => {
    i(e);
  } });
  return jsxs("div", { className: "w-full h-screen flex flex-row", children: [jsx("div", { className: "lg:w-1/2 lg:flex hidden bg-primary" }), jsxs("div", { className: "relative flex lg:w-1/2 w-full h-full items-center justify-center ", children: [jsx("img", { src: "/lumon.png", alt: "lumon logo", className: "absolute top-0 left-0 w-16 h-16 object-cover" }), jsxs("form", { onSubmit: (e) => {
    e.preventDefault(), e.stopPropagation(), p();
  }, className: "flex w-[320px] items-start flex-col gap-4", children: [jsx("h1", { className: "text-2xl text-center font-semibold mb-2", children: "Login" }), jsxs("div", { className: "w-full flex flex-col gap-3", children: [jsx(o, { name: "username", validators: { onChange: ({ value: e }) => e ? e.length < 3 ? "First name must be at least 3 characters" : void 0 : "A first name is required" }, children: (e) => jsx(Fragment, { children: jsx(N, { id: e.name, label: "Username", placeholder: "Username", name: e.name, value: e.state.value, onBlur: e.handleBlur, onChange: (r) => e.handleChange(r.target.value), fieldInfo: e }) }) }), jsx(o, { name: "password", children: (e) => jsx(Fragment, { children: jsx(N, { id: e.name, label: "Password", type: "password", placeholder: "Password", name: e.name, value: e.state.value, onBlur: e.handleBlur, onChange: (r) => e.handleChange(r.target.value), fieldInfo: e }) }) }), jsxs(Link, { to: "/signup", className: "text-xs", children: ["Don't have an account? ", jsx("span", { className: "text-primary", children: "Create here" })] })] }), jsx(y, { isLoading: c, className: "w-full", children: "Login" })] })] })] });
};

export { H as component };
//# sourceMappingURL=login-DG1dOCiZ.mjs.map
