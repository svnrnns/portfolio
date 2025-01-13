import LocalStorage from 'strict-ls';
import type { GenericItem } from 'strict-ls';

export default class StorageService {
  public static s: LocalStorage = new LocalStorage('svnrnns');
}

export type { GenericItem as StorageItem };
