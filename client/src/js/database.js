import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');


// TODO: Add logic for a method that gets all the content from the database, Done?
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const jD = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = jD.objectStore('jate');

   // Use the .get() method to get a piece of data from the database based on the id.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
  
};


initdb();
