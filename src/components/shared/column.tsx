import { ItemType } from "@/lib/ItemData";
import { ColumnDef } from "@tanstack/react-table";
import CustomCombobox from "./CustomCombobox";

type TypeLineItem = {
  allData: { label: string; value: string }[];
  handleQuery: (query: string) => void;
  searchValue: string;
  onValueChange: (value: string) => void;
  placeholder: string;
};

export const Columns = ({
  handleQuery,
  allData,
  searchValue,
  onValueChange,
  placeholder,
}: TypeLineItem): ColumnDef<ItemType>[] => [
  {
    accessorKey: "_id",

    header: "SR",
  },
  {
    accessorKey: "name",
    header: "Title",
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: () => {
      // const handleProjectQueryChange = (searchQuery: string) => {
      //   handleQuery({ [name]: { query: { name: searchQuery } } });
      //   console.log("query", searchQuery);
      // };
      return (
        <CustomCombobox
          handleQuery={handleQuery}
          searchValue={searchValue}
          allData={allData}
          isBackendSearch={true}
          onValueChange={onValueChange}
          placeholder={placeholder}
        />
      );
    },
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
