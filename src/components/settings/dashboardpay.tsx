import { onGetSubscriptionPlan } from "@/actions/settings";
import React from "react";
import Section from "../section-label";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Check, CheckCircle2, Plus } from "lucide-react";
import { pricingCards } from "@/constants/landing-page";
import Modal from "../mondal";
import SubscriptionForm from "../forms/settings/subscription-form";
import Image from "next/image";

type Props = {};

const Dashboardpay = async (props: Props) => {
  const plan = await onGetSubscriptionPlan();
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features;
  if (!planFeatures) return;

  console.log(planFeatures);
  return (
    <div className="lg:col-span-2 flex flex-col = ">
      <h1 className="pb-2 pt-2 font-bold">Payment Card</h1>
      <div className=" ">
        <Modal
          title="Choose A Plan"
          description="Tell us about yourself! What do you do? Let’s tailor your experience so it best suits you."
          image="/images/payment-plan1.jpg"
          trigger={
            plan && plan === "STANDARD" ? (
              <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
                <CardContent className="flex gap-2 items-center">
                  <div className="rounded-full border-2 p-1">
                    <Plus className="text-gray-400" />
                  </div>
                  <CardDescription className="font-semibold">
                    Upgrade Plan
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <Image
                src="/images/creditcard.png"
                width={400}
                height={300}
                alt="image"
              />
            )
          }
        >
          <SubscriptionForm plan={plan!} />
        </Modal>

        
      </div>
      <p className="text-[10px] pl-1 text-slate-600">Card click for upgrad plan</p>
    </div>
  );
};

export default Dashboardpay;
