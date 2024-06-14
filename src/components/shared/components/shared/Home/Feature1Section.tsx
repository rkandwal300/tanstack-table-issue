import { fetchStrapiData } from '@/lib/services/strapi';
import Loader from '../Loader';
import FeatureTab from '@/components/shared/Home/FeatureTab';
import { Feature } from '@/lib/typesLandingPage';

type ApiResponse = {
  data?: Feature[];
  error?: unknown;
};

let Feature1Data: ApiResponse = {};

const Feature1Section = async () => {
  try{
     Feature1Data = await fetchStrapiData(
      'feature1s',
      'populate=*',
    );
  }
  catch (error) {
    return <Loader />;
  }
  return (
    <div
      id="feature1"
      className="flex w-full max-w-7xl flex-col items-center justify-start gap-6 bg-[#FFF8FB] px-4 py-16 md:rounded-[64px] lg:gap-12 lg:px-16"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 self-stretch">
          <p className="text-base font-semibold text-[#FD71AF]">
            Connected Procurement
          </p>
          <p className="text-center text-2xl font-semibold md:text-4xl">
            We bring site, purchase & accounting team together.
          </p>
        </div>

        {/* <span className="md:text-lg text-base text-center font-normal text-foreground   ">
              Make your entire process of Requisition, RFQ, Auction, Orders,
              Inventory, GRN and Invoicing superfast, scalable and cost saving.
            </span> */}
      </div>
      {Feature1Data.data ? (
        <FeatureTab data={Feature1Data.data || []} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Feature1Section;
