import { RequestHandler } from "express";
import { validationResult } from "express-validator";

import { Contact } from "../models/contact";
import { HttpError } from "../models/http-error";
import { sendMail } from "../services/contact";

const CONTACTS: Contact[] = [];

export const handleData: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const requestBody = req.body as { name: string; email: string; phone: string; privacy: string; message: string };
  const newContact = new Contact(
    requestBody.name,
    requestBody.email,
    requestBody.phone,
    requestBody.privacy,
    requestBody.message
  );

  try {
    await sendMail(newContact);
  } catch (error) {
    throw new HttpError("Mail could not sent.", 500);
  }

  CONTACTS.push(newContact);

  res.status(201).json({ message: "Created the contact.", createdContact: newContact });
};

export const getContacts: RequestHandler = (req, res, next) => {
  res.json({ contacts: CONTACTS });
};
