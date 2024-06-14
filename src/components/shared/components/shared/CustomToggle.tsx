'use client';

import { FC, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

type Toogle = {
  id?: string;
  setState?: boolean;
  setFunc: (state: boolean, e?: any) => void;
  label?: string;
};

const CustomToggle: FC<Toogle> = ({ id, setState, label, setFunc }) => {
  return (
    <>
      <div id={id} className="flex items-center space-x-2">
        <Switch
          checked={setState || false}
          onCheckedChange={(e) => {
            setFunc(e);
          }}
        />
        <Label htmlFor="airplane-mode">{label}</Label>
      </div>
    </>
  );
};

export default CustomToggle;
