import * as z from "zod";
import { taxSchema } from "./TaxSchema";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const TaxGroupSchema = z.object({
  _id: z.string().optional(),
  business: z.string().nonempty(),
  name: z.string().nonempty({ message: "Name is required" }),
  groupTaxRate: z.number().optional(),
  predefined: z.boolean().optional(),
  taxes: z.array(z.string().or(taxSchema)).nonempty(),
});
export const PartialTaxGroupSchema = TaxGroupSchema.partial();

export type TaxGroupZodType = z.infer<typeof TaxGroupSchema>;

export type PartialTaxGroupZodType = z.infer<typeof PartialTaxGroupSchema>;

export const taxGroupInitialValue: z.infer<typeof TaxGroupSchema> =
  ZodCreateInitialValues(TaxGroupSchema);
