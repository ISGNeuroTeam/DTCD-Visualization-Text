import pluginMeta from './Plugin.Meta';
import PluginComponent from './PluginComponent.vue';

import { PanelPlugin, LogSystemAdapter, EventSystemAdapter } from './../../DTCD-SDK';

export class VisualizationText extends PanelPlugin {
  #title;

  static getRegistrationMeta() {
    return pluginMeta;
  }

  constructor(guid, selector) {
    super();

    const logSystem = new LogSystemAdapter(guid, pluginMeta.name);
    const eventSystem = new EventSystemAdapter();

    const { default: VueJS } = this.getDependence('Vue');

    const view = new VueJS({
      data: () => ({ guid, logSystem, eventSystem }),
      render: h => h(PluginComponent),
    }).$mount(selector);

    this.vueComponent = view.$children[0];
    this.#title = 'Текст';
  }

  setPluginConfig(config = {}) {
    const { title } = config;

    if (typeof title === 'string') {
      this.#title = title;
      this.vueComponent.setTitle(title);
    }
  }

  getPluginConfig() {
    const config = {};
    if (this.#title) config.title = this.#title;
    return config;
  }

  setFormSettings(config) {
    return this.setPluginConfig(config);
  }

  getFormSettings() {
    return {
      fields: [
        {
          component: 'title',
          propValue: 'Общие настройки',
        },
        {
          component: 'text',
          propName: 'title',
          attrs: {
            label: 'Отображаемый текст',
            required: true,
          },
        },
      ],
    };
  }
}
