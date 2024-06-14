import * as React from 'react';

import Image from 'next/image';

type props = {
  name: string;
  image: string;
  imageName: string;
  description: string;
  footer?: string;
};

export function FeatureCard({
  name = '',
  image = '',
  imageName = '',
  description = '',
  footer = '',
}) {
  return (
    <div className="flex  w-[343px] max-w-[383px] flex-col items-center gap-4 border-0 bg-inherit ">
      <div className="flex flex-col items-center gap-2">
        <Image src={image} alt={imageName} width="24" height="24" />
        <p className="text-xl font-medium">{name}</p>{' '}
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-normal text-muted-foreground">{description}</p>
        <p className="text-center text-base font-medium leading-7">{footer}</p>
      </div>
    </div>
  );
}
