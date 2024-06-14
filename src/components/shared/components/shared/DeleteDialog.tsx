import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { RemixiconComponentType, RiDeleteBinLine } from '@remixicon/react';
import { FiTrash2 } from 'react-icons/fi';

type pageProps = {
  className?: string;
  title?: React.ReactNode;
  handleDelete: (d: boolean) => void;
  Icon?: RemixiconComponentType;
};
export function DeleteDialog({
  handleDelete,
  className,
  title,
  Icon,
}: pageProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={` ${className}`} asChild>
        <Button size={'sm'} variant={'ghost'}>
          {title ? (
            title
          ) : Icon ? (
            <Icon className="h-4 w-4 text-destructive" />
          ) : (
            <RiDeleteBinLine className="h-4 w-4 text-destructive" />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove your data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/30"
            onClick={() => handleDelete(true)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
