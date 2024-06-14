import { z } from "zod";
import { ProjectSchema } from "./ProjectSchema ";
import { BranchSchema } from "./branchSchema";
import { RfqSchema } from "./RfqSchema";
import { OrderSchema } from "./OrdersSchema";
import { UserSchema } from "./UserSchema";
import { BusinessEditSchema } from "./BusinessSchema";
import { AttachmentsSchema } from "./AttachmentSchema";
import { LineItemSchema } from "./LineItemSchema";
import { TermsSchema } from "./TermsSchema";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const PriorityType = z
  .enum(["low", "normal", "high", "urgent"])
  .optional();
export const RequisitionStatus = z
  .enum([
    "draft",
    "pending",
    "rejected",
    "approved",
    "rfq",
    "orderCreated",
    "partiallyOrdered",
    "completelyOrdered",
    "partiallyReceived",
    "completelyReceived",
    "cancelled",
  ])
  .refine((value) => value !== undefined, {
    message: "Status is required",
  })
  .default("draft");

export const RequisitionSchema = z.object({
  _id: z.string().optional(),
  status: RequisitionStatus,
  priority: PriorityType,
  name: z.string().nonempty({ message: "Name is required" }),

  description: z.string().optional(),
  dueDate: z.date().refine((value) => value !== undefined, {
    message: "Date is required",
  }),
  quantityRequested: z.coerce.number().default(0),
  quantityOpen: z.coerce.number().default(0),
  business: z.string().or(BusinessEditSchema).optional(),
  branches: z.array(z.string().or(BranchSchema)).optional(),
  projects: z.array(z.string().or(ProjectSchema)).optional(),
  lineItems: z.array(LineItemSchema),
  attachments: z.array(AttachmentsSchema).optional(),
  terms: z.array(TermsSchema).optional(),
  rfqs: z.array(z.string().or(RfqSchema)).optional(),
  orders: z.array(z.string().or(OrderSchema)).optional(),
  createdAt: z.string().optional(),
  createdBy: z.string().nonempty().or(UserSchema),
});
export const PartialRequisitionSchema = RequisitionSchema.partial();
export type TZRequisitionSchema = z.infer<typeof RequisitionSchema>;
export type TZPartialRequisitionSchema = z.infer<
  typeof PartialRequisitionSchema
>;

export const RequisitionInitialValue: z.infer<typeof RequisitionSchema> =
  ZodCreateInitialValues(RequisitionSchema);
