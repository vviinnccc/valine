<template>
  <div>
    <HelloWorld></HelloWorld>
    <valine></valine>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import valine from "@/components/VaLine";

export default {
  name: "Home",
  components: {
    HelloWorld,
    valine
  }
};
</script>
