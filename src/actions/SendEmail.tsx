"use client";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";
import EmailTemplate from "@/app/components/email-template";

const resend = new Resend('re_T9FLPtRj_MR1uhhkiryn2fyeEZTMNFx1v');

export const SendEmail = async (formData: any) => {
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
        name: name,
        email: email,
        project: project,
        msg: msg
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
