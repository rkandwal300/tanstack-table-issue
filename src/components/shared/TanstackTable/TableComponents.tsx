import { cn } from "@/lib/utils";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Combobox from "../components/shared/ComboBox";
import { Textarea } from "@/components/ui/textarea";

interface TableCellDivProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "border";
}

interface TableCellInputProps {
  onChange?: (value: string) => void;
  defaultValue?: string;
  onchange?: (value: string) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

interface TableCellTextAreaProps
  extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className?: string;
  placeholder?: string;
  value?: string;
}

interface TableCellHoverCardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
  data: { name: string }[];
}
type ComboboxProps = {
  defaultOptions: { label: string; value: string }[];
  onSelect: (data: string | string[]) => void;
  className?: string;
  label?: string;
  isMulti?: boolean;
  placeholder?: string;
  selected?: { label: string; value: string };
  selectedAsync?: () => Promise<{ label: string; value: string } | undefined>;
  handleAsyncSearch?: (
    search: string
  ) => Promise<{ label: string; value: string }[]>;
};

export const TableCellCombobox = React.forwardRef<
  HTMLDivElement,
  ComboboxProps
>(
  ({
    label,
    placeholder,
    selected,
    isMulti,
    className,
    defaultOptions,
    onSelect,
    selectedAsync,
    handleAsyncSearch,
  }) => {
    const [defaultSelected, setDefaultSelected] = React.useState<
      { label: string; value: string } | undefined
    >(undefined);
    React.useEffect(() => {
      const fetchData = async () => {
        if (selectedAsync) {
          const data = await selectedAsync().catch(() => undefined);
          setDefaultSelected(data);
        }
      };

      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    return (
      <Combobox
        isMulti={isMulti}
        variant={"ghost"}
        selected={defaultSelected}
        label={label}
        className={cn("h-9 min-h-8 w-full rounded-none border-x", className)}
        placeholder={placeholder}
        defaultOptions={defaultOptions}
        handleAsyncSearch={handleAsyncSearch}
        onSelect={onSelect}
      />
    );
  }
);
TableCellCombobox.displayName = "TableCellCombobox";

export const TableCellInput = React.forwardRef<
  HTMLInputElement,
  TableCellInputProps
>(({ defaultValue, onChange, placeholder, type, ...props }) => {
  const [value, setValue] = React.useState(defaultValue);

  const request = (value: string) =>
    setTimeout(() => onChange && onChange(value), 1000);
  const debouncedChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      // debounceRequest(`{event.target.value}`);
      request(event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <Input
      className="h-full w-full rounded-none border-0 border-x   p-2"
      placeholder={placeholder ? placeholder : ""}
      type={type ? type : "text"}
      value={value}
      onChange={debouncedChange}
      {...props}
    />
  );
});
TableCellInput.displayName = "TableCellInput";

export const TableCellTextArea = React.forwardRef<
  HTMLTextAreaElement,
  TableCellTextAreaProps
>(({ name, placeholder, className, ...props }) => (
  <FormField
    name={name}
    render={({ field }) => (
      <FormItem
        className={cn("h-full w-full p-0", "max-w-[600px] pl-10", className)}
      >
        <FormControl>
          <Textarea
            placeholder={placeholder ? placeholder : ""}
            {...field}
            {...props}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
));
TableCellTextArea.displayName = "TableCellTextArea";

export const TableCellDiv = React.forwardRef<HTMLDivElement, TableCellDivProps>(
  ({ className, variant, children, ...props }) => {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center gap-2 p-2 align-middle",
          variant == "border" && "border-x",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TableCellDiv.displayName = "TableCellDiv";

export const TableCellHoverCard = React.forwardRef<
  HTMLDivElement,
  TableCellHoverCardProps
>(({ data, label }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        asChild
        onMouseEnter={() => {
          setTimeout(() => setIsOpen(true), 2000);
        }}
      >
        <Button variant="link">{label ? label : data.length}</Button>
      </PopoverTrigger>
      <PopoverContent
        // sticky={'always'}
        // style={{ position: 'fixed', zIndex: 9999 }} // Adjust the z-index value as needed
        onBlur={() => setIsOpen(false)}
        onMouseLeave={() => setIsOpen(false)}
        className=" max-w-80"
        side="bottom"
      >
        <ul className="flex flex-col gap-1.5">
          {data.map((item, index: number) => {
            if (!item) return null;
            return (
              <li key={index} className="text-sm">
                {item.name}
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
});
TableCellHoverCard.displayName = "TableCellHoverCard";

// export const DataTableHeader = ({
//   header,
//   table,
//   wrap,
//   label,
//   filters,
// }: {
//   filters?: Action[];
//   header: any;
//   label: string;
//   table: any;
//   wrap?: boolean;
// }) => {
//   const pinnedColumns = table.getState().columnPinning.left || [];
//   const isPinned = pinnedColumns.includes(header.id);
//   return (
//     <DataTableColumnOption
//       className=""
//       filter={filters || []}
//       label={label}
//       columnPin={{
//         pinnedColumns,
//         isPinned,
//         table: table,
//         header: header,
//       }}
//       wrap={wrap ? true : false}
//     />
//   );
// };
