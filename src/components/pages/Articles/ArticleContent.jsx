import React from "react";
import ArticleSection from "./ArticleSection";
import InfoBox from "./InfoBox";
import QuoteBlock from "./QuoteBlock";
import ComparisonTable from "./ComparisonTable";
import ArticleImage from "./ArticleImage";
import ImageGallery from "./ImageGallery";
import medicineImage from '../../../assets/blog/blog1.jpg'

const ArticleContent = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 lg:px-0 py-12">

      <p className="text-lg text-gray-600 leading-9 mb-8">
        Medicines are an essential part of modern healthcare. Taking them
        correctly helps improve recovery, manage chronic illnesses, and
        prevent complications. Understanding how medicines work and how to
        use them safely is important for everyone.
      </p>

      <ArticleSection title="Why Proper Medicine Usage Matters">

        <p>
          Medicines should always be taken according to the advice of your
          doctor or pharmacist. Incorrect dosage or timing can reduce
          effectiveness and sometimes lead to unwanted side effects.
        </p>

        <p>
          Reading medicine labels carefully and following storage
          instructions ensures that medications remain effective throughout
          their shelf life.
        </p>

      </ArticleSection>

      <InfoBox>
        Never change your prescribed dosage without consulting a healthcare
        professional. Self-medication may lead to serious health risks.
      </InfoBox>

      <ArticleSection title="Best Practices">

        <ul className="list-disc pl-6 space-y-3">
          <li>Always read the medicine label.</li>

          <li>Take the correct dosage.</li>

          <li>Store medicines away from sunlight and moisture.</li>

          <li>Keep medicines out of children's reach.</li>

          <li>Check the expiry date before use.</li>
        </ul>

      </ArticleSection>

      <ArticleSection title="Steps for Safe Medication">

        <ol className="list-decimal pl-6 space-y-3">
          <li>Consult your doctor.</li>

          <li>Purchase medicines from trusted pharmacies.</li>

          <li>Follow dosage instructions carefully.</li>

          <li>Complete the prescribed course.</li>

          <li>Report any unusual side effects immediately.</li>
        </ol>

      </ArticleSection>

      <ArticleSection title="Medicine Safety">
          <p>
            Always follow your doctor's instructions and never exceed the
            recommended dosage.
          </p>
        </ArticleSection>

        <QuoteBlock />

        <ComparisonTable />

        <ArticleImage
          src={medicineImage}
          caption="Safe medicine storage helps maintain effectiveness."
        />

        <ImageGallery />
      

    </section>
  );
};

export default ArticleContent;