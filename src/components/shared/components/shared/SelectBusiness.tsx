'use client';

import { useEffect, useState } from 'react';
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { CiLogout } from 'react-icons/ci';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '@/redux/features/SideBarSlice';
import AvatarCustom from './AvatarCustom';
import { UserSchema } from '@/lib/validation/UserSchema';
import { BusinessEditSchema } from '@/lib/validation/BusinessSchema';
import { z } from 'zod';
import { getUserAction } from '@/lib/actions/user';

interface OTPVerification {
  otp: string;
  expiry: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  onGoing: string;
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface SelectBusinessProps extends PopoverTriggerProps {
  sidebarOpen: Boolean;
  businessId: string;
}

export default function SelectBusiness({
  className,
  sidebarOpen,
  businessId,
}: SelectBusinessProps) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<z.infer<typeof UserSchema> | null>(null);

  const { data: session } = useSession();
  const router = useRouter();
  const currentBusinessId = usePathname().split('/')[1];

  const selectedBusiness = user?.businesses?.find(
    business =>
      (business.business as z.infer<typeof BusinessEditSchema>)._id ===
      currentBusinessId,
  )?.business as z.infer<typeof BusinessEditSchema>;

  useEffect(() => {
    const fetchData = async () => {
      if (session && session.user._id != undefined) {
        try {
          const userData = await getUserAction(
            session.tokens.accessToken,
            session.user._id,
          );

          setUser(userData);
        } catch (e) {
          const error = e as Error;

          if (error.message === 'Unauthorized') {
            router.push('/login');
          }
          toast.error(error.message || 'Something went wrong');
        }
      }
    };

    fetchData();

    // Ensure to include dependencies in the dependency array if needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const dispatch = useDispatch();

  return (
    <div className="py-2.5">
      {!sidebarOpen ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p
                className=" flex justify-center"
                onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
              >
                <AvatarCustom
                  alt={selectedBusiness?.name}
                  url={selectedBusiness?.logo}
                  className="grid h-9 w-9  cursor-pointer  justify-items-center"
                />
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${user?.firstName || 'Na'}  ${user?.lastName || ''}`}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="default"
              role="combobox"
              aria-expanded={open}
              aria-label="Select a business"
              className={cn(' w-full  gap-2', className)}
            >
              <AvatarCustom
                alt={selectedBusiness?.name}
                url={selectedBusiness?.logo}
                className="grid h-6 w-6 cursor-pointer  justify-items-center"
              />
              <span className="truncate whitespace-nowrap">
                {selectedBusiness?.name || ''}
              </span>

              <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[270px] p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  <CommandItem className="w-full">
                    <AvatarCustom
                      alt={`${selectedBusiness?.name || ''}`}
                      url={selectedBusiness?.logo}
                      className="grid h-9 w-9  cursor-pointer  justify-items-center"
                    />

                    <div>
                      <p className="font-semibold">
                        {`${user?.firstName || ''}  ${user?.lastName || ''}`}
                      </p>
                      <p className="text-xs">{user?.email}</p>
                    </div>
                  </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup>
                  {user?.businesses?.map((businessList, i) => {
                    const business = businessList.business as z.infer<
                      typeof BusinessEditSchema
                    >;
                    const role = businessList.role;
                    return (
                      <Button
                        variant="ghost"
                        className="flex w-full items-center justify-start"
                        key={i}
                        onClick={() => {
                          router.push(`/${business?._id}/dashboard`);
                        }}
                      >
                        <AvatarCustom
                          alt={`${business.name}`}
                          className="mr-2 h-5 w-5"
                          url={business.logo}
                        />
                        {business.name || 'NA'}

                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            businessId === business._id!
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                      </Button>
                    );
                  })}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup>
                  <Link href="/newbusiness">
                    <Button variant="ghost" className="w-full justify-start">
                      <PlusCircledIcon className="mr-2 h-4 w-4" />
                      New Business
                    </Button>
                  </Link>

                  <Button
                    onClick={() => signOut()}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <CiLogout className="mr-2 h-4 w-4" />
                    LogOut
                  </Button>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
