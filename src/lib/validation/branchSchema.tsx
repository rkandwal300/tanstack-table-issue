import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";
import { UserSchema } from "./UserSchema";

export const BranchSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  business: z.string(),
  address: z.string(),
  pan: z.string().optional(),
  gst: z.string().optional(),
  companyIds: z
    .array(
      z.object({
        key: z.string().default(""),
        value: z.string().default(""),
      })
    )
    .default([{ key: "", value: "" }]),
  warehouse: z.string().optional(),
  users: z.array(z.string().or(UserSchema)).optional(),
});
export const PartialBranchSchema = BranchSchema.partial();
export type TZBranchSchema = z.infer<typeof BranchSchema>;
export type TZPartialBranchSchema = z.infer<typeof PartialBranchSchema>;

export const branchInitialValue: z.infer<typeof BranchSchema> =
  ZodCreateInitialValues(BranchSchema);
