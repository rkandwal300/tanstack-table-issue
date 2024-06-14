import React from 'react';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';
import bold from './icon/bold.png';
import italic from './icon/italic.png';
import strikethrough from './icon/strikethrough.png';
import codeView from './icon/code-view.png';
import markPenLine from './icon/mark-pen-line.png';
import h1 from './icon/h-1.png';
import h2 from './icon/h-2.png';
import paragraph from './icon/paragraph.png';
import listUnordered from './icon/list-unordered.png';
import Image from 'next/image';

export default function MenuItem({ icon, title, action, isActive }: any) {
  return (
    <button
      className={`menu-item${isActive && isActive() ? 'bg-gray-200 rounded-lg' : ''}`}
      // className={styles.menuItem}
      onClick={action}
      title={title}
    >
      {/* <svg className='remix'>
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg> */}
      <Image
        src={`/icon/${icon}.png`}
        width={20}
        height={20}
        alt="Picture of the author"
        className="opacity-50"
      />
    </button>
  );
}
