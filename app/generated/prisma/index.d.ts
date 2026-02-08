
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Vision
 * 
 */
export type Vision = $Result.DefaultSelection<Prisma.$VisionPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model CoreValue
 * 
 */
export type CoreValue = $Result.DefaultSelection<Prisma.$CoreValuePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model VesselType
 * 
 */
export type VesselType = $Result.DefaultSelection<Prisma.$VesselTypePayload>
/**
 * Model Vessel
 * 
 */
export type Vessel = $Result.DefaultSelection<Prisma.$VesselPayload>
/**
 * Model Exhibition
 * 
 */
export type Exhibition = $Result.DefaultSelection<Prisma.$ExhibitionPayload>
/**
 * Model AboutUs
 * 
 */
export type AboutUs = $Result.DefaultSelection<Prisma.$AboutUsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vision`: Exposes CRUD operations for the **Vision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visions
    * const visions = await prisma.vision.findMany()
    * ```
    */
  get vision(): Prisma.VisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coreValue`: Exposes CRUD operations for the **CoreValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoreValues
    * const coreValues = await prisma.coreValue.findMany()
    * ```
    */
  get coreValue(): Prisma.CoreValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vesselType`: Exposes CRUD operations for the **VesselType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VesselTypes
    * const vesselTypes = await prisma.vesselType.findMany()
    * ```
    */
  get vesselType(): Prisma.VesselTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vessel`: Exposes CRUD operations for the **Vessel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vessels
    * const vessels = await prisma.vessel.findMany()
    * ```
    */
  get vessel(): Prisma.VesselDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exhibition`: Exposes CRUD operations for the **Exhibition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exhibitions
    * const exhibitions = await prisma.exhibition.findMany()
    * ```
    */
  get exhibition(): Prisma.ExhibitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutUs`: Exposes CRUD operations for the **AboutUs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aboutuses
    * const aboutuses = await prisma.aboutUs.findMany()
    * ```
    */
  get aboutUs(): Prisma.AboutUsDelegate<ExtArgs, ClientOptions>;
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
    Company: 'Company',
    Vision: 'Vision',
    Mission: 'Mission',
    CoreValue: 'CoreValue',
    Service: 'Service',
    VesselType: 'VesselType',
    Vessel: 'Vessel',
    Exhibition: 'Exhibition',
    AboutUs: 'AboutUs'
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
      modelProps: "user" | "company" | "vision" | "mission" | "coreValue" | "service" | "vesselType" | "vessel" | "exhibition" | "aboutUs"
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
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Vision: {
        payload: Prisma.$VisionPayload<ExtArgs>
        fields: Prisma.VisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          findFirst: {
            args: Prisma.VisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          findMany: {
            args: Prisma.VisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>[]
          }
          create: {
            args: Prisma.VisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          createMany: {
            args: Prisma.VisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>[]
          }
          delete: {
            args: Prisma.VisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          update: {
            args: Prisma.VisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          deleteMany: {
            args: Prisma.VisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>[]
          }
          upsert: {
            args: Prisma.VisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisionPayload>
          }
          aggregate: {
            args: Prisma.VisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVision>
          }
          groupBy: {
            args: Prisma.VisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisionCountArgs<ExtArgs>
            result: $Utils.Optional<VisionCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      CoreValue: {
        payload: Prisma.$CoreValuePayload<ExtArgs>
        fields: Prisma.CoreValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoreValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoreValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>
          }
          findFirst: {
            args: Prisma.CoreValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoreValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>
          }
          findMany: {
            args: Prisma.CoreValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>[]
          }
          create: {
            args: Prisma.CoreValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>
          }
          createMany: {
            args: Prisma.CoreValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoreValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>[]
          }
          delete: {
            args: Prisma.CoreValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>
          }
          update: {
            args: Prisma.CoreValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>
          }
          deleteMany: {
            args: Prisma.CoreValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoreValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoreValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>[]
          }
          upsert: {
            args: Prisma.CoreValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoreValuePayload>
          }
          aggregate: {
            args: Prisma.CoreValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoreValue>
          }
          groupBy: {
            args: Prisma.CoreValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoreValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoreValueCountArgs<ExtArgs>
            result: $Utils.Optional<CoreValueCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      VesselType: {
        payload: Prisma.$VesselTypePayload<ExtArgs>
        fields: Prisma.VesselTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VesselTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VesselTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>
          }
          findFirst: {
            args: Prisma.VesselTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VesselTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>
          }
          findMany: {
            args: Prisma.VesselTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>[]
          }
          create: {
            args: Prisma.VesselTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>
          }
          createMany: {
            args: Prisma.VesselTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VesselTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>[]
          }
          delete: {
            args: Prisma.VesselTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>
          }
          update: {
            args: Prisma.VesselTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>
          }
          deleteMany: {
            args: Prisma.VesselTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VesselTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VesselTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>[]
          }
          upsert: {
            args: Prisma.VesselTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselTypePayload>
          }
          aggregate: {
            args: Prisma.VesselTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVesselType>
          }
          groupBy: {
            args: Prisma.VesselTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VesselTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VesselTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VesselTypeCountAggregateOutputType> | number
          }
        }
      }
      Vessel: {
        payload: Prisma.$VesselPayload<ExtArgs>
        fields: Prisma.VesselFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VesselFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VesselFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          findFirst: {
            args: Prisma.VesselFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VesselFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          findMany: {
            args: Prisma.VesselFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>[]
          }
          create: {
            args: Prisma.VesselCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          createMany: {
            args: Prisma.VesselCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VesselCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>[]
          }
          delete: {
            args: Prisma.VesselDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          update: {
            args: Prisma.VesselUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          deleteMany: {
            args: Prisma.VesselDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VesselUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VesselUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>[]
          }
          upsert: {
            args: Prisma.VesselUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VesselPayload>
          }
          aggregate: {
            args: Prisma.VesselAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVessel>
          }
          groupBy: {
            args: Prisma.VesselGroupByArgs<ExtArgs>
            result: $Utils.Optional<VesselGroupByOutputType>[]
          }
          count: {
            args: Prisma.VesselCountArgs<ExtArgs>
            result: $Utils.Optional<VesselCountAggregateOutputType> | number
          }
        }
      }
      Exhibition: {
        payload: Prisma.$ExhibitionPayload<ExtArgs>
        fields: Prisma.ExhibitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExhibitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExhibitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          findFirst: {
            args: Prisma.ExhibitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExhibitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          findMany: {
            args: Prisma.ExhibitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>[]
          }
          create: {
            args: Prisma.ExhibitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          createMany: {
            args: Prisma.ExhibitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExhibitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>[]
          }
          delete: {
            args: Prisma.ExhibitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          update: {
            args: Prisma.ExhibitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          deleteMany: {
            args: Prisma.ExhibitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExhibitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExhibitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>[]
          }
          upsert: {
            args: Prisma.ExhibitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExhibitionPayload>
          }
          aggregate: {
            args: Prisma.ExhibitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExhibition>
          }
          groupBy: {
            args: Prisma.ExhibitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExhibitionCountArgs<ExtArgs>
            result: $Utils.Optional<ExhibitionCountAggregateOutputType> | number
          }
        }
      }
      AboutUs: {
        payload: Prisma.$AboutUsPayload<ExtArgs>
        fields: Prisma.AboutUsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutUsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutUsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          findFirst: {
            args: Prisma.AboutUsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutUsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          findMany: {
            args: Prisma.AboutUsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>[]
          }
          create: {
            args: Prisma.AboutUsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          createMany: {
            args: Prisma.AboutUsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutUsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>[]
          }
          delete: {
            args: Prisma.AboutUsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          update: {
            args: Prisma.AboutUsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          deleteMany: {
            args: Prisma.AboutUsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutUsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutUsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>[]
          }
          upsert: {
            args: Prisma.AboutUsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutUsPayload>
          }
          aggregate: {
            args: Prisma.AboutUsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutUs>
          }
          groupBy: {
            args: Prisma.AboutUsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutUsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutUsCountArgs<ExtArgs>
            result: $Utils.Optional<AboutUsCountAggregateOutputType> | number
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
    company?: CompanyOmit
    vision?: VisionOmit
    mission?: MissionOmit
    coreValue?: CoreValueOmit
    service?: ServiceOmit
    vesselType?: VesselTypeOmit
    vessel?: VesselOmit
    exhibition?: ExhibitionOmit
    aboutUs?: AboutUsOmit
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
   * Count Type VesselTypeCountOutputType
   */

  export type VesselTypeCountOutputType = {
    vessels: number
  }

  export type VesselTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vessels?: boolean | VesselTypeCountOutputTypeCountVesselsArgs
  }

  // Custom InputTypes
  /**
   * VesselTypeCountOutputType without action
   */
  export type VesselTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselTypeCountOutputType
     */
    select?: VesselTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VesselTypeCountOutputType without action
   */
  export type VesselTypeCountOutputTypeCountVesselsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.AccountStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.AccountStatus
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'AccountStatus'>
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
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    gmapsUrl: string | null
    linkedin: string | null
    facebook: string | null
    instagram: string | null
    tiktok: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    gmapsUrl: string | null
    linkedin: string | null
    facebook: string | null
    instagram: string | null
    tiktok: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    gmapsUrl: number
    linkedin: number
    facebook: number
    instagram: number
    tiktok: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    gmapsUrl?: true
    linkedin?: true
    facebook?: true
    instagram?: true
    tiktok?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    gmapsUrl?: true
    linkedin?: true
    facebook?: true
    instagram?: true
    tiktok?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    gmapsUrl?: true
    linkedin?: true
    facebook?: true
    instagram?: true
    tiktok?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    address: string
    gmapsUrl: string | null
    linkedin: string | null
    facebook: string | null
    instagram: string | null
    tiktok: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    gmapsUrl?: boolean
    linkedin?: boolean
    facebook?: boolean
    instagram?: boolean
    tiktok?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    gmapsUrl?: boolean
    linkedin?: boolean
    facebook?: boolean
    instagram?: boolean
    tiktok?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    gmapsUrl?: boolean
    linkedin?: boolean
    facebook?: boolean
    instagram?: boolean
    tiktok?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    gmapsUrl?: boolean
    linkedin?: boolean
    facebook?: boolean
    instagram?: boolean
    tiktok?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "gmapsUrl" | "linkedin" | "facebook" | "instagram" | "tiktok" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      gmapsUrl: string | null
      linkedin: string | null
      facebook: string | null
      instagram: string | null
      tiktok: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly gmapsUrl: FieldRef<"Company", 'String'>
    readonly linkedin: FieldRef<"Company", 'String'>
    readonly facebook: FieldRef<"Company", 'String'>
    readonly instagram: FieldRef<"Company", 'String'>
    readonly tiktok: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
  }


  /**
   * Model Vision
   */

  export type AggregateVision = {
    _count: VisionCountAggregateOutputType | null
    _avg: VisionAvgAggregateOutputType | null
    _sum: VisionSumAggregateOutputType | null
    _min: VisionMinAggregateOutputType | null
    _max: VisionMaxAggregateOutputType | null
  }

  export type VisionAvgAggregateOutputType = {
    id: number | null
  }

  export type VisionSumAggregateOutputType = {
    id: number | null
  }

  export type VisionMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisionCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisionAvgAggregateInputType = {
    id?: true
  }

  export type VisionSumAggregateInputType = {
    id?: true
  }

  export type VisionMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisionMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisionCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vision to aggregate.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visions
    **/
    _count?: true | VisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisionMaxAggregateInputType
  }

  export type GetVisionAggregateType<T extends VisionAggregateArgs> = {
        [P in keyof T & keyof AggregateVision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVision[P]>
      : GetScalarType<T[P], AggregateVision[P]>
  }




  export type VisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisionWhereInput
    orderBy?: VisionOrderByWithAggregationInput | VisionOrderByWithAggregationInput[]
    by: VisionScalarFieldEnum[] | VisionScalarFieldEnum
    having?: VisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisionCountAggregateInputType | true
    _avg?: VisionAvgAggregateInputType
    _sum?: VisionSumAggregateInputType
    _min?: VisionMinAggregateInputType
    _max?: VisionMaxAggregateInputType
  }

  export type VisionGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: VisionCountAggregateOutputType | null
    _avg: VisionAvgAggregateOutputType | null
    _sum: VisionSumAggregateOutputType | null
    _min: VisionMinAggregateOutputType | null
    _max: VisionMaxAggregateOutputType | null
  }

  type GetVisionGroupByPayload<T extends VisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisionGroupByOutputType[P]>
            : GetScalarType<T[P], VisionGroupByOutputType[P]>
        }
      >
    >


  export type VisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vision"]>

  export type VisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vision"]>

  export type VisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vision"]>

  export type VisionSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["vision"]>

  export type $VisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vision"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vision"]>
    composites: {}
  }

  type VisionGetPayload<S extends boolean | null | undefined | VisionDefaultArgs> = $Result.GetResult<Prisma.$VisionPayload, S>

  type VisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisionCountAggregateInputType | true
    }

  export interface VisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vision'], meta: { name: 'Vision' } }
    /**
     * Find zero or one Vision that matches the filter.
     * @param {VisionFindUniqueArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisionFindUniqueArgs>(args: SelectSubset<T, VisionFindUniqueArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisionFindUniqueOrThrowArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisionFindUniqueOrThrowArgs>(args: SelectSubset<T, VisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionFindFirstArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisionFindFirstArgs>(args?: SelectSubset<T, VisionFindFirstArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionFindFirstOrThrowArgs} args - Arguments to find a Vision
     * @example
     * // Get one Vision
     * const vision = await prisma.vision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisionFindFirstOrThrowArgs>(args?: SelectSubset<T, VisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visions
     * const visions = await prisma.vision.findMany()
     * 
     * // Get first 10 Visions
     * const visions = await prisma.vision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visionWithIdOnly = await prisma.vision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisionFindManyArgs>(args?: SelectSubset<T, VisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vision.
     * @param {VisionCreateArgs} args - Arguments to create a Vision.
     * @example
     * // Create one Vision
     * const Vision = await prisma.vision.create({
     *   data: {
     *     // ... data to create a Vision
     *   }
     * })
     * 
     */
    create<T extends VisionCreateArgs>(args: SelectSubset<T, VisionCreateArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visions.
     * @param {VisionCreateManyArgs} args - Arguments to create many Visions.
     * @example
     * // Create many Visions
     * const vision = await prisma.vision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisionCreateManyArgs>(args?: SelectSubset<T, VisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visions and returns the data saved in the database.
     * @param {VisionCreateManyAndReturnArgs} args - Arguments to create many Visions.
     * @example
     * // Create many Visions
     * const vision = await prisma.vision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visions and only return the `id`
     * const visionWithIdOnly = await prisma.vision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisionCreateManyAndReturnArgs>(args?: SelectSubset<T, VisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vision.
     * @param {VisionDeleteArgs} args - Arguments to delete one Vision.
     * @example
     * // Delete one Vision
     * const Vision = await prisma.vision.delete({
     *   where: {
     *     // ... filter to delete one Vision
     *   }
     * })
     * 
     */
    delete<T extends VisionDeleteArgs>(args: SelectSubset<T, VisionDeleteArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vision.
     * @param {VisionUpdateArgs} args - Arguments to update one Vision.
     * @example
     * // Update one Vision
     * const vision = await prisma.vision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisionUpdateArgs>(args: SelectSubset<T, VisionUpdateArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visions.
     * @param {VisionDeleteManyArgs} args - Arguments to filter Visions to delete.
     * @example
     * // Delete a few Visions
     * const { count } = await prisma.vision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisionDeleteManyArgs>(args?: SelectSubset<T, VisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visions
     * const vision = await prisma.vision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisionUpdateManyArgs>(args: SelectSubset<T, VisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visions and returns the data updated in the database.
     * @param {VisionUpdateManyAndReturnArgs} args - Arguments to update many Visions.
     * @example
     * // Update many Visions
     * const vision = await prisma.vision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visions and only return the `id`
     * const visionWithIdOnly = await prisma.vision.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisionUpdateManyAndReturnArgs>(args: SelectSubset<T, VisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vision.
     * @param {VisionUpsertArgs} args - Arguments to update or create a Vision.
     * @example
     * // Update or create a Vision
     * const vision = await prisma.vision.upsert({
     *   create: {
     *     // ... data to create a Vision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vision we want to update
     *   }
     * })
     */
    upsert<T extends VisionUpsertArgs>(args: SelectSubset<T, VisionUpsertArgs<ExtArgs>>): Prisma__VisionClient<$Result.GetResult<Prisma.$VisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionCountArgs} args - Arguments to filter Visions to count.
     * @example
     * // Count the number of Visions
     * const count = await prisma.vision.count({
     *   where: {
     *     // ... the filter for the Visions we want to count
     *   }
     * })
    **/
    count<T extends VisionCountArgs>(
      args?: Subset<T, VisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisionAggregateArgs>(args: Subset<T, VisionAggregateArgs>): Prisma.PrismaPromise<GetVisionAggregateType<T>>

    /**
     * Group by Vision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisionGroupByArgs} args - Group by arguments.
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
      T extends VisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisionGroupByArgs['orderBy'] }
        : { orderBy?: VisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vision model
   */
  readonly fields: VisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Vision model
   */
  interface VisionFieldRefs {
    readonly id: FieldRef<"Vision", 'Int'>
    readonly description: FieldRef<"Vision", 'String'>
    readonly createdAt: FieldRef<"Vision", 'DateTime'>
    readonly updatedAt: FieldRef<"Vision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vision findUnique
   */
  export type VisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision findUniqueOrThrow
   */
  export type VisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision findFirst
   */
  export type VisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visions.
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visions.
     */
    distinct?: VisionScalarFieldEnum | VisionScalarFieldEnum[]
  }

  /**
   * Vision findFirstOrThrow
   */
  export type VisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Filter, which Vision to fetch.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visions.
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visions.
     */
    distinct?: VisionScalarFieldEnum | VisionScalarFieldEnum[]
  }

  /**
   * Vision findMany
   */
  export type VisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Filter, which Visions to fetch.
     */
    where?: VisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visions to fetch.
     */
    orderBy?: VisionOrderByWithRelationInput | VisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visions.
     */
    cursor?: VisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visions.
     */
    skip?: number
    distinct?: VisionScalarFieldEnum | VisionScalarFieldEnum[]
  }

  /**
   * Vision create
   */
  export type VisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * The data needed to create a Vision.
     */
    data: XOR<VisionCreateInput, VisionUncheckedCreateInput>
  }

  /**
   * Vision createMany
   */
  export type VisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visions.
     */
    data: VisionCreateManyInput | VisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vision createManyAndReturn
   */
  export type VisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * The data used to create many Visions.
     */
    data: VisionCreateManyInput | VisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vision update
   */
  export type VisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * The data needed to update a Vision.
     */
    data: XOR<VisionUpdateInput, VisionUncheckedUpdateInput>
    /**
     * Choose, which Vision to update.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision updateMany
   */
  export type VisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visions.
     */
    data: XOR<VisionUpdateManyMutationInput, VisionUncheckedUpdateManyInput>
    /**
     * Filter which Visions to update
     */
    where?: VisionWhereInput
    /**
     * Limit how many Visions to update.
     */
    limit?: number
  }

  /**
   * Vision updateManyAndReturn
   */
  export type VisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * The data used to update Visions.
     */
    data: XOR<VisionUpdateManyMutationInput, VisionUncheckedUpdateManyInput>
    /**
     * Filter which Visions to update
     */
    where?: VisionWhereInput
    /**
     * Limit how many Visions to update.
     */
    limit?: number
  }

  /**
   * Vision upsert
   */
  export type VisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * The filter to search for the Vision to update in case it exists.
     */
    where: VisionWhereUniqueInput
    /**
     * In case the Vision found by the `where` argument doesn't exist, create a new Vision with this data.
     */
    create: XOR<VisionCreateInput, VisionUncheckedCreateInput>
    /**
     * In case the Vision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisionUpdateInput, VisionUncheckedUpdateInput>
  }

  /**
   * Vision delete
   */
  export type VisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
    /**
     * Filter which Vision to delete.
     */
    where: VisionWhereUniqueInput
  }

  /**
   * Vision deleteMany
   */
  export type VisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visions to delete
     */
    where?: VisionWhereInput
    /**
     * Limit how many Visions to delete.
     */
    limit?: number
  }

  /**
   * Vision without action
   */
  export type VisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vision
     */
    select?: VisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vision
     */
    omit?: VisionOmit<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {MissionCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {MissionUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.updateManyAndReturn({
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
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
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
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly description: FieldRef<"Mission", 'String'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission createManyAndReturn
   */
  export type MissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission updateManyAndReturn
   */
  export type MissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
  }


  /**
   * Model CoreValue
   */

  export type AggregateCoreValue = {
    _count: CoreValueCountAggregateOutputType | null
    _avg: CoreValueAvgAggregateOutputType | null
    _sum: CoreValueSumAggregateOutputType | null
    _min: CoreValueMinAggregateOutputType | null
    _max: CoreValueMaxAggregateOutputType | null
  }

  export type CoreValueAvgAggregateOutputType = {
    id: number | null
  }

  export type CoreValueSumAggregateOutputType = {
    id: number | null
  }

  export type CoreValueMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoreValueMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoreValueCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoreValueAvgAggregateInputType = {
    id?: true
  }

  export type CoreValueSumAggregateInputType = {
    id?: true
  }

  export type CoreValueMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoreValueMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoreValueCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoreValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoreValue to aggregate.
     */
    where?: CoreValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreValues to fetch.
     */
    orderBy?: CoreValueOrderByWithRelationInput | CoreValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoreValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoreValues
    **/
    _count?: true | CoreValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoreValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoreValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoreValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoreValueMaxAggregateInputType
  }

  export type GetCoreValueAggregateType<T extends CoreValueAggregateArgs> = {
        [P in keyof T & keyof AggregateCoreValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoreValue[P]>
      : GetScalarType<T[P], AggregateCoreValue[P]>
  }




  export type CoreValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoreValueWhereInput
    orderBy?: CoreValueOrderByWithAggregationInput | CoreValueOrderByWithAggregationInput[]
    by: CoreValueScalarFieldEnum[] | CoreValueScalarFieldEnum
    having?: CoreValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoreValueCountAggregateInputType | true
    _avg?: CoreValueAvgAggregateInputType
    _sum?: CoreValueSumAggregateInputType
    _min?: CoreValueMinAggregateInputType
    _max?: CoreValueMaxAggregateInputType
  }

  export type CoreValueGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    _count: CoreValueCountAggregateOutputType | null
    _avg: CoreValueAvgAggregateOutputType | null
    _sum: CoreValueSumAggregateOutputType | null
    _min: CoreValueMinAggregateOutputType | null
    _max: CoreValueMaxAggregateOutputType | null
  }

  type GetCoreValueGroupByPayload<T extends CoreValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoreValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoreValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoreValueGroupByOutputType[P]>
            : GetScalarType<T[P], CoreValueGroupByOutputType[P]>
        }
      >
    >


  export type CoreValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coreValue"]>

  export type CoreValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coreValue"]>

  export type CoreValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coreValue"]>

  export type CoreValueSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoreValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["coreValue"]>

  export type $CoreValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoreValue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coreValue"]>
    composites: {}
  }

  type CoreValueGetPayload<S extends boolean | null | undefined | CoreValueDefaultArgs> = $Result.GetResult<Prisma.$CoreValuePayload, S>

  type CoreValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoreValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoreValueCountAggregateInputType | true
    }

  export interface CoreValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoreValue'], meta: { name: 'CoreValue' } }
    /**
     * Find zero or one CoreValue that matches the filter.
     * @param {CoreValueFindUniqueArgs} args - Arguments to find a CoreValue
     * @example
     * // Get one CoreValue
     * const coreValue = await prisma.coreValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoreValueFindUniqueArgs>(args: SelectSubset<T, CoreValueFindUniqueArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoreValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoreValueFindUniqueOrThrowArgs} args - Arguments to find a CoreValue
     * @example
     * // Get one CoreValue
     * const coreValue = await prisma.coreValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoreValueFindUniqueOrThrowArgs>(args: SelectSubset<T, CoreValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoreValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueFindFirstArgs} args - Arguments to find a CoreValue
     * @example
     * // Get one CoreValue
     * const coreValue = await prisma.coreValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoreValueFindFirstArgs>(args?: SelectSubset<T, CoreValueFindFirstArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoreValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueFindFirstOrThrowArgs} args - Arguments to find a CoreValue
     * @example
     * // Get one CoreValue
     * const coreValue = await prisma.coreValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoreValueFindFirstOrThrowArgs>(args?: SelectSubset<T, CoreValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoreValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoreValues
     * const coreValues = await prisma.coreValue.findMany()
     * 
     * // Get first 10 CoreValues
     * const coreValues = await prisma.coreValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coreValueWithIdOnly = await prisma.coreValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoreValueFindManyArgs>(args?: SelectSubset<T, CoreValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoreValue.
     * @param {CoreValueCreateArgs} args - Arguments to create a CoreValue.
     * @example
     * // Create one CoreValue
     * const CoreValue = await prisma.coreValue.create({
     *   data: {
     *     // ... data to create a CoreValue
     *   }
     * })
     * 
     */
    create<T extends CoreValueCreateArgs>(args: SelectSubset<T, CoreValueCreateArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoreValues.
     * @param {CoreValueCreateManyArgs} args - Arguments to create many CoreValues.
     * @example
     * // Create many CoreValues
     * const coreValue = await prisma.coreValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoreValueCreateManyArgs>(args?: SelectSubset<T, CoreValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoreValues and returns the data saved in the database.
     * @param {CoreValueCreateManyAndReturnArgs} args - Arguments to create many CoreValues.
     * @example
     * // Create many CoreValues
     * const coreValue = await prisma.coreValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoreValues and only return the `id`
     * const coreValueWithIdOnly = await prisma.coreValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoreValueCreateManyAndReturnArgs>(args?: SelectSubset<T, CoreValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoreValue.
     * @param {CoreValueDeleteArgs} args - Arguments to delete one CoreValue.
     * @example
     * // Delete one CoreValue
     * const CoreValue = await prisma.coreValue.delete({
     *   where: {
     *     // ... filter to delete one CoreValue
     *   }
     * })
     * 
     */
    delete<T extends CoreValueDeleteArgs>(args: SelectSubset<T, CoreValueDeleteArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoreValue.
     * @param {CoreValueUpdateArgs} args - Arguments to update one CoreValue.
     * @example
     * // Update one CoreValue
     * const coreValue = await prisma.coreValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoreValueUpdateArgs>(args: SelectSubset<T, CoreValueUpdateArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoreValues.
     * @param {CoreValueDeleteManyArgs} args - Arguments to filter CoreValues to delete.
     * @example
     * // Delete a few CoreValues
     * const { count } = await prisma.coreValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoreValueDeleteManyArgs>(args?: SelectSubset<T, CoreValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoreValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoreValues
     * const coreValue = await prisma.coreValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoreValueUpdateManyArgs>(args: SelectSubset<T, CoreValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoreValues and returns the data updated in the database.
     * @param {CoreValueUpdateManyAndReturnArgs} args - Arguments to update many CoreValues.
     * @example
     * // Update many CoreValues
     * const coreValue = await prisma.coreValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoreValues and only return the `id`
     * const coreValueWithIdOnly = await prisma.coreValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoreValueUpdateManyAndReturnArgs>(args: SelectSubset<T, CoreValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoreValue.
     * @param {CoreValueUpsertArgs} args - Arguments to update or create a CoreValue.
     * @example
     * // Update or create a CoreValue
     * const coreValue = await prisma.coreValue.upsert({
     *   create: {
     *     // ... data to create a CoreValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoreValue we want to update
     *   }
     * })
     */
    upsert<T extends CoreValueUpsertArgs>(args: SelectSubset<T, CoreValueUpsertArgs<ExtArgs>>): Prisma__CoreValueClient<$Result.GetResult<Prisma.$CoreValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoreValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueCountArgs} args - Arguments to filter CoreValues to count.
     * @example
     * // Count the number of CoreValues
     * const count = await prisma.coreValue.count({
     *   where: {
     *     // ... the filter for the CoreValues we want to count
     *   }
     * })
    **/
    count<T extends CoreValueCountArgs>(
      args?: Subset<T, CoreValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoreValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoreValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoreValueAggregateArgs>(args: Subset<T, CoreValueAggregateArgs>): Prisma.PrismaPromise<GetCoreValueAggregateType<T>>

    /**
     * Group by CoreValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoreValueGroupByArgs} args - Group by arguments.
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
      T extends CoreValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoreValueGroupByArgs['orderBy'] }
        : { orderBy?: CoreValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoreValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoreValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoreValue model
   */
  readonly fields: CoreValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoreValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoreValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CoreValue model
   */
  interface CoreValueFieldRefs {
    readonly id: FieldRef<"CoreValue", 'Int'>
    readonly title: FieldRef<"CoreValue", 'String'>
    readonly createdAt: FieldRef<"CoreValue", 'DateTime'>
    readonly updatedAt: FieldRef<"CoreValue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoreValue findUnique
   */
  export type CoreValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * Filter, which CoreValue to fetch.
     */
    where: CoreValueWhereUniqueInput
  }

  /**
   * CoreValue findUniqueOrThrow
   */
  export type CoreValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * Filter, which CoreValue to fetch.
     */
    where: CoreValueWhereUniqueInput
  }

  /**
   * CoreValue findFirst
   */
  export type CoreValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * Filter, which CoreValue to fetch.
     */
    where?: CoreValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreValues to fetch.
     */
    orderBy?: CoreValueOrderByWithRelationInput | CoreValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoreValues.
     */
    cursor?: CoreValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoreValues.
     */
    distinct?: CoreValueScalarFieldEnum | CoreValueScalarFieldEnum[]
  }

  /**
   * CoreValue findFirstOrThrow
   */
  export type CoreValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * Filter, which CoreValue to fetch.
     */
    where?: CoreValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreValues to fetch.
     */
    orderBy?: CoreValueOrderByWithRelationInput | CoreValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoreValues.
     */
    cursor?: CoreValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoreValues.
     */
    distinct?: CoreValueScalarFieldEnum | CoreValueScalarFieldEnum[]
  }

  /**
   * CoreValue findMany
   */
  export type CoreValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * Filter, which CoreValues to fetch.
     */
    where?: CoreValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoreValues to fetch.
     */
    orderBy?: CoreValueOrderByWithRelationInput | CoreValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoreValues.
     */
    cursor?: CoreValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoreValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoreValues.
     */
    skip?: number
    distinct?: CoreValueScalarFieldEnum | CoreValueScalarFieldEnum[]
  }

  /**
   * CoreValue create
   */
  export type CoreValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * The data needed to create a CoreValue.
     */
    data: XOR<CoreValueCreateInput, CoreValueUncheckedCreateInput>
  }

  /**
   * CoreValue createMany
   */
  export type CoreValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoreValues.
     */
    data: CoreValueCreateManyInput | CoreValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoreValue createManyAndReturn
   */
  export type CoreValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * The data used to create many CoreValues.
     */
    data: CoreValueCreateManyInput | CoreValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoreValue update
   */
  export type CoreValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * The data needed to update a CoreValue.
     */
    data: XOR<CoreValueUpdateInput, CoreValueUncheckedUpdateInput>
    /**
     * Choose, which CoreValue to update.
     */
    where: CoreValueWhereUniqueInput
  }

  /**
   * CoreValue updateMany
   */
  export type CoreValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoreValues.
     */
    data: XOR<CoreValueUpdateManyMutationInput, CoreValueUncheckedUpdateManyInput>
    /**
     * Filter which CoreValues to update
     */
    where?: CoreValueWhereInput
    /**
     * Limit how many CoreValues to update.
     */
    limit?: number
  }

  /**
   * CoreValue updateManyAndReturn
   */
  export type CoreValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * The data used to update CoreValues.
     */
    data: XOR<CoreValueUpdateManyMutationInput, CoreValueUncheckedUpdateManyInput>
    /**
     * Filter which CoreValues to update
     */
    where?: CoreValueWhereInput
    /**
     * Limit how many CoreValues to update.
     */
    limit?: number
  }

  /**
   * CoreValue upsert
   */
  export type CoreValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * The filter to search for the CoreValue to update in case it exists.
     */
    where: CoreValueWhereUniqueInput
    /**
     * In case the CoreValue found by the `where` argument doesn't exist, create a new CoreValue with this data.
     */
    create: XOR<CoreValueCreateInput, CoreValueUncheckedCreateInput>
    /**
     * In case the CoreValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoreValueUpdateInput, CoreValueUncheckedUpdateInput>
  }

  /**
   * CoreValue delete
   */
  export type CoreValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
    /**
     * Filter which CoreValue to delete.
     */
    where: CoreValueWhereUniqueInput
  }

  /**
   * CoreValue deleteMany
   */
  export type CoreValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoreValues to delete
     */
    where?: CoreValueWhereInput
    /**
     * Limit how many CoreValues to delete.
     */
    limit?: number
  }

  /**
   * CoreValue without action
   */
  export type CoreValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoreValue
     */
    select?: CoreValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoreValue
     */
    omit?: CoreValueOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model VesselType
   */

  export type AggregateVesselType = {
    _count: VesselTypeCountAggregateOutputType | null
    _avg: VesselTypeAvgAggregateOutputType | null
    _sum: VesselTypeSumAggregateOutputType | null
    _min: VesselTypeMinAggregateOutputType | null
    _max: VesselTypeMaxAggregateOutputType | null
  }

  export type VesselTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type VesselTypeSumAggregateOutputType = {
    id: number | null
  }

  export type VesselTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VesselTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VesselTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VesselTypeAvgAggregateInputType = {
    id?: true
  }

  export type VesselTypeSumAggregateInputType = {
    id?: true
  }

  export type VesselTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VesselTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VesselTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VesselTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VesselType to aggregate.
     */
    where?: VesselTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselTypes to fetch.
     */
    orderBy?: VesselTypeOrderByWithRelationInput | VesselTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VesselTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VesselTypes
    **/
    _count?: true | VesselTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VesselTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VesselTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VesselTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VesselTypeMaxAggregateInputType
  }

  export type GetVesselTypeAggregateType<T extends VesselTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVesselType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVesselType[P]>
      : GetScalarType<T[P], AggregateVesselType[P]>
  }




  export type VesselTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselTypeWhereInput
    orderBy?: VesselTypeOrderByWithAggregationInput | VesselTypeOrderByWithAggregationInput[]
    by: VesselTypeScalarFieldEnum[] | VesselTypeScalarFieldEnum
    having?: VesselTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VesselTypeCountAggregateInputType | true
    _avg?: VesselTypeAvgAggregateInputType
    _sum?: VesselTypeSumAggregateInputType
    _min?: VesselTypeMinAggregateInputType
    _max?: VesselTypeMaxAggregateInputType
  }

  export type VesselTypeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: VesselTypeCountAggregateOutputType | null
    _avg: VesselTypeAvgAggregateOutputType | null
    _sum: VesselTypeSumAggregateOutputType | null
    _min: VesselTypeMinAggregateOutputType | null
    _max: VesselTypeMaxAggregateOutputType | null
  }

  type GetVesselTypeGroupByPayload<T extends VesselTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VesselTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VesselTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VesselTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VesselTypeGroupByOutputType[P]>
        }
      >
    >


  export type VesselTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vessels?: boolean | VesselType$vesselsArgs<ExtArgs>
    _count?: boolean | VesselTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vesselType"]>

  export type VesselTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vesselType"]>

  export type VesselTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vesselType"]>

  export type VesselTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VesselTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["vesselType"]>
  export type VesselTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vessels?: boolean | VesselType$vesselsArgs<ExtArgs>
    _count?: boolean | VesselTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VesselTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VesselTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VesselTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VesselType"
    objects: {
      vessels: Prisma.$VesselPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vesselType"]>
    composites: {}
  }

  type VesselTypeGetPayload<S extends boolean | null | undefined | VesselTypeDefaultArgs> = $Result.GetResult<Prisma.$VesselTypePayload, S>

  type VesselTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VesselTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VesselTypeCountAggregateInputType | true
    }

  export interface VesselTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VesselType'], meta: { name: 'VesselType' } }
    /**
     * Find zero or one VesselType that matches the filter.
     * @param {VesselTypeFindUniqueArgs} args - Arguments to find a VesselType
     * @example
     * // Get one VesselType
     * const vesselType = await prisma.vesselType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VesselTypeFindUniqueArgs>(args: SelectSubset<T, VesselTypeFindUniqueArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VesselType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VesselTypeFindUniqueOrThrowArgs} args - Arguments to find a VesselType
     * @example
     * // Get one VesselType
     * const vesselType = await prisma.vesselType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VesselTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VesselTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VesselType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeFindFirstArgs} args - Arguments to find a VesselType
     * @example
     * // Get one VesselType
     * const vesselType = await prisma.vesselType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VesselTypeFindFirstArgs>(args?: SelectSubset<T, VesselTypeFindFirstArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VesselType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeFindFirstOrThrowArgs} args - Arguments to find a VesselType
     * @example
     * // Get one VesselType
     * const vesselType = await prisma.vesselType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VesselTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VesselTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VesselTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VesselTypes
     * const vesselTypes = await prisma.vesselType.findMany()
     * 
     * // Get first 10 VesselTypes
     * const vesselTypes = await prisma.vesselType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vesselTypeWithIdOnly = await prisma.vesselType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VesselTypeFindManyArgs>(args?: SelectSubset<T, VesselTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VesselType.
     * @param {VesselTypeCreateArgs} args - Arguments to create a VesselType.
     * @example
     * // Create one VesselType
     * const VesselType = await prisma.vesselType.create({
     *   data: {
     *     // ... data to create a VesselType
     *   }
     * })
     * 
     */
    create<T extends VesselTypeCreateArgs>(args: SelectSubset<T, VesselTypeCreateArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VesselTypes.
     * @param {VesselTypeCreateManyArgs} args - Arguments to create many VesselTypes.
     * @example
     * // Create many VesselTypes
     * const vesselType = await prisma.vesselType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VesselTypeCreateManyArgs>(args?: SelectSubset<T, VesselTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VesselTypes and returns the data saved in the database.
     * @param {VesselTypeCreateManyAndReturnArgs} args - Arguments to create many VesselTypes.
     * @example
     * // Create many VesselTypes
     * const vesselType = await prisma.vesselType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VesselTypes and only return the `id`
     * const vesselTypeWithIdOnly = await prisma.vesselType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VesselTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, VesselTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VesselType.
     * @param {VesselTypeDeleteArgs} args - Arguments to delete one VesselType.
     * @example
     * // Delete one VesselType
     * const VesselType = await prisma.vesselType.delete({
     *   where: {
     *     // ... filter to delete one VesselType
     *   }
     * })
     * 
     */
    delete<T extends VesselTypeDeleteArgs>(args: SelectSubset<T, VesselTypeDeleteArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VesselType.
     * @param {VesselTypeUpdateArgs} args - Arguments to update one VesselType.
     * @example
     * // Update one VesselType
     * const vesselType = await prisma.vesselType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VesselTypeUpdateArgs>(args: SelectSubset<T, VesselTypeUpdateArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VesselTypes.
     * @param {VesselTypeDeleteManyArgs} args - Arguments to filter VesselTypes to delete.
     * @example
     * // Delete a few VesselTypes
     * const { count } = await prisma.vesselType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VesselTypeDeleteManyArgs>(args?: SelectSubset<T, VesselTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VesselTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VesselTypes
     * const vesselType = await prisma.vesselType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VesselTypeUpdateManyArgs>(args: SelectSubset<T, VesselTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VesselTypes and returns the data updated in the database.
     * @param {VesselTypeUpdateManyAndReturnArgs} args - Arguments to update many VesselTypes.
     * @example
     * // Update many VesselTypes
     * const vesselType = await prisma.vesselType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VesselTypes and only return the `id`
     * const vesselTypeWithIdOnly = await prisma.vesselType.updateManyAndReturn({
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
    updateManyAndReturn<T extends VesselTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, VesselTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VesselType.
     * @param {VesselTypeUpsertArgs} args - Arguments to update or create a VesselType.
     * @example
     * // Update or create a VesselType
     * const vesselType = await prisma.vesselType.upsert({
     *   create: {
     *     // ... data to create a VesselType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VesselType we want to update
     *   }
     * })
     */
    upsert<T extends VesselTypeUpsertArgs>(args: SelectSubset<T, VesselTypeUpsertArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VesselTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeCountArgs} args - Arguments to filter VesselTypes to count.
     * @example
     * // Count the number of VesselTypes
     * const count = await prisma.vesselType.count({
     *   where: {
     *     // ... the filter for the VesselTypes we want to count
     *   }
     * })
    **/
    count<T extends VesselTypeCountArgs>(
      args?: Subset<T, VesselTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VesselTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VesselType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VesselTypeAggregateArgs>(args: Subset<T, VesselTypeAggregateArgs>): Prisma.PrismaPromise<GetVesselTypeAggregateType<T>>

    /**
     * Group by VesselType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselTypeGroupByArgs} args - Group by arguments.
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
      T extends VesselTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VesselTypeGroupByArgs['orderBy'] }
        : { orderBy?: VesselTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VesselTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVesselTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VesselType model
   */
  readonly fields: VesselTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VesselType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VesselTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vessels<T extends VesselType$vesselsArgs<ExtArgs> = {}>(args?: Subset<T, VesselType$vesselsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VesselType model
   */
  interface VesselTypeFieldRefs {
    readonly id: FieldRef<"VesselType", 'Int'>
    readonly name: FieldRef<"VesselType", 'String'>
    readonly createdAt: FieldRef<"VesselType", 'DateTime'>
    readonly updatedAt: FieldRef<"VesselType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VesselType findUnique
   */
  export type VesselTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * Filter, which VesselType to fetch.
     */
    where: VesselTypeWhereUniqueInput
  }

  /**
   * VesselType findUniqueOrThrow
   */
  export type VesselTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * Filter, which VesselType to fetch.
     */
    where: VesselTypeWhereUniqueInput
  }

  /**
   * VesselType findFirst
   */
  export type VesselTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * Filter, which VesselType to fetch.
     */
    where?: VesselTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselTypes to fetch.
     */
    orderBy?: VesselTypeOrderByWithRelationInput | VesselTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VesselTypes.
     */
    cursor?: VesselTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VesselTypes.
     */
    distinct?: VesselTypeScalarFieldEnum | VesselTypeScalarFieldEnum[]
  }

  /**
   * VesselType findFirstOrThrow
   */
  export type VesselTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * Filter, which VesselType to fetch.
     */
    where?: VesselTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselTypes to fetch.
     */
    orderBy?: VesselTypeOrderByWithRelationInput | VesselTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VesselTypes.
     */
    cursor?: VesselTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VesselTypes.
     */
    distinct?: VesselTypeScalarFieldEnum | VesselTypeScalarFieldEnum[]
  }

  /**
   * VesselType findMany
   */
  export type VesselTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * Filter, which VesselTypes to fetch.
     */
    where?: VesselTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VesselTypes to fetch.
     */
    orderBy?: VesselTypeOrderByWithRelationInput | VesselTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VesselTypes.
     */
    cursor?: VesselTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VesselTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VesselTypes.
     */
    skip?: number
    distinct?: VesselTypeScalarFieldEnum | VesselTypeScalarFieldEnum[]
  }

  /**
   * VesselType create
   */
  export type VesselTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VesselType.
     */
    data: XOR<VesselTypeCreateInput, VesselTypeUncheckedCreateInput>
  }

  /**
   * VesselType createMany
   */
  export type VesselTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VesselTypes.
     */
    data: VesselTypeCreateManyInput | VesselTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VesselType createManyAndReturn
   */
  export type VesselTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * The data used to create many VesselTypes.
     */
    data: VesselTypeCreateManyInput | VesselTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VesselType update
   */
  export type VesselTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VesselType.
     */
    data: XOR<VesselTypeUpdateInput, VesselTypeUncheckedUpdateInput>
    /**
     * Choose, which VesselType to update.
     */
    where: VesselTypeWhereUniqueInput
  }

  /**
   * VesselType updateMany
   */
  export type VesselTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VesselTypes.
     */
    data: XOR<VesselTypeUpdateManyMutationInput, VesselTypeUncheckedUpdateManyInput>
    /**
     * Filter which VesselTypes to update
     */
    where?: VesselTypeWhereInput
    /**
     * Limit how many VesselTypes to update.
     */
    limit?: number
  }

  /**
   * VesselType updateManyAndReturn
   */
  export type VesselTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * The data used to update VesselTypes.
     */
    data: XOR<VesselTypeUpdateManyMutationInput, VesselTypeUncheckedUpdateManyInput>
    /**
     * Filter which VesselTypes to update
     */
    where?: VesselTypeWhereInput
    /**
     * Limit how many VesselTypes to update.
     */
    limit?: number
  }

  /**
   * VesselType upsert
   */
  export type VesselTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VesselType to update in case it exists.
     */
    where: VesselTypeWhereUniqueInput
    /**
     * In case the VesselType found by the `where` argument doesn't exist, create a new VesselType with this data.
     */
    create: XOR<VesselTypeCreateInput, VesselTypeUncheckedCreateInput>
    /**
     * In case the VesselType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VesselTypeUpdateInput, VesselTypeUncheckedUpdateInput>
  }

  /**
   * VesselType delete
   */
  export type VesselTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
    /**
     * Filter which VesselType to delete.
     */
    where: VesselTypeWhereUniqueInput
  }

  /**
   * VesselType deleteMany
   */
  export type VesselTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VesselTypes to delete
     */
    where?: VesselTypeWhereInput
    /**
     * Limit how many VesselTypes to delete.
     */
    limit?: number
  }

  /**
   * VesselType.vessels
   */
  export type VesselType$vesselsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    where?: VesselWhereInput
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    cursor?: VesselWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * VesselType without action
   */
  export type VesselTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VesselType
     */
    select?: VesselTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VesselType
     */
    omit?: VesselTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselTypeInclude<ExtArgs> | null
  }


  /**
   * Model Vessel
   */

  export type AggregateVessel = {
    _count: VesselCountAggregateOutputType | null
    _avg: VesselAvgAggregateOutputType | null
    _sum: VesselSumAggregateOutputType | null
    _min: VesselMinAggregateOutputType | null
    _max: VesselMaxAggregateOutputType | null
  }

  export type VesselAvgAggregateOutputType = {
    id: number | null
    vesselTypeId: number | null
  }

  export type VesselSumAggregateOutputType = {
    id: number | null
    vesselTypeId: number | null
  }

  export type VesselMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    vesselTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VesselMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    vesselTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VesselCountAggregateOutputType = {
    id: number
    name: number
    image: number
    description: number
    vesselTypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VesselAvgAggregateInputType = {
    id?: true
    vesselTypeId?: true
  }

  export type VesselSumAggregateInputType = {
    id?: true
    vesselTypeId?: true
  }

  export type VesselMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    vesselTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VesselMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    vesselTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VesselCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    vesselTypeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VesselAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vessel to aggregate.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vessels
    **/
    _count?: true | VesselCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VesselAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VesselSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VesselMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VesselMaxAggregateInputType
  }

  export type GetVesselAggregateType<T extends VesselAggregateArgs> = {
        [P in keyof T & keyof AggregateVessel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVessel[P]>
      : GetScalarType<T[P], AggregateVessel[P]>
  }




  export type VesselGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VesselWhereInput
    orderBy?: VesselOrderByWithAggregationInput | VesselOrderByWithAggregationInput[]
    by: VesselScalarFieldEnum[] | VesselScalarFieldEnum
    having?: VesselScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VesselCountAggregateInputType | true
    _avg?: VesselAvgAggregateInputType
    _sum?: VesselSumAggregateInputType
    _min?: VesselMinAggregateInputType
    _max?: VesselMaxAggregateInputType
  }

  export type VesselGroupByOutputType = {
    id: number
    name: string
    image: string
    description: string
    vesselTypeId: number
    createdAt: Date
    updatedAt: Date
    _count: VesselCountAggregateOutputType | null
    _avg: VesselAvgAggregateOutputType | null
    _sum: VesselSumAggregateOutputType | null
    _min: VesselMinAggregateOutputType | null
    _max: VesselMaxAggregateOutputType | null
  }

  type GetVesselGroupByPayload<T extends VesselGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VesselGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VesselGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VesselGroupByOutputType[P]>
            : GetScalarType<T[P], VesselGroupByOutputType[P]>
        }
      >
    >


  export type VesselSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    vesselTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vesselType?: boolean | VesselTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vessel"]>

  export type VesselSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    vesselTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vesselType?: boolean | VesselTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vessel"]>

  export type VesselSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    vesselTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vesselType?: boolean | VesselTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vessel"]>

  export type VesselSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    vesselTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VesselOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "description" | "vesselTypeId" | "createdAt" | "updatedAt", ExtArgs["result"]["vessel"]>
  export type VesselInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vesselType?: boolean | VesselTypeDefaultArgs<ExtArgs>
  }
  export type VesselIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vesselType?: boolean | VesselTypeDefaultArgs<ExtArgs>
  }
  export type VesselIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vesselType?: boolean | VesselTypeDefaultArgs<ExtArgs>
  }

  export type $VesselPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vessel"
    objects: {
      vesselType: Prisma.$VesselTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      description: string
      vesselTypeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vessel"]>
    composites: {}
  }

  type VesselGetPayload<S extends boolean | null | undefined | VesselDefaultArgs> = $Result.GetResult<Prisma.$VesselPayload, S>

  type VesselCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VesselFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VesselCountAggregateInputType | true
    }

  export interface VesselDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vessel'], meta: { name: 'Vessel' } }
    /**
     * Find zero or one Vessel that matches the filter.
     * @param {VesselFindUniqueArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VesselFindUniqueArgs>(args: SelectSubset<T, VesselFindUniqueArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vessel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VesselFindUniqueOrThrowArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VesselFindUniqueOrThrowArgs>(args: SelectSubset<T, VesselFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vessel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselFindFirstArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VesselFindFirstArgs>(args?: SelectSubset<T, VesselFindFirstArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vessel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselFindFirstOrThrowArgs} args - Arguments to find a Vessel
     * @example
     * // Get one Vessel
     * const vessel = await prisma.vessel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VesselFindFirstOrThrowArgs>(args?: SelectSubset<T, VesselFindFirstOrThrowArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vessels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vessels
     * const vessels = await prisma.vessel.findMany()
     * 
     * // Get first 10 Vessels
     * const vessels = await prisma.vessel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vesselWithIdOnly = await prisma.vessel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VesselFindManyArgs>(args?: SelectSubset<T, VesselFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vessel.
     * @param {VesselCreateArgs} args - Arguments to create a Vessel.
     * @example
     * // Create one Vessel
     * const Vessel = await prisma.vessel.create({
     *   data: {
     *     // ... data to create a Vessel
     *   }
     * })
     * 
     */
    create<T extends VesselCreateArgs>(args: SelectSubset<T, VesselCreateArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vessels.
     * @param {VesselCreateManyArgs} args - Arguments to create many Vessels.
     * @example
     * // Create many Vessels
     * const vessel = await prisma.vessel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VesselCreateManyArgs>(args?: SelectSubset<T, VesselCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vessels and returns the data saved in the database.
     * @param {VesselCreateManyAndReturnArgs} args - Arguments to create many Vessels.
     * @example
     * // Create many Vessels
     * const vessel = await prisma.vessel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vessels and only return the `id`
     * const vesselWithIdOnly = await prisma.vessel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VesselCreateManyAndReturnArgs>(args?: SelectSubset<T, VesselCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vessel.
     * @param {VesselDeleteArgs} args - Arguments to delete one Vessel.
     * @example
     * // Delete one Vessel
     * const Vessel = await prisma.vessel.delete({
     *   where: {
     *     // ... filter to delete one Vessel
     *   }
     * })
     * 
     */
    delete<T extends VesselDeleteArgs>(args: SelectSubset<T, VesselDeleteArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vessel.
     * @param {VesselUpdateArgs} args - Arguments to update one Vessel.
     * @example
     * // Update one Vessel
     * const vessel = await prisma.vessel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VesselUpdateArgs>(args: SelectSubset<T, VesselUpdateArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vessels.
     * @param {VesselDeleteManyArgs} args - Arguments to filter Vessels to delete.
     * @example
     * // Delete a few Vessels
     * const { count } = await prisma.vessel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VesselDeleteManyArgs>(args?: SelectSubset<T, VesselDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vessels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vessels
     * const vessel = await prisma.vessel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VesselUpdateManyArgs>(args: SelectSubset<T, VesselUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vessels and returns the data updated in the database.
     * @param {VesselUpdateManyAndReturnArgs} args - Arguments to update many Vessels.
     * @example
     * // Update many Vessels
     * const vessel = await prisma.vessel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vessels and only return the `id`
     * const vesselWithIdOnly = await prisma.vessel.updateManyAndReturn({
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
    updateManyAndReturn<T extends VesselUpdateManyAndReturnArgs>(args: SelectSubset<T, VesselUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vessel.
     * @param {VesselUpsertArgs} args - Arguments to update or create a Vessel.
     * @example
     * // Update or create a Vessel
     * const vessel = await prisma.vessel.upsert({
     *   create: {
     *     // ... data to create a Vessel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vessel we want to update
     *   }
     * })
     */
    upsert<T extends VesselUpsertArgs>(args: SelectSubset<T, VesselUpsertArgs<ExtArgs>>): Prisma__VesselClient<$Result.GetResult<Prisma.$VesselPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vessels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselCountArgs} args - Arguments to filter Vessels to count.
     * @example
     * // Count the number of Vessels
     * const count = await prisma.vessel.count({
     *   where: {
     *     // ... the filter for the Vessels we want to count
     *   }
     * })
    **/
    count<T extends VesselCountArgs>(
      args?: Subset<T, VesselCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VesselCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vessel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VesselAggregateArgs>(args: Subset<T, VesselAggregateArgs>): Prisma.PrismaPromise<GetVesselAggregateType<T>>

    /**
     * Group by Vessel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VesselGroupByArgs} args - Group by arguments.
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
      T extends VesselGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VesselGroupByArgs['orderBy'] }
        : { orderBy?: VesselGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VesselGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVesselGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vessel model
   */
  readonly fields: VesselFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vessel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VesselClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vesselType<T extends VesselTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VesselTypeDefaultArgs<ExtArgs>>): Prisma__VesselTypeClient<$Result.GetResult<Prisma.$VesselTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vessel model
   */
  interface VesselFieldRefs {
    readonly id: FieldRef<"Vessel", 'Int'>
    readonly name: FieldRef<"Vessel", 'String'>
    readonly image: FieldRef<"Vessel", 'String'>
    readonly description: FieldRef<"Vessel", 'String'>
    readonly vesselTypeId: FieldRef<"Vessel", 'Int'>
    readonly createdAt: FieldRef<"Vessel", 'DateTime'>
    readonly updatedAt: FieldRef<"Vessel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vessel findUnique
   */
  export type VesselFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel findUniqueOrThrow
   */
  export type VesselFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel findFirst
   */
  export type VesselFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vessels.
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vessels.
     */
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * Vessel findFirstOrThrow
   */
  export type VesselFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessel to fetch.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vessels.
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vessels.
     */
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * Vessel findMany
   */
  export type VesselFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter, which Vessels to fetch.
     */
    where?: VesselWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vessels to fetch.
     */
    orderBy?: VesselOrderByWithRelationInput | VesselOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vessels.
     */
    cursor?: VesselWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vessels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vessels.
     */
    skip?: number
    distinct?: VesselScalarFieldEnum | VesselScalarFieldEnum[]
  }

  /**
   * Vessel create
   */
  export type VesselCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * The data needed to create a Vessel.
     */
    data: XOR<VesselCreateInput, VesselUncheckedCreateInput>
  }

  /**
   * Vessel createMany
   */
  export type VesselCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vessels.
     */
    data: VesselCreateManyInput | VesselCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vessel createManyAndReturn
   */
  export type VesselCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * The data used to create many Vessels.
     */
    data: VesselCreateManyInput | VesselCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vessel update
   */
  export type VesselUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * The data needed to update a Vessel.
     */
    data: XOR<VesselUpdateInput, VesselUncheckedUpdateInput>
    /**
     * Choose, which Vessel to update.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel updateMany
   */
  export type VesselUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vessels.
     */
    data: XOR<VesselUpdateManyMutationInput, VesselUncheckedUpdateManyInput>
    /**
     * Filter which Vessels to update
     */
    where?: VesselWhereInput
    /**
     * Limit how many Vessels to update.
     */
    limit?: number
  }

  /**
   * Vessel updateManyAndReturn
   */
  export type VesselUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * The data used to update Vessels.
     */
    data: XOR<VesselUpdateManyMutationInput, VesselUncheckedUpdateManyInput>
    /**
     * Filter which Vessels to update
     */
    where?: VesselWhereInput
    /**
     * Limit how many Vessels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vessel upsert
   */
  export type VesselUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * The filter to search for the Vessel to update in case it exists.
     */
    where: VesselWhereUniqueInput
    /**
     * In case the Vessel found by the `where` argument doesn't exist, create a new Vessel with this data.
     */
    create: XOR<VesselCreateInput, VesselUncheckedCreateInput>
    /**
     * In case the Vessel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VesselUpdateInput, VesselUncheckedUpdateInput>
  }

  /**
   * Vessel delete
   */
  export type VesselDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
    /**
     * Filter which Vessel to delete.
     */
    where: VesselWhereUniqueInput
  }

  /**
   * Vessel deleteMany
   */
  export type VesselDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vessels to delete
     */
    where?: VesselWhereInput
    /**
     * Limit how many Vessels to delete.
     */
    limit?: number
  }

  /**
   * Vessel without action
   */
  export type VesselDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vessel
     */
    select?: VesselSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vessel
     */
    omit?: VesselOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VesselInclude<ExtArgs> | null
  }


  /**
   * Model Exhibition
   */

  export type AggregateExhibition = {
    _count: ExhibitionCountAggregateOutputType | null
    _avg: ExhibitionAvgAggregateOutputType | null
    _sum: ExhibitionSumAggregateOutputType | null
    _min: ExhibitionMinAggregateOutputType | null
    _max: ExhibitionMaxAggregateOutputType | null
  }

  export type ExhibitionAvgAggregateOutputType = {
    id: number | null
  }

  export type ExhibitionSumAggregateOutputType = {
    id: number | null
  }

  export type ExhibitionMinAggregateOutputType = {
    id: number | null
    image: string | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitionMaxAggregateOutputType = {
    id: number | null
    image: string | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExhibitionCountAggregateOutputType = {
    id: number
    image: number
    description: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExhibitionAvgAggregateInputType = {
    id?: true
  }

  export type ExhibitionSumAggregateInputType = {
    id?: true
  }

  export type ExhibitionMinAggregateInputType = {
    id?: true
    image?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitionMaxAggregateInputType = {
    id?: true
    image?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExhibitionCountAggregateInputType = {
    id?: true
    image?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExhibitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exhibition to aggregate.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exhibitions
    **/
    _count?: true | ExhibitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExhibitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExhibitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExhibitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExhibitionMaxAggregateInputType
  }

  export type GetExhibitionAggregateType<T extends ExhibitionAggregateArgs> = {
        [P in keyof T & keyof AggregateExhibition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExhibition[P]>
      : GetScalarType<T[P], AggregateExhibition[P]>
  }




  export type ExhibitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExhibitionWhereInput
    orderBy?: ExhibitionOrderByWithAggregationInput | ExhibitionOrderByWithAggregationInput[]
    by: ExhibitionScalarFieldEnum[] | ExhibitionScalarFieldEnum
    having?: ExhibitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExhibitionCountAggregateInputType | true
    _avg?: ExhibitionAvgAggregateInputType
    _sum?: ExhibitionSumAggregateInputType
    _min?: ExhibitionMinAggregateInputType
    _max?: ExhibitionMaxAggregateInputType
  }

  export type ExhibitionGroupByOutputType = {
    id: number
    image: string
    description: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: ExhibitionCountAggregateOutputType | null
    _avg: ExhibitionAvgAggregateOutputType | null
    _sum: ExhibitionSumAggregateOutputType | null
    _min: ExhibitionMinAggregateOutputType | null
    _max: ExhibitionMaxAggregateOutputType | null
  }

  type GetExhibitionGroupByPayload<T extends ExhibitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExhibitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExhibitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExhibitionGroupByOutputType[P]>
            : GetScalarType<T[P], ExhibitionGroupByOutputType[P]>
        }
      >
    >


  export type ExhibitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exhibition"]>

  export type ExhibitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exhibition"]>

  export type ExhibitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exhibition"]>

  export type ExhibitionSelectScalar = {
    id?: boolean
    image?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExhibitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "description" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["exhibition"]>

  export type $ExhibitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exhibition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      description: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exhibition"]>
    composites: {}
  }

  type ExhibitionGetPayload<S extends boolean | null | undefined | ExhibitionDefaultArgs> = $Result.GetResult<Prisma.$ExhibitionPayload, S>

  type ExhibitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExhibitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExhibitionCountAggregateInputType | true
    }

  export interface ExhibitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exhibition'], meta: { name: 'Exhibition' } }
    /**
     * Find zero or one Exhibition that matches the filter.
     * @param {ExhibitionFindUniqueArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExhibitionFindUniqueArgs>(args: SelectSubset<T, ExhibitionFindUniqueArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exhibition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExhibitionFindUniqueOrThrowArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExhibitionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExhibitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exhibition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionFindFirstArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExhibitionFindFirstArgs>(args?: SelectSubset<T, ExhibitionFindFirstArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exhibition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionFindFirstOrThrowArgs} args - Arguments to find a Exhibition
     * @example
     * // Get one Exhibition
     * const exhibition = await prisma.exhibition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExhibitionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExhibitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exhibitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exhibitions
     * const exhibitions = await prisma.exhibition.findMany()
     * 
     * // Get first 10 Exhibitions
     * const exhibitions = await prisma.exhibition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exhibitionWithIdOnly = await prisma.exhibition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExhibitionFindManyArgs>(args?: SelectSubset<T, ExhibitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exhibition.
     * @param {ExhibitionCreateArgs} args - Arguments to create a Exhibition.
     * @example
     * // Create one Exhibition
     * const Exhibition = await prisma.exhibition.create({
     *   data: {
     *     // ... data to create a Exhibition
     *   }
     * })
     * 
     */
    create<T extends ExhibitionCreateArgs>(args: SelectSubset<T, ExhibitionCreateArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exhibitions.
     * @param {ExhibitionCreateManyArgs} args - Arguments to create many Exhibitions.
     * @example
     * // Create many Exhibitions
     * const exhibition = await prisma.exhibition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExhibitionCreateManyArgs>(args?: SelectSubset<T, ExhibitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exhibitions and returns the data saved in the database.
     * @param {ExhibitionCreateManyAndReturnArgs} args - Arguments to create many Exhibitions.
     * @example
     * // Create many Exhibitions
     * const exhibition = await prisma.exhibition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exhibitions and only return the `id`
     * const exhibitionWithIdOnly = await prisma.exhibition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExhibitionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExhibitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exhibition.
     * @param {ExhibitionDeleteArgs} args - Arguments to delete one Exhibition.
     * @example
     * // Delete one Exhibition
     * const Exhibition = await prisma.exhibition.delete({
     *   where: {
     *     // ... filter to delete one Exhibition
     *   }
     * })
     * 
     */
    delete<T extends ExhibitionDeleteArgs>(args: SelectSubset<T, ExhibitionDeleteArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exhibition.
     * @param {ExhibitionUpdateArgs} args - Arguments to update one Exhibition.
     * @example
     * // Update one Exhibition
     * const exhibition = await prisma.exhibition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExhibitionUpdateArgs>(args: SelectSubset<T, ExhibitionUpdateArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exhibitions.
     * @param {ExhibitionDeleteManyArgs} args - Arguments to filter Exhibitions to delete.
     * @example
     * // Delete a few Exhibitions
     * const { count } = await prisma.exhibition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExhibitionDeleteManyArgs>(args?: SelectSubset<T, ExhibitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exhibitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exhibitions
     * const exhibition = await prisma.exhibition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExhibitionUpdateManyArgs>(args: SelectSubset<T, ExhibitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exhibitions and returns the data updated in the database.
     * @param {ExhibitionUpdateManyAndReturnArgs} args - Arguments to update many Exhibitions.
     * @example
     * // Update many Exhibitions
     * const exhibition = await prisma.exhibition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exhibitions and only return the `id`
     * const exhibitionWithIdOnly = await prisma.exhibition.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExhibitionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExhibitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exhibition.
     * @param {ExhibitionUpsertArgs} args - Arguments to update or create a Exhibition.
     * @example
     * // Update or create a Exhibition
     * const exhibition = await prisma.exhibition.upsert({
     *   create: {
     *     // ... data to create a Exhibition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exhibition we want to update
     *   }
     * })
     */
    upsert<T extends ExhibitionUpsertArgs>(args: SelectSubset<T, ExhibitionUpsertArgs<ExtArgs>>): Prisma__ExhibitionClient<$Result.GetResult<Prisma.$ExhibitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exhibitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionCountArgs} args - Arguments to filter Exhibitions to count.
     * @example
     * // Count the number of Exhibitions
     * const count = await prisma.exhibition.count({
     *   where: {
     *     // ... the filter for the Exhibitions we want to count
     *   }
     * })
    **/
    count<T extends ExhibitionCountArgs>(
      args?: Subset<T, ExhibitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExhibitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exhibition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExhibitionAggregateArgs>(args: Subset<T, ExhibitionAggregateArgs>): Prisma.PrismaPromise<GetExhibitionAggregateType<T>>

    /**
     * Group by Exhibition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExhibitionGroupByArgs} args - Group by arguments.
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
      T extends ExhibitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExhibitionGroupByArgs['orderBy'] }
        : { orderBy?: ExhibitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExhibitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExhibitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exhibition model
   */
  readonly fields: ExhibitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exhibition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExhibitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Exhibition model
   */
  interface ExhibitionFieldRefs {
    readonly id: FieldRef<"Exhibition", 'Int'>
    readonly image: FieldRef<"Exhibition", 'String'>
    readonly description: FieldRef<"Exhibition", 'String'>
    readonly date: FieldRef<"Exhibition", 'DateTime'>
    readonly createdAt: FieldRef<"Exhibition", 'DateTime'>
    readonly updatedAt: FieldRef<"Exhibition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exhibition findUnique
   */
  export type ExhibitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition findUniqueOrThrow
   */
  export type ExhibitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition findFirst
   */
  export type ExhibitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exhibitions.
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exhibitions.
     */
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Exhibition findFirstOrThrow
   */
  export type ExhibitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Filter, which Exhibition to fetch.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exhibitions.
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exhibitions.
     */
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Exhibition findMany
   */
  export type ExhibitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Filter, which Exhibitions to fetch.
     */
    where?: ExhibitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exhibitions to fetch.
     */
    orderBy?: ExhibitionOrderByWithRelationInput | ExhibitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exhibitions.
     */
    cursor?: ExhibitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exhibitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exhibitions.
     */
    skip?: number
    distinct?: ExhibitionScalarFieldEnum | ExhibitionScalarFieldEnum[]
  }

  /**
   * Exhibition create
   */
  export type ExhibitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * The data needed to create a Exhibition.
     */
    data: XOR<ExhibitionCreateInput, ExhibitionUncheckedCreateInput>
  }

  /**
   * Exhibition createMany
   */
  export type ExhibitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exhibitions.
     */
    data: ExhibitionCreateManyInput | ExhibitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exhibition createManyAndReturn
   */
  export type ExhibitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * The data used to create many Exhibitions.
     */
    data: ExhibitionCreateManyInput | ExhibitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exhibition update
   */
  export type ExhibitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * The data needed to update a Exhibition.
     */
    data: XOR<ExhibitionUpdateInput, ExhibitionUncheckedUpdateInput>
    /**
     * Choose, which Exhibition to update.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition updateMany
   */
  export type ExhibitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exhibitions.
     */
    data: XOR<ExhibitionUpdateManyMutationInput, ExhibitionUncheckedUpdateManyInput>
    /**
     * Filter which Exhibitions to update
     */
    where?: ExhibitionWhereInput
    /**
     * Limit how many Exhibitions to update.
     */
    limit?: number
  }

  /**
   * Exhibition updateManyAndReturn
   */
  export type ExhibitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * The data used to update Exhibitions.
     */
    data: XOR<ExhibitionUpdateManyMutationInput, ExhibitionUncheckedUpdateManyInput>
    /**
     * Filter which Exhibitions to update
     */
    where?: ExhibitionWhereInput
    /**
     * Limit how many Exhibitions to update.
     */
    limit?: number
  }

  /**
   * Exhibition upsert
   */
  export type ExhibitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * The filter to search for the Exhibition to update in case it exists.
     */
    where: ExhibitionWhereUniqueInput
    /**
     * In case the Exhibition found by the `where` argument doesn't exist, create a new Exhibition with this data.
     */
    create: XOR<ExhibitionCreateInput, ExhibitionUncheckedCreateInput>
    /**
     * In case the Exhibition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExhibitionUpdateInput, ExhibitionUncheckedUpdateInput>
  }

  /**
   * Exhibition delete
   */
  export type ExhibitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
    /**
     * Filter which Exhibition to delete.
     */
    where: ExhibitionWhereUniqueInput
  }

  /**
   * Exhibition deleteMany
   */
  export type ExhibitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exhibitions to delete
     */
    where?: ExhibitionWhereInput
    /**
     * Limit how many Exhibitions to delete.
     */
    limit?: number
  }

  /**
   * Exhibition without action
   */
  export type ExhibitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exhibition
     */
    select?: ExhibitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exhibition
     */
    omit?: ExhibitionOmit<ExtArgs> | null
  }


  /**
   * Model AboutUs
   */

  export type AggregateAboutUs = {
    _count: AboutUsCountAggregateOutputType | null
    _avg: AboutUsAvgAggregateOutputType | null
    _sum: AboutUsSumAggregateOutputType | null
    _min: AboutUsMinAggregateOutputType | null
    _max: AboutUsMaxAggregateOutputType | null
  }

  export type AboutUsAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutUsSumAggregateOutputType = {
    id: number | null
  }

  export type AboutUsMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutUsMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutUsCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutUsAvgAggregateInputType = {
    id?: true
  }

  export type AboutUsSumAggregateInputType = {
    id?: true
  }

  export type AboutUsMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutUsMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutUsCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutUsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutUs to aggregate.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aboutuses
    **/
    _count?: true | AboutUsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutUsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutUsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutUsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutUsMaxAggregateInputType
  }

  export type GetAboutUsAggregateType<T extends AboutUsAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutUs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutUs[P]>
      : GetScalarType<T[P], AggregateAboutUs[P]>
  }




  export type AboutUsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutUsWhereInput
    orderBy?: AboutUsOrderByWithAggregationInput | AboutUsOrderByWithAggregationInput[]
    by: AboutUsScalarFieldEnum[] | AboutUsScalarFieldEnum
    having?: AboutUsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutUsCountAggregateInputType | true
    _avg?: AboutUsAvgAggregateInputType
    _sum?: AboutUsSumAggregateInputType
    _min?: AboutUsMinAggregateInputType
    _max?: AboutUsMaxAggregateInputType
  }

  export type AboutUsGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: AboutUsCountAggregateOutputType | null
    _avg: AboutUsAvgAggregateOutputType | null
    _sum: AboutUsSumAggregateOutputType | null
    _min: AboutUsMinAggregateOutputType | null
    _max: AboutUsMaxAggregateOutputType | null
  }

  type GetAboutUsGroupByPayload<T extends AboutUsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutUsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutUsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutUsGroupByOutputType[P]>
            : GetScalarType<T[P], AboutUsGroupByOutputType[P]>
        }
      >
    >


  export type AboutUsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutUs"]>

  export type AboutUsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutUs"]>

  export type AboutUsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutUs"]>

  export type AboutUsSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutUsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutUs"]>

  export type $AboutUsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutUs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutUs"]>
    composites: {}
  }

  type AboutUsGetPayload<S extends boolean | null | undefined | AboutUsDefaultArgs> = $Result.GetResult<Prisma.$AboutUsPayload, S>

  type AboutUsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutUsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutUsCountAggregateInputType | true
    }

  export interface AboutUsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutUs'], meta: { name: 'AboutUs' } }
    /**
     * Find zero or one AboutUs that matches the filter.
     * @param {AboutUsFindUniqueArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutUsFindUniqueArgs>(args: SelectSubset<T, AboutUsFindUniqueArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutUs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutUsFindUniqueOrThrowArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutUsFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutUsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutUs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsFindFirstArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutUsFindFirstArgs>(args?: SelectSubset<T, AboutUsFindFirstArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutUs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsFindFirstOrThrowArgs} args - Arguments to find a AboutUs
     * @example
     * // Get one AboutUs
     * const aboutUs = await prisma.aboutUs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutUsFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutUsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aboutuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aboutuses
     * const aboutuses = await prisma.aboutUs.findMany()
     * 
     * // Get first 10 Aboutuses
     * const aboutuses = await prisma.aboutUs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutUsWithIdOnly = await prisma.aboutUs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutUsFindManyArgs>(args?: SelectSubset<T, AboutUsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutUs.
     * @param {AboutUsCreateArgs} args - Arguments to create a AboutUs.
     * @example
     * // Create one AboutUs
     * const AboutUs = await prisma.aboutUs.create({
     *   data: {
     *     // ... data to create a AboutUs
     *   }
     * })
     * 
     */
    create<T extends AboutUsCreateArgs>(args: SelectSubset<T, AboutUsCreateArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aboutuses.
     * @param {AboutUsCreateManyArgs} args - Arguments to create many Aboutuses.
     * @example
     * // Create many Aboutuses
     * const aboutUs = await prisma.aboutUs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutUsCreateManyArgs>(args?: SelectSubset<T, AboutUsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aboutuses and returns the data saved in the database.
     * @param {AboutUsCreateManyAndReturnArgs} args - Arguments to create many Aboutuses.
     * @example
     * // Create many Aboutuses
     * const aboutUs = await prisma.aboutUs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aboutuses and only return the `id`
     * const aboutUsWithIdOnly = await prisma.aboutUs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutUsCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutUsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutUs.
     * @param {AboutUsDeleteArgs} args - Arguments to delete one AboutUs.
     * @example
     * // Delete one AboutUs
     * const AboutUs = await prisma.aboutUs.delete({
     *   where: {
     *     // ... filter to delete one AboutUs
     *   }
     * })
     * 
     */
    delete<T extends AboutUsDeleteArgs>(args: SelectSubset<T, AboutUsDeleteArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutUs.
     * @param {AboutUsUpdateArgs} args - Arguments to update one AboutUs.
     * @example
     * // Update one AboutUs
     * const aboutUs = await prisma.aboutUs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutUsUpdateArgs>(args: SelectSubset<T, AboutUsUpdateArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aboutuses.
     * @param {AboutUsDeleteManyArgs} args - Arguments to filter Aboutuses to delete.
     * @example
     * // Delete a few Aboutuses
     * const { count } = await prisma.aboutUs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutUsDeleteManyArgs>(args?: SelectSubset<T, AboutUsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aboutuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aboutuses
     * const aboutUs = await prisma.aboutUs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutUsUpdateManyArgs>(args: SelectSubset<T, AboutUsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aboutuses and returns the data updated in the database.
     * @param {AboutUsUpdateManyAndReturnArgs} args - Arguments to update many Aboutuses.
     * @example
     * // Update many Aboutuses
     * const aboutUs = await prisma.aboutUs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aboutuses and only return the `id`
     * const aboutUsWithIdOnly = await prisma.aboutUs.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutUsUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutUsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutUs.
     * @param {AboutUsUpsertArgs} args - Arguments to update or create a AboutUs.
     * @example
     * // Update or create a AboutUs
     * const aboutUs = await prisma.aboutUs.upsert({
     *   create: {
     *     // ... data to create a AboutUs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutUs we want to update
     *   }
     * })
     */
    upsert<T extends AboutUsUpsertArgs>(args: SelectSubset<T, AboutUsUpsertArgs<ExtArgs>>): Prisma__AboutUsClient<$Result.GetResult<Prisma.$AboutUsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aboutuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsCountArgs} args - Arguments to filter Aboutuses to count.
     * @example
     * // Count the number of Aboutuses
     * const count = await prisma.aboutUs.count({
     *   where: {
     *     // ... the filter for the Aboutuses we want to count
     *   }
     * })
    **/
    count<T extends AboutUsCountArgs>(
      args?: Subset<T, AboutUsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutUsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutUsAggregateArgs>(args: Subset<T, AboutUsAggregateArgs>): Prisma.PrismaPromise<GetAboutUsAggregateType<T>>

    /**
     * Group by AboutUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUsGroupByArgs} args - Group by arguments.
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
      T extends AboutUsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutUsGroupByArgs['orderBy'] }
        : { orderBy?: AboutUsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutUsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutUsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutUs model
   */
  readonly fields: AboutUsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutUs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutUsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AboutUs model
   */
  interface AboutUsFieldRefs {
    readonly id: FieldRef<"AboutUs", 'Int'>
    readonly description: FieldRef<"AboutUs", 'String'>
    readonly createdAt: FieldRef<"AboutUs", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutUs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutUs findUnique
   */
  export type AboutUsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs findUniqueOrThrow
   */
  export type AboutUsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs findFirst
   */
  export type AboutUsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aboutuses.
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aboutuses.
     */
    distinct?: AboutUsScalarFieldEnum | AboutUsScalarFieldEnum[]
  }

  /**
   * AboutUs findFirstOrThrow
   */
  export type AboutUsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which AboutUs to fetch.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aboutuses.
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aboutuses.
     */
    distinct?: AboutUsScalarFieldEnum | AboutUsScalarFieldEnum[]
  }

  /**
   * AboutUs findMany
   */
  export type AboutUsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter, which Aboutuses to fetch.
     */
    where?: AboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aboutuses to fetch.
     */
    orderBy?: AboutUsOrderByWithRelationInput | AboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aboutuses.
     */
    cursor?: AboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aboutuses.
     */
    skip?: number
    distinct?: AboutUsScalarFieldEnum | AboutUsScalarFieldEnum[]
  }

  /**
   * AboutUs create
   */
  export type AboutUsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutUs.
     */
    data: XOR<AboutUsCreateInput, AboutUsUncheckedCreateInput>
  }

  /**
   * AboutUs createMany
   */
  export type AboutUsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aboutuses.
     */
    data: AboutUsCreateManyInput | AboutUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutUs createManyAndReturn
   */
  export type AboutUsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data used to create many Aboutuses.
     */
    data: AboutUsCreateManyInput | AboutUsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutUs update
   */
  export type AboutUsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutUs.
     */
    data: XOR<AboutUsUpdateInput, AboutUsUncheckedUpdateInput>
    /**
     * Choose, which AboutUs to update.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs updateMany
   */
  export type AboutUsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aboutuses.
     */
    data: XOR<AboutUsUpdateManyMutationInput, AboutUsUncheckedUpdateManyInput>
    /**
     * Filter which Aboutuses to update
     */
    where?: AboutUsWhereInput
    /**
     * Limit how many Aboutuses to update.
     */
    limit?: number
  }

  /**
   * AboutUs updateManyAndReturn
   */
  export type AboutUsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The data used to update Aboutuses.
     */
    data: XOR<AboutUsUpdateManyMutationInput, AboutUsUncheckedUpdateManyInput>
    /**
     * Filter which Aboutuses to update
     */
    where?: AboutUsWhereInput
    /**
     * Limit how many Aboutuses to update.
     */
    limit?: number
  }

  /**
   * AboutUs upsert
   */
  export type AboutUsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutUs to update in case it exists.
     */
    where: AboutUsWhereUniqueInput
    /**
     * In case the AboutUs found by the `where` argument doesn't exist, create a new AboutUs with this data.
     */
    create: XOR<AboutUsCreateInput, AboutUsUncheckedCreateInput>
    /**
     * In case the AboutUs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutUsUpdateInput, AboutUsUncheckedUpdateInput>
  }

  /**
   * AboutUs delete
   */
  export type AboutUsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
    /**
     * Filter which AboutUs to delete.
     */
    where: AboutUsWhereUniqueInput
  }

  /**
   * AboutUs deleteMany
   */
  export type AboutUsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aboutuses to delete
     */
    where?: AboutUsWhereInput
    /**
     * Limit how many Aboutuses to delete.
     */
    limit?: number
  }

  /**
   * AboutUs without action
   */
  export type AboutUsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutUs
     */
    select?: AboutUsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutUs
     */
    omit?: AboutUsOmit<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    gmapsUrl: 'gmapsUrl',
    linkedin: 'linkedin',
    facebook: 'facebook',
    instagram: 'instagram',
    tiktok: 'tiktok',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const VisionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisionScalarFieldEnum = (typeof VisionScalarFieldEnum)[keyof typeof VisionScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const CoreValueScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoreValueScalarFieldEnum = (typeof CoreValueScalarFieldEnum)[keyof typeof CoreValueScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const VesselTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VesselTypeScalarFieldEnum = (typeof VesselTypeScalarFieldEnum)[keyof typeof VesselTypeScalarFieldEnum]


  export const VesselScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    description: 'description',
    vesselTypeId: 'vesselTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VesselScalarFieldEnum = (typeof VesselScalarFieldEnum)[keyof typeof VesselScalarFieldEnum]


  export const ExhibitionScalarFieldEnum: {
    id: 'id',
    image: 'image',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExhibitionScalarFieldEnum = (typeof ExhibitionScalarFieldEnum)[keyof typeof ExhibitionScalarFieldEnum]


  export const AboutUsScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutUsScalarFieldEnum = (typeof AboutUsScalarFieldEnum)[keyof typeof AboutUsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumAccountStatusWithAggregatesFilter<"User"> | $Enums.AccountStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    gmapsUrl?: StringNullableFilter<"Company"> | string | null
    linkedin?: StringNullableFilter<"Company"> | string | null
    facebook?: StringNullableFilter<"Company"> | string | null
    instagram?: StringNullableFilter<"Company"> | string | null
    tiktok?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    gmapsUrl?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    tiktok?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    gmapsUrl?: StringNullableFilter<"Company"> | string | null
    linkedin?: StringNullableFilter<"Company"> | string | null
    facebook?: StringNullableFilter<"Company"> | string | null
    instagram?: StringNullableFilter<"Company"> | string | null
    tiktok?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    gmapsUrl?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    tiktok?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    address?: StringWithAggregatesFilter<"Company"> | string
    gmapsUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Company"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Company"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Company"> | string | null
    tiktok?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type VisionWhereInput = {
    AND?: VisionWhereInput | VisionWhereInput[]
    OR?: VisionWhereInput[]
    NOT?: VisionWhereInput | VisionWhereInput[]
    id?: IntFilter<"Vision"> | number
    description?: StringFilter<"Vision"> | string
    createdAt?: DateTimeFilter<"Vision"> | Date | string
    updatedAt?: DateTimeFilter<"Vision"> | Date | string
  }

  export type VisionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisionWhereInput | VisionWhereInput[]
    OR?: VisionWhereInput[]
    NOT?: VisionWhereInput | VisionWhereInput[]
    description?: StringFilter<"Vision"> | string
    createdAt?: DateTimeFilter<"Vision"> | Date | string
    updatedAt?: DateTimeFilter<"Vision"> | Date | string
  }, "id">

  export type VisionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisionCountOrderByAggregateInput
    _avg?: VisionAvgOrderByAggregateInput
    _max?: VisionMaxOrderByAggregateInput
    _min?: VisionMinOrderByAggregateInput
    _sum?: VisionSumOrderByAggregateInput
  }

  export type VisionScalarWhereWithAggregatesInput = {
    AND?: VisionScalarWhereWithAggregatesInput | VisionScalarWhereWithAggregatesInput[]
    OR?: VisionScalarWhereWithAggregatesInput[]
    NOT?: VisionScalarWhereWithAggregatesInput | VisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vision"> | number
    description?: StringWithAggregatesFilter<"Vision"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vision"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vision"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    description?: StringFilter<"Mission"> | string
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    description?: StringFilter<"Mission"> | string
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    description?: StringWithAggregatesFilter<"Mission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type CoreValueWhereInput = {
    AND?: CoreValueWhereInput | CoreValueWhereInput[]
    OR?: CoreValueWhereInput[]
    NOT?: CoreValueWhereInput | CoreValueWhereInput[]
    id?: IntFilter<"CoreValue"> | number
    title?: StringFilter<"CoreValue"> | string
    createdAt?: DateTimeFilter<"CoreValue"> | Date | string
    updatedAt?: DateTimeFilter<"CoreValue"> | Date | string
  }

  export type CoreValueOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoreValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoreValueWhereInput | CoreValueWhereInput[]
    OR?: CoreValueWhereInput[]
    NOT?: CoreValueWhereInput | CoreValueWhereInput[]
    title?: StringFilter<"CoreValue"> | string
    createdAt?: DateTimeFilter<"CoreValue"> | Date | string
    updatedAt?: DateTimeFilter<"CoreValue"> | Date | string
  }, "id">

  export type CoreValueOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoreValueCountOrderByAggregateInput
    _avg?: CoreValueAvgOrderByAggregateInput
    _max?: CoreValueMaxOrderByAggregateInput
    _min?: CoreValueMinOrderByAggregateInput
    _sum?: CoreValueSumOrderByAggregateInput
  }

  export type CoreValueScalarWhereWithAggregatesInput = {
    AND?: CoreValueScalarWhereWithAggregatesInput | CoreValueScalarWhereWithAggregatesInput[]
    OR?: CoreValueScalarWhereWithAggregatesInput[]
    NOT?: CoreValueScalarWhereWithAggregatesInput | CoreValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoreValue"> | number
    title?: StringWithAggregatesFilter<"CoreValue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoreValue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoreValue"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type VesselTypeWhereInput = {
    AND?: VesselTypeWhereInput | VesselTypeWhereInput[]
    OR?: VesselTypeWhereInput[]
    NOT?: VesselTypeWhereInput | VesselTypeWhereInput[]
    id?: IntFilter<"VesselType"> | number
    name?: StringFilter<"VesselType"> | string
    createdAt?: DateTimeFilter<"VesselType"> | Date | string
    updatedAt?: DateTimeFilter<"VesselType"> | Date | string
    vessels?: VesselListRelationFilter
  }

  export type VesselTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vessels?: VesselOrderByRelationAggregateInput
  }

  export type VesselTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VesselTypeWhereInput | VesselTypeWhereInput[]
    OR?: VesselTypeWhereInput[]
    NOT?: VesselTypeWhereInput | VesselTypeWhereInput[]
    createdAt?: DateTimeFilter<"VesselType"> | Date | string
    updatedAt?: DateTimeFilter<"VesselType"> | Date | string
    vessels?: VesselListRelationFilter
  }, "id" | "name">

  export type VesselTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VesselTypeCountOrderByAggregateInput
    _avg?: VesselTypeAvgOrderByAggregateInput
    _max?: VesselTypeMaxOrderByAggregateInput
    _min?: VesselTypeMinOrderByAggregateInput
    _sum?: VesselTypeSumOrderByAggregateInput
  }

  export type VesselTypeScalarWhereWithAggregatesInput = {
    AND?: VesselTypeScalarWhereWithAggregatesInput | VesselTypeScalarWhereWithAggregatesInput[]
    OR?: VesselTypeScalarWhereWithAggregatesInput[]
    NOT?: VesselTypeScalarWhereWithAggregatesInput | VesselTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VesselType"> | number
    name?: StringWithAggregatesFilter<"VesselType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VesselType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VesselType"> | Date | string
  }

  export type VesselWhereInput = {
    AND?: VesselWhereInput | VesselWhereInput[]
    OR?: VesselWhereInput[]
    NOT?: VesselWhereInput | VesselWhereInput[]
    id?: IntFilter<"Vessel"> | number
    name?: StringFilter<"Vessel"> | string
    image?: StringFilter<"Vessel"> | string
    description?: StringFilter<"Vessel"> | string
    vesselTypeId?: IntFilter<"Vessel"> | number
    createdAt?: DateTimeFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeFilter<"Vessel"> | Date | string
    vesselType?: XOR<VesselTypeScalarRelationFilter, VesselTypeWhereInput>
  }

  export type VesselOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    vesselTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vesselType?: VesselTypeOrderByWithRelationInput
  }

  export type VesselWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VesselWhereInput | VesselWhereInput[]
    OR?: VesselWhereInput[]
    NOT?: VesselWhereInput | VesselWhereInput[]
    name?: StringFilter<"Vessel"> | string
    image?: StringFilter<"Vessel"> | string
    description?: StringFilter<"Vessel"> | string
    vesselTypeId?: IntFilter<"Vessel"> | number
    createdAt?: DateTimeFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeFilter<"Vessel"> | Date | string
    vesselType?: XOR<VesselTypeScalarRelationFilter, VesselTypeWhereInput>
  }, "id">

  export type VesselOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    vesselTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VesselCountOrderByAggregateInput
    _avg?: VesselAvgOrderByAggregateInput
    _max?: VesselMaxOrderByAggregateInput
    _min?: VesselMinOrderByAggregateInput
    _sum?: VesselSumOrderByAggregateInput
  }

  export type VesselScalarWhereWithAggregatesInput = {
    AND?: VesselScalarWhereWithAggregatesInput | VesselScalarWhereWithAggregatesInput[]
    OR?: VesselScalarWhereWithAggregatesInput[]
    NOT?: VesselScalarWhereWithAggregatesInput | VesselScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vessel"> | number
    name?: StringWithAggregatesFilter<"Vessel"> | string
    image?: StringWithAggregatesFilter<"Vessel"> | string
    description?: StringWithAggregatesFilter<"Vessel"> | string
    vesselTypeId?: IntWithAggregatesFilter<"Vessel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vessel"> | Date | string
  }

  export type ExhibitionWhereInput = {
    AND?: ExhibitionWhereInput | ExhibitionWhereInput[]
    OR?: ExhibitionWhereInput[]
    NOT?: ExhibitionWhereInput | ExhibitionWhereInput[]
    id?: IntFilter<"Exhibition"> | number
    image?: StringFilter<"Exhibition"> | string
    description?: StringFilter<"Exhibition"> | string
    date?: DateTimeFilter<"Exhibition"> | Date | string
    createdAt?: DateTimeFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibition"> | Date | string
  }

  export type ExhibitionOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExhibitionWhereInput | ExhibitionWhereInput[]
    OR?: ExhibitionWhereInput[]
    NOT?: ExhibitionWhereInput | ExhibitionWhereInput[]
    image?: StringFilter<"Exhibition"> | string
    description?: StringFilter<"Exhibition"> | string
    date?: DateTimeFilter<"Exhibition"> | Date | string
    createdAt?: DateTimeFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeFilter<"Exhibition"> | Date | string
  }, "id">

  export type ExhibitionOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExhibitionCountOrderByAggregateInput
    _avg?: ExhibitionAvgOrderByAggregateInput
    _max?: ExhibitionMaxOrderByAggregateInput
    _min?: ExhibitionMinOrderByAggregateInput
    _sum?: ExhibitionSumOrderByAggregateInput
  }

  export type ExhibitionScalarWhereWithAggregatesInput = {
    AND?: ExhibitionScalarWhereWithAggregatesInput | ExhibitionScalarWhereWithAggregatesInput[]
    OR?: ExhibitionScalarWhereWithAggregatesInput[]
    NOT?: ExhibitionScalarWhereWithAggregatesInput | ExhibitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exhibition"> | number
    image?: StringWithAggregatesFilter<"Exhibition"> | string
    description?: StringWithAggregatesFilter<"Exhibition"> | string
    date?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exhibition"> | Date | string
  }

  export type AboutUsWhereInput = {
    AND?: AboutUsWhereInput | AboutUsWhereInput[]
    OR?: AboutUsWhereInput[]
    NOT?: AboutUsWhereInput | AboutUsWhereInput[]
    id?: IntFilter<"AboutUs"> | number
    description?: StringFilter<"AboutUs"> | string
    createdAt?: DateTimeFilter<"AboutUs"> | Date | string
    updatedAt?: DateTimeFilter<"AboutUs"> | Date | string
  }

  export type AboutUsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutUsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutUsWhereInput | AboutUsWhereInput[]
    OR?: AboutUsWhereInput[]
    NOT?: AboutUsWhereInput | AboutUsWhereInput[]
    description?: StringFilter<"AboutUs"> | string
    createdAt?: DateTimeFilter<"AboutUs"> | Date | string
    updatedAt?: DateTimeFilter<"AboutUs"> | Date | string
  }, "id">

  export type AboutUsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutUsCountOrderByAggregateInput
    _avg?: AboutUsAvgOrderByAggregateInput
    _max?: AboutUsMaxOrderByAggregateInput
    _min?: AboutUsMinOrderByAggregateInput
    _sum?: AboutUsSumOrderByAggregateInput
  }

  export type AboutUsScalarWhereWithAggregatesInput = {
    AND?: AboutUsScalarWhereWithAggregatesInput | AboutUsScalarWhereWithAggregatesInput[]
    OR?: AboutUsScalarWhereWithAggregatesInput[]
    NOT?: AboutUsScalarWhereWithAggregatesInput | AboutUsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutUs"> | number
    description?: StringWithAggregatesFilter<"AboutUs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AboutUs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutUs"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    address: string
    gmapsUrl?: string | null
    linkedin?: string | null
    facebook?: string | null
    instagram?: string | null
    tiktok?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    gmapsUrl?: string | null
    linkedin?: string | null
    facebook?: string | null
    instagram?: string | null
    tiktok?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gmapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gmapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    address: string
    gmapsUrl?: string | null
    linkedin?: string | null
    facebook?: string | null
    instagram?: string | null
    tiktok?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gmapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gmapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisionCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisionUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisionCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoreValueCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoreValueUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoreValueUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoreValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoreValueCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoreValueUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoreValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vessels?: VesselCreateNestedManyWithoutVesselTypeInput
  }

  export type VesselTypeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vessels?: VesselUncheckedCreateNestedManyWithoutVesselTypeInput
  }

  export type VesselTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vessels?: VesselUpdateManyWithoutVesselTypeNestedInput
  }

  export type VesselTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vessels?: VesselUncheckedUpdateManyWithoutVesselTypeNestedInput
  }

  export type VesselTypeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselCreateInput = {
    name: string
    image: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vesselType: VesselTypeCreateNestedOneWithoutVesselsInput
  }

  export type VesselUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    description: string
    vesselTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vesselType?: VesselTypeUpdateOneRequiredWithoutVesselsNestedInput
  }

  export type VesselUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vesselTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselCreateManyInput = {
    id?: number
    name: string
    image: string
    description: string
    vesselTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    vesselTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionCreateInput = {
    image: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionUncheckedCreateInput = {
    id?: number
    image: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionCreateManyInput = {
    id?: number
    image: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExhibitionUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExhibitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUsCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUsUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUsUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUsCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUsUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    gmapsUrl?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    tiktok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    gmapsUrl?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    tiktok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    gmapsUrl?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    tiktok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type VisionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoreValueCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoreValueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoreValueMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoreValueMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoreValueSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VesselListRelationFilter = {
    every?: VesselWhereInput
    some?: VesselWhereInput
    none?: VesselWhereInput
  }

  export type VesselOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VesselTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VesselTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VesselTypeScalarRelationFilter = {
    is?: VesselTypeWhereInput
    isNot?: VesselTypeWhereInput
  }

  export type VesselCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    vesselTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselAvgOrderByAggregateInput = {
    id?: SortOrder
    vesselTypeId?: SortOrder
  }

  export type VesselMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    vesselTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    vesselTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VesselSumOrderByAggregateInput = {
    id?: SortOrder
    vesselTypeId?: SortOrder
  }

  export type ExhibitionCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExhibitionMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExhibitionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutUsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutUsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutUsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutUsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutUsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VesselCreateNestedManyWithoutVesselTypeInput = {
    create?: XOR<VesselCreateWithoutVesselTypeInput, VesselUncheckedCreateWithoutVesselTypeInput> | VesselCreateWithoutVesselTypeInput[] | VesselUncheckedCreateWithoutVesselTypeInput[]
    connectOrCreate?: VesselCreateOrConnectWithoutVesselTypeInput | VesselCreateOrConnectWithoutVesselTypeInput[]
    createMany?: VesselCreateManyVesselTypeInputEnvelope
    connect?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
  }

  export type VesselUncheckedCreateNestedManyWithoutVesselTypeInput = {
    create?: XOR<VesselCreateWithoutVesselTypeInput, VesselUncheckedCreateWithoutVesselTypeInput> | VesselCreateWithoutVesselTypeInput[] | VesselUncheckedCreateWithoutVesselTypeInput[]
    connectOrCreate?: VesselCreateOrConnectWithoutVesselTypeInput | VesselCreateOrConnectWithoutVesselTypeInput[]
    createMany?: VesselCreateManyVesselTypeInputEnvelope
    connect?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
  }

  export type VesselUpdateManyWithoutVesselTypeNestedInput = {
    create?: XOR<VesselCreateWithoutVesselTypeInput, VesselUncheckedCreateWithoutVesselTypeInput> | VesselCreateWithoutVesselTypeInput[] | VesselUncheckedCreateWithoutVesselTypeInput[]
    connectOrCreate?: VesselCreateOrConnectWithoutVesselTypeInput | VesselCreateOrConnectWithoutVesselTypeInput[]
    upsert?: VesselUpsertWithWhereUniqueWithoutVesselTypeInput | VesselUpsertWithWhereUniqueWithoutVesselTypeInput[]
    createMany?: VesselCreateManyVesselTypeInputEnvelope
    set?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    disconnect?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    delete?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    connect?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    update?: VesselUpdateWithWhereUniqueWithoutVesselTypeInput | VesselUpdateWithWhereUniqueWithoutVesselTypeInput[]
    updateMany?: VesselUpdateManyWithWhereWithoutVesselTypeInput | VesselUpdateManyWithWhereWithoutVesselTypeInput[]
    deleteMany?: VesselScalarWhereInput | VesselScalarWhereInput[]
  }

  export type VesselUncheckedUpdateManyWithoutVesselTypeNestedInput = {
    create?: XOR<VesselCreateWithoutVesselTypeInput, VesselUncheckedCreateWithoutVesselTypeInput> | VesselCreateWithoutVesselTypeInput[] | VesselUncheckedCreateWithoutVesselTypeInput[]
    connectOrCreate?: VesselCreateOrConnectWithoutVesselTypeInput | VesselCreateOrConnectWithoutVesselTypeInput[]
    upsert?: VesselUpsertWithWhereUniqueWithoutVesselTypeInput | VesselUpsertWithWhereUniqueWithoutVesselTypeInput[]
    createMany?: VesselCreateManyVesselTypeInputEnvelope
    set?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    disconnect?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    delete?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    connect?: VesselWhereUniqueInput | VesselWhereUniqueInput[]
    update?: VesselUpdateWithWhereUniqueWithoutVesselTypeInput | VesselUpdateWithWhereUniqueWithoutVesselTypeInput[]
    updateMany?: VesselUpdateManyWithWhereWithoutVesselTypeInput | VesselUpdateManyWithWhereWithoutVesselTypeInput[]
    deleteMany?: VesselScalarWhereInput | VesselScalarWhereInput[]
  }

  export type VesselTypeCreateNestedOneWithoutVesselsInput = {
    create?: XOR<VesselTypeCreateWithoutVesselsInput, VesselTypeUncheckedCreateWithoutVesselsInput>
    connectOrCreate?: VesselTypeCreateOrConnectWithoutVesselsInput
    connect?: VesselTypeWhereUniqueInput
  }

  export type VesselTypeUpdateOneRequiredWithoutVesselsNestedInput = {
    create?: XOR<VesselTypeCreateWithoutVesselsInput, VesselTypeUncheckedCreateWithoutVesselsInput>
    connectOrCreate?: VesselTypeCreateOrConnectWithoutVesselsInput
    upsert?: VesselTypeUpsertWithoutVesselsInput
    connect?: VesselTypeWhereUniqueInput
    update?: XOR<XOR<VesselTypeUpdateToOneWithWhereWithoutVesselsInput, VesselTypeUpdateWithoutVesselsInput>, VesselTypeUncheckedUpdateWithoutVesselsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
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

  export type VesselCreateWithoutVesselTypeInput = {
    name: string
    image: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselUncheckedCreateWithoutVesselTypeInput = {
    id?: number
    name: string
    image: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselCreateOrConnectWithoutVesselTypeInput = {
    where: VesselWhereUniqueInput
    create: XOR<VesselCreateWithoutVesselTypeInput, VesselUncheckedCreateWithoutVesselTypeInput>
  }

  export type VesselCreateManyVesselTypeInputEnvelope = {
    data: VesselCreateManyVesselTypeInput | VesselCreateManyVesselTypeInput[]
    skipDuplicates?: boolean
  }

  export type VesselUpsertWithWhereUniqueWithoutVesselTypeInput = {
    where: VesselWhereUniqueInput
    update: XOR<VesselUpdateWithoutVesselTypeInput, VesselUncheckedUpdateWithoutVesselTypeInput>
    create: XOR<VesselCreateWithoutVesselTypeInput, VesselUncheckedCreateWithoutVesselTypeInput>
  }

  export type VesselUpdateWithWhereUniqueWithoutVesselTypeInput = {
    where: VesselWhereUniqueInput
    data: XOR<VesselUpdateWithoutVesselTypeInput, VesselUncheckedUpdateWithoutVesselTypeInput>
  }

  export type VesselUpdateManyWithWhereWithoutVesselTypeInput = {
    where: VesselScalarWhereInput
    data: XOR<VesselUpdateManyMutationInput, VesselUncheckedUpdateManyWithoutVesselTypeInput>
  }

  export type VesselScalarWhereInput = {
    AND?: VesselScalarWhereInput | VesselScalarWhereInput[]
    OR?: VesselScalarWhereInput[]
    NOT?: VesselScalarWhereInput | VesselScalarWhereInput[]
    id?: IntFilter<"Vessel"> | number
    name?: StringFilter<"Vessel"> | string
    image?: StringFilter<"Vessel"> | string
    description?: StringFilter<"Vessel"> | string
    vesselTypeId?: IntFilter<"Vessel"> | number
    createdAt?: DateTimeFilter<"Vessel"> | Date | string
    updatedAt?: DateTimeFilter<"Vessel"> | Date | string
  }

  export type VesselTypeCreateWithoutVesselsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselTypeUncheckedCreateWithoutVesselsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselTypeCreateOrConnectWithoutVesselsInput = {
    where: VesselTypeWhereUniqueInput
    create: XOR<VesselTypeCreateWithoutVesselsInput, VesselTypeUncheckedCreateWithoutVesselsInput>
  }

  export type VesselTypeUpsertWithoutVesselsInput = {
    update: XOR<VesselTypeUpdateWithoutVesselsInput, VesselTypeUncheckedUpdateWithoutVesselsInput>
    create: XOR<VesselTypeCreateWithoutVesselsInput, VesselTypeUncheckedCreateWithoutVesselsInput>
    where?: VesselTypeWhereInput
  }

  export type VesselTypeUpdateToOneWithWhereWithoutVesselsInput = {
    where?: VesselTypeWhereInput
    data: XOR<VesselTypeUpdateWithoutVesselsInput, VesselTypeUncheckedUpdateWithoutVesselsInput>
  }

  export type VesselTypeUpdateWithoutVesselsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselTypeUncheckedUpdateWithoutVesselsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselCreateManyVesselTypeInput = {
    id?: number
    name: string
    image: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VesselUpdateWithoutVesselTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselUncheckedUpdateWithoutVesselTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VesselUncheckedUpdateManyWithoutVesselTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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