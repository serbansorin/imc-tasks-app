<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive, computed } from "vue";

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

onMounted(() => (errors.value = {}));

const isConfirmedPassword = computed(() => {
  return formData.password === formData.password_confirmation;
});
</script>

<template>
  <main>
    <h1 class="title">Register a new account</h1>

    <form
      @submit.prevent="authenticate('register', formData)"
      class="mx-auto space-y-6 w-1/2"
    >
      <div>
        <input type="text" placeholder="Name" v-model="formData.name" required/>
        <p v-if="errors.name" class="error">{{ errors.name[0] }}</p>
      </div>

      <div>
        <input type="email" placeholder="Email" v-model="formData.email" required/>
        <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
        <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="formData.password_confirmation"
        />
        <p v-if="!isConfirmedPassword" class="error">
          Passwords do not match
        </p>
      </div>

      <button class="primary-btn">Register</button>
    </form>
  </main>
</template>
