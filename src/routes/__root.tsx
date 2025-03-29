import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { IAuthContext } from "../context/auth-provider";
import { Toaster } from '@/components/ui/sonner';


export const Route = createRootRouteWithContext<{
  auth: IAuthContext;
}>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <Toaster position='top-right' />
    </>
  ),
})