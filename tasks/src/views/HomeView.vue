<script setup>
import { useTasksStore } from "@/stores/tasks";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const { getAllTasks } = useTasksStore();
const tasks = ref([]);

onMounted(async () => (tasks.value = await getAllTasks()));
</script>

<template>
  <main>
    <h1 class="title">Tasks List</h1>

    <div v-if="tasks.length > 0">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="pl-4 mb-12 border-l-4 border-blue-500"
      >
        <h2 class="text-3xl font-bold">{{ task.title }}</h2>
        <p class="mb-4 text-xs text-slate-600">
          Posted by {{ task.user.name }}
        </p>
        <p>
          {{ task.body }}
          <RouterLink
            :to="{ name: 'show', params: { id: task.id } }"
            class="font-bold text-blue-500 underline"
            >Read more...</RouterLink
          >
        </p>
      </div>
    </div>
    <div v-else>
      <h2 class="title">Please add new Tasks </h2>
    </div>
  </main>
</template>
