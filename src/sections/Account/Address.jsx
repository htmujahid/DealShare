import { Button, Input } from "@/components/Form";
import { updateUser, useCurrentUser } from "@/lib/app/user";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

function Address() {
  const [loading, setLoading] = useState(false);
  const { user } = useCurrentUser();

  const addressRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const zipCodeRef = useRef();

  const handleAddressSave = async () => {
    try {
      await updateUser(user._id, {
        address: addressRef.current.value,
        city: cityRef.current.value,
        country: countryRef.current.value,
        zipCode: zipCodeRef.current.value,
      });
      toast.success("Address updated successfully.");
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    if (user) {
      addressRef.current.value = user.address ?? "";
      cityRef.current.value = user.city ?? "";
      countryRef.current.value = user.country ?? "";
      zipCodeRef.current.value = user.zipCode ?? "";
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Input inputRef={addressRef} placeholder="Address" className="w-full">
          Address
        </Input>
        <Input inputRef={cityRef} placeholder="City" className="w-full">
          City
        </Input>
        <Input inputRef={countryRef} placeholder="Country" className="w-full">
          Country
        </Input>
        <Input inputRef={zipCodeRef} placeholder="Zip Code" className="w-full">
          Zip Code
        </Input>
      </div>
      <Button
        onClick={handleAddressSave}
        type="primary"
        className="w-fit mx-auto"
      >
        Save
      </Button>
    </div>
  );
}

export default Address;
