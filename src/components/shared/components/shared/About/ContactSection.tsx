'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Countries } from '@/lib/data/Countries';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { addToZoho } from '@/lib/actions/zoho';

const formSchema = z.object({
  First_Name: z.string().min(1, {
    message: 'First name is empty.',
  }),
  Last_Name: z.string().min(1, {
    message: 'Last name is empty.',
  }),

  Email: z
    .string()
    .min(1, {
      message: 'email is empty.',
    })
    .email({
      message: 'please enter a valid email ',
    }),
  Mobile: z.string().min(10, {
    message: 'Mobile number should be atleast 10 characters.',
  }),

  Mailing_Country: z.string().default('+91'),
  Company_Name: z.string(),
  Description: z.string().min(10, {
    message: 'Company name is required.',
  }),
  terms: z.boolean({ required_error: 'please agree to terms and conditions' }),
});

export default function ContactSection() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      First_Name: '',
      Last_Name: '',
      Email: '',
      Mobile: '',
      Mailing_Country: 'India',
      Description: '',
      terms: true,
      Company_Name: '',
    },
  });

  return (
    <Form {...form}>
      <div className="flex w-full flex-col items-center gap-8 px-4 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-base font-semibold text-primary">Contact us</p>
              <p className="text-3xl font-semibold md:text-5xl">Get in touch</p>
            </div>
            <p className="md:font-xl text-center text-base font-normal">
              We&apos;d love to hear from you. <br className="md:hidden" />
              Please fill out this form.
            </p>
          </div>
        </div>

        <div className=" flex w-full items-center justify-center">
          <form
            onSubmit={form.handleSubmit(
              (values: z.infer<typeof formSchema>) => {
                const data = { ...values, Email_Opt_Out: false };
                addToZoho(data);
              },
            )}
            className=" flex w-[480px] flex-col items-center gap-3"
          >
            <div className="flex w-full flex-col gap-3 md:flex-row md:gap-6">
              <FormField
                control={form.control}
                name="First_Name"
                render={({ field }) => (
                  <FormItem className="w-full gap-1.5">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Last_Name"
                render={({ field }) => (
                  <FormItem className=" w-full gap-1.5">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>{' '}
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="w-full" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full flex-col items-start gap-3 p-1">
              <Label>Phone number</Label>
              <div className="flex h-9 w-full justify-center gap-2.5 rounded-md border focus:ring-1 focus:ring-ring">
                <FormField
                  control={form.control}
                  name="Mailing_Country"
                  render={({ field }) => (
                    <FormItem className="w-fit px-2 py-0">
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger
                            className={
                              '  flex  w-20 items-center gap-1 border-0 px-1 text-xs font-semibold shadow-none focus:ring-0 '
                            }
                          >
                            <SelectValue className="" placeholder={'+91'} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup className=" h-[200px] flex-1 overflow-auto">
                              {Countries.map(({ name, dial_code }) => (
                                <SelectItem key={name} value={name}>
                                  {`${dial_code}`}
                                  {/* {`${name} ${dial_code}`} */}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Mobile"
                  render={({ field }) => (
                    <FormItem className=" flex w-full items-center p-0 ">
                      <FormControl>
                        <Input
                          {...field}
                          className={
                            ' flex w-full items-center gap-2 border-0 px-1 text-xs font-semibold shadow-none focus-visible:ring-0'
                          }
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="Description"
              render={({ field }) => (
                <FormItem className=" w-full ">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} className=" w-full" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="Description"
              render={({ field }) => (
                <FormItem className=" w-full gap-1.5  ">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className=" w-full h-[80px]" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className=" w-full   gap-1.5   ">
                  <FormControl>
                    <div className="text-xs ms:text-sm font-normal ">
                      <Checkbox
                        {...field}
                        onClick={(e) => {
                          setTerms(!terms);
                        }}
                        checked={terms}
                        className="scale-75 mr-2 relative top-1 "
                      />
                      By clicking the button below, you agree to our
                      <span className="underline underline-offset-2">
                        Terms of Use
                      </span>
                      and
                      <span className="underline underline-offset-2">
                        Privacy Policy .
                      </span>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button
              variant={'default'}
              type="submit"
              className="w-full "
              size="lg"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </Form>
  );
}
