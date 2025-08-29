import { createClient } from "redis";
import Logger from "bunyan";
import { config } from "@root/config";

export type Redisclient = ReturnType<typeof createClient>;

export abstract class BaseCache {
  client: Redisclient;
  log: Logger;

  constructor(cacheName: string) {
    this.client = createClient({ url: config.REDIS_HOST });
    this.log = config.createLogger(cacheName);
  }

  private cacheError(): void {
    this.client.on("error", (error: unknown) => {
      this.log.error(error);
    });
  }
}
