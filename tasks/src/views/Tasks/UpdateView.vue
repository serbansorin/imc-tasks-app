<script setup>
import { useAuthStore } from "@/stores/auth";
import { useTasksStore } from "@/stores/tasks";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { user } = storeToRefs(useAuthStore());
const { errors } = storeToRefs(useTasksStore());
const { getTask, updateTask } = useTasksStore();

const task = ref(null);

const formData = reactive({
  title: "",
  body: "",
});

onMounted(async () => {
  task.value = await getTask(route.params.id);

  if (user.value.id !== task.value.user_id) {
    router.push({ name: "home" });
  } else {
    formData.title = task.value.title;
    formData.body = task.value.body;
  }
});
</script>

<template>
  <main>
    <h1 class="title">Update your task</h1>

    <form
      @submit.prevent="updateTask(task, formData)"
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

      <button class="primary-btn">Update</button>
    </form>
  </main>
</template>
