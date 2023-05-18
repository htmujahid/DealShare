import { CartContext } from "@/components/ContextProviders";
import { Button, Checkbox, Input, Textarea } from "@/components/Form";
import BlockLoader from "@/components/Loaders/BlockLoader";
import { createCheckoutSession, getPaymentLink } from "@/lib/app/payment";
import { calculateTotalPrice } from "@/lib/app/product";
import getStripe from "@/lib/app/stripe";
import { isEmpty } from "@/lib/app/utils";
import React, { useCallback, useContext, useState } from "react";
import { toast } from "react-hot-toast";

function BillingInfo({ addressDetails, setAddressDetails }) {
  const { cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [stateCountry, setStateCountry] = useState("");
  const [zip, setZip] = useState("");
  const [termCheck, setTermCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const areAllFieldsFilled = useCallback(() => {
    return !(
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(email) ||
      isEmpty(phoneNumber) ||
      isEmpty(address) ||
      isEmpty(town) ||
      isEmpty(stateCountry) ||
      isEmpty(zip)
    );
  }, [
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    town,
    stateCountry,
    zip,
  ]);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const checkoutSession = await createCheckoutSession({
        products: cartItems,
        amount: calculateTotalPrice(cartItems),
        successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/cart?emptyCart=true`,
        cancelUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
        billingInfo: {
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          town,
          stateCountry,
          zip,
        },
      });
      if (checkoutSession.statusCode === 500) {
        toast.error(checkoutSession.message);
        return;
      }

      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      toast.error(error.message);

      setLoading(false);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return loading ? (
    <BlockLoader />
  ) : (
    <div className="flex-1">
      {/* <Accordion>
        <AccordionItem title="Billing Info" expanded> */}
      <div className="mb-16">
        <div className="mb-8">
          <h5 className="pb-1 text-2xl font-bold">Billing Info</h5>
          <p className="pb-1 text-sm text-gray-500">
            Please enter your billing info
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Input
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full"
            placeholder="First Name"
          >
            First Name
          </Input>
          <Input
            onChange={(e) => setLastName(e.target.value)}
            className="w-full"
            placeholder="Last Name"
          >
            Last Name
          </Input>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            placeholder="Email"
            type="email"
          >
            Email
          </Input>
          <Input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full"
            placeholder="Phone Number"
          >
            Phone Number
          </Input>
          <Input
            onChange={(e) => setAddress(e.target.value)}
            onBlur={(e) =>
              setAddressDetails([
                e.target.value,
                addressDetails[1],
                addressDetails[2],
                addressDetails[3],
              ])
            }
            className="w-full"
            placeholder="Address"
          >
            Address
          </Input>
          <Input
            onChange={(e) => setTown(e.target.value)}
            onBlur={(e) =>
              setAddressDetails([
                addressDetails[0],
                e.target.value,
                addressDetails[2],
                addressDetails[3],
              ])
            }
            className="w-full"
            placeholder="Town / City"
          >
            Town / City
          </Input>
          <Input
            onChange={(e) => setStateCountry(e.target.value)}
            onBlur={(e) =>
              setAddressDetails([
                addressDetails[0],
                addressDetails[1],
                addressDetails[2],
                e.target.value,
              ])
            }
            className="w-full"
            placeholder="State Country"
          >
            State Country
          </Input>
          <Input
            onChange={(e) => setZip(e.target.value)}
            onBlur={(e) =>
              setAddressDetails([
                addressDetails[0],
                addressDetails[1],
                e.target.value,
                addressDetails[3],
              ])
            }
            className="w-full"
            placeholder="Zip"
          >
            Zip
          </Input>
        </div>
      </div>
      {/* </AccordionItem> */}
      {/* <AccordionItem title="Payment Method"> */}
      {/* <div className="mb-16">
        <div className="mb-8">
          <h5 className="pb-1 text-2xl font-bold">Checkout</h5>
          <p className="pb-1 text-sm text-gray-500">
            Please enter your payment method
          </p>
        </div>
        <div className="p-4 border rounded-xl">
          <div className="flex justify-between">
            <p className="text-sm font-bold">Credit Card</p>
            <div></div>
          </div>
          <div className="col-span-2">
                  <Input className="w-full" placeholder="Card Number">
                    Card Number
                  </Input>
                </div>
                <Input className="w-full" placeholder="Card Holder">
                  Card Holder
                </Input>
                <div className="flex gap-4">
                  <Input className="w-full" placeholder="Expiration Date">
                    Expiration Date
                  </Input>
                  <Input className="w-full" placeholder="CVV">
                    CVV
                  </Input>
                </div>
        </div>
      </div> */}
      {/* </AccordionItem> */}
      {/* <AccordionItem title="Additional Information"> */}
      <div className="mb-16">
        <div className="mb-8">
          <h5 className="pb-1 text-2xl font-bold">Additional Information</h5>
          <p className="pb-1 text-sm text-gray-500">
            Need something else? We will make it for you
          </p>
        </div>
        <div className="mb-16">
          <Textarea classname="w-full h-32">Additional Information</Textarea>
        </div>
      </div>
      {/* </AccordionItem> */}
      {/* </Accordion> */}
      <div className="mt-8">
        <div className="mb-8">
          <h5 className="pb-1 text-2xl font-bold">Confirmation</h5>
          <p className="pb-1 text-sm text-gray-500">
            We are getting to the end. Just few clicks and your order si ready!
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <Checkbox
            checked={marketingCheck}
            onChange={(e) => setMarketingCheck(e.target.checked)}
          >
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </Checkbox>
          <Checkbox
            checked={termCheck}
            onChange={(e) => setTermCheck(e.target.checked)}
          >
            I agree with our terms and conditions and privacy policy.
          </Checkbox>
        </div>
        <div>
          <Button
            className={`ml-auto ${
              !areAllFieldsFilled() && marketingCheck && termCheck
                ? "opacity-50"
                : ""
            }`}
            variant="primary"
            onClick={handleCheckout}
            disabled={
              areAllFieldsFilled() && marketingCheck && termCheck ? false : true
            }
          >
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
