import { Button } from '@/components/ui/button';
import React from 'react';

export default function SellerCard() {
  return (
    <div className="flex flex-col gap-2 border px-4 py-2">
      <div className="flex justify-between gap-8">
        <p>Ganesh Enterprises</p>
        <p className="bg-primary px-2 py-1 text-white">Exact Match</p>
      </div>
      <p>Thane, Maharashtra, India</p>
      <p>email : ganeshent@gmail.com</p>
      <p>Contact : 9877665544</p>
      <Button>Invite Seller</Button>
    </div>
  );
}
