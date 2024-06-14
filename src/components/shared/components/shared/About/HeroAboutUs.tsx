export default function HeroAboutUs() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-[#F9F5FF] px-4 py-8 text-center lg:px-16 lg:py-16">
      <div className="flex flex-col items-center justify-center gap-3 self-stretch">
        <p className="text-base font-semibold  text-[#7F56D9]">About Us</p>
        <p className=" text-center text-4xl font-semibold md:text-5xl">
          About The Company
        </p>
      </div>
      <p className="md:font-xl text-center text-lg font-normal">
        Learn more about the company and the team behind it.
      </p>
    </div>
  );
}
