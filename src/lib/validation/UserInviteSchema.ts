import { z } from "zod";
import { ProjectSchema } from "./ProjectSchema ";
import { BranchSchema } from "./branchSchema";
import { WarehouseSchema } from "./WarehouseSchema";
import { BusinessEditSchema } from "./BusinessSchema";
import { UserSchema } from "./UserSchema";

export const role = z.enum(["member", "manager"]);
export const InviteStatus = z
  .enum(["pending", "accepted", "rejected"])
  .default("pending")
  .optional();

export const UserInviteSchema = z.object({
  _id: z.string().optional(),
  users: z.array(z.string().email().nonempty()),
  email: z.string().email().optional(),
  role: role,
  status: InviteStatus,
  referrerBusiness: z.string(z.array(BusinessEditSchema)).optional(),
  referrerUser: z.string(z.array(UserSchema)).optional(),
  projects: z.array(z.string().nonempty().or(ProjectSchema)).optional(),
  branches: z.array(z.string().nonempty().or(BranchSchema)).optional(),
  warehouses: z.array(z.string().nonempty().or(WarehouseSchema)).optional(),
});

// export const userInviteInitialValues: z.infer<typeof UserInviteSchema> = zodCreateEmptyObject(UserInviteSchema);

// export const userInviteInitialValues: z.infer<typeof UserInviteSchema> =
//   ZodCreateInitialValues(UserInviteSchema);
export const userInviteInitialValues: z.infer<typeof UserInviteSchema> = {
  users: [],
  role: "member",
};

export const PartialUserInviteSchema = UserInviteSchema.partial();
export type TZUserInviteSchema = z.infer<typeof UserInviteSchema>;

export type TZPartialUserInviteSchema = z.infer<typeof PartialUserInviteSchema>;
