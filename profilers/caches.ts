import {
  LruCache,
  Memcached,
  LruCacheFast,
  NCache,
  TurboCache,
  Prisma,
} from "../src/main";

import { PrismaClient } from ".prisma/client";

class LruCachedPrisma extends Prisma {
  cacheFactory = () => new LruCache(10);
}

class MemcachedPrisma extends Prisma {
  cacheFactory = () => new Memcached("127.0.0.1:11211", 10);
}

class LruCachedFastPrisma extends Prisma {
  cacheFactory = () => new LruCacheFast(10);
}

class NodeCachePrisma extends Prisma {
  cacheFactory = () => new NCache(10);
}

class TurboPrisma extends Prisma {
  cacheFactory = () => new TurboCache(10);
}

export const caches = [
  // { name: "Without cache", cache: new PrismaClient() },
  { name: "LruMap cache", cache: new LruCachedPrisma().client },
  { name: "Memcached", cache: new MemcachedPrisma().client },
  { name: "LruCacheFast", cache: new LruCachedFastPrisma().client },
  { name: "NCache", cache: new NodeCachePrisma().client },
  { name: "TurboCache", cache: new TurboPrisma().client },
];
