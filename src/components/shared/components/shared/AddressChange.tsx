'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GetAddressAction, GetAllAddressAction } from '@/lib/actions/addresses';
import { AddressSchema } from '@/lib/validation/AddressSchema';
import { RootState } from '@/redux/store';
import { id } from 'date-fns/locale';
import React from 'react';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import DelieveryAddress from './DelieveryAddress';
import { FaLocationDot } from 'react-icons/fa6';
import CardAddress from './CardAddress';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';

type pageProps = {
  addressId: any;
  BusinessId: string;
  onSubmit?: (data: z.infer<typeof AddressSchema>) => void;
};

export function AddressChange({ addressId, BusinessId, onSubmit }: pageProps) {
  const [address, setAddress] = React.useState<z.infer<
    typeof AddressSchema
  > | null>();
  const [AllAddress, setAllAddress] = React.useState<
    z.infer<typeof AddressSchema>[] | null
  >();
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();
  const accessToken = `${session?.tokens.accessToken}`;
  // const BusinessId = useSelector((state: RootState) => state.business._id);
  React.useEffect(() => {
    GetAddressAction(accessToken, BusinessId, addressId)
      .then(data => {
        setAddress(data as z.infer<typeof AddressSchema>);
      })
      .catch(err => {});
    GetAllAddressAction(accessToken, BusinessId)
      .then(data => {
        setAllAddress(data as z.infer<typeof AddressSchema>[]);
      })
      .catch(err => {});
  }, [BusinessId, addressId]);

  return (
    <Dialog open={open}>
      <DialogTrigger>
        {address ? (
          <div>
            <div className="flex flex-col justify-between gap-1.5">
              <div className="flex items-center justify-between gap-2">
                {' '}
                <span className="text-sm font-medium"> Delivery Address</span>
                <span
                  className="text-sm font-medium text-primary"
                  onClick={() => setOpen(true)}
                >
                  {' '}
                  Change number
                </span>
              </div>
              <span className="flex flex-wrap items-start gap-1.5 text-sm font-normal text-muted-foreground">
                <span>{`${address?.addressLine1 ? `${address?.addressLine1}, ` : ''}`}</span>
                <span>{`${address?.addressLine2 ? `${address?.addressLine2}, ` : ''}`}</span>
                <span>{`${address?.name ? `${address?.name}, ` : ''} `} </span>
                <span>{`${address?.city ? `${address?.city}, ` : ''} `} </span>
                <span>{` ${address?.pincode ? `pin:${address.pincode}, ` : ''} `}</span>
                <span>{`${address?.state ? `${address?.state}, ` : ''}`} </span>
                <span>
                  {`${address?.country ? `${address?.country}` : ''} `}{' '}
                </span>
              </span>
            </div>
          </div>
        ) : (
          <p
            className="flex cursor-pointer items-center gap-2 text-blue-500"
            onClick={() => setOpen(true)}
          >
            <FaLocationDot />
            Select Delievery Address
          </p>
        )}
      </DialogTrigger>
      <DialogContent className="flex flex-1 flex-wrap items-start justify-start gap-6 self-stretch">
        {/* item 1  */}
        {AllAddress &&
          AllAddress.map((val, i) => {
            return (
              <div key={i}>
                {/* <CardAddress
                  handleSelect={(data: z.infer<typeof AddressSchema>) => {
                    onSubmit && onSubmit(data);
                    setAddress(data);
                    setOpen(false);
                  }}
                  address={val}
                /> */}
                <CardAddress
                  businessId={BusinessId}
                  handleSelect={(data: z.infer<typeof AddressSchema>) => {
                    onSubmit && onSubmit(data);
                    setAddress(data);
                    setOpen(false);
                  }}
                  address={val}
                />
              </div>
            );
          })}
      </DialogContent>
    </Dialog>
  );
}
