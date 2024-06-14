'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSend, FiTrash2 } from 'react-icons/fi';
import { CustomInputLable } from './CustomInputLable';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';

type objectB = {
  [x: string]: string;
};

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});
export default function InviteSeller() {
  const [vendors, setVendors] = useState([]);
  const [email, setEmail] = useState('');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  // async function onChange(e:any) {
  //   const searchedvendors = await SearchBusiness(data.search_invite_seller);
  //   setVendors(searchedvendors);
  //
  // }

  const handleSearch = async (data: objectB) => {
    setEmail(data.search_invite_seller);
    // const searchedvendors = await SearchBusiness(data.search_invite_seller);
    // setVendors(searchedvendors);
  };

  return (
    <div className="w-full">
      <div className="flex w-full  flex-col items-start gap-6 self-stretch p-4">
        {/* search box  */}

        <div className=" flex w-full">
          <CustomInputLable
            id={'search_invite_seller'}
            type={'text'}
            placeholder={
              'Search vendor by product, email, company number name, '
            }
            disabled={false}
            setFunc={handleSearch}
          />
        </div>
        {/* header */}

        {email.length > 0 ? (
          <div className=" flex w-full  items-center justify-between gap-4 self-stretch rounded-md border p-2.5 md:w-1/2">
            <div>
              <span className="text-sm font-semibold"> Not Found : </span>
              <span className="text-sm font-normal "> {email} </span>
            </div>
            <Button variant={'default'} className="text-sm font-semibold">
              {' '}
              <FiSend className={'mr-3 h-4 w-4'} />
              Send Invite{' '}
            </Button>
          </div>
        ) : (
          ''
        )}

        <div className="text-sm font-semibold">
          {' '}
          Vendors - on your database{' '}
        </div>

        <div className="flex flex-1 flex-wrap items-start justify-start gap-6 self-stretch  ">
          {vendors && vendors.length != undefined && vendors.length > 0 ? (
            vendors.map((val, i) => {
              let rfq_sent: boolean = false;
              if (i < 3) {
                rfq_sent = true;
              }
              return (
                <div key={i}>
                  <div className="flex w-[351.4px]  flex-col items-start gap-4 rounded-[8px] border p-3.5">
                    <div className=" flex flex-col items-start gap-1.5">
                      <span className=" text-sm font-semibold">
                        {' '}
                        {'Ganesh Enterprises'}
                      </span>

                      <span className=" text-sm font-normal">
                        {' '}
                        {'Thane , Maharashtra ,India'}
                      </span>
                      <span className=" text-sm font-normal">
                        {'email : '} {' ganeshtraders567@gmail.com'}
                      </span>
                      <span className=" text-sm font-normal">
                        {'Contact : '} {'8979959124'}
                      </span>
                    </div>
                    <Button
                      variant={rfq_sent == true ? 'secondary' : 'default'}
                      className="w-full"
                    >
                      Send RFQ
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Result Found</p>
          )}
        </div>
      </div>
    </div>
  );
}
