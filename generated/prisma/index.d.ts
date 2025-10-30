
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GIANGVIEN
 * 
 */
export type GIANGVIEN = $Result.DefaultSelection<Prisma.$GIANGVIENPayload>
/**
 * Model LOP
 * 
 */
export type LOP = $Result.DefaultSelection<Prisma.$LOPPayload>
/**
 * Model MONHOC
 * 
 */
export type MONHOC = $Result.DefaultSelection<Prisma.$MONHOCPayload>
/**
 * Model PHONG
 * 
 */
export type PHONG = $Result.DefaultSelection<Prisma.$PHONGPayload>
/**
 * Model SINHVIEN
 * 
 */
export type SINHVIEN = $Result.DefaultSelection<Prisma.$SINHVIENPayload>
/**
 * Model TAIKHOAN
 * 
 */
export type TAIKHOAN = $Result.DefaultSelection<Prisma.$TAIKHOANPayload>
/**
 * Model THOIKHOABIEU
 * 
 */
export type THOIKHOABIEU = $Result.DefaultSelection<Prisma.$THOIKHOABIEUPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TAIKHOAN_LoaiTaiKhoan: {
  SinhVien: 'SinhVien',
  GiangVien: 'GiangVien',
  Admin: 'Admin'
};

export type TAIKHOAN_LoaiTaiKhoan = (typeof TAIKHOAN_LoaiTaiKhoan)[keyof typeof TAIKHOAN_LoaiTaiKhoan]


export const SINHVIEN_GioiTinh: {
  Nam: 'Nam',
  N_: 'N_'
};

export type SINHVIEN_GioiTinh = (typeof SINHVIEN_GioiTinh)[keyof typeof SINHVIEN_GioiTinh]

}

export type TAIKHOAN_LoaiTaiKhoan = $Enums.TAIKHOAN_LoaiTaiKhoan

export const TAIKHOAN_LoaiTaiKhoan: typeof $Enums.TAIKHOAN_LoaiTaiKhoan

export type SINHVIEN_GioiTinh = $Enums.SINHVIEN_GioiTinh

export const SINHVIEN_GioiTinh: typeof $Enums.SINHVIEN_GioiTinh

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GIANGVIENS
 * const gIANGVIENS = await prisma.gIANGVIEN.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more GIANGVIENS
   * const gIANGVIENS = await prisma.gIANGVIEN.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.gIANGVIEN`: Exposes CRUD operations for the **GIANGVIEN** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GIANGVIENS
    * const gIANGVIENS = await prisma.gIANGVIEN.findMany()
    * ```
    */
  get gIANGVIEN(): Prisma.GIANGVIENDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lOP`: Exposes CRUD operations for the **LOP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LOPS
    * const lOPS = await prisma.lOP.findMany()
    * ```
    */
  get lOP(): Prisma.LOPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mONHOC`: Exposes CRUD operations for the **MONHOC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MONHOCS
    * const mONHOCS = await prisma.mONHOC.findMany()
    * ```
    */
  get mONHOC(): Prisma.MONHOCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pHONG`: Exposes CRUD operations for the **PHONG** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PHONGS
    * const pHONGS = await prisma.pHONG.findMany()
    * ```
    */
  get pHONG(): Prisma.PHONGDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sINHVIEN`: Exposes CRUD operations for the **SINHVIEN** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SINHVIENS
    * const sINHVIENS = await prisma.sINHVIEN.findMany()
    * ```
    */
  get sINHVIEN(): Prisma.SINHVIENDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tAIKHOAN`: Exposes CRUD operations for the **TAIKHOAN** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TAIKHOANS
    * const tAIKHOANS = await prisma.tAIKHOAN.findMany()
    * ```
    */
  get tAIKHOAN(): Prisma.TAIKHOANDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tHOIKHOABIEU`: Exposes CRUD operations for the **THOIKHOABIEU** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more THOIKHOABIEUS
    * const tHOIKHOABIEUS = await prisma.tHOIKHOABIEU.findMany()
    * ```
    */
  get tHOIKHOABIEU(): Prisma.THOIKHOABIEUDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
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
    GIANGVIEN: 'GIANGVIEN',
    LOP: 'LOP',
    MONHOC: 'MONHOC',
    PHONG: 'PHONG',
    SINHVIEN: 'SINHVIEN',
    TAIKHOAN: 'TAIKHOAN',
    THOIKHOABIEU: 'THOIKHOABIEU'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gIANGVIEN" | "lOP" | "mONHOC" | "pHONG" | "sINHVIEN" | "tAIKHOAN" | "tHOIKHOABIEU"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GIANGVIEN: {
        payload: Prisma.$GIANGVIENPayload<ExtArgs>
        fields: Prisma.GIANGVIENFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GIANGVIENFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GIANGVIENFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>
          }
          findFirst: {
            args: Prisma.GIANGVIENFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GIANGVIENFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>
          }
          findMany: {
            args: Prisma.GIANGVIENFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>[]
          }
          create: {
            args: Prisma.GIANGVIENCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>
          }
          createMany: {
            args: Prisma.GIANGVIENCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GIANGVIENDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>
          }
          update: {
            args: Prisma.GIANGVIENUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>
          }
          deleteMany: {
            args: Prisma.GIANGVIENDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GIANGVIENUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GIANGVIENUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIANGVIENPayload>
          }
          aggregate: {
            args: Prisma.GIANGVIENAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGIANGVIEN>
          }
          groupBy: {
            args: Prisma.GIANGVIENGroupByArgs<ExtArgs>
            result: $Utils.Optional<GIANGVIENGroupByOutputType>[]
          }
          count: {
            args: Prisma.GIANGVIENCountArgs<ExtArgs>
            result: $Utils.Optional<GIANGVIENCountAggregateOutputType> | number
          }
        }
      }
      LOP: {
        payload: Prisma.$LOPPayload<ExtArgs>
        fields: Prisma.LOPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LOPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LOPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>
          }
          findFirst: {
            args: Prisma.LOPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LOPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>
          }
          findMany: {
            args: Prisma.LOPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>[]
          }
          create: {
            args: Prisma.LOPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>
          }
          createMany: {
            args: Prisma.LOPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LOPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>
          }
          update: {
            args: Prisma.LOPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>
          }
          deleteMany: {
            args: Prisma.LOPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LOPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LOPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOPPayload>
          }
          aggregate: {
            args: Prisma.LOPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLOP>
          }
          groupBy: {
            args: Prisma.LOPGroupByArgs<ExtArgs>
            result: $Utils.Optional<LOPGroupByOutputType>[]
          }
          count: {
            args: Prisma.LOPCountArgs<ExtArgs>
            result: $Utils.Optional<LOPCountAggregateOutputType> | number
          }
        }
      }
      MONHOC: {
        payload: Prisma.$MONHOCPayload<ExtArgs>
        fields: Prisma.MONHOCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MONHOCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MONHOCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>
          }
          findFirst: {
            args: Prisma.MONHOCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MONHOCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>
          }
          findMany: {
            args: Prisma.MONHOCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>[]
          }
          create: {
            args: Prisma.MONHOCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>
          }
          createMany: {
            args: Prisma.MONHOCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MONHOCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>
          }
          update: {
            args: Prisma.MONHOCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>
          }
          deleteMany: {
            args: Prisma.MONHOCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MONHOCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MONHOCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONHOCPayload>
          }
          aggregate: {
            args: Prisma.MONHOCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMONHOC>
          }
          groupBy: {
            args: Prisma.MONHOCGroupByArgs<ExtArgs>
            result: $Utils.Optional<MONHOCGroupByOutputType>[]
          }
          count: {
            args: Prisma.MONHOCCountArgs<ExtArgs>
            result: $Utils.Optional<MONHOCCountAggregateOutputType> | number
          }
        }
      }
      PHONG: {
        payload: Prisma.$PHONGPayload<ExtArgs>
        fields: Prisma.PHONGFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PHONGFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PHONGFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>
          }
          findFirst: {
            args: Prisma.PHONGFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PHONGFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>
          }
          findMany: {
            args: Prisma.PHONGFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>[]
          }
          create: {
            args: Prisma.PHONGCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>
          }
          createMany: {
            args: Prisma.PHONGCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PHONGDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>
          }
          update: {
            args: Prisma.PHONGUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>
          }
          deleteMany: {
            args: Prisma.PHONGDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PHONGUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PHONGUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PHONGPayload>
          }
          aggregate: {
            args: Prisma.PHONGAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePHONG>
          }
          groupBy: {
            args: Prisma.PHONGGroupByArgs<ExtArgs>
            result: $Utils.Optional<PHONGGroupByOutputType>[]
          }
          count: {
            args: Prisma.PHONGCountArgs<ExtArgs>
            result: $Utils.Optional<PHONGCountAggregateOutputType> | number
          }
        }
      }
      SINHVIEN: {
        payload: Prisma.$SINHVIENPayload<ExtArgs>
        fields: Prisma.SINHVIENFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SINHVIENFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SINHVIENFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>
          }
          findFirst: {
            args: Prisma.SINHVIENFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SINHVIENFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>
          }
          findMany: {
            args: Prisma.SINHVIENFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>[]
          }
          create: {
            args: Prisma.SINHVIENCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>
          }
          createMany: {
            args: Prisma.SINHVIENCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SINHVIENDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>
          }
          update: {
            args: Prisma.SINHVIENUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>
          }
          deleteMany: {
            args: Prisma.SINHVIENDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SINHVIENUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SINHVIENUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SINHVIENPayload>
          }
          aggregate: {
            args: Prisma.SINHVIENAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSINHVIEN>
          }
          groupBy: {
            args: Prisma.SINHVIENGroupByArgs<ExtArgs>
            result: $Utils.Optional<SINHVIENGroupByOutputType>[]
          }
          count: {
            args: Prisma.SINHVIENCountArgs<ExtArgs>
            result: $Utils.Optional<SINHVIENCountAggregateOutputType> | number
          }
        }
      }
      TAIKHOAN: {
        payload: Prisma.$TAIKHOANPayload<ExtArgs>
        fields: Prisma.TAIKHOANFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TAIKHOANFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TAIKHOANFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>
          }
          findFirst: {
            args: Prisma.TAIKHOANFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TAIKHOANFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>
          }
          findMany: {
            args: Prisma.TAIKHOANFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>[]
          }
          create: {
            args: Prisma.TAIKHOANCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>
          }
          createMany: {
            args: Prisma.TAIKHOANCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TAIKHOANDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>
          }
          update: {
            args: Prisma.TAIKHOANUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>
          }
          deleteMany: {
            args: Prisma.TAIKHOANDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TAIKHOANUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TAIKHOANUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TAIKHOANPayload>
          }
          aggregate: {
            args: Prisma.TAIKHOANAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTAIKHOAN>
          }
          groupBy: {
            args: Prisma.TAIKHOANGroupByArgs<ExtArgs>
            result: $Utils.Optional<TAIKHOANGroupByOutputType>[]
          }
          count: {
            args: Prisma.TAIKHOANCountArgs<ExtArgs>
            result: $Utils.Optional<TAIKHOANCountAggregateOutputType> | number
          }
        }
      }
      THOIKHOABIEU: {
        payload: Prisma.$THOIKHOABIEUPayload<ExtArgs>
        fields: Prisma.THOIKHOABIEUFieldRefs
        operations: {
          findUnique: {
            args: Prisma.THOIKHOABIEUFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.THOIKHOABIEUFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>
          }
          findFirst: {
            args: Prisma.THOIKHOABIEUFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.THOIKHOABIEUFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>
          }
          findMany: {
            args: Prisma.THOIKHOABIEUFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>[]
          }
          create: {
            args: Prisma.THOIKHOABIEUCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>
          }
          createMany: {
            args: Prisma.THOIKHOABIEUCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.THOIKHOABIEUDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>
          }
          update: {
            args: Prisma.THOIKHOABIEUUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>
          }
          deleteMany: {
            args: Prisma.THOIKHOABIEUDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.THOIKHOABIEUUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.THOIKHOABIEUUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$THOIKHOABIEUPayload>
          }
          aggregate: {
            args: Prisma.THOIKHOABIEUAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTHOIKHOABIEU>
          }
          groupBy: {
            args: Prisma.THOIKHOABIEUGroupByArgs<ExtArgs>
            result: $Utils.Optional<THOIKHOABIEUGroupByOutputType>[]
          }
          count: {
            args: Prisma.THOIKHOABIEUCountArgs<ExtArgs>
            result: $Utils.Optional<THOIKHOABIEUCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    gIANGVIEN?: GIANGVIENOmit
    lOP?: LOPOmit
    mONHOC?: MONHOCOmit
    pHONG?: PHONGOmit
    sINHVIEN?: SINHVIENOmit
    tAIKHOAN?: TAIKHOANOmit
    tHOIKHOABIEU?: THOIKHOABIEUOmit
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
   * Count Type GIANGVIENCountOutputType
   */

  export type GIANGVIENCountOutputType = {
    TAIKHOAN: number
    THOIKHOABIEU: number
  }

  export type GIANGVIENCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TAIKHOAN?: boolean | GIANGVIENCountOutputTypeCountTAIKHOANArgs
    THOIKHOABIEU?: boolean | GIANGVIENCountOutputTypeCountTHOIKHOABIEUArgs
  }

  // Custom InputTypes
  /**
   * GIANGVIENCountOutputType without action
   */
  export type GIANGVIENCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIENCountOutputType
     */
    select?: GIANGVIENCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GIANGVIENCountOutputType without action
   */
  export type GIANGVIENCountOutputTypeCountTAIKHOANArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TAIKHOANWhereInput
  }

  /**
   * GIANGVIENCountOutputType without action
   */
  export type GIANGVIENCountOutputTypeCountTHOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: THOIKHOABIEUWhereInput
  }


  /**
   * Count Type LOPCountOutputType
   */

  export type LOPCountOutputType = {
    SINHVIEN: number
    THOIKHOABIEU: number
  }

  export type LOPCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SINHVIEN?: boolean | LOPCountOutputTypeCountSINHVIENArgs
    THOIKHOABIEU?: boolean | LOPCountOutputTypeCountTHOIKHOABIEUArgs
  }

  // Custom InputTypes
  /**
   * LOPCountOutputType without action
   */
  export type LOPCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOPCountOutputType
     */
    select?: LOPCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LOPCountOutputType without action
   */
  export type LOPCountOutputTypeCountSINHVIENArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SINHVIENWhereInput
  }

  /**
   * LOPCountOutputType without action
   */
  export type LOPCountOutputTypeCountTHOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: THOIKHOABIEUWhereInput
  }


  /**
   * Count Type MONHOCCountOutputType
   */

  export type MONHOCCountOutputType = {
    THOIKHOABIEU: number
  }

  export type MONHOCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    THOIKHOABIEU?: boolean | MONHOCCountOutputTypeCountTHOIKHOABIEUArgs
  }

  // Custom InputTypes
  /**
   * MONHOCCountOutputType without action
   */
  export type MONHOCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOCCountOutputType
     */
    select?: MONHOCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MONHOCCountOutputType without action
   */
  export type MONHOCCountOutputTypeCountTHOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: THOIKHOABIEUWhereInput
  }


  /**
   * Count Type PHONGCountOutputType
   */

  export type PHONGCountOutputType = {
    THOIKHOABIEU: number
  }

  export type PHONGCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    THOIKHOABIEU?: boolean | PHONGCountOutputTypeCountTHOIKHOABIEUArgs
  }

  // Custom InputTypes
  /**
   * PHONGCountOutputType without action
   */
  export type PHONGCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONGCountOutputType
     */
    select?: PHONGCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PHONGCountOutputType without action
   */
  export type PHONGCountOutputTypeCountTHOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: THOIKHOABIEUWhereInput
  }


  /**
   * Count Type SINHVIENCountOutputType
   */

  export type SINHVIENCountOutputType = {
    TAIKHOAN: number
  }

  export type SINHVIENCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TAIKHOAN?: boolean | SINHVIENCountOutputTypeCountTAIKHOANArgs
  }

  // Custom InputTypes
  /**
   * SINHVIENCountOutputType without action
   */
  export type SINHVIENCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIENCountOutputType
     */
    select?: SINHVIENCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SINHVIENCountOutputType without action
   */
  export type SINHVIENCountOutputTypeCountTAIKHOANArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TAIKHOANWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GIANGVIEN
   */

  export type AggregateGIANGVIEN = {
    _count: GIANGVIENCountAggregateOutputType | null
    _min: GIANGVIENMinAggregateOutputType | null
    _max: GIANGVIENMaxAggregateOutputType | null
  }

  export type GIANGVIENMinAggregateOutputType = {
    MaGV: string | null
    HoTen: string | null
    TrinhDo: string | null
    BoMon: string | null
  }

  export type GIANGVIENMaxAggregateOutputType = {
    MaGV: string | null
    HoTen: string | null
    TrinhDo: string | null
    BoMon: string | null
  }

  export type GIANGVIENCountAggregateOutputType = {
    MaGV: number
    HoTen: number
    TrinhDo: number
    BoMon: number
    _all: number
  }


  export type GIANGVIENMinAggregateInputType = {
    MaGV?: true
    HoTen?: true
    TrinhDo?: true
    BoMon?: true
  }

  export type GIANGVIENMaxAggregateInputType = {
    MaGV?: true
    HoTen?: true
    TrinhDo?: true
    BoMon?: true
  }

  export type GIANGVIENCountAggregateInputType = {
    MaGV?: true
    HoTen?: true
    TrinhDo?: true
    BoMon?: true
    _all?: true
  }

  export type GIANGVIENAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GIANGVIEN to aggregate.
     */
    where?: GIANGVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIANGVIENS to fetch.
     */
    orderBy?: GIANGVIENOrderByWithRelationInput | GIANGVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GIANGVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIANGVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIANGVIENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GIANGVIENS
    **/
    _count?: true | GIANGVIENCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GIANGVIENMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GIANGVIENMaxAggregateInputType
  }

  export type GetGIANGVIENAggregateType<T extends GIANGVIENAggregateArgs> = {
        [P in keyof T & keyof AggregateGIANGVIEN]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGIANGVIEN[P]>
      : GetScalarType<T[P], AggregateGIANGVIEN[P]>
  }




  export type GIANGVIENGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GIANGVIENWhereInput
    orderBy?: GIANGVIENOrderByWithAggregationInput | GIANGVIENOrderByWithAggregationInput[]
    by: GIANGVIENScalarFieldEnum[] | GIANGVIENScalarFieldEnum
    having?: GIANGVIENScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GIANGVIENCountAggregateInputType | true
    _min?: GIANGVIENMinAggregateInputType
    _max?: GIANGVIENMaxAggregateInputType
  }

  export type GIANGVIENGroupByOutputType = {
    MaGV: string
    HoTen: string
    TrinhDo: string | null
    BoMon: string | null
    _count: GIANGVIENCountAggregateOutputType | null
    _min: GIANGVIENMinAggregateOutputType | null
    _max: GIANGVIENMaxAggregateOutputType | null
  }

  type GetGIANGVIENGroupByPayload<T extends GIANGVIENGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GIANGVIENGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GIANGVIENGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GIANGVIENGroupByOutputType[P]>
            : GetScalarType<T[P], GIANGVIENGroupByOutputType[P]>
        }
      >
    >


  export type GIANGVIENSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaGV?: boolean
    HoTen?: boolean
    TrinhDo?: boolean
    BoMon?: boolean
    TAIKHOAN?: boolean | GIANGVIEN$TAIKHOANArgs<ExtArgs>
    THOIKHOABIEU?: boolean | GIANGVIEN$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | GIANGVIENCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gIANGVIEN"]>



  export type GIANGVIENSelectScalar = {
    MaGV?: boolean
    HoTen?: boolean
    TrinhDo?: boolean
    BoMon?: boolean
  }

  export type GIANGVIENOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaGV" | "HoTen" | "TrinhDo" | "BoMon", ExtArgs["result"]["gIANGVIEN"]>
  export type GIANGVIENInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TAIKHOAN?: boolean | GIANGVIEN$TAIKHOANArgs<ExtArgs>
    THOIKHOABIEU?: boolean | GIANGVIEN$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | GIANGVIENCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GIANGVIENPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GIANGVIEN"
    objects: {
      TAIKHOAN: Prisma.$TAIKHOANPayload<ExtArgs>[]
      THOIKHOABIEU: Prisma.$THOIKHOABIEUPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaGV: string
      HoTen: string
      TrinhDo: string | null
      BoMon: string | null
    }, ExtArgs["result"]["gIANGVIEN"]>
    composites: {}
  }

  type GIANGVIENGetPayload<S extends boolean | null | undefined | GIANGVIENDefaultArgs> = $Result.GetResult<Prisma.$GIANGVIENPayload, S>

  type GIANGVIENCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GIANGVIENFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GIANGVIENCountAggregateInputType | true
    }

  export interface GIANGVIENDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GIANGVIEN'], meta: { name: 'GIANGVIEN' } }
    /**
     * Find zero or one GIANGVIEN that matches the filter.
     * @param {GIANGVIENFindUniqueArgs} args - Arguments to find a GIANGVIEN
     * @example
     * // Get one GIANGVIEN
     * const gIANGVIEN = await prisma.gIANGVIEN.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GIANGVIENFindUniqueArgs>(args: SelectSubset<T, GIANGVIENFindUniqueArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GIANGVIEN that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GIANGVIENFindUniqueOrThrowArgs} args - Arguments to find a GIANGVIEN
     * @example
     * // Get one GIANGVIEN
     * const gIANGVIEN = await prisma.gIANGVIEN.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GIANGVIENFindUniqueOrThrowArgs>(args: SelectSubset<T, GIANGVIENFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GIANGVIEN that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENFindFirstArgs} args - Arguments to find a GIANGVIEN
     * @example
     * // Get one GIANGVIEN
     * const gIANGVIEN = await prisma.gIANGVIEN.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GIANGVIENFindFirstArgs>(args?: SelectSubset<T, GIANGVIENFindFirstArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GIANGVIEN that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENFindFirstOrThrowArgs} args - Arguments to find a GIANGVIEN
     * @example
     * // Get one GIANGVIEN
     * const gIANGVIEN = await prisma.gIANGVIEN.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GIANGVIENFindFirstOrThrowArgs>(args?: SelectSubset<T, GIANGVIENFindFirstOrThrowArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GIANGVIENS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GIANGVIENS
     * const gIANGVIENS = await prisma.gIANGVIEN.findMany()
     * 
     * // Get first 10 GIANGVIENS
     * const gIANGVIENS = await prisma.gIANGVIEN.findMany({ take: 10 })
     * 
     * // Only select the `MaGV`
     * const gIANGVIENWithMaGVOnly = await prisma.gIANGVIEN.findMany({ select: { MaGV: true } })
     * 
     */
    findMany<T extends GIANGVIENFindManyArgs>(args?: SelectSubset<T, GIANGVIENFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GIANGVIEN.
     * @param {GIANGVIENCreateArgs} args - Arguments to create a GIANGVIEN.
     * @example
     * // Create one GIANGVIEN
     * const GIANGVIEN = await prisma.gIANGVIEN.create({
     *   data: {
     *     // ... data to create a GIANGVIEN
     *   }
     * })
     * 
     */
    create<T extends GIANGVIENCreateArgs>(args: SelectSubset<T, GIANGVIENCreateArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GIANGVIENS.
     * @param {GIANGVIENCreateManyArgs} args - Arguments to create many GIANGVIENS.
     * @example
     * // Create many GIANGVIENS
     * const gIANGVIEN = await prisma.gIANGVIEN.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GIANGVIENCreateManyArgs>(args?: SelectSubset<T, GIANGVIENCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GIANGVIEN.
     * @param {GIANGVIENDeleteArgs} args - Arguments to delete one GIANGVIEN.
     * @example
     * // Delete one GIANGVIEN
     * const GIANGVIEN = await prisma.gIANGVIEN.delete({
     *   where: {
     *     // ... filter to delete one GIANGVIEN
     *   }
     * })
     * 
     */
    delete<T extends GIANGVIENDeleteArgs>(args: SelectSubset<T, GIANGVIENDeleteArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GIANGVIEN.
     * @param {GIANGVIENUpdateArgs} args - Arguments to update one GIANGVIEN.
     * @example
     * // Update one GIANGVIEN
     * const gIANGVIEN = await prisma.gIANGVIEN.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GIANGVIENUpdateArgs>(args: SelectSubset<T, GIANGVIENUpdateArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GIANGVIENS.
     * @param {GIANGVIENDeleteManyArgs} args - Arguments to filter GIANGVIENS to delete.
     * @example
     * // Delete a few GIANGVIENS
     * const { count } = await prisma.gIANGVIEN.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GIANGVIENDeleteManyArgs>(args?: SelectSubset<T, GIANGVIENDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GIANGVIENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GIANGVIENS
     * const gIANGVIEN = await prisma.gIANGVIEN.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GIANGVIENUpdateManyArgs>(args: SelectSubset<T, GIANGVIENUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GIANGVIEN.
     * @param {GIANGVIENUpsertArgs} args - Arguments to update or create a GIANGVIEN.
     * @example
     * // Update or create a GIANGVIEN
     * const gIANGVIEN = await prisma.gIANGVIEN.upsert({
     *   create: {
     *     // ... data to create a GIANGVIEN
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GIANGVIEN we want to update
     *   }
     * })
     */
    upsert<T extends GIANGVIENUpsertArgs>(args: SelectSubset<T, GIANGVIENUpsertArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GIANGVIENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENCountArgs} args - Arguments to filter GIANGVIENS to count.
     * @example
     * // Count the number of GIANGVIENS
     * const count = await prisma.gIANGVIEN.count({
     *   where: {
     *     // ... the filter for the GIANGVIENS we want to count
     *   }
     * })
    **/
    count<T extends GIANGVIENCountArgs>(
      args?: Subset<T, GIANGVIENCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GIANGVIENCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GIANGVIEN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GIANGVIENAggregateArgs>(args: Subset<T, GIANGVIENAggregateArgs>): Prisma.PrismaPromise<GetGIANGVIENAggregateType<T>>

    /**
     * Group by GIANGVIEN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIANGVIENGroupByArgs} args - Group by arguments.
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
      T extends GIANGVIENGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GIANGVIENGroupByArgs['orderBy'] }
        : { orderBy?: GIANGVIENGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GIANGVIENGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGIANGVIENGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GIANGVIEN model
   */
  readonly fields: GIANGVIENFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GIANGVIEN.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GIANGVIENClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TAIKHOAN<T extends GIANGVIEN$TAIKHOANArgs<ExtArgs> = {}>(args?: Subset<T, GIANGVIEN$TAIKHOANArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    THOIKHOABIEU<T extends GIANGVIEN$THOIKHOABIEUArgs<ExtArgs> = {}>(args?: Subset<T, GIANGVIEN$THOIKHOABIEUArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GIANGVIEN model
   */
  interface GIANGVIENFieldRefs {
    readonly MaGV: FieldRef<"GIANGVIEN", 'String'>
    readonly HoTen: FieldRef<"GIANGVIEN", 'String'>
    readonly TrinhDo: FieldRef<"GIANGVIEN", 'String'>
    readonly BoMon: FieldRef<"GIANGVIEN", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GIANGVIEN findUnique
   */
  export type GIANGVIENFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * Filter, which GIANGVIEN to fetch.
     */
    where: GIANGVIENWhereUniqueInput
  }

  /**
   * GIANGVIEN findUniqueOrThrow
   */
  export type GIANGVIENFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * Filter, which GIANGVIEN to fetch.
     */
    where: GIANGVIENWhereUniqueInput
  }

  /**
   * GIANGVIEN findFirst
   */
  export type GIANGVIENFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * Filter, which GIANGVIEN to fetch.
     */
    where?: GIANGVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIANGVIENS to fetch.
     */
    orderBy?: GIANGVIENOrderByWithRelationInput | GIANGVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GIANGVIENS.
     */
    cursor?: GIANGVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIANGVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIANGVIENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GIANGVIENS.
     */
    distinct?: GIANGVIENScalarFieldEnum | GIANGVIENScalarFieldEnum[]
  }

  /**
   * GIANGVIEN findFirstOrThrow
   */
  export type GIANGVIENFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * Filter, which GIANGVIEN to fetch.
     */
    where?: GIANGVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIANGVIENS to fetch.
     */
    orderBy?: GIANGVIENOrderByWithRelationInput | GIANGVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GIANGVIENS.
     */
    cursor?: GIANGVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIANGVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIANGVIENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GIANGVIENS.
     */
    distinct?: GIANGVIENScalarFieldEnum | GIANGVIENScalarFieldEnum[]
  }

  /**
   * GIANGVIEN findMany
   */
  export type GIANGVIENFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * Filter, which GIANGVIENS to fetch.
     */
    where?: GIANGVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIANGVIENS to fetch.
     */
    orderBy?: GIANGVIENOrderByWithRelationInput | GIANGVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GIANGVIENS.
     */
    cursor?: GIANGVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIANGVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIANGVIENS.
     */
    skip?: number
    distinct?: GIANGVIENScalarFieldEnum | GIANGVIENScalarFieldEnum[]
  }

  /**
   * GIANGVIEN create
   */
  export type GIANGVIENCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * The data needed to create a GIANGVIEN.
     */
    data: XOR<GIANGVIENCreateInput, GIANGVIENUncheckedCreateInput>
  }

  /**
   * GIANGVIEN createMany
   */
  export type GIANGVIENCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GIANGVIENS.
     */
    data: GIANGVIENCreateManyInput | GIANGVIENCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GIANGVIEN update
   */
  export type GIANGVIENUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * The data needed to update a GIANGVIEN.
     */
    data: XOR<GIANGVIENUpdateInput, GIANGVIENUncheckedUpdateInput>
    /**
     * Choose, which GIANGVIEN to update.
     */
    where: GIANGVIENWhereUniqueInput
  }

  /**
   * GIANGVIEN updateMany
   */
  export type GIANGVIENUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GIANGVIENS.
     */
    data: XOR<GIANGVIENUpdateManyMutationInput, GIANGVIENUncheckedUpdateManyInput>
    /**
     * Filter which GIANGVIENS to update
     */
    where?: GIANGVIENWhereInput
    /**
     * Limit how many GIANGVIENS to update.
     */
    limit?: number
  }

  /**
   * GIANGVIEN upsert
   */
  export type GIANGVIENUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * The filter to search for the GIANGVIEN to update in case it exists.
     */
    where: GIANGVIENWhereUniqueInput
    /**
     * In case the GIANGVIEN found by the `where` argument doesn't exist, create a new GIANGVIEN with this data.
     */
    create: XOR<GIANGVIENCreateInput, GIANGVIENUncheckedCreateInput>
    /**
     * In case the GIANGVIEN was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GIANGVIENUpdateInput, GIANGVIENUncheckedUpdateInput>
  }

  /**
   * GIANGVIEN delete
   */
  export type GIANGVIENDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    /**
     * Filter which GIANGVIEN to delete.
     */
    where: GIANGVIENWhereUniqueInput
  }

  /**
   * GIANGVIEN deleteMany
   */
  export type GIANGVIENDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GIANGVIENS to delete
     */
    where?: GIANGVIENWhereInput
    /**
     * Limit how many GIANGVIENS to delete.
     */
    limit?: number
  }

  /**
   * GIANGVIEN.TAIKHOAN
   */
  export type GIANGVIEN$TAIKHOANArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    where?: TAIKHOANWhereInput
    orderBy?: TAIKHOANOrderByWithRelationInput | TAIKHOANOrderByWithRelationInput[]
    cursor?: TAIKHOANWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TAIKHOANScalarFieldEnum | TAIKHOANScalarFieldEnum[]
  }

  /**
   * GIANGVIEN.THOIKHOABIEU
   */
  export type GIANGVIEN$THOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    where?: THOIKHOABIEUWhereInput
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    cursor?: THOIKHOABIEUWhereUniqueInput
    take?: number
    skip?: number
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * GIANGVIEN without action
   */
  export type GIANGVIENDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
  }


  /**
   * Model LOP
   */

  export type AggregateLOP = {
    _count: LOPCountAggregateOutputType | null
    _min: LOPMinAggregateOutputType | null
    _max: LOPMaxAggregateOutputType | null
  }

  export type LOPMinAggregateOutputType = {
    MaLop: string | null
    TenLop: string | null
    KhoaHoc: string | null
    NganhHoc: string | null
  }

  export type LOPMaxAggregateOutputType = {
    MaLop: string | null
    TenLop: string | null
    KhoaHoc: string | null
    NganhHoc: string | null
  }

  export type LOPCountAggregateOutputType = {
    MaLop: number
    TenLop: number
    KhoaHoc: number
    NganhHoc: number
    _all: number
  }


  export type LOPMinAggregateInputType = {
    MaLop?: true
    TenLop?: true
    KhoaHoc?: true
    NganhHoc?: true
  }

  export type LOPMaxAggregateInputType = {
    MaLop?: true
    TenLop?: true
    KhoaHoc?: true
    NganhHoc?: true
  }

  export type LOPCountAggregateInputType = {
    MaLop?: true
    TenLop?: true
    KhoaHoc?: true
    NganhHoc?: true
    _all?: true
  }

  export type LOPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LOP to aggregate.
     */
    where?: LOPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOPS to fetch.
     */
    orderBy?: LOPOrderByWithRelationInput | LOPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LOPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LOPS
    **/
    _count?: true | LOPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LOPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LOPMaxAggregateInputType
  }

  export type GetLOPAggregateType<T extends LOPAggregateArgs> = {
        [P in keyof T & keyof AggregateLOP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLOP[P]>
      : GetScalarType<T[P], AggregateLOP[P]>
  }




  export type LOPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LOPWhereInput
    orderBy?: LOPOrderByWithAggregationInput | LOPOrderByWithAggregationInput[]
    by: LOPScalarFieldEnum[] | LOPScalarFieldEnum
    having?: LOPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LOPCountAggregateInputType | true
    _min?: LOPMinAggregateInputType
    _max?: LOPMaxAggregateInputType
  }

  export type LOPGroupByOutputType = {
    MaLop: string
    TenLop: string
    KhoaHoc: string | null
    NganhHoc: string | null
    _count: LOPCountAggregateOutputType | null
    _min: LOPMinAggregateOutputType | null
    _max: LOPMaxAggregateOutputType | null
  }

  type GetLOPGroupByPayload<T extends LOPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LOPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LOPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LOPGroupByOutputType[P]>
            : GetScalarType<T[P], LOPGroupByOutputType[P]>
        }
      >
    >


  export type LOPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaLop?: boolean
    TenLop?: boolean
    KhoaHoc?: boolean
    NganhHoc?: boolean
    SINHVIEN?: boolean | LOP$SINHVIENArgs<ExtArgs>
    THOIKHOABIEU?: boolean | LOP$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | LOPCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lOP"]>



  export type LOPSelectScalar = {
    MaLop?: boolean
    TenLop?: boolean
    KhoaHoc?: boolean
    NganhHoc?: boolean
  }

  export type LOPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaLop" | "TenLop" | "KhoaHoc" | "NganhHoc", ExtArgs["result"]["lOP"]>
  export type LOPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SINHVIEN?: boolean | LOP$SINHVIENArgs<ExtArgs>
    THOIKHOABIEU?: boolean | LOP$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | LOPCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LOPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LOP"
    objects: {
      SINHVIEN: Prisma.$SINHVIENPayload<ExtArgs>[]
      THOIKHOABIEU: Prisma.$THOIKHOABIEUPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaLop: string
      TenLop: string
      KhoaHoc: string | null
      NganhHoc: string | null
    }, ExtArgs["result"]["lOP"]>
    composites: {}
  }

  type LOPGetPayload<S extends boolean | null | undefined | LOPDefaultArgs> = $Result.GetResult<Prisma.$LOPPayload, S>

  type LOPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LOPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LOPCountAggregateInputType | true
    }

  export interface LOPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LOP'], meta: { name: 'LOP' } }
    /**
     * Find zero or one LOP that matches the filter.
     * @param {LOPFindUniqueArgs} args - Arguments to find a LOP
     * @example
     * // Get one LOP
     * const lOP = await prisma.lOP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LOPFindUniqueArgs>(args: SelectSubset<T, LOPFindUniqueArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LOP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LOPFindUniqueOrThrowArgs} args - Arguments to find a LOP
     * @example
     * // Get one LOP
     * const lOP = await prisma.lOP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LOPFindUniqueOrThrowArgs>(args: SelectSubset<T, LOPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LOP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPFindFirstArgs} args - Arguments to find a LOP
     * @example
     * // Get one LOP
     * const lOP = await prisma.lOP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LOPFindFirstArgs>(args?: SelectSubset<T, LOPFindFirstArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LOP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPFindFirstOrThrowArgs} args - Arguments to find a LOP
     * @example
     * // Get one LOP
     * const lOP = await prisma.lOP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LOPFindFirstOrThrowArgs>(args?: SelectSubset<T, LOPFindFirstOrThrowArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LOPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LOPS
     * const lOPS = await prisma.lOP.findMany()
     * 
     * // Get first 10 LOPS
     * const lOPS = await prisma.lOP.findMany({ take: 10 })
     * 
     * // Only select the `MaLop`
     * const lOPWithMaLopOnly = await prisma.lOP.findMany({ select: { MaLop: true } })
     * 
     */
    findMany<T extends LOPFindManyArgs>(args?: SelectSubset<T, LOPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LOP.
     * @param {LOPCreateArgs} args - Arguments to create a LOP.
     * @example
     * // Create one LOP
     * const LOP = await prisma.lOP.create({
     *   data: {
     *     // ... data to create a LOP
     *   }
     * })
     * 
     */
    create<T extends LOPCreateArgs>(args: SelectSubset<T, LOPCreateArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LOPS.
     * @param {LOPCreateManyArgs} args - Arguments to create many LOPS.
     * @example
     * // Create many LOPS
     * const lOP = await prisma.lOP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LOPCreateManyArgs>(args?: SelectSubset<T, LOPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LOP.
     * @param {LOPDeleteArgs} args - Arguments to delete one LOP.
     * @example
     * // Delete one LOP
     * const LOP = await prisma.lOP.delete({
     *   where: {
     *     // ... filter to delete one LOP
     *   }
     * })
     * 
     */
    delete<T extends LOPDeleteArgs>(args: SelectSubset<T, LOPDeleteArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LOP.
     * @param {LOPUpdateArgs} args - Arguments to update one LOP.
     * @example
     * // Update one LOP
     * const lOP = await prisma.lOP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LOPUpdateArgs>(args: SelectSubset<T, LOPUpdateArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LOPS.
     * @param {LOPDeleteManyArgs} args - Arguments to filter LOPS to delete.
     * @example
     * // Delete a few LOPS
     * const { count } = await prisma.lOP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LOPDeleteManyArgs>(args?: SelectSubset<T, LOPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LOPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LOPS
     * const lOP = await prisma.lOP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LOPUpdateManyArgs>(args: SelectSubset<T, LOPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LOP.
     * @param {LOPUpsertArgs} args - Arguments to update or create a LOP.
     * @example
     * // Update or create a LOP
     * const lOP = await prisma.lOP.upsert({
     *   create: {
     *     // ... data to create a LOP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LOP we want to update
     *   }
     * })
     */
    upsert<T extends LOPUpsertArgs>(args: SelectSubset<T, LOPUpsertArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LOPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPCountArgs} args - Arguments to filter LOPS to count.
     * @example
     * // Count the number of LOPS
     * const count = await prisma.lOP.count({
     *   where: {
     *     // ... the filter for the LOPS we want to count
     *   }
     * })
    **/
    count<T extends LOPCountArgs>(
      args?: Subset<T, LOPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LOPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LOP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LOPAggregateArgs>(args: Subset<T, LOPAggregateArgs>): Prisma.PrismaPromise<GetLOPAggregateType<T>>

    /**
     * Group by LOP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOPGroupByArgs} args - Group by arguments.
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
      T extends LOPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LOPGroupByArgs['orderBy'] }
        : { orderBy?: LOPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LOPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLOPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LOP model
   */
  readonly fields: LOPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LOP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LOPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SINHVIEN<T extends LOP$SINHVIENArgs<ExtArgs> = {}>(args?: Subset<T, LOP$SINHVIENArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    THOIKHOABIEU<T extends LOP$THOIKHOABIEUArgs<ExtArgs> = {}>(args?: Subset<T, LOP$THOIKHOABIEUArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LOP model
   */
  interface LOPFieldRefs {
    readonly MaLop: FieldRef<"LOP", 'String'>
    readonly TenLop: FieldRef<"LOP", 'String'>
    readonly KhoaHoc: FieldRef<"LOP", 'String'>
    readonly NganhHoc: FieldRef<"LOP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LOP findUnique
   */
  export type LOPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * Filter, which LOP to fetch.
     */
    where: LOPWhereUniqueInput
  }

  /**
   * LOP findUniqueOrThrow
   */
  export type LOPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * Filter, which LOP to fetch.
     */
    where: LOPWhereUniqueInput
  }

  /**
   * LOP findFirst
   */
  export type LOPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * Filter, which LOP to fetch.
     */
    where?: LOPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOPS to fetch.
     */
    orderBy?: LOPOrderByWithRelationInput | LOPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LOPS.
     */
    cursor?: LOPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LOPS.
     */
    distinct?: LOPScalarFieldEnum | LOPScalarFieldEnum[]
  }

  /**
   * LOP findFirstOrThrow
   */
  export type LOPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * Filter, which LOP to fetch.
     */
    where?: LOPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOPS to fetch.
     */
    orderBy?: LOPOrderByWithRelationInput | LOPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LOPS.
     */
    cursor?: LOPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LOPS.
     */
    distinct?: LOPScalarFieldEnum | LOPScalarFieldEnum[]
  }

  /**
   * LOP findMany
   */
  export type LOPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * Filter, which LOPS to fetch.
     */
    where?: LOPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOPS to fetch.
     */
    orderBy?: LOPOrderByWithRelationInput | LOPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LOPS.
     */
    cursor?: LOPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOPS.
     */
    skip?: number
    distinct?: LOPScalarFieldEnum | LOPScalarFieldEnum[]
  }

  /**
   * LOP create
   */
  export type LOPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * The data needed to create a LOP.
     */
    data: XOR<LOPCreateInput, LOPUncheckedCreateInput>
  }

  /**
   * LOP createMany
   */
  export type LOPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LOPS.
     */
    data: LOPCreateManyInput | LOPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LOP update
   */
  export type LOPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * The data needed to update a LOP.
     */
    data: XOR<LOPUpdateInput, LOPUncheckedUpdateInput>
    /**
     * Choose, which LOP to update.
     */
    where: LOPWhereUniqueInput
  }

  /**
   * LOP updateMany
   */
  export type LOPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LOPS.
     */
    data: XOR<LOPUpdateManyMutationInput, LOPUncheckedUpdateManyInput>
    /**
     * Filter which LOPS to update
     */
    where?: LOPWhereInput
    /**
     * Limit how many LOPS to update.
     */
    limit?: number
  }

  /**
   * LOP upsert
   */
  export type LOPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * The filter to search for the LOP to update in case it exists.
     */
    where: LOPWhereUniqueInput
    /**
     * In case the LOP found by the `where` argument doesn't exist, create a new LOP with this data.
     */
    create: XOR<LOPCreateInput, LOPUncheckedCreateInput>
    /**
     * In case the LOP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LOPUpdateInput, LOPUncheckedUpdateInput>
  }

  /**
   * LOP delete
   */
  export type LOPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    /**
     * Filter which LOP to delete.
     */
    where: LOPWhereUniqueInput
  }

  /**
   * LOP deleteMany
   */
  export type LOPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LOPS to delete
     */
    where?: LOPWhereInput
    /**
     * Limit how many LOPS to delete.
     */
    limit?: number
  }

  /**
   * LOP.SINHVIEN
   */
  export type LOP$SINHVIENArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    where?: SINHVIENWhereInput
    orderBy?: SINHVIENOrderByWithRelationInput | SINHVIENOrderByWithRelationInput[]
    cursor?: SINHVIENWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SINHVIENScalarFieldEnum | SINHVIENScalarFieldEnum[]
  }

  /**
   * LOP.THOIKHOABIEU
   */
  export type LOP$THOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    where?: THOIKHOABIEUWhereInput
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    cursor?: THOIKHOABIEUWhereUniqueInput
    take?: number
    skip?: number
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * LOP without action
   */
  export type LOPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
  }


  /**
   * Model MONHOC
   */

  export type AggregateMONHOC = {
    _count: MONHOCCountAggregateOutputType | null
    _avg: MONHOCAvgAggregateOutputType | null
    _sum: MONHOCSumAggregateOutputType | null
    _min: MONHOCMinAggregateOutputType | null
    _max: MONHOCMaxAggregateOutputType | null
  }

  export type MONHOCAvgAggregateOutputType = {
    SoTinChi: number | null
    SoTiet: number | null
  }

  export type MONHOCSumAggregateOutputType = {
    SoTinChi: number | null
    SoTiet: number | null
  }

  export type MONHOCMinAggregateOutputType = {
    MaMH: string | null
    TenMH: string | null
    SoTinChi: number | null
    SoTiet: number | null
  }

  export type MONHOCMaxAggregateOutputType = {
    MaMH: string | null
    TenMH: string | null
    SoTinChi: number | null
    SoTiet: number | null
  }

  export type MONHOCCountAggregateOutputType = {
    MaMH: number
    TenMH: number
    SoTinChi: number
    SoTiet: number
    _all: number
  }


  export type MONHOCAvgAggregateInputType = {
    SoTinChi?: true
    SoTiet?: true
  }

  export type MONHOCSumAggregateInputType = {
    SoTinChi?: true
    SoTiet?: true
  }

  export type MONHOCMinAggregateInputType = {
    MaMH?: true
    TenMH?: true
    SoTinChi?: true
    SoTiet?: true
  }

  export type MONHOCMaxAggregateInputType = {
    MaMH?: true
    TenMH?: true
    SoTinChi?: true
    SoTiet?: true
  }

  export type MONHOCCountAggregateInputType = {
    MaMH?: true
    TenMH?: true
    SoTinChi?: true
    SoTiet?: true
    _all?: true
  }

  export type MONHOCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MONHOC to aggregate.
     */
    where?: MONHOCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONHOCS to fetch.
     */
    orderBy?: MONHOCOrderByWithRelationInput | MONHOCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MONHOCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONHOCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONHOCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MONHOCS
    **/
    _count?: true | MONHOCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MONHOCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MONHOCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MONHOCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MONHOCMaxAggregateInputType
  }

  export type GetMONHOCAggregateType<T extends MONHOCAggregateArgs> = {
        [P in keyof T & keyof AggregateMONHOC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMONHOC[P]>
      : GetScalarType<T[P], AggregateMONHOC[P]>
  }




  export type MONHOCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MONHOCWhereInput
    orderBy?: MONHOCOrderByWithAggregationInput | MONHOCOrderByWithAggregationInput[]
    by: MONHOCScalarFieldEnum[] | MONHOCScalarFieldEnum
    having?: MONHOCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MONHOCCountAggregateInputType | true
    _avg?: MONHOCAvgAggregateInputType
    _sum?: MONHOCSumAggregateInputType
    _min?: MONHOCMinAggregateInputType
    _max?: MONHOCMaxAggregateInputType
  }

  export type MONHOCGroupByOutputType = {
    MaMH: string
    TenMH: string
    SoTinChi: number | null
    SoTiet: number | null
    _count: MONHOCCountAggregateOutputType | null
    _avg: MONHOCAvgAggregateOutputType | null
    _sum: MONHOCSumAggregateOutputType | null
    _min: MONHOCMinAggregateOutputType | null
    _max: MONHOCMaxAggregateOutputType | null
  }

  type GetMONHOCGroupByPayload<T extends MONHOCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MONHOCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MONHOCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MONHOCGroupByOutputType[P]>
            : GetScalarType<T[P], MONHOCGroupByOutputType[P]>
        }
      >
    >


  export type MONHOCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaMH?: boolean
    TenMH?: boolean
    SoTinChi?: boolean
    SoTiet?: boolean
    THOIKHOABIEU?: boolean | MONHOC$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | MONHOCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mONHOC"]>



  export type MONHOCSelectScalar = {
    MaMH?: boolean
    TenMH?: boolean
    SoTinChi?: boolean
    SoTiet?: boolean
  }

  export type MONHOCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaMH" | "TenMH" | "SoTinChi" | "SoTiet", ExtArgs["result"]["mONHOC"]>
  export type MONHOCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    THOIKHOABIEU?: boolean | MONHOC$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | MONHOCCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MONHOCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MONHOC"
    objects: {
      THOIKHOABIEU: Prisma.$THOIKHOABIEUPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaMH: string
      TenMH: string
      SoTinChi: number | null
      SoTiet: number | null
    }, ExtArgs["result"]["mONHOC"]>
    composites: {}
  }

  type MONHOCGetPayload<S extends boolean | null | undefined | MONHOCDefaultArgs> = $Result.GetResult<Prisma.$MONHOCPayload, S>

  type MONHOCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MONHOCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MONHOCCountAggregateInputType | true
    }

  export interface MONHOCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MONHOC'], meta: { name: 'MONHOC' } }
    /**
     * Find zero or one MONHOC that matches the filter.
     * @param {MONHOCFindUniqueArgs} args - Arguments to find a MONHOC
     * @example
     * // Get one MONHOC
     * const mONHOC = await prisma.mONHOC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MONHOCFindUniqueArgs>(args: SelectSubset<T, MONHOCFindUniqueArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MONHOC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MONHOCFindUniqueOrThrowArgs} args - Arguments to find a MONHOC
     * @example
     * // Get one MONHOC
     * const mONHOC = await prisma.mONHOC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MONHOCFindUniqueOrThrowArgs>(args: SelectSubset<T, MONHOCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MONHOC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCFindFirstArgs} args - Arguments to find a MONHOC
     * @example
     * // Get one MONHOC
     * const mONHOC = await prisma.mONHOC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MONHOCFindFirstArgs>(args?: SelectSubset<T, MONHOCFindFirstArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MONHOC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCFindFirstOrThrowArgs} args - Arguments to find a MONHOC
     * @example
     * // Get one MONHOC
     * const mONHOC = await prisma.mONHOC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MONHOCFindFirstOrThrowArgs>(args?: SelectSubset<T, MONHOCFindFirstOrThrowArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MONHOCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MONHOCS
     * const mONHOCS = await prisma.mONHOC.findMany()
     * 
     * // Get first 10 MONHOCS
     * const mONHOCS = await prisma.mONHOC.findMany({ take: 10 })
     * 
     * // Only select the `MaMH`
     * const mONHOCWithMaMHOnly = await prisma.mONHOC.findMany({ select: { MaMH: true } })
     * 
     */
    findMany<T extends MONHOCFindManyArgs>(args?: SelectSubset<T, MONHOCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MONHOC.
     * @param {MONHOCCreateArgs} args - Arguments to create a MONHOC.
     * @example
     * // Create one MONHOC
     * const MONHOC = await prisma.mONHOC.create({
     *   data: {
     *     // ... data to create a MONHOC
     *   }
     * })
     * 
     */
    create<T extends MONHOCCreateArgs>(args: SelectSubset<T, MONHOCCreateArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MONHOCS.
     * @param {MONHOCCreateManyArgs} args - Arguments to create many MONHOCS.
     * @example
     * // Create many MONHOCS
     * const mONHOC = await prisma.mONHOC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MONHOCCreateManyArgs>(args?: SelectSubset<T, MONHOCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MONHOC.
     * @param {MONHOCDeleteArgs} args - Arguments to delete one MONHOC.
     * @example
     * // Delete one MONHOC
     * const MONHOC = await prisma.mONHOC.delete({
     *   where: {
     *     // ... filter to delete one MONHOC
     *   }
     * })
     * 
     */
    delete<T extends MONHOCDeleteArgs>(args: SelectSubset<T, MONHOCDeleteArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MONHOC.
     * @param {MONHOCUpdateArgs} args - Arguments to update one MONHOC.
     * @example
     * // Update one MONHOC
     * const mONHOC = await prisma.mONHOC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MONHOCUpdateArgs>(args: SelectSubset<T, MONHOCUpdateArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MONHOCS.
     * @param {MONHOCDeleteManyArgs} args - Arguments to filter MONHOCS to delete.
     * @example
     * // Delete a few MONHOCS
     * const { count } = await prisma.mONHOC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MONHOCDeleteManyArgs>(args?: SelectSubset<T, MONHOCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MONHOCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MONHOCS
     * const mONHOC = await prisma.mONHOC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MONHOCUpdateManyArgs>(args: SelectSubset<T, MONHOCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MONHOC.
     * @param {MONHOCUpsertArgs} args - Arguments to update or create a MONHOC.
     * @example
     * // Update or create a MONHOC
     * const mONHOC = await prisma.mONHOC.upsert({
     *   create: {
     *     // ... data to create a MONHOC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MONHOC we want to update
     *   }
     * })
     */
    upsert<T extends MONHOCUpsertArgs>(args: SelectSubset<T, MONHOCUpsertArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MONHOCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCCountArgs} args - Arguments to filter MONHOCS to count.
     * @example
     * // Count the number of MONHOCS
     * const count = await prisma.mONHOC.count({
     *   where: {
     *     // ... the filter for the MONHOCS we want to count
     *   }
     * })
    **/
    count<T extends MONHOCCountArgs>(
      args?: Subset<T, MONHOCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MONHOCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MONHOC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MONHOCAggregateArgs>(args: Subset<T, MONHOCAggregateArgs>): Prisma.PrismaPromise<GetMONHOCAggregateType<T>>

    /**
     * Group by MONHOC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONHOCGroupByArgs} args - Group by arguments.
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
      T extends MONHOCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MONHOCGroupByArgs['orderBy'] }
        : { orderBy?: MONHOCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MONHOCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMONHOCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MONHOC model
   */
  readonly fields: MONHOCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MONHOC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MONHOCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    THOIKHOABIEU<T extends MONHOC$THOIKHOABIEUArgs<ExtArgs> = {}>(args?: Subset<T, MONHOC$THOIKHOABIEUArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MONHOC model
   */
  interface MONHOCFieldRefs {
    readonly MaMH: FieldRef<"MONHOC", 'String'>
    readonly TenMH: FieldRef<"MONHOC", 'String'>
    readonly SoTinChi: FieldRef<"MONHOC", 'Int'>
    readonly SoTiet: FieldRef<"MONHOC", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MONHOC findUnique
   */
  export type MONHOCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * Filter, which MONHOC to fetch.
     */
    where: MONHOCWhereUniqueInput
  }

  /**
   * MONHOC findUniqueOrThrow
   */
  export type MONHOCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * Filter, which MONHOC to fetch.
     */
    where: MONHOCWhereUniqueInput
  }

  /**
   * MONHOC findFirst
   */
  export type MONHOCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * Filter, which MONHOC to fetch.
     */
    where?: MONHOCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONHOCS to fetch.
     */
    orderBy?: MONHOCOrderByWithRelationInput | MONHOCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MONHOCS.
     */
    cursor?: MONHOCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONHOCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONHOCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MONHOCS.
     */
    distinct?: MONHOCScalarFieldEnum | MONHOCScalarFieldEnum[]
  }

  /**
   * MONHOC findFirstOrThrow
   */
  export type MONHOCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * Filter, which MONHOC to fetch.
     */
    where?: MONHOCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONHOCS to fetch.
     */
    orderBy?: MONHOCOrderByWithRelationInput | MONHOCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MONHOCS.
     */
    cursor?: MONHOCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONHOCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONHOCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MONHOCS.
     */
    distinct?: MONHOCScalarFieldEnum | MONHOCScalarFieldEnum[]
  }

  /**
   * MONHOC findMany
   */
  export type MONHOCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * Filter, which MONHOCS to fetch.
     */
    where?: MONHOCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONHOCS to fetch.
     */
    orderBy?: MONHOCOrderByWithRelationInput | MONHOCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MONHOCS.
     */
    cursor?: MONHOCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONHOCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONHOCS.
     */
    skip?: number
    distinct?: MONHOCScalarFieldEnum | MONHOCScalarFieldEnum[]
  }

  /**
   * MONHOC create
   */
  export type MONHOCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * The data needed to create a MONHOC.
     */
    data: XOR<MONHOCCreateInput, MONHOCUncheckedCreateInput>
  }

  /**
   * MONHOC createMany
   */
  export type MONHOCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MONHOCS.
     */
    data: MONHOCCreateManyInput | MONHOCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MONHOC update
   */
  export type MONHOCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * The data needed to update a MONHOC.
     */
    data: XOR<MONHOCUpdateInput, MONHOCUncheckedUpdateInput>
    /**
     * Choose, which MONHOC to update.
     */
    where: MONHOCWhereUniqueInput
  }

  /**
   * MONHOC updateMany
   */
  export type MONHOCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MONHOCS.
     */
    data: XOR<MONHOCUpdateManyMutationInput, MONHOCUncheckedUpdateManyInput>
    /**
     * Filter which MONHOCS to update
     */
    where?: MONHOCWhereInput
    /**
     * Limit how many MONHOCS to update.
     */
    limit?: number
  }

  /**
   * MONHOC upsert
   */
  export type MONHOCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * The filter to search for the MONHOC to update in case it exists.
     */
    where: MONHOCWhereUniqueInput
    /**
     * In case the MONHOC found by the `where` argument doesn't exist, create a new MONHOC with this data.
     */
    create: XOR<MONHOCCreateInput, MONHOCUncheckedCreateInput>
    /**
     * In case the MONHOC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MONHOCUpdateInput, MONHOCUncheckedUpdateInput>
  }

  /**
   * MONHOC delete
   */
  export type MONHOCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    /**
     * Filter which MONHOC to delete.
     */
    where: MONHOCWhereUniqueInput
  }

  /**
   * MONHOC deleteMany
   */
  export type MONHOCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MONHOCS to delete
     */
    where?: MONHOCWhereInput
    /**
     * Limit how many MONHOCS to delete.
     */
    limit?: number
  }

  /**
   * MONHOC.THOIKHOABIEU
   */
  export type MONHOC$THOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    where?: THOIKHOABIEUWhereInput
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    cursor?: THOIKHOABIEUWhereUniqueInput
    take?: number
    skip?: number
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * MONHOC without action
   */
  export type MONHOCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
  }


  /**
   * Model PHONG
   */

  export type AggregatePHONG = {
    _count: PHONGCountAggregateOutputType | null
    _avg: PHONGAvgAggregateOutputType | null
    _sum: PHONGSumAggregateOutputType | null
    _min: PHONGMinAggregateOutputType | null
    _max: PHONGMaxAggregateOutputType | null
  }

  export type PHONGAvgAggregateOutputType = {
    SucChua: number | null
  }

  export type PHONGSumAggregateOutputType = {
    SucChua: number | null
  }

  export type PHONGMinAggregateOutputType = {
    MaPhong: string | null
    TenPhong: string | null
    SucChua: number | null
    LoaiPhong: string | null
  }

  export type PHONGMaxAggregateOutputType = {
    MaPhong: string | null
    TenPhong: string | null
    SucChua: number | null
    LoaiPhong: string | null
  }

  export type PHONGCountAggregateOutputType = {
    MaPhong: number
    TenPhong: number
    SucChua: number
    LoaiPhong: number
    _all: number
  }


  export type PHONGAvgAggregateInputType = {
    SucChua?: true
  }

  export type PHONGSumAggregateInputType = {
    SucChua?: true
  }

  export type PHONGMinAggregateInputType = {
    MaPhong?: true
    TenPhong?: true
    SucChua?: true
    LoaiPhong?: true
  }

  export type PHONGMaxAggregateInputType = {
    MaPhong?: true
    TenPhong?: true
    SucChua?: true
    LoaiPhong?: true
  }

  export type PHONGCountAggregateInputType = {
    MaPhong?: true
    TenPhong?: true
    SucChua?: true
    LoaiPhong?: true
    _all?: true
  }

  export type PHONGAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PHONG to aggregate.
     */
    where?: PHONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHONGS to fetch.
     */
    orderBy?: PHONGOrderByWithRelationInput | PHONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PHONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHONGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PHONGS
    **/
    _count?: true | PHONGCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PHONGAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PHONGSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PHONGMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PHONGMaxAggregateInputType
  }

  export type GetPHONGAggregateType<T extends PHONGAggregateArgs> = {
        [P in keyof T & keyof AggregatePHONG]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePHONG[P]>
      : GetScalarType<T[P], AggregatePHONG[P]>
  }




  export type PHONGGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PHONGWhereInput
    orderBy?: PHONGOrderByWithAggregationInput | PHONGOrderByWithAggregationInput[]
    by: PHONGScalarFieldEnum[] | PHONGScalarFieldEnum
    having?: PHONGScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PHONGCountAggregateInputType | true
    _avg?: PHONGAvgAggregateInputType
    _sum?: PHONGSumAggregateInputType
    _min?: PHONGMinAggregateInputType
    _max?: PHONGMaxAggregateInputType
  }

  export type PHONGGroupByOutputType = {
    MaPhong: string
    TenPhong: string | null
    SucChua: number | null
    LoaiPhong: string | null
    _count: PHONGCountAggregateOutputType | null
    _avg: PHONGAvgAggregateOutputType | null
    _sum: PHONGSumAggregateOutputType | null
    _min: PHONGMinAggregateOutputType | null
    _max: PHONGMaxAggregateOutputType | null
  }

  type GetPHONGGroupByPayload<T extends PHONGGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PHONGGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PHONGGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PHONGGroupByOutputType[P]>
            : GetScalarType<T[P], PHONGGroupByOutputType[P]>
        }
      >
    >


  export type PHONGSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaPhong?: boolean
    TenPhong?: boolean
    SucChua?: boolean
    LoaiPhong?: boolean
    THOIKHOABIEU?: boolean | PHONG$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | PHONGCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pHONG"]>



  export type PHONGSelectScalar = {
    MaPhong?: boolean
    TenPhong?: boolean
    SucChua?: boolean
    LoaiPhong?: boolean
  }

  export type PHONGOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaPhong" | "TenPhong" | "SucChua" | "LoaiPhong", ExtArgs["result"]["pHONG"]>
  export type PHONGInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    THOIKHOABIEU?: boolean | PHONG$THOIKHOABIEUArgs<ExtArgs>
    _count?: boolean | PHONGCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PHONGPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PHONG"
    objects: {
      THOIKHOABIEU: Prisma.$THOIKHOABIEUPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaPhong: string
      TenPhong: string | null
      SucChua: number | null
      LoaiPhong: string | null
    }, ExtArgs["result"]["pHONG"]>
    composites: {}
  }

  type PHONGGetPayload<S extends boolean | null | undefined | PHONGDefaultArgs> = $Result.GetResult<Prisma.$PHONGPayload, S>

  type PHONGCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PHONGFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PHONGCountAggregateInputType | true
    }

  export interface PHONGDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PHONG'], meta: { name: 'PHONG' } }
    /**
     * Find zero or one PHONG that matches the filter.
     * @param {PHONGFindUniqueArgs} args - Arguments to find a PHONG
     * @example
     * // Get one PHONG
     * const pHONG = await prisma.pHONG.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PHONGFindUniqueArgs>(args: SelectSubset<T, PHONGFindUniqueArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PHONG that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PHONGFindUniqueOrThrowArgs} args - Arguments to find a PHONG
     * @example
     * // Get one PHONG
     * const pHONG = await prisma.pHONG.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PHONGFindUniqueOrThrowArgs>(args: SelectSubset<T, PHONGFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PHONG that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGFindFirstArgs} args - Arguments to find a PHONG
     * @example
     * // Get one PHONG
     * const pHONG = await prisma.pHONG.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PHONGFindFirstArgs>(args?: SelectSubset<T, PHONGFindFirstArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PHONG that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGFindFirstOrThrowArgs} args - Arguments to find a PHONG
     * @example
     * // Get one PHONG
     * const pHONG = await prisma.pHONG.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PHONGFindFirstOrThrowArgs>(args?: SelectSubset<T, PHONGFindFirstOrThrowArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PHONGS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PHONGS
     * const pHONGS = await prisma.pHONG.findMany()
     * 
     * // Get first 10 PHONGS
     * const pHONGS = await prisma.pHONG.findMany({ take: 10 })
     * 
     * // Only select the `MaPhong`
     * const pHONGWithMaPhongOnly = await prisma.pHONG.findMany({ select: { MaPhong: true } })
     * 
     */
    findMany<T extends PHONGFindManyArgs>(args?: SelectSubset<T, PHONGFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PHONG.
     * @param {PHONGCreateArgs} args - Arguments to create a PHONG.
     * @example
     * // Create one PHONG
     * const PHONG = await prisma.pHONG.create({
     *   data: {
     *     // ... data to create a PHONG
     *   }
     * })
     * 
     */
    create<T extends PHONGCreateArgs>(args: SelectSubset<T, PHONGCreateArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PHONGS.
     * @param {PHONGCreateManyArgs} args - Arguments to create many PHONGS.
     * @example
     * // Create many PHONGS
     * const pHONG = await prisma.pHONG.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PHONGCreateManyArgs>(args?: SelectSubset<T, PHONGCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PHONG.
     * @param {PHONGDeleteArgs} args - Arguments to delete one PHONG.
     * @example
     * // Delete one PHONG
     * const PHONG = await prisma.pHONG.delete({
     *   where: {
     *     // ... filter to delete one PHONG
     *   }
     * })
     * 
     */
    delete<T extends PHONGDeleteArgs>(args: SelectSubset<T, PHONGDeleteArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PHONG.
     * @param {PHONGUpdateArgs} args - Arguments to update one PHONG.
     * @example
     * // Update one PHONG
     * const pHONG = await prisma.pHONG.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PHONGUpdateArgs>(args: SelectSubset<T, PHONGUpdateArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PHONGS.
     * @param {PHONGDeleteManyArgs} args - Arguments to filter PHONGS to delete.
     * @example
     * // Delete a few PHONGS
     * const { count } = await prisma.pHONG.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PHONGDeleteManyArgs>(args?: SelectSubset<T, PHONGDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PHONGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PHONGS
     * const pHONG = await prisma.pHONG.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PHONGUpdateManyArgs>(args: SelectSubset<T, PHONGUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PHONG.
     * @param {PHONGUpsertArgs} args - Arguments to update or create a PHONG.
     * @example
     * // Update or create a PHONG
     * const pHONG = await prisma.pHONG.upsert({
     *   create: {
     *     // ... data to create a PHONG
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PHONG we want to update
     *   }
     * })
     */
    upsert<T extends PHONGUpsertArgs>(args: SelectSubset<T, PHONGUpsertArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PHONGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGCountArgs} args - Arguments to filter PHONGS to count.
     * @example
     * // Count the number of PHONGS
     * const count = await prisma.pHONG.count({
     *   where: {
     *     // ... the filter for the PHONGS we want to count
     *   }
     * })
    **/
    count<T extends PHONGCountArgs>(
      args?: Subset<T, PHONGCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PHONGCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PHONG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PHONGAggregateArgs>(args: Subset<T, PHONGAggregateArgs>): Prisma.PrismaPromise<GetPHONGAggregateType<T>>

    /**
     * Group by PHONG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PHONGGroupByArgs} args - Group by arguments.
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
      T extends PHONGGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PHONGGroupByArgs['orderBy'] }
        : { orderBy?: PHONGGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PHONGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPHONGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PHONG model
   */
  readonly fields: PHONGFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PHONG.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PHONGClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    THOIKHOABIEU<T extends PHONG$THOIKHOABIEUArgs<ExtArgs> = {}>(args?: Subset<T, PHONG$THOIKHOABIEUArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PHONG model
   */
  interface PHONGFieldRefs {
    readonly MaPhong: FieldRef<"PHONG", 'String'>
    readonly TenPhong: FieldRef<"PHONG", 'String'>
    readonly SucChua: FieldRef<"PHONG", 'Int'>
    readonly LoaiPhong: FieldRef<"PHONG", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PHONG findUnique
   */
  export type PHONGFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * Filter, which PHONG to fetch.
     */
    where: PHONGWhereUniqueInput
  }

  /**
   * PHONG findUniqueOrThrow
   */
  export type PHONGFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * Filter, which PHONG to fetch.
     */
    where: PHONGWhereUniqueInput
  }

  /**
   * PHONG findFirst
   */
  export type PHONGFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * Filter, which PHONG to fetch.
     */
    where?: PHONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHONGS to fetch.
     */
    orderBy?: PHONGOrderByWithRelationInput | PHONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PHONGS.
     */
    cursor?: PHONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHONGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PHONGS.
     */
    distinct?: PHONGScalarFieldEnum | PHONGScalarFieldEnum[]
  }

  /**
   * PHONG findFirstOrThrow
   */
  export type PHONGFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * Filter, which PHONG to fetch.
     */
    where?: PHONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHONGS to fetch.
     */
    orderBy?: PHONGOrderByWithRelationInput | PHONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PHONGS.
     */
    cursor?: PHONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHONGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PHONGS.
     */
    distinct?: PHONGScalarFieldEnum | PHONGScalarFieldEnum[]
  }

  /**
   * PHONG findMany
   */
  export type PHONGFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * Filter, which PHONGS to fetch.
     */
    where?: PHONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PHONGS to fetch.
     */
    orderBy?: PHONGOrderByWithRelationInput | PHONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PHONGS.
     */
    cursor?: PHONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PHONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PHONGS.
     */
    skip?: number
    distinct?: PHONGScalarFieldEnum | PHONGScalarFieldEnum[]
  }

  /**
   * PHONG create
   */
  export type PHONGCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * The data needed to create a PHONG.
     */
    data: XOR<PHONGCreateInput, PHONGUncheckedCreateInput>
  }

  /**
   * PHONG createMany
   */
  export type PHONGCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PHONGS.
     */
    data: PHONGCreateManyInput | PHONGCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PHONG update
   */
  export type PHONGUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * The data needed to update a PHONG.
     */
    data: XOR<PHONGUpdateInput, PHONGUncheckedUpdateInput>
    /**
     * Choose, which PHONG to update.
     */
    where: PHONGWhereUniqueInput
  }

  /**
   * PHONG updateMany
   */
  export type PHONGUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PHONGS.
     */
    data: XOR<PHONGUpdateManyMutationInput, PHONGUncheckedUpdateManyInput>
    /**
     * Filter which PHONGS to update
     */
    where?: PHONGWhereInput
    /**
     * Limit how many PHONGS to update.
     */
    limit?: number
  }

  /**
   * PHONG upsert
   */
  export type PHONGUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * The filter to search for the PHONG to update in case it exists.
     */
    where: PHONGWhereUniqueInput
    /**
     * In case the PHONG found by the `where` argument doesn't exist, create a new PHONG with this data.
     */
    create: XOR<PHONGCreateInput, PHONGUncheckedCreateInput>
    /**
     * In case the PHONG was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PHONGUpdateInput, PHONGUncheckedUpdateInput>
  }

  /**
   * PHONG delete
   */
  export type PHONGDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    /**
     * Filter which PHONG to delete.
     */
    where: PHONGWhereUniqueInput
  }

  /**
   * PHONG deleteMany
   */
  export type PHONGDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PHONGS to delete
     */
    where?: PHONGWhereInput
    /**
     * Limit how many PHONGS to delete.
     */
    limit?: number
  }

  /**
   * PHONG.THOIKHOABIEU
   */
  export type PHONG$THOIKHOABIEUArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    where?: THOIKHOABIEUWhereInput
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    cursor?: THOIKHOABIEUWhereUniqueInput
    take?: number
    skip?: number
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * PHONG without action
   */
  export type PHONGDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
  }


  /**
   * Model SINHVIEN
   */

  export type AggregateSINHVIEN = {
    _count: SINHVIENCountAggregateOutputType | null
    _min: SINHVIENMinAggregateOutputType | null
    _max: SINHVIENMaxAggregateOutputType | null
  }

  export type SINHVIENMinAggregateOutputType = {
    MaSV: string | null
    HoTen: string | null
    NgaySinh: Date | null
    GioiTinh: $Enums.SINHVIEN_GioiTinh | null
    DiaChi: string | null
    MaLop: string | null
  }

  export type SINHVIENMaxAggregateOutputType = {
    MaSV: string | null
    HoTen: string | null
    NgaySinh: Date | null
    GioiTinh: $Enums.SINHVIEN_GioiTinh | null
    DiaChi: string | null
    MaLop: string | null
  }

  export type SINHVIENCountAggregateOutputType = {
    MaSV: number
    HoTen: number
    NgaySinh: number
    GioiTinh: number
    DiaChi: number
    MaLop: number
    _all: number
  }


  export type SINHVIENMinAggregateInputType = {
    MaSV?: true
    HoTen?: true
    NgaySinh?: true
    GioiTinh?: true
    DiaChi?: true
    MaLop?: true
  }

  export type SINHVIENMaxAggregateInputType = {
    MaSV?: true
    HoTen?: true
    NgaySinh?: true
    GioiTinh?: true
    DiaChi?: true
    MaLop?: true
  }

  export type SINHVIENCountAggregateInputType = {
    MaSV?: true
    HoTen?: true
    NgaySinh?: true
    GioiTinh?: true
    DiaChi?: true
    MaLop?: true
    _all?: true
  }

  export type SINHVIENAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SINHVIEN to aggregate.
     */
    where?: SINHVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SINHVIENS to fetch.
     */
    orderBy?: SINHVIENOrderByWithRelationInput | SINHVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SINHVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SINHVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SINHVIENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SINHVIENS
    **/
    _count?: true | SINHVIENCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SINHVIENMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SINHVIENMaxAggregateInputType
  }

  export type GetSINHVIENAggregateType<T extends SINHVIENAggregateArgs> = {
        [P in keyof T & keyof AggregateSINHVIEN]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSINHVIEN[P]>
      : GetScalarType<T[P], AggregateSINHVIEN[P]>
  }




  export type SINHVIENGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SINHVIENWhereInput
    orderBy?: SINHVIENOrderByWithAggregationInput | SINHVIENOrderByWithAggregationInput[]
    by: SINHVIENScalarFieldEnum[] | SINHVIENScalarFieldEnum
    having?: SINHVIENScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SINHVIENCountAggregateInputType | true
    _min?: SINHVIENMinAggregateInputType
    _max?: SINHVIENMaxAggregateInputType
  }

  export type SINHVIENGroupByOutputType = {
    MaSV: string
    HoTen: string
    NgaySinh: Date | null
    GioiTinh: $Enums.SINHVIEN_GioiTinh | null
    DiaChi: string | null
    MaLop: string | null
    _count: SINHVIENCountAggregateOutputType | null
    _min: SINHVIENMinAggregateOutputType | null
    _max: SINHVIENMaxAggregateOutputType | null
  }

  type GetSINHVIENGroupByPayload<T extends SINHVIENGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SINHVIENGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SINHVIENGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SINHVIENGroupByOutputType[P]>
            : GetScalarType<T[P], SINHVIENGroupByOutputType[P]>
        }
      >
    >


  export type SINHVIENSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaSV?: boolean
    HoTen?: boolean
    NgaySinh?: boolean
    GioiTinh?: boolean
    DiaChi?: boolean
    MaLop?: boolean
    LOP?: boolean | SINHVIEN$LOPArgs<ExtArgs>
    TAIKHOAN?: boolean | SINHVIEN$TAIKHOANArgs<ExtArgs>
    _count?: boolean | SINHVIENCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sINHVIEN"]>



  export type SINHVIENSelectScalar = {
    MaSV?: boolean
    HoTen?: boolean
    NgaySinh?: boolean
    GioiTinh?: boolean
    DiaChi?: boolean
    MaLop?: boolean
  }

  export type SINHVIENOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaSV" | "HoTen" | "NgaySinh" | "GioiTinh" | "DiaChi" | "MaLop", ExtArgs["result"]["sINHVIEN"]>
  export type SINHVIENInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LOP?: boolean | SINHVIEN$LOPArgs<ExtArgs>
    TAIKHOAN?: boolean | SINHVIEN$TAIKHOANArgs<ExtArgs>
    _count?: boolean | SINHVIENCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SINHVIENPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SINHVIEN"
    objects: {
      LOP: Prisma.$LOPPayload<ExtArgs> | null
      TAIKHOAN: Prisma.$TAIKHOANPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaSV: string
      HoTen: string
      NgaySinh: Date | null
      GioiTinh: $Enums.SINHVIEN_GioiTinh | null
      DiaChi: string | null
      MaLop: string | null
    }, ExtArgs["result"]["sINHVIEN"]>
    composites: {}
  }

  type SINHVIENGetPayload<S extends boolean | null | undefined | SINHVIENDefaultArgs> = $Result.GetResult<Prisma.$SINHVIENPayload, S>

  type SINHVIENCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SINHVIENFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SINHVIENCountAggregateInputType | true
    }

  export interface SINHVIENDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SINHVIEN'], meta: { name: 'SINHVIEN' } }
    /**
     * Find zero or one SINHVIEN that matches the filter.
     * @param {SINHVIENFindUniqueArgs} args - Arguments to find a SINHVIEN
     * @example
     * // Get one SINHVIEN
     * const sINHVIEN = await prisma.sINHVIEN.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SINHVIENFindUniqueArgs>(args: SelectSubset<T, SINHVIENFindUniqueArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SINHVIEN that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SINHVIENFindUniqueOrThrowArgs} args - Arguments to find a SINHVIEN
     * @example
     * // Get one SINHVIEN
     * const sINHVIEN = await prisma.sINHVIEN.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SINHVIENFindUniqueOrThrowArgs>(args: SelectSubset<T, SINHVIENFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SINHVIEN that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENFindFirstArgs} args - Arguments to find a SINHVIEN
     * @example
     * // Get one SINHVIEN
     * const sINHVIEN = await prisma.sINHVIEN.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SINHVIENFindFirstArgs>(args?: SelectSubset<T, SINHVIENFindFirstArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SINHVIEN that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENFindFirstOrThrowArgs} args - Arguments to find a SINHVIEN
     * @example
     * // Get one SINHVIEN
     * const sINHVIEN = await prisma.sINHVIEN.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SINHVIENFindFirstOrThrowArgs>(args?: SelectSubset<T, SINHVIENFindFirstOrThrowArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SINHVIENS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SINHVIENS
     * const sINHVIENS = await prisma.sINHVIEN.findMany()
     * 
     * // Get first 10 SINHVIENS
     * const sINHVIENS = await prisma.sINHVIEN.findMany({ take: 10 })
     * 
     * // Only select the `MaSV`
     * const sINHVIENWithMaSVOnly = await prisma.sINHVIEN.findMany({ select: { MaSV: true } })
     * 
     */
    findMany<T extends SINHVIENFindManyArgs>(args?: SelectSubset<T, SINHVIENFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SINHVIEN.
     * @param {SINHVIENCreateArgs} args - Arguments to create a SINHVIEN.
     * @example
     * // Create one SINHVIEN
     * const SINHVIEN = await prisma.sINHVIEN.create({
     *   data: {
     *     // ... data to create a SINHVIEN
     *   }
     * })
     * 
     */
    create<T extends SINHVIENCreateArgs>(args: SelectSubset<T, SINHVIENCreateArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SINHVIENS.
     * @param {SINHVIENCreateManyArgs} args - Arguments to create many SINHVIENS.
     * @example
     * // Create many SINHVIENS
     * const sINHVIEN = await prisma.sINHVIEN.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SINHVIENCreateManyArgs>(args?: SelectSubset<T, SINHVIENCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SINHVIEN.
     * @param {SINHVIENDeleteArgs} args - Arguments to delete one SINHVIEN.
     * @example
     * // Delete one SINHVIEN
     * const SINHVIEN = await prisma.sINHVIEN.delete({
     *   where: {
     *     // ... filter to delete one SINHVIEN
     *   }
     * })
     * 
     */
    delete<T extends SINHVIENDeleteArgs>(args: SelectSubset<T, SINHVIENDeleteArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SINHVIEN.
     * @param {SINHVIENUpdateArgs} args - Arguments to update one SINHVIEN.
     * @example
     * // Update one SINHVIEN
     * const sINHVIEN = await prisma.sINHVIEN.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SINHVIENUpdateArgs>(args: SelectSubset<T, SINHVIENUpdateArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SINHVIENS.
     * @param {SINHVIENDeleteManyArgs} args - Arguments to filter SINHVIENS to delete.
     * @example
     * // Delete a few SINHVIENS
     * const { count } = await prisma.sINHVIEN.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SINHVIENDeleteManyArgs>(args?: SelectSubset<T, SINHVIENDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SINHVIENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SINHVIENS
     * const sINHVIEN = await prisma.sINHVIEN.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SINHVIENUpdateManyArgs>(args: SelectSubset<T, SINHVIENUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SINHVIEN.
     * @param {SINHVIENUpsertArgs} args - Arguments to update or create a SINHVIEN.
     * @example
     * // Update or create a SINHVIEN
     * const sINHVIEN = await prisma.sINHVIEN.upsert({
     *   create: {
     *     // ... data to create a SINHVIEN
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SINHVIEN we want to update
     *   }
     * })
     */
    upsert<T extends SINHVIENUpsertArgs>(args: SelectSubset<T, SINHVIENUpsertArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SINHVIENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENCountArgs} args - Arguments to filter SINHVIENS to count.
     * @example
     * // Count the number of SINHVIENS
     * const count = await prisma.sINHVIEN.count({
     *   where: {
     *     // ... the filter for the SINHVIENS we want to count
     *   }
     * })
    **/
    count<T extends SINHVIENCountArgs>(
      args?: Subset<T, SINHVIENCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SINHVIENCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SINHVIEN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SINHVIENAggregateArgs>(args: Subset<T, SINHVIENAggregateArgs>): Prisma.PrismaPromise<GetSINHVIENAggregateType<T>>

    /**
     * Group by SINHVIEN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SINHVIENGroupByArgs} args - Group by arguments.
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
      T extends SINHVIENGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SINHVIENGroupByArgs['orderBy'] }
        : { orderBy?: SINHVIENGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SINHVIENGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSINHVIENGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SINHVIEN model
   */
  readonly fields: SINHVIENFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SINHVIEN.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SINHVIENClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LOP<T extends SINHVIEN$LOPArgs<ExtArgs> = {}>(args?: Subset<T, SINHVIEN$LOPArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TAIKHOAN<T extends SINHVIEN$TAIKHOANArgs<ExtArgs> = {}>(args?: Subset<T, SINHVIEN$TAIKHOANArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SINHVIEN model
   */
  interface SINHVIENFieldRefs {
    readonly MaSV: FieldRef<"SINHVIEN", 'String'>
    readonly HoTen: FieldRef<"SINHVIEN", 'String'>
    readonly NgaySinh: FieldRef<"SINHVIEN", 'DateTime'>
    readonly GioiTinh: FieldRef<"SINHVIEN", 'SINHVIEN_GioiTinh'>
    readonly DiaChi: FieldRef<"SINHVIEN", 'String'>
    readonly MaLop: FieldRef<"SINHVIEN", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SINHVIEN findUnique
   */
  export type SINHVIENFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * Filter, which SINHVIEN to fetch.
     */
    where: SINHVIENWhereUniqueInput
  }

  /**
   * SINHVIEN findUniqueOrThrow
   */
  export type SINHVIENFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * Filter, which SINHVIEN to fetch.
     */
    where: SINHVIENWhereUniqueInput
  }

  /**
   * SINHVIEN findFirst
   */
  export type SINHVIENFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * Filter, which SINHVIEN to fetch.
     */
    where?: SINHVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SINHVIENS to fetch.
     */
    orderBy?: SINHVIENOrderByWithRelationInput | SINHVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SINHVIENS.
     */
    cursor?: SINHVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SINHVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SINHVIENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SINHVIENS.
     */
    distinct?: SINHVIENScalarFieldEnum | SINHVIENScalarFieldEnum[]
  }

  /**
   * SINHVIEN findFirstOrThrow
   */
  export type SINHVIENFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * Filter, which SINHVIEN to fetch.
     */
    where?: SINHVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SINHVIENS to fetch.
     */
    orderBy?: SINHVIENOrderByWithRelationInput | SINHVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SINHVIENS.
     */
    cursor?: SINHVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SINHVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SINHVIENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SINHVIENS.
     */
    distinct?: SINHVIENScalarFieldEnum | SINHVIENScalarFieldEnum[]
  }

  /**
   * SINHVIEN findMany
   */
  export type SINHVIENFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * Filter, which SINHVIENS to fetch.
     */
    where?: SINHVIENWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SINHVIENS to fetch.
     */
    orderBy?: SINHVIENOrderByWithRelationInput | SINHVIENOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SINHVIENS.
     */
    cursor?: SINHVIENWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SINHVIENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SINHVIENS.
     */
    skip?: number
    distinct?: SINHVIENScalarFieldEnum | SINHVIENScalarFieldEnum[]
  }

  /**
   * SINHVIEN create
   */
  export type SINHVIENCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * The data needed to create a SINHVIEN.
     */
    data: XOR<SINHVIENCreateInput, SINHVIENUncheckedCreateInput>
  }

  /**
   * SINHVIEN createMany
   */
  export type SINHVIENCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SINHVIENS.
     */
    data: SINHVIENCreateManyInput | SINHVIENCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SINHVIEN update
   */
  export type SINHVIENUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * The data needed to update a SINHVIEN.
     */
    data: XOR<SINHVIENUpdateInput, SINHVIENUncheckedUpdateInput>
    /**
     * Choose, which SINHVIEN to update.
     */
    where: SINHVIENWhereUniqueInput
  }

  /**
   * SINHVIEN updateMany
   */
  export type SINHVIENUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SINHVIENS.
     */
    data: XOR<SINHVIENUpdateManyMutationInput, SINHVIENUncheckedUpdateManyInput>
    /**
     * Filter which SINHVIENS to update
     */
    where?: SINHVIENWhereInput
    /**
     * Limit how many SINHVIENS to update.
     */
    limit?: number
  }

  /**
   * SINHVIEN upsert
   */
  export type SINHVIENUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * The filter to search for the SINHVIEN to update in case it exists.
     */
    where: SINHVIENWhereUniqueInput
    /**
     * In case the SINHVIEN found by the `where` argument doesn't exist, create a new SINHVIEN with this data.
     */
    create: XOR<SINHVIENCreateInput, SINHVIENUncheckedCreateInput>
    /**
     * In case the SINHVIEN was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SINHVIENUpdateInput, SINHVIENUncheckedUpdateInput>
  }

  /**
   * SINHVIEN delete
   */
  export type SINHVIENDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    /**
     * Filter which SINHVIEN to delete.
     */
    where: SINHVIENWhereUniqueInput
  }

  /**
   * SINHVIEN deleteMany
   */
  export type SINHVIENDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SINHVIENS to delete
     */
    where?: SINHVIENWhereInput
    /**
     * Limit how many SINHVIENS to delete.
     */
    limit?: number
  }

  /**
   * SINHVIEN.LOP
   */
  export type SINHVIEN$LOPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    where?: LOPWhereInput
  }

  /**
   * SINHVIEN.TAIKHOAN
   */
  export type SINHVIEN$TAIKHOANArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    where?: TAIKHOANWhereInput
    orderBy?: TAIKHOANOrderByWithRelationInput | TAIKHOANOrderByWithRelationInput[]
    cursor?: TAIKHOANWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TAIKHOANScalarFieldEnum | TAIKHOANScalarFieldEnum[]
  }

  /**
   * SINHVIEN without action
   */
  export type SINHVIENDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
  }


  /**
   * Model TAIKHOAN
   */

  export type AggregateTAIKHOAN = {
    _count: TAIKHOANCountAggregateOutputType | null
    _min: TAIKHOANMinAggregateOutputType | null
    _max: TAIKHOANMaxAggregateOutputType | null
  }

  export type TAIKHOANMinAggregateOutputType = {
    TenDangNhap: string | null
    MatKhau: string | null
    LoaiTaiKhoan: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV: string | null
    MaGV: string | null
  }

  export type TAIKHOANMaxAggregateOutputType = {
    TenDangNhap: string | null
    MatKhau: string | null
    LoaiTaiKhoan: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV: string | null
    MaGV: string | null
  }

  export type TAIKHOANCountAggregateOutputType = {
    TenDangNhap: number
    MatKhau: number
    LoaiTaiKhoan: number
    MaSV: number
    MaGV: number
    _all: number
  }


  export type TAIKHOANMinAggregateInputType = {
    TenDangNhap?: true
    MatKhau?: true
    LoaiTaiKhoan?: true
    MaSV?: true
    MaGV?: true
  }

  export type TAIKHOANMaxAggregateInputType = {
    TenDangNhap?: true
    MatKhau?: true
    LoaiTaiKhoan?: true
    MaSV?: true
    MaGV?: true
  }

  export type TAIKHOANCountAggregateInputType = {
    TenDangNhap?: true
    MatKhau?: true
    LoaiTaiKhoan?: true
    MaSV?: true
    MaGV?: true
    _all?: true
  }

  export type TAIKHOANAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TAIKHOAN to aggregate.
     */
    where?: TAIKHOANWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAIKHOANS to fetch.
     */
    orderBy?: TAIKHOANOrderByWithRelationInput | TAIKHOANOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TAIKHOANWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAIKHOANS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAIKHOANS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TAIKHOANS
    **/
    _count?: true | TAIKHOANCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TAIKHOANMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TAIKHOANMaxAggregateInputType
  }

  export type GetTAIKHOANAggregateType<T extends TAIKHOANAggregateArgs> = {
        [P in keyof T & keyof AggregateTAIKHOAN]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTAIKHOAN[P]>
      : GetScalarType<T[P], AggregateTAIKHOAN[P]>
  }




  export type TAIKHOANGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TAIKHOANWhereInput
    orderBy?: TAIKHOANOrderByWithAggregationInput | TAIKHOANOrderByWithAggregationInput[]
    by: TAIKHOANScalarFieldEnum[] | TAIKHOANScalarFieldEnum
    having?: TAIKHOANScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TAIKHOANCountAggregateInputType | true
    _min?: TAIKHOANMinAggregateInputType
    _max?: TAIKHOANMaxAggregateInputType
  }

  export type TAIKHOANGroupByOutputType = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV: string | null
    MaGV: string | null
    _count: TAIKHOANCountAggregateOutputType | null
    _min: TAIKHOANMinAggregateOutputType | null
    _max: TAIKHOANMaxAggregateOutputType | null
  }

  type GetTAIKHOANGroupByPayload<T extends TAIKHOANGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TAIKHOANGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TAIKHOANGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TAIKHOANGroupByOutputType[P]>
            : GetScalarType<T[P], TAIKHOANGroupByOutputType[P]>
        }
      >
    >


  export type TAIKHOANSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TenDangNhap?: boolean
    MatKhau?: boolean
    LoaiTaiKhoan?: boolean
    MaSV?: boolean
    MaGV?: boolean
    SINHVIEN?: boolean | TAIKHOAN$SINHVIENArgs<ExtArgs>
    GIANGVIEN?: boolean | TAIKHOAN$GIANGVIENArgs<ExtArgs>
  }, ExtArgs["result"]["tAIKHOAN"]>



  export type TAIKHOANSelectScalar = {
    TenDangNhap?: boolean
    MatKhau?: boolean
    LoaiTaiKhoan?: boolean
    MaSV?: boolean
    MaGV?: boolean
  }

  export type TAIKHOANOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TenDangNhap" | "MatKhau" | "LoaiTaiKhoan" | "MaSV" | "MaGV", ExtArgs["result"]["tAIKHOAN"]>
  export type TAIKHOANInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SINHVIEN?: boolean | TAIKHOAN$SINHVIENArgs<ExtArgs>
    GIANGVIEN?: boolean | TAIKHOAN$GIANGVIENArgs<ExtArgs>
  }

  export type $TAIKHOANPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TAIKHOAN"
    objects: {
      SINHVIEN: Prisma.$SINHVIENPayload<ExtArgs> | null
      GIANGVIEN: Prisma.$GIANGVIENPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      TenDangNhap: string
      MatKhau: string
      LoaiTaiKhoan: $Enums.TAIKHOAN_LoaiTaiKhoan | null
      MaSV: string | null
      MaGV: string | null
    }, ExtArgs["result"]["tAIKHOAN"]>
    composites: {}
  }

  type TAIKHOANGetPayload<S extends boolean | null | undefined | TAIKHOANDefaultArgs> = $Result.GetResult<Prisma.$TAIKHOANPayload, S>

  type TAIKHOANCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TAIKHOANFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TAIKHOANCountAggregateInputType | true
    }

  export interface TAIKHOANDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TAIKHOAN'], meta: { name: 'TAIKHOAN' } }
    /**
     * Find zero or one TAIKHOAN that matches the filter.
     * @param {TAIKHOANFindUniqueArgs} args - Arguments to find a TAIKHOAN
     * @example
     * // Get one TAIKHOAN
     * const tAIKHOAN = await prisma.tAIKHOAN.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TAIKHOANFindUniqueArgs>(args: SelectSubset<T, TAIKHOANFindUniqueArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TAIKHOAN that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TAIKHOANFindUniqueOrThrowArgs} args - Arguments to find a TAIKHOAN
     * @example
     * // Get one TAIKHOAN
     * const tAIKHOAN = await prisma.tAIKHOAN.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TAIKHOANFindUniqueOrThrowArgs>(args: SelectSubset<T, TAIKHOANFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TAIKHOAN that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANFindFirstArgs} args - Arguments to find a TAIKHOAN
     * @example
     * // Get one TAIKHOAN
     * const tAIKHOAN = await prisma.tAIKHOAN.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TAIKHOANFindFirstArgs>(args?: SelectSubset<T, TAIKHOANFindFirstArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TAIKHOAN that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANFindFirstOrThrowArgs} args - Arguments to find a TAIKHOAN
     * @example
     * // Get one TAIKHOAN
     * const tAIKHOAN = await prisma.tAIKHOAN.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TAIKHOANFindFirstOrThrowArgs>(args?: SelectSubset<T, TAIKHOANFindFirstOrThrowArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TAIKHOANS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TAIKHOANS
     * const tAIKHOANS = await prisma.tAIKHOAN.findMany()
     * 
     * // Get first 10 TAIKHOANS
     * const tAIKHOANS = await prisma.tAIKHOAN.findMany({ take: 10 })
     * 
     * // Only select the `TenDangNhap`
     * const tAIKHOANWithTenDangNhapOnly = await prisma.tAIKHOAN.findMany({ select: { TenDangNhap: true } })
     * 
     */
    findMany<T extends TAIKHOANFindManyArgs>(args?: SelectSubset<T, TAIKHOANFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TAIKHOAN.
     * @param {TAIKHOANCreateArgs} args - Arguments to create a TAIKHOAN.
     * @example
     * // Create one TAIKHOAN
     * const TAIKHOAN = await prisma.tAIKHOAN.create({
     *   data: {
     *     // ... data to create a TAIKHOAN
     *   }
     * })
     * 
     */
    create<T extends TAIKHOANCreateArgs>(args: SelectSubset<T, TAIKHOANCreateArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TAIKHOANS.
     * @param {TAIKHOANCreateManyArgs} args - Arguments to create many TAIKHOANS.
     * @example
     * // Create many TAIKHOANS
     * const tAIKHOAN = await prisma.tAIKHOAN.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TAIKHOANCreateManyArgs>(args?: SelectSubset<T, TAIKHOANCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TAIKHOAN.
     * @param {TAIKHOANDeleteArgs} args - Arguments to delete one TAIKHOAN.
     * @example
     * // Delete one TAIKHOAN
     * const TAIKHOAN = await prisma.tAIKHOAN.delete({
     *   where: {
     *     // ... filter to delete one TAIKHOAN
     *   }
     * })
     * 
     */
    delete<T extends TAIKHOANDeleteArgs>(args: SelectSubset<T, TAIKHOANDeleteArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TAIKHOAN.
     * @param {TAIKHOANUpdateArgs} args - Arguments to update one TAIKHOAN.
     * @example
     * // Update one TAIKHOAN
     * const tAIKHOAN = await prisma.tAIKHOAN.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TAIKHOANUpdateArgs>(args: SelectSubset<T, TAIKHOANUpdateArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TAIKHOANS.
     * @param {TAIKHOANDeleteManyArgs} args - Arguments to filter TAIKHOANS to delete.
     * @example
     * // Delete a few TAIKHOANS
     * const { count } = await prisma.tAIKHOAN.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TAIKHOANDeleteManyArgs>(args?: SelectSubset<T, TAIKHOANDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TAIKHOANS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TAIKHOANS
     * const tAIKHOAN = await prisma.tAIKHOAN.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TAIKHOANUpdateManyArgs>(args: SelectSubset<T, TAIKHOANUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TAIKHOAN.
     * @param {TAIKHOANUpsertArgs} args - Arguments to update or create a TAIKHOAN.
     * @example
     * // Update or create a TAIKHOAN
     * const tAIKHOAN = await prisma.tAIKHOAN.upsert({
     *   create: {
     *     // ... data to create a TAIKHOAN
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TAIKHOAN we want to update
     *   }
     * })
     */
    upsert<T extends TAIKHOANUpsertArgs>(args: SelectSubset<T, TAIKHOANUpsertArgs<ExtArgs>>): Prisma__TAIKHOANClient<$Result.GetResult<Prisma.$TAIKHOANPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TAIKHOANS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANCountArgs} args - Arguments to filter TAIKHOANS to count.
     * @example
     * // Count the number of TAIKHOANS
     * const count = await prisma.tAIKHOAN.count({
     *   where: {
     *     // ... the filter for the TAIKHOANS we want to count
     *   }
     * })
    **/
    count<T extends TAIKHOANCountArgs>(
      args?: Subset<T, TAIKHOANCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TAIKHOANCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TAIKHOAN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TAIKHOANAggregateArgs>(args: Subset<T, TAIKHOANAggregateArgs>): Prisma.PrismaPromise<GetTAIKHOANAggregateType<T>>

    /**
     * Group by TAIKHOAN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TAIKHOANGroupByArgs} args - Group by arguments.
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
      T extends TAIKHOANGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TAIKHOANGroupByArgs['orderBy'] }
        : { orderBy?: TAIKHOANGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TAIKHOANGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTAIKHOANGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TAIKHOAN model
   */
  readonly fields: TAIKHOANFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TAIKHOAN.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TAIKHOANClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SINHVIEN<T extends TAIKHOAN$SINHVIENArgs<ExtArgs> = {}>(args?: Subset<T, TAIKHOAN$SINHVIENArgs<ExtArgs>>): Prisma__SINHVIENClient<$Result.GetResult<Prisma.$SINHVIENPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GIANGVIEN<T extends TAIKHOAN$GIANGVIENArgs<ExtArgs> = {}>(args?: Subset<T, TAIKHOAN$GIANGVIENArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TAIKHOAN model
   */
  interface TAIKHOANFieldRefs {
    readonly TenDangNhap: FieldRef<"TAIKHOAN", 'String'>
    readonly MatKhau: FieldRef<"TAIKHOAN", 'String'>
    readonly LoaiTaiKhoan: FieldRef<"TAIKHOAN", 'TAIKHOAN_LoaiTaiKhoan'>
    readonly MaSV: FieldRef<"TAIKHOAN", 'String'>
    readonly MaGV: FieldRef<"TAIKHOAN", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TAIKHOAN findUnique
   */
  export type TAIKHOANFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * Filter, which TAIKHOAN to fetch.
     */
    where: TAIKHOANWhereUniqueInput
  }

  /**
   * TAIKHOAN findUniqueOrThrow
   */
  export type TAIKHOANFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * Filter, which TAIKHOAN to fetch.
     */
    where: TAIKHOANWhereUniqueInput
  }

  /**
   * TAIKHOAN findFirst
   */
  export type TAIKHOANFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * Filter, which TAIKHOAN to fetch.
     */
    where?: TAIKHOANWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAIKHOANS to fetch.
     */
    orderBy?: TAIKHOANOrderByWithRelationInput | TAIKHOANOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TAIKHOANS.
     */
    cursor?: TAIKHOANWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAIKHOANS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAIKHOANS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TAIKHOANS.
     */
    distinct?: TAIKHOANScalarFieldEnum | TAIKHOANScalarFieldEnum[]
  }

  /**
   * TAIKHOAN findFirstOrThrow
   */
  export type TAIKHOANFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * Filter, which TAIKHOAN to fetch.
     */
    where?: TAIKHOANWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAIKHOANS to fetch.
     */
    orderBy?: TAIKHOANOrderByWithRelationInput | TAIKHOANOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TAIKHOANS.
     */
    cursor?: TAIKHOANWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAIKHOANS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAIKHOANS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TAIKHOANS.
     */
    distinct?: TAIKHOANScalarFieldEnum | TAIKHOANScalarFieldEnum[]
  }

  /**
   * TAIKHOAN findMany
   */
  export type TAIKHOANFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * Filter, which TAIKHOANS to fetch.
     */
    where?: TAIKHOANWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TAIKHOANS to fetch.
     */
    orderBy?: TAIKHOANOrderByWithRelationInput | TAIKHOANOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TAIKHOANS.
     */
    cursor?: TAIKHOANWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TAIKHOANS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TAIKHOANS.
     */
    skip?: number
    distinct?: TAIKHOANScalarFieldEnum | TAIKHOANScalarFieldEnum[]
  }

  /**
   * TAIKHOAN create
   */
  export type TAIKHOANCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * The data needed to create a TAIKHOAN.
     */
    data: XOR<TAIKHOANCreateInput, TAIKHOANUncheckedCreateInput>
  }

  /**
   * TAIKHOAN createMany
   */
  export type TAIKHOANCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TAIKHOANS.
     */
    data: TAIKHOANCreateManyInput | TAIKHOANCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TAIKHOAN update
   */
  export type TAIKHOANUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * The data needed to update a TAIKHOAN.
     */
    data: XOR<TAIKHOANUpdateInput, TAIKHOANUncheckedUpdateInput>
    /**
     * Choose, which TAIKHOAN to update.
     */
    where: TAIKHOANWhereUniqueInput
  }

  /**
   * TAIKHOAN updateMany
   */
  export type TAIKHOANUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TAIKHOANS.
     */
    data: XOR<TAIKHOANUpdateManyMutationInput, TAIKHOANUncheckedUpdateManyInput>
    /**
     * Filter which TAIKHOANS to update
     */
    where?: TAIKHOANWhereInput
    /**
     * Limit how many TAIKHOANS to update.
     */
    limit?: number
  }

  /**
   * TAIKHOAN upsert
   */
  export type TAIKHOANUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * The filter to search for the TAIKHOAN to update in case it exists.
     */
    where: TAIKHOANWhereUniqueInput
    /**
     * In case the TAIKHOAN found by the `where` argument doesn't exist, create a new TAIKHOAN with this data.
     */
    create: XOR<TAIKHOANCreateInput, TAIKHOANUncheckedCreateInput>
    /**
     * In case the TAIKHOAN was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TAIKHOANUpdateInput, TAIKHOANUncheckedUpdateInput>
  }

  /**
   * TAIKHOAN delete
   */
  export type TAIKHOANDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
    /**
     * Filter which TAIKHOAN to delete.
     */
    where: TAIKHOANWhereUniqueInput
  }

  /**
   * TAIKHOAN deleteMany
   */
  export type TAIKHOANDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TAIKHOANS to delete
     */
    where?: TAIKHOANWhereInput
    /**
     * Limit how many TAIKHOANS to delete.
     */
    limit?: number
  }

  /**
   * TAIKHOAN.SINHVIEN
   */
  export type TAIKHOAN$SINHVIENArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SINHVIEN
     */
    select?: SINHVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SINHVIEN
     */
    omit?: SINHVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SINHVIENInclude<ExtArgs> | null
    where?: SINHVIENWhereInput
  }

  /**
   * TAIKHOAN.GIANGVIEN
   */
  export type TAIKHOAN$GIANGVIENArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    where?: GIANGVIENWhereInput
  }

  /**
   * TAIKHOAN without action
   */
  export type TAIKHOANDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TAIKHOAN
     */
    select?: TAIKHOANSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TAIKHOAN
     */
    omit?: TAIKHOANOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TAIKHOANInclude<ExtArgs> | null
  }


  /**
   * Model THOIKHOABIEU
   */

  export type AggregateTHOIKHOABIEU = {
    _count: THOIKHOABIEUCountAggregateOutputType | null
    _avg: THOIKHOABIEUAvgAggregateOutputType | null
    _sum: THOIKHOABIEUSumAggregateOutputType | null
    _min: THOIKHOABIEUMinAggregateOutputType | null
    _max: THOIKHOABIEUMaxAggregateOutputType | null
  }

  export type THOIKHOABIEUAvgAggregateOutputType = {
    MaTKB: number | null
    Thu: number | null
    TietBatDau: number | null
    SoTiet: number | null
  }

  export type THOIKHOABIEUSumAggregateOutputType = {
    MaTKB: number | null
    Thu: number | null
    TietBatDau: number | null
    SoTiet: number | null
  }

  export type THOIKHOABIEUMinAggregateOutputType = {
    MaTKB: number | null
    MaLop: string | null
    MaMH: string | null
    MaGV: string | null
    MaPhong: string | null
    Thu: number | null
    TietBatDau: number | null
    SoTiet: number | null
    NgayBatDau: Date | null
    NgayKetThuc: Date | null
  }

  export type THOIKHOABIEUMaxAggregateOutputType = {
    MaTKB: number | null
    MaLop: string | null
    MaMH: string | null
    MaGV: string | null
    MaPhong: string | null
    Thu: number | null
    TietBatDau: number | null
    SoTiet: number | null
    NgayBatDau: Date | null
    NgayKetThuc: Date | null
  }

  export type THOIKHOABIEUCountAggregateOutputType = {
    MaTKB: number
    MaLop: number
    MaMH: number
    MaGV: number
    MaPhong: number
    Thu: number
    TietBatDau: number
    SoTiet: number
    NgayBatDau: number
    NgayKetThuc: number
    _all: number
  }


  export type THOIKHOABIEUAvgAggregateInputType = {
    MaTKB?: true
    Thu?: true
    TietBatDau?: true
    SoTiet?: true
  }

  export type THOIKHOABIEUSumAggregateInputType = {
    MaTKB?: true
    Thu?: true
    TietBatDau?: true
    SoTiet?: true
  }

  export type THOIKHOABIEUMinAggregateInputType = {
    MaTKB?: true
    MaLop?: true
    MaMH?: true
    MaGV?: true
    MaPhong?: true
    Thu?: true
    TietBatDau?: true
    SoTiet?: true
    NgayBatDau?: true
    NgayKetThuc?: true
  }

  export type THOIKHOABIEUMaxAggregateInputType = {
    MaTKB?: true
    MaLop?: true
    MaMH?: true
    MaGV?: true
    MaPhong?: true
    Thu?: true
    TietBatDau?: true
    SoTiet?: true
    NgayBatDau?: true
    NgayKetThuc?: true
  }

  export type THOIKHOABIEUCountAggregateInputType = {
    MaTKB?: true
    MaLop?: true
    MaMH?: true
    MaGV?: true
    MaPhong?: true
    Thu?: true
    TietBatDau?: true
    SoTiet?: true
    NgayBatDau?: true
    NgayKetThuc?: true
    _all?: true
  }

  export type THOIKHOABIEUAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which THOIKHOABIEU to aggregate.
     */
    where?: THOIKHOABIEUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of THOIKHOABIEUS to fetch.
     */
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: THOIKHOABIEUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` THOIKHOABIEUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` THOIKHOABIEUS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned THOIKHOABIEUS
    **/
    _count?: true | THOIKHOABIEUCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: THOIKHOABIEUAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: THOIKHOABIEUSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: THOIKHOABIEUMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: THOIKHOABIEUMaxAggregateInputType
  }

  export type GetTHOIKHOABIEUAggregateType<T extends THOIKHOABIEUAggregateArgs> = {
        [P in keyof T & keyof AggregateTHOIKHOABIEU]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTHOIKHOABIEU[P]>
      : GetScalarType<T[P], AggregateTHOIKHOABIEU[P]>
  }




  export type THOIKHOABIEUGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: THOIKHOABIEUWhereInput
    orderBy?: THOIKHOABIEUOrderByWithAggregationInput | THOIKHOABIEUOrderByWithAggregationInput[]
    by: THOIKHOABIEUScalarFieldEnum[] | THOIKHOABIEUScalarFieldEnum
    having?: THOIKHOABIEUScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: THOIKHOABIEUCountAggregateInputType | true
    _avg?: THOIKHOABIEUAvgAggregateInputType
    _sum?: THOIKHOABIEUSumAggregateInputType
    _min?: THOIKHOABIEUMinAggregateInputType
    _max?: THOIKHOABIEUMaxAggregateInputType
  }

  export type THOIKHOABIEUGroupByOutputType = {
    MaTKB: number
    MaLop: string | null
    MaMH: string | null
    MaGV: string | null
    MaPhong: string | null
    Thu: number | null
    TietBatDau: number | null
    SoTiet: number | null
    NgayBatDau: Date | null
    NgayKetThuc: Date | null
    _count: THOIKHOABIEUCountAggregateOutputType | null
    _avg: THOIKHOABIEUAvgAggregateOutputType | null
    _sum: THOIKHOABIEUSumAggregateOutputType | null
    _min: THOIKHOABIEUMinAggregateOutputType | null
    _max: THOIKHOABIEUMaxAggregateOutputType | null
  }

  type GetTHOIKHOABIEUGroupByPayload<T extends THOIKHOABIEUGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<THOIKHOABIEUGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof THOIKHOABIEUGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], THOIKHOABIEUGroupByOutputType[P]>
            : GetScalarType<T[P], THOIKHOABIEUGroupByOutputType[P]>
        }
      >
    >


  export type THOIKHOABIEUSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaTKB?: boolean
    MaLop?: boolean
    MaMH?: boolean
    MaGV?: boolean
    MaPhong?: boolean
    Thu?: boolean
    TietBatDau?: boolean
    SoTiet?: boolean
    NgayBatDau?: boolean
    NgayKetThuc?: boolean
    LOP?: boolean | THOIKHOABIEU$LOPArgs<ExtArgs>
    MONHOC?: boolean | THOIKHOABIEU$MONHOCArgs<ExtArgs>
    GIANGVIEN?: boolean | THOIKHOABIEU$GIANGVIENArgs<ExtArgs>
    PHONG?: boolean | THOIKHOABIEU$PHONGArgs<ExtArgs>
  }, ExtArgs["result"]["tHOIKHOABIEU"]>



  export type THOIKHOABIEUSelectScalar = {
    MaTKB?: boolean
    MaLop?: boolean
    MaMH?: boolean
    MaGV?: boolean
    MaPhong?: boolean
    Thu?: boolean
    TietBatDau?: boolean
    SoTiet?: boolean
    NgayBatDau?: boolean
    NgayKetThuc?: boolean
  }

  export type THOIKHOABIEUOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaTKB" | "MaLop" | "MaMH" | "MaGV" | "MaPhong" | "Thu" | "TietBatDau" | "SoTiet" | "NgayBatDau" | "NgayKetThuc", ExtArgs["result"]["tHOIKHOABIEU"]>
  export type THOIKHOABIEUInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LOP?: boolean | THOIKHOABIEU$LOPArgs<ExtArgs>
    MONHOC?: boolean | THOIKHOABIEU$MONHOCArgs<ExtArgs>
    GIANGVIEN?: boolean | THOIKHOABIEU$GIANGVIENArgs<ExtArgs>
    PHONG?: boolean | THOIKHOABIEU$PHONGArgs<ExtArgs>
  }

  export type $THOIKHOABIEUPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "THOIKHOABIEU"
    objects: {
      LOP: Prisma.$LOPPayload<ExtArgs> | null
      MONHOC: Prisma.$MONHOCPayload<ExtArgs> | null
      GIANGVIEN: Prisma.$GIANGVIENPayload<ExtArgs> | null
      PHONG: Prisma.$PHONGPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      MaTKB: number
      MaLop: string | null
      MaMH: string | null
      MaGV: string | null
      MaPhong: string | null
      Thu: number | null
      TietBatDau: number | null
      SoTiet: number | null
      NgayBatDau: Date | null
      NgayKetThuc: Date | null
    }, ExtArgs["result"]["tHOIKHOABIEU"]>
    composites: {}
  }

  type THOIKHOABIEUGetPayload<S extends boolean | null | undefined | THOIKHOABIEUDefaultArgs> = $Result.GetResult<Prisma.$THOIKHOABIEUPayload, S>

  type THOIKHOABIEUCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<THOIKHOABIEUFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: THOIKHOABIEUCountAggregateInputType | true
    }

  export interface THOIKHOABIEUDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['THOIKHOABIEU'], meta: { name: 'THOIKHOABIEU' } }
    /**
     * Find zero or one THOIKHOABIEU that matches the filter.
     * @param {THOIKHOABIEUFindUniqueArgs} args - Arguments to find a THOIKHOABIEU
     * @example
     * // Get one THOIKHOABIEU
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends THOIKHOABIEUFindUniqueArgs>(args: SelectSubset<T, THOIKHOABIEUFindUniqueArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one THOIKHOABIEU that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {THOIKHOABIEUFindUniqueOrThrowArgs} args - Arguments to find a THOIKHOABIEU
     * @example
     * // Get one THOIKHOABIEU
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends THOIKHOABIEUFindUniqueOrThrowArgs>(args: SelectSubset<T, THOIKHOABIEUFindUniqueOrThrowArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first THOIKHOABIEU that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUFindFirstArgs} args - Arguments to find a THOIKHOABIEU
     * @example
     * // Get one THOIKHOABIEU
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends THOIKHOABIEUFindFirstArgs>(args?: SelectSubset<T, THOIKHOABIEUFindFirstArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first THOIKHOABIEU that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUFindFirstOrThrowArgs} args - Arguments to find a THOIKHOABIEU
     * @example
     * // Get one THOIKHOABIEU
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends THOIKHOABIEUFindFirstOrThrowArgs>(args?: SelectSubset<T, THOIKHOABIEUFindFirstOrThrowArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more THOIKHOABIEUS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all THOIKHOABIEUS
     * const tHOIKHOABIEUS = await prisma.tHOIKHOABIEU.findMany()
     * 
     * // Get first 10 THOIKHOABIEUS
     * const tHOIKHOABIEUS = await prisma.tHOIKHOABIEU.findMany({ take: 10 })
     * 
     * // Only select the `MaTKB`
     * const tHOIKHOABIEUWithMaTKBOnly = await prisma.tHOIKHOABIEU.findMany({ select: { MaTKB: true } })
     * 
     */
    findMany<T extends THOIKHOABIEUFindManyArgs>(args?: SelectSubset<T, THOIKHOABIEUFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a THOIKHOABIEU.
     * @param {THOIKHOABIEUCreateArgs} args - Arguments to create a THOIKHOABIEU.
     * @example
     * // Create one THOIKHOABIEU
     * const THOIKHOABIEU = await prisma.tHOIKHOABIEU.create({
     *   data: {
     *     // ... data to create a THOIKHOABIEU
     *   }
     * })
     * 
     */
    create<T extends THOIKHOABIEUCreateArgs>(args: SelectSubset<T, THOIKHOABIEUCreateArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many THOIKHOABIEUS.
     * @param {THOIKHOABIEUCreateManyArgs} args - Arguments to create many THOIKHOABIEUS.
     * @example
     * // Create many THOIKHOABIEUS
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends THOIKHOABIEUCreateManyArgs>(args?: SelectSubset<T, THOIKHOABIEUCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a THOIKHOABIEU.
     * @param {THOIKHOABIEUDeleteArgs} args - Arguments to delete one THOIKHOABIEU.
     * @example
     * // Delete one THOIKHOABIEU
     * const THOIKHOABIEU = await prisma.tHOIKHOABIEU.delete({
     *   where: {
     *     // ... filter to delete one THOIKHOABIEU
     *   }
     * })
     * 
     */
    delete<T extends THOIKHOABIEUDeleteArgs>(args: SelectSubset<T, THOIKHOABIEUDeleteArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one THOIKHOABIEU.
     * @param {THOIKHOABIEUUpdateArgs} args - Arguments to update one THOIKHOABIEU.
     * @example
     * // Update one THOIKHOABIEU
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends THOIKHOABIEUUpdateArgs>(args: SelectSubset<T, THOIKHOABIEUUpdateArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more THOIKHOABIEUS.
     * @param {THOIKHOABIEUDeleteManyArgs} args - Arguments to filter THOIKHOABIEUS to delete.
     * @example
     * // Delete a few THOIKHOABIEUS
     * const { count } = await prisma.tHOIKHOABIEU.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends THOIKHOABIEUDeleteManyArgs>(args?: SelectSubset<T, THOIKHOABIEUDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more THOIKHOABIEUS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many THOIKHOABIEUS
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends THOIKHOABIEUUpdateManyArgs>(args: SelectSubset<T, THOIKHOABIEUUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one THOIKHOABIEU.
     * @param {THOIKHOABIEUUpsertArgs} args - Arguments to update or create a THOIKHOABIEU.
     * @example
     * // Update or create a THOIKHOABIEU
     * const tHOIKHOABIEU = await prisma.tHOIKHOABIEU.upsert({
     *   create: {
     *     // ... data to create a THOIKHOABIEU
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the THOIKHOABIEU we want to update
     *   }
     * })
     */
    upsert<T extends THOIKHOABIEUUpsertArgs>(args: SelectSubset<T, THOIKHOABIEUUpsertArgs<ExtArgs>>): Prisma__THOIKHOABIEUClient<$Result.GetResult<Prisma.$THOIKHOABIEUPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of THOIKHOABIEUS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUCountArgs} args - Arguments to filter THOIKHOABIEUS to count.
     * @example
     * // Count the number of THOIKHOABIEUS
     * const count = await prisma.tHOIKHOABIEU.count({
     *   where: {
     *     // ... the filter for the THOIKHOABIEUS we want to count
     *   }
     * })
    **/
    count<T extends THOIKHOABIEUCountArgs>(
      args?: Subset<T, THOIKHOABIEUCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], THOIKHOABIEUCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a THOIKHOABIEU.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends THOIKHOABIEUAggregateArgs>(args: Subset<T, THOIKHOABIEUAggregateArgs>): Prisma.PrismaPromise<GetTHOIKHOABIEUAggregateType<T>>

    /**
     * Group by THOIKHOABIEU.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {THOIKHOABIEUGroupByArgs} args - Group by arguments.
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
      T extends THOIKHOABIEUGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: THOIKHOABIEUGroupByArgs['orderBy'] }
        : { orderBy?: THOIKHOABIEUGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, THOIKHOABIEUGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTHOIKHOABIEUGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the THOIKHOABIEU model
   */
  readonly fields: THOIKHOABIEUFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for THOIKHOABIEU.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__THOIKHOABIEUClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LOP<T extends THOIKHOABIEU$LOPArgs<ExtArgs> = {}>(args?: Subset<T, THOIKHOABIEU$LOPArgs<ExtArgs>>): Prisma__LOPClient<$Result.GetResult<Prisma.$LOPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    MONHOC<T extends THOIKHOABIEU$MONHOCArgs<ExtArgs> = {}>(args?: Subset<T, THOIKHOABIEU$MONHOCArgs<ExtArgs>>): Prisma__MONHOCClient<$Result.GetResult<Prisma.$MONHOCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GIANGVIEN<T extends THOIKHOABIEU$GIANGVIENArgs<ExtArgs> = {}>(args?: Subset<T, THOIKHOABIEU$GIANGVIENArgs<ExtArgs>>): Prisma__GIANGVIENClient<$Result.GetResult<Prisma.$GIANGVIENPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PHONG<T extends THOIKHOABIEU$PHONGArgs<ExtArgs> = {}>(args?: Subset<T, THOIKHOABIEU$PHONGArgs<ExtArgs>>): Prisma__PHONGClient<$Result.GetResult<Prisma.$PHONGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the THOIKHOABIEU model
   */
  interface THOIKHOABIEUFieldRefs {
    readonly MaTKB: FieldRef<"THOIKHOABIEU", 'Int'>
    readonly MaLop: FieldRef<"THOIKHOABIEU", 'String'>
    readonly MaMH: FieldRef<"THOIKHOABIEU", 'String'>
    readonly MaGV: FieldRef<"THOIKHOABIEU", 'String'>
    readonly MaPhong: FieldRef<"THOIKHOABIEU", 'String'>
    readonly Thu: FieldRef<"THOIKHOABIEU", 'Int'>
    readonly TietBatDau: FieldRef<"THOIKHOABIEU", 'Int'>
    readonly SoTiet: FieldRef<"THOIKHOABIEU", 'Int'>
    readonly NgayBatDau: FieldRef<"THOIKHOABIEU", 'DateTime'>
    readonly NgayKetThuc: FieldRef<"THOIKHOABIEU", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * THOIKHOABIEU findUnique
   */
  export type THOIKHOABIEUFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * Filter, which THOIKHOABIEU to fetch.
     */
    where: THOIKHOABIEUWhereUniqueInput
  }

  /**
   * THOIKHOABIEU findUniqueOrThrow
   */
  export type THOIKHOABIEUFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * Filter, which THOIKHOABIEU to fetch.
     */
    where: THOIKHOABIEUWhereUniqueInput
  }

  /**
   * THOIKHOABIEU findFirst
   */
  export type THOIKHOABIEUFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * Filter, which THOIKHOABIEU to fetch.
     */
    where?: THOIKHOABIEUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of THOIKHOABIEUS to fetch.
     */
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for THOIKHOABIEUS.
     */
    cursor?: THOIKHOABIEUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` THOIKHOABIEUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` THOIKHOABIEUS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of THOIKHOABIEUS.
     */
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * THOIKHOABIEU findFirstOrThrow
   */
  export type THOIKHOABIEUFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * Filter, which THOIKHOABIEU to fetch.
     */
    where?: THOIKHOABIEUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of THOIKHOABIEUS to fetch.
     */
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for THOIKHOABIEUS.
     */
    cursor?: THOIKHOABIEUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` THOIKHOABIEUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` THOIKHOABIEUS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of THOIKHOABIEUS.
     */
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * THOIKHOABIEU findMany
   */
  export type THOIKHOABIEUFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * Filter, which THOIKHOABIEUS to fetch.
     */
    where?: THOIKHOABIEUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of THOIKHOABIEUS to fetch.
     */
    orderBy?: THOIKHOABIEUOrderByWithRelationInput | THOIKHOABIEUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing THOIKHOABIEUS.
     */
    cursor?: THOIKHOABIEUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` THOIKHOABIEUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` THOIKHOABIEUS.
     */
    skip?: number
    distinct?: THOIKHOABIEUScalarFieldEnum | THOIKHOABIEUScalarFieldEnum[]
  }

  /**
   * THOIKHOABIEU create
   */
  export type THOIKHOABIEUCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * The data needed to create a THOIKHOABIEU.
     */
    data?: XOR<THOIKHOABIEUCreateInput, THOIKHOABIEUUncheckedCreateInput>
  }

  /**
   * THOIKHOABIEU createMany
   */
  export type THOIKHOABIEUCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many THOIKHOABIEUS.
     */
    data: THOIKHOABIEUCreateManyInput | THOIKHOABIEUCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * THOIKHOABIEU update
   */
  export type THOIKHOABIEUUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * The data needed to update a THOIKHOABIEU.
     */
    data: XOR<THOIKHOABIEUUpdateInput, THOIKHOABIEUUncheckedUpdateInput>
    /**
     * Choose, which THOIKHOABIEU to update.
     */
    where: THOIKHOABIEUWhereUniqueInput
  }

  /**
   * THOIKHOABIEU updateMany
   */
  export type THOIKHOABIEUUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update THOIKHOABIEUS.
     */
    data: XOR<THOIKHOABIEUUpdateManyMutationInput, THOIKHOABIEUUncheckedUpdateManyInput>
    /**
     * Filter which THOIKHOABIEUS to update
     */
    where?: THOIKHOABIEUWhereInput
    /**
     * Limit how many THOIKHOABIEUS to update.
     */
    limit?: number
  }

  /**
   * THOIKHOABIEU upsert
   */
  export type THOIKHOABIEUUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * The filter to search for the THOIKHOABIEU to update in case it exists.
     */
    where: THOIKHOABIEUWhereUniqueInput
    /**
     * In case the THOIKHOABIEU found by the `where` argument doesn't exist, create a new THOIKHOABIEU with this data.
     */
    create: XOR<THOIKHOABIEUCreateInput, THOIKHOABIEUUncheckedCreateInput>
    /**
     * In case the THOIKHOABIEU was found with the provided `where` argument, update it with this data.
     */
    update: XOR<THOIKHOABIEUUpdateInput, THOIKHOABIEUUncheckedUpdateInput>
  }

  /**
   * THOIKHOABIEU delete
   */
  export type THOIKHOABIEUDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
    /**
     * Filter which THOIKHOABIEU to delete.
     */
    where: THOIKHOABIEUWhereUniqueInput
  }

  /**
   * THOIKHOABIEU deleteMany
   */
  export type THOIKHOABIEUDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which THOIKHOABIEUS to delete
     */
    where?: THOIKHOABIEUWhereInput
    /**
     * Limit how many THOIKHOABIEUS to delete.
     */
    limit?: number
  }

  /**
   * THOIKHOABIEU.LOP
   */
  export type THOIKHOABIEU$LOPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOP
     */
    select?: LOPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOP
     */
    omit?: LOPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOPInclude<ExtArgs> | null
    where?: LOPWhereInput
  }

  /**
   * THOIKHOABIEU.MONHOC
   */
  export type THOIKHOABIEU$MONHOCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONHOC
     */
    select?: MONHOCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONHOC
     */
    omit?: MONHOCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MONHOCInclude<ExtArgs> | null
    where?: MONHOCWhereInput
  }

  /**
   * THOIKHOABIEU.GIANGVIEN
   */
  export type THOIKHOABIEU$GIANGVIENArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIANGVIEN
     */
    select?: GIANGVIENSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIANGVIEN
     */
    omit?: GIANGVIENOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIANGVIENInclude<ExtArgs> | null
    where?: GIANGVIENWhereInput
  }

  /**
   * THOIKHOABIEU.PHONG
   */
  export type THOIKHOABIEU$PHONGArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PHONG
     */
    select?: PHONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PHONG
     */
    omit?: PHONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PHONGInclude<ExtArgs> | null
    where?: PHONGWhereInput
  }

  /**
   * THOIKHOABIEU without action
   */
  export type THOIKHOABIEUDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the THOIKHOABIEU
     */
    select?: THOIKHOABIEUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the THOIKHOABIEU
     */
    omit?: THOIKHOABIEUOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: THOIKHOABIEUInclude<ExtArgs> | null
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


  export const GIANGVIENScalarFieldEnum: {
    MaGV: 'MaGV',
    HoTen: 'HoTen',
    TrinhDo: 'TrinhDo',
    BoMon: 'BoMon'
  };

  export type GIANGVIENScalarFieldEnum = (typeof GIANGVIENScalarFieldEnum)[keyof typeof GIANGVIENScalarFieldEnum]


  export const LOPScalarFieldEnum: {
    MaLop: 'MaLop',
    TenLop: 'TenLop',
    KhoaHoc: 'KhoaHoc',
    NganhHoc: 'NganhHoc'
  };

  export type LOPScalarFieldEnum = (typeof LOPScalarFieldEnum)[keyof typeof LOPScalarFieldEnum]


  export const MONHOCScalarFieldEnum: {
    MaMH: 'MaMH',
    TenMH: 'TenMH',
    SoTinChi: 'SoTinChi',
    SoTiet: 'SoTiet'
  };

  export type MONHOCScalarFieldEnum = (typeof MONHOCScalarFieldEnum)[keyof typeof MONHOCScalarFieldEnum]


  export const PHONGScalarFieldEnum: {
    MaPhong: 'MaPhong',
    TenPhong: 'TenPhong',
    SucChua: 'SucChua',
    LoaiPhong: 'LoaiPhong'
  };

  export type PHONGScalarFieldEnum = (typeof PHONGScalarFieldEnum)[keyof typeof PHONGScalarFieldEnum]


  export const SINHVIENScalarFieldEnum: {
    MaSV: 'MaSV',
    HoTen: 'HoTen',
    NgaySinh: 'NgaySinh',
    GioiTinh: 'GioiTinh',
    DiaChi: 'DiaChi',
    MaLop: 'MaLop'
  };

  export type SINHVIENScalarFieldEnum = (typeof SINHVIENScalarFieldEnum)[keyof typeof SINHVIENScalarFieldEnum]


  export const TAIKHOANScalarFieldEnum: {
    TenDangNhap: 'TenDangNhap',
    MatKhau: 'MatKhau',
    LoaiTaiKhoan: 'LoaiTaiKhoan',
    MaSV: 'MaSV',
    MaGV: 'MaGV'
  };

  export type TAIKHOANScalarFieldEnum = (typeof TAIKHOANScalarFieldEnum)[keyof typeof TAIKHOANScalarFieldEnum]


  export const THOIKHOABIEUScalarFieldEnum: {
    MaTKB: 'MaTKB',
    MaLop: 'MaLop',
    MaMH: 'MaMH',
    MaGV: 'MaGV',
    MaPhong: 'MaPhong',
    Thu: 'Thu',
    TietBatDau: 'TietBatDau',
    SoTiet: 'SoTiet',
    NgayBatDau: 'NgayBatDau',
    NgayKetThuc: 'NgayKetThuc'
  };

  export type THOIKHOABIEUScalarFieldEnum = (typeof THOIKHOABIEUScalarFieldEnum)[keyof typeof THOIKHOABIEUScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const GIANGVIENOrderByRelevanceFieldEnum: {
    MaGV: 'MaGV',
    HoTen: 'HoTen',
    TrinhDo: 'TrinhDo',
    BoMon: 'BoMon'
  };

  export type GIANGVIENOrderByRelevanceFieldEnum = (typeof GIANGVIENOrderByRelevanceFieldEnum)[keyof typeof GIANGVIENOrderByRelevanceFieldEnum]


  export const LOPOrderByRelevanceFieldEnum: {
    MaLop: 'MaLop',
    TenLop: 'TenLop',
    KhoaHoc: 'KhoaHoc',
    NganhHoc: 'NganhHoc'
  };

  export type LOPOrderByRelevanceFieldEnum = (typeof LOPOrderByRelevanceFieldEnum)[keyof typeof LOPOrderByRelevanceFieldEnum]


  export const MONHOCOrderByRelevanceFieldEnum: {
    MaMH: 'MaMH',
    TenMH: 'TenMH'
  };

  export type MONHOCOrderByRelevanceFieldEnum = (typeof MONHOCOrderByRelevanceFieldEnum)[keyof typeof MONHOCOrderByRelevanceFieldEnum]


  export const PHONGOrderByRelevanceFieldEnum: {
    MaPhong: 'MaPhong',
    TenPhong: 'TenPhong',
    LoaiPhong: 'LoaiPhong'
  };

  export type PHONGOrderByRelevanceFieldEnum = (typeof PHONGOrderByRelevanceFieldEnum)[keyof typeof PHONGOrderByRelevanceFieldEnum]


  export const SINHVIENOrderByRelevanceFieldEnum: {
    MaSV: 'MaSV',
    HoTen: 'HoTen',
    DiaChi: 'DiaChi',
    MaLop: 'MaLop'
  };

  export type SINHVIENOrderByRelevanceFieldEnum = (typeof SINHVIENOrderByRelevanceFieldEnum)[keyof typeof SINHVIENOrderByRelevanceFieldEnum]


  export const TAIKHOANOrderByRelevanceFieldEnum: {
    TenDangNhap: 'TenDangNhap',
    MatKhau: 'MatKhau',
    MaSV: 'MaSV',
    MaGV: 'MaGV'
  };

  export type TAIKHOANOrderByRelevanceFieldEnum = (typeof TAIKHOANOrderByRelevanceFieldEnum)[keyof typeof TAIKHOANOrderByRelevanceFieldEnum]


  export const THOIKHOABIEUOrderByRelevanceFieldEnum: {
    MaLop: 'MaLop',
    MaMH: 'MaMH',
    MaGV: 'MaGV',
    MaPhong: 'MaPhong'
  };

  export type THOIKHOABIEUOrderByRelevanceFieldEnum = (typeof THOIKHOABIEUOrderByRelevanceFieldEnum)[keyof typeof THOIKHOABIEUOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SINHVIEN_GioiTinh'
   */
  export type EnumSINHVIEN_GioiTinhFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SINHVIEN_GioiTinh'>
    


  /**
   * Reference to a field of type 'TAIKHOAN_LoaiTaiKhoan'
   */
  export type EnumTAIKHOAN_LoaiTaiKhoanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TAIKHOAN_LoaiTaiKhoan'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type GIANGVIENWhereInput = {
    AND?: GIANGVIENWhereInput | GIANGVIENWhereInput[]
    OR?: GIANGVIENWhereInput[]
    NOT?: GIANGVIENWhereInput | GIANGVIENWhereInput[]
    MaGV?: StringFilter<"GIANGVIEN"> | string
    HoTen?: StringFilter<"GIANGVIEN"> | string
    TrinhDo?: StringNullableFilter<"GIANGVIEN"> | string | null
    BoMon?: StringNullableFilter<"GIANGVIEN"> | string | null
    TAIKHOAN?: TAIKHOANListRelationFilter
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }

  export type GIANGVIENOrderByWithRelationInput = {
    MaGV?: SortOrder
    HoTen?: SortOrder
    TrinhDo?: SortOrderInput | SortOrder
    BoMon?: SortOrderInput | SortOrder
    TAIKHOAN?: TAIKHOANOrderByRelationAggregateInput
    THOIKHOABIEU?: THOIKHOABIEUOrderByRelationAggregateInput
    _relevance?: GIANGVIENOrderByRelevanceInput
  }

  export type GIANGVIENWhereUniqueInput = Prisma.AtLeast<{
    MaGV?: string
    AND?: GIANGVIENWhereInput | GIANGVIENWhereInput[]
    OR?: GIANGVIENWhereInput[]
    NOT?: GIANGVIENWhereInput | GIANGVIENWhereInput[]
    HoTen?: StringFilter<"GIANGVIEN"> | string
    TrinhDo?: StringNullableFilter<"GIANGVIEN"> | string | null
    BoMon?: StringNullableFilter<"GIANGVIEN"> | string | null
    TAIKHOAN?: TAIKHOANListRelationFilter
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }, "MaGV">

  export type GIANGVIENOrderByWithAggregationInput = {
    MaGV?: SortOrder
    HoTen?: SortOrder
    TrinhDo?: SortOrderInput | SortOrder
    BoMon?: SortOrderInput | SortOrder
    _count?: GIANGVIENCountOrderByAggregateInput
    _max?: GIANGVIENMaxOrderByAggregateInput
    _min?: GIANGVIENMinOrderByAggregateInput
  }

  export type GIANGVIENScalarWhereWithAggregatesInput = {
    AND?: GIANGVIENScalarWhereWithAggregatesInput | GIANGVIENScalarWhereWithAggregatesInput[]
    OR?: GIANGVIENScalarWhereWithAggregatesInput[]
    NOT?: GIANGVIENScalarWhereWithAggregatesInput | GIANGVIENScalarWhereWithAggregatesInput[]
    MaGV?: StringWithAggregatesFilter<"GIANGVIEN"> | string
    HoTen?: StringWithAggregatesFilter<"GIANGVIEN"> | string
    TrinhDo?: StringNullableWithAggregatesFilter<"GIANGVIEN"> | string | null
    BoMon?: StringNullableWithAggregatesFilter<"GIANGVIEN"> | string | null
  }

  export type LOPWhereInput = {
    AND?: LOPWhereInput | LOPWhereInput[]
    OR?: LOPWhereInput[]
    NOT?: LOPWhereInput | LOPWhereInput[]
    MaLop?: StringFilter<"LOP"> | string
    TenLop?: StringFilter<"LOP"> | string
    KhoaHoc?: StringNullableFilter<"LOP"> | string | null
    NganhHoc?: StringNullableFilter<"LOP"> | string | null
    SINHVIEN?: SINHVIENListRelationFilter
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }

  export type LOPOrderByWithRelationInput = {
    MaLop?: SortOrder
    TenLop?: SortOrder
    KhoaHoc?: SortOrderInput | SortOrder
    NganhHoc?: SortOrderInput | SortOrder
    SINHVIEN?: SINHVIENOrderByRelationAggregateInput
    THOIKHOABIEU?: THOIKHOABIEUOrderByRelationAggregateInput
    _relevance?: LOPOrderByRelevanceInput
  }

  export type LOPWhereUniqueInput = Prisma.AtLeast<{
    MaLop?: string
    AND?: LOPWhereInput | LOPWhereInput[]
    OR?: LOPWhereInput[]
    NOT?: LOPWhereInput | LOPWhereInput[]
    TenLop?: StringFilter<"LOP"> | string
    KhoaHoc?: StringNullableFilter<"LOP"> | string | null
    NganhHoc?: StringNullableFilter<"LOP"> | string | null
    SINHVIEN?: SINHVIENListRelationFilter
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }, "MaLop">

  export type LOPOrderByWithAggregationInput = {
    MaLop?: SortOrder
    TenLop?: SortOrder
    KhoaHoc?: SortOrderInput | SortOrder
    NganhHoc?: SortOrderInput | SortOrder
    _count?: LOPCountOrderByAggregateInput
    _max?: LOPMaxOrderByAggregateInput
    _min?: LOPMinOrderByAggregateInput
  }

  export type LOPScalarWhereWithAggregatesInput = {
    AND?: LOPScalarWhereWithAggregatesInput | LOPScalarWhereWithAggregatesInput[]
    OR?: LOPScalarWhereWithAggregatesInput[]
    NOT?: LOPScalarWhereWithAggregatesInput | LOPScalarWhereWithAggregatesInput[]
    MaLop?: StringWithAggregatesFilter<"LOP"> | string
    TenLop?: StringWithAggregatesFilter<"LOP"> | string
    KhoaHoc?: StringNullableWithAggregatesFilter<"LOP"> | string | null
    NganhHoc?: StringNullableWithAggregatesFilter<"LOP"> | string | null
  }

  export type MONHOCWhereInput = {
    AND?: MONHOCWhereInput | MONHOCWhereInput[]
    OR?: MONHOCWhereInput[]
    NOT?: MONHOCWhereInput | MONHOCWhereInput[]
    MaMH?: StringFilter<"MONHOC"> | string
    TenMH?: StringFilter<"MONHOC"> | string
    SoTinChi?: IntNullableFilter<"MONHOC"> | number | null
    SoTiet?: IntNullableFilter<"MONHOC"> | number | null
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }

  export type MONHOCOrderByWithRelationInput = {
    MaMH?: SortOrder
    TenMH?: SortOrder
    SoTinChi?: SortOrderInput | SortOrder
    SoTiet?: SortOrderInput | SortOrder
    THOIKHOABIEU?: THOIKHOABIEUOrderByRelationAggregateInput
    _relevance?: MONHOCOrderByRelevanceInput
  }

  export type MONHOCWhereUniqueInput = Prisma.AtLeast<{
    MaMH?: string
    AND?: MONHOCWhereInput | MONHOCWhereInput[]
    OR?: MONHOCWhereInput[]
    NOT?: MONHOCWhereInput | MONHOCWhereInput[]
    TenMH?: StringFilter<"MONHOC"> | string
    SoTinChi?: IntNullableFilter<"MONHOC"> | number | null
    SoTiet?: IntNullableFilter<"MONHOC"> | number | null
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }, "MaMH">

  export type MONHOCOrderByWithAggregationInput = {
    MaMH?: SortOrder
    TenMH?: SortOrder
    SoTinChi?: SortOrderInput | SortOrder
    SoTiet?: SortOrderInput | SortOrder
    _count?: MONHOCCountOrderByAggregateInput
    _avg?: MONHOCAvgOrderByAggregateInput
    _max?: MONHOCMaxOrderByAggregateInput
    _min?: MONHOCMinOrderByAggregateInput
    _sum?: MONHOCSumOrderByAggregateInput
  }

  export type MONHOCScalarWhereWithAggregatesInput = {
    AND?: MONHOCScalarWhereWithAggregatesInput | MONHOCScalarWhereWithAggregatesInput[]
    OR?: MONHOCScalarWhereWithAggregatesInput[]
    NOT?: MONHOCScalarWhereWithAggregatesInput | MONHOCScalarWhereWithAggregatesInput[]
    MaMH?: StringWithAggregatesFilter<"MONHOC"> | string
    TenMH?: StringWithAggregatesFilter<"MONHOC"> | string
    SoTinChi?: IntNullableWithAggregatesFilter<"MONHOC"> | number | null
    SoTiet?: IntNullableWithAggregatesFilter<"MONHOC"> | number | null
  }

  export type PHONGWhereInput = {
    AND?: PHONGWhereInput | PHONGWhereInput[]
    OR?: PHONGWhereInput[]
    NOT?: PHONGWhereInput | PHONGWhereInput[]
    MaPhong?: StringFilter<"PHONG"> | string
    TenPhong?: StringNullableFilter<"PHONG"> | string | null
    SucChua?: IntNullableFilter<"PHONG"> | number | null
    LoaiPhong?: StringNullableFilter<"PHONG"> | string | null
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }

  export type PHONGOrderByWithRelationInput = {
    MaPhong?: SortOrder
    TenPhong?: SortOrderInput | SortOrder
    SucChua?: SortOrderInput | SortOrder
    LoaiPhong?: SortOrderInput | SortOrder
    THOIKHOABIEU?: THOIKHOABIEUOrderByRelationAggregateInput
    _relevance?: PHONGOrderByRelevanceInput
  }

  export type PHONGWhereUniqueInput = Prisma.AtLeast<{
    MaPhong?: string
    AND?: PHONGWhereInput | PHONGWhereInput[]
    OR?: PHONGWhereInput[]
    NOT?: PHONGWhereInput | PHONGWhereInput[]
    TenPhong?: StringNullableFilter<"PHONG"> | string | null
    SucChua?: IntNullableFilter<"PHONG"> | number | null
    LoaiPhong?: StringNullableFilter<"PHONG"> | string | null
    THOIKHOABIEU?: THOIKHOABIEUListRelationFilter
  }, "MaPhong">

  export type PHONGOrderByWithAggregationInput = {
    MaPhong?: SortOrder
    TenPhong?: SortOrderInput | SortOrder
    SucChua?: SortOrderInput | SortOrder
    LoaiPhong?: SortOrderInput | SortOrder
    _count?: PHONGCountOrderByAggregateInput
    _avg?: PHONGAvgOrderByAggregateInput
    _max?: PHONGMaxOrderByAggregateInput
    _min?: PHONGMinOrderByAggregateInput
    _sum?: PHONGSumOrderByAggregateInput
  }

  export type PHONGScalarWhereWithAggregatesInput = {
    AND?: PHONGScalarWhereWithAggregatesInput | PHONGScalarWhereWithAggregatesInput[]
    OR?: PHONGScalarWhereWithAggregatesInput[]
    NOT?: PHONGScalarWhereWithAggregatesInput | PHONGScalarWhereWithAggregatesInput[]
    MaPhong?: StringWithAggregatesFilter<"PHONG"> | string
    TenPhong?: StringNullableWithAggregatesFilter<"PHONG"> | string | null
    SucChua?: IntNullableWithAggregatesFilter<"PHONG"> | number | null
    LoaiPhong?: StringNullableWithAggregatesFilter<"PHONG"> | string | null
  }

  export type SINHVIENWhereInput = {
    AND?: SINHVIENWhereInput | SINHVIENWhereInput[]
    OR?: SINHVIENWhereInput[]
    NOT?: SINHVIENWhereInput | SINHVIENWhereInput[]
    MaSV?: StringFilter<"SINHVIEN"> | string
    HoTen?: StringFilter<"SINHVIEN"> | string
    NgaySinh?: DateTimeNullableFilter<"SINHVIEN"> | Date | string | null
    GioiTinh?: EnumSINHVIEN_GioiTinhNullableFilter<"SINHVIEN"> | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: StringNullableFilter<"SINHVIEN"> | string | null
    MaLop?: StringNullableFilter<"SINHVIEN"> | string | null
    LOP?: XOR<LOPNullableScalarRelationFilter, LOPWhereInput> | null
    TAIKHOAN?: TAIKHOANListRelationFilter
  }

  export type SINHVIENOrderByWithRelationInput = {
    MaSV?: SortOrder
    HoTen?: SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    GioiTinh?: SortOrderInput | SortOrder
    DiaChi?: SortOrderInput | SortOrder
    MaLop?: SortOrderInput | SortOrder
    LOP?: LOPOrderByWithRelationInput
    TAIKHOAN?: TAIKHOANOrderByRelationAggregateInput
    _relevance?: SINHVIENOrderByRelevanceInput
  }

  export type SINHVIENWhereUniqueInput = Prisma.AtLeast<{
    MaSV?: string
    AND?: SINHVIENWhereInput | SINHVIENWhereInput[]
    OR?: SINHVIENWhereInput[]
    NOT?: SINHVIENWhereInput | SINHVIENWhereInput[]
    HoTen?: StringFilter<"SINHVIEN"> | string
    NgaySinh?: DateTimeNullableFilter<"SINHVIEN"> | Date | string | null
    GioiTinh?: EnumSINHVIEN_GioiTinhNullableFilter<"SINHVIEN"> | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: StringNullableFilter<"SINHVIEN"> | string | null
    MaLop?: StringNullableFilter<"SINHVIEN"> | string | null
    LOP?: XOR<LOPNullableScalarRelationFilter, LOPWhereInput> | null
    TAIKHOAN?: TAIKHOANListRelationFilter
  }, "MaSV">

  export type SINHVIENOrderByWithAggregationInput = {
    MaSV?: SortOrder
    HoTen?: SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    GioiTinh?: SortOrderInput | SortOrder
    DiaChi?: SortOrderInput | SortOrder
    MaLop?: SortOrderInput | SortOrder
    _count?: SINHVIENCountOrderByAggregateInput
    _max?: SINHVIENMaxOrderByAggregateInput
    _min?: SINHVIENMinOrderByAggregateInput
  }

  export type SINHVIENScalarWhereWithAggregatesInput = {
    AND?: SINHVIENScalarWhereWithAggregatesInput | SINHVIENScalarWhereWithAggregatesInput[]
    OR?: SINHVIENScalarWhereWithAggregatesInput[]
    NOT?: SINHVIENScalarWhereWithAggregatesInput | SINHVIENScalarWhereWithAggregatesInput[]
    MaSV?: StringWithAggregatesFilter<"SINHVIEN"> | string
    HoTen?: StringWithAggregatesFilter<"SINHVIEN"> | string
    NgaySinh?: DateTimeNullableWithAggregatesFilter<"SINHVIEN"> | Date | string | null
    GioiTinh?: EnumSINHVIEN_GioiTinhNullableWithAggregatesFilter<"SINHVIEN"> | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: StringNullableWithAggregatesFilter<"SINHVIEN"> | string | null
    MaLop?: StringNullableWithAggregatesFilter<"SINHVIEN"> | string | null
  }

  export type TAIKHOANWhereInput = {
    AND?: TAIKHOANWhereInput | TAIKHOANWhereInput[]
    OR?: TAIKHOANWhereInput[]
    NOT?: TAIKHOANWhereInput | TAIKHOANWhereInput[]
    TenDangNhap?: StringFilter<"TAIKHOAN"> | string
    MatKhau?: StringFilter<"TAIKHOAN"> | string
    LoaiTaiKhoan?: EnumTAIKHOAN_LoaiTaiKhoanNullableFilter<"TAIKHOAN"> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: StringNullableFilter<"TAIKHOAN"> | string | null
    MaGV?: StringNullableFilter<"TAIKHOAN"> | string | null
    SINHVIEN?: XOR<SINHVIENNullableScalarRelationFilter, SINHVIENWhereInput> | null
    GIANGVIEN?: XOR<GIANGVIENNullableScalarRelationFilter, GIANGVIENWhereInput> | null
  }

  export type TAIKHOANOrderByWithRelationInput = {
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    LoaiTaiKhoan?: SortOrderInput | SortOrder
    MaSV?: SortOrderInput | SortOrder
    MaGV?: SortOrderInput | SortOrder
    SINHVIEN?: SINHVIENOrderByWithRelationInput
    GIANGVIEN?: GIANGVIENOrderByWithRelationInput
    _relevance?: TAIKHOANOrderByRelevanceInput
  }

  export type TAIKHOANWhereUniqueInput = Prisma.AtLeast<{
    TenDangNhap?: string
    AND?: TAIKHOANWhereInput | TAIKHOANWhereInput[]
    OR?: TAIKHOANWhereInput[]
    NOT?: TAIKHOANWhereInput | TAIKHOANWhereInput[]
    MatKhau?: StringFilter<"TAIKHOAN"> | string
    LoaiTaiKhoan?: EnumTAIKHOAN_LoaiTaiKhoanNullableFilter<"TAIKHOAN"> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: StringNullableFilter<"TAIKHOAN"> | string | null
    MaGV?: StringNullableFilter<"TAIKHOAN"> | string | null
    SINHVIEN?: XOR<SINHVIENNullableScalarRelationFilter, SINHVIENWhereInput> | null
    GIANGVIEN?: XOR<GIANGVIENNullableScalarRelationFilter, GIANGVIENWhereInput> | null
  }, "TenDangNhap">

  export type TAIKHOANOrderByWithAggregationInput = {
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    LoaiTaiKhoan?: SortOrderInput | SortOrder
    MaSV?: SortOrderInput | SortOrder
    MaGV?: SortOrderInput | SortOrder
    _count?: TAIKHOANCountOrderByAggregateInput
    _max?: TAIKHOANMaxOrderByAggregateInput
    _min?: TAIKHOANMinOrderByAggregateInput
  }

  export type TAIKHOANScalarWhereWithAggregatesInput = {
    AND?: TAIKHOANScalarWhereWithAggregatesInput | TAIKHOANScalarWhereWithAggregatesInput[]
    OR?: TAIKHOANScalarWhereWithAggregatesInput[]
    NOT?: TAIKHOANScalarWhereWithAggregatesInput | TAIKHOANScalarWhereWithAggregatesInput[]
    TenDangNhap?: StringWithAggregatesFilter<"TAIKHOAN"> | string
    MatKhau?: StringWithAggregatesFilter<"TAIKHOAN"> | string
    LoaiTaiKhoan?: EnumTAIKHOAN_LoaiTaiKhoanNullableWithAggregatesFilter<"TAIKHOAN"> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: StringNullableWithAggregatesFilter<"TAIKHOAN"> | string | null
    MaGV?: StringNullableWithAggregatesFilter<"TAIKHOAN"> | string | null
  }

  export type THOIKHOABIEUWhereInput = {
    AND?: THOIKHOABIEUWhereInput | THOIKHOABIEUWhereInput[]
    OR?: THOIKHOABIEUWhereInput[]
    NOT?: THOIKHOABIEUWhereInput | THOIKHOABIEUWhereInput[]
    MaTKB?: IntFilter<"THOIKHOABIEU"> | number
    MaLop?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaMH?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaGV?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaPhong?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    Thu?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    TietBatDau?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    SoTiet?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    NgayBatDau?: DateTimeNullableFilter<"THOIKHOABIEU"> | Date | string | null
    NgayKetThuc?: DateTimeNullableFilter<"THOIKHOABIEU"> | Date | string | null
    LOP?: XOR<LOPNullableScalarRelationFilter, LOPWhereInput> | null
    MONHOC?: XOR<MONHOCNullableScalarRelationFilter, MONHOCWhereInput> | null
    GIANGVIEN?: XOR<GIANGVIENNullableScalarRelationFilter, GIANGVIENWhereInput> | null
    PHONG?: XOR<PHONGNullableScalarRelationFilter, PHONGWhereInput> | null
  }

  export type THOIKHOABIEUOrderByWithRelationInput = {
    MaTKB?: SortOrder
    MaLop?: SortOrderInput | SortOrder
    MaMH?: SortOrderInput | SortOrder
    MaGV?: SortOrderInput | SortOrder
    MaPhong?: SortOrderInput | SortOrder
    Thu?: SortOrderInput | SortOrder
    TietBatDau?: SortOrderInput | SortOrder
    SoTiet?: SortOrderInput | SortOrder
    NgayBatDau?: SortOrderInput | SortOrder
    NgayKetThuc?: SortOrderInput | SortOrder
    LOP?: LOPOrderByWithRelationInput
    MONHOC?: MONHOCOrderByWithRelationInput
    GIANGVIEN?: GIANGVIENOrderByWithRelationInput
    PHONG?: PHONGOrderByWithRelationInput
    _relevance?: THOIKHOABIEUOrderByRelevanceInput
  }

  export type THOIKHOABIEUWhereUniqueInput = Prisma.AtLeast<{
    MaTKB?: number
    AND?: THOIKHOABIEUWhereInput | THOIKHOABIEUWhereInput[]
    OR?: THOIKHOABIEUWhereInput[]
    NOT?: THOIKHOABIEUWhereInput | THOIKHOABIEUWhereInput[]
    MaLop?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaMH?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaGV?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaPhong?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    Thu?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    TietBatDau?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    SoTiet?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    NgayBatDau?: DateTimeNullableFilter<"THOIKHOABIEU"> | Date | string | null
    NgayKetThuc?: DateTimeNullableFilter<"THOIKHOABIEU"> | Date | string | null
    LOP?: XOR<LOPNullableScalarRelationFilter, LOPWhereInput> | null
    MONHOC?: XOR<MONHOCNullableScalarRelationFilter, MONHOCWhereInput> | null
    GIANGVIEN?: XOR<GIANGVIENNullableScalarRelationFilter, GIANGVIENWhereInput> | null
    PHONG?: XOR<PHONGNullableScalarRelationFilter, PHONGWhereInput> | null
  }, "MaTKB">

  export type THOIKHOABIEUOrderByWithAggregationInput = {
    MaTKB?: SortOrder
    MaLop?: SortOrderInput | SortOrder
    MaMH?: SortOrderInput | SortOrder
    MaGV?: SortOrderInput | SortOrder
    MaPhong?: SortOrderInput | SortOrder
    Thu?: SortOrderInput | SortOrder
    TietBatDau?: SortOrderInput | SortOrder
    SoTiet?: SortOrderInput | SortOrder
    NgayBatDau?: SortOrderInput | SortOrder
    NgayKetThuc?: SortOrderInput | SortOrder
    _count?: THOIKHOABIEUCountOrderByAggregateInput
    _avg?: THOIKHOABIEUAvgOrderByAggregateInput
    _max?: THOIKHOABIEUMaxOrderByAggregateInput
    _min?: THOIKHOABIEUMinOrderByAggregateInput
    _sum?: THOIKHOABIEUSumOrderByAggregateInput
  }

  export type THOIKHOABIEUScalarWhereWithAggregatesInput = {
    AND?: THOIKHOABIEUScalarWhereWithAggregatesInput | THOIKHOABIEUScalarWhereWithAggregatesInput[]
    OR?: THOIKHOABIEUScalarWhereWithAggregatesInput[]
    NOT?: THOIKHOABIEUScalarWhereWithAggregatesInput | THOIKHOABIEUScalarWhereWithAggregatesInput[]
    MaTKB?: IntWithAggregatesFilter<"THOIKHOABIEU"> | number
    MaLop?: StringNullableWithAggregatesFilter<"THOIKHOABIEU"> | string | null
    MaMH?: StringNullableWithAggregatesFilter<"THOIKHOABIEU"> | string | null
    MaGV?: StringNullableWithAggregatesFilter<"THOIKHOABIEU"> | string | null
    MaPhong?: StringNullableWithAggregatesFilter<"THOIKHOABIEU"> | string | null
    Thu?: IntNullableWithAggregatesFilter<"THOIKHOABIEU"> | number | null
    TietBatDau?: IntNullableWithAggregatesFilter<"THOIKHOABIEU"> | number | null
    SoTiet?: IntNullableWithAggregatesFilter<"THOIKHOABIEU"> | number | null
    NgayBatDau?: DateTimeNullableWithAggregatesFilter<"THOIKHOABIEU"> | Date | string | null
    NgayKetThuc?: DateTimeNullableWithAggregatesFilter<"THOIKHOABIEU"> | Date | string | null
  }

  export type GIANGVIENCreateInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
    TAIKHOAN?: TAIKHOANCreateNestedManyWithoutGIANGVIENInput
    THOIKHOABIEU?: THOIKHOABIEUCreateNestedManyWithoutGIANGVIENInput
  }

  export type GIANGVIENUncheckedCreateInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
    TAIKHOAN?: TAIKHOANUncheckedCreateNestedManyWithoutGIANGVIENInput
    THOIKHOABIEU?: THOIKHOABIEUUncheckedCreateNestedManyWithoutGIANGVIENInput
  }

  export type GIANGVIENUpdateInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUpdateManyWithoutGIANGVIENNestedInput
    THOIKHOABIEU?: THOIKHOABIEUUpdateManyWithoutGIANGVIENNestedInput
  }

  export type GIANGVIENUncheckedUpdateInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUncheckedUpdateManyWithoutGIANGVIENNestedInput
    THOIKHOABIEU?: THOIKHOABIEUUncheckedUpdateManyWithoutGIANGVIENNestedInput
  }

  export type GIANGVIENCreateManyInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
  }

  export type GIANGVIENUpdateManyMutationInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GIANGVIENUncheckedUpdateManyInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LOPCreateInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
    SINHVIEN?: SINHVIENCreateNestedManyWithoutLOPInput
    THOIKHOABIEU?: THOIKHOABIEUCreateNestedManyWithoutLOPInput
  }

  export type LOPUncheckedCreateInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
    SINHVIEN?: SINHVIENUncheckedCreateNestedManyWithoutLOPInput
    THOIKHOABIEU?: THOIKHOABIEUUncheckedCreateNestedManyWithoutLOPInput
  }

  export type LOPUpdateInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
    SINHVIEN?: SINHVIENUpdateManyWithoutLOPNestedInput
    THOIKHOABIEU?: THOIKHOABIEUUpdateManyWithoutLOPNestedInput
  }

  export type LOPUncheckedUpdateInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
    SINHVIEN?: SINHVIENUncheckedUpdateManyWithoutLOPNestedInput
    THOIKHOABIEU?: THOIKHOABIEUUncheckedUpdateManyWithoutLOPNestedInput
  }

  export type LOPCreateManyInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
  }

  export type LOPUpdateManyMutationInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LOPUncheckedUpdateManyInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MONHOCCreateInput = {
    MaMH: string
    TenMH: string
    SoTinChi?: number | null
    SoTiet?: number | null
    THOIKHOABIEU?: THOIKHOABIEUCreateNestedManyWithoutMONHOCInput
  }

  export type MONHOCUncheckedCreateInput = {
    MaMH: string
    TenMH: string
    SoTinChi?: number | null
    SoTiet?: number | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedCreateNestedManyWithoutMONHOCInput
  }

  export type MONHOCUpdateInput = {
    MaMH?: StringFieldUpdateOperationsInput | string
    TenMH?: StringFieldUpdateOperationsInput | string
    SoTinChi?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    THOIKHOABIEU?: THOIKHOABIEUUpdateManyWithoutMONHOCNestedInput
  }

  export type MONHOCUncheckedUpdateInput = {
    MaMH?: StringFieldUpdateOperationsInput | string
    TenMH?: StringFieldUpdateOperationsInput | string
    SoTinChi?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedUpdateManyWithoutMONHOCNestedInput
  }

  export type MONHOCCreateManyInput = {
    MaMH: string
    TenMH: string
    SoTinChi?: number | null
    SoTiet?: number | null
  }

  export type MONHOCUpdateManyMutationInput = {
    MaMH?: StringFieldUpdateOperationsInput | string
    TenMH?: StringFieldUpdateOperationsInput | string
    SoTinChi?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MONHOCUncheckedUpdateManyInput = {
    MaMH?: StringFieldUpdateOperationsInput | string
    TenMH?: StringFieldUpdateOperationsInput | string
    SoTinChi?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PHONGCreateInput = {
    MaPhong: string
    TenPhong?: string | null
    SucChua?: number | null
    LoaiPhong?: string | null
    THOIKHOABIEU?: THOIKHOABIEUCreateNestedManyWithoutPHONGInput
  }

  export type PHONGUncheckedCreateInput = {
    MaPhong: string
    TenPhong?: string | null
    SucChua?: number | null
    LoaiPhong?: string | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedCreateNestedManyWithoutPHONGInput
  }

  export type PHONGUpdateInput = {
    MaPhong?: StringFieldUpdateOperationsInput | string
    TenPhong?: NullableStringFieldUpdateOperationsInput | string | null
    SucChua?: NullableIntFieldUpdateOperationsInput | number | null
    LoaiPhong?: NullableStringFieldUpdateOperationsInput | string | null
    THOIKHOABIEU?: THOIKHOABIEUUpdateManyWithoutPHONGNestedInput
  }

  export type PHONGUncheckedUpdateInput = {
    MaPhong?: StringFieldUpdateOperationsInput | string
    TenPhong?: NullableStringFieldUpdateOperationsInput | string | null
    SucChua?: NullableIntFieldUpdateOperationsInput | number | null
    LoaiPhong?: NullableStringFieldUpdateOperationsInput | string | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedUpdateManyWithoutPHONGNestedInput
  }

  export type PHONGCreateManyInput = {
    MaPhong: string
    TenPhong?: string | null
    SucChua?: number | null
    LoaiPhong?: string | null
  }

  export type PHONGUpdateManyMutationInput = {
    MaPhong?: StringFieldUpdateOperationsInput | string
    TenPhong?: NullableStringFieldUpdateOperationsInput | string | null
    SucChua?: NullableIntFieldUpdateOperationsInput | number | null
    LoaiPhong?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PHONGUncheckedUpdateManyInput = {
    MaPhong?: StringFieldUpdateOperationsInput | string
    TenPhong?: NullableStringFieldUpdateOperationsInput | string | null
    SucChua?: NullableIntFieldUpdateOperationsInput | number | null
    LoaiPhong?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SINHVIENCreateInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    LOP?: LOPCreateNestedOneWithoutSINHVIENInput
    TAIKHOAN?: TAIKHOANCreateNestedManyWithoutSINHVIENInput
  }

  export type SINHVIENUncheckedCreateInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    MaLop?: string | null
    TAIKHOAN?: TAIKHOANUncheckedCreateNestedManyWithoutSINHVIENInput
  }

  export type SINHVIENUpdateInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    LOP?: LOPUpdateOneWithoutSINHVIENNestedInput
    TAIKHOAN?: TAIKHOANUpdateManyWithoutSINHVIENNestedInput
  }

  export type SINHVIENUncheckedUpdateInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUncheckedUpdateManyWithoutSINHVIENNestedInput
  }

  export type SINHVIENCreateManyInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    MaLop?: string | null
  }

  export type SINHVIENUpdateManyMutationInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SINHVIENUncheckedUpdateManyInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAIKHOANCreateInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    SINHVIEN?: SINHVIENCreateNestedOneWithoutTAIKHOANInput
    GIANGVIEN?: GIANGVIENCreateNestedOneWithoutTAIKHOANInput
  }

  export type TAIKHOANUncheckedCreateInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: string | null
    MaGV?: string | null
  }

  export type TAIKHOANUpdateInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    SINHVIEN?: SINHVIENUpdateOneWithoutTAIKHOANNestedInput
    GIANGVIEN?: GIANGVIENUpdateOneWithoutTAIKHOANNestedInput
  }

  export type TAIKHOANUncheckedUpdateInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAIKHOANCreateManyInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: string | null
    MaGV?: string | null
  }

  export type TAIKHOANUpdateManyMutationInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
  }

  export type TAIKHOANUncheckedUpdateManyInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type THOIKHOABIEUCreateInput = {
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
    LOP?: LOPCreateNestedOneWithoutTHOIKHOABIEUInput
    MONHOC?: MONHOCCreateNestedOneWithoutTHOIKHOABIEUInput
    GIANGVIEN?: GIANGVIENCreateNestedOneWithoutTHOIKHOABIEUInput
    PHONG?: PHONGCreateNestedOneWithoutTHOIKHOABIEUInput
  }

  export type THOIKHOABIEUUncheckedCreateInput = {
    MaTKB?: number
    MaLop?: string | null
    MaMH?: string | null
    MaGV?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUUpdateInput = {
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOP?: LOPUpdateOneWithoutTHOIKHOABIEUNestedInput
    MONHOC?: MONHOCUpdateOneWithoutTHOIKHOABIEUNestedInput
    GIANGVIEN?: GIANGVIENUpdateOneWithoutTHOIKHOABIEUNestedInput
    PHONG?: PHONGUpdateOneWithoutTHOIKHOABIEUNestedInput
  }

  export type THOIKHOABIEUUncheckedUpdateInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUCreateManyInput = {
    MaTKB?: number
    MaLop?: string | null
    MaMH?: string | null
    MaGV?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUUpdateManyMutationInput = {
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUUncheckedUpdateManyInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TAIKHOANListRelationFilter = {
    every?: TAIKHOANWhereInput
    some?: TAIKHOANWhereInput
    none?: TAIKHOANWhereInput
  }

  export type THOIKHOABIEUListRelationFilter = {
    every?: THOIKHOABIEUWhereInput
    some?: THOIKHOABIEUWhereInput
    none?: THOIKHOABIEUWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TAIKHOANOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type THOIKHOABIEUOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GIANGVIENOrderByRelevanceInput = {
    fields: GIANGVIENOrderByRelevanceFieldEnum | GIANGVIENOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GIANGVIENCountOrderByAggregateInput = {
    MaGV?: SortOrder
    HoTen?: SortOrder
    TrinhDo?: SortOrder
    BoMon?: SortOrder
  }

  export type GIANGVIENMaxOrderByAggregateInput = {
    MaGV?: SortOrder
    HoTen?: SortOrder
    TrinhDo?: SortOrder
    BoMon?: SortOrder
  }

  export type GIANGVIENMinOrderByAggregateInput = {
    MaGV?: SortOrder
    HoTen?: SortOrder
    TrinhDo?: SortOrder
    BoMon?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SINHVIENListRelationFilter = {
    every?: SINHVIENWhereInput
    some?: SINHVIENWhereInput
    none?: SINHVIENWhereInput
  }

  export type SINHVIENOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LOPOrderByRelevanceInput = {
    fields: LOPOrderByRelevanceFieldEnum | LOPOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LOPCountOrderByAggregateInput = {
    MaLop?: SortOrder
    TenLop?: SortOrder
    KhoaHoc?: SortOrder
    NganhHoc?: SortOrder
  }

  export type LOPMaxOrderByAggregateInput = {
    MaLop?: SortOrder
    TenLop?: SortOrder
    KhoaHoc?: SortOrder
    NganhHoc?: SortOrder
  }

  export type LOPMinOrderByAggregateInput = {
    MaLop?: SortOrder
    TenLop?: SortOrder
    KhoaHoc?: SortOrder
    NganhHoc?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MONHOCOrderByRelevanceInput = {
    fields: MONHOCOrderByRelevanceFieldEnum | MONHOCOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MONHOCCountOrderByAggregateInput = {
    MaMH?: SortOrder
    TenMH?: SortOrder
    SoTinChi?: SortOrder
    SoTiet?: SortOrder
  }

  export type MONHOCAvgOrderByAggregateInput = {
    SoTinChi?: SortOrder
    SoTiet?: SortOrder
  }

  export type MONHOCMaxOrderByAggregateInput = {
    MaMH?: SortOrder
    TenMH?: SortOrder
    SoTinChi?: SortOrder
    SoTiet?: SortOrder
  }

  export type MONHOCMinOrderByAggregateInput = {
    MaMH?: SortOrder
    TenMH?: SortOrder
    SoTinChi?: SortOrder
    SoTiet?: SortOrder
  }

  export type MONHOCSumOrderByAggregateInput = {
    SoTinChi?: SortOrder
    SoTiet?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PHONGOrderByRelevanceInput = {
    fields: PHONGOrderByRelevanceFieldEnum | PHONGOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PHONGCountOrderByAggregateInput = {
    MaPhong?: SortOrder
    TenPhong?: SortOrder
    SucChua?: SortOrder
    LoaiPhong?: SortOrder
  }

  export type PHONGAvgOrderByAggregateInput = {
    SucChua?: SortOrder
  }

  export type PHONGMaxOrderByAggregateInput = {
    MaPhong?: SortOrder
    TenPhong?: SortOrder
    SucChua?: SortOrder
    LoaiPhong?: SortOrder
  }

  export type PHONGMinOrderByAggregateInput = {
    MaPhong?: SortOrder
    TenPhong?: SortOrder
    SucChua?: SortOrder
    LoaiPhong?: SortOrder
  }

  export type PHONGSumOrderByAggregateInput = {
    SucChua?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SINHVIEN_GioiTinh | EnumSINHVIEN_GioiTinhFieldRefInput<$PrismaModel> | null
    in?: $Enums.SINHVIEN_GioiTinh[] | null
    notIn?: $Enums.SINHVIEN_GioiTinh[] | null
    not?: NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel> | $Enums.SINHVIEN_GioiTinh | null
  }

  export type LOPNullableScalarRelationFilter = {
    is?: LOPWhereInput | null
    isNot?: LOPWhereInput | null
  }

  export type SINHVIENOrderByRelevanceInput = {
    fields: SINHVIENOrderByRelevanceFieldEnum | SINHVIENOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SINHVIENCountOrderByAggregateInput = {
    MaSV?: SortOrder
    HoTen?: SortOrder
    NgaySinh?: SortOrder
    GioiTinh?: SortOrder
    DiaChi?: SortOrder
    MaLop?: SortOrder
  }

  export type SINHVIENMaxOrderByAggregateInput = {
    MaSV?: SortOrder
    HoTen?: SortOrder
    NgaySinh?: SortOrder
    GioiTinh?: SortOrder
    DiaChi?: SortOrder
    MaLop?: SortOrder
  }

  export type SINHVIENMinOrderByAggregateInput = {
    MaSV?: SortOrder
    HoTen?: SortOrder
    NgaySinh?: SortOrder
    GioiTinh?: SortOrder
    DiaChi?: SortOrder
    MaLop?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSINHVIEN_GioiTinhNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SINHVIEN_GioiTinh | EnumSINHVIEN_GioiTinhFieldRefInput<$PrismaModel> | null
    in?: $Enums.SINHVIEN_GioiTinh[] | null
    notIn?: $Enums.SINHVIEN_GioiTinh[] | null
    not?: NestedEnumSINHVIEN_GioiTinhNullableWithAggregatesFilter<$PrismaModel> | $Enums.SINHVIEN_GioiTinh | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel>
    _max?: NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel>
  }

  export type EnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TAIKHOAN_LoaiTaiKhoan | EnumTAIKHOAN_LoaiTaiKhoanFieldRefInput<$PrismaModel> | null
    in?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    notIn?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    not?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
  }

  export type SINHVIENNullableScalarRelationFilter = {
    is?: SINHVIENWhereInput | null
    isNot?: SINHVIENWhereInput | null
  }

  export type GIANGVIENNullableScalarRelationFilter = {
    is?: GIANGVIENWhereInput | null
    isNot?: GIANGVIENWhereInput | null
  }

  export type TAIKHOANOrderByRelevanceInput = {
    fields: TAIKHOANOrderByRelevanceFieldEnum | TAIKHOANOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TAIKHOANCountOrderByAggregateInput = {
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    LoaiTaiKhoan?: SortOrder
    MaSV?: SortOrder
    MaGV?: SortOrder
  }

  export type TAIKHOANMaxOrderByAggregateInput = {
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    LoaiTaiKhoan?: SortOrder
    MaSV?: SortOrder
    MaGV?: SortOrder
  }

  export type TAIKHOANMinOrderByAggregateInput = {
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    LoaiTaiKhoan?: SortOrder
    MaSV?: SortOrder
    MaGV?: SortOrder
  }

  export type EnumTAIKHOAN_LoaiTaiKhoanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TAIKHOAN_LoaiTaiKhoan | EnumTAIKHOAN_LoaiTaiKhoanFieldRefInput<$PrismaModel> | null
    in?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    notIn?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    not?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableWithAggregatesFilter<$PrismaModel> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel>
    _max?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MONHOCNullableScalarRelationFilter = {
    is?: MONHOCWhereInput | null
    isNot?: MONHOCWhereInput | null
  }

  export type PHONGNullableScalarRelationFilter = {
    is?: PHONGWhereInput | null
    isNot?: PHONGWhereInput | null
  }

  export type THOIKHOABIEUOrderByRelevanceInput = {
    fields: THOIKHOABIEUOrderByRelevanceFieldEnum | THOIKHOABIEUOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type THOIKHOABIEUCountOrderByAggregateInput = {
    MaTKB?: SortOrder
    MaLop?: SortOrder
    MaMH?: SortOrder
    MaGV?: SortOrder
    MaPhong?: SortOrder
    Thu?: SortOrder
    TietBatDau?: SortOrder
    SoTiet?: SortOrder
    NgayBatDau?: SortOrder
    NgayKetThuc?: SortOrder
  }

  export type THOIKHOABIEUAvgOrderByAggregateInput = {
    MaTKB?: SortOrder
    Thu?: SortOrder
    TietBatDau?: SortOrder
    SoTiet?: SortOrder
  }

  export type THOIKHOABIEUMaxOrderByAggregateInput = {
    MaTKB?: SortOrder
    MaLop?: SortOrder
    MaMH?: SortOrder
    MaGV?: SortOrder
    MaPhong?: SortOrder
    Thu?: SortOrder
    TietBatDau?: SortOrder
    SoTiet?: SortOrder
    NgayBatDau?: SortOrder
    NgayKetThuc?: SortOrder
  }

  export type THOIKHOABIEUMinOrderByAggregateInput = {
    MaTKB?: SortOrder
    MaLop?: SortOrder
    MaMH?: SortOrder
    MaGV?: SortOrder
    MaPhong?: SortOrder
    Thu?: SortOrder
    TietBatDau?: SortOrder
    SoTiet?: SortOrder
    NgayBatDau?: SortOrder
    NgayKetThuc?: SortOrder
  }

  export type THOIKHOABIEUSumOrderByAggregateInput = {
    MaTKB?: SortOrder
    Thu?: SortOrder
    TietBatDau?: SortOrder
    SoTiet?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type TAIKHOANCreateNestedManyWithoutGIANGVIENInput = {
    create?: XOR<TAIKHOANCreateWithoutGIANGVIENInput, TAIKHOANUncheckedCreateWithoutGIANGVIENInput> | TAIKHOANCreateWithoutGIANGVIENInput[] | TAIKHOANUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutGIANGVIENInput | TAIKHOANCreateOrConnectWithoutGIANGVIENInput[]
    createMany?: TAIKHOANCreateManyGIANGVIENInputEnvelope
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
  }

  export type THOIKHOABIEUCreateNestedManyWithoutGIANGVIENInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput> | THOIKHOABIEUCreateWithoutGIANGVIENInput[] | THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput | THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput[]
    createMany?: THOIKHOABIEUCreateManyGIANGVIENInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type TAIKHOANUncheckedCreateNestedManyWithoutGIANGVIENInput = {
    create?: XOR<TAIKHOANCreateWithoutGIANGVIENInput, TAIKHOANUncheckedCreateWithoutGIANGVIENInput> | TAIKHOANCreateWithoutGIANGVIENInput[] | TAIKHOANUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutGIANGVIENInput | TAIKHOANCreateOrConnectWithoutGIANGVIENInput[]
    createMany?: TAIKHOANCreateManyGIANGVIENInputEnvelope
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
  }

  export type THOIKHOABIEUUncheckedCreateNestedManyWithoutGIANGVIENInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput> | THOIKHOABIEUCreateWithoutGIANGVIENInput[] | THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput | THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput[]
    createMany?: THOIKHOABIEUCreateManyGIANGVIENInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TAIKHOANUpdateManyWithoutGIANGVIENNestedInput = {
    create?: XOR<TAIKHOANCreateWithoutGIANGVIENInput, TAIKHOANUncheckedCreateWithoutGIANGVIENInput> | TAIKHOANCreateWithoutGIANGVIENInput[] | TAIKHOANUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutGIANGVIENInput | TAIKHOANCreateOrConnectWithoutGIANGVIENInput[]
    upsert?: TAIKHOANUpsertWithWhereUniqueWithoutGIANGVIENInput | TAIKHOANUpsertWithWhereUniqueWithoutGIANGVIENInput[]
    createMany?: TAIKHOANCreateManyGIANGVIENInputEnvelope
    set?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    disconnect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    delete?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    update?: TAIKHOANUpdateWithWhereUniqueWithoutGIANGVIENInput | TAIKHOANUpdateWithWhereUniqueWithoutGIANGVIENInput[]
    updateMany?: TAIKHOANUpdateManyWithWhereWithoutGIANGVIENInput | TAIKHOANUpdateManyWithWhereWithoutGIANGVIENInput[]
    deleteMany?: TAIKHOANScalarWhereInput | TAIKHOANScalarWhereInput[]
  }

  export type THOIKHOABIEUUpdateManyWithoutGIANGVIENNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput> | THOIKHOABIEUCreateWithoutGIANGVIENInput[] | THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput | THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutGIANGVIENInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutGIANGVIENInput[]
    createMany?: THOIKHOABIEUCreateManyGIANGVIENInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutGIANGVIENInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutGIANGVIENInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutGIANGVIENInput | THOIKHOABIEUUpdateManyWithWhereWithoutGIANGVIENInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type TAIKHOANUncheckedUpdateManyWithoutGIANGVIENNestedInput = {
    create?: XOR<TAIKHOANCreateWithoutGIANGVIENInput, TAIKHOANUncheckedCreateWithoutGIANGVIENInput> | TAIKHOANCreateWithoutGIANGVIENInput[] | TAIKHOANUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutGIANGVIENInput | TAIKHOANCreateOrConnectWithoutGIANGVIENInput[]
    upsert?: TAIKHOANUpsertWithWhereUniqueWithoutGIANGVIENInput | TAIKHOANUpsertWithWhereUniqueWithoutGIANGVIENInput[]
    createMany?: TAIKHOANCreateManyGIANGVIENInputEnvelope
    set?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    disconnect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    delete?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    update?: TAIKHOANUpdateWithWhereUniqueWithoutGIANGVIENInput | TAIKHOANUpdateWithWhereUniqueWithoutGIANGVIENInput[]
    updateMany?: TAIKHOANUpdateManyWithWhereWithoutGIANGVIENInput | TAIKHOANUpdateManyWithWhereWithoutGIANGVIENInput[]
    deleteMany?: TAIKHOANScalarWhereInput | TAIKHOANScalarWhereInput[]
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutGIANGVIENNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput> | THOIKHOABIEUCreateWithoutGIANGVIENInput[] | THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput | THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutGIANGVIENInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutGIANGVIENInput[]
    createMany?: THOIKHOABIEUCreateManyGIANGVIENInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutGIANGVIENInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutGIANGVIENInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutGIANGVIENInput | THOIKHOABIEUUpdateManyWithWhereWithoutGIANGVIENInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type SINHVIENCreateNestedManyWithoutLOPInput = {
    create?: XOR<SINHVIENCreateWithoutLOPInput, SINHVIENUncheckedCreateWithoutLOPInput> | SINHVIENCreateWithoutLOPInput[] | SINHVIENUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: SINHVIENCreateOrConnectWithoutLOPInput | SINHVIENCreateOrConnectWithoutLOPInput[]
    createMany?: SINHVIENCreateManyLOPInputEnvelope
    connect?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
  }

  export type THOIKHOABIEUCreateNestedManyWithoutLOPInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutLOPInput, THOIKHOABIEUUncheckedCreateWithoutLOPInput> | THOIKHOABIEUCreateWithoutLOPInput[] | THOIKHOABIEUUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutLOPInput | THOIKHOABIEUCreateOrConnectWithoutLOPInput[]
    createMany?: THOIKHOABIEUCreateManyLOPInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type SINHVIENUncheckedCreateNestedManyWithoutLOPInput = {
    create?: XOR<SINHVIENCreateWithoutLOPInput, SINHVIENUncheckedCreateWithoutLOPInput> | SINHVIENCreateWithoutLOPInput[] | SINHVIENUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: SINHVIENCreateOrConnectWithoutLOPInput | SINHVIENCreateOrConnectWithoutLOPInput[]
    createMany?: SINHVIENCreateManyLOPInputEnvelope
    connect?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
  }

  export type THOIKHOABIEUUncheckedCreateNestedManyWithoutLOPInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutLOPInput, THOIKHOABIEUUncheckedCreateWithoutLOPInput> | THOIKHOABIEUCreateWithoutLOPInput[] | THOIKHOABIEUUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutLOPInput | THOIKHOABIEUCreateOrConnectWithoutLOPInput[]
    createMany?: THOIKHOABIEUCreateManyLOPInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type SINHVIENUpdateManyWithoutLOPNestedInput = {
    create?: XOR<SINHVIENCreateWithoutLOPInput, SINHVIENUncheckedCreateWithoutLOPInput> | SINHVIENCreateWithoutLOPInput[] | SINHVIENUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: SINHVIENCreateOrConnectWithoutLOPInput | SINHVIENCreateOrConnectWithoutLOPInput[]
    upsert?: SINHVIENUpsertWithWhereUniqueWithoutLOPInput | SINHVIENUpsertWithWhereUniqueWithoutLOPInput[]
    createMany?: SINHVIENCreateManyLOPInputEnvelope
    set?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    disconnect?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    delete?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    connect?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    update?: SINHVIENUpdateWithWhereUniqueWithoutLOPInput | SINHVIENUpdateWithWhereUniqueWithoutLOPInput[]
    updateMany?: SINHVIENUpdateManyWithWhereWithoutLOPInput | SINHVIENUpdateManyWithWhereWithoutLOPInput[]
    deleteMany?: SINHVIENScalarWhereInput | SINHVIENScalarWhereInput[]
  }

  export type THOIKHOABIEUUpdateManyWithoutLOPNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutLOPInput, THOIKHOABIEUUncheckedCreateWithoutLOPInput> | THOIKHOABIEUCreateWithoutLOPInput[] | THOIKHOABIEUUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutLOPInput | THOIKHOABIEUCreateOrConnectWithoutLOPInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutLOPInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutLOPInput[]
    createMany?: THOIKHOABIEUCreateManyLOPInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutLOPInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutLOPInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutLOPInput | THOIKHOABIEUUpdateManyWithWhereWithoutLOPInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type SINHVIENUncheckedUpdateManyWithoutLOPNestedInput = {
    create?: XOR<SINHVIENCreateWithoutLOPInput, SINHVIENUncheckedCreateWithoutLOPInput> | SINHVIENCreateWithoutLOPInput[] | SINHVIENUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: SINHVIENCreateOrConnectWithoutLOPInput | SINHVIENCreateOrConnectWithoutLOPInput[]
    upsert?: SINHVIENUpsertWithWhereUniqueWithoutLOPInput | SINHVIENUpsertWithWhereUniqueWithoutLOPInput[]
    createMany?: SINHVIENCreateManyLOPInputEnvelope
    set?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    disconnect?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    delete?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    connect?: SINHVIENWhereUniqueInput | SINHVIENWhereUniqueInput[]
    update?: SINHVIENUpdateWithWhereUniqueWithoutLOPInput | SINHVIENUpdateWithWhereUniqueWithoutLOPInput[]
    updateMany?: SINHVIENUpdateManyWithWhereWithoutLOPInput | SINHVIENUpdateManyWithWhereWithoutLOPInput[]
    deleteMany?: SINHVIENScalarWhereInput | SINHVIENScalarWhereInput[]
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutLOPNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutLOPInput, THOIKHOABIEUUncheckedCreateWithoutLOPInput> | THOIKHOABIEUCreateWithoutLOPInput[] | THOIKHOABIEUUncheckedCreateWithoutLOPInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutLOPInput | THOIKHOABIEUCreateOrConnectWithoutLOPInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutLOPInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutLOPInput[]
    createMany?: THOIKHOABIEUCreateManyLOPInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutLOPInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutLOPInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutLOPInput | THOIKHOABIEUUpdateManyWithWhereWithoutLOPInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type THOIKHOABIEUCreateNestedManyWithoutMONHOCInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutMONHOCInput, THOIKHOABIEUUncheckedCreateWithoutMONHOCInput> | THOIKHOABIEUCreateWithoutMONHOCInput[] | THOIKHOABIEUUncheckedCreateWithoutMONHOCInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutMONHOCInput | THOIKHOABIEUCreateOrConnectWithoutMONHOCInput[]
    createMany?: THOIKHOABIEUCreateManyMONHOCInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type THOIKHOABIEUUncheckedCreateNestedManyWithoutMONHOCInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutMONHOCInput, THOIKHOABIEUUncheckedCreateWithoutMONHOCInput> | THOIKHOABIEUCreateWithoutMONHOCInput[] | THOIKHOABIEUUncheckedCreateWithoutMONHOCInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutMONHOCInput | THOIKHOABIEUCreateOrConnectWithoutMONHOCInput[]
    createMany?: THOIKHOABIEUCreateManyMONHOCInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type THOIKHOABIEUUpdateManyWithoutMONHOCNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutMONHOCInput, THOIKHOABIEUUncheckedCreateWithoutMONHOCInput> | THOIKHOABIEUCreateWithoutMONHOCInput[] | THOIKHOABIEUUncheckedCreateWithoutMONHOCInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutMONHOCInput | THOIKHOABIEUCreateOrConnectWithoutMONHOCInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutMONHOCInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutMONHOCInput[]
    createMany?: THOIKHOABIEUCreateManyMONHOCInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutMONHOCInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutMONHOCInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutMONHOCInput | THOIKHOABIEUUpdateManyWithWhereWithoutMONHOCInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutMONHOCNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutMONHOCInput, THOIKHOABIEUUncheckedCreateWithoutMONHOCInput> | THOIKHOABIEUCreateWithoutMONHOCInput[] | THOIKHOABIEUUncheckedCreateWithoutMONHOCInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutMONHOCInput | THOIKHOABIEUCreateOrConnectWithoutMONHOCInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutMONHOCInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutMONHOCInput[]
    createMany?: THOIKHOABIEUCreateManyMONHOCInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutMONHOCInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutMONHOCInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutMONHOCInput | THOIKHOABIEUUpdateManyWithWhereWithoutMONHOCInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type THOIKHOABIEUCreateNestedManyWithoutPHONGInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutPHONGInput, THOIKHOABIEUUncheckedCreateWithoutPHONGInput> | THOIKHOABIEUCreateWithoutPHONGInput[] | THOIKHOABIEUUncheckedCreateWithoutPHONGInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutPHONGInput | THOIKHOABIEUCreateOrConnectWithoutPHONGInput[]
    createMany?: THOIKHOABIEUCreateManyPHONGInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type THOIKHOABIEUUncheckedCreateNestedManyWithoutPHONGInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutPHONGInput, THOIKHOABIEUUncheckedCreateWithoutPHONGInput> | THOIKHOABIEUCreateWithoutPHONGInput[] | THOIKHOABIEUUncheckedCreateWithoutPHONGInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutPHONGInput | THOIKHOABIEUCreateOrConnectWithoutPHONGInput[]
    createMany?: THOIKHOABIEUCreateManyPHONGInputEnvelope
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
  }

  export type THOIKHOABIEUUpdateManyWithoutPHONGNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutPHONGInput, THOIKHOABIEUUncheckedCreateWithoutPHONGInput> | THOIKHOABIEUCreateWithoutPHONGInput[] | THOIKHOABIEUUncheckedCreateWithoutPHONGInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutPHONGInput | THOIKHOABIEUCreateOrConnectWithoutPHONGInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutPHONGInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutPHONGInput[]
    createMany?: THOIKHOABIEUCreateManyPHONGInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutPHONGInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutPHONGInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutPHONGInput | THOIKHOABIEUUpdateManyWithWhereWithoutPHONGInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutPHONGNestedInput = {
    create?: XOR<THOIKHOABIEUCreateWithoutPHONGInput, THOIKHOABIEUUncheckedCreateWithoutPHONGInput> | THOIKHOABIEUCreateWithoutPHONGInput[] | THOIKHOABIEUUncheckedCreateWithoutPHONGInput[]
    connectOrCreate?: THOIKHOABIEUCreateOrConnectWithoutPHONGInput | THOIKHOABIEUCreateOrConnectWithoutPHONGInput[]
    upsert?: THOIKHOABIEUUpsertWithWhereUniqueWithoutPHONGInput | THOIKHOABIEUUpsertWithWhereUniqueWithoutPHONGInput[]
    createMany?: THOIKHOABIEUCreateManyPHONGInputEnvelope
    set?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    disconnect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    delete?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    connect?: THOIKHOABIEUWhereUniqueInput | THOIKHOABIEUWhereUniqueInput[]
    update?: THOIKHOABIEUUpdateWithWhereUniqueWithoutPHONGInput | THOIKHOABIEUUpdateWithWhereUniqueWithoutPHONGInput[]
    updateMany?: THOIKHOABIEUUpdateManyWithWhereWithoutPHONGInput | THOIKHOABIEUUpdateManyWithWhereWithoutPHONGInput[]
    deleteMany?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
  }

  export type LOPCreateNestedOneWithoutSINHVIENInput = {
    create?: XOR<LOPCreateWithoutSINHVIENInput, LOPUncheckedCreateWithoutSINHVIENInput>
    connectOrCreate?: LOPCreateOrConnectWithoutSINHVIENInput
    connect?: LOPWhereUniqueInput
  }

  export type TAIKHOANCreateNestedManyWithoutSINHVIENInput = {
    create?: XOR<TAIKHOANCreateWithoutSINHVIENInput, TAIKHOANUncheckedCreateWithoutSINHVIENInput> | TAIKHOANCreateWithoutSINHVIENInput[] | TAIKHOANUncheckedCreateWithoutSINHVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutSINHVIENInput | TAIKHOANCreateOrConnectWithoutSINHVIENInput[]
    createMany?: TAIKHOANCreateManySINHVIENInputEnvelope
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
  }

  export type TAIKHOANUncheckedCreateNestedManyWithoutSINHVIENInput = {
    create?: XOR<TAIKHOANCreateWithoutSINHVIENInput, TAIKHOANUncheckedCreateWithoutSINHVIENInput> | TAIKHOANCreateWithoutSINHVIENInput[] | TAIKHOANUncheckedCreateWithoutSINHVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutSINHVIENInput | TAIKHOANCreateOrConnectWithoutSINHVIENInput[]
    createMany?: TAIKHOANCreateManySINHVIENInputEnvelope
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput = {
    set?: $Enums.SINHVIEN_GioiTinh | null
  }

  export type LOPUpdateOneWithoutSINHVIENNestedInput = {
    create?: XOR<LOPCreateWithoutSINHVIENInput, LOPUncheckedCreateWithoutSINHVIENInput>
    connectOrCreate?: LOPCreateOrConnectWithoutSINHVIENInput
    upsert?: LOPUpsertWithoutSINHVIENInput
    disconnect?: LOPWhereInput | boolean
    delete?: LOPWhereInput | boolean
    connect?: LOPWhereUniqueInput
    update?: XOR<XOR<LOPUpdateToOneWithWhereWithoutSINHVIENInput, LOPUpdateWithoutSINHVIENInput>, LOPUncheckedUpdateWithoutSINHVIENInput>
  }

  export type TAIKHOANUpdateManyWithoutSINHVIENNestedInput = {
    create?: XOR<TAIKHOANCreateWithoutSINHVIENInput, TAIKHOANUncheckedCreateWithoutSINHVIENInput> | TAIKHOANCreateWithoutSINHVIENInput[] | TAIKHOANUncheckedCreateWithoutSINHVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutSINHVIENInput | TAIKHOANCreateOrConnectWithoutSINHVIENInput[]
    upsert?: TAIKHOANUpsertWithWhereUniqueWithoutSINHVIENInput | TAIKHOANUpsertWithWhereUniqueWithoutSINHVIENInput[]
    createMany?: TAIKHOANCreateManySINHVIENInputEnvelope
    set?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    disconnect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    delete?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    update?: TAIKHOANUpdateWithWhereUniqueWithoutSINHVIENInput | TAIKHOANUpdateWithWhereUniqueWithoutSINHVIENInput[]
    updateMany?: TAIKHOANUpdateManyWithWhereWithoutSINHVIENInput | TAIKHOANUpdateManyWithWhereWithoutSINHVIENInput[]
    deleteMany?: TAIKHOANScalarWhereInput | TAIKHOANScalarWhereInput[]
  }

  export type TAIKHOANUncheckedUpdateManyWithoutSINHVIENNestedInput = {
    create?: XOR<TAIKHOANCreateWithoutSINHVIENInput, TAIKHOANUncheckedCreateWithoutSINHVIENInput> | TAIKHOANCreateWithoutSINHVIENInput[] | TAIKHOANUncheckedCreateWithoutSINHVIENInput[]
    connectOrCreate?: TAIKHOANCreateOrConnectWithoutSINHVIENInput | TAIKHOANCreateOrConnectWithoutSINHVIENInput[]
    upsert?: TAIKHOANUpsertWithWhereUniqueWithoutSINHVIENInput | TAIKHOANUpsertWithWhereUniqueWithoutSINHVIENInput[]
    createMany?: TAIKHOANCreateManySINHVIENInputEnvelope
    set?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    disconnect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    delete?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    connect?: TAIKHOANWhereUniqueInput | TAIKHOANWhereUniqueInput[]
    update?: TAIKHOANUpdateWithWhereUniqueWithoutSINHVIENInput | TAIKHOANUpdateWithWhereUniqueWithoutSINHVIENInput[]
    updateMany?: TAIKHOANUpdateManyWithWhereWithoutSINHVIENInput | TAIKHOANUpdateManyWithWhereWithoutSINHVIENInput[]
    deleteMany?: TAIKHOANScalarWhereInput | TAIKHOANScalarWhereInput[]
  }

  export type SINHVIENCreateNestedOneWithoutTAIKHOANInput = {
    create?: XOR<SINHVIENCreateWithoutTAIKHOANInput, SINHVIENUncheckedCreateWithoutTAIKHOANInput>
    connectOrCreate?: SINHVIENCreateOrConnectWithoutTAIKHOANInput
    connect?: SINHVIENWhereUniqueInput
  }

  export type GIANGVIENCreateNestedOneWithoutTAIKHOANInput = {
    create?: XOR<GIANGVIENCreateWithoutTAIKHOANInput, GIANGVIENUncheckedCreateWithoutTAIKHOANInput>
    connectOrCreate?: GIANGVIENCreateOrConnectWithoutTAIKHOANInput
    connect?: GIANGVIENWhereUniqueInput
  }

  export type NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput = {
    set?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
  }

  export type SINHVIENUpdateOneWithoutTAIKHOANNestedInput = {
    create?: XOR<SINHVIENCreateWithoutTAIKHOANInput, SINHVIENUncheckedCreateWithoutTAIKHOANInput>
    connectOrCreate?: SINHVIENCreateOrConnectWithoutTAIKHOANInput
    upsert?: SINHVIENUpsertWithoutTAIKHOANInput
    disconnect?: SINHVIENWhereInput | boolean
    delete?: SINHVIENWhereInput | boolean
    connect?: SINHVIENWhereUniqueInput
    update?: XOR<XOR<SINHVIENUpdateToOneWithWhereWithoutTAIKHOANInput, SINHVIENUpdateWithoutTAIKHOANInput>, SINHVIENUncheckedUpdateWithoutTAIKHOANInput>
  }

  export type GIANGVIENUpdateOneWithoutTAIKHOANNestedInput = {
    create?: XOR<GIANGVIENCreateWithoutTAIKHOANInput, GIANGVIENUncheckedCreateWithoutTAIKHOANInput>
    connectOrCreate?: GIANGVIENCreateOrConnectWithoutTAIKHOANInput
    upsert?: GIANGVIENUpsertWithoutTAIKHOANInput
    disconnect?: GIANGVIENWhereInput | boolean
    delete?: GIANGVIENWhereInput | boolean
    connect?: GIANGVIENWhereUniqueInput
    update?: XOR<XOR<GIANGVIENUpdateToOneWithWhereWithoutTAIKHOANInput, GIANGVIENUpdateWithoutTAIKHOANInput>, GIANGVIENUncheckedUpdateWithoutTAIKHOANInput>
  }

  export type LOPCreateNestedOneWithoutTHOIKHOABIEUInput = {
    create?: XOR<LOPCreateWithoutTHOIKHOABIEUInput, LOPUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: LOPCreateOrConnectWithoutTHOIKHOABIEUInput
    connect?: LOPWhereUniqueInput
  }

  export type MONHOCCreateNestedOneWithoutTHOIKHOABIEUInput = {
    create?: XOR<MONHOCCreateWithoutTHOIKHOABIEUInput, MONHOCUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: MONHOCCreateOrConnectWithoutTHOIKHOABIEUInput
    connect?: MONHOCWhereUniqueInput
  }

  export type GIANGVIENCreateNestedOneWithoutTHOIKHOABIEUInput = {
    create?: XOR<GIANGVIENCreateWithoutTHOIKHOABIEUInput, GIANGVIENUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: GIANGVIENCreateOrConnectWithoutTHOIKHOABIEUInput
    connect?: GIANGVIENWhereUniqueInput
  }

  export type PHONGCreateNestedOneWithoutTHOIKHOABIEUInput = {
    create?: XOR<PHONGCreateWithoutTHOIKHOABIEUInput, PHONGUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: PHONGCreateOrConnectWithoutTHOIKHOABIEUInput
    connect?: PHONGWhereUniqueInput
  }

  export type LOPUpdateOneWithoutTHOIKHOABIEUNestedInput = {
    create?: XOR<LOPCreateWithoutTHOIKHOABIEUInput, LOPUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: LOPCreateOrConnectWithoutTHOIKHOABIEUInput
    upsert?: LOPUpsertWithoutTHOIKHOABIEUInput
    disconnect?: LOPWhereInput | boolean
    delete?: LOPWhereInput | boolean
    connect?: LOPWhereUniqueInput
    update?: XOR<XOR<LOPUpdateToOneWithWhereWithoutTHOIKHOABIEUInput, LOPUpdateWithoutTHOIKHOABIEUInput>, LOPUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type MONHOCUpdateOneWithoutTHOIKHOABIEUNestedInput = {
    create?: XOR<MONHOCCreateWithoutTHOIKHOABIEUInput, MONHOCUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: MONHOCCreateOrConnectWithoutTHOIKHOABIEUInput
    upsert?: MONHOCUpsertWithoutTHOIKHOABIEUInput
    disconnect?: MONHOCWhereInput | boolean
    delete?: MONHOCWhereInput | boolean
    connect?: MONHOCWhereUniqueInput
    update?: XOR<XOR<MONHOCUpdateToOneWithWhereWithoutTHOIKHOABIEUInput, MONHOCUpdateWithoutTHOIKHOABIEUInput>, MONHOCUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type GIANGVIENUpdateOneWithoutTHOIKHOABIEUNestedInput = {
    create?: XOR<GIANGVIENCreateWithoutTHOIKHOABIEUInput, GIANGVIENUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: GIANGVIENCreateOrConnectWithoutTHOIKHOABIEUInput
    upsert?: GIANGVIENUpsertWithoutTHOIKHOABIEUInput
    disconnect?: GIANGVIENWhereInput | boolean
    delete?: GIANGVIENWhereInput | boolean
    connect?: GIANGVIENWhereUniqueInput
    update?: XOR<XOR<GIANGVIENUpdateToOneWithWhereWithoutTHOIKHOABIEUInput, GIANGVIENUpdateWithoutTHOIKHOABIEUInput>, GIANGVIENUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type PHONGUpdateOneWithoutTHOIKHOABIEUNestedInput = {
    create?: XOR<PHONGCreateWithoutTHOIKHOABIEUInput, PHONGUncheckedCreateWithoutTHOIKHOABIEUInput>
    connectOrCreate?: PHONGCreateOrConnectWithoutTHOIKHOABIEUInput
    upsert?: PHONGUpsertWithoutTHOIKHOABIEUInput
    disconnect?: PHONGWhereInput | boolean
    delete?: PHONGWhereInput | boolean
    connect?: PHONGWhereUniqueInput
    update?: XOR<XOR<PHONGUpdateToOneWithWhereWithoutTHOIKHOABIEUInput, PHONGUpdateWithoutTHOIKHOABIEUInput>, PHONGUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SINHVIEN_GioiTinh | EnumSINHVIEN_GioiTinhFieldRefInput<$PrismaModel> | null
    in?: $Enums.SINHVIEN_GioiTinh[] | null
    notIn?: $Enums.SINHVIEN_GioiTinh[] | null
    not?: NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel> | $Enums.SINHVIEN_GioiTinh | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSINHVIEN_GioiTinhNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SINHVIEN_GioiTinh | EnumSINHVIEN_GioiTinhFieldRefInput<$PrismaModel> | null
    in?: $Enums.SINHVIEN_GioiTinh[] | null
    notIn?: $Enums.SINHVIEN_GioiTinh[] | null
    not?: NestedEnumSINHVIEN_GioiTinhNullableWithAggregatesFilter<$PrismaModel> | $Enums.SINHVIEN_GioiTinh | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel>
    _max?: NestedEnumSINHVIEN_GioiTinhNullableFilter<$PrismaModel>
  }

  export type NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TAIKHOAN_LoaiTaiKhoan | EnumTAIKHOAN_LoaiTaiKhoanFieldRefInput<$PrismaModel> | null
    in?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    notIn?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    not?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
  }

  export type NestedEnumTAIKHOAN_LoaiTaiKhoanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TAIKHOAN_LoaiTaiKhoan | EnumTAIKHOAN_LoaiTaiKhoanFieldRefInput<$PrismaModel> | null
    in?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    notIn?: $Enums.TAIKHOAN_LoaiTaiKhoan[] | null
    not?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableWithAggregatesFilter<$PrismaModel> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel>
    _max?: NestedEnumTAIKHOAN_LoaiTaiKhoanNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TAIKHOANCreateWithoutGIANGVIENInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    SINHVIEN?: SINHVIENCreateNestedOneWithoutTAIKHOANInput
  }

  export type TAIKHOANUncheckedCreateWithoutGIANGVIENInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: string | null
  }

  export type TAIKHOANCreateOrConnectWithoutGIANGVIENInput = {
    where: TAIKHOANWhereUniqueInput
    create: XOR<TAIKHOANCreateWithoutGIANGVIENInput, TAIKHOANUncheckedCreateWithoutGIANGVIENInput>
  }

  export type TAIKHOANCreateManyGIANGVIENInputEnvelope = {
    data: TAIKHOANCreateManyGIANGVIENInput | TAIKHOANCreateManyGIANGVIENInput[]
    skipDuplicates?: boolean
  }

  export type THOIKHOABIEUCreateWithoutGIANGVIENInput = {
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
    LOP?: LOPCreateNestedOneWithoutTHOIKHOABIEUInput
    MONHOC?: MONHOCCreateNestedOneWithoutTHOIKHOABIEUInput
    PHONG?: PHONGCreateNestedOneWithoutTHOIKHOABIEUInput
  }

  export type THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput = {
    MaTKB?: number
    MaLop?: string | null
    MaMH?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUCreateOrConnectWithoutGIANGVIENInput = {
    where: THOIKHOABIEUWhereUniqueInput
    create: XOR<THOIKHOABIEUCreateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput>
  }

  export type THOIKHOABIEUCreateManyGIANGVIENInputEnvelope = {
    data: THOIKHOABIEUCreateManyGIANGVIENInput | THOIKHOABIEUCreateManyGIANGVIENInput[]
    skipDuplicates?: boolean
  }

  export type TAIKHOANUpsertWithWhereUniqueWithoutGIANGVIENInput = {
    where: TAIKHOANWhereUniqueInput
    update: XOR<TAIKHOANUpdateWithoutGIANGVIENInput, TAIKHOANUncheckedUpdateWithoutGIANGVIENInput>
    create: XOR<TAIKHOANCreateWithoutGIANGVIENInput, TAIKHOANUncheckedCreateWithoutGIANGVIENInput>
  }

  export type TAIKHOANUpdateWithWhereUniqueWithoutGIANGVIENInput = {
    where: TAIKHOANWhereUniqueInput
    data: XOR<TAIKHOANUpdateWithoutGIANGVIENInput, TAIKHOANUncheckedUpdateWithoutGIANGVIENInput>
  }

  export type TAIKHOANUpdateManyWithWhereWithoutGIANGVIENInput = {
    where: TAIKHOANScalarWhereInput
    data: XOR<TAIKHOANUpdateManyMutationInput, TAIKHOANUncheckedUpdateManyWithoutGIANGVIENInput>
  }

  export type TAIKHOANScalarWhereInput = {
    AND?: TAIKHOANScalarWhereInput | TAIKHOANScalarWhereInput[]
    OR?: TAIKHOANScalarWhereInput[]
    NOT?: TAIKHOANScalarWhereInput | TAIKHOANScalarWhereInput[]
    TenDangNhap?: StringFilter<"TAIKHOAN"> | string
    MatKhau?: StringFilter<"TAIKHOAN"> | string
    LoaiTaiKhoan?: EnumTAIKHOAN_LoaiTaiKhoanNullableFilter<"TAIKHOAN"> | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: StringNullableFilter<"TAIKHOAN"> | string | null
    MaGV?: StringNullableFilter<"TAIKHOAN"> | string | null
  }

  export type THOIKHOABIEUUpsertWithWhereUniqueWithoutGIANGVIENInput = {
    where: THOIKHOABIEUWhereUniqueInput
    update: XOR<THOIKHOABIEUUpdateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedUpdateWithoutGIANGVIENInput>
    create: XOR<THOIKHOABIEUCreateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedCreateWithoutGIANGVIENInput>
  }

  export type THOIKHOABIEUUpdateWithWhereUniqueWithoutGIANGVIENInput = {
    where: THOIKHOABIEUWhereUniqueInput
    data: XOR<THOIKHOABIEUUpdateWithoutGIANGVIENInput, THOIKHOABIEUUncheckedUpdateWithoutGIANGVIENInput>
  }

  export type THOIKHOABIEUUpdateManyWithWhereWithoutGIANGVIENInput = {
    where: THOIKHOABIEUScalarWhereInput
    data: XOR<THOIKHOABIEUUpdateManyMutationInput, THOIKHOABIEUUncheckedUpdateManyWithoutGIANGVIENInput>
  }

  export type THOIKHOABIEUScalarWhereInput = {
    AND?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
    OR?: THOIKHOABIEUScalarWhereInput[]
    NOT?: THOIKHOABIEUScalarWhereInput | THOIKHOABIEUScalarWhereInput[]
    MaTKB?: IntFilter<"THOIKHOABIEU"> | number
    MaLop?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaMH?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaGV?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    MaPhong?: StringNullableFilter<"THOIKHOABIEU"> | string | null
    Thu?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    TietBatDau?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    SoTiet?: IntNullableFilter<"THOIKHOABIEU"> | number | null
    NgayBatDau?: DateTimeNullableFilter<"THOIKHOABIEU"> | Date | string | null
    NgayKetThuc?: DateTimeNullableFilter<"THOIKHOABIEU"> | Date | string | null
  }

  export type SINHVIENCreateWithoutLOPInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    TAIKHOAN?: TAIKHOANCreateNestedManyWithoutSINHVIENInput
  }

  export type SINHVIENUncheckedCreateWithoutLOPInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    TAIKHOAN?: TAIKHOANUncheckedCreateNestedManyWithoutSINHVIENInput
  }

  export type SINHVIENCreateOrConnectWithoutLOPInput = {
    where: SINHVIENWhereUniqueInput
    create: XOR<SINHVIENCreateWithoutLOPInput, SINHVIENUncheckedCreateWithoutLOPInput>
  }

  export type SINHVIENCreateManyLOPInputEnvelope = {
    data: SINHVIENCreateManyLOPInput | SINHVIENCreateManyLOPInput[]
    skipDuplicates?: boolean
  }

  export type THOIKHOABIEUCreateWithoutLOPInput = {
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
    MONHOC?: MONHOCCreateNestedOneWithoutTHOIKHOABIEUInput
    GIANGVIEN?: GIANGVIENCreateNestedOneWithoutTHOIKHOABIEUInput
    PHONG?: PHONGCreateNestedOneWithoutTHOIKHOABIEUInput
  }

  export type THOIKHOABIEUUncheckedCreateWithoutLOPInput = {
    MaTKB?: number
    MaMH?: string | null
    MaGV?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUCreateOrConnectWithoutLOPInput = {
    where: THOIKHOABIEUWhereUniqueInput
    create: XOR<THOIKHOABIEUCreateWithoutLOPInput, THOIKHOABIEUUncheckedCreateWithoutLOPInput>
  }

  export type THOIKHOABIEUCreateManyLOPInputEnvelope = {
    data: THOIKHOABIEUCreateManyLOPInput | THOIKHOABIEUCreateManyLOPInput[]
    skipDuplicates?: boolean
  }

  export type SINHVIENUpsertWithWhereUniqueWithoutLOPInput = {
    where: SINHVIENWhereUniqueInput
    update: XOR<SINHVIENUpdateWithoutLOPInput, SINHVIENUncheckedUpdateWithoutLOPInput>
    create: XOR<SINHVIENCreateWithoutLOPInput, SINHVIENUncheckedCreateWithoutLOPInput>
  }

  export type SINHVIENUpdateWithWhereUniqueWithoutLOPInput = {
    where: SINHVIENWhereUniqueInput
    data: XOR<SINHVIENUpdateWithoutLOPInput, SINHVIENUncheckedUpdateWithoutLOPInput>
  }

  export type SINHVIENUpdateManyWithWhereWithoutLOPInput = {
    where: SINHVIENScalarWhereInput
    data: XOR<SINHVIENUpdateManyMutationInput, SINHVIENUncheckedUpdateManyWithoutLOPInput>
  }

  export type SINHVIENScalarWhereInput = {
    AND?: SINHVIENScalarWhereInput | SINHVIENScalarWhereInput[]
    OR?: SINHVIENScalarWhereInput[]
    NOT?: SINHVIENScalarWhereInput | SINHVIENScalarWhereInput[]
    MaSV?: StringFilter<"SINHVIEN"> | string
    HoTen?: StringFilter<"SINHVIEN"> | string
    NgaySinh?: DateTimeNullableFilter<"SINHVIEN"> | Date | string | null
    GioiTinh?: EnumSINHVIEN_GioiTinhNullableFilter<"SINHVIEN"> | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: StringNullableFilter<"SINHVIEN"> | string | null
    MaLop?: StringNullableFilter<"SINHVIEN"> | string | null
  }

  export type THOIKHOABIEUUpsertWithWhereUniqueWithoutLOPInput = {
    where: THOIKHOABIEUWhereUniqueInput
    update: XOR<THOIKHOABIEUUpdateWithoutLOPInput, THOIKHOABIEUUncheckedUpdateWithoutLOPInput>
    create: XOR<THOIKHOABIEUCreateWithoutLOPInput, THOIKHOABIEUUncheckedCreateWithoutLOPInput>
  }

  export type THOIKHOABIEUUpdateWithWhereUniqueWithoutLOPInput = {
    where: THOIKHOABIEUWhereUniqueInput
    data: XOR<THOIKHOABIEUUpdateWithoutLOPInput, THOIKHOABIEUUncheckedUpdateWithoutLOPInput>
  }

  export type THOIKHOABIEUUpdateManyWithWhereWithoutLOPInput = {
    where: THOIKHOABIEUScalarWhereInput
    data: XOR<THOIKHOABIEUUpdateManyMutationInput, THOIKHOABIEUUncheckedUpdateManyWithoutLOPInput>
  }

  export type THOIKHOABIEUCreateWithoutMONHOCInput = {
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
    LOP?: LOPCreateNestedOneWithoutTHOIKHOABIEUInput
    GIANGVIEN?: GIANGVIENCreateNestedOneWithoutTHOIKHOABIEUInput
    PHONG?: PHONGCreateNestedOneWithoutTHOIKHOABIEUInput
  }

  export type THOIKHOABIEUUncheckedCreateWithoutMONHOCInput = {
    MaTKB?: number
    MaLop?: string | null
    MaGV?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUCreateOrConnectWithoutMONHOCInput = {
    where: THOIKHOABIEUWhereUniqueInput
    create: XOR<THOIKHOABIEUCreateWithoutMONHOCInput, THOIKHOABIEUUncheckedCreateWithoutMONHOCInput>
  }

  export type THOIKHOABIEUCreateManyMONHOCInputEnvelope = {
    data: THOIKHOABIEUCreateManyMONHOCInput | THOIKHOABIEUCreateManyMONHOCInput[]
    skipDuplicates?: boolean
  }

  export type THOIKHOABIEUUpsertWithWhereUniqueWithoutMONHOCInput = {
    where: THOIKHOABIEUWhereUniqueInput
    update: XOR<THOIKHOABIEUUpdateWithoutMONHOCInput, THOIKHOABIEUUncheckedUpdateWithoutMONHOCInput>
    create: XOR<THOIKHOABIEUCreateWithoutMONHOCInput, THOIKHOABIEUUncheckedCreateWithoutMONHOCInput>
  }

  export type THOIKHOABIEUUpdateWithWhereUniqueWithoutMONHOCInput = {
    where: THOIKHOABIEUWhereUniqueInput
    data: XOR<THOIKHOABIEUUpdateWithoutMONHOCInput, THOIKHOABIEUUncheckedUpdateWithoutMONHOCInput>
  }

  export type THOIKHOABIEUUpdateManyWithWhereWithoutMONHOCInput = {
    where: THOIKHOABIEUScalarWhereInput
    data: XOR<THOIKHOABIEUUpdateManyMutationInput, THOIKHOABIEUUncheckedUpdateManyWithoutMONHOCInput>
  }

  export type THOIKHOABIEUCreateWithoutPHONGInput = {
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
    LOP?: LOPCreateNestedOneWithoutTHOIKHOABIEUInput
    MONHOC?: MONHOCCreateNestedOneWithoutTHOIKHOABIEUInput
    GIANGVIEN?: GIANGVIENCreateNestedOneWithoutTHOIKHOABIEUInput
  }

  export type THOIKHOABIEUUncheckedCreateWithoutPHONGInput = {
    MaTKB?: number
    MaLop?: string | null
    MaMH?: string | null
    MaGV?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUCreateOrConnectWithoutPHONGInput = {
    where: THOIKHOABIEUWhereUniqueInput
    create: XOR<THOIKHOABIEUCreateWithoutPHONGInput, THOIKHOABIEUUncheckedCreateWithoutPHONGInput>
  }

  export type THOIKHOABIEUCreateManyPHONGInputEnvelope = {
    data: THOIKHOABIEUCreateManyPHONGInput | THOIKHOABIEUCreateManyPHONGInput[]
    skipDuplicates?: boolean
  }

  export type THOIKHOABIEUUpsertWithWhereUniqueWithoutPHONGInput = {
    where: THOIKHOABIEUWhereUniqueInput
    update: XOR<THOIKHOABIEUUpdateWithoutPHONGInput, THOIKHOABIEUUncheckedUpdateWithoutPHONGInput>
    create: XOR<THOIKHOABIEUCreateWithoutPHONGInput, THOIKHOABIEUUncheckedCreateWithoutPHONGInput>
  }

  export type THOIKHOABIEUUpdateWithWhereUniqueWithoutPHONGInput = {
    where: THOIKHOABIEUWhereUniqueInput
    data: XOR<THOIKHOABIEUUpdateWithoutPHONGInput, THOIKHOABIEUUncheckedUpdateWithoutPHONGInput>
  }

  export type THOIKHOABIEUUpdateManyWithWhereWithoutPHONGInput = {
    where: THOIKHOABIEUScalarWhereInput
    data: XOR<THOIKHOABIEUUpdateManyMutationInput, THOIKHOABIEUUncheckedUpdateManyWithoutPHONGInput>
  }

  export type LOPCreateWithoutSINHVIENInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
    THOIKHOABIEU?: THOIKHOABIEUCreateNestedManyWithoutLOPInput
  }

  export type LOPUncheckedCreateWithoutSINHVIENInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedCreateNestedManyWithoutLOPInput
  }

  export type LOPCreateOrConnectWithoutSINHVIENInput = {
    where: LOPWhereUniqueInput
    create: XOR<LOPCreateWithoutSINHVIENInput, LOPUncheckedCreateWithoutSINHVIENInput>
  }

  export type TAIKHOANCreateWithoutSINHVIENInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    GIANGVIEN?: GIANGVIENCreateNestedOneWithoutTAIKHOANInput
  }

  export type TAIKHOANUncheckedCreateWithoutSINHVIENInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaGV?: string | null
  }

  export type TAIKHOANCreateOrConnectWithoutSINHVIENInput = {
    where: TAIKHOANWhereUniqueInput
    create: XOR<TAIKHOANCreateWithoutSINHVIENInput, TAIKHOANUncheckedCreateWithoutSINHVIENInput>
  }

  export type TAIKHOANCreateManySINHVIENInputEnvelope = {
    data: TAIKHOANCreateManySINHVIENInput | TAIKHOANCreateManySINHVIENInput[]
    skipDuplicates?: boolean
  }

  export type LOPUpsertWithoutSINHVIENInput = {
    update: XOR<LOPUpdateWithoutSINHVIENInput, LOPUncheckedUpdateWithoutSINHVIENInput>
    create: XOR<LOPCreateWithoutSINHVIENInput, LOPUncheckedCreateWithoutSINHVIENInput>
    where?: LOPWhereInput
  }

  export type LOPUpdateToOneWithWhereWithoutSINHVIENInput = {
    where?: LOPWhereInput
    data: XOR<LOPUpdateWithoutSINHVIENInput, LOPUncheckedUpdateWithoutSINHVIENInput>
  }

  export type LOPUpdateWithoutSINHVIENInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
    THOIKHOABIEU?: THOIKHOABIEUUpdateManyWithoutLOPNestedInput
  }

  export type LOPUncheckedUpdateWithoutSINHVIENInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedUpdateManyWithoutLOPNestedInput
  }

  export type TAIKHOANUpsertWithWhereUniqueWithoutSINHVIENInput = {
    where: TAIKHOANWhereUniqueInput
    update: XOR<TAIKHOANUpdateWithoutSINHVIENInput, TAIKHOANUncheckedUpdateWithoutSINHVIENInput>
    create: XOR<TAIKHOANCreateWithoutSINHVIENInput, TAIKHOANUncheckedCreateWithoutSINHVIENInput>
  }

  export type TAIKHOANUpdateWithWhereUniqueWithoutSINHVIENInput = {
    where: TAIKHOANWhereUniqueInput
    data: XOR<TAIKHOANUpdateWithoutSINHVIENInput, TAIKHOANUncheckedUpdateWithoutSINHVIENInput>
  }

  export type TAIKHOANUpdateManyWithWhereWithoutSINHVIENInput = {
    where: TAIKHOANScalarWhereInput
    data: XOR<TAIKHOANUpdateManyMutationInput, TAIKHOANUncheckedUpdateManyWithoutSINHVIENInput>
  }

  export type SINHVIENCreateWithoutTAIKHOANInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    LOP?: LOPCreateNestedOneWithoutSINHVIENInput
  }

  export type SINHVIENUncheckedCreateWithoutTAIKHOANInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
    MaLop?: string | null
  }

  export type SINHVIENCreateOrConnectWithoutTAIKHOANInput = {
    where: SINHVIENWhereUniqueInput
    create: XOR<SINHVIENCreateWithoutTAIKHOANInput, SINHVIENUncheckedCreateWithoutTAIKHOANInput>
  }

  export type GIANGVIENCreateWithoutTAIKHOANInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
    THOIKHOABIEU?: THOIKHOABIEUCreateNestedManyWithoutGIANGVIENInput
  }

  export type GIANGVIENUncheckedCreateWithoutTAIKHOANInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedCreateNestedManyWithoutGIANGVIENInput
  }

  export type GIANGVIENCreateOrConnectWithoutTAIKHOANInput = {
    where: GIANGVIENWhereUniqueInput
    create: XOR<GIANGVIENCreateWithoutTAIKHOANInput, GIANGVIENUncheckedCreateWithoutTAIKHOANInput>
  }

  export type SINHVIENUpsertWithoutTAIKHOANInput = {
    update: XOR<SINHVIENUpdateWithoutTAIKHOANInput, SINHVIENUncheckedUpdateWithoutTAIKHOANInput>
    create: XOR<SINHVIENCreateWithoutTAIKHOANInput, SINHVIENUncheckedCreateWithoutTAIKHOANInput>
    where?: SINHVIENWhereInput
  }

  export type SINHVIENUpdateToOneWithWhereWithoutTAIKHOANInput = {
    where?: SINHVIENWhereInput
    data: XOR<SINHVIENUpdateWithoutTAIKHOANInput, SINHVIENUncheckedUpdateWithoutTAIKHOANInput>
  }

  export type SINHVIENUpdateWithoutTAIKHOANInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    LOP?: LOPUpdateOneWithoutSINHVIENNestedInput
  }

  export type SINHVIENUncheckedUpdateWithoutTAIKHOANInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GIANGVIENUpsertWithoutTAIKHOANInput = {
    update: XOR<GIANGVIENUpdateWithoutTAIKHOANInput, GIANGVIENUncheckedUpdateWithoutTAIKHOANInput>
    create: XOR<GIANGVIENCreateWithoutTAIKHOANInput, GIANGVIENUncheckedCreateWithoutTAIKHOANInput>
    where?: GIANGVIENWhereInput
  }

  export type GIANGVIENUpdateToOneWithWhereWithoutTAIKHOANInput = {
    where?: GIANGVIENWhereInput
    data: XOR<GIANGVIENUpdateWithoutTAIKHOANInput, GIANGVIENUncheckedUpdateWithoutTAIKHOANInput>
  }

  export type GIANGVIENUpdateWithoutTAIKHOANInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
    THOIKHOABIEU?: THOIKHOABIEUUpdateManyWithoutGIANGVIENNestedInput
  }

  export type GIANGVIENUncheckedUpdateWithoutTAIKHOANInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
    THOIKHOABIEU?: THOIKHOABIEUUncheckedUpdateManyWithoutGIANGVIENNestedInput
  }

  export type LOPCreateWithoutTHOIKHOABIEUInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
    SINHVIEN?: SINHVIENCreateNestedManyWithoutLOPInput
  }

  export type LOPUncheckedCreateWithoutTHOIKHOABIEUInput = {
    MaLop: string
    TenLop: string
    KhoaHoc?: string | null
    NganhHoc?: string | null
    SINHVIEN?: SINHVIENUncheckedCreateNestedManyWithoutLOPInput
  }

  export type LOPCreateOrConnectWithoutTHOIKHOABIEUInput = {
    where: LOPWhereUniqueInput
    create: XOR<LOPCreateWithoutTHOIKHOABIEUInput, LOPUncheckedCreateWithoutTHOIKHOABIEUInput>
  }

  export type MONHOCCreateWithoutTHOIKHOABIEUInput = {
    MaMH: string
    TenMH: string
    SoTinChi?: number | null
    SoTiet?: number | null
  }

  export type MONHOCUncheckedCreateWithoutTHOIKHOABIEUInput = {
    MaMH: string
    TenMH: string
    SoTinChi?: number | null
    SoTiet?: number | null
  }

  export type MONHOCCreateOrConnectWithoutTHOIKHOABIEUInput = {
    where: MONHOCWhereUniqueInput
    create: XOR<MONHOCCreateWithoutTHOIKHOABIEUInput, MONHOCUncheckedCreateWithoutTHOIKHOABIEUInput>
  }

  export type GIANGVIENCreateWithoutTHOIKHOABIEUInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
    TAIKHOAN?: TAIKHOANCreateNestedManyWithoutGIANGVIENInput
  }

  export type GIANGVIENUncheckedCreateWithoutTHOIKHOABIEUInput = {
    MaGV: string
    HoTen: string
    TrinhDo?: string | null
    BoMon?: string | null
    TAIKHOAN?: TAIKHOANUncheckedCreateNestedManyWithoutGIANGVIENInput
  }

  export type GIANGVIENCreateOrConnectWithoutTHOIKHOABIEUInput = {
    where: GIANGVIENWhereUniqueInput
    create: XOR<GIANGVIENCreateWithoutTHOIKHOABIEUInput, GIANGVIENUncheckedCreateWithoutTHOIKHOABIEUInput>
  }

  export type PHONGCreateWithoutTHOIKHOABIEUInput = {
    MaPhong: string
    TenPhong?: string | null
    SucChua?: number | null
    LoaiPhong?: string | null
  }

  export type PHONGUncheckedCreateWithoutTHOIKHOABIEUInput = {
    MaPhong: string
    TenPhong?: string | null
    SucChua?: number | null
    LoaiPhong?: string | null
  }

  export type PHONGCreateOrConnectWithoutTHOIKHOABIEUInput = {
    where: PHONGWhereUniqueInput
    create: XOR<PHONGCreateWithoutTHOIKHOABIEUInput, PHONGUncheckedCreateWithoutTHOIKHOABIEUInput>
  }

  export type LOPUpsertWithoutTHOIKHOABIEUInput = {
    update: XOR<LOPUpdateWithoutTHOIKHOABIEUInput, LOPUncheckedUpdateWithoutTHOIKHOABIEUInput>
    create: XOR<LOPCreateWithoutTHOIKHOABIEUInput, LOPUncheckedCreateWithoutTHOIKHOABIEUInput>
    where?: LOPWhereInput
  }

  export type LOPUpdateToOneWithWhereWithoutTHOIKHOABIEUInput = {
    where?: LOPWhereInput
    data: XOR<LOPUpdateWithoutTHOIKHOABIEUInput, LOPUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type LOPUpdateWithoutTHOIKHOABIEUInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
    SINHVIEN?: SINHVIENUpdateManyWithoutLOPNestedInput
  }

  export type LOPUncheckedUpdateWithoutTHOIKHOABIEUInput = {
    MaLop?: StringFieldUpdateOperationsInput | string
    TenLop?: StringFieldUpdateOperationsInput | string
    KhoaHoc?: NullableStringFieldUpdateOperationsInput | string | null
    NganhHoc?: NullableStringFieldUpdateOperationsInput | string | null
    SINHVIEN?: SINHVIENUncheckedUpdateManyWithoutLOPNestedInput
  }

  export type MONHOCUpsertWithoutTHOIKHOABIEUInput = {
    update: XOR<MONHOCUpdateWithoutTHOIKHOABIEUInput, MONHOCUncheckedUpdateWithoutTHOIKHOABIEUInput>
    create: XOR<MONHOCCreateWithoutTHOIKHOABIEUInput, MONHOCUncheckedCreateWithoutTHOIKHOABIEUInput>
    where?: MONHOCWhereInput
  }

  export type MONHOCUpdateToOneWithWhereWithoutTHOIKHOABIEUInput = {
    where?: MONHOCWhereInput
    data: XOR<MONHOCUpdateWithoutTHOIKHOABIEUInput, MONHOCUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type MONHOCUpdateWithoutTHOIKHOABIEUInput = {
    MaMH?: StringFieldUpdateOperationsInput | string
    TenMH?: StringFieldUpdateOperationsInput | string
    SoTinChi?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MONHOCUncheckedUpdateWithoutTHOIKHOABIEUInput = {
    MaMH?: StringFieldUpdateOperationsInput | string
    TenMH?: StringFieldUpdateOperationsInput | string
    SoTinChi?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GIANGVIENUpsertWithoutTHOIKHOABIEUInput = {
    update: XOR<GIANGVIENUpdateWithoutTHOIKHOABIEUInput, GIANGVIENUncheckedUpdateWithoutTHOIKHOABIEUInput>
    create: XOR<GIANGVIENCreateWithoutTHOIKHOABIEUInput, GIANGVIENUncheckedCreateWithoutTHOIKHOABIEUInput>
    where?: GIANGVIENWhereInput
  }

  export type GIANGVIENUpdateToOneWithWhereWithoutTHOIKHOABIEUInput = {
    where?: GIANGVIENWhereInput
    data: XOR<GIANGVIENUpdateWithoutTHOIKHOABIEUInput, GIANGVIENUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type GIANGVIENUpdateWithoutTHOIKHOABIEUInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUpdateManyWithoutGIANGVIENNestedInput
  }

  export type GIANGVIENUncheckedUpdateWithoutTHOIKHOABIEUInput = {
    MaGV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    TrinhDo?: NullableStringFieldUpdateOperationsInput | string | null
    BoMon?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUncheckedUpdateManyWithoutGIANGVIENNestedInput
  }

  export type PHONGUpsertWithoutTHOIKHOABIEUInput = {
    update: XOR<PHONGUpdateWithoutTHOIKHOABIEUInput, PHONGUncheckedUpdateWithoutTHOIKHOABIEUInput>
    create: XOR<PHONGCreateWithoutTHOIKHOABIEUInput, PHONGUncheckedCreateWithoutTHOIKHOABIEUInput>
    where?: PHONGWhereInput
  }

  export type PHONGUpdateToOneWithWhereWithoutTHOIKHOABIEUInput = {
    where?: PHONGWhereInput
    data: XOR<PHONGUpdateWithoutTHOIKHOABIEUInput, PHONGUncheckedUpdateWithoutTHOIKHOABIEUInput>
  }

  export type PHONGUpdateWithoutTHOIKHOABIEUInput = {
    MaPhong?: StringFieldUpdateOperationsInput | string
    TenPhong?: NullableStringFieldUpdateOperationsInput | string | null
    SucChua?: NullableIntFieldUpdateOperationsInput | number | null
    LoaiPhong?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PHONGUncheckedUpdateWithoutTHOIKHOABIEUInput = {
    MaPhong?: StringFieldUpdateOperationsInput | string
    TenPhong?: NullableStringFieldUpdateOperationsInput | string | null
    SucChua?: NullableIntFieldUpdateOperationsInput | number | null
    LoaiPhong?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAIKHOANCreateManyGIANGVIENInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: string | null
  }

  export type THOIKHOABIEUCreateManyGIANGVIENInput = {
    MaTKB?: number
    MaLop?: string | null
    MaMH?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type TAIKHOANUpdateWithoutGIANGVIENInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    SINHVIEN?: SINHVIENUpdateOneWithoutTAIKHOANNestedInput
  }

  export type TAIKHOANUncheckedUpdateWithoutGIANGVIENInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAIKHOANUncheckedUpdateManyWithoutGIANGVIENInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaSV?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type THOIKHOABIEUUpdateWithoutGIANGVIENInput = {
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOP?: LOPUpdateOneWithoutTHOIKHOABIEUNestedInput
    MONHOC?: MONHOCUpdateOneWithoutTHOIKHOABIEUNestedInput
    PHONG?: PHONGUpdateOneWithoutTHOIKHOABIEUNestedInput
  }

  export type THOIKHOABIEUUncheckedUpdateWithoutGIANGVIENInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutGIANGVIENInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SINHVIENCreateManyLOPInput = {
    MaSV: string
    HoTen: string
    NgaySinh?: Date | string | null
    GioiTinh?: $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: string | null
  }

  export type THOIKHOABIEUCreateManyLOPInput = {
    MaTKB?: number
    MaMH?: string | null
    MaGV?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type SINHVIENUpdateWithoutLOPInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUpdateManyWithoutSINHVIENNestedInput
  }

  export type SINHVIENUncheckedUpdateWithoutLOPInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    TAIKHOAN?: TAIKHOANUncheckedUpdateManyWithoutSINHVIENNestedInput
  }

  export type SINHVIENUncheckedUpdateManyWithoutLOPInput = {
    MaSV?: StringFieldUpdateOperationsInput | string
    HoTen?: StringFieldUpdateOperationsInput | string
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GioiTinh?: NullableEnumSINHVIEN_GioiTinhFieldUpdateOperationsInput | $Enums.SINHVIEN_GioiTinh | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type THOIKHOABIEUUpdateWithoutLOPInput = {
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    MONHOC?: MONHOCUpdateOneWithoutTHOIKHOABIEUNestedInput
    GIANGVIEN?: GIANGVIENUpdateOneWithoutTHOIKHOABIEUNestedInput
    PHONG?: PHONGUpdateOneWithoutTHOIKHOABIEUNestedInput
  }

  export type THOIKHOABIEUUncheckedUpdateWithoutLOPInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutLOPInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUCreateManyMONHOCInput = {
    MaTKB?: number
    MaLop?: string | null
    MaGV?: string | null
    MaPhong?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUUpdateWithoutMONHOCInput = {
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOP?: LOPUpdateOneWithoutTHOIKHOABIEUNestedInput
    GIANGVIEN?: GIANGVIENUpdateOneWithoutTHOIKHOABIEUNestedInput
    PHONG?: PHONGUpdateOneWithoutTHOIKHOABIEUNestedInput
  }

  export type THOIKHOABIEUUncheckedUpdateWithoutMONHOCInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutMONHOCInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    MaPhong?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUCreateManyPHONGInput = {
    MaTKB?: number
    MaLop?: string | null
    MaMH?: string | null
    MaGV?: string | null
    Thu?: number | null
    TietBatDau?: number | null
    SoTiet?: number | null
    NgayBatDau?: Date | string | null
    NgayKetThuc?: Date | string | null
  }

  export type THOIKHOABIEUUpdateWithoutPHONGInput = {
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LOP?: LOPUpdateOneWithoutTHOIKHOABIEUNestedInput
    MONHOC?: MONHOCUpdateOneWithoutTHOIKHOABIEUNestedInput
    GIANGVIEN?: GIANGVIENUpdateOneWithoutTHOIKHOABIEUNestedInput
  }

  export type THOIKHOABIEUUncheckedUpdateWithoutPHONGInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type THOIKHOABIEUUncheckedUpdateManyWithoutPHONGInput = {
    MaTKB?: IntFieldUpdateOperationsInput | number
    MaLop?: NullableStringFieldUpdateOperationsInput | string | null
    MaMH?: NullableStringFieldUpdateOperationsInput | string | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
    Thu?: NullableIntFieldUpdateOperationsInput | number | null
    TietBatDau?: NullableIntFieldUpdateOperationsInput | number | null
    SoTiet?: NullableIntFieldUpdateOperationsInput | number | null
    NgayBatDau?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NgayKetThuc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TAIKHOANCreateManySINHVIENInput = {
    TenDangNhap: string
    MatKhau: string
    LoaiTaiKhoan?: $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaGV?: string | null
  }

  export type TAIKHOANUpdateWithoutSINHVIENInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    GIANGVIEN?: GIANGVIENUpdateOneWithoutTAIKHOANNestedInput
  }

  export type TAIKHOANUncheckedUpdateWithoutSINHVIENInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TAIKHOANUncheckedUpdateManyWithoutSINHVIENInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    LoaiTaiKhoan?: NullableEnumTAIKHOAN_LoaiTaiKhoanFieldUpdateOperationsInput | $Enums.TAIKHOAN_LoaiTaiKhoan | null
    MaGV?: NullableStringFieldUpdateOperationsInput | string | null
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