'ue client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import logolight from '@/public/logo-light.svg';
import logodark from '@/public/logo-dark.svg';

type logo = {
  height?: number;
  width?: number;
};

const Logo: FC<logo> = ({ height = 30 }) => {
  return (
    <Link href="/" className="">
      <Image
        src={logolight}
        alt="Logo"
        height={height}
        className="block dark:hidden"
        quality={100}
      />
      <Image
        src={logodark}
        alt="Logo"
        height={height}
        className="hidden dark:block"
        quality={100}
      />
    </Link>
  );
};

export default Logo;
