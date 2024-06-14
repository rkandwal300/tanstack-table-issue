'use client';

import React from 'react';
import ChatHeader from './ChatHeader';
import FileReceived from './FileReceived';
import TextReceived from './TextReceived';
import FileSent from './FileSent';
import TextSent from './TextSent';
import ChatInput from './ChatInput';

type Props = {};

export default function ChatWindow({}: Props) {
  const chats = [
    {
      mode: 'received',
      name: 'Shyam',
      date: '12 May,2022',
      type: 'file',
    },
    {
      mode: 'received',
      name: 'Shyam',
      date: '12 May,2022',
      type: 'text',
    },
    {
      mode: 'sent',
      name: 'Shyam',
      date: '12 May,2022',
      type: 'file',
    },
    {
      mode: 'sent',
      name: 'Shyam',
      date: '12 May,2022',
      type: 'text',
    },
  ];
  return (
    <div>
      <ChatHeader />
      <div className="flex flex-col gap-8 px-6">
        {chats.map((chat, key) => {
          return (
            <div key={key}>
              {chat.mode === 'received' ? (
                chat.type === 'file' ? (
                  <FileReceived key={key} />
                ) : (
                  <TextReceived key={key} />
                )
              ) : chat.type === 'file' ? (
                <FileSent key={key} />
              ) : (
                <TextSent key={key} />
              )}
            </div>
          );
        })}
      </div>
      <ChatInput />
    </div>
  );
}
