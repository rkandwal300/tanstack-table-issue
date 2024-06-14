import { Input } from '@/components/ui/input';
import CardBlog from '@/components/shared/Blogs/CardBlog';
import Loader from '@/components/shared/Loader';
import NewsLetter from '@/components/shared/NewsLetter';
import { Blog } from '@/lib/typesLandingPage';

export default function Blogs({ data }: { data: Blog[] }) {
  return (
    <>
      <div className="flex w-full max-w-7xl flex-col gap-8 px-4 lg:px-16">
        <Input className="w-full p-2 sm:w-64" placeholder="Search Blog" />

        <div className="flex flex-col items-center justify-start gap-8 self-stretch md:flex-row md:flex-wrap md:items-start">
          {data.length > 0 &&
            data.map((val, i) => (
              <div key={i}>
                <CardBlog data={val} />
              </div>
            ))}
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
