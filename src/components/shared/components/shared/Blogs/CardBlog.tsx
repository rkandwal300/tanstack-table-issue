import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Blog } from '@/lib/typesLandingPage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Author from './Author';

type Props = {
  data: Blog;
};

export default function CardBlog({ data }: Props) {
  const tags = data?.attributes?.Tags?.data;
  const date = new Date(data?.attributes?.createdAt);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear() % 100;
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;

  return (
    <Link
      href={`blogs/${data?.attributes?.slug}`}
      className="flex w-fit max-w-sm flex-wrap items-start gap-8 rounded-xl border bg-background pb-8 shadow-primary"
    >
      <Image
        src={data?.attributes?.image?.data?.attributes?.url}
        alt="Blog"
        height={'225'}
        width={'390'}
        className="h-60 object-fill"
      />
      <div className=" flex  flex-col items-start gap-6  self-stretch px-4  md:px-6">
        <div className="h-30 flex w-full flex-col items-start gap-2 self-stretch ">
          <div className="flex flex-row items-center gap-2">
            {tags?.map(val => {
              return (
                <p key={val.id} className="font-semibold text-[#6941C6]">
                  {val?.attributes?.Tags}
                </p>
              );
            })}
          </div>
          <p className="text-lg font-semibold md:text-xl">
            {data?.attributes?.title}
          </p>
        </div>
        <Author author={data?.attributes?.author?.data?.[0]} />
      </div>
    </Link>
  );
}
