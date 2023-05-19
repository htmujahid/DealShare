import { DarkButton } from "@/components/Buttons";
import { Button } from "@/components/Form";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Page403 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col justify-center gap-y-4">
        <span className="text-[100px] text-center material-symbols-outlined">
          sentiment_very_dissatisfied
        </span>
        <h1 className="text-lg font-medium">
          You are not authorized to access this page
        </h1>
        <DarkButton
          onClick={() => router.replace("/account")}
          className="justify-center"
        >
          Go to Homepage
        </DarkButton>
        <Button
          onClick={async () => {
            await signOut();
            router.replace("/auth/login");
          }}
          variant="primary"
        >
          Go to Login
        </Button>
      </div>
    </div>
  );
};

export default Page403;
