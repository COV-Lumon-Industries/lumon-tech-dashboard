import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider, { useAuth } from "./context/auth-provider";
import "./index.css";

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ 
  routeTree,
  context: {
    auth: undefined!,
  },
 })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const queryClient = new QueryClient();

function InnerApp() {
  const auth = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ auth }} />
    </QueryClientProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}