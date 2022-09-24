type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<unknown> ? MyAwaited<U> : U : never;

/* I learned:
* 1. infer is used in the extends clause of a conditional type to give a handle on some type
* 2. the declared type can be used in its declaration to "iterate" deeply into a nested type
*/