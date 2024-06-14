"use client";
import { TZTermsSchema } from "@/lib/validation/TermsSchema";
import { ColumnDef } from "@tanstack/react-table";
import { UseFieldArrayRemove } from "react-hook-form";
import { TableCellDiv, TableCellInput } from "./TableComponents";
import { DeleteDialog } from "./DeleteDialog";
import { Select } from "../components/hoc/Select";
import { RowDragHandleCell } from "./DataTable";

type SelectData = { label: string; value: string }[];
type TypeCreateTerm = {
  allTermType: SelectData;
  remove: UseFieldArrayRemove;
  handleTermsUpdate: (index: number, data: TZTermsSchema) => void;
};

export const CreateTermsColumn = ({
  allTermType,
  remove,
  handleTermsUpdate,
}: TypeCreateTerm): ColumnDef<TZTermsSchema>[] => [
  {
    id: "drag-handle",
    header: "Move",
    cell: ({ row }) => <RowDragHandleCell rowId={row.id} />,
    size: 60,
  },
  {
    accessorKey: "serialNumber",
    id: "serialNumber",
    header: "#",
    cell: ({ row }) => <p className="w-full p-2">{row.index + 1}</p>,
    size: 32,
  },

  {
    accessorKey: "term",
    id: "term",
    header: () => <TableCellDiv>Terms</TableCellDiv>,
    cell: ({ row }) => (
      <TableCellInput
        defaultValue={row.original.term}
        onChange={(value) => {
          row.original.term = value;
          handleTermsUpdate(row.index, { ...row.original, term: value });
        }}
        type="text"
        placeholder=""
      />
    ),

    size: 370,
  },
  {
    accessorKey: "type",
    id: "type",
    header: () => <TableCellDiv>Type</TableCellDiv>,
    cell: ({ row }) => {
      return <Select options={allTermType} value={row.original.type} />;
    },
    size: 220,
  },
  {
    accessorKey: "actions",
    id: "actions",
    header: "",
    cell: ({ row }) => <DeleteDialog handleDelete={() => remove(row.index)} />,
    size: 50,
  },
];
