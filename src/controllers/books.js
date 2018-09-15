import { Router } from 'express';
import Book from '../models/book';

export default () => {
  const api = Router();

  // POST '/v1/books' Create new book entry
  api.post('/', (req, res) => {
    // Create a new blank Book model
    const newBook = new Book();
    // Fetch book properties from the request body
    newBook.name = req.body.name;
    newBook.secretIdentity = req.body.secretIdentity;
    // Save it in our database
    newBook.save((err, book) => {
      if (err) {
        return res.send(err);
      }
      // If everything worked then we notify user of success
      return res.json({
        message: 'Book saved successfully',
        book,
      });
    });
  });

  // GET '/v1/books' Get (Read) all books
  api.get('/', (req, res) => {
    Book.find({}, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

  // GET '/v1/books/:id' Get (Read) a specific book by ObjectId
  api.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  });

  // PUT '/v1/books' Update book entry
  api.put('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
      if (err) {
        return res.send(err);
      }
      book.name = req.body.name;
      book.secretIdentity = req.body.name;

      return book.save((saveErr, savedBook) => {
        if (saveErr) {
          return res.send(saveErr);
        }
        return res.json({
          message: 'Book updated',
          book: savedBook,
        });
      });
    });
  });

  // DELETE '/v1/heores/' Delete book entry
  api.delete('/:id', (req, res) => {
    Book.remove({
      _id: req.params.id,
    }, (err) => {
      if (err) {
        return res.send(err);
      }
      return res.json({
        message: 'Book successfully removed',
      });
    });
  });

  // GET '/v1/books/name' Get (Read) a specific book by ObjectId
  api.get('/', (req, res) => {
    Book.db.users.find({ "name" : "habits" })

      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  

  return api;
};
