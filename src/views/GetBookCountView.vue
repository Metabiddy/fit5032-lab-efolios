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

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const count = ref(null);
const error = ref(null);
const loading = ref(false);

const fetchBookCount = async () => {
    count.value = null;
    error.value = null;
    loading.value = true;

    try {
    const functionUrl = 'https://countbooks-sdkr3brurq-uc.a.run.app'; 
    
    const response = await axios.get(functionUrl);
    
    if (response.data && typeof response.data.count !== 'undefined') {
        count.value = response.data.count;
    } else {
        throw new Error("Invalid response format from the function.");
    }

    } catch (err) {
    error.value = 'Failed to count books: ';
    console.error(err);
    } finally {
    loading.value = false;
    }
};
</script>

<style scoped>
.card {
    max-width: 600px;
    margin: 0 auto;
}
</style>

