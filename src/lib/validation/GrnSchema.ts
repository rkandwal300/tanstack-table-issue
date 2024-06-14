import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const GrnItemSchema = z.object({
  serialNumber: z.number(),
  item: z.string(),
  description: z.string(),
  unit: z.string(),
  product: z.string().optional(),
  remarks: z.string(),
  quantityPrevious: z.object({
    accepted: z.number(),
    rejected: z.number(),
  }),
  quanityNew: z.object({
    accepted: z.number(),
    rejected: z.number(),
  }),
  quantityTotal: z.object({
    accepted: z.number(),
    rejected: z.number(),
  }),
  balance: z.number(),
});

export const GrnSchema = z.object({
  business: z.string(),
  warehouse: z.string(),
  project: z.string(),
  createdBy: z.string(),
  goodsReceivedDate: z.date(),
  requisitions: z.array(z.string()),
  rfqs: z.array(z.string()),
  workOrders: z.array(z.string()),
  status: z.string(),
  grnItems: z.array(GrnItemSchema),
});

export const GrnInitialValue = (z.infer<typeof GrnItemSchema> =
  ZodCreateInitialValues(GrnItemSchema));

export const PartialGrnItemSchema = GrnItemSchema.partial();
export type TZGrnItemSchema = z.infer<typeof GrnItemSchema>;
export type TZPartialGrnItemSchema = z.infer<typeof PartialGrnItemSchema>;
