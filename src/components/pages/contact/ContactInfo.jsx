import React from "react";
import contactData from "./contactData";
import ContactCard from "./ContactCard";

const ContactInfo = () => {
  return (
    <section className="space-y-6">

      <ContactCard
        icon={contactData.address.icon}
        title={contactData.address.title}
      >

        <div className="space-y-2 text-gray-600 leading-7">

          {contactData.address.value.map((line) => (
            <p key={line}>{line}</p>
          ))}

        </div>

      </ContactCard>

      

      <ContactCard
        icon={contactData.phones[0].icon}
        title="Phone Numbers"
      >

        <div className="space-y-3">

          {contactData.phones.map((phone) => (
            <p
              key={phone.value}
              className="text-gray-600"
            >
              {phone.value}
            </p>
          ))}

        </div>

      </ContactCard>


      <ContactCard
        icon={contactData.emails[0].icon}
        title="Email"
      >

        {contactData.emails.map((email) => (
          <p
            key={email.value}
            className="text-gray-600"
          >
            {email.value}
          </p>
        ))}

      </ContactCard>


      <ContactCard
        icon={contactData.company.icon}
        title={contactData.company.title}
      >

        <div className="space-y-2 text-gray-600 leading-7">

          {contactData.company.value.map((item) => (
            <p key={item}>{item}</p>
          ))}

        </div>

      </ContactCard>

    </section>
  );
};

export default ContactInfo;