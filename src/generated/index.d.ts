
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TeamUser
 * 
 */
export type TeamUser = $Result.DefaultSelection<Prisma.$TeamUserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model MCPServer
 * 
 */
export type MCPServer = $Result.DefaultSelection<Prisma.$MCPServerPayload>
/**
 * Model AccessRule
 * 
 */
export type AccessRule = $Result.DefaultSelection<Prisma.$AccessRulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MCPServerType: {
  VERIFIED: 'VERIFIED',
  CUSTOM: 'CUSTOM'
};

export type MCPServerType = (typeof MCPServerType)[keyof typeof MCPServerType]


export const MCPProtocol: {
  SSE: 'SSE',
  STDIO: 'STDIO'
};

export type MCPProtocol = (typeof MCPProtocol)[keyof typeof MCPProtocol]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MCPServerType = $Enums.MCPServerType

export const MCPServerType: typeof $Enums.MCPServerType

export type MCPProtocol = $Enums.MCPProtocol

export const MCPProtocol: typeof $Enums.MCPProtocol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamUser`: Exposes CRUD operations for the **TeamUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamUsers
    * const teamUsers = await prisma.teamUser.findMany()
    * ```
    */
  get teamUser(): Prisma.TeamUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mCPServer`: Exposes CRUD operations for the **MCPServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MCPServers
    * const mCPServers = await prisma.mCPServer.findMany()
    * ```
    */
  get mCPServer(): Prisma.MCPServerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessRule`: Exposes CRUD operations for the **AccessRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessRules
    * const accessRules = await prisma.accessRule.findMany()
    * ```
    */
  get accessRule(): Prisma.AccessRuleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TeamUser: 'TeamUser',
    Team: 'Team',
    MCPServer: 'MCPServer',
    AccessRule: 'AccessRule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "teamUser" | "team" | "mCPServer" | "accessRule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TeamUser: {
        payload: Prisma.$TeamUserPayload<ExtArgs>
        fields: Prisma.TeamUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>
          }
          findFirst: {
            args: Prisma.TeamUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>
          }
          findMany: {
            args: Prisma.TeamUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>[]
          }
          create: {
            args: Prisma.TeamUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>
          }
          createMany: {
            args: Prisma.TeamUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>[]
          }
          delete: {
            args: Prisma.TeamUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>
          }
          update: {
            args: Prisma.TeamUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>
          }
          deleteMany: {
            args: Prisma.TeamUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>[]
          }
          upsert: {
            args: Prisma.TeamUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamUserPayload>
          }
          aggregate: {
            args: Prisma.TeamUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamUser>
          }
          groupBy: {
            args: Prisma.TeamUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamUserCountArgs<ExtArgs>
            result: $Utils.Optional<TeamUserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      MCPServer: {
        payload: Prisma.$MCPServerPayload<ExtArgs>
        fields: Prisma.MCPServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MCPServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MCPServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          findFirst: {
            args: Prisma.MCPServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MCPServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          findMany: {
            args: Prisma.MCPServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>[]
          }
          create: {
            args: Prisma.MCPServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          createMany: {
            args: Prisma.MCPServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MCPServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>[]
          }
          delete: {
            args: Prisma.MCPServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          update: {
            args: Prisma.MCPServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          deleteMany: {
            args: Prisma.MCPServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MCPServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MCPServerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>[]
          }
          upsert: {
            args: Prisma.MCPServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCPServerPayload>
          }
          aggregate: {
            args: Prisma.MCPServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMCPServer>
          }
          groupBy: {
            args: Prisma.MCPServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MCPServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MCPServerCountArgs<ExtArgs>
            result: $Utils.Optional<MCPServerCountAggregateOutputType> | number
          }
        }
      }
      AccessRule: {
        payload: Prisma.$AccessRulePayload<ExtArgs>
        fields: Prisma.AccessRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>
          }
          findFirst: {
            args: Prisma.AccessRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>
          }
          findMany: {
            args: Prisma.AccessRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>[]
          }
          create: {
            args: Prisma.AccessRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>
          }
          createMany: {
            args: Prisma.AccessRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>[]
          }
          delete: {
            args: Prisma.AccessRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>
          }
          update: {
            args: Prisma.AccessRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>
          }
          deleteMany: {
            args: Prisma.AccessRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>[]
          }
          upsert: {
            args: Prisma.AccessRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessRulePayload>
          }
          aggregate: {
            args: Prisma.AccessRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessRule>
          }
          groupBy: {
            args: Prisma.AccessRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessRuleCountArgs<ExtArgs>
            result: $Utils.Optional<AccessRuleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    teamUser?: TeamUserOmit
    team?: TeamOmit
    mCPServer?: MCPServerOmit
    accessRule?: AccessRuleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teams: number
    accessRules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    accessRules?: boolean | UserCountOutputTypeCountAccessRulesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessRuleWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    mcpServers: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    mcpServers?: boolean | TeamCountOutputTypeCountMcpServersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamUserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMcpServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MCPServerWhereInput
  }


  /**
   * Count Type MCPServerCountOutputType
   */

  export type MCPServerCountOutputType = {
    rules: number
  }

  export type MCPServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | MCPServerCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * MCPServerCountOutputType without action
   */
  export type MCPServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServerCountOutputType
     */
    select?: MCPServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MCPServerCountOutputType without action
   */
  export type MCPServerCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessRuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    authId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authId: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    authId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    authId: string | null
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | User$teamsArgs<ExtArgs>
    accessRules?: boolean | User$accessRulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authId" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | User$teamsArgs<ExtArgs>
    accessRules?: boolean | User$accessRulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teams: Prisma.$TeamUserPayload<ExtArgs>[]
      accessRules: Prisma.$AccessRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authId: string | null
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessRules<T extends User$accessRulesArgs<ExtArgs> = {}>(args?: Subset<T, User$accessRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly authId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    where?: TeamUserWhereInput
    orderBy?: TeamUserOrderByWithRelationInput | TeamUserOrderByWithRelationInput[]
    cursor?: TeamUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamUserScalarFieldEnum | TeamUserScalarFieldEnum[]
  }

  /**
   * User.accessRules
   */
  export type User$accessRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    where?: AccessRuleWhereInput
    orderBy?: AccessRuleOrderByWithRelationInput | AccessRuleOrderByWithRelationInput[]
    cursor?: AccessRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessRuleScalarFieldEnum | AccessRuleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TeamUser
   */

  export type AggregateTeamUser = {
    _count: TeamUserCountAggregateOutputType | null
    _min: TeamUserMinAggregateOutputType | null
    _max: TeamUserMaxAggregateOutputType | null
  }

  export type TeamUserMinAggregateOutputType = {
    teamId: string | null
    userId: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
  }

  export type TeamUserMaxAggregateOutputType = {
    teamId: string | null
    userId: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
  }

  export type TeamUserCountAggregateOutputType = {
    teamId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type TeamUserMinAggregateInputType = {
    teamId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type TeamUserMaxAggregateInputType = {
    teamId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type TeamUserCountAggregateInputType = {
    teamId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type TeamUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamUser to aggregate.
     */
    where?: TeamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamUsers to fetch.
     */
    orderBy?: TeamUserOrderByWithRelationInput | TeamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamUsers
    **/
    _count?: true | TeamUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamUserMaxAggregateInputType
  }

  export type GetTeamUserAggregateType<T extends TeamUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamUser[P]>
      : GetScalarType<T[P], AggregateTeamUser[P]>
  }




  export type TeamUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamUserWhereInput
    orderBy?: TeamUserOrderByWithAggregationInput | TeamUserOrderByWithAggregationInput[]
    by: TeamUserScalarFieldEnum[] | TeamUserScalarFieldEnum
    having?: TeamUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamUserCountAggregateInputType | true
    _min?: TeamUserMinAggregateInputType
    _max?: TeamUserMaxAggregateInputType
  }

  export type TeamUserGroupByOutputType = {
    teamId: string
    userId: string
    role: $Enums.Role
    joinedAt: Date
    _count: TeamUserCountAggregateOutputType | null
    _min: TeamUserMinAggregateOutputType | null
    _max: TeamUserMaxAggregateOutputType | null
  }

  type GetTeamUserGroupByPayload<T extends TeamUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamUserGroupByOutputType[P]>
            : GetScalarType<T[P], TeamUserGroupByOutputType[P]>
        }
      >
    >


  export type TeamUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teamId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamUser"]>

  export type TeamUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teamId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamUser"]>

  export type TeamUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teamId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamUser"]>

  export type TeamUserSelectScalar = {
    teamId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type TeamUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"teamId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["teamUser"]>
  export type TeamUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamUser"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teamId: string
      userId: string
      role: $Enums.Role
      joinedAt: Date
    }, ExtArgs["result"]["teamUser"]>
    composites: {}
  }

  type TeamUserGetPayload<S extends boolean | null | undefined | TeamUserDefaultArgs> = $Result.GetResult<Prisma.$TeamUserPayload, S>

  type TeamUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamUserCountAggregateInputType | true
    }

  export interface TeamUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamUser'], meta: { name: 'TeamUser' } }
    /**
     * Find zero or one TeamUser that matches the filter.
     * @param {TeamUserFindUniqueArgs} args - Arguments to find a TeamUser
     * @example
     * // Get one TeamUser
     * const teamUser = await prisma.teamUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamUserFindUniqueArgs>(args: SelectSubset<T, TeamUserFindUniqueArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamUserFindUniqueOrThrowArgs} args - Arguments to find a TeamUser
     * @example
     * // Get one TeamUser
     * const teamUser = await prisma.teamUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserFindFirstArgs} args - Arguments to find a TeamUser
     * @example
     * // Get one TeamUser
     * const teamUser = await prisma.teamUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamUserFindFirstArgs>(args?: SelectSubset<T, TeamUserFindFirstArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserFindFirstOrThrowArgs} args - Arguments to find a TeamUser
     * @example
     * // Get one TeamUser
     * const teamUser = await prisma.teamUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamUsers
     * const teamUsers = await prisma.teamUser.findMany()
     * 
     * // Get first 10 TeamUsers
     * const teamUsers = await prisma.teamUser.findMany({ take: 10 })
     * 
     * // Only select the `teamId`
     * const teamUserWithTeamIdOnly = await prisma.teamUser.findMany({ select: { teamId: true } })
     * 
     */
    findMany<T extends TeamUserFindManyArgs>(args?: SelectSubset<T, TeamUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamUser.
     * @param {TeamUserCreateArgs} args - Arguments to create a TeamUser.
     * @example
     * // Create one TeamUser
     * const TeamUser = await prisma.teamUser.create({
     *   data: {
     *     // ... data to create a TeamUser
     *   }
     * })
     * 
     */
    create<T extends TeamUserCreateArgs>(args: SelectSubset<T, TeamUserCreateArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamUsers.
     * @param {TeamUserCreateManyArgs} args - Arguments to create many TeamUsers.
     * @example
     * // Create many TeamUsers
     * const teamUser = await prisma.teamUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamUserCreateManyArgs>(args?: SelectSubset<T, TeamUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamUsers and returns the data saved in the database.
     * @param {TeamUserCreateManyAndReturnArgs} args - Arguments to create many TeamUsers.
     * @example
     * // Create many TeamUsers
     * const teamUser = await prisma.teamUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamUsers and only return the `teamId`
     * const teamUserWithTeamIdOnly = await prisma.teamUser.createManyAndReturn({
     *   select: { teamId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamUser.
     * @param {TeamUserDeleteArgs} args - Arguments to delete one TeamUser.
     * @example
     * // Delete one TeamUser
     * const TeamUser = await prisma.teamUser.delete({
     *   where: {
     *     // ... filter to delete one TeamUser
     *   }
     * })
     * 
     */
    delete<T extends TeamUserDeleteArgs>(args: SelectSubset<T, TeamUserDeleteArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamUser.
     * @param {TeamUserUpdateArgs} args - Arguments to update one TeamUser.
     * @example
     * // Update one TeamUser
     * const teamUser = await prisma.teamUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUserUpdateArgs>(args: SelectSubset<T, TeamUserUpdateArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamUsers.
     * @param {TeamUserDeleteManyArgs} args - Arguments to filter TeamUsers to delete.
     * @example
     * // Delete a few TeamUsers
     * const { count } = await prisma.teamUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamUserDeleteManyArgs>(args?: SelectSubset<T, TeamUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamUsers
     * const teamUser = await prisma.teamUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUserUpdateManyArgs>(args: SelectSubset<T, TeamUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamUsers and returns the data updated in the database.
     * @param {TeamUserUpdateManyAndReturnArgs} args - Arguments to update many TeamUsers.
     * @example
     * // Update many TeamUsers
     * const teamUser = await prisma.teamUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamUsers and only return the `teamId`
     * const teamUserWithTeamIdOnly = await prisma.teamUser.updateManyAndReturn({
     *   select: { teamId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamUser.
     * @param {TeamUserUpsertArgs} args - Arguments to update or create a TeamUser.
     * @example
     * // Update or create a TeamUser
     * const teamUser = await prisma.teamUser.upsert({
     *   create: {
     *     // ... data to create a TeamUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamUser we want to update
     *   }
     * })
     */
    upsert<T extends TeamUserUpsertArgs>(args: SelectSubset<T, TeamUserUpsertArgs<ExtArgs>>): Prisma__TeamUserClient<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserCountArgs} args - Arguments to filter TeamUsers to count.
     * @example
     * // Count the number of TeamUsers
     * const count = await prisma.teamUser.count({
     *   where: {
     *     // ... the filter for the TeamUsers we want to count
     *   }
     * })
    **/
    count<T extends TeamUserCountArgs>(
      args?: Subset<T, TeamUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamUserAggregateArgs>(args: Subset<T, TeamUserAggregateArgs>): Prisma.PrismaPromise<GetTeamUserAggregateType<T>>

    /**
     * Group by TeamUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamUserGroupByArgs['orderBy'] }
        : { orderBy?: TeamUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamUser model
   */
  readonly fields: TeamUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamUser model
   */
  interface TeamUserFieldRefs {
    readonly teamId: FieldRef<"TeamUser", 'String'>
    readonly userId: FieldRef<"TeamUser", 'String'>
    readonly role: FieldRef<"TeamUser", 'Role'>
    readonly joinedAt: FieldRef<"TeamUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamUser findUnique
   */
  export type TeamUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * Filter, which TeamUser to fetch.
     */
    where: TeamUserWhereUniqueInput
  }

  /**
   * TeamUser findUniqueOrThrow
   */
  export type TeamUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * Filter, which TeamUser to fetch.
     */
    where: TeamUserWhereUniqueInput
  }

  /**
   * TeamUser findFirst
   */
  export type TeamUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * Filter, which TeamUser to fetch.
     */
    where?: TeamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamUsers to fetch.
     */
    orderBy?: TeamUserOrderByWithRelationInput | TeamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamUsers.
     */
    cursor?: TeamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamUsers.
     */
    distinct?: TeamUserScalarFieldEnum | TeamUserScalarFieldEnum[]
  }

  /**
   * TeamUser findFirstOrThrow
   */
  export type TeamUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * Filter, which TeamUser to fetch.
     */
    where?: TeamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamUsers to fetch.
     */
    orderBy?: TeamUserOrderByWithRelationInput | TeamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamUsers.
     */
    cursor?: TeamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamUsers.
     */
    distinct?: TeamUserScalarFieldEnum | TeamUserScalarFieldEnum[]
  }

  /**
   * TeamUser findMany
   */
  export type TeamUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * Filter, which TeamUsers to fetch.
     */
    where?: TeamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamUsers to fetch.
     */
    orderBy?: TeamUserOrderByWithRelationInput | TeamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamUsers.
     */
    cursor?: TeamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamUsers.
     */
    skip?: number
    distinct?: TeamUserScalarFieldEnum | TeamUserScalarFieldEnum[]
  }

  /**
   * TeamUser create
   */
  export type TeamUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamUser.
     */
    data: XOR<TeamUserCreateInput, TeamUserUncheckedCreateInput>
  }

  /**
   * TeamUser createMany
   */
  export type TeamUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamUsers.
     */
    data: TeamUserCreateManyInput | TeamUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamUser createManyAndReturn
   */
  export type TeamUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * The data used to create many TeamUsers.
     */
    data: TeamUserCreateManyInput | TeamUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamUser update
   */
  export type TeamUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamUser.
     */
    data: XOR<TeamUserUpdateInput, TeamUserUncheckedUpdateInput>
    /**
     * Choose, which TeamUser to update.
     */
    where: TeamUserWhereUniqueInput
  }

  /**
   * TeamUser updateMany
   */
  export type TeamUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamUsers.
     */
    data: XOR<TeamUserUpdateManyMutationInput, TeamUserUncheckedUpdateManyInput>
    /**
     * Filter which TeamUsers to update
     */
    where?: TeamUserWhereInput
    /**
     * Limit how many TeamUsers to update.
     */
    limit?: number
  }

  /**
   * TeamUser updateManyAndReturn
   */
  export type TeamUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * The data used to update TeamUsers.
     */
    data: XOR<TeamUserUpdateManyMutationInput, TeamUserUncheckedUpdateManyInput>
    /**
     * Filter which TeamUsers to update
     */
    where?: TeamUserWhereInput
    /**
     * Limit how many TeamUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamUser upsert
   */
  export type TeamUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamUser to update in case it exists.
     */
    where: TeamUserWhereUniqueInput
    /**
     * In case the TeamUser found by the `where` argument doesn't exist, create a new TeamUser with this data.
     */
    create: XOR<TeamUserCreateInput, TeamUserUncheckedCreateInput>
    /**
     * In case the TeamUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUserUpdateInput, TeamUserUncheckedUpdateInput>
  }

  /**
   * TeamUser delete
   */
  export type TeamUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    /**
     * Filter which TeamUser to delete.
     */
    where: TeamUserWhereUniqueInput
  }

  /**
   * TeamUser deleteMany
   */
  export type TeamUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamUsers to delete
     */
    where?: TeamUserWhereInput
    /**
     * Limit how many TeamUsers to delete.
     */
    limit?: number
  }

  /**
   * TeamUser without action
   */
  export type TeamUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    apiKey: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    apiKey: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    apiKey: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    apiKey?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    apiKey?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    apiKey?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    orgId: string | null
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    apiKey: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKey?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    mcpServers?: boolean | Team$mcpServersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKey?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKey?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiKey?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "slug" | "createdAt" | "updatedAt" | "apiKey", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    mcpServers?: boolean | Team$mcpServersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamUserPayload<ExtArgs>[]
      mcpServers: Prisma.$MCPServerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string | null
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
      apiKey: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mcpServers<T extends Team$mcpServersArgs<ExtArgs> = {}>(args?: Subset<T, Team$mcpServersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly orgId: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly slug: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly apiKey: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamUser
     */
    select?: TeamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamUser
     */
    omit?: TeamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamUserInclude<ExtArgs> | null
    where?: TeamUserWhereInput
    orderBy?: TeamUserOrderByWithRelationInput | TeamUserOrderByWithRelationInput[]
    cursor?: TeamUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamUserScalarFieldEnum | TeamUserScalarFieldEnum[]
  }

  /**
   * Team.mcpServers
   */
  export type Team$mcpServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    where?: MCPServerWhereInput
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    cursor?: MCPServerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model MCPServer
   */

  export type AggregateMCPServer = {
    _count: MCPServerCountAggregateOutputType | null
    _min: MCPServerMinAggregateOutputType | null
    _max: MCPServerMaxAggregateOutputType | null
  }

  export type MCPServerMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MCPServerType | null
    proxyUrl: string | null
    endpoint: string | null
    description: string | null
    isActive: boolean | null
    protocol: $Enums.MCPProtocol | null
    externalId: string | null
    oauthClientId: string | null
    registrationEndpoint: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MCPServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MCPServerType | null
    proxyUrl: string | null
    endpoint: string | null
    description: string | null
    isActive: boolean | null
    protocol: $Enums.MCPProtocol | null
    externalId: string | null
    oauthClientId: string | null
    registrationEndpoint: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MCPServerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    proxyUrl: number
    endpoint: number
    description: number
    isActive: number
    protocol: number
    externalId: number
    connectionConfig: number
    oauthClientId: number
    wellKnownOauthServer: number
    wellKnownProtectedResource: number
    registrationEndpoint: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MCPServerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    proxyUrl?: true
    endpoint?: true
    description?: true
    isActive?: true
    protocol?: true
    externalId?: true
    oauthClientId?: true
    registrationEndpoint?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MCPServerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    proxyUrl?: true
    endpoint?: true
    description?: true
    isActive?: true
    protocol?: true
    externalId?: true
    oauthClientId?: true
    registrationEndpoint?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MCPServerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    proxyUrl?: true
    endpoint?: true
    description?: true
    isActive?: true
    protocol?: true
    externalId?: true
    connectionConfig?: true
    oauthClientId?: true
    wellKnownOauthServer?: true
    wellKnownProtectedResource?: true
    registrationEndpoint?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MCPServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MCPServer to aggregate.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MCPServers
    **/
    _count?: true | MCPServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MCPServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MCPServerMaxAggregateInputType
  }

  export type GetMCPServerAggregateType<T extends MCPServerAggregateArgs> = {
        [P in keyof T & keyof AggregateMCPServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMCPServer[P]>
      : GetScalarType<T[P], AggregateMCPServer[P]>
  }




  export type MCPServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MCPServerWhereInput
    orderBy?: MCPServerOrderByWithAggregationInput | MCPServerOrderByWithAggregationInput[]
    by: MCPServerScalarFieldEnum[] | MCPServerScalarFieldEnum
    having?: MCPServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MCPServerCountAggregateInputType | true
    _min?: MCPServerMinAggregateInputType
    _max?: MCPServerMaxAggregateInputType
  }

  export type MCPServerGroupByOutputType = {
    id: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl: string | null
    endpoint: string
    description: string | null
    isActive: boolean
    protocol: $Enums.MCPProtocol
    externalId: string | null
    connectionConfig: JsonValue | null
    oauthClientId: string | null
    wellKnownOauthServer: JsonValue | null
    wellKnownProtectedResource: JsonValue | null
    registrationEndpoint: string | null
    teamId: string
    createdAt: Date
    updatedAt: Date
    _count: MCPServerCountAggregateOutputType | null
    _min: MCPServerMinAggregateOutputType | null
    _max: MCPServerMaxAggregateOutputType | null
  }

  type GetMCPServerGroupByPayload<T extends MCPServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MCPServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MCPServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MCPServerGroupByOutputType[P]>
            : GetScalarType<T[P], MCPServerGroupByOutputType[P]>
        }
      >
    >


  export type MCPServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    proxyUrl?: boolean
    endpoint?: boolean
    description?: boolean
    isActive?: boolean
    protocol?: boolean
    externalId?: boolean
    connectionConfig?: boolean
    oauthClientId?: boolean
    wellKnownOauthServer?: boolean
    wellKnownProtectedResource?: boolean
    registrationEndpoint?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    rules?: boolean | MCPServer$rulesArgs<ExtArgs>
    _count?: boolean | MCPServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCPServer"]>

  export type MCPServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    proxyUrl?: boolean
    endpoint?: boolean
    description?: boolean
    isActive?: boolean
    protocol?: boolean
    externalId?: boolean
    connectionConfig?: boolean
    oauthClientId?: boolean
    wellKnownOauthServer?: boolean
    wellKnownProtectedResource?: boolean
    registrationEndpoint?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCPServer"]>

  export type MCPServerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    proxyUrl?: boolean
    endpoint?: boolean
    description?: boolean
    isActive?: boolean
    protocol?: boolean
    externalId?: boolean
    connectionConfig?: boolean
    oauthClientId?: boolean
    wellKnownOauthServer?: boolean
    wellKnownProtectedResource?: boolean
    registrationEndpoint?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCPServer"]>

  export type MCPServerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    proxyUrl?: boolean
    endpoint?: boolean
    description?: boolean
    isActive?: boolean
    protocol?: boolean
    externalId?: boolean
    connectionConfig?: boolean
    oauthClientId?: boolean
    wellKnownOauthServer?: boolean
    wellKnownProtectedResource?: boolean
    registrationEndpoint?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MCPServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "proxyUrl" | "endpoint" | "description" | "isActive" | "protocol" | "externalId" | "connectionConfig" | "oauthClientId" | "wellKnownOauthServer" | "wellKnownProtectedResource" | "registrationEndpoint" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["mCPServer"]>
  export type MCPServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    rules?: boolean | MCPServer$rulesArgs<ExtArgs>
    _count?: boolean | MCPServerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MCPServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MCPServerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $MCPServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MCPServer"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      rules: Prisma.$AccessRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.MCPServerType
      proxyUrl: string | null
      endpoint: string
      description: string | null
      isActive: boolean
      protocol: $Enums.MCPProtocol
      externalId: string | null
      connectionConfig: Prisma.JsonValue | null
      oauthClientId: string | null
      wellKnownOauthServer: Prisma.JsonValue | null
      wellKnownProtectedResource: Prisma.JsonValue | null
      registrationEndpoint: string | null
      teamId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mCPServer"]>
    composites: {}
  }

  type MCPServerGetPayload<S extends boolean | null | undefined | MCPServerDefaultArgs> = $Result.GetResult<Prisma.$MCPServerPayload, S>

  type MCPServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MCPServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MCPServerCountAggregateInputType | true
    }

  export interface MCPServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MCPServer'], meta: { name: 'MCPServer' } }
    /**
     * Find zero or one MCPServer that matches the filter.
     * @param {MCPServerFindUniqueArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MCPServerFindUniqueArgs>(args: SelectSubset<T, MCPServerFindUniqueArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MCPServer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MCPServerFindUniqueOrThrowArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MCPServerFindUniqueOrThrowArgs>(args: SelectSubset<T, MCPServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MCPServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerFindFirstArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MCPServerFindFirstArgs>(args?: SelectSubset<T, MCPServerFindFirstArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MCPServer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerFindFirstOrThrowArgs} args - Arguments to find a MCPServer
     * @example
     * // Get one MCPServer
     * const mCPServer = await prisma.mCPServer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MCPServerFindFirstOrThrowArgs>(args?: SelectSubset<T, MCPServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MCPServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MCPServers
     * const mCPServers = await prisma.mCPServer.findMany()
     * 
     * // Get first 10 MCPServers
     * const mCPServers = await prisma.mCPServer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mCPServerWithIdOnly = await prisma.mCPServer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MCPServerFindManyArgs>(args?: SelectSubset<T, MCPServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MCPServer.
     * @param {MCPServerCreateArgs} args - Arguments to create a MCPServer.
     * @example
     * // Create one MCPServer
     * const MCPServer = await prisma.mCPServer.create({
     *   data: {
     *     // ... data to create a MCPServer
     *   }
     * })
     * 
     */
    create<T extends MCPServerCreateArgs>(args: SelectSubset<T, MCPServerCreateArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MCPServers.
     * @param {MCPServerCreateManyArgs} args - Arguments to create many MCPServers.
     * @example
     * // Create many MCPServers
     * const mCPServer = await prisma.mCPServer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MCPServerCreateManyArgs>(args?: SelectSubset<T, MCPServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MCPServers and returns the data saved in the database.
     * @param {MCPServerCreateManyAndReturnArgs} args - Arguments to create many MCPServers.
     * @example
     * // Create many MCPServers
     * const mCPServer = await prisma.mCPServer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MCPServers and only return the `id`
     * const mCPServerWithIdOnly = await prisma.mCPServer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MCPServerCreateManyAndReturnArgs>(args?: SelectSubset<T, MCPServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MCPServer.
     * @param {MCPServerDeleteArgs} args - Arguments to delete one MCPServer.
     * @example
     * // Delete one MCPServer
     * const MCPServer = await prisma.mCPServer.delete({
     *   where: {
     *     // ... filter to delete one MCPServer
     *   }
     * })
     * 
     */
    delete<T extends MCPServerDeleteArgs>(args: SelectSubset<T, MCPServerDeleteArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MCPServer.
     * @param {MCPServerUpdateArgs} args - Arguments to update one MCPServer.
     * @example
     * // Update one MCPServer
     * const mCPServer = await prisma.mCPServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MCPServerUpdateArgs>(args: SelectSubset<T, MCPServerUpdateArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MCPServers.
     * @param {MCPServerDeleteManyArgs} args - Arguments to filter MCPServers to delete.
     * @example
     * // Delete a few MCPServers
     * const { count } = await prisma.mCPServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MCPServerDeleteManyArgs>(args?: SelectSubset<T, MCPServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MCPServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MCPServers
     * const mCPServer = await prisma.mCPServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MCPServerUpdateManyArgs>(args: SelectSubset<T, MCPServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MCPServers and returns the data updated in the database.
     * @param {MCPServerUpdateManyAndReturnArgs} args - Arguments to update many MCPServers.
     * @example
     * // Update many MCPServers
     * const mCPServer = await prisma.mCPServer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MCPServers and only return the `id`
     * const mCPServerWithIdOnly = await prisma.mCPServer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MCPServerUpdateManyAndReturnArgs>(args: SelectSubset<T, MCPServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MCPServer.
     * @param {MCPServerUpsertArgs} args - Arguments to update or create a MCPServer.
     * @example
     * // Update or create a MCPServer
     * const mCPServer = await prisma.mCPServer.upsert({
     *   create: {
     *     // ... data to create a MCPServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MCPServer we want to update
     *   }
     * })
     */
    upsert<T extends MCPServerUpsertArgs>(args: SelectSubset<T, MCPServerUpsertArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MCPServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerCountArgs} args - Arguments to filter MCPServers to count.
     * @example
     * // Count the number of MCPServers
     * const count = await prisma.mCPServer.count({
     *   where: {
     *     // ... the filter for the MCPServers we want to count
     *   }
     * })
    **/
    count<T extends MCPServerCountArgs>(
      args?: Subset<T, MCPServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MCPServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MCPServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MCPServerAggregateArgs>(args: Subset<T, MCPServerAggregateArgs>): Prisma.PrismaPromise<GetMCPServerAggregateType<T>>

    /**
     * Group by MCPServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCPServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MCPServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MCPServerGroupByArgs['orderBy'] }
        : { orderBy?: MCPServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MCPServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMCPServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MCPServer model
   */
  readonly fields: MCPServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MCPServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MCPServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rules<T extends MCPServer$rulesArgs<ExtArgs> = {}>(args?: Subset<T, MCPServer$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MCPServer model
   */
  interface MCPServerFieldRefs {
    readonly id: FieldRef<"MCPServer", 'String'>
    readonly name: FieldRef<"MCPServer", 'String'>
    readonly type: FieldRef<"MCPServer", 'MCPServerType'>
    readonly proxyUrl: FieldRef<"MCPServer", 'String'>
    readonly endpoint: FieldRef<"MCPServer", 'String'>
    readonly description: FieldRef<"MCPServer", 'String'>
    readonly isActive: FieldRef<"MCPServer", 'Boolean'>
    readonly protocol: FieldRef<"MCPServer", 'MCPProtocol'>
    readonly externalId: FieldRef<"MCPServer", 'String'>
    readonly connectionConfig: FieldRef<"MCPServer", 'Json'>
    readonly oauthClientId: FieldRef<"MCPServer", 'String'>
    readonly wellKnownOauthServer: FieldRef<"MCPServer", 'Json'>
    readonly wellKnownProtectedResource: FieldRef<"MCPServer", 'Json'>
    readonly registrationEndpoint: FieldRef<"MCPServer", 'String'>
    readonly teamId: FieldRef<"MCPServer", 'String'>
    readonly createdAt: FieldRef<"MCPServer", 'DateTime'>
    readonly updatedAt: FieldRef<"MCPServer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MCPServer findUnique
   */
  export type MCPServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer findUniqueOrThrow
   */
  export type MCPServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer findFirst
   */
  export type MCPServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MCPServers.
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MCPServers.
     */
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * MCPServer findFirstOrThrow
   */
  export type MCPServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServer to fetch.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MCPServers.
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MCPServers.
     */
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * MCPServer findMany
   */
  export type MCPServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter, which MCPServers to fetch.
     */
    where?: MCPServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCPServers to fetch.
     */
    orderBy?: MCPServerOrderByWithRelationInput | MCPServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MCPServers.
     */
    cursor?: MCPServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCPServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCPServers.
     */
    skip?: number
    distinct?: MCPServerScalarFieldEnum | MCPServerScalarFieldEnum[]
  }

  /**
   * MCPServer create
   */
  export type MCPServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * The data needed to create a MCPServer.
     */
    data: XOR<MCPServerCreateInput, MCPServerUncheckedCreateInput>
  }

  /**
   * MCPServer createMany
   */
  export type MCPServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MCPServers.
     */
    data: MCPServerCreateManyInput | MCPServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MCPServer createManyAndReturn
   */
  export type MCPServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * The data used to create many MCPServers.
     */
    data: MCPServerCreateManyInput | MCPServerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MCPServer update
   */
  export type MCPServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * The data needed to update a MCPServer.
     */
    data: XOR<MCPServerUpdateInput, MCPServerUncheckedUpdateInput>
    /**
     * Choose, which MCPServer to update.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer updateMany
   */
  export type MCPServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MCPServers.
     */
    data: XOR<MCPServerUpdateManyMutationInput, MCPServerUncheckedUpdateManyInput>
    /**
     * Filter which MCPServers to update
     */
    where?: MCPServerWhereInput
    /**
     * Limit how many MCPServers to update.
     */
    limit?: number
  }

  /**
   * MCPServer updateManyAndReturn
   */
  export type MCPServerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * The data used to update MCPServers.
     */
    data: XOR<MCPServerUpdateManyMutationInput, MCPServerUncheckedUpdateManyInput>
    /**
     * Filter which MCPServers to update
     */
    where?: MCPServerWhereInput
    /**
     * Limit how many MCPServers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MCPServer upsert
   */
  export type MCPServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * The filter to search for the MCPServer to update in case it exists.
     */
    where: MCPServerWhereUniqueInput
    /**
     * In case the MCPServer found by the `where` argument doesn't exist, create a new MCPServer with this data.
     */
    create: XOR<MCPServerCreateInput, MCPServerUncheckedCreateInput>
    /**
     * In case the MCPServer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MCPServerUpdateInput, MCPServerUncheckedUpdateInput>
  }

  /**
   * MCPServer delete
   */
  export type MCPServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
    /**
     * Filter which MCPServer to delete.
     */
    where: MCPServerWhereUniqueInput
  }

  /**
   * MCPServer deleteMany
   */
  export type MCPServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MCPServers to delete
     */
    where?: MCPServerWhereInput
    /**
     * Limit how many MCPServers to delete.
     */
    limit?: number
  }

  /**
   * MCPServer.rules
   */
  export type MCPServer$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    where?: AccessRuleWhereInput
    orderBy?: AccessRuleOrderByWithRelationInput | AccessRuleOrderByWithRelationInput[]
    cursor?: AccessRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessRuleScalarFieldEnum | AccessRuleScalarFieldEnum[]
  }

  /**
   * MCPServer without action
   */
  export type MCPServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCPServer
     */
    select?: MCPServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCPServer
     */
    omit?: MCPServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCPServerInclude<ExtArgs> | null
  }


  /**
   * Model AccessRule
   */

  export type AggregateAccessRule = {
    _count: AccessRuleCountAggregateOutputType | null
    _min: AccessRuleMinAggregateOutputType | null
    _max: AccessRuleMaxAggregateOutputType | null
  }

  export type AccessRuleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serverId: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessRuleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serverId: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccessRuleCountAggregateOutputType = {
    id: number
    userId: number
    serverId: number
    accessConfig: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccessRuleMinAggregateInputType = {
    id?: true
    userId?: true
    serverId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessRuleMaxAggregateInputType = {
    id?: true
    userId?: true
    serverId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccessRuleCountAggregateInputType = {
    id?: true
    userId?: true
    serverId?: true
    accessConfig?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccessRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessRule to aggregate.
     */
    where?: AccessRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessRules to fetch.
     */
    orderBy?: AccessRuleOrderByWithRelationInput | AccessRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessRules
    **/
    _count?: true | AccessRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessRuleMaxAggregateInputType
  }

  export type GetAccessRuleAggregateType<T extends AccessRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessRule[P]>
      : GetScalarType<T[P], AggregateAccessRule[P]>
  }




  export type AccessRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessRuleWhereInput
    orderBy?: AccessRuleOrderByWithAggregationInput | AccessRuleOrderByWithAggregationInput[]
    by: AccessRuleScalarFieldEnum[] | AccessRuleScalarFieldEnum
    having?: AccessRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessRuleCountAggregateInputType | true
    _min?: AccessRuleMinAggregateInputType
    _max?: AccessRuleMaxAggregateInputType
  }

  export type AccessRuleGroupByOutputType = {
    id: string
    userId: string
    serverId: string
    accessConfig: JsonValue
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccessRuleCountAggregateOutputType | null
    _min: AccessRuleMinAggregateOutputType | null
    _max: AccessRuleMaxAggregateOutputType | null
  }

  type GetAccessRuleGroupByPayload<T extends AccessRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessRuleGroupByOutputType[P]>
            : GetScalarType<T[P], AccessRuleGroupByOutputType[P]>
        }
      >
    >


  export type AccessRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serverId?: boolean
    accessConfig?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    server?: boolean | MCPServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessRule"]>

  export type AccessRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serverId?: boolean
    accessConfig?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    server?: boolean | MCPServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessRule"]>

  export type AccessRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serverId?: boolean
    accessConfig?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    server?: boolean | MCPServerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessRule"]>

  export type AccessRuleSelectScalar = {
    id?: boolean
    userId?: boolean
    serverId?: boolean
    accessConfig?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccessRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serverId" | "accessConfig" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["accessRule"]>
  export type AccessRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    server?: boolean | MCPServerDefaultArgs<ExtArgs>
  }
  export type AccessRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    server?: boolean | MCPServerDefaultArgs<ExtArgs>
  }
  export type AccessRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    server?: boolean | MCPServerDefaultArgs<ExtArgs>
  }

  export type $AccessRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessRule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      server: Prisma.$MCPServerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serverId: string
      accessConfig: Prisma.JsonValue
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accessRule"]>
    composites: {}
  }

  type AccessRuleGetPayload<S extends boolean | null | undefined | AccessRuleDefaultArgs> = $Result.GetResult<Prisma.$AccessRulePayload, S>

  type AccessRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessRuleCountAggregateInputType | true
    }

  export interface AccessRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessRule'], meta: { name: 'AccessRule' } }
    /**
     * Find zero or one AccessRule that matches the filter.
     * @param {AccessRuleFindUniqueArgs} args - Arguments to find a AccessRule
     * @example
     * // Get one AccessRule
     * const accessRule = await prisma.accessRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessRuleFindUniqueArgs>(args: SelectSubset<T, AccessRuleFindUniqueArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessRuleFindUniqueOrThrowArgs} args - Arguments to find a AccessRule
     * @example
     * // Get one AccessRule
     * const accessRule = await prisma.accessRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleFindFirstArgs} args - Arguments to find a AccessRule
     * @example
     * // Get one AccessRule
     * const accessRule = await prisma.accessRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessRuleFindFirstArgs>(args?: SelectSubset<T, AccessRuleFindFirstArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleFindFirstOrThrowArgs} args - Arguments to find a AccessRule
     * @example
     * // Get one AccessRule
     * const accessRule = await prisma.accessRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessRules
     * const accessRules = await prisma.accessRule.findMany()
     * 
     * // Get first 10 AccessRules
     * const accessRules = await prisma.accessRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessRuleWithIdOnly = await prisma.accessRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessRuleFindManyArgs>(args?: SelectSubset<T, AccessRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessRule.
     * @param {AccessRuleCreateArgs} args - Arguments to create a AccessRule.
     * @example
     * // Create one AccessRule
     * const AccessRule = await prisma.accessRule.create({
     *   data: {
     *     // ... data to create a AccessRule
     *   }
     * })
     * 
     */
    create<T extends AccessRuleCreateArgs>(args: SelectSubset<T, AccessRuleCreateArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessRules.
     * @param {AccessRuleCreateManyArgs} args - Arguments to create many AccessRules.
     * @example
     * // Create many AccessRules
     * const accessRule = await prisma.accessRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessRuleCreateManyArgs>(args?: SelectSubset<T, AccessRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessRules and returns the data saved in the database.
     * @param {AccessRuleCreateManyAndReturnArgs} args - Arguments to create many AccessRules.
     * @example
     * // Create many AccessRules
     * const accessRule = await prisma.accessRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessRules and only return the `id`
     * const accessRuleWithIdOnly = await prisma.accessRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessRule.
     * @param {AccessRuleDeleteArgs} args - Arguments to delete one AccessRule.
     * @example
     * // Delete one AccessRule
     * const AccessRule = await prisma.accessRule.delete({
     *   where: {
     *     // ... filter to delete one AccessRule
     *   }
     * })
     * 
     */
    delete<T extends AccessRuleDeleteArgs>(args: SelectSubset<T, AccessRuleDeleteArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessRule.
     * @param {AccessRuleUpdateArgs} args - Arguments to update one AccessRule.
     * @example
     * // Update one AccessRule
     * const accessRule = await prisma.accessRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessRuleUpdateArgs>(args: SelectSubset<T, AccessRuleUpdateArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessRules.
     * @param {AccessRuleDeleteManyArgs} args - Arguments to filter AccessRules to delete.
     * @example
     * // Delete a few AccessRules
     * const { count } = await prisma.accessRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessRuleDeleteManyArgs>(args?: SelectSubset<T, AccessRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessRules
     * const accessRule = await prisma.accessRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessRuleUpdateManyArgs>(args: SelectSubset<T, AccessRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessRules and returns the data updated in the database.
     * @param {AccessRuleUpdateManyAndReturnArgs} args - Arguments to update many AccessRules.
     * @example
     * // Update many AccessRules
     * const accessRule = await prisma.accessRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessRules and only return the `id`
     * const accessRuleWithIdOnly = await prisma.accessRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessRule.
     * @param {AccessRuleUpsertArgs} args - Arguments to update or create a AccessRule.
     * @example
     * // Update or create a AccessRule
     * const accessRule = await prisma.accessRule.upsert({
     *   create: {
     *     // ... data to create a AccessRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessRule we want to update
     *   }
     * })
     */
    upsert<T extends AccessRuleUpsertArgs>(args: SelectSubset<T, AccessRuleUpsertArgs<ExtArgs>>): Prisma__AccessRuleClient<$Result.GetResult<Prisma.$AccessRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleCountArgs} args - Arguments to filter AccessRules to count.
     * @example
     * // Count the number of AccessRules
     * const count = await prisma.accessRule.count({
     *   where: {
     *     // ... the filter for the AccessRules we want to count
     *   }
     * })
    **/
    count<T extends AccessRuleCountArgs>(
      args?: Subset<T, AccessRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessRuleAggregateArgs>(args: Subset<T, AccessRuleAggregateArgs>): Prisma.PrismaPromise<GetAccessRuleAggregateType<T>>

    /**
     * Group by AccessRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessRuleGroupByArgs['orderBy'] }
        : { orderBy?: AccessRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessRule model
   */
  readonly fields: AccessRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends MCPServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MCPServerDefaultArgs<ExtArgs>>): Prisma__MCPServerClient<$Result.GetResult<Prisma.$MCPServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessRule model
   */
  interface AccessRuleFieldRefs {
    readonly id: FieldRef<"AccessRule", 'String'>
    readonly userId: FieldRef<"AccessRule", 'String'>
    readonly serverId: FieldRef<"AccessRule", 'String'>
    readonly accessConfig: FieldRef<"AccessRule", 'Json'>
    readonly description: FieldRef<"AccessRule", 'String'>
    readonly createdAt: FieldRef<"AccessRule", 'DateTime'>
    readonly updatedAt: FieldRef<"AccessRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessRule findUnique
   */
  export type AccessRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * Filter, which AccessRule to fetch.
     */
    where: AccessRuleWhereUniqueInput
  }

  /**
   * AccessRule findUniqueOrThrow
   */
  export type AccessRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * Filter, which AccessRule to fetch.
     */
    where: AccessRuleWhereUniqueInput
  }

  /**
   * AccessRule findFirst
   */
  export type AccessRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * Filter, which AccessRule to fetch.
     */
    where?: AccessRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessRules to fetch.
     */
    orderBy?: AccessRuleOrderByWithRelationInput | AccessRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessRules.
     */
    cursor?: AccessRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessRules.
     */
    distinct?: AccessRuleScalarFieldEnum | AccessRuleScalarFieldEnum[]
  }

  /**
   * AccessRule findFirstOrThrow
   */
  export type AccessRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * Filter, which AccessRule to fetch.
     */
    where?: AccessRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessRules to fetch.
     */
    orderBy?: AccessRuleOrderByWithRelationInput | AccessRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessRules.
     */
    cursor?: AccessRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessRules.
     */
    distinct?: AccessRuleScalarFieldEnum | AccessRuleScalarFieldEnum[]
  }

  /**
   * AccessRule findMany
   */
  export type AccessRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * Filter, which AccessRules to fetch.
     */
    where?: AccessRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessRules to fetch.
     */
    orderBy?: AccessRuleOrderByWithRelationInput | AccessRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessRules.
     */
    cursor?: AccessRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessRules.
     */
    skip?: number
    distinct?: AccessRuleScalarFieldEnum | AccessRuleScalarFieldEnum[]
  }

  /**
   * AccessRule create
   */
  export type AccessRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessRule.
     */
    data: XOR<AccessRuleCreateInput, AccessRuleUncheckedCreateInput>
  }

  /**
   * AccessRule createMany
   */
  export type AccessRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessRules.
     */
    data: AccessRuleCreateManyInput | AccessRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessRule createManyAndReturn
   */
  export type AccessRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * The data used to create many AccessRules.
     */
    data: AccessRuleCreateManyInput | AccessRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessRule update
   */
  export type AccessRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessRule.
     */
    data: XOR<AccessRuleUpdateInput, AccessRuleUncheckedUpdateInput>
    /**
     * Choose, which AccessRule to update.
     */
    where: AccessRuleWhereUniqueInput
  }

  /**
   * AccessRule updateMany
   */
  export type AccessRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessRules.
     */
    data: XOR<AccessRuleUpdateManyMutationInput, AccessRuleUncheckedUpdateManyInput>
    /**
     * Filter which AccessRules to update
     */
    where?: AccessRuleWhereInput
    /**
     * Limit how many AccessRules to update.
     */
    limit?: number
  }

  /**
   * AccessRule updateManyAndReturn
   */
  export type AccessRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * The data used to update AccessRules.
     */
    data: XOR<AccessRuleUpdateManyMutationInput, AccessRuleUncheckedUpdateManyInput>
    /**
     * Filter which AccessRules to update
     */
    where?: AccessRuleWhereInput
    /**
     * Limit how many AccessRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessRule upsert
   */
  export type AccessRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessRule to update in case it exists.
     */
    where: AccessRuleWhereUniqueInput
    /**
     * In case the AccessRule found by the `where` argument doesn't exist, create a new AccessRule with this data.
     */
    create: XOR<AccessRuleCreateInput, AccessRuleUncheckedCreateInput>
    /**
     * In case the AccessRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessRuleUpdateInput, AccessRuleUncheckedUpdateInput>
  }

  /**
   * AccessRule delete
   */
  export type AccessRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
    /**
     * Filter which AccessRule to delete.
     */
    where: AccessRuleWhereUniqueInput
  }

  /**
   * AccessRule deleteMany
   */
  export type AccessRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessRules to delete
     */
    where?: AccessRuleWhereInput
    /**
     * Limit how many AccessRules to delete.
     */
    limit?: number
  }

  /**
   * AccessRule without action
   */
  export type AccessRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessRule
     */
    select?: AccessRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessRule
     */
    omit?: AccessRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessRuleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    authId: 'authId',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamUserScalarFieldEnum: {
    teamId: 'teamId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type TeamUserScalarFieldEnum = (typeof TeamUserScalarFieldEnum)[keyof typeof TeamUserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    apiKey: 'apiKey'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const MCPServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    proxyUrl: 'proxyUrl',
    endpoint: 'endpoint',
    description: 'description',
    isActive: 'isActive',
    protocol: 'protocol',
    externalId: 'externalId',
    connectionConfig: 'connectionConfig',
    oauthClientId: 'oauthClientId',
    wellKnownOauthServer: 'wellKnownOauthServer',
    wellKnownProtectedResource: 'wellKnownProtectedResource',
    registrationEndpoint: 'registrationEndpoint',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MCPServerScalarFieldEnum = (typeof MCPServerScalarFieldEnum)[keyof typeof MCPServerScalarFieldEnum]


  export const AccessRuleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serverId: 'serverId',
    accessConfig: 'accessConfig',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccessRuleScalarFieldEnum = (typeof AccessRuleScalarFieldEnum)[keyof typeof AccessRuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'MCPServerType'
   */
  export type EnumMCPServerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MCPServerType'>
    


  /**
   * Reference to a field of type 'MCPServerType[]'
   */
  export type ListEnumMCPServerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MCPServerType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MCPProtocol'
   */
  export type EnumMCPProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MCPProtocol'>
    


  /**
   * Reference to a field of type 'MCPProtocol[]'
   */
  export type ListEnumMCPProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MCPProtocol[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teams?: TeamUserListRelationFilter
    accessRules?: AccessRuleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authId?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teams?: TeamUserOrderByRelationAggregateInput
    accessRules?: AccessRuleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teams?: TeamUserListRelationFilter
    accessRules?: AccessRuleListRelationFilter
  }, "id" | "authId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authId?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    authId?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamUserWhereInput = {
    AND?: TeamUserWhereInput | TeamUserWhereInput[]
    OR?: TeamUserWhereInput[]
    NOT?: TeamUserWhereInput | TeamUserWhereInput[]
    teamId?: StringFilter<"TeamUser"> | string
    userId?: StringFilter<"TeamUser"> | string
    role?: EnumRoleFilter<"TeamUser"> | $Enums.Role
    joinedAt?: DateTimeFilter<"TeamUser"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamUserOrderByWithRelationInput = {
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamUserWhereUniqueInput = Prisma.AtLeast<{
    teamId_userId?: TeamUserTeamIdUserIdCompoundUniqueInput
    AND?: TeamUserWhereInput | TeamUserWhereInput[]
    OR?: TeamUserWhereInput[]
    NOT?: TeamUserWhereInput | TeamUserWhereInput[]
    teamId?: StringFilter<"TeamUser"> | string
    userId?: StringFilter<"TeamUser"> | string
    role?: EnumRoleFilter<"TeamUser"> | $Enums.Role
    joinedAt?: DateTimeFilter<"TeamUser"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "teamId_userId">

  export type TeamUserOrderByWithAggregationInput = {
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: TeamUserCountOrderByAggregateInput
    _max?: TeamUserMaxOrderByAggregateInput
    _min?: TeamUserMinOrderByAggregateInput
  }

  export type TeamUserScalarWhereWithAggregatesInput = {
    AND?: TeamUserScalarWhereWithAggregatesInput | TeamUserScalarWhereWithAggregatesInput[]
    OR?: TeamUserScalarWhereWithAggregatesInput[]
    NOT?: TeamUserScalarWhereWithAggregatesInput | TeamUserScalarWhereWithAggregatesInput[]
    teamId?: StringWithAggregatesFilter<"TeamUser"> | string
    userId?: StringWithAggregatesFilter<"TeamUser"> | string
    role?: EnumRoleWithAggregatesFilter<"TeamUser"> | $Enums.Role
    joinedAt?: DateTimeWithAggregatesFilter<"TeamUser"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    orgId?: StringNullableFilter<"Team"> | string | null
    name?: StringFilter<"Team"> | string
    slug?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    apiKey?: StringFilter<"Team"> | string
    members?: TeamUserListRelationFilter
    mcpServers?: MCPServerListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKey?: SortOrder
    members?: TeamUserOrderByRelationAggregateInput
    mcpServers?: MCPServerOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId?: string
    slug?: string
    apiKey?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamUserListRelationFilter
    mcpServers?: MCPServerListRelationFilter
  }, "id" | "orgId" | "slug" | "apiKey">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKey?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    orgId?: StringNullableWithAggregatesFilter<"Team"> | string | null
    name?: StringWithAggregatesFilter<"Team"> | string
    slug?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    apiKey?: StringWithAggregatesFilter<"Team"> | string
  }

  export type MCPServerWhereInput = {
    AND?: MCPServerWhereInput | MCPServerWhereInput[]
    OR?: MCPServerWhereInput[]
    NOT?: MCPServerWhereInput | MCPServerWhereInput[]
    id?: StringFilter<"MCPServer"> | string
    name?: StringFilter<"MCPServer"> | string
    type?: EnumMCPServerTypeFilter<"MCPServer"> | $Enums.MCPServerType
    proxyUrl?: StringNullableFilter<"MCPServer"> | string | null
    endpoint?: StringFilter<"MCPServer"> | string
    description?: StringNullableFilter<"MCPServer"> | string | null
    isActive?: BoolFilter<"MCPServer"> | boolean
    protocol?: EnumMCPProtocolFilter<"MCPServer"> | $Enums.MCPProtocol
    externalId?: StringNullableFilter<"MCPServer"> | string | null
    connectionConfig?: JsonNullableFilter<"MCPServer">
    oauthClientId?: StringNullableFilter<"MCPServer"> | string | null
    wellKnownOauthServer?: JsonNullableFilter<"MCPServer">
    wellKnownProtectedResource?: JsonNullableFilter<"MCPServer">
    registrationEndpoint?: StringNullableFilter<"MCPServer"> | string | null
    teamId?: StringFilter<"MCPServer"> | string
    createdAt?: DateTimeFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeFilter<"MCPServer"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    rules?: AccessRuleListRelationFilter
  }

  export type MCPServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    proxyUrl?: SortOrderInput | SortOrder
    endpoint?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    protocol?: SortOrder
    externalId?: SortOrderInput | SortOrder
    connectionConfig?: SortOrderInput | SortOrder
    oauthClientId?: SortOrderInput | SortOrder
    wellKnownOauthServer?: SortOrderInput | SortOrder
    wellKnownProtectedResource?: SortOrderInput | SortOrder
    registrationEndpoint?: SortOrderInput | SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    rules?: AccessRuleOrderByRelationAggregateInput
  }

  export type MCPServerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    oauthClientId?: string
    teamId_endpoint?: MCPServerTeamIdEndpointCompoundUniqueInput
    AND?: MCPServerWhereInput | MCPServerWhereInput[]
    OR?: MCPServerWhereInput[]
    NOT?: MCPServerWhereInput | MCPServerWhereInput[]
    name?: StringFilter<"MCPServer"> | string
    type?: EnumMCPServerTypeFilter<"MCPServer"> | $Enums.MCPServerType
    proxyUrl?: StringNullableFilter<"MCPServer"> | string | null
    endpoint?: StringFilter<"MCPServer"> | string
    description?: StringNullableFilter<"MCPServer"> | string | null
    isActive?: BoolFilter<"MCPServer"> | boolean
    protocol?: EnumMCPProtocolFilter<"MCPServer"> | $Enums.MCPProtocol
    externalId?: StringNullableFilter<"MCPServer"> | string | null
    connectionConfig?: JsonNullableFilter<"MCPServer">
    wellKnownOauthServer?: JsonNullableFilter<"MCPServer">
    wellKnownProtectedResource?: JsonNullableFilter<"MCPServer">
    registrationEndpoint?: StringNullableFilter<"MCPServer"> | string | null
    teamId?: StringFilter<"MCPServer"> | string
    createdAt?: DateTimeFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeFilter<"MCPServer"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    rules?: AccessRuleListRelationFilter
  }, "id" | "oauthClientId" | "teamId_endpoint">

  export type MCPServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    proxyUrl?: SortOrderInput | SortOrder
    endpoint?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    protocol?: SortOrder
    externalId?: SortOrderInput | SortOrder
    connectionConfig?: SortOrderInput | SortOrder
    oauthClientId?: SortOrderInput | SortOrder
    wellKnownOauthServer?: SortOrderInput | SortOrder
    wellKnownProtectedResource?: SortOrderInput | SortOrder
    registrationEndpoint?: SortOrderInput | SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MCPServerCountOrderByAggregateInput
    _max?: MCPServerMaxOrderByAggregateInput
    _min?: MCPServerMinOrderByAggregateInput
  }

  export type MCPServerScalarWhereWithAggregatesInput = {
    AND?: MCPServerScalarWhereWithAggregatesInput | MCPServerScalarWhereWithAggregatesInput[]
    OR?: MCPServerScalarWhereWithAggregatesInput[]
    NOT?: MCPServerScalarWhereWithAggregatesInput | MCPServerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MCPServer"> | string
    name?: StringWithAggregatesFilter<"MCPServer"> | string
    type?: EnumMCPServerTypeWithAggregatesFilter<"MCPServer"> | $Enums.MCPServerType
    proxyUrl?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    endpoint?: StringWithAggregatesFilter<"MCPServer"> | string
    description?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    isActive?: BoolWithAggregatesFilter<"MCPServer"> | boolean
    protocol?: EnumMCPProtocolWithAggregatesFilter<"MCPServer"> | $Enums.MCPProtocol
    externalId?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    connectionConfig?: JsonNullableWithAggregatesFilter<"MCPServer">
    oauthClientId?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    wellKnownOauthServer?: JsonNullableWithAggregatesFilter<"MCPServer">
    wellKnownProtectedResource?: JsonNullableWithAggregatesFilter<"MCPServer">
    registrationEndpoint?: StringNullableWithAggregatesFilter<"MCPServer"> | string | null
    teamId?: StringWithAggregatesFilter<"MCPServer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MCPServer"> | Date | string
  }

  export type AccessRuleWhereInput = {
    AND?: AccessRuleWhereInput | AccessRuleWhereInput[]
    OR?: AccessRuleWhereInput[]
    NOT?: AccessRuleWhereInput | AccessRuleWhereInput[]
    id?: StringFilter<"AccessRule"> | string
    userId?: StringFilter<"AccessRule"> | string
    serverId?: StringFilter<"AccessRule"> | string
    accessConfig?: JsonFilter<"AccessRule">
    description?: StringNullableFilter<"AccessRule"> | string | null
    createdAt?: DateTimeFilter<"AccessRule"> | Date | string
    updatedAt?: DateTimeFilter<"AccessRule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    server?: XOR<MCPServerScalarRelationFilter, MCPServerWhereInput>
  }

  export type AccessRuleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serverId?: SortOrder
    accessConfig?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    server?: MCPServerOrderByWithRelationInput
  }

  export type AccessRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_serverId?: AccessRuleUserIdServerIdCompoundUniqueInput
    AND?: AccessRuleWhereInput | AccessRuleWhereInput[]
    OR?: AccessRuleWhereInput[]
    NOT?: AccessRuleWhereInput | AccessRuleWhereInput[]
    userId?: StringFilter<"AccessRule"> | string
    serverId?: StringFilter<"AccessRule"> | string
    accessConfig?: JsonFilter<"AccessRule">
    description?: StringNullableFilter<"AccessRule"> | string | null
    createdAt?: DateTimeFilter<"AccessRule"> | Date | string
    updatedAt?: DateTimeFilter<"AccessRule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    server?: XOR<MCPServerScalarRelationFilter, MCPServerWhereInput>
  }, "id" | "userId_serverId">

  export type AccessRuleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serverId?: SortOrder
    accessConfig?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccessRuleCountOrderByAggregateInput
    _max?: AccessRuleMaxOrderByAggregateInput
    _min?: AccessRuleMinOrderByAggregateInput
  }

  export type AccessRuleScalarWhereWithAggregatesInput = {
    AND?: AccessRuleScalarWhereWithAggregatesInput | AccessRuleScalarWhereWithAggregatesInput[]
    OR?: AccessRuleScalarWhereWithAggregatesInput[]
    NOT?: AccessRuleScalarWhereWithAggregatesInput | AccessRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessRule"> | string
    userId?: StringWithAggregatesFilter<"AccessRule"> | string
    serverId?: StringWithAggregatesFilter<"AccessRule"> | string
    accessConfig?: JsonWithAggregatesFilter<"AccessRule">
    description?: StringNullableWithAggregatesFilter<"AccessRule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccessRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccessRule"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUserCreateNestedManyWithoutUserInput
    accessRules?: AccessRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUserUncheckedCreateNestedManyWithoutUserInput
    accessRules?: AccessRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUserUpdateManyWithoutUserNestedInput
    accessRules?: AccessRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUserUncheckedUpdateManyWithoutUserNestedInput
    accessRules?: AccessRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserCreateInput = {
    role?: $Enums.Role
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type TeamUserUncheckedCreateInput = {
    teamId: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type TeamUserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUserUncheckedUpdateInput = {
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserCreateManyInput = {
    teamId: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type TeamUserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserUncheckedUpdateManyInput = {
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
    members?: TeamUserCreateNestedManyWithoutTeamInput
    mcpServers?: MCPServerCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
    members?: TeamUserUncheckedCreateNestedManyWithoutTeamInput
    mcpServers?: MCPServerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
    members?: TeamUserUpdateManyWithoutTeamNestedInput
    mcpServers?: MCPServerUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
    members?: TeamUserUncheckedUpdateManyWithoutTeamNestedInput
    mcpServers?: MCPServerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type MCPServerCreateInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutMcpServersInput
    rules?: AccessRuleCreateNestedManyWithoutServerInput
  }

  export type MCPServerUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: AccessRuleUncheckedCreateNestedManyWithoutServerInput
  }

  export type MCPServerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMcpServersNestedInput
    rules?: AccessRuleUpdateManyWithoutServerNestedInput
  }

  export type MCPServerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: AccessRuleUncheckedUpdateManyWithoutServerNestedInput
  }

  export type MCPServerCreateManyInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MCPServerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCPServerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleCreateInput = {
    id?: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccessRulesInput
    server: MCPServerCreateNestedOneWithoutRulesInput
  }

  export type AccessRuleUncheckedCreateInput = {
    id?: string
    userId: string
    serverId: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessRulesNestedInput
    server?: MCPServerUpdateOneRequiredWithoutRulesNestedInput
  }

  export type AccessRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleCreateManyInput = {
    id?: string
    userId: string
    serverId: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeamUserListRelationFilter = {
    every?: TeamUserWhereInput
    some?: TeamUserWhereInput
    none?: TeamUserWhereInput
  }

  export type AccessRuleListRelationFilter = {
    every?: AccessRuleWhereInput
    some?: AccessRuleWhereInput
    none?: AccessRuleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamUserTeamIdUserIdCompoundUniqueInput = {
    teamId: string
    userId: string
  }

  export type TeamUserCountOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamUserMaxOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamUserMinOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type MCPServerListRelationFilter = {
    every?: MCPServerWhereInput
    some?: MCPServerWhereInput
    none?: MCPServerWhereInput
  }

  export type MCPServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKey?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKey?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiKey?: SortOrder
  }

  export type EnumMCPServerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPServerType | EnumMCPServerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPServerTypeFilter<$PrismaModel> | $Enums.MCPServerType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumMCPProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPProtocol | EnumMCPProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPProtocolFilter<$PrismaModel> | $Enums.MCPProtocol
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MCPServerTeamIdEndpointCompoundUniqueInput = {
    teamId: string
    endpoint: string
  }

  export type MCPServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    proxyUrl?: SortOrder
    endpoint?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    protocol?: SortOrder
    externalId?: SortOrder
    connectionConfig?: SortOrder
    oauthClientId?: SortOrder
    wellKnownOauthServer?: SortOrder
    wellKnownProtectedResource?: SortOrder
    registrationEndpoint?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MCPServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    proxyUrl?: SortOrder
    endpoint?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    protocol?: SortOrder
    externalId?: SortOrder
    oauthClientId?: SortOrder
    registrationEndpoint?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MCPServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    proxyUrl?: SortOrder
    endpoint?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    protocol?: SortOrder
    externalId?: SortOrder
    oauthClientId?: SortOrder
    registrationEndpoint?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMCPServerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPServerType | EnumMCPServerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPServerTypeWithAggregatesFilter<$PrismaModel> | $Enums.MCPServerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMCPServerTypeFilter<$PrismaModel>
    _max?: NestedEnumMCPServerTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMCPProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPProtocol | EnumMCPProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPProtocolWithAggregatesFilter<$PrismaModel> | $Enums.MCPProtocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMCPProtocolFilter<$PrismaModel>
    _max?: NestedEnumMCPProtocolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MCPServerScalarRelationFilter = {
    is?: MCPServerWhereInput
    isNot?: MCPServerWhereInput
  }

  export type AccessRuleUserIdServerIdCompoundUniqueInput = {
    userId: string
    serverId: string
  }

  export type AccessRuleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serverId?: SortOrder
    accessConfig?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serverId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccessRuleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serverId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TeamUserCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamUserCreateWithoutUserInput, TeamUserUncheckedCreateWithoutUserInput> | TeamUserCreateWithoutUserInput[] | TeamUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutUserInput | TeamUserCreateOrConnectWithoutUserInput[]
    createMany?: TeamUserCreateManyUserInputEnvelope
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
  }

  export type AccessRuleCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessRuleCreateWithoutUserInput, AccessRuleUncheckedCreateWithoutUserInput> | AccessRuleCreateWithoutUserInput[] | AccessRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutUserInput | AccessRuleCreateOrConnectWithoutUserInput[]
    createMany?: AccessRuleCreateManyUserInputEnvelope
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
  }

  export type TeamUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamUserCreateWithoutUserInput, TeamUserUncheckedCreateWithoutUserInput> | TeamUserCreateWithoutUserInput[] | TeamUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutUserInput | TeamUserCreateOrConnectWithoutUserInput[]
    createMany?: TeamUserCreateManyUserInputEnvelope
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
  }

  export type AccessRuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessRuleCreateWithoutUserInput, AccessRuleUncheckedCreateWithoutUserInput> | AccessRuleCreateWithoutUserInput[] | AccessRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutUserInput | AccessRuleCreateOrConnectWithoutUserInput[]
    createMany?: AccessRuleCreateManyUserInputEnvelope
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamUserCreateWithoutUserInput, TeamUserUncheckedCreateWithoutUserInput> | TeamUserCreateWithoutUserInput[] | TeamUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutUserInput | TeamUserCreateOrConnectWithoutUserInput[]
    upsert?: TeamUserUpsertWithWhereUniqueWithoutUserInput | TeamUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamUserCreateManyUserInputEnvelope
    set?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    disconnect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    delete?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    update?: TeamUserUpdateWithWhereUniqueWithoutUserInput | TeamUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamUserUpdateManyWithWhereWithoutUserInput | TeamUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamUserScalarWhereInput | TeamUserScalarWhereInput[]
  }

  export type AccessRuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessRuleCreateWithoutUserInput, AccessRuleUncheckedCreateWithoutUserInput> | AccessRuleCreateWithoutUserInput[] | AccessRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutUserInput | AccessRuleCreateOrConnectWithoutUserInput[]
    upsert?: AccessRuleUpsertWithWhereUniqueWithoutUserInput | AccessRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessRuleCreateManyUserInputEnvelope
    set?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    disconnect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    delete?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    update?: AccessRuleUpdateWithWhereUniqueWithoutUserInput | AccessRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessRuleUpdateManyWithWhereWithoutUserInput | AccessRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessRuleScalarWhereInput | AccessRuleScalarWhereInput[]
  }

  export type TeamUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamUserCreateWithoutUserInput, TeamUserUncheckedCreateWithoutUserInput> | TeamUserCreateWithoutUserInput[] | TeamUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutUserInput | TeamUserCreateOrConnectWithoutUserInput[]
    upsert?: TeamUserUpsertWithWhereUniqueWithoutUserInput | TeamUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamUserCreateManyUserInputEnvelope
    set?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    disconnect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    delete?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    update?: TeamUserUpdateWithWhereUniqueWithoutUserInput | TeamUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamUserUpdateManyWithWhereWithoutUserInput | TeamUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamUserScalarWhereInput | TeamUserScalarWhereInput[]
  }

  export type AccessRuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessRuleCreateWithoutUserInput, AccessRuleUncheckedCreateWithoutUserInput> | AccessRuleCreateWithoutUserInput[] | AccessRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutUserInput | AccessRuleCreateOrConnectWithoutUserInput[]
    upsert?: AccessRuleUpsertWithWhereUniqueWithoutUserInput | AccessRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessRuleCreateManyUserInputEnvelope
    set?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    disconnect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    delete?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    update?: AccessRuleUpdateWithWhereUniqueWithoutUserInput | AccessRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessRuleUpdateManyWithWhereWithoutUserInput | AccessRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessRuleScalarWhereInput | AccessRuleScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamUserCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamUserCreateWithoutTeamInput, TeamUserUncheckedCreateWithoutTeamInput> | TeamUserCreateWithoutTeamInput[] | TeamUserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutTeamInput | TeamUserCreateOrConnectWithoutTeamInput[]
    createMany?: TeamUserCreateManyTeamInputEnvelope
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
  }

  export type MCPServerCreateNestedManyWithoutTeamInput = {
    create?: XOR<MCPServerCreateWithoutTeamInput, MCPServerUncheckedCreateWithoutTeamInput> | MCPServerCreateWithoutTeamInput[] | MCPServerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MCPServerCreateOrConnectWithoutTeamInput | MCPServerCreateOrConnectWithoutTeamInput[]
    createMany?: MCPServerCreateManyTeamInputEnvelope
    connect?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
  }

  export type TeamUserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamUserCreateWithoutTeamInput, TeamUserUncheckedCreateWithoutTeamInput> | TeamUserCreateWithoutTeamInput[] | TeamUserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutTeamInput | TeamUserCreateOrConnectWithoutTeamInput[]
    createMany?: TeamUserCreateManyTeamInputEnvelope
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
  }

  export type MCPServerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MCPServerCreateWithoutTeamInput, MCPServerUncheckedCreateWithoutTeamInput> | MCPServerCreateWithoutTeamInput[] | MCPServerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MCPServerCreateOrConnectWithoutTeamInput | MCPServerCreateOrConnectWithoutTeamInput[]
    createMany?: MCPServerCreateManyTeamInputEnvelope
    connect?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
  }

  export type TeamUserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamUserCreateWithoutTeamInput, TeamUserUncheckedCreateWithoutTeamInput> | TeamUserCreateWithoutTeamInput[] | TeamUserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutTeamInput | TeamUserCreateOrConnectWithoutTeamInput[]
    upsert?: TeamUserUpsertWithWhereUniqueWithoutTeamInput | TeamUserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamUserCreateManyTeamInputEnvelope
    set?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    disconnect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    delete?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    update?: TeamUserUpdateWithWhereUniqueWithoutTeamInput | TeamUserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamUserUpdateManyWithWhereWithoutTeamInput | TeamUserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamUserScalarWhereInput | TeamUserScalarWhereInput[]
  }

  export type MCPServerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MCPServerCreateWithoutTeamInput, MCPServerUncheckedCreateWithoutTeamInput> | MCPServerCreateWithoutTeamInput[] | MCPServerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MCPServerCreateOrConnectWithoutTeamInput | MCPServerCreateOrConnectWithoutTeamInput[]
    upsert?: MCPServerUpsertWithWhereUniqueWithoutTeamInput | MCPServerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MCPServerCreateManyTeamInputEnvelope
    set?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    disconnect?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    delete?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    connect?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    update?: MCPServerUpdateWithWhereUniqueWithoutTeamInput | MCPServerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MCPServerUpdateManyWithWhereWithoutTeamInput | MCPServerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MCPServerScalarWhereInput | MCPServerScalarWhereInput[]
  }

  export type TeamUserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamUserCreateWithoutTeamInput, TeamUserUncheckedCreateWithoutTeamInput> | TeamUserCreateWithoutTeamInput[] | TeamUserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamUserCreateOrConnectWithoutTeamInput | TeamUserCreateOrConnectWithoutTeamInput[]
    upsert?: TeamUserUpsertWithWhereUniqueWithoutTeamInput | TeamUserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamUserCreateManyTeamInputEnvelope
    set?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    disconnect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    delete?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    connect?: TeamUserWhereUniqueInput | TeamUserWhereUniqueInput[]
    update?: TeamUserUpdateWithWhereUniqueWithoutTeamInput | TeamUserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamUserUpdateManyWithWhereWithoutTeamInput | TeamUserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamUserScalarWhereInput | TeamUserScalarWhereInput[]
  }

  export type MCPServerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MCPServerCreateWithoutTeamInput, MCPServerUncheckedCreateWithoutTeamInput> | MCPServerCreateWithoutTeamInput[] | MCPServerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MCPServerCreateOrConnectWithoutTeamInput | MCPServerCreateOrConnectWithoutTeamInput[]
    upsert?: MCPServerUpsertWithWhereUniqueWithoutTeamInput | MCPServerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MCPServerCreateManyTeamInputEnvelope
    set?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    disconnect?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    delete?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    connect?: MCPServerWhereUniqueInput | MCPServerWhereUniqueInput[]
    update?: MCPServerUpdateWithWhereUniqueWithoutTeamInput | MCPServerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MCPServerUpdateManyWithWhereWithoutTeamInput | MCPServerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MCPServerScalarWhereInput | MCPServerScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMcpServersInput = {
    create?: XOR<TeamCreateWithoutMcpServersInput, TeamUncheckedCreateWithoutMcpServersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMcpServersInput
    connect?: TeamWhereUniqueInput
  }

  export type AccessRuleCreateNestedManyWithoutServerInput = {
    create?: XOR<AccessRuleCreateWithoutServerInput, AccessRuleUncheckedCreateWithoutServerInput> | AccessRuleCreateWithoutServerInput[] | AccessRuleUncheckedCreateWithoutServerInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutServerInput | AccessRuleCreateOrConnectWithoutServerInput[]
    createMany?: AccessRuleCreateManyServerInputEnvelope
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
  }

  export type AccessRuleUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<AccessRuleCreateWithoutServerInput, AccessRuleUncheckedCreateWithoutServerInput> | AccessRuleCreateWithoutServerInput[] | AccessRuleUncheckedCreateWithoutServerInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutServerInput | AccessRuleCreateOrConnectWithoutServerInput[]
    createMany?: AccessRuleCreateManyServerInputEnvelope
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
  }

  export type EnumMCPServerTypeFieldUpdateOperationsInput = {
    set?: $Enums.MCPServerType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumMCPProtocolFieldUpdateOperationsInput = {
    set?: $Enums.MCPProtocol
  }

  export type TeamUpdateOneRequiredWithoutMcpServersNestedInput = {
    create?: XOR<TeamCreateWithoutMcpServersInput, TeamUncheckedCreateWithoutMcpServersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMcpServersInput
    upsert?: TeamUpsertWithoutMcpServersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMcpServersInput, TeamUpdateWithoutMcpServersInput>, TeamUncheckedUpdateWithoutMcpServersInput>
  }

  export type AccessRuleUpdateManyWithoutServerNestedInput = {
    create?: XOR<AccessRuleCreateWithoutServerInput, AccessRuleUncheckedCreateWithoutServerInput> | AccessRuleCreateWithoutServerInput[] | AccessRuleUncheckedCreateWithoutServerInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutServerInput | AccessRuleCreateOrConnectWithoutServerInput[]
    upsert?: AccessRuleUpsertWithWhereUniqueWithoutServerInput | AccessRuleUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: AccessRuleCreateManyServerInputEnvelope
    set?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    disconnect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    delete?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    update?: AccessRuleUpdateWithWhereUniqueWithoutServerInput | AccessRuleUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: AccessRuleUpdateManyWithWhereWithoutServerInput | AccessRuleUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: AccessRuleScalarWhereInput | AccessRuleScalarWhereInput[]
  }

  export type AccessRuleUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<AccessRuleCreateWithoutServerInput, AccessRuleUncheckedCreateWithoutServerInput> | AccessRuleCreateWithoutServerInput[] | AccessRuleUncheckedCreateWithoutServerInput[]
    connectOrCreate?: AccessRuleCreateOrConnectWithoutServerInput | AccessRuleCreateOrConnectWithoutServerInput[]
    upsert?: AccessRuleUpsertWithWhereUniqueWithoutServerInput | AccessRuleUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: AccessRuleCreateManyServerInputEnvelope
    set?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    disconnect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    delete?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    connect?: AccessRuleWhereUniqueInput | AccessRuleWhereUniqueInput[]
    update?: AccessRuleUpdateWithWhereUniqueWithoutServerInput | AccessRuleUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: AccessRuleUpdateManyWithWhereWithoutServerInput | AccessRuleUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: AccessRuleScalarWhereInput | AccessRuleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccessRulesInput = {
    create?: XOR<UserCreateWithoutAccessRulesInput, UserUncheckedCreateWithoutAccessRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessRulesInput
    connect?: UserWhereUniqueInput
  }

  export type MCPServerCreateNestedOneWithoutRulesInput = {
    create?: XOR<MCPServerCreateWithoutRulesInput, MCPServerUncheckedCreateWithoutRulesInput>
    connectOrCreate?: MCPServerCreateOrConnectWithoutRulesInput
    connect?: MCPServerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccessRulesNestedInput = {
    create?: XOR<UserCreateWithoutAccessRulesInput, UserUncheckedCreateWithoutAccessRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessRulesInput
    upsert?: UserUpsertWithoutAccessRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessRulesInput, UserUpdateWithoutAccessRulesInput>, UserUncheckedUpdateWithoutAccessRulesInput>
  }

  export type MCPServerUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<MCPServerCreateWithoutRulesInput, MCPServerUncheckedCreateWithoutRulesInput>
    connectOrCreate?: MCPServerCreateOrConnectWithoutRulesInput
    upsert?: MCPServerUpsertWithoutRulesInput
    connect?: MCPServerWhereUniqueInput
    update?: XOR<XOR<MCPServerUpdateToOneWithWhereWithoutRulesInput, MCPServerUpdateWithoutRulesInput>, MCPServerUncheckedUpdateWithoutRulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumMCPServerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPServerType | EnumMCPServerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPServerTypeFilter<$PrismaModel> | $Enums.MCPServerType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMCPProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPProtocol | EnumMCPProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPProtocolFilter<$PrismaModel> | $Enums.MCPProtocol
  }

  export type NestedEnumMCPServerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPServerType | EnumMCPServerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPServerType[] | ListEnumMCPServerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPServerTypeWithAggregatesFilter<$PrismaModel> | $Enums.MCPServerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMCPServerTypeFilter<$PrismaModel>
    _max?: NestedEnumMCPServerTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMCPProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MCPProtocol | EnumMCPProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.MCPProtocol[] | ListEnumMCPProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumMCPProtocolWithAggregatesFilter<$PrismaModel> | $Enums.MCPProtocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMCPProtocolFilter<$PrismaModel>
    _max?: NestedEnumMCPProtocolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TeamUserCreateWithoutUserInput = {
    role?: $Enums.Role
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamUserUncheckedCreateWithoutUserInput = {
    teamId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type TeamUserCreateOrConnectWithoutUserInput = {
    where: TeamUserWhereUniqueInput
    create: XOR<TeamUserCreateWithoutUserInput, TeamUserUncheckedCreateWithoutUserInput>
  }

  export type TeamUserCreateManyUserInputEnvelope = {
    data: TeamUserCreateManyUserInput | TeamUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccessRuleCreateWithoutUserInput = {
    id?: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    server: MCPServerCreateNestedOneWithoutRulesInput
  }

  export type AccessRuleUncheckedCreateWithoutUserInput = {
    id?: string
    serverId: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessRuleCreateOrConnectWithoutUserInput = {
    where: AccessRuleWhereUniqueInput
    create: XOR<AccessRuleCreateWithoutUserInput, AccessRuleUncheckedCreateWithoutUserInput>
  }

  export type AccessRuleCreateManyUserInputEnvelope = {
    data: AccessRuleCreateManyUserInput | AccessRuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamUserUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamUserWhereUniqueInput
    update: XOR<TeamUserUpdateWithoutUserInput, TeamUserUncheckedUpdateWithoutUserInput>
    create: XOR<TeamUserCreateWithoutUserInput, TeamUserUncheckedCreateWithoutUserInput>
  }

  export type TeamUserUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamUserWhereUniqueInput
    data: XOR<TeamUserUpdateWithoutUserInput, TeamUserUncheckedUpdateWithoutUserInput>
  }

  export type TeamUserUpdateManyWithWhereWithoutUserInput = {
    where: TeamUserScalarWhereInput
    data: XOR<TeamUserUpdateManyMutationInput, TeamUserUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamUserScalarWhereInput = {
    AND?: TeamUserScalarWhereInput | TeamUserScalarWhereInput[]
    OR?: TeamUserScalarWhereInput[]
    NOT?: TeamUserScalarWhereInput | TeamUserScalarWhereInput[]
    teamId?: StringFilter<"TeamUser"> | string
    userId?: StringFilter<"TeamUser"> | string
    role?: EnumRoleFilter<"TeamUser"> | $Enums.Role
    joinedAt?: DateTimeFilter<"TeamUser"> | Date | string
  }

  export type AccessRuleUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessRuleWhereUniqueInput
    update: XOR<AccessRuleUpdateWithoutUserInput, AccessRuleUncheckedUpdateWithoutUserInput>
    create: XOR<AccessRuleCreateWithoutUserInput, AccessRuleUncheckedCreateWithoutUserInput>
  }

  export type AccessRuleUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessRuleWhereUniqueInput
    data: XOR<AccessRuleUpdateWithoutUserInput, AccessRuleUncheckedUpdateWithoutUserInput>
  }

  export type AccessRuleUpdateManyWithWhereWithoutUserInput = {
    where: AccessRuleScalarWhereInput
    data: XOR<AccessRuleUpdateManyMutationInput, AccessRuleUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessRuleScalarWhereInput = {
    AND?: AccessRuleScalarWhereInput | AccessRuleScalarWhereInput[]
    OR?: AccessRuleScalarWhereInput[]
    NOT?: AccessRuleScalarWhereInput | AccessRuleScalarWhereInput[]
    id?: StringFilter<"AccessRule"> | string
    userId?: StringFilter<"AccessRule"> | string
    serverId?: StringFilter<"AccessRule"> | string
    accessConfig?: JsonFilter<"AccessRule">
    description?: StringNullableFilter<"AccessRule"> | string | null
    createdAt?: DateTimeFilter<"AccessRule"> | Date | string
    updatedAt?: DateTimeFilter<"AccessRule"> | Date | string
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
    mcpServers?: MCPServerCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
    mcpServers?: MCPServerUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessRules?: AccessRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessRules?: AccessRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
    mcpServers?: MCPServerUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
    mcpServers?: MCPServerUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessRules?: AccessRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessRules?: AccessRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUserCreateWithoutTeamInput = {
    role?: $Enums.Role
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type TeamUserUncheckedCreateWithoutTeamInput = {
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type TeamUserCreateOrConnectWithoutTeamInput = {
    where: TeamUserWhereUniqueInput
    create: XOR<TeamUserCreateWithoutTeamInput, TeamUserUncheckedCreateWithoutTeamInput>
  }

  export type TeamUserCreateManyTeamInputEnvelope = {
    data: TeamUserCreateManyTeamInput | TeamUserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MCPServerCreateWithoutTeamInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: AccessRuleCreateNestedManyWithoutServerInput
  }

  export type MCPServerUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: AccessRuleUncheckedCreateNestedManyWithoutServerInput
  }

  export type MCPServerCreateOrConnectWithoutTeamInput = {
    where: MCPServerWhereUniqueInput
    create: XOR<MCPServerCreateWithoutTeamInput, MCPServerUncheckedCreateWithoutTeamInput>
  }

  export type MCPServerCreateManyTeamInputEnvelope = {
    data: MCPServerCreateManyTeamInput | MCPServerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamUserUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamUserWhereUniqueInput
    update: XOR<TeamUserUpdateWithoutTeamInput, TeamUserUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamUserCreateWithoutTeamInput, TeamUserUncheckedCreateWithoutTeamInput>
  }

  export type TeamUserUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamUserWhereUniqueInput
    data: XOR<TeamUserUpdateWithoutTeamInput, TeamUserUncheckedUpdateWithoutTeamInput>
  }

  export type TeamUserUpdateManyWithWhereWithoutTeamInput = {
    where: TeamUserScalarWhereInput
    data: XOR<TeamUserUpdateManyMutationInput, TeamUserUncheckedUpdateManyWithoutTeamInput>
  }

  export type MCPServerUpsertWithWhereUniqueWithoutTeamInput = {
    where: MCPServerWhereUniqueInput
    update: XOR<MCPServerUpdateWithoutTeamInput, MCPServerUncheckedUpdateWithoutTeamInput>
    create: XOR<MCPServerCreateWithoutTeamInput, MCPServerUncheckedCreateWithoutTeamInput>
  }

  export type MCPServerUpdateWithWhereUniqueWithoutTeamInput = {
    where: MCPServerWhereUniqueInput
    data: XOR<MCPServerUpdateWithoutTeamInput, MCPServerUncheckedUpdateWithoutTeamInput>
  }

  export type MCPServerUpdateManyWithWhereWithoutTeamInput = {
    where: MCPServerScalarWhereInput
    data: XOR<MCPServerUpdateManyMutationInput, MCPServerUncheckedUpdateManyWithoutTeamInput>
  }

  export type MCPServerScalarWhereInput = {
    AND?: MCPServerScalarWhereInput | MCPServerScalarWhereInput[]
    OR?: MCPServerScalarWhereInput[]
    NOT?: MCPServerScalarWhereInput | MCPServerScalarWhereInput[]
    id?: StringFilter<"MCPServer"> | string
    name?: StringFilter<"MCPServer"> | string
    type?: EnumMCPServerTypeFilter<"MCPServer"> | $Enums.MCPServerType
    proxyUrl?: StringNullableFilter<"MCPServer"> | string | null
    endpoint?: StringFilter<"MCPServer"> | string
    description?: StringNullableFilter<"MCPServer"> | string | null
    isActive?: BoolFilter<"MCPServer"> | boolean
    protocol?: EnumMCPProtocolFilter<"MCPServer"> | $Enums.MCPProtocol
    externalId?: StringNullableFilter<"MCPServer"> | string | null
    connectionConfig?: JsonNullableFilter<"MCPServer">
    oauthClientId?: StringNullableFilter<"MCPServer"> | string | null
    wellKnownOauthServer?: JsonNullableFilter<"MCPServer">
    wellKnownProtectedResource?: JsonNullableFilter<"MCPServer">
    registrationEndpoint?: StringNullableFilter<"MCPServer"> | string | null
    teamId?: StringFilter<"MCPServer"> | string
    createdAt?: DateTimeFilter<"MCPServer"> | Date | string
    updatedAt?: DateTimeFilter<"MCPServer"> | Date | string
  }

  export type TeamCreateWithoutMcpServersInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
    members?: TeamUserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMcpServersInput = {
    id?: string
    orgId?: string | null
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey: string
    members?: TeamUserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMcpServersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMcpServersInput, TeamUncheckedCreateWithoutMcpServersInput>
  }

  export type AccessRuleCreateWithoutServerInput = {
    id?: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccessRulesInput
  }

  export type AccessRuleUncheckedCreateWithoutServerInput = {
    id?: string
    userId: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessRuleCreateOrConnectWithoutServerInput = {
    where: AccessRuleWhereUniqueInput
    create: XOR<AccessRuleCreateWithoutServerInput, AccessRuleUncheckedCreateWithoutServerInput>
  }

  export type AccessRuleCreateManyServerInputEnvelope = {
    data: AccessRuleCreateManyServerInput | AccessRuleCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutMcpServersInput = {
    update: XOR<TeamUpdateWithoutMcpServersInput, TeamUncheckedUpdateWithoutMcpServersInput>
    create: XOR<TeamCreateWithoutMcpServersInput, TeamUncheckedCreateWithoutMcpServersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMcpServersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMcpServersInput, TeamUncheckedUpdateWithoutMcpServersInput>
  }

  export type TeamUpdateWithoutMcpServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
    members?: TeamUserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMcpServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: StringFieldUpdateOperationsInput | string
    members?: TeamUserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type AccessRuleUpsertWithWhereUniqueWithoutServerInput = {
    where: AccessRuleWhereUniqueInput
    update: XOR<AccessRuleUpdateWithoutServerInput, AccessRuleUncheckedUpdateWithoutServerInput>
    create: XOR<AccessRuleCreateWithoutServerInput, AccessRuleUncheckedCreateWithoutServerInput>
  }

  export type AccessRuleUpdateWithWhereUniqueWithoutServerInput = {
    where: AccessRuleWhereUniqueInput
    data: XOR<AccessRuleUpdateWithoutServerInput, AccessRuleUncheckedUpdateWithoutServerInput>
  }

  export type AccessRuleUpdateManyWithWhereWithoutServerInput = {
    where: AccessRuleScalarWhereInput
    data: XOR<AccessRuleUpdateManyMutationInput, AccessRuleUncheckedUpdateManyWithoutServerInput>
  }

  export type UserCreateWithoutAccessRulesInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessRulesInput = {
    id?: string
    authId?: string | null
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessRulesInput, UserUncheckedCreateWithoutAccessRulesInput>
  }

  export type MCPServerCreateWithoutRulesInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutMcpServersInput
  }

  export type MCPServerUncheckedCreateWithoutRulesInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MCPServerCreateOrConnectWithoutRulesInput = {
    where: MCPServerWhereUniqueInput
    create: XOR<MCPServerCreateWithoutRulesInput, MCPServerUncheckedCreateWithoutRulesInput>
  }

  export type UserUpsertWithoutAccessRulesInput = {
    update: XOR<UserUpdateWithoutAccessRulesInput, UserUncheckedUpdateWithoutAccessRulesInput>
    create: XOR<UserCreateWithoutAccessRulesInput, UserUncheckedCreateWithoutAccessRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessRulesInput, UserUncheckedUpdateWithoutAccessRulesInput>
  }

  export type UserUpdateWithoutAccessRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MCPServerUpsertWithoutRulesInput = {
    update: XOR<MCPServerUpdateWithoutRulesInput, MCPServerUncheckedUpdateWithoutRulesInput>
    create: XOR<MCPServerCreateWithoutRulesInput, MCPServerUncheckedCreateWithoutRulesInput>
    where?: MCPServerWhereInput
  }

  export type MCPServerUpdateToOneWithWhereWithoutRulesInput = {
    where?: MCPServerWhereInput
    data: XOR<MCPServerUpdateWithoutRulesInput, MCPServerUncheckedUpdateWithoutRulesInput>
  }

  export type MCPServerUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMcpServersNestedInput
  }

  export type MCPServerUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserCreateManyUserInput = {
    teamId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type AccessRuleCreateManyUserInput = {
    id?: string
    serverId: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUserUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamUserUncheckedUpdateWithoutUserInput = {
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserUncheckedUpdateManyWithoutUserInput = {
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: MCPServerUpdateOneRequiredWithoutRulesNestedInput
  }

  export type AccessRuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserCreateManyTeamInput = {
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type MCPServerCreateManyTeamInput = {
    id?: string
    name: string
    type: $Enums.MCPServerType
    proxyUrl?: string | null
    endpoint: string
    description?: string | null
    isActive?: boolean
    protocol?: $Enums.MCPProtocol
    externalId?: string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUserUpdateWithoutTeamInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUserUncheckedUpdateWithoutTeamInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUserUncheckedUpdateManyWithoutTeamInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCPServerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: AccessRuleUpdateManyWithoutServerNestedInput
  }

  export type MCPServerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: AccessRuleUncheckedUpdateManyWithoutServerNestedInput
  }

  export type MCPServerUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMCPServerTypeFieldUpdateOperationsInput | $Enums.MCPServerType
    proxyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    protocol?: EnumMCPProtocolFieldUpdateOperationsInput | $Enums.MCPProtocol
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    connectionConfig?: NullableJsonNullValueInput | InputJsonValue
    oauthClientId?: NullableStringFieldUpdateOperationsInput | string | null
    wellKnownOauthServer?: NullableJsonNullValueInput | InputJsonValue
    wellKnownProtectedResource?: NullableJsonNullValueInput | InputJsonValue
    registrationEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleCreateManyServerInput = {
    id?: string
    userId: string
    accessConfig: JsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccessRuleUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessRulesNestedInput
  }

  export type AccessRuleUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessRuleUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessConfig?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}