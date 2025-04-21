import { pool } from '../config/db.js';

export const getQuestionById = async (req, res) => {
  const id = req.params.id;
  try {
    const questionRes = await pool.query('SELECT * FROM questions WHERE id = $1', [id]);
    const optionsRes = await pool.query('SELECT * FROM options WHERE question_id = $1', [id]);

    if (questionRes.rows.length === 0) return res.status(404).json({ message: 'Question not found' });

    const data = {
      question: questionRes.rows[0],
      options: optionsRes.rows,
    };
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const createQuestion = async (req, res) => {
    try {
      const { question, correctAnswer, options } = req.body;
  
      if (!question || !correctAnswer || !options || options.length < 2) {
        return res.status(400).json({ message: 'Invalid data' });
      }
  
      const result = await db.query(
        'INSERT INTO questions (question, correct_answer) VALUES ($1, $2) RETURNING id',
        [question, correctAnswer]
      );
      const questionId = result.rows[0].id;
  
      for (const option of options) {
        await db.query(
          'INSERT INTO options (question_id, option) VALUES ($1, $2)',
          [questionId, option]
        );
      }
  
      res.status(201).json({ message: 'Question created successfully', questionId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
