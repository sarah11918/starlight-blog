import type { APIRoute } from "astro";
import { Resend } from "resend";
// import SampleEmail from "../../emails/sampleEmail";
// import { render } from "react-email";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  // create the email
  // const emailContent = SampleEmail({ username: "Sarah" });
  // const html = await render(emailContent);
  // const text = await render(emailContent, {
  //   plainText: true,
  // });

  // send an email
  const { data, error } = await resend.emails.send({
    from: "Updates from Sarah <sarah@updates.rainsberger.ca>",
    to: ["sarahrainsberger@gmail.com"],
    subject: "It works!",
    html: "<strong>It works!</strong>",
    // text,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};