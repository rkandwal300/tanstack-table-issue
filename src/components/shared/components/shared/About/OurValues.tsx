import React from 'react';
import { FeatureCard } from './FeatureCard';

export default function OurValues() {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-[#FFF8FB] p-8 px-4 md:gap-16 lg:p-16 lg:px-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-center text-base font-semibold text-[#FD71AF]">
            Our values
          </p>
          <p className="text-center text-3xl font-semibold md:text-5xl">
            How we work at vyapardost
          </p>
        </div>
        <p className="md:font-xl text-center text-base font-normal">
          Our shared values keep us connected and guide us as one team.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-0 text-center sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <FeatureCard
          image="/userslogo.png"
          imageName="users"
          name={'Care about our team'}
          description=" Understand what matters to our employees. Give them what they need
            to do their best work"
        />
        <FeatureCard
          image="/heartlogo.png"
          imageName="heart"
          name={'Be excellent to each other'}
          description="No games. No bullshit. We rely on our peers to improve. Be open, honest and kind."
        />
        <FeatureCard
          image="/face-smilelogo.png"
          imageName="face-smilelogo"
          name={'Pride in what we do'}
          description="Value quality and integrity in everything we do. At all times. No exceptions."
        />
        <FeatureCard
          image="/lightbulb-05logo.png"
          imageName="lightbulb-05logo"
          name={'Innovation'}
          description="Understand customers' stated and unstated needs. Solve them with first-level principles & innovative thinking."
        />
        <FeatureCard
          image="/flaglogo.png"
          imageName="flaglogo"
          name={'Do the impossible'}
          description={`Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?`}
        />
        <FeatureCard
          image="/search-refractionlogo.png"
          imageName="search-refractionlogo"
          name={'Sweat the small stuff'}
          description="We believe the best products come from the best attention to detail. Sweat the small stuff."
        />
      </div>
    </div>
  );
}
