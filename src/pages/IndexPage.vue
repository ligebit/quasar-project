<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="user">{{ JSON.stringify(user) }}</div>
    <button v-else @click="login">LOGIN</button>
  </q-page>
</template>

<script setup lang="ts">
import signer from '../signer';
import { ref } from 'vue';

const user = ref();

const login = async () => {
  user.value = await signer.login();
};

defineOptions({
  name: 'IndexPage',
});
</script>
