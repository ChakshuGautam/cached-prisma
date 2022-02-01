// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./local.d.ts" />

import { Cache, Maybe } from "../main";

import { LRUCache } from "lru-fast";

export type Serialized = { key: string; value: string };

export class LruCacheFast implements Cache {
  private _map: LRUCache<string, string>;

  constructor(size: number) {
    this._map = new LRUCache(size);
  }

  read = (key: string): Maybe<string> => this._map.get(key) || null;

  write = (key: string, value: string): any => this._map.set(key, value);
}
