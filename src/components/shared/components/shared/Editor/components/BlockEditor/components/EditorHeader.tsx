// import { Icon } from '@/components/ui/Icon'
import { EditorInfo } from './EditorInfo';
import { EditorUser } from '../types';
import { WebSocketStatus } from '@hocuspocus/provider';
import { Toolbar } from '../../ui/Toolbar';
import { Icon } from '../../ui/Icon';
import GROUPS from '../../../extensions/SlashCommand/groups';
import { Editor } from '@tiptap/react';
import { Command } from '../../../extensions/SlashCommand/types';
import { DropdownButton } from '../../ui/Dropdown';
// import { Toolbar } from '@/components/ui/Toolbar'

export type EditorHeaderProps = {
  editor: Editor;
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
  characters: number;
  words: number;
  collabState: WebSocketStatus;
  users: EditorUser[];
};

export const EditorHeader = ({
  editor,
  characters,
  collabState,
  users,
  words,
  isSidebarOpen,
  toggleSidebar,
}: EditorHeaderProps) => {
  return (
    <div className="flex flex-none flex-row items-center justify-between border-b border-neutral-200 bg-white py-2 pl-6 pr-3 text-black dark:border-neutral-800 dark:bg-black dark:text-white">
      <div className="flex flex-row items-center gap-x-1.5">
        <div className="flex items-center gap-x-1.5">
          <Toolbar.Button
            tooltip={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            onClick={toggleSidebar}
            active={isSidebarOpen}
            className={isSidebarOpen ? 'bg-transparent' : ''}
          >
            <Icon name={isSidebarOpen ? 'PanelLeftClose' : 'PanelLeft'} />
          </Toolbar.Button>
        </div>
        <div className="flex ">
          {GROUPS.map(group => {
            return group.commands.map(command => (
              <div key={command.name} className="flex items-center gap-x-1.5">
                <Toolbar.Button
                  tooltip={command.label}
                  onClick={() => command.action}
                >
                  <Icon name={command.iconName} />
                </Toolbar.Button>
              </div>
            ));
          })}
          {/* {GROUPS.map((group) => 
              {
                return group.commands.map(
                  (command: Command, commandIndex: number) => (
                    <DropdownButton
                      key={`${command.label}`}
                      isActive={
                        selectedGroupIndex === groupIndex &&
                        selectedCommandIndex === commandIndex
                      }
                      onClick={createCommandClickHandler(
                        groupIndex,
                        commandIndex,
                      )}
                    >
                      <Icon name={command.iconName} className="mr-1" />
                      {command.label}
                    </DropdownButton>
                  ),
                );
               
            }
          )} */}
        </div>
      </div>
      <EditorInfo
        characters={characters}
        words={words}
        collabState={collabState}
        users={users}
      />
    </div>
  );
};
