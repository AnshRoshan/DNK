import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Dak Ghar Niryat Kendra (DNK) is an initiative from the Department of Posts and CBIC. The name translates to "export facilitation center". The service aims to help small and medium business exporters. 
          DNKs are a one-stop destination for exporters. They provide assistance with export-related documentation, logistics, customs procedures, and packing. 
          Exporters can electronically file a Portal Bill of Export and then present the parcel at a DNK for export. 122 DNKs have been opened in Post. 
          The Department of Posts launched the initiative to promote e-commerce through post offices.
          Dak Ghar Niryat Kendra (DNK) is an initiative of the Department of Posts and Central Board of Indirect Taxes and Customs (CBIC) to provide a one-stop destination for exporters, offering comprehensive assistance and streamlined processes for export-related documentation, logistics, customs procedures, and packing 12. The DNK acts as a single-window counter for MSME exporters, taking care of end-to-end booking, transmission, and delivery of their products all over the world 1. The small exporters are able to electronically file a Portal Bill of Export and then present the parcel at DNK for export 3. As of now, 122 DNKs have been opened in Post Offices 3.
          You can access the DNK customer portal at dnk.cept.gov.in.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
