import React from 'react';
import { Separator } from '@/components/ui/separator';
import Author from '@/components/shared/Blogs/Author';
import { AuthorType } from '@/lib/typesLandingPage';
import ShareButton from '../ShareButton';

type Props = {
  author: AuthorType;
  formattedDate: String;
  title?: string;
  route?: string | number;
};

export default function BlogInfo({
  author,
  formattedDate,
  title,
  route,
}: Props) {
  // const url = `/${route}`;
  const url = `${process.env.NEXT_PUBLIC_Hosting_URL}${route}`; //`https://next-share.vercel.app/blogs/${id}`;

  const iconSize = '32';

  return (
    <div className="flex max-w-4xl flex-col items-start justify-center gap-4 self-start lg:flex-row lg:gap-10 ">
      <div className="flex gap-4">
        <Author author={author} />
        <Separator orientation="vertical" className="bg-[#FD71AF]" />
        <div className=" flex flex-col items-start">
          <p className="text-sm font-medium">{formattedDate}</p>
          <p className="text-sm font-normal">
            {'12 min read'}
            {/* {`${author?.attributes?.readtime} min read`} */}
          </p>
        </div>
      </div>

      {/* share button */}
      <ShareButton title={title || ''} url={url} iconSize={'32'} />
    </div>
  );
}
