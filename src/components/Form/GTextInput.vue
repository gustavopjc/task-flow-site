<template>
  <div class="g-text-input">
    <label class="g-text-input-label">{{ label }}</label>
    <input type="text" :value="value" class="g-text-input-field" @input="handleInput" />
    <div class="g-text-input-line"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: unknown
  label: string
}>()

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  this.$emit('input', value)
}
</script>

<style scoped>
.g-text-input {
  position: relative;
}

.g-text-input-label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.g-text-input-field {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  padding: 8px 0;
  width: 100%;
}

.g-text-input-line {
  background-color: #ccc;
  bottom: 0;
  height: 2px;
  left: 0;
  position: absolute;
  width: 100%;
}
</style>
