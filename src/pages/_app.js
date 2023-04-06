import Access from "@/components/auth-checkers/access";
import { CartContextProvider } from "@/components/ContextProviders";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import App from "@/components/Layouts/App";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  function withRouteProtectors(children) {
    return <Access access={Component.routeProtector}>{children}</Access>;
  }

  return (
    <SessionProvider session={session}>
      <CartContextProvider>
        {withRouteProtectors(
          <App>
            <Component {...pageProps} />
            <Toaster />
          </App>
        )}
      </CartContextProvider>
    </SessionProvider>
  );
}
