"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Check,
  CheckCircle2,
  ArrowDown,
  Loader,
  LucideMinus,
  Search,
  SortDesc,
} from "lucide-react";
import { Input } from "@/components/ui/input";

import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";

type IsMultiVariantProps = "placeholder" | "truncate" | "wrap" | "ghost";
type OptionType = {
  label: string;
  value: string;
};

export type ComboboxProps = {
  defaultOptions: OptionType[];
  onSelect: (data: string | string[]) => void;
  className?: string;
  label?: string;
  isMulti?: boolean;
  placeholder?: string;
  variant?: IsMultiVariantProps;
  selected?: { label: string; value: string };
  selectedMulti?: { label: string; value: string }[];
  handleAsyncSearch?: (
    search: string
  ) => Promise<{ label: string; value: string }[]>;
};

const Combobox = React.memo(function Combobox({
  label,
  variant,
  placeholder,
  selected,
  isMulti,
  className,
  defaultOptions,
  onSelect,
  selectedMulti,
  handleAsyncSearch,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState(defaultOptions || []);

  const [selectedValue, setSelectedValue] = React.useState<OptionType>();
  const [selectedOptions, setSelectedOptions] = React.useState<OptionType[]>(
    []
  );
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    const handleDefaultValue = async () => {
      selectedMulti && setSelectedOptions([...selectedMulti]);

      selected && setSelectedValue(selected);
    };

    handleDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const request = (value: string) =>
    setTimeout(() => {
      if (handleAsyncSearch) {
        handleAsyncSearch(value)
          .then((res) => {
            setOptions((prev) => (res !== undefined ? res : prev));
          })
          .catch(() => []);
      } else {
        const data = defaultOptions.filter((i) =>
          i.label.toLowerCase().includes(value.toLowerCase())
        );
        setOptions(data);
      }
    }, 1000);
  const debouncedChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      request(event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedChange(e);
    setInputValue(e.target.value);
  };
  const handleUnselect = (value: string) => {
    const updatedData = selectedOptions.filter((i) => i.value !== value);
    setSelectedOptions(updatedData);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant == "ghost" ? "ghost" : "outline"}
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full",
            isMulti &&
              `flex w-full items-center justify-between gap-2 border  ${
                variant == "placeholder"
                  ? ""
                  : variant == "truncate"
                  ? "min-h-8 flex-nowrap"
                  : "h-auto min-h-8"
              }`,

            className
          )}
        >
          {isMulti ? (
            selectedOptions?.length === 0 ? (
              <div className="flex w-full items-center justify-between gap-3">
                {label ? `${label}` : "Select"}
                <ArrowDown className="h-4 w-4 shrink-0 opacity-50" />
              </div>
            ) : (
              <>
                {variant === "placeholder" && (
                  <div className="flex w-full items-center justify-between gap-2">
                    <CheckCircle2 size={16} color="green" />
                    {label ? `${label}` : "Selected"}
                    <ArrowDown className="h-4 w-4 shrink-0 opacity-50" />
                  </div>
                )}
                {variant !== "placeholder" && (
                  <div
                    className={cn(
                      "items-center justify-between",
                      variant === "wrap"
                        ? "flex flex-wrap gap-1"
                        : "flex gap-1 overflow-hidden"
                    )}
                  >
                    <>
                      {label && `${label}:`}
                      {selectedOptions?.map((item) => (
                        <Badge
                          variant="outline"
                          key={item.value}
                          className="flex items-center justify-center px-1 font-medium"
                        >
                          {item.label}
                          <Button
                            className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleUnselect(item.value);
                              }
                            }}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            onClick={() => handleUnselect(item.value)}
                          >
                            <LucideMinus className="h-3 w-3 rounded-full text-muted-foreground hover:text-destructive" />
                          </Button>
                        </Badge>
                      ))}
                      <ArrowDown className="h-4 w-4 shrink-0 opacity-50" />
                    </>
                  </div>
                )}
              </>
            )
          ) : (
            <>
              {selectedValue ? (
                selectedValue.label
              ) : label ? (
                <p className="text-muted-foreground">{label}</p>
              ) : (
                ""
              )}
              <SortDesc className="ml-auto h-4 w-4 shrink-0 opacity-50" />
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-full p-0">
        <Command>
          <Input
            leftSection={<Search size={16} className="ml-2" />}
            placeholder={placeholder || "Search..."}
            className="h-9"
            value={inputValue}
            onChangeCapture={handleChange}
          />

          {options.length > 0 ? (
            <React.Suspense fallback={<Loader />}>
              <CommandGroup>
                {options.map((option) =>
                  isMulti == true ? (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => {
                        const selectedData = selectedOptions.includes(option)
                          ? selectedOptions.filter((i) => i !== option)
                          : [...selectedOptions, option];
                        setSelectedOptions(selectedData);

                        onSelect(selectedData.map((i) => i.value));
                      }}
                    >
                      <Checkbox
                        className={cn("mr-2 h-4 w-4")}
                        checked={
                          selectedOptions.includes(option) ? true : false
                        }
                      />
                      {option.label}
                    </CommandItem>
                  ) : (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        setSelectedValue(
                          currentValue === selectedValue?.value
                            ? undefined
                            : option
                        );
                        onSelect(
                          currentValue === selectedValue?.value
                            ? ""
                            : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedValue?.value === option.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            </React.Suspense>
          ) : (
            <span className="flex flex-1 items-end justify-center text-sm">
              No options found.
            </span>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
});

export default Combobox;
