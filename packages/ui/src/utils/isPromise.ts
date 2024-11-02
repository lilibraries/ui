function isPromise(value: any): value is Promise<any> {
  return typeof value === "object" && value !== null && typeof value.then === "function";
}

export default isPromise;
