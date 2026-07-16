import {
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

const contactData = {
  address: {
    icon: MapPin,
    title: "Address",
    value: [
      "129226, New York",
      "123 Wellness Street",
      "NY 10001, USA",
    ],
  },

  phones: [
    {
      icon: Phone,
      value: "+1 (800) 777-2233",
    },
    {
      icon: Phone,
      value: "+1 (495) 223-3403",
    },
    {
      icon: Phone,
      value: "+1 (800) 220-2200",
    },
  ],

  emails: [
    {
      icon: Mail,
      value: "info@healthcare.com",
    },
  ],

  company: {
    icon: Building2,
    title: "Company Details",
    value: [
      "HealthCare Ltd.",
      "Registration No: 45871234",
      "VAT No: US987654321",
    ],
  },
};

export default contactData;