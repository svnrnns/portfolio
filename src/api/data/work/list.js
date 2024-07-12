import icexMap from './items/icex-map';
import baleariaCt from './items/balearia-ct';
import ucersa from './items/ucersa';

const workArticleMapping = {
  'icex-map': icexMap,
  'balearia-ct': baleariaCt,
  ucersa: ucersa,
};

const list = [
  {
    name: 'ICEX Map 2024',
    article: 'icex-map',
    company: 'Zeus by LLYC',
    year: 2024,
  },
  {
    name: 'Ucersa Dashboard',
    article: 'ucersa',
    company: 'Zeus by LLYC',
    year: 2024,
  },
  {
    name: 'Baleria Control Tower',
    article: 'balearia-ct',
    company: 'Zeus by LLYC',
    year: 2023,
  },
];

export { list, workArticleMapping };
