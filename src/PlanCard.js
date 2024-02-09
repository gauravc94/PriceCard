import React from "react";


export function PlanCard({ plan }) {
  return (
    <div className="plan-card">
      <h4>{plan.name}</h4>
      <h2>{plan.price}</h2>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
}
