<template>
  <div class="VisualizationText">
    <span class="Title" v-text="textValue"/>
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
  data: () => ({
    title: '',
    textValue: '',
  }),
  methods: {
    setTitle(value = '') {
      this.title = value;
    },
    setTextValue(value = '') {
      this.textValue = value;
    },
  },
};
</script>

<style lang="sass">
.VisualizationText
  width: 100%
  height: 100%

  .Title
    display: flex
    align-items: center
    width: 100%
    height: 100%
    color: var(--title)
    font-size: 20px
    font-weight: 700
    font-family: 'Proxima Nova', sans-serif
    line-height: 29px
    padding: 0 16px
</style>
