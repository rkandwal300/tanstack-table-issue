import { CustomInputLable } from '@/components/shared/CustomInputLable';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CustomSelect } from '@/components/shared/CustomSelect';
import { Button } from '@/components/ui/button';

export type objectB = {
  [x: string]: string;
};
const InviteUser = () => {
  const Roles_data = [
    {
      value: 'user',
      label: 'User ',
    },
    {
      value: 'admin',
      label: 'Admin ',
    },
    {
      value: 'user2',
      label: 'User2 ',
    },
    {
      value: 'admin2',
      label: 'Admin2 ',
    },
  ];
  const handleRoles = (data: string) => {};
  const handleSearch = (data: objectB) => {};
  const handleInvite = (data: objectB) => {};

  return (
    <div className=" flex  w-full flex-col items-start gap-2.5 self-stretch  p-4 md:flex-row">
      <div className="flex w-fit items-center">
        <div className="  relative left-6">
          <BsSearch className="h-4 w-4 " />
        </div>{' '}
        <div className="w-60">
          <CustomInputLable
            className=" pl-7 text-sm  font-normal "
            type={'text'}
            placeholder={'Type to search....'}
            disabled={false}
            setFunc={handleSearch}
            id={'search'}
            value={''}
            button={''}
          />
        </div>
      </div>
      <div className="flex  w-full min-w-60 items-center">
        <CustomInputLable
          className="text-sm  font-normal"
          type={'text'}
          placeholder={' Invite by  email, seperate multiple emails by comma.'}
          disabled={false}
          setFunc={handleInvite}
          id={'search'}
          value={''}
          button={''}
        />
      </div>
      <div className=" flex w-full items-center gap-2">
        <Button variant={'outline'} className="p-0 ">
          {' '}
          <CustomSelect
            placeholder={'Role'}
            setFunc={handleRoles}
            data={Roles_data}
            className=" w-full border-0 "
          />
        </Button>
        <Button className="text-xs" variant={'default'}>
          {' '}
          Invite
        </Button>
      </div>
    </div>
  );
};

export default InviteUser;
