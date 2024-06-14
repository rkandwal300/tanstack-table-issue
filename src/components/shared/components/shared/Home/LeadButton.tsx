import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type PropsType = {
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  text: string;
  default?: boolean;
  link: '#';
  // Provide a default value here if needed
  // onClick?: () => void;
};

const LeadButton = ({
  size,
  text,
  default: isDefault = false,
  link,
  ...props
}: PropsType & any) => {
  // Ensure that size is one of the allowed values or default to "default"

  return (
    <Link href={link || '#'}>
      <Button
        {...props}
        size={size ? size : 'lg'}
        variant="destructive"
        className={`h-fit w-full p-4 md:w-fit  ${isDefault ? '' : 'border border-destructive bg-background text-destructive hover:bg-background hover:text-destructive'}`}
      >
        <span className="text-lg font-semibold"> {text}</span>
      </Button>{' '}
    </Link>
  );
};

export default LeadButton;
