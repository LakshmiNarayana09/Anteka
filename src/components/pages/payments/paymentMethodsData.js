import {
  CreditCard,
  Wallet,
  Landmark,
  Smartphone,
} from "lucide-react";

const paymentMethodsData = [
  {
    id: 1,
    icon: CreditCard,
    title: "Card Payment",
    description:
      "Pay securely using Visa, MasterCard, American Express and other supported cards.",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Cash Payment",
    description:
      "Pay in cash when collecting your order from our pharmacy.",
  },
  {
    id: 3,
    icon: Landmark,
    title: "Bank Transfer",
    description:
      "Transfer funds directly from your bank account for eligible orders.",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Online Payment",
    description:
      "Complete your payment online quickly and securely before delivery.",
  },
];

export default paymentMethodsData;