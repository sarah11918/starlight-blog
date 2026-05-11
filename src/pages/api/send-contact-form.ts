import type { APIRoute } from "astro";
import { Resend } from "resend";
import ContactEmail from "../../emails/contactEmail";
import { render } from "@react-email/render";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  // create the email
  const emailContent = ContactEmail();
  const html = await render(emailContent);
  const text = await render(emailContent, {
    plainText: true,
  });

  // send an email
  const { data, error } = await resend.emails.send({
    from: "Updates from Sarah <sarah@updates.rainsberger.ca>",
    to: ["sarahrainsberger@gmail.com"],
    subject: "You have a comment",
    html,
    text,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};