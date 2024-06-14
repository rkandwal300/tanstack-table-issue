import { z } from "zod";
import { BusinessEditSchema } from "./BusinessSchema";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const OtpVerificationSchema = z.object({
  otp: z.string().optional(),
  expiry: z.date().optional(),
  onGoing: z.enum(["email", "phone"]).optional(),
});

export const ReferralInfoSchema = z.object({
  referrer: z.string(), // Assuming it's a string
  referralCode: z.string().optional(),
});

export const ImageSchema = z.object({
  name: z.string(),
  url: z.string(),
  metadata: z.object({
    fileSize: z.number(),
    unit: z.string(),
    altName: z.string(),
  }),
});

export const UserSchema = z.object({
  _id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().nonempty(),
  phone: z.string().optional(),
  password: z.string(),
  authProviders: z.enum(["google"]).optional(),
  businesses: z
    .array(
      z.object({
        business: z.string().or(BusinessEditSchema),
        role: z.string(),
      })
    )
    .optional(),
  isEmailVerified: z.boolean().optional(),
  isPhoneVerified: z.boolean().optional(),
  otpVerification: OtpVerificationSchema.optional(),
  avatar: ImageSchema.optional(),
  referralInfo: ReferralInfoSchema.optional(),
});

export const UserInitialValue: z.infer<typeof UserSchema> =
  ZodCreateInitialValues(UserSchema);

export const PartialUserSchema = UserSchema.partial();
export type TZItemSchema = z.infer<typeof UserSchema>;

export type TZPartialUserSchema = z.infer<typeof PartialUserSchema>;
