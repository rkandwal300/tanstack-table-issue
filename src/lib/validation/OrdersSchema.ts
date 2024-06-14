import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const Status = z
  .enum([
    "draft",
    "pending",
    "rejected",
    "approved",
    "ordered",
    "partiallyConfirmed",
    "completelyConfirmed",
    "partiallyRejected",
    "completelyRejected",
    "partiallyShipped",
    "completelyShipped",
    "partiallyReceived",
    "completelyReceived",
    "canceled",
  ])
  .default("draft");

const OrderItemSchema = z.object({
  id: z.number(),
  item: z.object({
    header: z.string(),
    description: z.string(),
  }),
  quantity: z.number(),
  unit: z.string(),
  rate: z.number(),
  discount: z.number(),
  tax: z.number(),
  amount: z.number(),
});

export const termsSchema = z.object({
  serialNumber: z.number(),
  terms: z.string(),
  type: z.string(),
});

export const OrderSchema = z.object({
  requisition: z.array(z.string()),
  rfq: z.array(z.string()),
  title: z.string().nonempty(),
  number: z.coerce.number(),
  project: z.string().nonempty(),
  branch: z.string().nonempty(),
  vendor: z.string().nonempty(),
  vendorDetails: z.string().optional(),
  grn: z.string().optional(),
  deliveryContact: z.string().nonempty(),
  business: z.string().nonempty(),
  businessDetails: z.string().optional(),
  email: z.string().email(),
  orderDate: z.date(),
  paymentDueDate: z.date().optional(),
  deliveryDate: z.date().optional(),
  deliveryAddress: z.string().nonempty(),
  orders: z.array(OrderItemSchema),
  terms: z.array(termsSchema).optional(),
  warehouse: z.string().optional(),
  status: Status,
  createdBy: z.string().nonempty(),
  sentBy: z.string().nonempty(),
  cancelledBy: z.string().optional(),
  lineItems: z.array(OrderItemSchema).optional(),
});

export const OrderInitialValue: z.infer<typeof OrderSchema> = {
  ...ZodCreateInitialValues(OrderSchema),
  email: "",
};

export const PartialOrderSchema = OrderSchema.partial();
export type TZOrderSchema = z.infer<typeof OrderSchema>;

export type TZPartialOrderSchema = z.infer<typeof PartialOrderSchema>;
