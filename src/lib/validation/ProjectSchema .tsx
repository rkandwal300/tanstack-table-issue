import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";
import { UserSchema } from "./UserSchema";

const ItemSpecsSchema = z.object({
  item: z.string(),
  quantity: z.number(),
});

export const ProjectSchema = z.object({
  branch: z.string().nonempty(),
  business: z.string().optional(),
  _id: z.string().optional(),
  items: z.array(ItemSpecsSchema).optional(),
  address: z.string().nonempty(),
  name: z.string().nonempty(),
  users: z.array(z.string().or(UserSchema)).optional(),
});

export const projectInitialValue: z.infer<typeof ProjectSchema> =
  ZodCreateInitialValues(ProjectSchema);

export const PartialProjectSchema = ProjectSchema.partial();
export type TZProjectSchema = z.infer<typeof ProjectSchema>;

export type TZPartialProjectSchema = z.infer<typeof PartialProjectSchema>;
