import Product from "@/app/marketplace/product/[id]/page";
import { z } from "zod";
import { ZodCreateInitialValues } from "../ZodCreateInitialValues";

export const BusinessTypeSchema = z.array(
  z.enum(["manufacturer", "wholesaler", "retailer", "services"]).optional()
);

const CompanyId = z.object({
  key: z.string().optional(),
  value: z.string().optional(),
});
export const locationTypeSchema = z
  .object({
    placeId: z.string(),
    name: z.string(),
    latitute: z.number(),
    longitude: z.number(),
  })
  .optional();

export const NewBusinessSchema = z.object({
  logo: z.string().optional(),
  owner: z.string(),
  name: z.string().min(1, { message: "please enter your business name" }),
  _id: z.string().optional(),
  isSeller: z.boolean(),
});
export const OptionalBusinessSchema = z.object({
  _id: z.string().optional(),
  addresses: z.array(z.string()).optional(),
  pan: z.string().optional(),
  gst: z.string().optional(),
  companyIds: z.array(CompanyId).optional(),
  branches: z.array(z.string()).optional(),
  defaultBranch: z.string().optional(),
});
export const NewSellerBusinessSchema = z.object({
  _id: z.string().optional(),
  type: BusinessTypeSchema,
  leadLocations: z.array(locationTypeSchema, {
    required_error: "Select at least one location",
  }),
  products: z.array(z.string(), { required_error: "Select a product" }),
});

export const BusinessEditSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  isSeller: z.boolean(),
  branches: z.array(z.string()).optional(),
  defaultBranch: z.string().optional(),
  brandName: z.string().optional(),
  logo: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  incorporationYear: z.coerce.number().default(0).optional(),
  employeeCount: z.coerce.number().default(0).optional(),
  email: z.string().email().optional(),
  website: z.string().optional(),
  addresses: z.array(z.string()).optional(),
  companyIds: z
    .array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  phone: z.string().optional(),
  turnOver: z.string().optional(),
  type: BusinessTypeSchema,
  leadLocations: z
    .array(
      z.object({
        latitute: z.number(),
        longitude: z.number(),
        name: z.string(),
        placeId: z.string(),
      })
    )
    .optional(),
  products: z.array(z.string()).optional(),
});

export type BusinessSchema = z.infer<typeof BusinessEditSchema>;

export const DummyBusinessData: BusinessSchema = {
  name: "",
  isSeller: false,
  type: [],
  leadLocations: [],
  products: [],
};

export const LeadLocationDtoSchema = z.object({
  placeId: z.string().nonempty(),
  name: z.string().nonempty(),
  latitude: z.number(),
  longitude: z.number(),
});

export const CreateBusinessDtoSchema = z.object({
  name: z.string().nonempty(),
  defaultBranch: z.string().optional(),
  branches: z.array(z.string().nonempty()).optional(),
  owner: z.string().nonempty(),
  staff: z.array(z.string().nonempty()).optional(),
  type: z.array(BusinessTypeSchema).optional(),
  logo: z.string().optional(),
  incorporationYear: z.number().optional(),
  employeeCount: z.number().optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  addresses: z.array(z.string().nonempty()).optional(),
  pan: z.string().optional(),
  gst: z.string().optional(),
  companyIds: z.array(CompanyId).optional(),
  isSeller: z.boolean().optional(),
  leadLocations: z.array(LeadLocationDtoSchema).optional(),
  phone: z.string().optional(),
  brandName: z.string().optional(),
  turnOver: z.string().optional(),
  clients: z.string().optional(),
});

export const businessInitialValue: z.infer<typeof BusinessEditSchema> =
  ZodCreateInitialValues(BusinessEditSchema);

export const PartialBusinessEditSchema = BusinessEditSchema.partial();
export type TZBusinessSchema = z.infer<typeof BusinessEditSchema>;
export type TZPartialBusinessSchema = z.infer<typeof PartialBusinessEditSchema>;
