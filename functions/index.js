const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

const admin = require("firebase-admin");

const cors = require("cors")({ origin: true });


admin.initializeApp();

exports.countBooks = onRequest((request, response) => {
    cors(request, response, async () => {
    try {
        // Get a reference to the Firestore database.
        const firestore = admin.firestore();

        const booksCollection = firestore.collection("books");
        
        const snapshot = await booksCollection.get();
        
        response.status(200).json({ count: snapshot.size });

    } catch (error) {
        console.error("Error counting books:", error);
        response.status(500).send("An error occurred while counting the books.");
    }
    });
});

/**
 * This function is automatically triggered whenever a new document is created
 * in the 'books' collection.
 * It takes the data from the new book, capitalizes all string fields,
 * and updates the document in place.
 */
exports.capitalizeBookData = onDocumentCreated("books/{bookId}", (event) => {
  const data = event.data.data();
  const updatedData = {};

  for (const key in data) {
    if (typeof data[key] === 'string') {
      updatedData[key] = data[key].toUpperCase();
    } else {
      updatedData[key] = data[key];
    }
  }

  console.log("Capitalizing data:", updatedData);
  return event.data.ref.set(updatedData, { merge: true });
});


