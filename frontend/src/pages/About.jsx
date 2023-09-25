import React from "react"
import Layout from "../components/Layout/Layout"

export const About = () => {
  {
    /* <div className="col-md-6 h-fit min-h-screen "> */
  }
  return (
    <Layout>
      <div className='flex h-fit min-h-screen'>
        <img className='h-64' src='/logo2.jpg' alt='DAK GHAR NIRYAT KENDRA' />
        <span className="mt-16 ">
          <h1 className="text-xl font-bold underline mb-4">Dak Ghar Niryat Kendra (DNK)</h1>
          <p className=" mb-4">
            Dak Ghar Niryat Kendra (DNK) is an initiative launched by the Department of Posts
            and the Central Board of Indirect Taxes and Customs (CBIC) to assist small and
            medium-sized business exporters. DNKs, which stands for "export facilitation
            centers," provide a range of services to exporters, making export processes more
            accessible and streamlined.
          </p>
          <p className=" mb-4">
            DNKs act as one-stop destinations for exporters, offering comprehensive assistance
            in various aspects of exporting, including export-related documentation, logistics,
            customs procedures, and packing. Small exporters can electronically file a Portal
            Bill of Export and then present their parcels at a DNK for export.
          </p>
          <p className=" mb-4">
            Currently, there are 122 DNKs located in post offices across the country. These
            centers are integrated with e-marketplaces and aggregators, ensuring end-to-end
            logistic support for exporters registered on these platforms. DNKs play a crucial
            role in promoting e-commerce through post offices.
          </p>
          <p>
            The DNK customer portal is accessible at{" "}
            <a className="text-blue-800 font-medium underline" href='dnk.cept.gov.in'>dnk.cept.gov.in</a>, providing exporters with convenient
            access to the services offered by these centers. The expansion of DNKs in Tamil Nadu
            is a significant step toward simplifying export operations for businesses in the
            state.
          </p>
          <h2 className="text-lg font-bold underline mt-4 mb-2">Workshop on E-commerce Exports</h2>
          <p className=" mb-4">
            A workshop on e-commerce exports and Dak Ghar Niryat Kendra was organized by the
            Department of Posts, bringing together experts, government officials, and handloom
            exporters, particularly silk handloom exporters. The workshop aimed to explore the
            opportunities and benefits of utilizing DNK services to streamline export processes.
          </p>
          <p className=" mb-4">
            Overall, Dak Ghar Niryat Kendra serves as a valuable resource for exporters,
            empowering them to navigate the complexities of international trade with ease. The
            expansion of DNKs in Tamil Nadu reflects India Post's commitment to facilitating
            trade and fostering economic growth by offering convenient access to export-related
            services, reducing costs, and ensuring smooth operations for businesses in the
            region.
          </p>
        </span>
        <img className='h-64' src='/logo3.jpg' alt='DAK GHAR NIRYAT KENDRA' />
      </div>
    </Layout>
  )
}

export default About
