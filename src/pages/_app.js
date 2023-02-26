import Access from "@/components/auth-checkers/access";
import { CartContextProvider } from "@/components/ContextProviders";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({
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
          <>
            <Component {...pageProps} />
            <Toaster />
          </>
        )}
      </CartContextProvider>
    </SessionProvider>
  );
}
