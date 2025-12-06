"use client";

import { urlFor } from "@/lib/image";
import ScrollFadeWrapper from "./ScrollFadeWrapper";   
import "../styles/plans.css";

export default function Plans({ plans }) {
  if (!plans || plans.length === 0) return null;
    {console.log("Sorted Plans:", plans)}


  return (
    
    <section className="plans-wrapper">
    
      {plans.map((plan) => {
        const imageUrl = plan.image ? urlFor(plan.image).url() : null;

        return (
          <ScrollFadeWrapper key={plan._id}>     
            <div className="plan-card">

              {/* LEFT SIDE */}
              <div className="plan-left">
                <h1 className="plan-name">{plan.name}</h1>
                <h2 className="plan-subtitle">{plan.subtitle}</h2>

                {/* PRICING */}
                <div className="plan-pricing-row">
                  <div className="plan-price-box">
                    <h3>{plan.price}</h3>
                    <p>Cancel anytime</p>
                  </div>

                  <div className="plan-frequency">
                    <p>Monthly payment</p>
                  </div>

                  <div className="plan-annual">
                    <p>Annual payment</p>
                    <span>Save 20%</span>
                  </div>

                  <button className="plan-subscribe-btn">Subscribe →</button>
                </div>

                {/* FEATURES */}
                <div className="plan-features">
                  {plan.features?.map((feat, idx) => (
                    <p key={idx} className="plan-feature-item">
                      <span className="feature-number">{idx + 1}</span>
                      {feat}
                    </p>
                  ))}
                </div>

                {/* INCLUDED SERVICES */}
                <div className="included-services">
                  <h4>Included Services</h4>
                  <ul>
                    {plan.features?.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="plan-right">
                {imageUrl && <img src={imageUrl} alt={plan.name} />}
              </div>

            </div>
          </ScrollFadeWrapper>
        );
      })}
    </section>
  );
}
