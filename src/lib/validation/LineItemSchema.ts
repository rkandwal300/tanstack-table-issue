import { z } from "zod";
import { ProjectSchema } from "./ProjectSchema ";
import { BranchSchema } from "./branchSchema";
import { AddressSchema } from "./AddressSchema";
import { itemSchema } from "./ItemSchema";
import { UnitSchema } from "./AdminSchema";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const LineItemSchema = z.object({
  _id: z.string().optional(),
  serialNumber: z.number().default(1),
  item: z.string().or(itemSchema).default(""),
  unit: z.string().or(UnitSchema).default(""),
  quantityRequested: z.coerce.number().default(0),
  quantityOrdered: z.coerce.number().default(0).optional(),
  quantityReceived: z.coerce.number().default(0).optional(),
  quantityOpen: z.coerce.number().default(0).optional(),
  description: z.string().optional(),
  product: z.string().optional(),
  address: z.string().or(AddressSchema).optional(),
  branch: z.string().or(BranchSchema).optional(),
  project: z.string().or(ProjectSchema).optional(),
  dueDate: z.date().optional(),
  budgetRate: z.coerce.number().optional(),
  budgetAmount: z.coerce.number().optional(),
  rfqLineItem: z.string().optional(),
  orderLineItem: z.string().optional(),
});

export type TZLineItemSchema = z.infer<typeof LineItemSchema>;
export const PartialLineItemSchema = LineItemSchema.partial();
export type TZPartialLineItemSchema = z.infer<typeof PartialLineItemSchema>;
export const lineItemInitialValue: TZLineItemSchema =
  ZodCreateInitialValues(LineItemSchema);
