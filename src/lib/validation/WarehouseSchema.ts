import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

const ItemSpecsSchema = z.object({
  item: z.string(),
  quantity: z.number(),
});

export const WarehouseSchema = z.object({
  _id: z.string().optional(),
  business: z.string().optional(),
  branch: z.string().nonempty(),
  items: z.array(ItemSpecsSchema).optional(),
  address: z.string().nonempty(),
  name: z.string().nonempty(),
  users: z.array(z.string()).optional(),
});

export const warehouseInitialValue: z.infer<typeof WarehouseSchema> =
  ZodCreateInitialValues(WarehouseSchema);

export const PartialWarehouseSchema = WarehouseSchema.partial();
export type TZWarehouseSchema = z.infer<typeof WarehouseSchema>;

export type TZPartialWarehouseSchema = z.infer<typeof PartialWarehouseSchema>;
