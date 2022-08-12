import { PluginHooks } from "rollup";

export type ResolverFunction = PluginHooks["resolveId"];

export type AliasReplaceFunction = (
  find: string | RegExp,
  importee: string
) => string;

export interface ResolverObject {
  buildStart?: PluginHooks["buildStart"];
  resolveId: ResolverFunction;
}

export interface Alias {
  find: string | RegExp;
  replacement: string | AliasReplaceFunction;
  customResolver?: ResolverFunction | ResolverObject | null;
}

export interface ResolvedAlias {
  find: string | RegExp;
  replacement: string | AliasReplaceFunction;
  resolverFunction: ResolverFunction | null;
}

export interface RollupAliasOptions {
  /**
   * Instructs the plugin to use an alternative resolving algorithm,
   * rather than the Rollup's resolver.
   * @default null
   */
  customResolver?: ResolverFunction | ResolverObject | null;

  /**
   * Specifies an `Object`, or an `Array` of `Object`,
   * which defines aliases used to replace values in `import` or `require` statements.
   * With either format, the order of the entries is important,
   * in that the first defined rules are applied first.
   */
  entries?: readonly Alias[] | { [find: string]: string };
}
