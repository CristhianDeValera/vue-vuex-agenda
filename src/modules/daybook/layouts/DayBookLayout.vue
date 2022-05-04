<template>
  <PxNavbar></PxNavbar>
  <div class="d-flex">
    <div class="col-4">
      <EntryList></EntryList>
    </div>
    <div class="col">
      <router-view> </router-view>
    </div>
  </div>
</template>


<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    PxNavbar: defineAsyncComponent(() => import("../componentes/PxNavbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../componentes/EntryList.vue")
    ),
  },
};
</script>

<style>
</style>