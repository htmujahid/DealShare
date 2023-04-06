import { Accordion, AccordionItem } from "@/components/Accordion/Accordion";
import { CartContext } from "@/components/ContextProviders";
import { Button, Checkbox, Input, Textarea } from "@/components/Form";
import { getPaymentLink } from "@/lib/app/payment";
import { calculateTotalPrice } from "@/lib/app/product";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

function BillingInfo() {
  const { cartItems } = useContext(CartContext);
  const [checkoutURL, setCheckoutURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckoutLink = async () => {
    try {
      setLoading(true);
      const url = await getPaymentLink({
        amount: calculateTotalPrice(cartItems),
      });
      console.log(url);
      setCheckoutURL(url);
      setLoading(false);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className="flex-1">
      <Accordion>
        <AccordionItem title="Billing Info" expanded>
          <div>
            <div className="mb-8">
              <h5 className="pb-1 text-2xl font-bold">Billing Info</h5>
              <p className="pb-1 text-sm text-gray-500">
                Please enter your billing info
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Input className="w-full" placeholder="First Name">
                First Name
              </Input>
              <Input className="w-full" placeholder="Last Name">
                Last Name
              </Input>
              <Input className="w-full" placeholder="Email" type="email">
                Email
              </Input>
              <Input className="w-full" placeholder="Phone Number">
                Phone Number
              </Input>
              <Input className="w-full" placeholder="Address">
                Address
              </Input>
              <Input className="w-full" placeholder="Town / City">
                Town / City
              </Input>
              <Input className="w-full" placeholder="State Country">
                State Country
              </Input>
              <Input className="w-full" placeholder="Zip">
                Zip
              </Input>
            </div>
            <div className="ml-auto w-[100px] mt-8">
              <Button
                className="justify-center w-full"
                onClick={handleCheckoutLink}
                variant="primary"
              >
                Next
              </Button>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title="Payment Method">
          <div className="mb-16">
            <div className="mb-8">
              <h5 className="pb-1 text-2xl font-bold">Payment Method</h5>
              <p className="pb-1 text-sm text-gray-500">
                Please enter your payment method
              </p>
            </div>
            <div className="p-4 border rounded-xl">
              <div className="flex justify-between">
                <p className="text-sm font-bold">Credit Card</p>
                <div></div>
              </div>
              <iframe
                className="w-full h-[500px]"
                src="https://sandbox.api.getsafepay.com/checkout/pay?beacon=track_65fd3fc7-6e7d-4465-adb2-9f56da9c71d0&cancel_url=http%3A%2F%2Fexample.com%2Fcancel&env=sandbox&order_id=T800&redirect_url=http%3A%2F%2Fexample.com%2Fsuccess&source=custom&webhooks=true"
              ></iframe>
              {/* <div className="col-span-2">
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
                </div> */}
            </div>
          </div>
        </AccordionItem>
        <AccordionItem title="Additional Information">
          <div className="mb-16">
            <div className="mb-8">
              <h5 className="pb-1 text-2xl font-bold">
                Additional Information
              </h5>
              <p className="pb-1 text-sm text-gray-500">
                Need something else? We will make it for you
              </p>
            </div>
            <div className="mb-16">
              <Textarea classname="w-full h-32">
                Additional Information
              </Textarea>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
      <div className="mt-8">
        <div className="mb-8">
          <h5 className="pb-1 text-2xl font-bold">Confirmation</h5>
          <p className="pb-1 text-sm text-gray-500">
            We are getting to the end. Just few clicks and your order si ready!
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <Checkbox>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </Checkbox>
          <Checkbox>
            I agree with our terms and conditions and privacy policy.
          </Checkbox>
        </div>
        <div>
          <Button variant="primary">Complete Order</Button>
        </div>
      </div>
    </div>
  );
}

export default BillingInfo;
