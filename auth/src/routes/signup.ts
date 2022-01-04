import { Router } from "express";

const router = Router();

router.post("/api/users/signup", (req, res) => {
  return res.status(200).send("Created user");
});

export { router as signup };
