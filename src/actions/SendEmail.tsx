"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";
import  EmailTemplate  from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: any) => {
  
    console.log('formData',formData);

  const name = formData.name;
  const email = formData.email;
  const project = formData.project;
  const msg = formData.msg;

  // simple server-side validation
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(msg, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <contacForm@resend.dev>",
      to: "bentalebamal8@gmail.com",
      subject: "Message from contact form",
      reply_to: email,
      react: React.createElement(EmailTemplate, {
        name:name,
        email:email,
        project:project,
        msg:msg
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
