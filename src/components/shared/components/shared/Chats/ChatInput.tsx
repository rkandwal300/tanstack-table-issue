'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import React from 'react';
import { AiOutlineCamera, AiOutlinePlus } from 'react-icons/ai';

import { BsCurrencyRupee, BsFillPersonFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

type Props = {};

export default function ChatInput({}: Props) {
  const [messages, setMessages] = React.useState([
    {
      role: 'agent',
      content: 'Hi, how can I help you today?',
    },
    {
      role: 'user',
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: 'agent',
      content: 'What seems to be the problem?',
    },
    {
      role: 'user',
      content: "I can't log in.",
    },
  ]);

  const [input, setInput] = React.useState('');
  const inputLength = input.trim().length;
  return (
    <div className="mt-4 flex w-full items-center px-6 py-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputLength === 0) return;
          setMessages([
            ...messages,
            {
              role: 'user',
              content: input,
            },
          ]);
          setInput('');
        }}
        className="flex w-full items-center space-x-2"
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border border-primary"
            >
              <AiOutlinePlus className="h-4 w-4 text-primary" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="">
            <div className="grid grid-cols-3 gap-2">
              <div className="w-fit rounded-full bg-purple-500 p-4">
                <IoDocumentTextOutline className="h-4 w-4 text-white" />
              </div>
              <div className="w-fit rounded-full bg-destructive p-4">
                <AiOutlineCamera className="h-4 w-4 text-white" />
              </div>
              <div className="w-fit rounded-full bg-pink-500 p-4">
                <IoImageOutline className="h-4 w-4 text-white" />
              </div>
              <div className="w-fit rounded-full bg-primary p-4">
                <BsFillPersonFill className="h-4 w-4 text-white" />
              </div>
              <div className="w-fit rounded-full bg-green-500 p-4">
                <GrLocation className="h-4 w-4 text-white" />
              </div>
              <div className="w-fit rounded-full bg-orange-500 p-4">
                <BsCurrencyRupee className="h-4 w-4 text-white" />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Input
          id="message"
          placeholder="Type your message..."
          className="flex-1"
          autoComplete="off"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button type="submit" size="icon" disabled={inputLength === 0}>
          <PaperPlaneIcon className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
