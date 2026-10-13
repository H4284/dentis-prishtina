import { z } from "zod";

/** Shared with the forms Worker. Form is off in plan.md — kept for scaffold readiness. */
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
  /** Honeypot — must stay empty. */
  company: z.string().max(0).optional().default(""),
  turnstileToken: z.string().min(1),
});

export type ContactInput = z.infer<typeof contactSchema>;
