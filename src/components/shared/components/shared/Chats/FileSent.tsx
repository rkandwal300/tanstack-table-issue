// import React from "react";
// import { FiFileText } from "react-icons/fi";

// type Props = {};

// export default function FileSent({}: Props) {
//   return (
//     <div className="w-full flex flex-col items-end gap-2">
//       <div className="w-fit flex flex-col">
//         <p>Shyam</p>
//         <div className="w-full flex justify-end">
//           <div className="flex gap-2 rounded-lg px-3 py-2 text-sm">
//             <div className="bg-white p-2 rounded-full mr-4">
//               <FiFileText className="w-4 h-4 text-blue-700" />
//             </div>
//             <div className="flex flex-col justify-center">
//               <p>Quote for block.pdf</p>
//               <p>1.2 MB</p>
//             </div>
//           </div>
//         </div>
//         <p className="text-right text-sm text-grey-500">11:40 AM</p>
//       </div>
//     </div>
//   );
// }

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import React from 'react';
import { FiFileText } from 'react-icons/fi';

type Props = {};

export default function FileSent({}: Props) {
  return (
    <div className="flex w-full justify-end">
      <div className="flex w-max max-w-[75%] gap-2">
        <div className="flex flex-col items-end gap-1.5">
          <p className="text-sm font-medium">Shyam</p>
          <div className="ml-auto flex gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
            <div className="h-fit rounded-full bg-white p-2">
              <FiFileText className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <p>Quote for block.pdf</p>
              <div className="flex items-end justify-between">
                <p>1.2 MB</p>
                <p className="text-right text-xs">11:40 AM</p>
              </div>
            </div>
          </div>
        </div>

        <Avatar>
          <AvatarImage src="avatar.png" alt="Image" />
          <AvatarFallback>
            <Image src="profile.svg" width={50} height={50} alt="avtar" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
