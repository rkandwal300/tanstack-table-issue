import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";
import { BusinessEditSchema } from "./BusinessSchema";
import { BranchSchema } from "./branchSchema";
import { ProjectSchema } from "./ProjectSchema ";
import { OrderSchema } from "./OrdersSchema";
import { AddressSchema } from "./AddressSchema";
import { UserSchema } from "./UserSchema";
import { LineItemSchema } from "./LineItemSchema";

const TermsSchema = z.object({
  serialNumber: z.number(),
  term: z.string(),
  type: z.enum(["mustAccept", "acceptOrReject", "question"]),
});

export const RfqStatus = z.enum([
  "draft",
  "pending",
  "rejected",
  "approved",
  "partialQuotesReceived",
  "allQuotesReceived",
  "auctionScheduled",
  "auctionOngoing",
  "auctionEnded",
  "vendorConfirmed",
  "canceled",
]);

export const AttachmentSchema = z.object({
  name: z.string(),
  url: z.string(),
  metaData: z
    .object({
      fileSize: z.number(),
      unit: z.string(),
    })
    .optional(),
  visibleToSeller: z.boolean(),
  createdBy: z.string(),
  createdAt: z.string(),
});

export const TaxSchema = z.object({
  tax: z.array(z.string()),
  taxGroup: z.string(),
});

export const DeliveryLocationSchema = z.object({
  type: z.literal("Point"),
  city: z.string(),
  state: z.string(),
  coordinates: z.tuple([z.number(), z.number()]),
});

export const AdditionalChargesSchema = z.object({
  serialNumber: z.number(),
  name: z.string(),
  tax: z.string(),
  value: z.number(),
  taxableAmount: z.number(),
  totalAmount: z.number(),
});

export const RfqSchema = z.object({
  _id: z.string().optional(),
  serialNumber: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  dueDate: z.date(),
  bidDueDate: z.date().optional(),
  status: RfqStatus.optional(),
  priority: z.string().optional(),
  isTaxRequired: z.boolean(),
  attachments: z.array(AttachmentSchema),
  lineItems: z.array(LineItemSchema),
  terms: z.array(TermsSchema),
  createdBy: z.string().nonempty().or(UserSchema),
  address: z.string().or(AddressSchema).optional(),
  business: z.string().or(BusinessEditSchema).optional(),
  branches: z.array(z.string().or(BranchSchema)).optional(),
  projects: z.array(z.string().or(ProjectSchema)).optional(),
  invitedVendors: z.array(z.string()).optional(),
  // approval: z.string().optional(),
  // requisitions: z.array(z.string().or(RequisitionSchema)).optional(),
  orders: z.array(z.string().or(OrderSchema)).optional(),
  additionalCharges: z.array(AdditionalChargesSchema).optional(),
  createdAt: z.string().optional(),
});

export const PartialRfqSchema = RfqSchema.partial();
export type TZRfqSchema = z.infer<typeof RfqSchema>;
export type TZPartialRfqSchema = z.infer<typeof PartialRfqSchema>;

export const RfqInitialValue: z.infer<typeof RfqSchema> =
  ZodCreateInitialValues(RfqSchema);
