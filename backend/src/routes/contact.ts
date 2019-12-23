import { Router } from "express";
import { check } from "express-validator";

import { handleData, getContacts } from "../controllers/contact";

const router = Router();

router.get("/", getContacts);

router.post(
  "/send",
  check("name").isLength({ min: 3, max: 128 }),
  check("email")
    .normalizeEmail()
    .isEmail(),
  check("phone").matches(/(^$|^(\(?([\d -)–+/(]+){6,}\)?([ .-–/]?)([\d]+))$)/),
  check("privacy")
    .not()
    .isEmpty(),
  check("message").isLength({ min: 30, max: 10240 }),
  handleData
);

export default router;
