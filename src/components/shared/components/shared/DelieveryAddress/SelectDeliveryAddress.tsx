'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { FaPlus } from 'react-icons/fa';
import DeliveryAddress from './DeliveryAddress';
import { AddressSchema } from '@/lib/validation/AddressSchema';
import { z } from 'zod';
import { GetAddressAction } from '@/lib/actions/addresses';
import { useSession } from 'next-auth/react';

export default function SelectDeliveryAddress({
  label,
  value,
  businessId,
  onchange,
}: {
  label: string;
  value: string;
  businessId: string;
  onchange: (id: string) => void;
}) {
  const [selectedAddress, setSelectedAddress] =
    React.useState<z.infer<typeof AddressSchema>>();
  const { data: session } = useSession();
  React.useEffect(() => {
    if (value) {
      GetAddressAction(`${session?.tokens.accessToken}`, businessId, value)
        .then(data => {
          setSelectedAddress(data);
        })
        .catch(error => {});
    }
  }, [value, businessId, session]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {selectedAddress?.name ? (
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between ">
              <p className="font-medium">Vendor Address * </p>
              <p className="cursor-pointer text-primary">Edit</p>
            </div>
            <p className="rounded-md border px-2 py-1 text-muted-foreground">{`${selectedAddress.name}, ${selectedAddress?.addressLine1 || ''}, ${selectedAddress?.addressLine2 || ''}, ${selectedAddress?.city || ''}, ${selectedAddress?.state || ''}, ${selectedAddress?.pincode || ''}, ${selectedAddress?.state || ''}, ${selectedAddress?.country || ''}`}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between ">
              <p className="font-medium">{label}</p>
              <p className="cursor-pointer text-primary">Add</p>
            </div>
            <p className="flex h-32 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-primary px-2 py-1 text-primary ">
              <FaPlus className="h-4 w-4" /> Select Address
            </p>
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90%] max-w-[90%] overflow-auto">
        <DeliveryAddress
          businessId={businessId}
          handleAddressSelect={(data: z.infer<typeof AddressSchema>) => {
            onchange(data?._id!);
            setSelectedAddress(data);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
