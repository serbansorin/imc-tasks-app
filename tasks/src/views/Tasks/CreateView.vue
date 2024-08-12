<script setup>
import { useTasksStore } from "@/stores/tasks";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const { errors } = storeToRefs(useTasksStore());
const { createTask } = useTasksStore();

const formData = reactive({
  title: "",
  body: "",
});
</script>

<template>
  <main>
    <h1 class="title">Create a new task</h1>

    <form
      @submit.prevent="createTask(formData)"
      class="w-1/2 mx-auto space-y-6"
    >
      <div>
        <input type="text" placeholder="Task Title" v-model="formData.title" />
        <p v-if="errors.title" class="error">{{ errors.title[0] }}</p>
      </div>

      <div>
        <textarea
          rows="6"
          placeholder="Task Content"
          v-model="formData.body"
        ></textarea>
        <p v-if="errors.body" class="error">{{ errors.body[0] }}</p>
      </div>

      <button class="primary-btn">Create</button>
    </form>
  </main>
</template>
