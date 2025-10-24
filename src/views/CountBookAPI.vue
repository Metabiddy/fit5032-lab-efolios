<template>
    <div class="container mt-5">
        <div class="card shadow-sm p-4">
            <h1 class="mb-4">Book Counter</h1>
            <p>Click the button below to get the total number of books from the Firestore database.</p>
            
            <div class="d-grid gap-2">
                <button class="btn btn-primary" @click="fetchBookCount">Get Book Count</button>
            </div>
            
            <div v-if="loading" class="mt-4 text-center">
            <p>Loading...</p>
            </div>

            <div v-if="count !== null" class="mt-4 alert alert-success">
            <strong>Total number of books: {{ count }}</strong>
            </div>
            
            <div v-if="error" class="mt-4 alert alert-danger">
            <strong>Error:</strong> {{ error }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsondata: null,
      error: null
    };
  },
  mounted() {
    this.getBookCountAPI();
  },
  methods: {
    async getBookCountAPI() {
      try {
        const functionUrl = 'YOUR_LATEST_COUNTBOOKS_FUNCTION_URL';
        
        const response = await axios.get(functionUrl);
        // On success, we store the entire response data object into 'jsondata'.
        this.jsondata = response.data;
      } catch (error) {
        // If an error occurs (e.g., wrong URL, network issue), we log it and store the error object.
        console.error("Error fetching from book count API:", error);
        this.error = error;
        // You could also set a user-friendly error message in jsondata
        this.jsondata = { error: "Failed to load data from the API." };
      }
    }
  }
};
</script>

<style scoped>
.card {
    max-width: 600px;
    margin: 0 auto;
}
</style>

