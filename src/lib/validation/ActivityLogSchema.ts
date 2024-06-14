import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export enum OperationType {
  create = "create",
  update = "update",
  delete = "delete",
  auction = "auction",
}
export enum ModuleName {
  requisition = "Requisition",
}

export enum ActivityType {
  created = "created",
  cancelled = "cancelled",
  changed = "changed",
  sent = "sent",
  name = "name",
  description = "description",
  dates = "dates",
  statusChange = "statusChange",
  lineItem = "lineItem",
  attachment = "attachment",
  term = "term",
  announcement = "announcement",
  auction = "auction",
  sellerRejectedByBuyer = "sellerRejectedByBuyer",
  approvedBySomeone = "approvedBySomeone",
}
export const ActivityItemSchema = z.object({
  user: z.string().nonempty(),
  createdAt: z.date(),
  operationType: z.nativeEnum(OperationType),
  activityType: z.nativeEnum(ActivityType),
  isVisibleToSeller: z.boolean().optional(),
  from: z.any(),
  to: z.any(),
  activityTitle: z.string().optional(),
});

export const ActivityLogSchema = z.object({
  moduleName: z.nativeEnum(ModuleName),
  documentId: z.string().nonempty(),
  activities: z.array(ActivityItemSchema),
});

export const PartialActivityLogSchema = ActivityLogSchema.partial();
export type TZActivityLogSchema = z.infer<typeof ActivityLogSchema>;
export type TZPartialActivityLogSchema = z.infer<
  typeof PartialActivityLogSchema
>;

export const activityInitialValue: z.infer<typeof ActivityLogSchema> =
  ZodCreateInitialValues(ActivityLogSchema);
