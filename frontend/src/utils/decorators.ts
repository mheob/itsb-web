// TODO: Unused so far. Remove if it is unnecessary at the end.
export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    }
  };
  return adjDescriptor;
}
