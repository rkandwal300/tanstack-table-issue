'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { RiFlag2Fill } from '@remixicon/react';
import { cn } from '@/lib/utils';

export default function SelectPriority({
  defaultValue,
  onChange,
}: {
  defaultValue: string;
  onChange: (value: string) => void;
}) {
  const [status, setStatus] = React.useState<string>(defaultValue);
  const statusList = [
    { value: 'urgent', label: 'Urgent' },
    { value: 'high', label: 'High' },
    { value: 'normal', label: 'Normal' },
    { value: 'low', label: 'Low' },
  ];
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={data => {
        onChange(data);
        setStatus(data);
      }}
    >
      <SelectTrigger className="h-fit w-fit border-0 py-1 capitalize focus:ring-0">
        <RiFlag2Fill
          size={16}
          className={cn(
            'mr-2',
            status == 'urgent'
              ? 'text-red-500'
              : status == 'high'
                ? 'text-yellow-500'
                : status == 'normal'
                  ? 'text-blue-500'
                  : status == 'low'
                    ? 'text-gray-500'
                    : 'text-gray-200',
          )}
        />
        {statusList.find(val => val.value === status)?.label || 'low'}
        {/* {status == 'None' ? 'Priority' : status} */}
      </SelectTrigger>

      <SelectContent>
        {statusList?.map((val, key) => (
          <SelectItem value={`${val.value}`} key={key}>
            <div className="flex flex-row items-center gap-1">
              <RiFlag2Fill
                size={16}
                className={cn(
                  'mr-2 ',
                  val.value == 'urgent'
                    ? 'text-red-500'
                    : val.value == 'high'
                      ? 'text-yellow-500'
                      : val.value == 'normal'
                        ? 'text-blue-500'
                        : val.value == 'low'
                          ? 'text-gray-500'
                          : 'text-gray-200',
                )}
              />
              {val.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
