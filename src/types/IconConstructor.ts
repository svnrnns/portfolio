import type { Component } from 'vue';
import type { HexColor } from './HexColor';

export interface IconConstructor {
  bg: HexColor;
  icon: Component;
}
