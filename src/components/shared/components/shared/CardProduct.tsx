import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { Skeleton } from '../ui/skeleton';
interface CardProductProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src: string | StaticImageData;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export function CardProduct({
  src,
  name,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: CardProductProps) {
  return (
    <div className={cn('card space-y-3 p-2', className)} {...props}>
      <div className="overflow-hidden rounded-md">
        {src == 'abc' ? (
          <Image
            src={src}
            alt={name}
            width={width}
            height={height}
            className={cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            )}
          />
        ) : (
          <Skeleton className="h-36 w-36 " />
        )}
      </div>

      <p className=" line-clamp-2 text-sm font-medium ">{name}</p>
    </div>
  );
}

// <div className="space-y-1 text-sm">
// <h3 className="font-medium leading-none">{album.name}</h3>
// <p className="text-xs text-muted-foreground">{album.artist}</p>
// </div>
