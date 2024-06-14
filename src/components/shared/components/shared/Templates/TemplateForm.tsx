'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleRight } from 'react-icons/fa';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { TemplateFileType } from '@/lib/typesLandingPage';
import { addToZoho } from '@/lib/actions/zoho';

const formSchema = z.object({
  First_Name: z
    .string()
    .min(2, 'First Name should be at least 2 characters')
    .max(50, 'First Name should be less than 50 characters'),
  Last_Name: z.string().min(2).max(50),
  email: z.string().email('Please enter a valid email'),
});

type PageProps = {
  file: TemplateFileType;
};
export default function TemplateForm({ file }: PageProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      First_Name: '',
      Last_Name: '',
      email: '',
    },
  });
  function handleTemplateDownload() {
    fetch(file?.data?.attributes?.url)
      .then(res => res.blob())
      .then(blob => {
        const fileName = file?.data?.attributes?.hash;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.setAttribute('download', fileName || file?.data?.attributes?.name);
        document.body.appendChild(a);
        a.click();
        // a.download = file?.data?.attributes?.name;
        a.remove();
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values: z.infer<typeof formSchema>) => {
          const data = { ...values, Email_Opt_Out: false };
          setSubmitted(true);
          const subscribeZoho = addToZoho(data);
          subscribeZoho.then(res => {
            if (res == false) {
              // handleTemplateDownload();
              // setSubmitted(false);
            } else {
              setSubmitted(false);
              setErrorMessage(true);
            }
          });

          // setSubmitted(subscribeZoho?.loading);
        })}
        className="flex flex-col gap-6"
      >
        <p className="text-start text-xl font-semibold md:text-2xl ">
          Download the Guide
        </p>
        <div className="flex items-start gap-8">
          <FormField
            control={form.control}
            name="First_Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-muted-foreground">
                  {' '}
                  First name
                </FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Last_Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-muted-foreground">
                  {' '}
                  Last name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-muted-foreground">
                {' '}
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="you@company.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={submitted}
          type="submit"
          className="flex w-fit items-center gap-2.5 rounded-md  bg-[#F75123] text-base font-semibold  text-background "
        >
          Download
          {submitted ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <FaAngleRight />
          )}
        </Button>
        {errorMessage ? (
          <p className="text-sm font-normal text-red-600">
            Something went wrong. Please try again later.
          </p>
        ) : null}
        <p className="text-sm font-normal">
          By clicking the button above, you agree to our{' '}
          <span className="text-primary">Terms of Use and Privacy Policy.</span>
        </p>
      </form>
    </Form>
  );
}
