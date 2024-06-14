import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const gstPanSchema = z.object({
  _id: z.string().optional(),
  business: z.string().optional(),
  businessLegalName: z.string().optional(),
  description: z.string().optional(),
  docType: z.enum(["gst", "pan"]).default("gst"),
  number: z.string(),
  verified: z.boolean(),
});

export type PartialGstPanZodType = z.infer<typeof gstPanSchema>;
export type GstPanZodType = z.infer<typeof gstPanSchema>;

export const gstPanInitialValue: z.infer<typeof gstPanSchema> =
  ZodCreateInitialValues(gstPanSchema);

export const PartialGstPanSchema = gstPanSchema.partial();
export type TZGstPanSchema = z.infer<typeof gstPanSchema>;
export type TZPartialGstPanSchema = z.infer<typeof PartialGstPanSchema>;
