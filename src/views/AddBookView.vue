<template>
    <div class="container mt-5">
        <div class="card shadow-sm p-4">
            <h1 class="mb-4">Add a New Book</h1>
            <!-- Form submission is handled by the addBook function, .prevent stops the page from reloading -->
            <form @submit.prevent="addBook">
            <div class="mb-3">
                <label for="book-isbn" class="form-label">ISBN</label>
                <!-- v-model links this input to the 'isbn' ref in the script -->
                <input type="text" class="form-control" id="book-isbn" v-model="isbn" required>
            </div>
            <div class="mb-3">
                <label for="book-name" class="form-label">Book Name</label>
                <!-- v-model links this input to the 'name' ref in the script -->
                <input type="text" class="form-control" id="book-name" v-model="name" required>
            </div>
            <div class="mb-3">
                <label for="book-author" class="form-label">Author</label>
                <!-- Added an author field for better demonstration in 9.2 -->
                <input type="text" class="form-control" id="book-author" v-model="author" required>
            </div>
            <button type="submit" class="btn btn-success">Add Book to Firestore</button>
            </form>

            <!-- Display a success message when a book is added -->
            <div v-if="successMessage" class="alert alert-success mt-4">
            {{ successMessage }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    // Import the database connection from our firebase/init.js file
    import db from '../firebase/init.js';
    // Import functions from firestore to interact with the database
    import { collection, addDoc } from 'firebase/firestore';

    // Create reactive variables for the form inputs
    const isbn = ref('');
    const name = ref('');
    const author = ref('');
    const successMessage = ref('');

    // This function is called when the form is submitted
    const addBook = async () => {
        try {
        // Create a reference to the 'books' collection in Firestore
        const booksCollection = collection(db, 'books');

        // Create the new book object from the form data
        const newBook = {
            // Use parseInt to save ISBN as a number, as per the lab guide
            isbn: parseInt(isbn.value), 
            name: name.value,
            author: author.value
        };

        // Use addDoc to save the new book object to the 'books' collection
        const docRef = await addDoc(booksCollection, newBook);

        // If successful, show a message and clear the form
        console.log("Document written with ID: ", docRef.id);
        successMessage.value = `Successfully added "${name.value}" to the database!`;
        
        // Clear the input fields
        isbn.value = '';
        name.value = '';
        author.value = '';

        } catch (error) {
        // Log any errors to the console
        console.error("Error adding document: ", error);
        successMessage.value = ''; // Clear success message on error
        }
    };
</script>

<style scoped>
.card {
    max-width: 600px;
    margin: 0 auto;
}
</style>

