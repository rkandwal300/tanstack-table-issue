import {
  RequisitionInitialValue,
  RequisitionSchema,
  TZRequisitionSchema,
} from "@/lib/validation/RequisitionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { allTermType, TZTermsSchema } from "@/lib/validation/TermsSchema";
import { useFieldArray, useForm } from "react-hook-form";
import { CreateTermsColumn } from "./TermCreateColumn";
import { DataTable } from "./DataTable";
import { Button } from "@/components/ui/button";

function RequisitionForm() {
  const form = useForm<TZRequisitionSchema>({
    resolver: zodResolver(RequisitionSchema),
    defaultValues: RequisitionInitialValue,
  });

  const terms = useFieldArray({
    name: "terms",
    control: form.control,
  });

  const handleTermsUpdate = (index: number, data: TZTermsSchema) => {
    const oldValue = terms.fields[index];
    const newValue = { ...oldValue, ...data };
    terms.update(index, newValue);
  };

  const TermsColumn = CreateTermsColumn({
    allTermType,
    handleTermsUpdate,
    remove: terms.remove,
  });
  return (
    <>
      {/* Terms Column */}
      <div className="p-2 flex flex-col gap-2 w-full">
        <div className="w-full justify-between flex">
          <span>Terms</span>
          <Button
            className=""
            onClick={() =>
              terms.append({
                serialNumber: terms.fields.length,
                term: "",
                type: "mustAccept",
              })
            }
          >
            Add New
          </Button>
        </div>
        <DataTable
          data={terms.fields}
          columns={TermsColumn}
          move={(newData: TZTermsSchema[]) => {
            terms.replace(newData);
          }}
        />
      </div>
    </>
  );
}

export default RequisitionForm;
