type MyExclude<T extends string, K> = T extends K ? never : K;

export type Result = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>; // 'b' | 'c'
