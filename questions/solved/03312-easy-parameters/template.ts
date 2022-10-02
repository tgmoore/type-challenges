type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never;

/** I learned:
 * 1. One may need to repeat the 'constraint' on the generic as a conditional to name the portion of the type needed. (infer U)
 */
