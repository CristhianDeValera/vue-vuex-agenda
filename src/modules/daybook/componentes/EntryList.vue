<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        placeholder="Buscar Entradas"
      />
    </div>

    <div class="entry-scrollarea">
      <PxEntry v-for="item in 100" :key="item"></PxEntry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    PxEntry: defineAsyncComponent(() => import("./PxEntry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea {
  max-height: 100%;
  min-height: calc(100vh - 120px);
  overflow: scroll;
}
</style>