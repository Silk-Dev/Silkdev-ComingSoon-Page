import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailTemplateProps = {
  name: any;
  email: any;
  project: any;
  msg: any;
};

export default function EmailTemplate({
  name,
  email,
  project,
  msg
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{msg}</Text>
              <Text>He choose the option {project}</Text>
              <Hr />
              <Text>The sender is {name} his email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// import * as React from 'react';

// interface EmailTemplateProps {
//   name: string;
//   email: string;
//   project: string;
//   msg: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   name,
// }) => (
//   <div>
//     <h1>Welcome, {name}!</h1>
//   </div>
// );