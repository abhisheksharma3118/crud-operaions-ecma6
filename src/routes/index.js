import express from 'express';

import books from '../controllers/books';

const router = express();
router.use('/books', books());

export default router;
