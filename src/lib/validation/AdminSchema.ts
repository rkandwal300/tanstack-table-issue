import { string, z } from 'zod';

export const IndustrySchema = z.object({
  _id: string().optional(), // this is optional because we don't have it in the backend yet
  image: z.string(),
  active: z.boolean().default(false),
  name: z.string().nonempty(),
});

export type TZIndustry = z.infer<typeof IndustrySchema>;

export const CategorySchema = z.object({
  _id: z.string().optional(),
  image: z.string().optional(),
  active: z.boolean(),
  name: z.string(),
  industry: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type TZCategory = z.infer<typeof CategorySchema>;

export const UnitSchema = z.object({
  _id: z.string().optional(),
  active: z.boolean().optional(),
  name: z.string().nonempty(),
});
export type TZUnit = z.infer<typeof UnitSchema>;

export const SubCategorySchema = z.object({
  _id: z.string().optional(),
  active: z.boolean(),
  name: z.string().min(3).max(20),
  image: z.string(),
  industry: z.string(),
  category: z.string(),
});

export type TZSubCategory = z.infer<typeof SubCategorySchema>;

export const ProductSchema = z.object({
  _id: z.string().optional(),
  subCategory: z.array(z.string().nonempty()).optional(),
  name: z.string(),
  unit: z.array(z.string().nonempty()).optional(),

  image: z.string().url().optional(),
  active: z.boolean(),
  tags: z.string().optional(),
});

export type TZProduct = z.infer<typeof ProductSchema>;
