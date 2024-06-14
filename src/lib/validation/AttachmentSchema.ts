import { z } from 'zod';
import { UserSchema } from './UserSchema';

export const AttachmentsSchema = z.object({
  createdAt: z.string(),
  name: z.string(),
  url: z.string(),
  createdBy: z.string().or(UserSchema),
  visibleToSeller: z.boolean(),
  metaData: z
    .object({
      fileSize: z.number(),
      unit: z.string(),
    })
    .optional(),
});
export type TZAttachmentsSchema = z.infer<typeof AttachmentsSchema>;
