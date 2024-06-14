import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FiMapPin } from 'react-icons/fi';
import { Input } from '@/components/ui/input';
import GoogleMapAutocomplete from '@/components/shared/GoogleMapAutocomplete';
import React from 'react';
import { DialogClose } from '@radix-ui/react-dialog';

type Place = {
  name: string;
  place_id: string;
  latitute: number;
  longitude: number;
  terms: any[];
};
interface pageProps {
  id?: string | number;
  handleAddressSubmit: (a: any) => void;
}

const addressSchema = z.object({
  name: z.string(),
  city: z.string(),
  country: z.string(),
  pincode: z.string(),
  state: z.string(),
  addressLine1: z.string().nullable(),
  addressLine2: z.string().nullable(),
  phone: z.string().nullable(),
});
export function CreateNewAddress({ handleAddressSubmit }: pageProps) {
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      city: '',
      phone: '',
      state: '',
      name: '',
      country: '',
      pincode: '',
      addressLine1: '',
      addressLine2: '',
    },
  });

  async function handleAddCities(data: Place) {
    const googleGeoCode = await reverseGeocode(data?.latitute, data?.longitude);
    form.setValue('name', googleGeoCode?.address);
    form.setValue('country', googleGeoCode?.country);
    form.setValue('state', googleGeoCode?.state);
    form.setValue('city', googleGeoCode?.city);
    form.setValue('pincode', googleGeoCode?.pincode);
    form.setValue('addressLine1', googleGeoCode?.addressLine1 || '');
    form.setValue('addressLine2', googleGeoCode?.addressLine2 || '');
  }
  return (
    <Form {...form}>
      <div className=" w-full">
        <form
          onSubmit={form.handleSubmit(
            (values: z.infer<typeof addressSchema>) => {
              handleAddressSubmit(values);
            },
          )}
          className=" max-w-600 flex flex-col items-start gap-6 p-6  "
        >
          <div>
            <span className=" text-lg font-semibold "> Address Details</span>
            <div>
              {' '}
              <div className=" flex flex-1 flex-col items-end gap-4 self-stretch">
                <GoogleMapAutocomplete handleSelectedCities={handleAddCities} />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem className=" w-full  p-1  ">
                        <FormLabel>Address Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex w-full items-start gap-4 self-stretch">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => {
                      return (
                        <FormItem className=" w-full  p-1  ">
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => {
                      return (
                        <FormItem className=" w-full  p-1  ">
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="flex w-full items-start gap-4 self-stretch">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => {
                      return (
                        <FormItem className=" w-full  p-1  ">
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => {
                      return (
                        <FormItem className=" w-full  p-1  ">
                          <FormLabel>Pincode *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="addressLine1"
                  render={({ field }) => {
                    return (
                      <FormItem className=" w-full  p-1  ">
                        <FormLabel>Line 1</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Office Number, Building, Complex name"
                            {...field}
                            value={field.value ?? ''} // Use an empty string if value is null
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            disabled={field.disabled}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="addressLine2"
                  render={({ field }) => {
                    return (
                      <FormItem className=" w-full  p-1  ">
                        <FormLabel>Line 2</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Street Area"
                            {...field}
                            value={field.value ?? ''} // Use an empty string if value is null
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            disabled={field.disabled}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => {
                    return (
                      <FormItem className=" w-full  p-1  ">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ''} // Use an empty string if value is null
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            disabled={field.disabled}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className=" flex w-full  items-start  gap-3 ">
                {/* <Button type="reset" variant="outline" className="w-1/2 ">
            Cancel
          </Button>{" "} */}
              </div>
            </div>
          </div>
          <AlertDialogFooter>
            <DialogClose>
              <Button variant={'outline'} onClick={() => form.reset()}>
                Cancel
              </Button>
            </DialogClose>
            {/* <AlertDialogAction> */}{' '}
            <DialogClose>
              <Button type="submit" variant={'default'}>
                Save
              </Button>
            </DialogClose>
            {/* </AlertDialogAction> */}
          </AlertDialogFooter>
        </form>
      </div>
    </Form>
  );
}

const reverseGeocode = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
    );

    const data: any = await response.json();

    if (data.status === 'OK') {
      // Extract address components from the first result
      const addressComponents = data.results[0].address_components;

      // Extract relevant information
      const address = data.results[0].formatted_address;

      const country =
        addressComponents.find((component: any) =>
          component.types.includes('country'),
        )?.long_name || '';
      const state =
        addressComponents.find((component: any) =>
          component.types.includes('administrative_area_level_1'),
        )?.long_name || '';
      const city =
        addressComponents.find((component: any) =>
          component.types.includes('locality'),
        )?.long_name || '';
      const postalCode =
        addressComponents.find((component: any) =>
          component.types.includes('postal_code'),
        )?.long_name || '';

      return {
        address,
        country,
        state,
        city,
        pincode: postalCode,
        addressLine1: '', // You may need to adjust these based on your needs
        addressLine2: '',
      };
    } else {
      // console.error('Geocoding API request failed:', data.status);
      return null;
    }
  } catch (error) {
    // console.error('Error during geocoding request:', error);
    return null;
  }
};
