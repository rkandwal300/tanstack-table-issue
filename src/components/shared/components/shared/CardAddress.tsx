'use client';

import DialogHoc from '@/components/hoc/DialogHoc';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiTrash2 } from 'react-icons/fi';
import AddressAdd from '@/components/shared/AddressAdd';
import { handleUpdateAddressAction } from '@/redux/features/setting/address/addressSlice';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';
import { DialogClose } from '@radix-ui/react-dialog';
import { z } from 'zod';
import { AddressSchema, TZAddressSchema } from '@/lib/validation/AddressSchema';
import { RiDeleteBin2Line, RiPencilLine } from '@remixicon/react';
import {
  DeleteAddressAction,
  UpdateAddressAction,
} from '@/lib/actions/addresses';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

type Address = {
  id: number | string;
  label: string;
  line1: string;
  line2: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  contact: string;
};

// type AddressWithReduxProps = newAddress & ReduxProps;
type PageProps = {
  address: TZAddressSchema;
  handleSelect?: (data: TZAddressSchema) => void;
  businessId: string;
};
const CardAddress = ({ address, handleSelect, businessId }: PageProps) => {
  let {
    _id,
    name,
    addressLine1,
    addressLine2,
    phone,
    city,
    pincode,
    state,
    country,
  } = address;

  const { data: session } = useSession();

  const handleEdit = async (addressId: string, data: TZAddressSchema) => {
    try {
      const submit = await UpdateAddressAction(
        `${session?.tokens.accessToken}`,
        businessId,
        addressId,
        data,
      );
      toast.success(' Address deleted successfully');
    } catch (e) {
      toast.error('Unable to Delete Address ');
    }
  };
  const handleDelete = async (addressId: string) => {
    try {
      const submit = await DeleteAddressAction(
        `${session?.tokens.accessToken}`,
        businessId,
        addressId,
      );
      toast.success(' Address deleted successfully');
    } catch (e) {
      toast.error('Unable to Delete Address ');
    }
  };

  if (!address) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-[320px] flex-col items-start gap-4 rounded-[8px] border p-3.5 text-sm">
      <div className=" flex flex-col items-start gap-2">
        <span className=" font-semibold"> {name}</span>
        <div className="flex flex-col gap-1 ">
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <div className="flex items-center gap-1.5">
            {` ${city}: ${pincode}, ${state}, ${country}`}
          </div>
          <p>{`Contact : ${phone}`}</p>
        </div>
      </div>

      <div className=" mt-auto flex w-full items-center justify-between self-stretch">
        {/* <DialogClose> */}
        <span>
          <Button
            variant={'default'}
            className="text-sm"
            onClick={() => {
              handleSelect && handleSelect(address);
            }}
          >
            Select
          </Button>
        </span>

        <div className="flex  w-fit items-center gap-1">
          <div className="w-fit">
            <DialogHoc
              trigger={
                <Button
                  variant={'outline'}
                  className="te xt-primary
                text-sm"
                >
                  <RiPencilLine size={18} />
                </Button>
              }
              content={<AddressAdd id={_id} handleSubmit={handleEdit} />}
            />
          </div>
          <div
            className="w-fit"
            onClick={() => {
              handleDelete(`${_id}`);
            }}
          >
            <Button variant={'outline'} className="border-destructive">
              <RiDeleteBin2Line className="text-destructive" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddress;
