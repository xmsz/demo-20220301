import Unocss from 'unocss/vite';
import { presetIcons, presetUno } from 'unocss';
// import transformerDirective from '@unocss/transformer-directives';

export default {
  vite: true,
  vitePlugins: [
    Unocss({
      // transformers: [transformerDirective()],
      presets: [presetUno(), presetIcons({})],
    }),
  ],
};
