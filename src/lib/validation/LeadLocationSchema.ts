import { z } from 'zod';

export const LeadLocationsSchema = z.array(
  z.object({
    name: z.string(),
    place_id: z.string(),
    latitute: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
  }),
);
