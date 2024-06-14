import { NavMenu } from './NavMenu';
import { ModeToggle } from '../ModeToggle';
import Logo from '../logo';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './MobileMenu';
import Link from 'next/link';
import LeadButton from '../Home/LeadButton';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center overflow-visible border-b">
      <div className="space-x-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-16">
        <div className="flex items-center gap-10">
          <Logo />
          <NavMenu />
          <Link href="/demo">
            <Button
              variant={'outline'}
              className="hidden h-fit border border-destructive bg-background py-2 font-semibold text-destructive hover:bg-background hover:text-destructive md:block"
            >
              Book a Demo
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button
              variant={'outline'}
              className="hidden h-fit border border-destructive bg-background py-2 font-semibold text-destructive hover:bg-background hover:text-destructive md:block"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant={'destructive'}
              className="hidden h-fit py-2 font-semibold md:block"
            >
              Sign up
            </Button>
          </Link>

          {/* <ModeToggle /> */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

interface ConpmonentType {
  title: string;
  href: string;
  description: string;
  badge?: boolean;
  badgeText?: string;
  icon?: string;
}
export const ResourcesBlogs: ConpmonentType[] = [
  {
    title: 'Procurement Guides ',
    description: 'AGuide for effective procurement.',
    icon: '/navbar/blogs.png',
    href: '/guides',
  },
  {
    title: 'Blog',
    description: 'The latest industry news, updates and info.',
    icon: '/navbar/blogs.png',
    href: '/blogs',
  },
  // {
  //   title: "Customer stories",
  //   description: "See success stories of our customers.",
  //   icon: "/navbar/customer_stories.png",
  //   href: "/docs/primitives/progress",
  // },
];
export const ResourcesProcurement: ConpmonentType[] = [
  {
    title: 'Saving Calculator',
    description: 'Visually or semantically separates content.',
    icon: '/navbar/calculator.png',
    href: '/procurement_saving_calculator',
  },
  {
    title: 'Procurement Templates',
    description: 'Free Templates for your business.',
    icon: '/navbar/procurement_template.png',
    href: '/template',
  },
  // {
  //   title: "Procurement Videos",
  //   description: "Learn and Get up and running with vyapardost.",
  //   icon: "/navbar/procurement_videos.png",
  //   href: "/docs/primitives/tabs",
  // },
];
export const ResourcesCompany: ConpmonentType[] = [
  {
    title: 'About us',
    description: 'Learn about our story and mission.',
    icon: '/navbar/about.png',
    href: '/about',
  },
  // {
  //   title: "Press",
  //   description: "News, writings and press releases.",
  //   icon: "/navbar/press.png",
  //   href: "/docs/primitives/tabs",
  // },
  // {
  //   title: "Careers",
  //   description: "We’re looking for talented people. Join our team!",
  //   icon: "/navbar/careers.png",
  //   badge: true,
  //   href: "/docs/primitives/tabs",
  // },
];

export const Features: ConpmonentType[] = [
  {
    title: 'Requisition',
    description: 'Create requests and track its progress in real-time.',
    icon: '/navbar/requisition.png',
    href: '/#Requisition',
  },
  {
    title: 'E-Auction',
    description:
      'Maximize saving with advance auction desk at unbeatable price.',
    icon: '/navbar/auction.png',
    href: '/#e-auction',
  },
  {
    title: 'Inventory',
    description: 'Learn about our story and our mission statement.',
    icon: '/navbar/inventory.png',
    href: '/#Inventory',
  },
  {
    title: 'Marketplace',
    description: 'Industry leading suppliers at finger tips.',
    icon: '/navbar/marketplace.png',
    href: '/#Marketplace',
  },
  {
    title: 'Analytics',
    description: 'Analyze and compare bids in click of a button.',
    icon: '/navbar/analytics.png',
    href: '/#Analytics',
  },
  {
    title: 'Spend Management',
    description: 'Spend reports for actionable insights to optimize savings.',
    icon: '/navbar/spend_management.png',
    badge: true,
    href: '/#Spend-Management',
  },
  {
    title: 'RFQ',
    description: 'Measure active usage and target areas of improvement.',
    icon: '/navbar/rfq.png',
    href: '/#RFQ',
  },

  {
    title: 'Orders',
    description: 'Automate orders from draft thorough approvals to invoicing.',
    icon: '/navbar/orders.png',
    href: '/#Orders',
  },
];
