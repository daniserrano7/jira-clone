// The function dnull is a recursive function that replace null values from an object with undefined
// Code extracted from the npm package "dnull"
// https://github.com/brielov/dnull

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PlainObj = { [key: PropertyKey]: any };

const isPlainObject = (value: unknown): value is PlainObj => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

export type DNull<T> = T extends null
  ? undefined
  : T extends PlainObj
  ? { [K in keyof T]: DNull<T[K]> }
  : T extends Array<infer U>
  ? DNull<U>[]
  : T;

export const dnull = <T>(src: T): DNull<T> => {
  if (src === null) return void 0 as DNull<T>;
  if (isPlainObject(src)) {
    const clone = Object.create(null);
    for (const [key, value] of Object.entries(src)) {
      clone[key] = dnull(value);
    }
    return clone as DNull<T>;
  }
  if (Array.isArray(src)) {
    return (src as unknown[]).map(dnull) as DNull<T>;
  }
  return src as DNull<T>;
};
