import { useCurrentUser, userRoles } from "@/lib/app/user";
import Page403 from "@/sections/Common/Page403";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Access({ children, waitContent = null, access }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const user = session?.user;
  const { user: currentUser, loading: currentUserLoading } = useCurrentUser();

  //If there are no access defined htmlFor the page, allow the page to be rendered
  if (access == undefined) {
    return children;
  }
  if (!loading && !user) router.push("/auth/login");

  if (
    !loading &&
    !currentUserLoading &&
    user &&
    currentUser &&
    access.includes(user.role)
  ) {
    if (user.role === userRoles.MANUFACTURER) {
      if (
        !currentUser?.businessName ||
        !currentUser?.address ||
        !currentUser?.town ||
        !currentUser?.stateCountry ||
        !currentUser?.zip
      ) {
        router.push("/auth/onboarding");
      }
    }
    return children;
  }

  return <Page403 />;
}

export default Access;
