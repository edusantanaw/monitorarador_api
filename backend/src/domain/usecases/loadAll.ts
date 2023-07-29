export interface ILoadAllUsecase<T, In extends pagination> {
  execute: (data: In) => Promise<{ total: number; data: T[] }>;
}
