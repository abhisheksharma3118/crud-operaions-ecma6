import db from '../db';

const Schema = db.Schema;
const bookSchema = new Schema({
  name: String,
  secretIdentity: String,
});

export default db.model('Book', bookSchema);
