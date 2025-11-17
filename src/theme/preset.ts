import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { colorScheme } from './color-scheme';
import { primaryColor } from './primary-color';

export const Preset = definePreset(Aura, {
  semantic: {
    primary: primaryColor,
    colorScheme: colorScheme,
  },
});
