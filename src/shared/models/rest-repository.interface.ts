export interface RestRepository<T, Dto> {
    read(): Promise<Dto[]>;
    readById(id: string): Promise<Dto>;
    add(entity: Dto): Promise<T>;
    modify(entity: Dto): Promise<T>;
    deleteById(id: string): Promise<void>;
}