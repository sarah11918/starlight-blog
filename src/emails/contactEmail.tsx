// Get the full source code, including the theme and Tailwind config:
// https://github.com/resend/react-email/tree/canary/apps/demo/emails

import { email, string } from 'astro:schema';
import type * as React from 'react';
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from 'react-email';

const baseUrl = "https://www.rainsberger.ca"

interface ContactEmail {
  username?: string;
  email?: string;
  comment?: string;
};


export const ContactEmail = ({username, email, comment}) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite font-sans text-base">
          <Preview>You got an email from {username}</Preview>
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8">
              Email from {username}
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Here is a comment from {username}:
                </Text>
                <Text className="text-base">{comment}</Text>
                <Text className="text-base">
                  You can reply to them at {email} .
                </Text>
              </Row>
            </Section>
            </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
