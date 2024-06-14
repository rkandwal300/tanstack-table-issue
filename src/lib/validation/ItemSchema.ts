import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";
import { UnitSchema } from "./AdminSchema";

const imageSchema = z.object({
  url: z.string().url(),
});

const sellingPriceSchema = z.object({
  minQuantity: z.number(),
  maxQuantity: z.string(),
  discount: z.number(),
  price: z.number(),
});

const specificationSchema = z.object({
  key: z.string(),
  value: z.string(),
});

export const itemSchema = z.object({
  _id: z.string().optional(),
  active: z.boolean(),
  type: z.string().nonempty(),
  name: z.string().nonempty(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  category: z.string().optional(),
  unit: z.string().or(UnitSchema).optional(),
  description: z.string().optional(),
  hsn: z.string().optional(),
  sac: z.string().optional(),
  cess: z.string().optional(),
  tax: z.number().optional(),
  taxIncluded: z.boolean().optional(),
  purchasePrice: z.number().optional(),
  sellingPrice: z.array(sellingPriceSchema).optional(),
  lowStockAlert: z.number().optional(),
  specifications: z.array(specificationSchema).optional(),
  images: z.array(imageSchema).optional(),
  availableStock: z.number().optional(),
  business: z.string().optional(),
  image: z.string().optional(),
  stockAvailable: z.number().optional(),
});

export const PartialItemSchema = itemSchema.partial();
export type TZItemSchema = z.infer<typeof itemSchema>;
export type TZPartialItemSchema = z.infer<typeof PartialItemSchema>;

export const itemInitialValue: z.infer<typeof itemSchema> =
  ZodCreateInitialValues(itemSchema);
