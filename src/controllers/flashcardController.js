import Flashcard from "../models/Flashcard.js";

const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json({ flashcards });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFlashcard = async (req, res) => {
  const { question, answer, category, difficulty } = req.body;
  const newFlashcard = new Flashcard({
    question,
    answer,
    category,
    difficulty,
  });
  try {
    await newFlashcard.save();
    res.status(201).json(newFlashcard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { getFlashcards, createFlashcard };
