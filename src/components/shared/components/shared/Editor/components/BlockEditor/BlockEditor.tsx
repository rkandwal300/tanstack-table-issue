'use client';

import React, { useMemo, useRef } from 'react';
import { WebSocketStatus } from '@hocuspocus/provider';
import { EditorContent, PureEditorContent } from '@tiptap/react';

import { LinkMenu } from '@/components/shared/Editor/components/menus';

import { useBlockEditor } from '@/lib/hooks/useBlockEditor';

import '@/components/shared/Editor/styles/proseMirror.css';

import { Sidebar } from '@/components/shared/Editor/components/Sidebar/Sidebar';
import { Loader } from '@/components/shared/Editor/components/ui/Loader';
import { EditorContext } from '@/components/shared/Editor/context/EditorContext';
import ImageBlockMenu from '@/components/shared/Editor/extensions/ImageBlock/components/ImageBlockMenu';
import { ColumnsMenu } from '@/components/shared/Editor/extensions/MultiColumn/menus';
import {
  TableColumnMenu,
  TableRowMenu,
} from '@/components/shared/Editor/extensions/Table/menus';
import { useAIState } from '@/lib/hooks/useAIState';
import { createPortal } from 'react-dom';
import { TiptapProps } from './types';
import { EditorHeader } from './components/EditorHeader';
import { TextMenu } from '../menus/TextMenu';
import { ContentItemMenu } from '../menus/ContentItemMenu';

export const BlockEditor = ({ aiToken, ydoc, provider }: TiptapProps) => {
  //
  const aiState = useAIState();
  const menuContainerRef = useRef(null);
  const editorRef = useRef<PureEditorContent | null>(null);

  const { editor, leftSidebar, users, characterCount, collabState } =
    useBlockEditor({ ydoc, provider });

  const displayedUsers = users.slice(0, 3);

  const providerValue = useMemo(() => {
    return {
      isAiLoading: aiState.isAiLoading,
      aiError: aiState.aiError,
      setIsAiLoading: aiState.setIsAiLoading,
      setAiError: aiState.setAiError,
    };
  }, [aiState]);

  if (!editor) {
    return null;
  }

  const aiLoaderPortal = createPortal(
    <Loader label="AI is now doing its job." />,
    document.body,
  );

  return (
    <EditorContext.Provider value={providerValue}>
      <div className="flex h-full" ref={menuContainerRef}>
        {/* <Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor} /> */}
        <div className="relative flex h-full flex-1 flex-col overflow-hidden">
          <EditorHeader
            characters={characterCount.characters()}
            collabState={collabState}
            users={displayedUsers}
            words={characterCount.words()}
            isSidebarOpen={leftSidebar.isOpen}
            toggleSidebar={leftSidebar.toggle}
            editor={editor}
          />
          <EditorContent
            editor={editor}
            ref={editorRef}
            className="flex-1 overflow-y-auto"
          />
          <ContentItemMenu editor={editor} />
          <LinkMenu editor={editor} appendTo={menuContainerRef} />
          <TextMenu editor={editor} />
          <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
          <TableRowMenu editor={editor} appendTo={menuContainerRef} />
          <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
          <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
        </div>
      </div>
      {aiState.isAiLoading && aiLoaderPortal}
    </EditorContext.Provider>
    // <p>done</p>
  );
};

export default BlockEditor;
