import Unocss from 'unocss/vite';
import { presetIcons, presetUno } from 'unocss';

export default {
  vite: true,
  vitePlugins: [
    Unocss({
      presets: [presetUno(), presetIcons({})],
    }),
  ],
};
