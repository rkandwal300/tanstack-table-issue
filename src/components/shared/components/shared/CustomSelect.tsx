import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Input {
  label?: string;
  placeholder?: string;
  className?: string;
  setFunc: (a: string) => void;
  data: { value: string; label: string }[];
}

export const CustomSelect: React.FC<Input> = ({
  label,
  placeholder,
  setFunc,
  data,
  className,
}) => {
  return (
    <Select onValueChange={e => setFunc(`${e}`)}>
      <SelectTrigger
        className={
          className + '  flex items-center  gap-2 text-xs font-semibold'
        }
      >
        <SelectValue className="" placeholder={placeholder || ''} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label || ''}</SelectLabel>
          {data &&
            data.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <SelectItem value={val.label} key={index}>
                    {/* <input
                      type="radio"
                      value={val?.value || "NA"}
                      name={placeholder}
                      className="mr-2"
                    /> */}
                    {val.label || 'NA'}
                  </SelectItem>
                </React.Fragment>
              );
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
