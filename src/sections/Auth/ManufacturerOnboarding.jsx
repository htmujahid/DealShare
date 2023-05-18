import { Button, Input } from "@/components/Form";
import { AuthContainer } from "@/components/Layouts/Container";
import { updateUser, useCurrentUser, userRoles } from "@/lib/app/user";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function ManufacturerOnboarding() {
  const [loading, setLoading] = useState(false);
  const { user } = useCurrentUser();

  const router = useRouter();

  const businessNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();

  useEffect(() => {
    if (user) {
      if (
        user.businessName &&
        user.address &&
        user.town &&
        user.stateCountry &&
        user.zip
      ) {
        router.replace("/manufacturer");
      }

      if (user.role !== userRoles.MANUFACTURER) {
        router.replace("/");
      }
    }
  }, [user]);

  const handleProfileUpdate = async () => {
    try {
      setLoading(true);
      await updateUser(user._id, {
        businessName: businessNameRef.current.value,
        address: addressRef.current.value,
        town: cityRef.current.value,
        stateCountry: countryRef.current.value,
        zip: zipRef.current.value,
      });
      toast.success("Business sent for approval.");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error(e.message);
    }
  };

  return (
    <AuthContainer>
      <div className="w-[500px] bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center h-full">
          <div>
            {/* <PrimaryLogo /> */}
            <h4 className="text-2xl font-bold text-center">
              You are almost there!
            </h4>
            <p className="text-center text-gray-500">
              Fill in your business details
            </p>
          </div>
          <div className="flex flex-col w-full gap-4 mt-4">
            <Input
              inputRef={businessNameRef}
              placeholder="Awesome Business"
              className="w-full"
            >
              Business Name
            </Input>
            <Input
              inputRef={addressRef}
              placeholder="123 Awesome Street"
              className="w-full"
            >
              Business Address
            </Input>
            <Input
              inputRef={cityRef}
              placeholder="Awesome City"
              className="w-full"
            >
              City
            </Input>
            <Input
              inputRef={countryRef}
              placeholder="Awesome Country"
              className="w-full"
            >
              Country
            </Input>
            <Input inputRef={zipRef} placeholder="12345" className="w-full">
              Zip Code
            </Input>
            <Button
              onClick={handleProfileUpdate}
              variant="primary"
              className="justify-center w-full"
              loading={loading}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </AuthContainer>
  );
}

export default ManufacturerOnboarding;
