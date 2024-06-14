'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { addToZoho } from '@/lib/actions/zoho';

const formSchema = z.object({
  Email: z
    .string()
    .min(1, {
      message: 'email is empty.',
    })
    .email({
      message: 'please enter a valid email ',
    }),
});

export default function NewsLetter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: '',
    },
  });
  return (
    <Form {...form}>
      <div
        id="newsletter"
        className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 bg-[#FFF5FA] px-4 py-16 md:px-16"
      >
        <div className="flex w-full max-w-7xl flex-col items-start justify-center gap-4 md:flex-row">
          <div className="flex flex-1 flex-col items-start gap-3 ">
            <p className="text-2xl font-semibold">
              Procurement insights, news and updates in your email
            </p>
            <p className="font-semibold text-destructive ">
              Subscribe to our newsletters
            </p>
          </div>

          <form
            onSubmit={form.handleSubmit(
              (values: z.infer<typeof formSchema>) => {
                const data = { ...values, Email_Opt_Out: false };
                addToZoho(data);
              },
            )}
            className="flex flex-col gap-4 self-stretch md:flex-row md:items-center"
          >
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem className="w-full gap-2.5 p-0">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className=" w-full bg-white"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="destructive" className={`px-7 font-semibold`}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Form>
  );
}
