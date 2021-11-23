<template>
  <div class="visualization-text-container">
    <div class="title" v-text="title"/>
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
  data: (self) => ({
    logSystem: self.$root.logSystem,
    eventSystem: self.$root.eventSystem,
    title: 'Текст',
  }),
  methods: {
    setTitle(text = '') {
      this.title = text;
    },
  },
};
</script>

<style lang="sass">
@import ./styles/component
</style>
