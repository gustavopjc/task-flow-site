<template>
  <div class="login-view">
    <GLoginForm />
  </div>
</template>
<script lang="ts">
import GLoginForm from '@/components/Authetication/GLoginForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    GLoginForm
  },

  data() {
    return {
      count: 1
    }
  }
})
</script>
<style scoped>
.login-view {
}
</style>
