import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AppSidebar } from "@/components/ui/app-sicebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const Route = createFileRoute("/_main/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-auto">
            
           
        <div className=" px-6 py-8">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
