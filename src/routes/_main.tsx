import { STORAGE_KEY } from "@/context/auth-provider";
import { createFileRoute, Outlet, redirect, useRouter, } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_main")({
  component: MainLayout,
});

function MainLayout() {
  const router = useRouter();
  useEffect(() => {
    (() => {
      const storedUser = localStorage.getItem(STORAGE_KEY);
      if (!storedUser) {
        router.navigate({
          to: "/login",
        });
      }
    })();
  }, [])

  return (
    <main className="flex flex-row w-screen h-screen overflow-clip scrollbar-none">
      <Outlet />
    </main>
  );
}
