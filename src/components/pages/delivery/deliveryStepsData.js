import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
} from "lucide-react";

const deliverySteps = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "Place Order",
    description:
      "Choose your medicines and complete your order online.",
  },
  {
    id: 2,
    icon: Package,
    title: "Packaging",
    description:
      "Our pharmacists carefully prepare and pack your order.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Delivery",
    description:
      "Your package is shipped using our trusted delivery partners.",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Receive Order",
    description:
      "Receive your medicines safely at your doorstep or collect them in-store.",
  },
];

export default deliverySteps;