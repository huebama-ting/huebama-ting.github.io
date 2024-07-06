export interface DynamicImport<T> {
  fileName: string;
  module: () => Promise<T>;
}
