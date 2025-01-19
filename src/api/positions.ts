import IconZeus from '@/components/iconics/IconZeus.vue';
import type { Position } from '@/types/Position';
import type { IconConstructor } from '@/types/IconConstructor';

interface PositionBuilder {
  data: Position;
  icon: IconConstructor;
  'html-id': string;
}

export const positions: PositionBuilder[] = [
  {
    data: {
      title: 'Zeus by LLYC',
      position: 'Frontend Software Engineer',
      from: new Date(2024, 4, 1),
    },
    icon: {
      bg: '#f93f55',
      icon: IconZeus,
    },
    'html-id': 'zeus',
  },
];
