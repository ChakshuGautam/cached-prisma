import { NCache } from "./nodeCache";
import { expect } from "chai";

describe("NCache", () => {
  it("should cache entries.", () => {
    const cache = new NCache(10);
    cache.write("a", "1");

    expect(cache.read("a")).to.equal("1");
    expect(cache.read("b")).to.be.null;
  });

  it("should update entries.", () => {
    const cache = new NCache(10);
    cache.write("a", "1");
    cache.write("a", "2");

    expect(cache.read("a")).to.equal("2");
  });

  it("should not exceed its maximum size.", () => {
    const cache = new NCache(2);
    cache.write("a", "1");
    cache.write("b", "2");

    expect(cache.read("a")).to.equal("1");
    expect(cache.read("b")).to.equal("2");

    cache.write("c", "3");

    expect(cache.read("a")).to.be.null;
    expect(cache.read("b")).to.equal("2");
    expect(cache.read("c")).to.equal("3");
  });
});
