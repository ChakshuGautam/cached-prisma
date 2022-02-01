// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./local.d.ts" />

import { Cache, Maybe } from "../main";
import crypto from "crypto";

import { TurboHashMap } from "./turbo-hash-map";

export type Serialized = { key: string; value: string };

export class TurboCache implements Cache {
  private _map: any;

  constructor(size: number) {
    this._map = new TurboHashMap();
  }

  hash(val: string) {
    return crypto.createHash("sha1").update(val).digest();
  }

  read = (key: string): Maybe<string> => {
    return this._map.get(this.hash(key)) || null;
  };

  write = (key: string, value: string): any => {
    this._map.set(this.hash(key), value);
  };
}
