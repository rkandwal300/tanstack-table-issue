'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import MenuBar from './MenuBar';
import { JSONContent } from '@tiptap/core';

import { useDispatch } from 'react-redux';
import { addTemplate } from '@/redux/features/docs/templateSlice';
import { useAppSelector } from '@/redux/store';

import { TiptapCollabProvider } from '@hocuspocus/provider';
import CharacterCount from '@tiptap/extension-character-count';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import Highlight from '@tiptap/extension-highlight';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';

import React, { useCallback, useEffect, useState } from 'react';
import * as Y from 'yjs';
import { Button } from '@/components/ui/button';
import TableBar from './TableBar';
const colors = [
  '#958DF1',
  '#F98181',
  '#FBBC88',
  '#FAF594',
  '#70CFF8',
  '#94FADB',
  '#B9F18D',
];
const names = [
  'Lea Thompson',
  'Cyndi Lauper',
  'Jennifer Grey',
  'Mickey Rourke',
  'John Cusack',
  'Matthew Broderick',
  'Justine Bateman',
  'Lisa Bonet',
];
const getRandomElement = (list: any) =>
  list[Math.floor(Math.random() * list.length)];
const getRandomColor = () => getRandomElement(colors);
const getRandomName = () => getRandomElement(names);
const ydoc = new Y.Doc();

const websocketProvider = new TiptapCollabProvider({
  appId: '7j9y6m10',
  name: '3',
  document: ydoc,
});

// const getInitialUser = () => {
//   //
//   return JSON.parse(localStorage.getItem('currentUser')) || {
//     name: getRandomName(),
//     color: getRandomColor(),
//   }
// }

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: element => element.getAttribute('data-background-color'),
        renderHTML: attributes => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
    };
  },
});

const getInitialUser = () => {
  //
  return {
    name: getRandomName(),
    color: getRandomColor(),
  };
};

const Tiptap = ({ template }: any) => {
  const [JSON, setJSON] = useState<JSONContent>();
  const [HTML, setHTML] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState('connecting');
  const [currentUser, setCurrentUser] = useState(getInitialUser);

  const { htmlToText } = require('html-to-text');
  // const ll=useAppSelector(state=>state.templateSlice.template)
  //

  // const html = `${ll[0].json}`;

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      CustomTableCell,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TaskList.configure({
        HTMLAttributes: {
          class: 'not-prose pl-2',
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: 'flex items-start my-4',
        },
        nested: true,
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: websocketProvider,
      }),
    ],
    //   content: `
    //     ${html}
    // `,
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    onUpdate: () => {
      const JSONContent = editor?.getJSON();
      // const plainText = editor?.getText()
      const HTMLContent = editor?.getHTML();

      if (HTMLContent) {
        setHTML(HTMLContent);
      }

      if (JSONContent !== undefined) {
        setJSON(JSONContent);
        // JSON=JSONContent
      } else {
      }
    },
  });

  const submitValue = useAppSelector(
    state => state.templateSlice.submit.submit,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (submitValue) {
      return;
    }
    dispatch(addTemplate(JSON));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitValue]);

  useEffect(() => {
    // Update status changes
    websocketProvider.on('status', (event: any) => {
      setStatus(event.status);
    });
  }, []);

  // Save current user to localStorage and emit to editor
  useEffect(() => {
    if (editor && currentUser) {
      // Check if localStorage is available before using it
      // if (typeof localStorage !== 'undefined') {
      //   localStorage.setItem('currentUser', JSON.stringify(currentUser));
      // }

      editor.chain().focus().updateUser(currentUser).run();
    }
  }, [editor, currentUser]);

  const setName = useCallback(() => {
    const name = (window.prompt('Name') || '').trim().substring(0, 32);

    if (name) {
      return setCurrentUser({ ...currentUser, name });
    }
  }, [currentUser]);

  // const getRandomRoom = () => {
  //   const roomNumbers = variables.collabRooms?.trim()?.split(',') ?? [10, 11, 12]

  //   return getRandomElement(roomNumbers.map(number => `rooms.${number}`))
  // }

  // const room = getRandomRoom()

  if (!editor) return null;

  return (
    <div className="">
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-r bg-background px-4 py-4">
        <p className="text-base	font-semibold">Create New Doc</p>
        <div className="flex gap-1 sm:gap-3">
          <Button variant="outline" className="p-1 px-2.5 sm:p-2 sm:px-3.5">
            Save
          </Button>
          <Button variant="outline" className="p-1 px-2.5 sm:p-2 sm:px-3.5">
            Save As Template
          </Button>
        </div>
      </header>

      {editor && <MenuBar editor={editor} />}
      {editor && <TableBar editor={editor} />}
      <EditorContent
        editor={editor}
        className="mx-auto min-h-[500px] w-2/3 border px-2"
      />
      {/* <div className="bg-black px-4 text-white">1 user online</div> */}
      {/* <div className="editor__footer">
        <div className={`editor__status editor__status--${status}`}>
          {status === 'connected'
            ? `${editor.storage.collaborationCursor.users.length} user${editor.storage.collaborationCursor.users.length === 1 ? '' : 's'}`
            : 'offline'}
        </div>
        <div className="editor__name">
          <button onClick={setName}>{currentUser.name}</button>
        </div>
      </div> */}
    </div>
  );
};

export default Tiptap;
