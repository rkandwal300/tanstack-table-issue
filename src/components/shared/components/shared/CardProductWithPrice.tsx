import { cn } from '@/lib/utils';
import Image from 'next/image';
interface CardProductProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src: string;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export function CardProductWithPrice({
  src,
  name,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: CardProductProps) {
  return (
    <div className={cn('card gap-4 p-2', className)} {...props}>
      <div className="overflow-hidden rounded-md">
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
      </div>

      <p className="line-clamp-2 font-medium">{name}</p>

      <div className="flex flex-1 flex-col justify-end gap-1 text-sm">
        <p className="line-clamp-2 font-medium">₹ 2300 - ₹ 3200</p>
        <p className="text-xs text-muted-foreground">MOQ - 20 Cum</p>
      </div>
    </div>
  );
}
