// @ts-ignore
import LocalStorage from 'strict-ls';
// @ts-ignore
import type { GenericItem } from 'strict-ls';

export default class StorageService {
  public static s: LocalStorage = new LocalStorage('svnrnns');
}

export type { GenericItem as StorageItem };
