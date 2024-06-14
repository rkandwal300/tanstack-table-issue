'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// alert
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AddressSchema } from '@/lib/validation/AddressSchema';
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

interface newAddress {
  address: Address;
}
interface pageProps {
  id?: string | number;
  handleSubmit: (id: string, data: z.infer<typeof AddressSchema>) => void;
}

const formSchema = z.object({
  label: z.string().min(1, {
    message: 'label cannot be is empty.',
  }),
  country: z.string().min(1, {
    message: 'countary cannot be is empty.',
  }),
  state: z.string().min(1, {
    message: 'state cannot be is empty.',
  }),
  city: z.string().min(1, {
    message: 'city cannot be is empty.',
  }),
  pincode: z.string().min(1, {
    message: 'pincode cannot be is empty.',
  }),
  line1: z.string().min(1, {
    message: 'address cannot be is empty.',
  }),
  line2: z.string().min(1, {
    message: 'address cannot be is empty.',
  }),
  // contact: z.string().min(1, {
  //   message: "contact cannot be is empty.",
  // }),
});
const AddressAdd: React.FC<pageProps> = ({ handleSubmit, id }) => {
  const [formSubmit, setFormSubmit] = useState(false);

  const handleAlert = () => {
    setFormSubmit(true);

    const timer = setTimeout(() => {
      setFormSubmit(false);
    }, 5000);

    return () => clearTimeout(timer);
  };

  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      addressLine1: '',
      addressLine2: '',
    },
  });
  return (
    <Form {...form}>
      <div>
        {' '}
        {formSubmit && (
          <Alert variant="default">
            <AiOutlineCheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your Details are Changed Successfully
            </AlertDescription>
          </Alert>
        )}
      </div>
      <form
        onSubmit={form.handleSubmit((values: z.infer<typeof AddressSchema>) => {
          handleSubmit(`${values?._id}`, values);
          handleAlert();
        })}
        className=" max-w-600 flex flex-col items-start gap-6 p-6 "
      >
        <span className=" text-lg font-semibold "> Address Details </span>
        <div className=" flex flex-1 flex-col items-end gap-4 self-stretch">
          <Button
            variant={'default'}
            className="w-full border border-primary bg-primary/10 text-primary "
          >
            <FiMapPin className={'mr-2 h-4 w-4'} />
            Select on map (Optional )
          </Button>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className=" w-full  p-1  ">
                <FormLabel>Address Name / Label</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-start gap-4 self-stretch">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className=" w-full  p-1  ">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className=" w-full  p-1  ">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-start gap-4 self-stretch">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className=" w-full  p-1  ">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pincode"
              render={({ field }) => (
                <FormItem className=" w-full  p-1  ">
                  <FormLabel>Pincode</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className=" w-full  p-1  ">
                <FormLabel>Line 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Office Number, Building, Complex name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="addressLine2"
            render={({ field }) => (
              <FormItem className=" w-full  p-1  ">
                <FormLabel>Line 2</FormLabel>
                <FormControl>
                  <Input placeholder="Street Area" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className=" flex w-full  items-start  gap-3 ">
          {/* <Button type="reset" variant="outline" className="w-1/2 ">
            Cancel
          </Button>{" "} */}
          <Button type="submit" variant={'default'} className="w-1/2">
            Save
          </Button>{' '}
        </div>
      </form>
    </Form>
  );
};

export default AddressAdd;
