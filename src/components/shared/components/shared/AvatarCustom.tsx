import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { RiAddLine, RiUserLine } from '@remixicon/react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type AvatarCustomProps = {
  url?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

export default function AvatarCustom({
  url,
  alt,
  className,
  onClick,
}: AvatarCustomProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-pointer" asChild>
          <Avatar className={cn('h-8 w-8', className)} onClick={onClick}>
            <AvatarImage src={url} alt={alt} />

            <AvatarFallback>
              <RiUserLine size={16} />
            </AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="z-50">
          <p>{alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function UploadImage({
  handleUpload,
  type,
}: {
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'circle' | 'square';
}) {
  return (
    <React.Fragment>
      <Label
        htmlFor="UploadImage"
        className={cn(
          'flex h-16 w-16 cursor-pointer items-center justify-center border border-dashed hover:bg-muted/50',
          type == 'circle' ? 'rounded-full' : 'rounded',
        )}
      >
        <RiAddLine size={20} className="text-primary" />
      </Label>
      <Input
        onChange={e => handleUpload(e)}
        id="UploadImage"
        className="hidden"
        type="file"
      />
    </React.Fragment>
  );
}

export function AvatarCustomForm({
  url,
  alt,
  className,
  handleUpload,
}: AvatarCustomProps & {
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      handleUpload(event); // Call the handleUpload function to upload the selected file
    }
  };

  React.useEffect(() => {
    setSelectedFile(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fileUrl = selectedFile
    ? URL.createObjectURL(selectedFile as Blob)
    : null;
  return (
    <div className="flex items-center gap-2 ">
      <Label htmlFor="UploadImage">
        <AvatarCustom
          url={fileUrl || url}
          alt={alt || selectedFile?.name || 'avatar'}
          className={className}
          // onClick={handleAvatarClick}
        />
      </Label>
      <Input
        onChange={handleFileChange}
        id="UploadImage"
        className="hidden"
        type="file"
      />
    </div>
  );
}
