import Image from 'next/image';
import React from 'react';
import LeadButton from './LeadButton';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import logodark from '@/public/logo-dark.svg';

import { AiOutlineCopyrightCircle, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

import Link from 'next/link';
import Checkicon from '@/public/Checkicon.svg';
import { Button } from '@/components/ui/button';

interface footerContent {
  name: string;
  link: string;
  new?: boolean;
}
{
  /* <div className="flex flex-col w-full px-4 md:px-16 py-16 items-center justify-center text-center gap-8 bg-[#0C0129] text-white max-w-7xl"> */
}
const Footer = () => {
  return (
    <div className="w-full flex-1 justify-center overflow-auto bg-[#0C0129] pb-16 text-white">
      <div className="lg-px-16 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-16">
        <div className="flex flex-col items-start  justify-between gap-8 self-stretch md:flex-row">
          <div className="flex flex-col items-start justify-between gap-4">
            <p className="text-2xl font-semibold  ">
              Start your 30-days free trail
            </p>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="flex items-center gap-3">
                <Image height="16" width="16" alt="tick" src={Checkicon} />
                <span className="text-base font-normal">
                  Access to all features
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image height="16" width="16" alt="tick" src={Checkicon} />
                <span className="text-base font-normal">
                  Personalized onboarding
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image height="16" width="16" alt="tick" src={Checkicon} />
                <span className="text-base font-normal">
                  No credit card required
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 md:w-fit  md:flex-row">
            <LeadButton
              size="lg"
              default={false}
              text="Book a Demo"
              link="/demo"
            />
            {/* <Link href="https://calendly.com/assets/external/widget.css">
            Book
          </Link> */}
            <LeadButton
              size="lg"
              default={true}
              text="Start Free Trial"
              link="/#"
            />
          </div>
        </div>
        <Separator className="bg-[#7258bb]" />
        <div className="min-h-60 grid grid-cols-2 items-start gap-8 self-stretch md:flex md:justify-between">
          <div className="flex flex-1 flex-col items-start gap-4">
            <span className="text-sm font-bold"> Product</span>
            <div className="flex flex-col items-start gap-4 self-stretch">
              {Product.map((val, i) => (
                <Link
                  href={val?.link || ''}
                  key={i}
                  className="flex items-start gap-2 text-sm font-normal"
                >
                  {val?.name}
                  {val?.new && (
                    <Badge className="bg-primary/10 py-0 text-[9px] text-primary">
                      New
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4">
            <span className="text-sm font-bold"> Resources</span>
            <div className="flex flex-col items-start gap-4 self-stretch">
              {Resources.map((val, i) => (
                <Link
                  href={val?.link || ''}
                  key={i}
                  className="flex items-start gap-2 text-sm font-normal"
                >
                  {val?.name}
                  {val?.new && (
                    <Badge className="bg-primary/10 py-0 text-[9px] text-primary">
                      New
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4">
            <span className="text-sm font-bold"> Company</span>
            <div className="flex flex-col items-start gap-4 self-stretch">
              {Company.map((val, i) => (
                <Link
                  href={val?.link || ''}
                  key={i}
                  className="flex items-start gap-2 text-sm font-normal"
                >
                  {val?.name}
                  {val?.new && (
                    <Badge className="bg-primary/10 py-0 text-[9px] text-primary">
                      New
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Separator className="bg-[#7258bb]" />
        <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex flex-col items-center gap-2.5 md:items-start ">
            <Link href="/" className="">
              <Image src={logodark} alt="Logo" height={28} quality={100} />
            </Link>
            <div className="flex items-center gap-1.5 text-sm font-normal">
              <AiOutlineCopyrightCircle /> {'2023'} {'vyapar dost'} | {'Terms'}{' '}
              |{'Privacy'} |
            </div>
          </div>

          <div className="flex flex-row items-start justify-center gap-6">
            <Link
              href="https://www.linkedin.com/company/vyapardost/"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/vyapardost/"
              aria-label="Instagram"
            >
              <BsInstagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/Vyapardost"
              aria-label="Facebook"
            >
              <BsFacebook size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Resources: footerContent[] = [
  {
    name: 'Blogs',
    link: '/blogs',
  },
  {
    name: 'Newsletter',
    link: '/blogs#newsletter',
  },
  // {
  //   name: "Webinar",
  //   link: "/webinar",
  // },
  {
    name: 'Templates',
    link: '/template',
  },
  {
    name: 'Saving Calculator',
    link: '/procurement_saving_calculator',
  },
];
const Company: footerContent[] = [
  {
    name: 'About us',
    link: '/about',
  },
  // {
  //   name: "Press",
  //   link: "/press",
  // },
  // {
  //   name: "Careers",
  //   link: "/careers",
  // },
  // {
  //   name: "Customer Stories",
  //   link: "/stories",
  // },
  // {
  //   name: "Media kit",
  //   link: "/media",
  // },
  {
    name: ' Contact',
    link: '/contact',
  },
  {
    name: 'Pricing',
    link: '/pricing',
  },
];
const Product: footerContent[] = [
  {
    name: 'Overview',
    link: '/#overview',
  },
  {
    name: 'Features',
    link: '/#feature1',
  },
  {
    name: 'Solution',
    link: '/#feature2',
  },
  {
    name: 'Integration',
    link: '/#integration',
  },

  // {
  //   name: "Upcoming Features",
  //   link: "/upcomingfeatures",
  // },
];

const Compare: footerContent[] = [
  {
    name: 'vs Sap Ariba',
    link: '/sap',
  },
  {
    name: 'vs India Mart',
    link: '/indiamart',
  },
  {
    name: 'vs Procure Tiger',
    link: '/procuretiger',
  },
  {
    name: 'vs Precoro',
    link: '/precoro',
  },
  {
    name: 'vs Procol',
    link: '/procol',
  },
];
