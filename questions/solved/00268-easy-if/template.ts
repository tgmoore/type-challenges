type If<C extends boolean, T, F> = C extends true ? T : F;

/* I learned:
* 1. for this usecase, boolean is essentially a union type of types true and false.
*/