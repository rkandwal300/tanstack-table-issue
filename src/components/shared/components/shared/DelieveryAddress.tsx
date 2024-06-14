import { useRouter } from 'next/navigation';
import React from 'react';
import { Input } from '../ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { FaLocationDot } from 'react-icons/fa6';
import { MdModeEditOutline } from 'react-icons/md';

export default function DelieveryAddress({ form }: any) {
  const router = useRouter();
  const address = localStorage.getItem('address');
  return (
    <div>
      {address && address != '' ? (
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                <p>Delievery Address</p>
                <p
                  className="flex cursor-pointer gap-1 text-blue-500"
                  onClick={() => router.push('/setting/address')}
                >
                  <MdModeEditOutline /> Edit
                </p>
              </FormLabel>
              <FormControl>
                <Input
                  className=""
                  placeholder="Select Delivery Adress"
                  {...field}
                  value={address}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <p
          onClick={() => router.push('/setting/address')}
          className="flex cursor-pointer items-center gap-2 text-blue-500"
        >
          <FaLocationDot />
          Select Delievery Address
        </p>
      )}
    </div>
  );
}
