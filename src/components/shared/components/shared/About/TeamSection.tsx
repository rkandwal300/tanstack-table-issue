import React from 'react';
import { CardTeam } from '../CardTeam';
import sudarshan from '@/public/sudarshan.png';
import devesh from '@/public/devesh.png';
import trupti from '@/public/trupti.png';

export default function TeamSection() {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center lg:px-16">
      <div className="flex flex-col items-center self-stretch">
        <div className="flex flex-col items-center justify-center gap-4 self-stretch md:gap-6">
          <div className="flex flex-col items-center justify-center gap-3 self-stretch">
            <p className="text-base font-semibold  text-primary">
              We&apos;r hiring!
            </p>
            <p className="text-4xl font-semibold md:text-5xl">Meet our team</p>
          </div>
          <p className="md:font-xl text-center text-lg font-normal">
            Industry Experience, Tech Background, Proven Track Record with
            Vision to Succeed.
          </p>
        </div>
      </div>

      <div className="flex w-full items-start  justify-center gap-8 self-stretch">
        <div className="flex w-full flex-col flex-wrap items-center  justify-center gap-3 md:flex-row md:items-start md:gap-8">
          <CardTeam
            linkedin="https://www.linkedin.com/in/sudarshanmane/"
            link={sudarshan}
            name="Sudarshan Mane"
            designation="  Founder & CEO"
            description=" Diverse experience in construction procurement, contracts,
            negotiation, and budgeting."
          />
          <CardTeam
            linkedin="https://www.linkedin.com/in/devesh-verma/"
            link={devesh}
            name="Devesh Verma"
            designation="  Founder & CTO"
            description="Ex Shaw Academy, Springworks, Open Source Mentor."
          />
          <CardTeam
            linkedin="https://www.linkedin.com/in/truptimane2309/"
            link={trupti}
            name="Trupti Mane"
            designation="Director"
            description="Decade of experience in backend architect MS - High Integrity System - Frankfurt University."
          />
        </div>
      </div>
    </div>
  );
}
