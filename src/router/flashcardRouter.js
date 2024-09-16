import express from "express";
import flashcardController from "../controllers/flashcardController.js";

const router = express.Router();

router.get("/flashcards", flashcardController.getFlashcards);
router.post("/flashcards", flashcardController.createFlashcard);

export default router;
