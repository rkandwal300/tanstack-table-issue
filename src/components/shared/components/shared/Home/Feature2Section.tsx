import { fetchStrapiData } from '@/lib/services/strapi';
import Loader from '../Loader';
import FeatureTab from '@/components/shared/Home/FeatureTab';
import { Feature } from '@/lib/typesLandingPage';

const Feature2Section = async () => {
    let Feature2Data: { data: Feature[] } = {
        data: []
    };
    try {
        Feature2Data = await fetchStrapiData(
            'feature2s',
            'populate=*',
        );
    } catch (error) {
        return <Loader />;
    }
  return (
    <div
      id="feature2"
      className="flex w-full max-w-7xl flex-col items-center justify-start gap-8 bg-[#FFF8FB] px-4 py-16 md:rounded-[64px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 self-stretch">
          <p className="text-base font-semibold text-[#FD71AF]">Features</p>
          <p className="text-center text-2xl font-semibold md:text-4xl">
            Built for every type of business
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 self-stretch">
          <span className="text-center text-base font-normal text-foreground">
            {" Enterprise grade features and affordable to MSME's."}
          </span>
        </div>
      </div>
      {Feature2Data.data ? (
        <FeatureTab data={Feature2Data.data || []} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Feature2Section;
