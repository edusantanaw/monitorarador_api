export interface ILoadAllRepository<T, In extends pagination> {
  loadAll: (data: In) => Promise<{ total: number; data: T[] }>;
}
