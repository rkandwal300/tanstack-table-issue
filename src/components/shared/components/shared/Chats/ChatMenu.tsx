import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChatList from './ChatList';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Messages</SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="RFQ Wise" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="RFQ Wise">RFQ Wise</TabsTrigger>
            <TabsTrigger value="Company Wise">Company Wise</TabsTrigger>
          </TabsList>
          <TabsContent value="RFQ Wise">
            <ChatList />
          </TabsContent>
          <TabsContent value="Company Wise"></TabsContent>
        </Tabs>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
