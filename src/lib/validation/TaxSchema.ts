import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

const TaxType = z
  .enum([
    "GST",
    "CGST",
    "SGST",
    "IGST",
    "UTGST",
    "Cess",
    "TCS",
    "TDS",
    "VAT",
    "Withholding",
    "Sales",
    "Custom Duty",
    "Excise Duty",
    "ServiceTax",
  ])
  .refine((value) => value !== undefined, {
    message: "Tax Type is required",
  });

const TaxAction = z
  .enum(["add", "deduct"])
  .refine((value) => value !== undefined, {
    message: "Tax action is required",
  });

const AppliedOn = z
  .enum(["TaxableAmount", "TotalAmount"])
  .refine((value) => value !== undefined, {
    message: "Applied on is required",
  });

export const taxSchema = z.object({
  _id: z.string().optional(),
  business: z.string(),
  name: z.string().nonempty({ message: "Tax name is required" }),
  predefined: z.boolean().optional(),
  taxRate: z.coerce.number().default(0),
  type: TaxType,
  description: z.string().optional(),
  taxAction: TaxAction,
  appliedOn: AppliedOn,
});

export const PartialTaxSchema = taxSchema.partial();

export type TZTaxSchema = z.infer<typeof taxSchema>;

export type TZPartialTaxSchema = z.infer<typeof taxSchema>;

export const taxInitialValue: z.infer<typeof taxSchema> =
  ZodCreateInitialValues(taxSchema);

export const taxTypeOptions = [
  { label: "GST", value: "GST" },
  { label: "CGST", value: "CGST" },
  { label: "SGST", value: "SGST" },
  { label: "IGST", value: "IGST" },
  { label: "UTGST", value: "UTGST" },
  { label: "Cess", value: "Cess" },
  { label: "TCS", value: "TCS" },
  { label: "TDS", value: "TDS" },
  { label: "VAT", value: "VAT" },
  { label: "Withholding", value: "Withholding" },
  { label: "Sales", value: "Sales" },
  { label: "Custom Duty", value: "Custom Duty" },
  { label: "Excise Duty", value: "Excise Duty" },
  { label: "ServiceTax", value: "ServiceTax" },
];

export const taxActionOptions = [
  { label: "add", value: "add" },
  { label: "deduct", value: "deduct" },
];

export const appliedOnOptions = [
  { label: "Taxable Amount", value: "TaxableAmount" },
  { label: "Total Amount", value: "TotalAmount" },
];
