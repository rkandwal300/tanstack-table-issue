import { z } from "zod";

export const TermsSchema = z.object({
  serialNumber: z.number(),
  term: z.string().nonempty({ message: "Term is required" }),
  type: z.enum(["mustAccept", "acceptOrReject", "question"]),
  answer: z.string().optional(),
});

// eslint-disable-next-line react-refresh/only-export-components
export const allTermType = [
  {
    label: "Must Accept",
    value: "mustAccept",
  },
  {
    label: "Accept or Reject",
    value: "acceptOrReject",
  },
  {
    label: "Question",
    value: "question",
  },
];

export type TZTermsSchema = z.infer<typeof TermsSchema>;
