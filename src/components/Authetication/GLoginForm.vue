<template>
  <div class="g-login-form">
    <div>logo</div>
    <div>Welcome back. Please login to your account</div>
    <div><GTextInput :value="email" label="Email" /></div>
  </div>
</template>
<script setup lang="ts">
import GTextInput from '@/components/Form/GTextInput.vue'
import { ref } from 'vue'

const email = ref('Email')
const password = ref('')
</script>
<style scoped>
.g-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
