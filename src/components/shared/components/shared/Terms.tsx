import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Terms({}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-1 text-center text-sm font-normal">
      <span>By clicking the button above, you agree to our</span>
      <Link href="/terms_of_use" className="underline underline-offset-4">
        Terms of Use
      </Link>
      and
      <Link href="/privacy_policy" className="underline underline-offset-4">
        Privacy Policy.
      </Link>
    </div>
  );
}
