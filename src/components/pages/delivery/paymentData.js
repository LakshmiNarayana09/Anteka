import {
  CreditCard,
  Wallet,
  Banknote,
  Smartphone,
} from "lucide-react";

const paymentData = [
  {
    id: 1,
    icon: CreditCard,
    title: "Credit / Debit Card",
    description:
      "Pay securely using Visa, MasterCard, or other supported cards.",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Cash on Delivery",
    description:
      "Pay with cash when your order is delivered.",
  },
  {
    id: 3,
    icon: Banknote,
    title: "Bank Transfer",
    description:
      "Transfer payment directly from your bank account.",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Digital Wallet",
    description:
      "Fast and secure payment using supported mobile wallets.",
  },
];

export default paymentData;