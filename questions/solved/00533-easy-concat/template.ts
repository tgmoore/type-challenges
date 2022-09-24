type Concat<T extends any[], U extends any[]> = [...T, ...U];

/* I learned:
* 1. The spread operator works on types to keep ordered properties
* 2. The array type is spread directly instead of using an indexed type
*/