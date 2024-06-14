import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import NewsLetter from '../NewsLetter';

type Props = {};

export default function BlogHero({}: Props) {
  return (
    <div className="flex flex-col items-center gap-10 self-stretch bg-[#F9F5FF] p-4 py-16 lg:p-16">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <p className="font-semibold text-[#6941C6]">Vyapardost Blog</p>
          <p className="text-center text-3xl font-semibold md:text-4xl ">
            Procurement tips, trends and resources
          </p>
        </div>
        <p className="text-center text-base font-normal text-[#6941C6]">
          Join procurement experts from around the world that receive the
          vyapardost Blog Newsletter.
        </p>
      </div>
      <NewsLetter />
      {/* <div className="flex flexcol- md:flex-row items-center gap-4 p-1">
        <Input
          className="bg-background w-64 p-2"
          placeholder="Enter your email"
        />
        <Button
          type="button"
          className={`rounded-lg text-background bg-[#F75123] font-semibold `}
        >
          Subscribe
        </Button>
      </div> */}
    </div>
  );
}
