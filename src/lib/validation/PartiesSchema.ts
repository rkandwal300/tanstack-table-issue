import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const PartySchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  recievable: z.number(),
  payable: z.number(),
  contact: z.string(), // Assuming it's a string for phone number
  email: z.string().email(),
  invitedBy: z.string(),
  registeredOn: z.string(),
});

export const PartyInitialValues = ZodCreateInitialValues(PartySchema);

export const PartialPartySchema = PartySchema.partial();
export type TZItemSchema = z.infer<typeof PartySchema>;

export type TZPartialPartySchema = z.infer<typeof PartialPartySchema>;
