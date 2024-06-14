'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Spinner from '../Spinner';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoadMore({
  currentPage,
  pageSize,
}: {
  currentPage: number;
  pageSize: number;
}) {
  const [data, setData] = React.useState([]);
  const [pagesLoaded, setPagesLoaded] = React.useState(1);
  const { ref, inView } = useInView();

  const router = useRouter();
  const searchParams = useSearchParams();

  function parseQueryString(
    input: string,
    label: string,
    newValue: string,
  ): string {
    const pairs: string[] = input.split('&');
    const result: { [key: string]: string }[] = [];
    let labelFound = false;

    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      const keyValue: { [key: string]: string } = {};

      if (key === label) {
        keyValue[key] = newValue;
        labelFound = true;
      } else {
        keyValue[key] = value;
      }

      result.push(keyValue);
    }

    // If label is not found, add a new object with the label and newValue
    if (!labelFound) {
      const newKeyValue: { [key: string]: string } = {};
      newKeyValue[label] = newValue;
      result.push(newKeyValue);
    }

    const queryParams = [];
    for (const item of result) {
      for (const key in item) {
        queryParams.push(`${key}=${item[key]}`);
      }
    }

    return queryParams.join('&');
  }

  React.useEffect(() => {
    function LoadMoreData() {
      if (currentPage < pageSize) {
        const currentQueryParams = parseQueryString(
          searchParams.toString(),
          'currentPage',
          `${currentPage + 1}`,
        );
        router.push(`?${currentQueryParams}`);
      }
    }
    if (inView) {
      LoadMoreData();
    }
  }, [currentPage, inView, pageSize, router, searchParams]);
  return (
    <div
      className="col-span-1 flex items-center justify-center  p-4 sm:col-span-2 md:col-span-3"
      ref={ref}
    >
      <Spinner />
    </div>
  );
}
