import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const QuotationItemSchema = z.object({
  item: z.any(),
  name: z.string(),
  quoteType: z.enum(["rfq", "auction"]),
  rate: z.number(),
  quantity: z.number(),
  taxableAmount: z.number(),
  totalAmount: z.number(),
  tax: z.number(),
  unit: z.string(),
  total: z.number(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

const RepliesSchema = z.object({
  business: z.string(),
  reply: z.string(),
});

const TermsSchema = z.object({
  serialNumber: z.number(),
  term: z.string(),
  type: z.string(),
});

export const QuotesSchema = z.object({
  _id: z.string().optional(),
  total: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  business: z.string(),
  requisition: z.string(),
  rfq: z.string(),
  lineItems: z.array(QuotationItemSchema),
  terms: z.array(TermsSchema),
  createdBy: z.string().optional(),
});

export const QuotesInitialValues = ZodCreateInitialValues(QuotesSchema);

export const PartialQuotesSchema = QuotesSchema.partial();
export type TZQuotesSchema = z.infer<typeof QuotesSchema>;

export type TZPartialQuotesSchema = z.infer<typeof PartialQuotesSchema>;
