import { AppSidebar } from "@/components/ui/app-sicebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathname } = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-auto">
        <SidebarTrigger className="md:hidden block" />
        <div className={cn(pathname !== "/dashboard/chat" && "px-6 py-8")}>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
