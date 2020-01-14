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

  const newContact = new Contact(
    req.body.name as string,
    req.body.email as string,
    req.body.phone as string,
    req.body.sendCopy as boolean,
    req.body.privacy as string,
    req.body.message as string
  );

  try {
    await sendMail(newContact);
    // TODO #26: Store contact messages in a database.
  } catch (error) {
    throw new HttpError("Mail could not sent.", 500);
  }

  CONTACTS.push(newContact);

  res.status(201).json({ message: "Created the contact.", createdContact: newContact });
};

export const getContacts: RequestHandler = (req, res, next) => {
  res.json({ contacts: CONTACTS });
};
