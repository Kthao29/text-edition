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


export const putDb = async (content) => {
  // connect to indexDB
  const textDb = await openDB("jate", 1);

  // Creates a new transaction to jate
  const tx = textDb.transaction("jate", "readwrite");

  // Opens up the desired object store
  const store = tx.objectStore("jate");

  // add or update record to jate object
  const request = store.put({ id: 1, value: content });

  // Confirmation of the request
  const result = await request;
  console.log("Data saved to the database", result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Connect to indexDB
  const textDb = await openDB("jate", 1);

  // Creates a new transaction to jate
  const tx = textDb.transaction("jate", "readonly");

  // Opens up the desired object store
  const store = tx.objectStore("jate");

  // add or update record to jate object
  const request = store.get(1);

  // Confirmation of the request
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
