<template>
  <div class="VisualizationText">
    <span
      class="Title"
      v-text="textValue"
      @click="$root.publishEventClicked(textValue)"
    />
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
  data: () => ({
    textValue: '',
  }),
  methods: {
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
    font-family: 'Proxima Nova', serif
    padding: 0 16px
    color: var(--text_main)
    font-size: 18px
    font-weight: 700
    line-height: 25px
</style>
