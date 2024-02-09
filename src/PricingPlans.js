import React from "react";
import { plans } from "./plans";
import { PlanCard } from "./PlanCard";

export function PricingPlans() {
  return (
    <div className="pricing-plans">
      {plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}
