import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Access({ children, waitContent = null, access }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const user = session?.user;

  //If there are no access defined htmlFor the page, allow the page to be rendered
  if (access == undefined) {
    return children;
  }
  if (!loading && !user) router.push("/auth/login");

  if (!loading && user && access.includes(user.role)) return children;

  return waitContent;
}

export default Access;
