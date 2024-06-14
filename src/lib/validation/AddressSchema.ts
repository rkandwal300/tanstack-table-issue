import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const AddressSchema = z.object({
  _id: z.string().optional(),
  business: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  phone: z.string().optional(),
  name: z.string().nonempty(),
  city: z.string().nonempty(),
  country: z.string().nonempty(),
  pincode: z.string().nonempty(),
  state: z.string().nonempty(),
  countryCode: z.string().optional(),
  type: z.enum(["Point"]).default("Point"),
});

export const addressInitialValue: z.infer<typeof AddressSchema> =
  ZodCreateInitialValues(AddressSchema);

export const PartialAddressSchema = AddressSchema.partial();
export type TZAddressSchema = z.infer<typeof AddressSchema>;
export type TZPartialAddressSchema = z.infer<typeof PartialAddressSchema>;
