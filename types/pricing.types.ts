import { Subscription } from "@better-auth/stripe";

export enum PopularPlanType {
  NO = 0,
  YES = 1,
}

export interface PricingCardProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  href: string;
  plan: string;
  successUrl?: string;
  cancelUrl?: string;
  returnUrl?: string;
  redirectUrl?: string;
  paymentLink?: string;
  billing: string;
}

export interface SubscriptionDataType extends Subscription {
  limits: {
    limit: number;
  };
}

export interface Dictionary<T> {
  [key: string]: T;
}
