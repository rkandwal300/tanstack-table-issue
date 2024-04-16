import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CustomCombobox({
  handleQuery,
  allData,
  isBackendSearch,
  searchValue,
  onValueChange,
  placeholder,
}: {
  handleQuery: (search: string) => void;
  allData: { label: string; value: string }[];
  isBackendSearch?: boolean;
  searchValue?: string;
  onValueChange: (data: string) => void;
  placeholder: string;
}) {
  const [options, setOptions] = React.useState<
    { label: string; value: string }[]
  >([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState(searchValue || "");
  React.useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);
  // console.log("allData : ", allData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    if (isBackendSearch) {
      handleQuery(inputValue);
      handleSort(inputValue);
    }
  };

  function handleSort(inputValue: string) {
    if (inputValue === "") {
      setOptions(allData);
    } else {
      const sortedData = allData.filter((data) =>
        data.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setOptions(sortedData);
    }
  }
  React.useEffect(() => {
    if (searchValue) {
      setInputValue(searchValue);
    }
  }, [searchValue]);
  React.useEffect(() => {
    if (searchValue) {
      setOptions(allData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-[200px] justify-between"
        >
          {value
            ? allData.find((framework) => framework.value === value)?.label
            : "Select Project..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
          {options.length > 0 ? (
            <CommandGroup>
              {options.map((data) => (
                <Button
                  key={data.value}
                  variant="ghost"
                  value={data.value}
                  className="w-full flex justify-between items-center"
                  onClick={() => {
                    const currentValue = data.value;
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {data.label}
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === data.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Button>
              ))}
            </CommandGroup>
          ) : (
            <CommandEmpty>No Projects found.</CommandEmpty>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
