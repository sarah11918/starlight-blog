import { defineAction } from "astro:actions";
import { Resend } from "resend";
import ContactEmail from "../emails/contactEmail";
import { render } from "react-email";
import { z } from "astro/zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      username: z.string(),
      email: z.email(),
      comment: z.string(),
    }),
    handler: async ({ username, email, comment }) => {
      // create the email
      const emailContent = ContactEmail({ username, email, comment });
      const html = await render(emailContent);
      const text = await render(emailContent, {
        plainText: true,
      });

      // send an email
      const { data, error } = await resend.emails.send({
        from: "Sarah's contact form <sarah@updates.rainsberger.ca>",
        to: ["sarahrainsberger@gmail.com"],
        subject: `You have a comment from ${username}`,
        html,
        text,
      });

      if (error) {
        throw error;
      }

      return data;
    },
  }),
};