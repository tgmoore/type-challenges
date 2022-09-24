type MyExclude<T, U> = T extends U ? never : T;

/* I learned
1. The extends keyword distributes over the types when they are tuples.
2. The & symbol indicates the 'intersection' which contains all types in U 'and' T.
3. T extends U is equivalent to T extends U & T in this case.
*/
