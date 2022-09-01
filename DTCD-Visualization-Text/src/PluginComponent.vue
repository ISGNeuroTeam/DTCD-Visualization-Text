<template>
  <div class="VisualizationText">
    <span
      class="Title"
      v-text="config.title"
      @click="$root.publishEventClicked()"
    />
  </div>
</template>

<script>
export default {
  name: 'PluginComponent',
  data: () => ({
    config: {
      title: '',
    }
  }),
  methods: {
    setConfigProp(prop, value) {
      this.config[prop] = value;
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
    font-family: 'Proxima Nova', serif
    line-height: 29px
    padding: 0 16px
</style>
