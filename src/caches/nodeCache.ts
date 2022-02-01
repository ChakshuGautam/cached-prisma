// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./local.d.ts" />

import { Cache, Maybe } from "../main";

import NodeCache from "node-cache";

export type Serialized = { key: string; value: string };

export class NCache implements Cache {
  private _map: NodeCache;

  constructor(size: number) {
    this._map = new NodeCache({ maxKeys: size });
  }

  read = (key: string): Maybe<string> => this._map.get(key) || null;

  write = (key: string, value: string): any => this._map.set(key, value);
}
