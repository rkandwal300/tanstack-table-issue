import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthorType } from '@/lib/typesLandingPage';
import Link from 'next/link';

type Props = { author: AuthorType };

export default function Author({ author }: Props) {
  const LinkedenUrl = author?.attributes?.linkedin;
  const AuthorName = author?.attributes?.author;

  return (
    <Link href={LinkedenUrl || ''} passHref aria-label="author">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage
            src={author?.attributes?.avatar?.data.attributes.url}
            alt={author?.attributes?.author}
          />
          {/* <AvatarFallback className="bg-white"></AvatarFallback> */}
        </Avatar>

        <div className=" flex flex-col items-start">
          {AuthorName && <p className="text-sm font-semibold">{AuthorName}</p>}
          <p className="text-sm font-normal">Founder & CEO Vyapardost</p>
        </div>
      </div>
    </Link>
  );
}
