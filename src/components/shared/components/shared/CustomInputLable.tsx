import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

type objectB = {
  [x: string]: string;
};
interface Input {
  label?: string;
  id: string;
  placeholder?: string;
  type: string;
  disabled?: any;
  setFunc: (a: objectB) => void;
  value?: string;
  button?: string;
  className?: string;
}

export const CustomInputLable: React.FC<Input> = ({
  label,
  id,
  type,
  placeholder,
  disabled,
  setFunc,
  value,
  button,
  className,
}) => {
  const [val, setval] = useState<string>(value || '');
  return (
    <div className="   flex w-full    items-end  gap-6 ">
      <div className=" flex w-full   flex-col  items-start gap-1.5">
        {label && <Label htmlFor="email">{label}</Label>}
        <Input
          required
          className={className}
          type={type ? type : ''}
          id={id ? id : ''}
          disabled={disabled ? true : false}
          placeholder={placeholder ? placeholder : ''}
          value={val}
          onChange={(e) => {
            let TmpVal = e?.target?.value;
            let Tempdata = {
              [id]: TmpVal,
            };
            setval(e?.target?.value);
            setFunc(Tempdata);
          }}
        />
      </div>
      {button && (
        <Button className=" w-52 " variant={'secondary'} type="submit">
          {button}
        </Button>
      )}
    </div>
  );
};
