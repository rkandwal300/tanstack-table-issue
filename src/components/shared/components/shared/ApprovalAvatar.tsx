'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { AiFillCloseCircle, AiOutlineCheck } from 'react-icons/ai';
import { BsCheckCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FormLabel } from '../ui/form';
import AvatarCustom from './AvatarCustom';

export interface IApproval {
  name: string;
  url: string;
  approved: boolean;
}

export interface ApprovalListProps {
  data: IApproval[];
  length: number;
}

export const ApprovalAvatar = ({ data, length }: ApprovalListProps) => {
  let approvedValue = data;
  let nonApproved = approvedValue?.filter(val => val.approved == false);
  let yesApproved = approvedValue?.filter(val => val.approved == true);
  const newApprovedArr = [...nonApproved, ...yesApproved];
  return (
    <div className="flex flex-col gap-4">
      <FormLabel>{`Approver (${yesApproved.length}/${data.length})`}</FormLabel>
      <div className="flex h-9 items-start">
        {newApprovedArr.map((val, index) => {
          if (index < length) {
            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-end gap-0">
                      <AvatarCustom url={val.url} alt={val.name} />
                      <div className="-translate-y-3.5">
                        {val.approved ? (
                          <BsCheckCircleFill className="h-4 w-4 rounded-full bg-white text-green-500" />
                        ) : (
                          <AiFillCloseCircle className="h-4 w-4 rounded-full bg-white text-red-500" />
                        )}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{val.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          } else if (index == length) {
            return (
              <Avatar key={index} className="h-8 w-8">
                <AvatarFallback className="text-sm font-medium text-primary">
                  +{approvedValue.length - length}
                </AvatarFallback>{' '}
              </Avatar>
            );
          }
        })}
      </div>
    </div>
  );
};
