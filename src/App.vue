<template>
  <div>
    count is: {{ count }}
    a is: {{ numbers.a }}
    b is: {{ numbers.b }}
    c is: {{ numbers.c }}
    total is: {{ total }}
    <button @click="count++">count++</button>
    <button @click="numbers.a++">a++</button>
    <button @click="numbers.b++">b++</button>
    <button @click="numbers.c++">c++</button>
    <div v-for="history in histories">
      {{ history }}
    </div>
    <div v-if="historiesCountOverThanFive">histories length over than 5 and total over than 10 and total is Even!!!</div>
  </div>
</template>
<script setup lang="ts">
import { useNumbers } from "./components/useNumbers";
const {count, numbers, total, histories, historiesCountOverThanFive} = useNumbers()
</script>

<style scoped>
</style>
