'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { CreateNewAddress } from './components/CreateNewAddress';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CardAddress from '../CardAddress';
import {
  DeleteAddressAction,
  GetAllAddressAction,
  UpdateAddressAction,
  createAddressAction,
} from '@/lib/actions/addresses';
import { AddressSchema } from '@/lib/validation/AddressSchema';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

type AddressProps = {
  handleAddressSelect: (Address: z.infer<typeof AddressSchema>) => void;
  businessId: string;
};

const DeliveryAddress = ({ handleAddressSelect, businessId }: AddressProps) => {
  const [allAddresses, setAllAddresses] = React.useState<
    z.infer<typeof AddressSchema>[]
  >([]);
  const { data: session } = useSession();
  React.useEffect(() => {
    GetAllAddressAction(`${session?.tokens.accessToken}`, businessId)
      .then(res => setAllAddresses(res))
      .catch(error => {
        throw error;
      });
  }, [businessId, session]);

  const handleFormSubmit = async (data: z.infer<typeof AddressSchema>) => {
    try {
      const submit = await createAddressAction(
        `${session?.tokens.accessToken}`,
        businessId,
        data,
      );
      GetAllAddressAction(`${session?.tokens.accessToken}`, businessId)
        .then(res => setAllAddresses(res))
        .catch(error => {
          throw error;
        });
      toast.success('New Address created successfully');
    } catch (e) {
      toast.error('Address Creation Failed');
    }
  };

  if (!allAddresses) {
    return (
      <div className="flex items-center space-x-4 ">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 self-stretch overflow-auto p-4">
      {/* header */}
      <div className="flex w-full items-center justify-between self-stretch">
        <span className="text-sm font-semibold"> Saved Addresses </span>
        {/* <Button>create</Button> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>New Address</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90%] max-w-[50%] overflow-auto">
            <CreateNewAddress handleAddressSubmit={handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex w-full flex-1 flex-wrap gap-4 self-stretch">
        {allAddresses.length > 0 ? (
          allAddresses.map((address, index) => {
            return (
              <CardAddress
                handleSelect={handleAddressSelect}
                address={address}
                key={index}
                businessId={businessId}
              />
            );
          })
        ) : (
          <span className="text-sm font-semibold text-muted-foreground">
            No Address Found
          </span>
        )}
      </div>
    </div>
  );
};

export default DeliveryAddress;
