'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import { Label } from '@/components/ui/label';
import { GoShareAndroid } from 'react-icons/go';
import { cn } from '@/lib/utils';

export const ShareButtonCustom = ({
  url,
  title,
  trigger,
  iconSize,
}: {
  url: string;
  title: string;
  trigger?: React.ReactNode;
  iconSize: string;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            trigger
              ? null
              : 'flex h-9 w-9 items-center justify-center rounded-full p-1 hover:bg-accent hover:text-accent-foreground ',
          )}
          onClick={() => {
            // if (typeof window !== 'undefined' && navigator && navigator.share) {
            //   navigator
            //     .share({
            //       title: title,
            //       url: url,
            //     })
            //     .then(() => console.log('Successful share'))
            //     .catch(e => console.log('Error sharing', e));
            //   setOpen(false);
            //   return;
            // } else {
            //   setOpen(!open);
            //   return;
            // }
            setOpen(!open);
          }}
        >
          {trigger ? trigger : <GoShareAndroid size={20} />}
        </div>
      </PopoverTrigger>
      <PopoverContent className="grid w-fit grid-cols-3 justify-items-center gap-3">
        <EmailShareButton
          url={url}
          subject={title}
          // body="body"
        >
          <EmailIcon size={iconSize} round />
          {/* <Label className="text-xs">Email</Label> */}
        </EmailShareButton>

        {/* 2. facebook */}
        <FacebookShareButton
          url={url}
          quote={title}
          // hashtag={"#nextShare"}
        >
          <FacebookIcon size={iconSize} round />
          {/* <Label className="text-xs">Facebook</Label> */}
        </FacebookShareButton>

        {/* 3. facebook messenger  */}
        <FacebookMessengerShareButton url={url} appId={''}>
          <FacebookMessengerIcon size={iconSize} round />
          {/* <Label className="text-xs">Messenger</Label> */}
        </FacebookMessengerShareButton>

        {/* 4. Linkedin */}
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={iconSize} round />
          {/* <Label className="text-xs">Linkedin</Label> */}
        </LinkedinShareButton>

        {/* 5. Pinterest */}
        <PinterestShareButton url={url} media={title || ''}>
          <PinterestIcon size={iconSize} round />
          {/* <Label className="text-xs">Pinterest</Label> */}
        </PinterestShareButton>

        {/* 6.  Reddit */}
        <RedditShareButton url={url} title={title || ''}>
          <RedditIcon size={iconSize} round />
          {/* <Label className="text-xs">Reddit</Label> */}
        </RedditShareButton>

        {/* 7. Telegram */}
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={iconSize} round />
          {/* <Label className="text-xs">Telegram</Label> */}
        </TelegramShareButton>

        {/* 8. Twitter */}
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={iconSize} round />
          {/* <Label className="text-xs">Twitter</Label> */}
        </TwitterShareButton>

        {/* 9. Whatsapp */}
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={iconSize} round />
          {/* <Label className="text-xs">Whatsapp</Label> */}
        </WhatsappShareButton>
      </PopoverContent>
    </Popover>
  );
};

function ShareButton({
  url,
  title,
  iconSize,
}: {
  url: string;
  title: string;
  iconSize: string;
}) {
  return (
    <div className="flex items-center gap-4 self-stretch ">
      <ShareButtonCustom title={title || ''} url={url} iconSize={'32'} />

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>

      <FacebookShareButton
        url={url}
        quote={title}
        // hashtag={"#nextshare"}
      >
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      {/* 8. Twitter */}
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
    </div>
  );
}

export default ShareButton;
