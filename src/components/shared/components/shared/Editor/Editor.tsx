'use client';

import { TiptapCollabProvider } from '@hocuspocus/provider';
import 'iframe-resizer/js/iframeResizer.contentWindow';
import { useSearchParams } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import * as Y from 'yjs';

import { BlockEditor } from '@/components/shared/Editor/components/BlockEditor';
import { createPortal } from 'react-dom';

import { Surface } from '@/components/shared/Editor/components/ui/Surface';
import { Toolbar } from '@/components/shared/Editor/components/ui/Toolbar';
import { Icon } from '@/components/shared/Editor/components/ui/Icon';

export interface AiState {
  isAiLoading: boolean;
  aiError?: string | null;
}

const useDarkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(
    () => setIsDarkMode(isDark => !isDark),
    [],
  );
  const lightMode = useCallback(() => setIsDarkMode(false), []);
  const darkMode = useCallback(() => setIsDarkMode(true), []);

  return {
    isDarkMode,
    toggleDarkMode,
    lightMode,
    darkMode,
  };
};

export default function Editor({ room }: any) {
  const { isDarkMode, darkMode, lightMode } = useDarkmode();
  const [provider, setProvider] = useState<TiptapCollabProvider | null>(null);
  const [collabToken, setCollabToken] = useState<string | null>(null);
  const [aiToken, setAiToken] = useState('');
  const searchParams = useSearchParams();

  const hasCollab = parseInt(searchParams.get('noCollab') as string) !== 1;

  //   const { room } = params

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      try {
        const response = await fetch('/api/collaboration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const { token } = data;

        // set state when the data received
        //
        setCollabToken(token);
        // retoken();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    dataFetch();
  }, []);

  // useEffect(() => {
  //   // fetch data
  //   const dataFetch = async () => {
  //     const res = await (
  //       await fetch('/api/ai', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //     )
  //     const data= await res.json()

  //     const { token } = data

  //     // set state when the data received
  //     setAiToken(token)
  //   }

  //   dataFetch()
  // }, [])

  const ydoc = useMemo(() => new Y.Doc(), []);

  useLayoutEffect(() => {
    //
    //
    if (hasCollab && collabToken) {
      //
      setProvider(
        new TiptapCollabProvider({
          name: `${process.env.NEXT_PUBLIC_COLLAB_DOC_PREFIX}${room}`,
          appId: process.env.NEXT_PUBLIC_TIPTAP_COLLAB_APP_ID ?? '',
          token: collabToken,
          document: ydoc,
        }),
      );
    }
  }, [setProvider, collabToken, ydoc, room, hasCollab]);

  // if ((hasCollab && (!collabToken || !provider)) || !aiToken) return

  const DarkModeSwitcher = createPortal(
    <Surface className="fixed bottom-6 right-6 z-[99999] flex items-center gap-1 p-1">
      <Toolbar.Button onClick={lightMode} active={!isDarkMode}>
        <Icon name="Sun" />
      </Toolbar.Button>
      <Toolbar.Button onClick={darkMode} active={isDarkMode}>
        <Icon name="Moon" />
      </Toolbar.Button>
    </Surface>,
    document.body,
  );

  return (
    <>
      {DarkModeSwitcher}
      <BlockEditor hasCollab={hasCollab} ydoc={ydoc} provider={provider} />
    </>
  );
}
