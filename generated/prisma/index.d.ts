
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type categoriesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    icon_url: string | null
  }, ExtArgs["result"]["categories"]>
  composites: {}
}

/**
 * Model categories
 * 
 */
export type categories = runtime.Types.DefaultSelection<categoriesPayload>
export type conversationsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    users: usersPayload<ExtArgs>
    providers: providersPayload<ExtArgs>
    messages: messagesPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    customer_id: number
    provider_id: number
    last_message: string | null
    updated_at: Date | null
  }, ExtArgs["result"]["conversations"]>
  composites: {}
}

/**
 * Model conversations
 * 
 */
export type conversations = runtime.Types.DefaultSelection<conversationsPayload>
export type messagesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    conversations: conversationsPayload<ExtArgs>
    users: usersPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    conversation_id: number
    sender_id: number
    content: string | null
    is_read: boolean | null
  }, ExtArgs["result"]["messages"]>
  composites: {}
}

/**
 * Model messages
 * 
 */
export type messages = runtime.Types.DefaultSelection<messagesPayload>
export type notificationsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    users: usersPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    user_id: number
    title: string | null
    message: string | null
    type: notifications_type | null
    is_read: boolean | null
  }, ExtArgs["result"]["notifications"]>
  composites: {}
}

/**
 * Model notifications
 * 
 */
export type notifications = runtime.Types.DefaultSelection<notificationsPayload>
export type payout_requestsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    providers: providersPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    provider_id: number
    amount: Prisma.Decimal
    bank_info: Prisma.JsonValue | null
    status: payout_requests_status | null
  }, ExtArgs["result"]["payout_requests"]>
  composites: {}
}

/**
 * Model payout_requests
 * 
 */
export type payout_requests = runtime.Types.DefaultSelection<payout_requestsPayload>
export type providersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    conversations: conversationsPayload<ExtArgs>[]
    payout_requests: payout_requestsPayload<ExtArgs>[]
    users: usersPayload<ExtArgs>
    schedules: schedulesPayload<ExtArgs>[]
    wallets: walletsPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    user_id: number
    business_name: string | null
    description: string | null
    address: string | null
    latitude: Prisma.Decimal | null
    longitude: Prisma.Decimal | null
    kyc_status: providers_kyc_status | null
    trust_score: Prisma.Decimal | null
  }, ExtArgs["result"]["providers"]>
  composites: {}
}

/**
 * Model providers
 * 
 */
export type providers = runtime.Types.DefaultSelection<providersPayload>
export type schedulesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    providers: providersPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    provider_id: number
    day_of_week: number
    start_time: Date
    end_time: Date
    is_day_off: boolean | null
  }, ExtArgs["result"]["schedules"]>
  composites: {}
}

/**
 * Model schedules
 * 
 */
export type schedules = runtime.Types.DefaultSelection<schedulesPayload>
export type usersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    conversations: conversationsPayload<ExtArgs>[]
    messages: messagesPayload<ExtArgs>[]
    notifications: notificationsPayload<ExtArgs>[]
    providers: providersPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    email: string
    password: string
    full_name: string
    phone: string | null
    avatar_url: string | null
    role: users_role | null
    is_active: boolean | null
    created_at: Date | null
  }, ExtArgs["result"]["users"]>
  composites: {}
}

/**
 * Model users
 * 
 */
export type users = runtime.Types.DefaultSelection<usersPayload>
export type vouchersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    code: string
    discount_type: vouchers_discount_type
    value: Prisma.Decimal
    min_order_price: Prisma.Decimal | null
    owner_id: number | null
  }, ExtArgs["result"]["vouchers"]>
  composites: {}
}

/**
 * Model vouchers
 * 
 */
export type vouchers = runtime.Types.DefaultSelection<vouchersPayload>
export type walletsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    providers: providersPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    provider_id: number
    balance: Prisma.Decimal | null
    holding_balance: Prisma.Decimal | null
  }, ExtArgs["result"]["wallets"]>
  composites: {}
}

/**
 * Model wallets
 * 
 */
export type wallets = runtime.Types.DefaultSelection<walletsPayload>

/**
 * Enums
 */

export const notifications_type: {
  BOOKING: 'BOOKING',
  SYSTEM: 'SYSTEM',
  PROMOTION: 'PROMOTION'
};

export type notifications_type = (typeof notifications_type)[keyof typeof notifications_type]


export const payout_requests_status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type payout_requests_status = (typeof payout_requests_status)[keyof typeof payout_requests_status]


export const providers_kyc_status: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type providers_kyc_status = (typeof providers_kyc_status)[keyof typeof providers_kyc_status]


export const users_role: {
  CUSTOMER: 'CUSTOMER',
  PROVIDER: 'PROVIDER',
  ADMIN: 'ADMIN'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const vouchers_discount_type: {
  PERCENT: 'PERCENT',
  FIXED: 'FIXED'
};

export type vouchers_discount_type = (typeof vouchers_discount_type)[keyof typeof vouchers_discount_type]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.payout_requests`: Exposes CRUD operations for the **payout_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payout_requests
    * const payout_requests = await prisma.payout_requests.findMany()
    * ```
    */
  get payout_requests(): Prisma.payout_requestsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.providers`: Exposes CRUD operations for the **providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.providers.findMany()
    * ```
    */
  get providers(): Prisma.providersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.schedulesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.vouchers`: Exposes CRUD operations for the **vouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.vouchers.findMany()
    * ```
    */
  get vouchers(): Prisma.vouchersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.walletsDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.0
   * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    conversations: 'conversations',
    messages: 'messages',
    notifications: 'notifications',
    payout_requests: 'payout_requests',
    providers: 'providers',
    schedules: 'schedules',
    users: 'users',
    vouchers: 'vouchers',
    wallets: 'wallets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
      meta: {
        modelProps: 'categories' | 'conversations' | 'messages' | 'notifications' | 'payout_requests' | 'providers' | 'schedules' | 'users' | 'vouchers' | 'wallets'
        txIsolationLevel: Prisma.TransactionIsolationLevel
      },
      model: {
      categories: {
        findUnique: {
          args: Prisma.categoriesFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.categoriesFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.categoriesFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        create: {
          args: Prisma.categoriesCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.categoriesCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        delete: {
          args: Prisma.categoriesDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        update: {
          args: Prisma.categoriesUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.categoriesDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.categoriesUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.categoriesUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.CategoriesAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.CategoriesGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
        count: {
          args: Prisma.categoriesCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<categories>
          payload: categoriesPayload<ExtArgs>
        }
      }
      conversations: {
        findUnique: {
          args: Prisma.conversationsFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.conversationsFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.conversationsFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        create: {
          args: Prisma.conversationsCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.conversationsCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        delete: {
          args: Prisma.conversationsDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        update: {
          args: Prisma.conversationsUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.conversationsDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.conversationsUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.conversationsUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.ConversationsAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.ConversationsGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
        count: {
          args: Prisma.conversationsCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<conversations>
          payload: conversationsPayload<ExtArgs>
        }
      }
      messages: {
        findUnique: {
          args: Prisma.messagesFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.messagesFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.messagesFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        create: {
          args: Prisma.messagesCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.messagesCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        delete: {
          args: Prisma.messagesDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        update: {
          args: Prisma.messagesUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.messagesDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.messagesUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.messagesUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.MessagesAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.MessagesGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
        count: {
          args: Prisma.messagesCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<messages>
          payload: messagesPayload<ExtArgs>
        }
      }
      notifications: {
        findUnique: {
          args: Prisma.notificationsFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.notificationsFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.notificationsFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        create: {
          args: Prisma.notificationsCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.notificationsCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        delete: {
          args: Prisma.notificationsDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        update: {
          args: Prisma.notificationsUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.notificationsDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.notificationsUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.notificationsUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.NotificationsAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.NotificationsGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
        count: {
          args: Prisma.notificationsCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<notifications>
          payload: notificationsPayload<ExtArgs>
        }
      }
      payout_requests: {
        findUnique: {
          args: Prisma.payout_requestsFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.payout_requestsFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.payout_requestsFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.payout_requestsFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.payout_requestsFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        create: {
          args: Prisma.payout_requestsCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.payout_requestsCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        delete: {
          args: Prisma.payout_requestsDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        update: {
          args: Prisma.payout_requestsUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.payout_requestsDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.payout_requestsUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.payout_requestsUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.Payout_requestsAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.Payout_requestsGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
        count: {
          args: Prisma.payout_requestsCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<payout_requests>
          payload: payout_requestsPayload<ExtArgs>
        }
      }
      providers: {
        findUnique: {
          args: Prisma.providersFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.providersFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.providersFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.providersFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.providersFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        create: {
          args: Prisma.providersCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.providersCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        delete: {
          args: Prisma.providersDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        update: {
          args: Prisma.providersUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.providersDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.providersUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.providersUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.ProvidersAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.ProvidersGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
        count: {
          args: Prisma.providersCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<providers>
          payload: providersPayload<ExtArgs>
        }
      }
      schedules: {
        findUnique: {
          args: Prisma.schedulesFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.schedulesFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.schedulesFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.schedulesFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.schedulesFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        create: {
          args: Prisma.schedulesCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.schedulesCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        delete: {
          args: Prisma.schedulesDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        update: {
          args: Prisma.schedulesUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.schedulesDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.schedulesUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.schedulesUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.SchedulesAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.SchedulesGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
        count: {
          args: Prisma.schedulesCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<schedules>
          payload: schedulesPayload<ExtArgs>
        }
      }
      users: {
        findUnique: {
          args: Prisma.usersFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.usersFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.usersFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        create: {
          args: Prisma.usersCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.usersCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        delete: {
          args: Prisma.usersDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        update: {
          args: Prisma.usersUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.usersDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.usersUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.usersUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.UsersAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.UsersGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
        count: {
          args: Prisma.usersCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<users>
          payload: usersPayload<ExtArgs>
        }
      }
      vouchers: {
        findUnique: {
          args: Prisma.vouchersFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.vouchersFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.vouchersFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.vouchersFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.vouchersFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        create: {
          args: Prisma.vouchersCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.vouchersCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        delete: {
          args: Prisma.vouchersDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        update: {
          args: Prisma.vouchersUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.vouchersDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.vouchersUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.vouchersUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.VouchersAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.VouchersGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
        count: {
          args: Prisma.vouchersCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<vouchers>
          payload: vouchersPayload<ExtArgs>
        }
      }
      wallets: {
        findUnique: {
          args: Prisma.walletsFindUniqueArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.walletsFindUniqueOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.walletsFindFirstArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.walletsFindFirstOrThrowArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.walletsFindManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        create: {
          args: Prisma.walletsCreateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.walletsCreateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        delete: {
          args: Prisma.walletsDeleteArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        update: {
          args: Prisma.walletsUpdateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.walletsDeleteManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.walletsUpdateManyArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.walletsUpsertArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.WalletsAggregateArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.WalletsGroupByArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
        count: {
          args: Prisma.walletsCountArgs<ExtArgs>,
          result: $Utils.OptionalFlat<wallets>
          payload: walletsPayload<ExtArgs>
        }
      }
    }
  } & {
    other: {
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $executeRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
    }
  }
    export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type ConversationsCountOutputType
   */


  export type ConversationsCountOutputType = {
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }



  /**
   * Count Type ProvidersCountOutputType
   */


  export type ProvidersCountOutputType = {
    conversations: number
    payout_requests: number
    schedules: number
  }

  export type ProvidersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversations?: boolean | ProvidersCountOutputTypeCountConversationsArgs
    payout_requests?: boolean | ProvidersCountOutputTypeCountPayout_requestsArgs
    schedules?: boolean | ProvidersCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes

  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvidersCountOutputType
     */
    select?: ProvidersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }


  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountPayout_requestsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: payout_requestsWhereInput
  }


  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    conversations: number
    messages: number
    notifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversations?: boolean | UsersCountOutputTypeCountConversationsArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model categories
   */


  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    icon_url: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    icon_url: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    icon_url: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    icon_url?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    icon_url?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    icon_url?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: Enumerable<categoriesOrderByWithAggregationInput>
    by: CategoriesScalarFieldEnum[]
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }


  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    icon_url: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon_url?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    icon_url?: boolean
  }


  type categoriesGetPayload<S extends boolean | null | undefined | categoriesArgs> = $Types.GetResult<categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<categoriesFindManyArgs, 'select' | 'include'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categories'> extends True ? Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categories'> extends True ? Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends categoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends categoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends categoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Types.GetResult<categoriesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * categories base type for findUnique actions
   */
  export type categoriesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUnique
   */
  export interface categoriesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends categoriesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories base type for findFirst actions
   */
  export type categoriesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }

  /**
   * categories findFirst
   */
  export interface categoriesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends categoriesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }


  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: Enumerable<categoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
  }


  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }


  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
  }


  /**
   * categories without action
   */
  export type categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
  }



  /**
   * Model conversations
   */


  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    provider_id: number | null
  }

  export type ConversationsSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    provider_id: number | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    provider_id: number | null
    last_message: string | null
    updated_at: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    provider_id: number | null
    last_message: string | null
    updated_at: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    customer_id: number
    provider_id: number
    last_message: number
    updated_at: number
    _all: number
  }


  export type ConversationsAvgAggregateInputType = {
    id?: true
    customer_id?: true
    provider_id?: true
  }

  export type ConversationsSumAggregateInputType = {
    id?: true
    customer_id?: true
    provider_id?: true
  }

  export type ConversationsMinAggregateInputType = {
    id?: true
    customer_id?: true
    provider_id?: true
    last_message?: true
    updated_at?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    customer_id?: true
    provider_id?: true
    last_message?: true
    updated_at?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    customer_id?: true
    provider_id?: true
    last_message?: true
    updated_at?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: Enumerable<conversationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type ConversationsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: Enumerable<conversationsOrderByWithAggregationInput>
    by: ConversationsScalarFieldEnum[]
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _avg?: ConversationsAvgAggregateInputType
    _sum?: ConversationsSumAggregateInputType
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }


  export type ConversationsGroupByOutputType = {
    id: number
    customer_id: number
    provider_id: number
    last_message: string | null
    updated_at: Date | null
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    provider_id?: boolean
    last_message?: boolean
    updated_at?: boolean
    users?: boolean | usersArgs<ExtArgs>
    providers?: boolean | providersArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectScalar = {
    id?: boolean
    customer_id?: boolean
    provider_id?: boolean
    last_message?: boolean
    updated_at?: boolean
  }

  export type conversationsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | usersArgs<ExtArgs>
    providers?: boolean | providersArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeArgs<ExtArgs>
  }


  type conversationsGetPayload<S extends boolean | null | undefined | conversationsArgs> = $Types.GetResult<conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<conversationsFindManyArgs, 'select' | 'include'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends conversationsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'conversations'> extends True ? Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Conversations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends conversationsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'conversations'> extends True ? Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Conversations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends conversationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
    **/
    create<T extends conversationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>
    ): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Conversations.
     *     @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     *     @example
     *     // Create many Conversations
     *     const conversations = await prisma.conversations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends conversationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
    **/
    delete<T extends conversationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>
    ): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends conversationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>
    ): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends conversationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends conversationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
    **/
    upsert<T extends conversationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>
    ): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
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
      T extends ConversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationsGroupByArgs['orderBy'] }
        : { orderBy?: ConversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends usersArgs<ExtArgs> = {}>(args?: Subset<T, usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    providers<T extends providersArgs<ExtArgs> = {}>(args?: Subset<T, providersArgs<ExtArgs>>): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * conversations base type for findUnique actions
   */
  export type conversationsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUnique
   */
  export interface conversationsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends conversationsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }


  /**
   * conversations base type for findFirst actions
   */
  export type conversationsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: Enumerable<conversationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: Enumerable<ConversationsScalarFieldEnum>
  }

  /**
   * conversations findFirst
   */
  export interface conversationsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends conversationsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: Enumerable<conversationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: Enumerable<ConversationsScalarFieldEnum>
  }


  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: Enumerable<conversationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: Enumerable<ConversationsScalarFieldEnum>
  }


  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }


  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: Enumerable<conversationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }


  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
  }


  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }


  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }


  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
  }


  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: Enumerable<messagesOrderByWithRelationInput>
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }


  /**
   * conversations without action
   */
  export type conversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
  }



  /**
   * Model messages
   */


  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    conversation_id: number | null
    sender_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    conversation_id: number | null
    sender_id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    conversation_id: number | null
    sender_id: number | null
    content: string | null
    is_read: boolean | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    conversation_id: number | null
    sender_id: number | null
    content: string | null
    is_read: boolean | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    conversation_id: number
    sender_id: number
    content: number
    is_read: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
    content?: true
    is_read?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
    content?: true
    is_read?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    conversation_id?: true
    sender_id?: true
    content?: true
    is_read?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: Enumerable<messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: Enumerable<messagesOrderByWithAggregationInput>
    by: MessagesScalarFieldEnum[]
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }


  export type MessagesGroupByOutputType = {
    id: number
    conversation_id: number
    sender_id: number
    content: string | null
    is_read: boolean | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    content?: boolean
    is_read?: boolean
    conversations?: boolean | conversationsArgs<ExtArgs>
    users?: boolean | usersArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    content?: boolean
    is_read?: boolean
  }

  export type messagesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsArgs<ExtArgs>
    users?: boolean | usersArgs<ExtArgs>
  }


  type messagesGetPayload<S extends boolean | null | undefined | messagesArgs> = $Types.GetResult<messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<messagesFindManyArgs, 'select' | 'include'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends messagesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'messages'> extends True ? Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Messages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends messagesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'messages'> extends True ? Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Messages that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends messagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
    **/
    create<T extends messagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, messagesCreateArgs<ExtArgs>>
    ): Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const messages = await prisma.messages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends messagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
    **/
    delete<T extends messagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>
    ): Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends messagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>
    ): Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends messagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends messagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
    **/
    upsert<T extends messagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>
    ): Prisma__messagesClient<$Types.GetResult<messagesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    conversations<T extends conversationsArgs<ExtArgs> = {}>(args?: Subset<T, conversationsArgs<ExtArgs>>): Prisma__conversationsClient<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    users<T extends usersArgs<ExtArgs> = {}>(args?: Subset<T, usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * messages base type for findUnique actions
   */
  export type messagesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUnique
   */
  export interface messagesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends messagesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }


  /**
   * messages base type for findFirst actions
   */
  export type messagesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: Enumerable<messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }

  /**
   * messages findFirst
   */
  export interface messagesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends messagesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: Enumerable<messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }


  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: Enumerable<messagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }


  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }


  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: Enumerable<messagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }


  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
  }


  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }


  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }


  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
  }


  /**
   * messages without action
   */
  export type messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
  }



  /**
   * Model notifications
   */


  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    type: notifications_type | null
    is_read: boolean | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    type: notifications_type | null
    is_read: boolean | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    message: number
    type: number
    is_read: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: Enumerable<notificationsOrderByWithAggregationInput>
    by: NotificationsScalarFieldEnum[]
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }


  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number
    title: string | null
    message: string | null
    type: notifications_type | null
    is_read: boolean | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    users?: boolean | usersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
  }

  export type notificationsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | usersArgs<ExtArgs>
  }


  type notificationsGetPayload<S extends boolean | null | undefined | notificationsArgs> = $Types.GetResult<notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<notificationsFindManyArgs, 'select' | 'include'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends notificationsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'notifications'> extends True ? Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Notifications that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends notificationsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'notifications'> extends True ? Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Notifications that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends notificationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
    **/
    create<T extends notificationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>
    ): Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Notifications.
     *     @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notifications = await prisma.notifications.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends notificationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
    **/
    delete<T extends notificationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>
    ): Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends notificationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>
    ): Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends notificationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends notificationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
    **/
    upsert<T extends notificationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>
    ): Prisma__notificationsClient<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends usersArgs<ExtArgs> = {}>(args?: Subset<T, usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * notifications base type for findUnique actions
   */
  export type notificationsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUnique
   */
  export interface notificationsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends notificationsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }


  /**
   * notifications base type for findFirst actions
   */
  export type notificationsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }

  /**
   * notifications findFirst
   */
  export interface notificationsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends notificationsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }


  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }


  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }


  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: Enumerable<notificationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }


  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
  }


  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }


  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }


  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
  }


  /**
   * notifications without action
   */
  export type notificationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
  }



  /**
   * Model payout_requests
   */


  export type AggregatePayout_requests = {
    _count: Payout_requestsCountAggregateOutputType | null
    _avg: Payout_requestsAvgAggregateOutputType | null
    _sum: Payout_requestsSumAggregateOutputType | null
    _min: Payout_requestsMinAggregateOutputType | null
    _max: Payout_requestsMaxAggregateOutputType | null
  }

  export type Payout_requestsAvgAggregateOutputType = {
    id: number | null
    provider_id: number | null
    amount: Decimal | null
  }

  export type Payout_requestsSumAggregateOutputType = {
    id: number | null
    provider_id: number | null
    amount: Decimal | null
  }

  export type Payout_requestsMinAggregateOutputType = {
    id: number | null
    provider_id: number | null
    amount: Decimal | null
    status: payout_requests_status | null
  }

  export type Payout_requestsMaxAggregateOutputType = {
    id: number | null
    provider_id: number | null
    amount: Decimal | null
    status: payout_requests_status | null
  }

  export type Payout_requestsCountAggregateOutputType = {
    id: number
    provider_id: number
    amount: number
    bank_info: number
    status: number
    _all: number
  }


  export type Payout_requestsAvgAggregateInputType = {
    id?: true
    provider_id?: true
    amount?: true
  }

  export type Payout_requestsSumAggregateInputType = {
    id?: true
    provider_id?: true
    amount?: true
  }

  export type Payout_requestsMinAggregateInputType = {
    id?: true
    provider_id?: true
    amount?: true
    status?: true
  }

  export type Payout_requestsMaxAggregateInputType = {
    id?: true
    provider_id?: true
    amount?: true
    status?: true
  }

  export type Payout_requestsCountAggregateInputType = {
    id?: true
    provider_id?: true
    amount?: true
    bank_info?: true
    status?: true
    _all?: true
  }

  export type Payout_requestsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which payout_requests to aggregate.
     */
    where?: payout_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payout_requests to fetch.
     */
    orderBy?: Enumerable<payout_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payout_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payout_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payout_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payout_requests
    **/
    _count?: true | Payout_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payout_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payout_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payout_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payout_requestsMaxAggregateInputType
  }

  export type GetPayout_requestsAggregateType<T extends Payout_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayout_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayout_requests[P]>
      : GetScalarType<T[P], AggregatePayout_requests[P]>
  }




  export type Payout_requestsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: payout_requestsWhereInput
    orderBy?: Enumerable<payout_requestsOrderByWithAggregationInput>
    by: Payout_requestsScalarFieldEnum[]
    having?: payout_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payout_requestsCountAggregateInputType | true
    _avg?: Payout_requestsAvgAggregateInputType
    _sum?: Payout_requestsSumAggregateInputType
    _min?: Payout_requestsMinAggregateInputType
    _max?: Payout_requestsMaxAggregateInputType
  }


  export type Payout_requestsGroupByOutputType = {
    id: number
    provider_id: number
    amount: Decimal
    bank_info: JsonValue | null
    status: payout_requests_status | null
    _count: Payout_requestsCountAggregateOutputType | null
    _avg: Payout_requestsAvgAggregateOutputType | null
    _sum: Payout_requestsSumAggregateOutputType | null
    _min: Payout_requestsMinAggregateOutputType | null
    _max: Payout_requestsMaxAggregateOutputType | null
  }

  type GetPayout_requestsGroupByPayload<T extends Payout_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Payout_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payout_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payout_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Payout_requestsGroupByOutputType[P]>
        }
      >
    >


  export type payout_requestsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider_id?: boolean
    amount?: boolean
    bank_info?: boolean
    status?: boolean
    providers?: boolean | providersArgs<ExtArgs>
  }, ExtArgs["result"]["payout_requests"]>

  export type payout_requestsSelectScalar = {
    id?: boolean
    provider_id?: boolean
    amount?: boolean
    bank_info?: boolean
    status?: boolean
  }

  export type payout_requestsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    providers?: boolean | providersArgs<ExtArgs>
  }


  type payout_requestsGetPayload<S extends boolean | null | undefined | payout_requestsArgs> = $Types.GetResult<payout_requestsPayload, S>

  type payout_requestsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<payout_requestsFindManyArgs, 'select' | 'include'> & {
      select?: Payout_requestsCountAggregateInputType | true
    }

  export interface payout_requestsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payout_requests'], meta: { name: 'payout_requests' } }
    /**
     * Find zero or one Payout_requests that matches the filter.
     * @param {payout_requestsFindUniqueArgs} args - Arguments to find a Payout_requests
     * @example
     * // Get one Payout_requests
     * const payout_requests = await prisma.payout_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends payout_requestsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, payout_requestsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'payout_requests'> extends True ? Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Payout_requests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {payout_requestsFindUniqueOrThrowArgs} args - Arguments to find a Payout_requests
     * @example
     * // Get one Payout_requests
     * const payout_requests = await prisma.payout_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends payout_requestsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payout_requestsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Payout_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payout_requestsFindFirstArgs} args - Arguments to find a Payout_requests
     * @example
     * // Get one Payout_requests
     * const payout_requests = await prisma.payout_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends payout_requestsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, payout_requestsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'payout_requests'> extends True ? Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Payout_requests that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payout_requestsFindFirstOrThrowArgs} args - Arguments to find a Payout_requests
     * @example
     * // Get one Payout_requests
     * const payout_requests = await prisma.payout_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends payout_requestsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payout_requestsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Payout_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payout_requestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payout_requests
     * const payout_requests = await prisma.payout_requests.findMany()
     * 
     * // Get first 10 Payout_requests
     * const payout_requests = await prisma.payout_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payout_requestsWithIdOnly = await prisma.payout_requests.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends payout_requestsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payout_requestsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Payout_requests.
     * @param {payout_requestsCreateArgs} args - Arguments to create a Payout_requests.
     * @example
     * // Create one Payout_requests
     * const Payout_requests = await prisma.payout_requests.create({
     *   data: {
     *     // ... data to create a Payout_requests
     *   }
     * })
     * 
    **/
    create<T extends payout_requestsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payout_requestsCreateArgs<ExtArgs>>
    ): Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Payout_requests.
     *     @param {payout_requestsCreateManyArgs} args - Arguments to create many Payout_requests.
     *     @example
     *     // Create many Payout_requests
     *     const payout_requests = await prisma.payout_requests.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends payout_requestsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payout_requestsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payout_requests.
     * @param {payout_requestsDeleteArgs} args - Arguments to delete one Payout_requests.
     * @example
     * // Delete one Payout_requests
     * const Payout_requests = await prisma.payout_requests.delete({
     *   where: {
     *     // ... filter to delete one Payout_requests
     *   }
     * })
     * 
    **/
    delete<T extends payout_requestsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payout_requestsDeleteArgs<ExtArgs>>
    ): Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Payout_requests.
     * @param {payout_requestsUpdateArgs} args - Arguments to update one Payout_requests.
     * @example
     * // Update one Payout_requests
     * const payout_requests = await prisma.payout_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends payout_requestsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payout_requestsUpdateArgs<ExtArgs>>
    ): Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Payout_requests.
     * @param {payout_requestsDeleteManyArgs} args - Arguments to filter Payout_requests to delete.
     * @example
     * // Delete a few Payout_requests
     * const { count } = await prisma.payout_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends payout_requestsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payout_requestsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payout_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payout_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payout_requests
     * const payout_requests = await prisma.payout_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends payout_requestsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payout_requestsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payout_requests.
     * @param {payout_requestsUpsertArgs} args - Arguments to update or create a Payout_requests.
     * @example
     * // Update or create a Payout_requests
     * const payout_requests = await prisma.payout_requests.upsert({
     *   create: {
     *     // ... data to create a Payout_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payout_requests we want to update
     *   }
     * })
    **/
    upsert<T extends payout_requestsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payout_requestsUpsertArgs<ExtArgs>>
    ): Prisma__payout_requestsClient<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Payout_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payout_requestsCountArgs} args - Arguments to filter Payout_requests to count.
     * @example
     * // Count the number of Payout_requests
     * const count = await prisma.payout_requests.count({
     *   where: {
     *     // ... the filter for the Payout_requests we want to count
     *   }
     * })
    **/
    count<T extends payout_requestsCountArgs>(
      args?: Subset<T, payout_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payout_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payout_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payout_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payout_requestsAggregateArgs>(args: Subset<T, Payout_requestsAggregateArgs>): Prisma.PrismaPromise<GetPayout_requestsAggregateType<T>>

    /**
     * Group by Payout_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payout_requestsGroupByArgs} args - Group by arguments.
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
      T extends Payout_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Payout_requestsGroupByArgs['orderBy'] }
        : { orderBy?: Payout_requestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Payout_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayout_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for payout_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__payout_requestsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    providers<T extends providersArgs<ExtArgs> = {}>(args?: Subset<T, providersArgs<ExtArgs>>): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * payout_requests base type for findUnique actions
   */
  export type payout_requestsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payout_requests to fetch.
     */
    where: payout_requestsWhereUniqueInput
  }

  /**
   * payout_requests findUnique
   */
  export interface payout_requestsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends payout_requestsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * payout_requests findUniqueOrThrow
   */
  export type payout_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payout_requests to fetch.
     */
    where: payout_requestsWhereUniqueInput
  }


  /**
   * payout_requests base type for findFirst actions
   */
  export type payout_requestsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payout_requests to fetch.
     */
    where?: payout_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payout_requests to fetch.
     */
    orderBy?: Enumerable<payout_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payout_requests.
     */
    cursor?: payout_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payout_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payout_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payout_requests.
     */
    distinct?: Enumerable<Payout_requestsScalarFieldEnum>
  }

  /**
   * payout_requests findFirst
   */
  export interface payout_requestsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends payout_requestsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * payout_requests findFirstOrThrow
   */
  export type payout_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payout_requests to fetch.
     */
    where?: payout_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payout_requests to fetch.
     */
    orderBy?: Enumerable<payout_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payout_requests.
     */
    cursor?: payout_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payout_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payout_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payout_requests.
     */
    distinct?: Enumerable<Payout_requestsScalarFieldEnum>
  }


  /**
   * payout_requests findMany
   */
  export type payout_requestsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * Filter, which payout_requests to fetch.
     */
    where?: payout_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payout_requests to fetch.
     */
    orderBy?: Enumerable<payout_requestsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payout_requests.
     */
    cursor?: payout_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payout_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payout_requests.
     */
    skip?: number
    distinct?: Enumerable<Payout_requestsScalarFieldEnum>
  }


  /**
   * payout_requests create
   */
  export type payout_requestsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a payout_requests.
     */
    data: XOR<payout_requestsCreateInput, payout_requestsUncheckedCreateInput>
  }


  /**
   * payout_requests createMany
   */
  export type payout_requestsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payout_requests.
     */
    data: Enumerable<payout_requestsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * payout_requests update
   */
  export type payout_requestsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a payout_requests.
     */
    data: XOR<payout_requestsUpdateInput, payout_requestsUncheckedUpdateInput>
    /**
     * Choose, which payout_requests to update.
     */
    where: payout_requestsWhereUniqueInput
  }


  /**
   * payout_requests updateMany
   */
  export type payout_requestsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payout_requests.
     */
    data: XOR<payout_requestsUpdateManyMutationInput, payout_requestsUncheckedUpdateManyInput>
    /**
     * Filter which payout_requests to update
     */
    where?: payout_requestsWhereInput
  }


  /**
   * payout_requests upsert
   */
  export type payout_requestsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the payout_requests to update in case it exists.
     */
    where: payout_requestsWhereUniqueInput
    /**
     * In case the payout_requests found by the `where` argument doesn't exist, create a new payout_requests with this data.
     */
    create: XOR<payout_requestsCreateInput, payout_requestsUncheckedCreateInput>
    /**
     * In case the payout_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payout_requestsUpdateInput, payout_requestsUncheckedUpdateInput>
  }


  /**
   * payout_requests delete
   */
  export type payout_requestsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    /**
     * Filter which payout_requests to delete.
     */
    where: payout_requestsWhereUniqueInput
  }


  /**
   * payout_requests deleteMany
   */
  export type payout_requestsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which payout_requests to delete
     */
    where?: payout_requestsWhereInput
  }


  /**
   * payout_requests without action
   */
  export type payout_requestsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
  }



  /**
   * Model providers
   */


  export type AggregateProviders = {
    _count: ProvidersCountAggregateOutputType | null
    _avg: ProvidersAvgAggregateOutputType | null
    _sum: ProvidersSumAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  export type ProvidersAvgAggregateOutputType = {
    user_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    trust_score: Decimal | null
  }

  export type ProvidersSumAggregateOutputType = {
    user_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    trust_score: Decimal | null
  }

  export type ProvidersMinAggregateOutputType = {
    user_id: number | null
    business_name: string | null
    description: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    kyc_status: providers_kyc_status | null
    trust_score: Decimal | null
  }

  export type ProvidersMaxAggregateOutputType = {
    user_id: number | null
    business_name: string | null
    description: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    kyc_status: providers_kyc_status | null
    trust_score: Decimal | null
  }

  export type ProvidersCountAggregateOutputType = {
    user_id: number
    business_name: number
    description: number
    address: number
    latitude: number
    longitude: number
    kyc_status: number
    trust_score: number
    _all: number
  }


  export type ProvidersAvgAggregateInputType = {
    user_id?: true
    latitude?: true
    longitude?: true
    trust_score?: true
  }

  export type ProvidersSumAggregateInputType = {
    user_id?: true
    latitude?: true
    longitude?: true
    trust_score?: true
  }

  export type ProvidersMinAggregateInputType = {
    user_id?: true
    business_name?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    kyc_status?: true
    trust_score?: true
  }

  export type ProvidersMaxAggregateInputType = {
    user_id?: true
    business_name?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    kyc_status?: true
    trust_score?: true
  }

  export type ProvidersCountAggregateInputType = {
    user_id?: true
    business_name?: true
    description?: true
    address?: true
    latitude?: true
    longitude?: true
    kyc_status?: true
    trust_score?: true
    _all?: true
  }

  export type ProvidersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to aggregate.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned providers
    **/
    _count?: true | ProvidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvidersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvidersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvidersMaxAggregateInputType
  }

  export type GetProvidersAggregateType<T extends ProvidersAggregateArgs> = {
        [P in keyof T & keyof AggregateProviders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviders[P]>
      : GetScalarType<T[P], AggregateProviders[P]>
  }




  export type ProvidersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: providersWhereInput
    orderBy?: Enumerable<providersOrderByWithAggregationInput>
    by: ProvidersScalarFieldEnum[]
    having?: providersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvidersCountAggregateInputType | true
    _avg?: ProvidersAvgAggregateInputType
    _sum?: ProvidersSumAggregateInputType
    _min?: ProvidersMinAggregateInputType
    _max?: ProvidersMaxAggregateInputType
  }


  export type ProvidersGroupByOutputType = {
    user_id: number
    business_name: string | null
    description: string | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    kyc_status: providers_kyc_status | null
    trust_score: Decimal | null
    _count: ProvidersCountAggregateOutputType | null
    _avg: ProvidersAvgAggregateOutputType | null
    _sum: ProvidersSumAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  type GetProvidersGroupByPayload<T extends ProvidersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProvidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
            : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
        }
      >
    >


  export type providersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    business_name?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    kyc_status?: boolean
    trust_score?: boolean
    conversations?: boolean | providers$conversationsArgs<ExtArgs>
    payout_requests?: boolean | providers$payout_requestsArgs<ExtArgs>
    users?: boolean | usersArgs<ExtArgs>
    schedules?: boolean | providers$schedulesArgs<ExtArgs>
    wallets?: boolean | walletsArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["providers"]>

  export type providersSelectScalar = {
    user_id?: boolean
    business_name?: boolean
    description?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    kyc_status?: boolean
    trust_score?: boolean
  }

  export type providersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversations?: boolean | providers$conversationsArgs<ExtArgs>
    payout_requests?: boolean | providers$payout_requestsArgs<ExtArgs>
    users?: boolean | usersArgs<ExtArgs>
    schedules?: boolean | providers$schedulesArgs<ExtArgs>
    wallets?: boolean | walletsArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeArgs<ExtArgs>
  }


  type providersGetPayload<S extends boolean | null | undefined | providersArgs> = $Types.GetResult<providersPayload, S>

  type providersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<providersFindManyArgs, 'select' | 'include'> & {
      select?: ProvidersCountAggregateInputType | true
    }

  export interface providersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['providers'], meta: { name: 'providers' } }
    /**
     * Find zero or one Providers that matches the filter.
     * @param {providersFindUniqueArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends providersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, providersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'providers'> extends True ? Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Providers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {providersFindUniqueOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends providersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, providersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends providersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, providersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'providers'> extends True ? Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Providers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends providersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, providersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.providers.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.providers.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const providersWithUser_idOnly = await prisma.providers.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends providersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, providersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<providersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Providers.
     * @param {providersCreateArgs} args - Arguments to create a Providers.
     * @example
     * // Create one Providers
     * const Providers = await prisma.providers.create({
     *   data: {
     *     // ... data to create a Providers
     *   }
     * })
     * 
    **/
    create<T extends providersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, providersCreateArgs<ExtArgs>>
    ): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Providers.
     *     @param {providersCreateManyArgs} args - Arguments to create many Providers.
     *     @example
     *     // Create many Providers
     *     const providers = await prisma.providers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends providersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, providersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Providers.
     * @param {providersDeleteArgs} args - Arguments to delete one Providers.
     * @example
     * // Delete one Providers
     * const Providers = await prisma.providers.delete({
     *   where: {
     *     // ... filter to delete one Providers
     *   }
     * })
     * 
    **/
    delete<T extends providersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, providersDeleteArgs<ExtArgs>>
    ): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Providers.
     * @param {providersUpdateArgs} args - Arguments to update one Providers.
     * @example
     * // Update one Providers
     * const providers = await prisma.providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends providersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, providersUpdateArgs<ExtArgs>>
    ): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Providers.
     * @param {providersDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends providersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, providersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends providersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, providersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Providers.
     * @param {providersUpsertArgs} args - Arguments to update or create a Providers.
     * @example
     * // Update or create a Providers
     * const providers = await prisma.providers.upsert({
     *   create: {
     *     // ... data to create a Providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Providers we want to update
     *   }
     * })
    **/
    upsert<T extends providersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, providersUpsertArgs<ExtArgs>>
    ): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.providers.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends providersCountArgs>(
      args?: Subset<T, providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvidersAggregateArgs>(args: Subset<T, ProvidersAggregateArgs>): Prisma.PrismaPromise<GetProvidersAggregateType<T>>

    /**
     * Group by Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersGroupByArgs} args - Group by arguments.
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
      T extends ProvidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvidersGroupByArgs['orderBy'] }
        : { orderBy?: ProvidersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProvidersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__providersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    conversations<T extends providers$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, providers$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    payout_requests<T extends providers$payout_requestsArgs<ExtArgs> = {}>(args?: Subset<T, providers$payout_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<payout_requestsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    users<T extends usersArgs<ExtArgs> = {}>(args?: Subset<T, usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    schedules<T extends providers$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, providers$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    wallets<T extends walletsArgs<ExtArgs> = {}>(args?: Subset<T, walletsArgs<ExtArgs>>): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * providers base type for findUnique actions
   */
  export type providersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers findUnique
   */
  export interface providersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends providersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * providers findUniqueOrThrow
   */
  export type providersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }


  /**
   * providers base type for findFirst actions
   */
  export type providersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: Enumerable<ProvidersScalarFieldEnum>
  }

  /**
   * providers findFirst
   */
  export interface providersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends providersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * providers findFirstOrThrow
   */
  export type providersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: Enumerable<ProvidersScalarFieldEnum>
  }


  /**
   * providers findMany
   */
  export type providersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: Enumerable<providersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    distinct?: Enumerable<ProvidersScalarFieldEnum>
  }


  /**
   * providers create
   */
  export type providersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The data needed to create a providers.
     */
    data: XOR<providersCreateInput, providersUncheckedCreateInput>
  }


  /**
   * providers createMany
   */
  export type providersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many providers.
     */
    data: Enumerable<providersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * providers update
   */
  export type providersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The data needed to update a providers.
     */
    data: XOR<providersUpdateInput, providersUncheckedUpdateInput>
    /**
     * Choose, which providers to update.
     */
    where: providersWhereUniqueInput
  }


  /**
   * providers updateMany
   */
  export type providersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update providers.
     */
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyInput>
    /**
     * Filter which providers to update
     */
    where?: providersWhereInput
  }


  /**
   * providers upsert
   */
  export type providersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The filter to search for the providers to update in case it exists.
     */
    where: providersWhereUniqueInput
    /**
     * In case the providers found by the `where` argument doesn't exist, create a new providers with this data.
     */
    create: XOR<providersCreateInput, providersUncheckedCreateInput>
    /**
     * In case the providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providersUpdateInput, providersUncheckedUpdateInput>
  }


  /**
   * providers delete
   */
  export type providersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter which providers to delete.
     */
    where: providersWhereUniqueInput
  }


  /**
   * providers deleteMany
   */
  export type providersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to delete
     */
    where?: providersWhereInput
  }


  /**
   * providers.conversations
   */
  export type providers$conversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: Enumerable<conversationsOrderByWithRelationInput>
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ConversationsScalarFieldEnum>
  }


  /**
   * providers.payout_requests
   */
  export type providers$payout_requestsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payout_requests
     */
    select?: payout_requestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payout_requestsInclude<ExtArgs> | null
    where?: payout_requestsWhereInput
    orderBy?: Enumerable<payout_requestsOrderByWithRelationInput>
    cursor?: payout_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Payout_requestsScalarFieldEnum>
  }


  /**
   * providers.schedules
   */
  export type providers$schedulesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    where?: schedulesWhereInput
    orderBy?: Enumerable<schedulesOrderByWithRelationInput>
    cursor?: schedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SchedulesScalarFieldEnum>
  }


  /**
   * providers without action
   */
  export type providersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: providersInclude<ExtArgs> | null
  }



  /**
   * Model schedules
   */


  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesAvgAggregateOutputType = {
    id: number | null
    provider_id: number | null
    day_of_week: number | null
  }

  export type SchedulesSumAggregateOutputType = {
    id: number | null
    provider_id: number | null
    day_of_week: number | null
  }

  export type SchedulesMinAggregateOutputType = {
    id: number | null
    provider_id: number | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
    is_day_off: boolean | null
  }

  export type SchedulesMaxAggregateOutputType = {
    id: number | null
    provider_id: number | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
    is_day_off: boolean | null
  }

  export type SchedulesCountAggregateOutputType = {
    id: number
    provider_id: number
    day_of_week: number
    start_time: number
    end_time: number
    is_day_off: number
    _all: number
  }


  export type SchedulesAvgAggregateInputType = {
    id?: true
    provider_id?: true
    day_of_week?: true
  }

  export type SchedulesSumAggregateInputType = {
    id?: true
    provider_id?: true
    day_of_week?: true
  }

  export type SchedulesMinAggregateInputType = {
    id?: true
    provider_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    is_day_off?: true
  }

  export type SchedulesMaxAggregateInputType = {
    id?: true
    provider_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    is_day_off?: true
  }

  export type SchedulesCountAggregateInputType = {
    id?: true
    provider_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    is_day_off?: true
    _all?: true
  }

  export type SchedulesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to aggregate.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: Enumerable<schedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type SchedulesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: schedulesWhereInput
    orderBy?: Enumerable<schedulesOrderByWithAggregationInput>
    by: SchedulesScalarFieldEnum[]
    having?: schedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _avg?: SchedulesAvgAggregateInputType
    _sum?: SchedulesSumAggregateInputType
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }


  export type SchedulesGroupByOutputType = {
    id: number
    provider_id: number
    day_of_week: number
    start_time: Date
    end_time: Date
    is_day_off: boolean | null
    _count: SchedulesCountAggregateOutputType | null
    _avg: SchedulesAvgAggregateOutputType | null
    _sum: SchedulesSumAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends SchedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type schedulesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    is_day_off?: boolean
    providers?: boolean | providersArgs<ExtArgs>
  }, ExtArgs["result"]["schedules"]>

  export type schedulesSelectScalar = {
    id?: boolean
    provider_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    is_day_off?: boolean
  }

  export type schedulesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    providers?: boolean | providersArgs<ExtArgs>
  }


  type schedulesGetPayload<S extends boolean | null | undefined | schedulesArgs> = $Types.GetResult<schedulesPayload, S>

  type schedulesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<schedulesFindManyArgs, 'select' | 'include'> & {
      select?: SchedulesCountAggregateInputType | true
    }

  export interface schedulesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedules'], meta: { name: 'schedules' } }
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {schedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends schedulesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, schedulesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'schedules'> extends True ? Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Schedules that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {schedulesFindUniqueOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends schedulesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schedulesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends schedulesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, schedulesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'schedules'> extends True ? Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Schedules that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindFirstOrThrowArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends schedulesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schedulesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulesWithIdOnly = await prisma.schedules.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends schedulesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schedulesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Schedules.
     * @param {schedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
    **/
    create<T extends schedulesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schedulesCreateArgs<ExtArgs>>
    ): Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Schedules.
     *     @param {schedulesCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedules = await prisma.schedules.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends schedulesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schedulesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedules.
     * @param {schedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
    **/
    delete<T extends schedulesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schedulesDeleteArgs<ExtArgs>>
    ): Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Schedules.
     * @param {schedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends schedulesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schedulesUpdateArgs<ExtArgs>>
    ): Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Schedules.
     * @param {schedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends schedulesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schedulesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends schedulesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schedulesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedules.
     * @param {schedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
    **/
    upsert<T extends schedulesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schedulesUpsertArgs<ExtArgs>>
    ): Prisma__schedulesClient<$Types.GetResult<schedulesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends schedulesCountArgs>(
      args?: Subset<T, schedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): Prisma.PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesGroupByArgs} args - Group by arguments.
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
      T extends SchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulesGroupByArgs['orderBy'] }
        : { orderBy?: SchedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__schedulesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    providers<T extends providersArgs<ExtArgs> = {}>(args?: Subset<T, providersArgs<ExtArgs>>): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * schedules base type for findUnique actions
   */
  export type schedulesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }

  /**
   * schedules findUnique
   */
  export interface schedulesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends schedulesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * schedules findUniqueOrThrow
   */
  export type schedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where: schedulesWhereUniqueInput
  }


  /**
   * schedules base type for findFirst actions
   */
  export type schedulesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: Enumerable<schedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: Enumerable<SchedulesScalarFieldEnum>
  }

  /**
   * schedules findFirst
   */
  export interface schedulesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends schedulesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * schedules findFirstOrThrow
   */
  export type schedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: Enumerable<schedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: Enumerable<SchedulesScalarFieldEnum>
  }


  /**
   * schedules findMany
   */
  export type schedulesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: Enumerable<schedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: Enumerable<SchedulesScalarFieldEnum>
  }


  /**
   * schedules create
   */
  export type schedulesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a schedules.
     */
    data: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
  }


  /**
   * schedules createMany
   */
  export type schedulesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: Enumerable<schedulesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * schedules update
   */
  export type schedulesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a schedules.
     */
    data: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
    /**
     * Choose, which schedules to update.
     */
    where: schedulesWhereUniqueInput
  }


  /**
   * schedules updateMany
   */
  export type schedulesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: schedulesWhereInput
  }


  /**
   * schedules upsert
   */
  export type schedulesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the schedules to update in case it exists.
     */
    where: schedulesWhereUniqueInput
    /**
     * In case the schedules found by the `where` argument doesn't exist, create a new schedules with this data.
     */
    create: XOR<schedulesCreateInput, schedulesUncheckedCreateInput>
    /**
     * In case the schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schedulesUpdateInput, schedulesUncheckedUpdateInput>
  }


  /**
   * schedules delete
   */
  export type schedulesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
    /**
     * Filter which schedules to delete.
     */
    where: schedulesWhereUniqueInput
  }


  /**
   * schedules deleteMany
   */
  export type schedulesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: schedulesWhereInput
  }


  /**
   * schedules without action
   */
  export type schedulesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedules
     */
    select?: schedulesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schedulesInclude<ExtArgs> | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    full_name: string | null
    phone: string | null
    avatar_url: string | null
    role: users_role | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    full_name: string | null
    phone: string | null
    avatar_url: string | null
    role: users_role | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    full_name: number
    phone: number
    avatar_url: number
    role: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    full_name?: true
    phone?: true
    avatar_url?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    full_name?: true
    phone?: true
    avatar_url?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    full_name?: true
    phone?: true
    avatar_url?: true
    role?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    full_name: string
    phone: string | null
    avatar_url: string | null
    role: users_role | null
    is_active: boolean | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    full_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    conversations?: boolean | users$conversationsArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    providers?: boolean | providersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    full_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversations?: boolean | users$conversationsArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    providers?: boolean | providersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeArgs<ExtArgs>
  }


  type usersGetPayload<S extends boolean | null | undefined | usersArgs> = $Types.GetResult<usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<usersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    conversations<T extends users$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, users$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<conversationsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<messagesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<notificationsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    providers<T extends providersArgs<ExtArgs> = {}>(args?: Subset<T, providersArgs<ExtArgs>>): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends usersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends usersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.conversations
   */
  export type users$conversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: Enumerable<conversationsOrderByWithRelationInput>
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ConversationsScalarFieldEnum>
  }


  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: Enumerable<messagesOrderByWithRelationInput>
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessagesScalarFieldEnum>
  }


  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: Enumerable<notificationsOrderByWithRelationInput>
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NotificationsScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model vouchers
   */


  export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  export type VouchersAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
    min_order_price: Decimal | null
    owner_id: number | null
  }

  export type VouchersSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
    min_order_price: Decimal | null
    owner_id: number | null
  }

  export type VouchersMinAggregateOutputType = {
    id: number | null
    code: string | null
    discount_type: vouchers_discount_type | null
    value: Decimal | null
    min_order_price: Decimal | null
    owner_id: number | null
  }

  export type VouchersMaxAggregateOutputType = {
    id: number | null
    code: string | null
    discount_type: vouchers_discount_type | null
    value: Decimal | null
    min_order_price: Decimal | null
    owner_id: number | null
  }

  export type VouchersCountAggregateOutputType = {
    id: number
    code: number
    discount_type: number
    value: number
    min_order_price: number
    owner_id: number
    _all: number
  }


  export type VouchersAvgAggregateInputType = {
    id?: true
    value?: true
    min_order_price?: true
    owner_id?: true
  }

  export type VouchersSumAggregateInputType = {
    id?: true
    value?: true
    min_order_price?: true
    owner_id?: true
  }

  export type VouchersMinAggregateInputType = {
    id?: true
    code?: true
    discount_type?: true
    value?: true
    min_order_price?: true
    owner_id?: true
  }

  export type VouchersMaxAggregateInputType = {
    id?: true
    code?: true
    discount_type?: true
    value?: true
    min_order_price?: true
    owner_id?: true
  }

  export type VouchersCountAggregateInputType = {
    id?: true
    code?: true
    discount_type?: true
    value?: true
    min_order_price?: true
    owner_id?: true
    _all?: true
  }

  export type VouchersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to aggregate.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: Enumerable<vouchersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vouchers
    **/
    _count?: true | VouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchersMaxAggregateInputType
  }

  export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouchers[P]>
      : GetScalarType<T[P], AggregateVouchers[P]>
  }




  export type VouchersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: vouchersWhereInput
    orderBy?: Enumerable<vouchersOrderByWithAggregationInput>
    by: VouchersScalarFieldEnum[]
    having?: vouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchersCountAggregateInputType | true
    _avg?: VouchersAvgAggregateInputType
    _sum?: VouchersSumAggregateInputType
    _min?: VouchersMinAggregateInputType
    _max?: VouchersMaxAggregateInputType
  }


  export type VouchersGroupByOutputType = {
    id: number
    code: string
    discount_type: vouchers_discount_type
    value: Decimal
    min_order_price: Decimal | null
    owner_id: number | null
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  type GetVouchersGroupByPayload<T extends VouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchersGroupByOutputType[P]>
            : GetScalarType<T[P], VouchersGroupByOutputType[P]>
        }
      >
    >


  export type vouchersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount_type?: boolean
    value?: boolean
    min_order_price?: boolean
    owner_id?: boolean
  }, ExtArgs["result"]["vouchers"]>

  export type vouchersSelectScalar = {
    id?: boolean
    code?: boolean
    discount_type?: boolean
    value?: boolean
    min_order_price?: boolean
    owner_id?: boolean
  }


  type vouchersGetPayload<S extends boolean | null | undefined | vouchersArgs> = $Types.GetResult<vouchersPayload, S>

  type vouchersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<vouchersFindManyArgs, 'select' | 'include'> & {
      select?: VouchersCountAggregateInputType | true
    }

  export interface vouchersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vouchers'], meta: { name: 'vouchers' } }
    /**
     * Find zero or one Vouchers that matches the filter.
     * @param {vouchersFindUniqueArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends vouchersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, vouchersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'vouchers'> extends True ? Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Vouchers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {vouchersFindUniqueOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends vouchersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vouchersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends vouchersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, vouchersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'vouchers'> extends True ? Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Vouchers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindFirstOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends vouchersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vouchersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.vouchers.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.vouchers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vouchersWithIdOnly = await prisma.vouchers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends vouchersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vouchersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Vouchers.
     * @param {vouchersCreateArgs} args - Arguments to create a Vouchers.
     * @example
     * // Create one Vouchers
     * const Vouchers = await prisma.vouchers.create({
     *   data: {
     *     // ... data to create a Vouchers
     *   }
     * })
     * 
    **/
    create<T extends vouchersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vouchersCreateArgs<ExtArgs>>
    ): Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Vouchers.
     *     @param {vouchersCreateManyArgs} args - Arguments to create many Vouchers.
     *     @example
     *     // Create many Vouchers
     *     const vouchers = await prisma.vouchers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends vouchersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vouchersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vouchers.
     * @param {vouchersDeleteArgs} args - Arguments to delete one Vouchers.
     * @example
     * // Delete one Vouchers
     * const Vouchers = await prisma.vouchers.delete({
     *   where: {
     *     // ... filter to delete one Vouchers
     *   }
     * })
     * 
    **/
    delete<T extends vouchersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vouchersDeleteArgs<ExtArgs>>
    ): Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Vouchers.
     * @param {vouchersUpdateArgs} args - Arguments to update one Vouchers.
     * @example
     * // Update one Vouchers
     * const vouchers = await prisma.vouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends vouchersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vouchersUpdateArgs<ExtArgs>>
    ): Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Vouchers.
     * @param {vouchersDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.vouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends vouchersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vouchersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends vouchersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vouchersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vouchers.
     * @param {vouchersUpsertArgs} args - Arguments to update or create a Vouchers.
     * @example
     * // Update or create a Vouchers
     * const vouchers = await prisma.vouchers.upsert({
     *   create: {
     *     // ... data to create a Vouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouchers we want to update
     *   }
     * })
    **/
    upsert<T extends vouchersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vouchersUpsertArgs<ExtArgs>>
    ): Prisma__vouchersClient<$Types.GetResult<vouchersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vouchersCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.vouchers.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends vouchersCountArgs>(
      args?: Subset<T, vouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VouchersAggregateArgs>(args: Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>

    /**
     * Group by Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersGroupByArgs} args - Group by arguments.
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
      T extends VouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VouchersGroupByArgs['orderBy'] }
        : { orderBy?: VouchersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for vouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__vouchersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * vouchers base type for findUnique actions
   */
  export type vouchersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }

  /**
   * vouchers findUnique
   */
  export interface vouchersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends vouchersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * vouchers findUniqueOrThrow
   */
  export type vouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where: vouchersWhereUniqueInput
  }


  /**
   * vouchers base type for findFirst actions
   */
  export type vouchersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: Enumerable<vouchersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: Enumerable<VouchersScalarFieldEnum>
  }

  /**
   * vouchers findFirst
   */
  export interface vouchersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends vouchersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * vouchers findFirstOrThrow
   */
  export type vouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: Enumerable<vouchersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vouchers.
     */
    distinct?: Enumerable<VouchersScalarFieldEnum>
  }


  /**
   * vouchers findMany
   */
  export type vouchersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Filter, which vouchers to fetch.
     */
    where?: vouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vouchers to fetch.
     */
    orderBy?: Enumerable<vouchersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vouchers.
     */
    cursor?: vouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vouchers.
     */
    skip?: number
    distinct?: Enumerable<VouchersScalarFieldEnum>
  }


  /**
   * vouchers create
   */
  export type vouchersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * The data needed to create a vouchers.
     */
    data: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
  }


  /**
   * vouchers createMany
   */
  export type vouchersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vouchers.
     */
    data: Enumerable<vouchersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * vouchers update
   */
  export type vouchersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * The data needed to update a vouchers.
     */
    data: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
    /**
     * Choose, which vouchers to update.
     */
    where: vouchersWhereUniqueInput
  }


  /**
   * vouchers updateMany
   */
  export type vouchersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vouchers.
     */
    data: XOR<vouchersUpdateManyMutationInput, vouchersUncheckedUpdateManyInput>
    /**
     * Filter which vouchers to update
     */
    where?: vouchersWhereInput
  }


  /**
   * vouchers upsert
   */
  export type vouchersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * The filter to search for the vouchers to update in case it exists.
     */
    where: vouchersWhereUniqueInput
    /**
     * In case the vouchers found by the `where` argument doesn't exist, create a new vouchers with this data.
     */
    create: XOR<vouchersCreateInput, vouchersUncheckedCreateInput>
    /**
     * In case the vouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vouchersUpdateInput, vouchersUncheckedUpdateInput>
  }


  /**
   * vouchers delete
   */
  export type vouchersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
    /**
     * Filter which vouchers to delete.
     */
    where: vouchersWhereUniqueInput
  }


  /**
   * vouchers deleteMany
   */
  export type vouchersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which vouchers to delete
     */
    where?: vouchersWhereInput
  }


  /**
   * vouchers without action
   */
  export type vouchersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vouchers
     */
    select?: vouchersSelect<ExtArgs> | null
  }



  /**
   * Model wallets
   */


  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    provider_id: number | null
    balance: Decimal | null
    holding_balance: Decimal | null
  }

  export type WalletsSumAggregateOutputType = {
    provider_id: number | null
    balance: Decimal | null
    holding_balance: Decimal | null
  }

  export type WalletsMinAggregateOutputType = {
    provider_id: number | null
    balance: Decimal | null
    holding_balance: Decimal | null
  }

  export type WalletsMaxAggregateOutputType = {
    provider_id: number | null
    balance: Decimal | null
    holding_balance: Decimal | null
  }

  export type WalletsCountAggregateOutputType = {
    provider_id: number
    balance: number
    holding_balance: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    provider_id?: true
    balance?: true
    holding_balance?: true
  }

  export type WalletsSumAggregateInputType = {
    provider_id?: true
    balance?: true
    holding_balance?: true
  }

  export type WalletsMinAggregateInputType = {
    provider_id?: true
    balance?: true
    holding_balance?: true
  }

  export type WalletsMaxAggregateInputType = {
    provider_id?: true
    balance?: true
    holding_balance?: true
  }

  export type WalletsCountAggregateInputType = {
    provider_id?: true
    balance?: true
    holding_balance?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to aggregate.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: Enumerable<walletsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type WalletsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
    orderBy?: Enumerable<walletsOrderByWithAggregationInput>
    by: WalletsScalarFieldEnum[]
    having?: walletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }


  export type WalletsGroupByOutputType = {
    provider_id: number
    balance: Decimal | null
    holding_balance: Decimal | null
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends WalletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type walletsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    balance?: boolean
    holding_balance?: boolean
    providers?: boolean | providersArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectScalar = {
    provider_id?: boolean
    balance?: boolean
    holding_balance?: boolean
  }

  export type walletsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    providers?: boolean | providersArgs<ExtArgs>
  }


  type walletsGetPayload<S extends boolean | null | undefined | walletsArgs> = $Types.GetResult<walletsPayload, S>

  type walletsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<walletsFindManyArgs, 'select' | 'include'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface walletsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallets'], meta: { name: 'wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {walletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends walletsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'wallets'> extends True ? Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Wallets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {walletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends walletsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, walletsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'wallets'> extends True ? Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Wallets that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `provider_id`
     * const walletsWithProvider_idOnly = await prisma.wallets.findMany({ select: { provider_id: true } })
     * 
    **/
    findMany<T extends walletsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, walletsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<walletsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Wallets.
     * @param {walletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
    **/
    create<T extends walletsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, walletsCreateArgs<ExtArgs>>
    ): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Wallets.
     *     @param {walletsCreateManyArgs} args - Arguments to create many Wallets.
     *     @example
     *     // Create many Wallets
     *     const wallets = await prisma.wallets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends walletsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, walletsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wallets.
     * @param {walletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
    **/
    delete<T extends walletsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, walletsDeleteArgs<ExtArgs>>
    ): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Wallets.
     * @param {walletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends walletsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, walletsUpdateArgs<ExtArgs>>
    ): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Wallets.
     * @param {walletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends walletsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends walletsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallets.
     * @param {walletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
    **/
    upsert<T extends walletsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, walletsUpsertArgs<ExtArgs>>
    ): Prisma__walletsClient<$Types.GetResult<walletsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletsCountArgs>(
      args?: Subset<T, walletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsGroupByArgs} args - Group by arguments.
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
      T extends WalletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletsGroupByArgs['orderBy'] }
        : { orderBy?: WalletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WalletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__walletsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    providers<T extends providersArgs<ExtArgs> = {}>(args?: Subset<T, providersArgs<ExtArgs>>): Prisma__providersClient<$Types.GetResult<providersPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * wallets base type for findUnique actions
   */
  export type walletsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findUnique
   */
  export interface walletsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends walletsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wallets findUniqueOrThrow
   */
  export type walletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }


  /**
   * wallets base type for findFirst actions
   */
  export type walletsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: Enumerable<walletsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: Enumerable<WalletsScalarFieldEnum>
  }

  /**
   * wallets findFirst
   */
  export interface walletsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends walletsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * wallets findFirstOrThrow
   */
  export type walletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: Enumerable<walletsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: Enumerable<WalletsScalarFieldEnum>
  }


  /**
   * wallets findMany
   */
  export type walletsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: Enumerable<walletsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: Enumerable<WalletsScalarFieldEnum>
  }


  /**
   * wallets create
   */
  export type walletsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to create a wallets.
     */
    data: XOR<walletsCreateInput, walletsUncheckedCreateInput>
  }


  /**
   * wallets createMany
   */
  export type walletsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: Enumerable<walletsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * wallets update
   */
  export type walletsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to update a wallets.
     */
    data: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
    /**
     * Choose, which wallets to update.
     */
    where: walletsWhereUniqueInput
  }


  /**
   * wallets updateMany
   */
  export type walletsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
  }


  /**
   * wallets upsert
   */
  export type walletsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The filter to search for the wallets to update in case it exists.
     */
    where: walletsWhereUniqueInput
    /**
     * In case the wallets found by the `where` argument doesn't exist, create a new wallets with this data.
     */
    create: XOR<walletsCreateInput, walletsUncheckedCreateInput>
    /**
     * In case the wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
  }


  /**
   * wallets delete
   */
  export type walletsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter which wallets to delete.
     */
    where: walletsWhereUniqueInput
  }


  /**
   * wallets deleteMany
   */
  export type walletsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletsWhereInput
  }


  /**
   * wallets without action
   */
  export type walletsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: walletsInclude<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon_url: 'icon_url'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    provider_id: 'provider_id',
    last_message: 'last_message',
    updated_at: 'updated_at'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    conversation_id: 'conversation_id',
    sender_id: 'sender_id',
    content: 'content',
    is_read: 'is_read'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    message: 'message',
    type: 'type',
    is_read: 'is_read'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Payout_requestsScalarFieldEnum: {
    id: 'id',
    provider_id: 'provider_id',
    amount: 'amount',
    bank_info: 'bank_info',
    status: 'status'
  };

  export type Payout_requestsScalarFieldEnum = (typeof Payout_requestsScalarFieldEnum)[keyof typeof Payout_requestsScalarFieldEnum]


  export const ProvidersScalarFieldEnum: {
    user_id: 'user_id',
    business_name: 'business_name',
    description: 'description',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    kyc_status: 'kyc_status',
    trust_score: 'trust_score'
  };

  export type ProvidersScalarFieldEnum = (typeof ProvidersScalarFieldEnum)[keyof typeof ProvidersScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    id: 'id',
    provider_id: 'provider_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time',
    is_day_off: 'is_day_off'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    full_name: 'full_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VouchersScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discount_type: 'discount_type',
    value: 'value',
    min_order_price: 'min_order_price',
    owner_id: 'owner_id'
  };

  export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    provider_id: 'provider_id',
    balance: 'balance',
    holding_balance: 'holding_balance'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


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
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: Enumerable<categoriesWhereInput>
    OR?: Enumerable<categoriesWhereInput>
    NOT?: Enumerable<categoriesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    icon_url?: StringNullableFilter | string | null
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon_url?: SortOrderInput | SortOrder
  }

  export type categoriesWhereUniqueInput = {
    id?: number
  }

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon_url?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    icon_url?: StringNullableWithAggregatesFilter | string | null
  }

  export type conversationsWhereInput = {
    AND?: Enumerable<conversationsWhereInput>
    OR?: Enumerable<conversationsWhereInput>
    NOT?: Enumerable<conversationsWhereInput>
    id?: IntFilter | number
    customer_id?: IntFilter | number
    provider_id?: IntFilter | number
    last_message?: StringNullableFilter | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    providers?: XOR<ProvidersRelationFilter, providersWhereInput>
    messages?: MessagesListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
    last_message?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    providers?: providersOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type conversationsWhereUniqueInput = {
    id?: number
  }

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
    last_message?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _avg?: conversationsAvgOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
    _sum?: conversationsSumOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<conversationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<conversationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<conversationsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    customer_id?: IntWithAggregatesFilter | number
    provider_id?: IntWithAggregatesFilter | number
    last_message?: StringNullableWithAggregatesFilter | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type messagesWhereInput = {
    AND?: Enumerable<messagesWhereInput>
    OR?: Enumerable<messagesWhereInput>
    NOT?: Enumerable<messagesWhereInput>
    id?: IntFilter | number
    conversation_id?: IntFilter | number
    sender_id?: IntFilter | number
    content?: StringNullableFilter | string | null
    is_read?: BoolNullableFilter | boolean | null
    conversations?: XOR<ConversationsRelationFilter, conversationsWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = {
    id?: number
  }

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<messagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<messagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<messagesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    conversation_id?: IntWithAggregatesFilter | number
    sender_id?: IntWithAggregatesFilter | number
    content?: StringNullableWithAggregatesFilter | string | null
    is_read?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type notificationsWhereInput = {
    AND?: Enumerable<notificationsWhereInput>
    OR?: Enumerable<notificationsWhereInput>
    NOT?: Enumerable<notificationsWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    title?: StringNullableFilter | string | null
    message?: StringNullableFilter | string | null
    type?: Enumnotifications_typeNullableFilter | notifications_type | null
    is_read?: BoolNullableFilter | boolean | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = {
    id?: number
  }

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<notificationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<notificationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<notificationsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    title?: StringNullableWithAggregatesFilter | string | null
    message?: StringNullableWithAggregatesFilter | string | null
    type?: Enumnotifications_typeNullableWithAggregatesFilter | notifications_type | null
    is_read?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type payout_requestsWhereInput = {
    AND?: Enumerable<payout_requestsWhereInput>
    OR?: Enumerable<payout_requestsWhereInput>
    NOT?: Enumerable<payout_requestsWhereInput>
    id?: IntFilter | number
    provider_id?: IntFilter | number
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    bank_info?: JsonNullableFilter
    status?: Enumpayout_requests_statusNullableFilter | payout_requests_status | null
    providers?: XOR<ProvidersRelationFilter, providersWhereInput>
  }

  export type payout_requestsOrderByWithRelationInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
    bank_info?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    providers?: providersOrderByWithRelationInput
  }

  export type payout_requestsWhereUniqueInput = {
    id?: number
  }

  export type payout_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
    bank_info?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: payout_requestsCountOrderByAggregateInput
    _avg?: payout_requestsAvgOrderByAggregateInput
    _max?: payout_requestsMaxOrderByAggregateInput
    _min?: payout_requestsMinOrderByAggregateInput
    _sum?: payout_requestsSumOrderByAggregateInput
  }

  export type payout_requestsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<payout_requestsScalarWhereWithAggregatesInput>
    OR?: Enumerable<payout_requestsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<payout_requestsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    provider_id?: IntWithAggregatesFilter | number
    amount?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    bank_info?: JsonNullableWithAggregatesFilter
    status?: Enumpayout_requests_statusNullableWithAggregatesFilter | payout_requests_status | null
  }

  export type providersWhereInput = {
    AND?: Enumerable<providersWhereInput>
    OR?: Enumerable<providersWhereInput>
    NOT?: Enumerable<providersWhereInput>
    user_id?: IntFilter | number
    business_name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    latitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    kyc_status?: Enumproviders_kyc_statusNullableFilter | providers_kyc_status | null
    trust_score?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    conversations?: ConversationsListRelationFilter
    payout_requests?: Payout_requestsListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
    schedules?: SchedulesListRelationFilter
    wallets?: XOR<WalletsRelationFilter, walletsWhereInput> | null
  }

  export type providersOrderByWithRelationInput = {
    user_id?: SortOrder
    business_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    kyc_status?: SortOrderInput | SortOrder
    trust_score?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByRelationAggregateInput
    payout_requests?: payout_requestsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    schedules?: schedulesOrderByRelationAggregateInput
    wallets?: walletsOrderByWithRelationInput
  }

  export type providersWhereUniqueInput = {
    user_id?: number
  }

  export type providersOrderByWithAggregationInput = {
    user_id?: SortOrder
    business_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    kyc_status?: SortOrderInput | SortOrder
    trust_score?: SortOrderInput | SortOrder
    _count?: providersCountOrderByAggregateInput
    _avg?: providersAvgOrderByAggregateInput
    _max?: providersMaxOrderByAggregateInput
    _min?: providersMinOrderByAggregateInput
    _sum?: providersSumOrderByAggregateInput
  }

  export type providersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<providersScalarWhereWithAggregatesInput>
    OR?: Enumerable<providersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<providersScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    business_name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    latitude?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    kyc_status?: Enumproviders_kyc_statusNullableWithAggregatesFilter | providers_kyc_status | null
    trust_score?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type schedulesWhereInput = {
    AND?: Enumerable<schedulesWhereInput>
    OR?: Enumerable<schedulesWhereInput>
    NOT?: Enumerable<schedulesWhereInput>
    id?: IntFilter | number
    provider_id?: IntFilter | number
    day_of_week?: IntFilter | number
    start_time?: DateTimeFilter | Date | string
    end_time?: DateTimeFilter | Date | string
    is_day_off?: BoolNullableFilter | boolean | null
    providers?: XOR<ProvidersRelationFilter, providersWhereInput>
  }

  export type schedulesOrderByWithRelationInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_day_off?: SortOrderInput | SortOrder
    providers?: providersOrderByWithRelationInput
  }

  export type schedulesWhereUniqueInput = {
    id?: number
  }

  export type schedulesOrderByWithAggregationInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_day_off?: SortOrderInput | SortOrder
    _count?: schedulesCountOrderByAggregateInput
    _avg?: schedulesAvgOrderByAggregateInput
    _max?: schedulesMaxOrderByAggregateInput
    _min?: schedulesMinOrderByAggregateInput
    _sum?: schedulesSumOrderByAggregateInput
  }

  export type schedulesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<schedulesScalarWhereWithAggregatesInput>
    OR?: Enumerable<schedulesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<schedulesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    provider_id?: IntWithAggregatesFilter | number
    day_of_week?: IntWithAggregatesFilter | number
    start_time?: DateTimeWithAggregatesFilter | Date | string
    end_time?: DateTimeWithAggregatesFilter | Date | string
    is_day_off?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    full_name?: StringFilter | string
    phone?: StringNullableFilter | string | null
    avatar_url?: StringNullableFilter | string | null
    role?: Enumusers_roleNullableFilter | users_role | null
    is_active?: BoolNullableFilter | boolean | null
    created_at?: DateTimeNullableFilter | Date | string | null
    conversations?: ConversationsListRelationFilter
    messages?: MessagesListRelationFilter
    notifications?: NotificationsListRelationFilter
    providers?: XOR<ProvidersRelationFilter, providersWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    providers?: providersOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    full_name?: StringWithAggregatesFilter | string
    phone?: StringNullableWithAggregatesFilter | string | null
    avatar_url?: StringNullableWithAggregatesFilter | string | null
    role?: Enumusers_roleNullableWithAggregatesFilter | users_role | null
    is_active?: BoolNullableWithAggregatesFilter | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type vouchersWhereInput = {
    AND?: Enumerable<vouchersWhereInput>
    OR?: Enumerable<vouchersWhereInput>
    NOT?: Enumerable<vouchersWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    discount_type?: Enumvouchers_discount_typeFilter | vouchers_discount_type
    value?: DecimalFilter | Decimal | DecimalJsLike | number | string
    min_order_price?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    owner_id?: IntNullableFilter | number | null
  }

  export type vouchersOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrderInput | SortOrder
    owner_id?: SortOrderInput | SortOrder
  }

  export type vouchersWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type vouchersOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrderInput | SortOrder
    owner_id?: SortOrderInput | SortOrder
    _count?: vouchersCountOrderByAggregateInput
    _avg?: vouchersAvgOrderByAggregateInput
    _max?: vouchersMaxOrderByAggregateInput
    _min?: vouchersMinOrderByAggregateInput
    _sum?: vouchersSumOrderByAggregateInput
  }

  export type vouchersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<vouchersScalarWhereWithAggregatesInput>
    OR?: Enumerable<vouchersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<vouchersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    discount_type?: Enumvouchers_discount_typeWithAggregatesFilter | vouchers_discount_type
    value?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    min_order_price?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    owner_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type walletsWhereInput = {
    AND?: Enumerable<walletsWhereInput>
    OR?: Enumerable<walletsWhereInput>
    NOT?: Enumerable<walletsWhereInput>
    provider_id?: IntFilter | number
    balance?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    holding_balance?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    providers?: XOR<ProvidersRelationFilter, providersWhereInput>
  }

  export type walletsOrderByWithRelationInput = {
    provider_id?: SortOrder
    balance?: SortOrderInput | SortOrder
    holding_balance?: SortOrderInput | SortOrder
    providers?: providersOrderByWithRelationInput
  }

  export type walletsWhereUniqueInput = {
    provider_id?: number
  }

  export type walletsOrderByWithAggregationInput = {
    provider_id?: SortOrder
    balance?: SortOrderInput | SortOrder
    holding_balance?: SortOrderInput | SortOrder
    _count?: walletsCountOrderByAggregateInput
    _avg?: walletsAvgOrderByAggregateInput
    _max?: walletsMaxOrderByAggregateInput
    _min?: walletsMinOrderByAggregateInput
    _sum?: walletsSumOrderByAggregateInput
  }

  export type walletsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<walletsScalarWhereWithAggregatesInput>
    OR?: Enumerable<walletsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<walletsScalarWhereWithAggregatesInput>
    provider_id?: IntWithAggregatesFilter | number
    balance?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    holding_balance?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type categoriesCreateInput = {
    name: string
    icon_url?: string | null
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    icon_url?: string | null
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    icon_url?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type conversationsCreateInput = {
    last_message?: string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutConversationsInput
    providers: providersCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: number
    customer_id: number
    provider_id: number
    last_message?: string | null
    updated_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUpdateInput = {
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutConversationsNestedInput
    providers?: providersUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: number
    customer_id: number
    provider_id: number
    last_message?: string | null
    updated_at?: Date | string | null
  }

  export type conversationsUpdateManyMutationInput = {
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesCreateInput = {
    content?: string | null
    is_read?: boolean | null
    conversations: conversationsCreateNestedOneWithoutMessagesInput
    users: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    conversation_id: number
    sender_id: number
    content?: string | null
    is_read?: boolean | null
  }

  export type messagesUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversation_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messagesCreateManyInput = {
    id?: number
    conversation_id: number
    sender_id: number
    content?: string | null
    is_read?: boolean | null
  }

  export type messagesUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversation_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsCreateInput = {
    title?: string | null
    message?: string | null
    type?: notifications_type | null
    is_read?: boolean | null
    users: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id: number
    title?: string | null
    message?: string | null
    type?: notifications_type | null
    is_read?: boolean | null
  }

  export type notificationsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id: number
    title?: string | null
    message?: string | null
    type?: notifications_type | null
    is_read?: boolean | null
  }

  export type notificationsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type payout_requestsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: payout_requests_status | null
    providers: providersCreateNestedOneWithoutPayout_requestsInput
  }

  export type payout_requestsUncheckedCreateInput = {
    id?: number
    provider_id: number
    amount: Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: payout_requests_status | null
  }

  export type payout_requestsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
    providers?: providersUpdateOneRequiredWithoutPayout_requestsNestedInput
  }

  export type payout_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
  }

  export type payout_requestsCreateManyInput = {
    id?: number
    provider_id: number
    amount: Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: payout_requests_status | null
  }

  export type payout_requestsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
  }

  export type payout_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
  }

  export type providersCreateInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsCreateNestedManyWithoutProvidersInput
    users: usersCreateNestedOneWithoutProvidersInput
    schedules?: schedulesCreateNestedManyWithoutProvidersInput
    wallets?: walletsCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateInput = {
    user_id: number
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsUncheckedCreateNestedManyWithoutProvidersInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutProvidersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutProvidersInput
  }

  export type providersUpdateInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUpdateManyWithoutProvidersNestedInput
    users?: usersUpdateOneRequiredWithoutProvidersNestedInput
    schedules?: schedulesUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUncheckedUpdateManyWithoutProvidersNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutProvidersNestedInput
  }

  export type providersCreateManyInput = {
    user_id: number
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type providersUpdateManyMutationInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type providersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type schedulesCreateInput = {
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    is_day_off?: boolean | null
    providers: providersCreateNestedOneWithoutSchedulesInput
  }

  export type schedulesUncheckedCreateInput = {
    id?: number
    provider_id: number
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    is_day_off?: boolean | null
  }

  export type schedulesUpdateInput = {
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
    providers?: providersUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type schedulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type schedulesCreateManyInput = {
    id?: number
    provider_id: number
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    is_day_off?: boolean | null
  }

  export type schedulesUpdateManyMutationInput = {
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type schedulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vouchersCreateInput = {
    code: string
    discount_type: vouchers_discount_type
    value: Decimal | DecimalJsLike | number | string
    min_order_price?: Decimal | DecimalJsLike | number | string | null
    owner_id?: number | null
  }

  export type vouchersUncheckedCreateInput = {
    id?: number
    code: string
    discount_type: vouchers_discount_type
    value: Decimal | DecimalJsLike | number | string
    min_order_price?: Decimal | DecimalJsLike | number | string | null
    owner_id?: number | null
  }

  export type vouchersUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: Enumvouchers_discount_typeFieldUpdateOperationsInput | vouchers_discount_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_order_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vouchersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: Enumvouchers_discount_typeFieldUpdateOperationsInput | vouchers_discount_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_order_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vouchersCreateManyInput = {
    id?: number
    code: string
    discount_type: vouchers_discount_type
    value: Decimal | DecimalJsLike | number | string
    min_order_price?: Decimal | DecimalJsLike | number | string | null
    owner_id?: number | null
  }

  export type vouchersUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: Enumvouchers_discount_typeFieldUpdateOperationsInput | vouchers_discount_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_order_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vouchersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: Enumvouchers_discount_typeFieldUpdateOperationsInput | vouchers_discount_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_order_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type walletsCreateInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    holding_balance?: Decimal | DecimalJsLike | number | string | null
    providers: providersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateInput = {
    provider_id: number
    balance?: Decimal | DecimalJsLike | number | string | null
    holding_balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUpdateInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    holding_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providers?: providersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    holding_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type walletsCreateManyInput = {
    provider_id: number
    balance?: Decimal | DecimalJsLike | number | string | null
    holding_balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUpdateManyMutationInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    holding_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUncheckedUpdateManyInput = {
    provider_id?: IntFieldUpdateOperationsInput | number
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    holding_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon_url?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ProvidersRelationFilter = {
    is?: providersWhereInput | null
    isNot?: providersWhereInput | null
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
    last_message?: SortOrder
    updated_at?: SortOrder
  }

  export type conversationsAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
    last_message?: SortOrder
    updated_at?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
    last_message?: SortOrder
    updated_at?: SortOrder
  }

  export type conversationsSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    provider_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type ConversationsRelationFilter = {
    is?: conversationsWhereInput | null
    isNot?: conversationsWhereInput | null
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    is_read?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type Enumnotifications_typeNullableFilter = {
    equals?: notifications_type | null
    in?: Enumerable<notifications_type> | null
    notIn?: Enumerable<notifications_type> | null
    not?: NestedEnumnotifications_typeNullableFilter | notifications_type | null
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumnotifications_typeNullableWithAggregatesFilter = {
    equals?: notifications_type | null
    in?: Enumerable<notifications_type> | null
    notIn?: Enumerable<notifications_type> | null
    not?: NestedEnumnotifications_typeNullableWithAggregatesFilter | notifications_type | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumnotifications_typeNullableFilter
    _max?: NestedEnumnotifications_typeNullableFilter
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type Enumpayout_requests_statusNullableFilter = {
    equals?: payout_requests_status | null
    in?: Enumerable<payout_requests_status> | null
    notIn?: Enumerable<payout_requests_status> | null
    not?: NestedEnumpayout_requests_statusNullableFilter | payout_requests_status | null
  }

  export type payout_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
    bank_info?: SortOrder
    status?: SortOrder
  }

  export type payout_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
  }

  export type payout_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type payout_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type payout_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type Enumpayout_requests_statusNullableWithAggregatesFilter = {
    equals?: payout_requests_status | null
    in?: Enumerable<payout_requests_status> | null
    notIn?: Enumerable<payout_requests_status> | null
    not?: NestedEnumpayout_requests_statusNullableWithAggregatesFilter | payout_requests_status | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumpayout_requests_statusNullableFilter
    _max?: NestedEnumpayout_requests_statusNullableFilter
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumproviders_kyc_statusNullableFilter = {
    equals?: providers_kyc_status | null
    in?: Enumerable<providers_kyc_status> | null
    notIn?: Enumerable<providers_kyc_status> | null
    not?: NestedEnumproviders_kyc_statusNullableFilter | providers_kyc_status | null
  }

  export type ConversationsListRelationFilter = {
    every?: conversationsWhereInput
    some?: conversationsWhereInput
    none?: conversationsWhereInput
  }

  export type Payout_requestsListRelationFilter = {
    every?: payout_requestsWhereInput
    some?: payout_requestsWhereInput
    none?: payout_requestsWhereInput
  }

  export type SchedulesListRelationFilter = {
    every?: schedulesWhereInput
    some?: schedulesWhereInput
    none?: schedulesWhereInput
  }

  export type WalletsRelationFilter = {
    is?: walletsWhereInput | null
    isNot?: walletsWhereInput | null
  }

  export type conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type payout_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type schedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type providersCountOrderByAggregateInput = {
    user_id?: SortOrder
    business_name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    kyc_status?: SortOrder
    trust_score?: SortOrder
  }

  export type providersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    trust_score?: SortOrder
  }

  export type providersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    business_name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    kyc_status?: SortOrder
    trust_score?: SortOrder
  }

  export type providersMinOrderByAggregateInput = {
    user_id?: SortOrder
    business_name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    kyc_status?: SortOrder
    trust_score?: SortOrder
  }

  export type providersSumOrderByAggregateInput = {
    user_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    trust_score?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type Enumproviders_kyc_statusNullableWithAggregatesFilter = {
    equals?: providers_kyc_status | null
    in?: Enumerable<providers_kyc_status> | null
    notIn?: Enumerable<providers_kyc_status> | null
    not?: NestedEnumproviders_kyc_statusNullableWithAggregatesFilter | providers_kyc_status | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumproviders_kyc_statusNullableFilter
    _max?: NestedEnumproviders_kyc_statusNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type schedulesCountOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_day_off?: SortOrder
  }

  export type schedulesAvgOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
  }

  export type schedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_day_off?: SortOrder
  }

  export type schedulesMinOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_day_off?: SortOrder
  }

  export type schedulesSumOrderByAggregateInput = {
    id?: SortOrder
    provider_id?: SortOrder
    day_of_week?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type Enumusers_roleNullableFilter = {
    equals?: users_role | null
    in?: Enumerable<users_role> | null
    notIn?: Enumerable<users_role> | null
    not?: NestedEnumusers_roleNullableFilter | users_role | null
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusers_roleNullableWithAggregatesFilter = {
    equals?: users_role | null
    in?: Enumerable<users_role> | null
    notIn?: Enumerable<users_role> | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter | users_role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumusers_roleNullableFilter
    _max?: NestedEnumusers_roleNullableFilter
  }

  export type Enumvouchers_discount_typeFilter = {
    equals?: vouchers_discount_type
    in?: Enumerable<vouchers_discount_type>
    notIn?: Enumerable<vouchers_discount_type>
    not?: NestedEnumvouchers_discount_typeFilter | vouchers_discount_type
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type vouchersCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrder
    owner_id?: SortOrder
  }

  export type vouchersAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrder
    owner_id?: SortOrder
  }

  export type vouchersMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrder
    owner_id?: SortOrder
  }

  export type vouchersMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrder
    owner_id?: SortOrder
  }

  export type vouchersSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    min_order_price?: SortOrder
    owner_id?: SortOrder
  }

  export type Enumvouchers_discount_typeWithAggregatesFilter = {
    equals?: vouchers_discount_type
    in?: Enumerable<vouchers_discount_type>
    notIn?: Enumerable<vouchers_discount_type>
    not?: NestedEnumvouchers_discount_typeWithAggregatesFilter | vouchers_discount_type
    _count?: NestedIntFilter
    _min?: NestedEnumvouchers_discount_typeFilter
    _max?: NestedEnumvouchers_discount_typeFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type walletsCountOrderByAggregateInput = {
    provider_id?: SortOrder
    balance?: SortOrder
    holding_balance?: SortOrder
  }

  export type walletsAvgOrderByAggregateInput = {
    provider_id?: SortOrder
    balance?: SortOrder
    holding_balance?: SortOrder
  }

  export type walletsMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    balance?: SortOrder
    holding_balance?: SortOrder
  }

  export type walletsMinOrderByAggregateInput = {
    provider_id?: SortOrder
    balance?: SortOrder
    holding_balance?: SortOrder
  }

  export type walletsSumOrderByAggregateInput = {
    provider_id?: SortOrder
    balance?: SortOrder
    holding_balance?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutConversationsInput = {
    create?: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutConversationsInput
    connect?: usersWhereUniqueInput
  }

  export type providersCreateNestedOneWithoutConversationsInput = {
    create?: XOR<providersCreateWithoutConversationsInput, providersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: providersCreateOrConnectWithoutConversationsInput
    connect?: providersWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<Enumerable<messagesCreateWithoutConversationsInput>, Enumerable<messagesUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutConversationsInput>
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: Enumerable<messagesWhereUniqueInput>
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<Enumerable<messagesCreateWithoutConversationsInput>, Enumerable<messagesUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutConversationsInput>
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: Enumerable<messagesWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutConversationsInput
    upsert?: usersUpsertWithoutConversationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutConversationsInput, usersUncheckedUpdateWithoutConversationsInput>
  }

  export type providersUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<providersCreateWithoutConversationsInput, providersUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: providersCreateOrConnectWithoutConversationsInput
    upsert?: providersUpsertWithoutConversationsInput
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutConversationsInput, providersUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<Enumerable<messagesCreateWithoutConversationsInput>, Enumerable<messagesUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutConversationsInput>
    upsert?: Enumerable<messagesUpsertWithWhereUniqueWithoutConversationsInput>
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: Enumerable<messagesWhereUniqueInput>
    disconnect?: Enumerable<messagesWhereUniqueInput>
    delete?: Enumerable<messagesWhereUniqueInput>
    connect?: Enumerable<messagesWhereUniqueInput>
    update?: Enumerable<messagesUpdateWithWhereUniqueWithoutConversationsInput>
    updateMany?: Enumerable<messagesUpdateManyWithWhereWithoutConversationsInput>
    deleteMany?: Enumerable<messagesScalarWhereInput>
  }

  export type messagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<Enumerable<messagesCreateWithoutConversationsInput>, Enumerable<messagesUncheckedCreateWithoutConversationsInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutConversationsInput>
    upsert?: Enumerable<messagesUpsertWithWhereUniqueWithoutConversationsInput>
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: Enumerable<messagesWhereUniqueInput>
    disconnect?: Enumerable<messagesWhereUniqueInput>
    delete?: Enumerable<messagesWhereUniqueInput>
    connect?: Enumerable<messagesWhereUniqueInput>
    update?: Enumerable<messagesUpdateWithWhereUniqueWithoutConversationsInput>
    updateMany?: Enumerable<messagesUpdateManyWithWhereWithoutConversationsInput>
    deleteMany?: Enumerable<messagesScalarWhereInput>
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableEnumnotifications_typeFieldUpdateOperationsInput = {
    set?: notifications_type | null
  }

  export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type providersCreateNestedOneWithoutPayout_requestsInput = {
    create?: XOR<providersCreateWithoutPayout_requestsInput, providersUncheckedCreateWithoutPayout_requestsInput>
    connectOrCreate?: providersCreateOrConnectWithoutPayout_requestsInput
    connect?: providersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumpayout_requests_statusFieldUpdateOperationsInput = {
    set?: payout_requests_status | null
  }

  export type providersUpdateOneRequiredWithoutPayout_requestsNestedInput = {
    create?: XOR<providersCreateWithoutPayout_requestsInput, providersUncheckedCreateWithoutPayout_requestsInput>
    connectOrCreate?: providersCreateOrConnectWithoutPayout_requestsInput
    upsert?: providersUpsertWithoutPayout_requestsInput
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutPayout_requestsInput, providersUncheckedUpdateWithoutPayout_requestsInput>
  }

  export type conversationsCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutProvidersInput>, Enumerable<conversationsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutProvidersInput>
    createMany?: conversationsCreateManyProvidersInputEnvelope
    connect?: Enumerable<conversationsWhereUniqueInput>
  }

  export type payout_requestsCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<payout_requestsCreateWithoutProvidersInput>, Enumerable<payout_requestsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<payout_requestsCreateOrConnectWithoutProvidersInput>
    createMany?: payout_requestsCreateManyProvidersInputEnvelope
    connect?: Enumerable<payout_requestsWhereUniqueInput>
  }

  export type usersCreateNestedOneWithoutProvidersInput = {
    create?: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProvidersInput
    connect?: usersWhereUniqueInput
  }

  export type schedulesCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<schedulesCreateWithoutProvidersInput>, Enumerable<schedulesUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<schedulesCreateOrConnectWithoutProvidersInput>
    createMany?: schedulesCreateManyProvidersInputEnvelope
    connect?: Enumerable<schedulesWhereUniqueInput>
  }

  export type walletsCreateNestedOneWithoutProvidersInput = {
    create?: XOR<walletsCreateWithoutProvidersInput, walletsUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutProvidersInput
    connect?: walletsWhereUniqueInput
  }

  export type conversationsUncheckedCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutProvidersInput>, Enumerable<conversationsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutProvidersInput>
    createMany?: conversationsCreateManyProvidersInputEnvelope
    connect?: Enumerable<conversationsWhereUniqueInput>
  }

  export type payout_requestsUncheckedCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<payout_requestsCreateWithoutProvidersInput>, Enumerable<payout_requestsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<payout_requestsCreateOrConnectWithoutProvidersInput>
    createMany?: payout_requestsCreateManyProvidersInputEnvelope
    connect?: Enumerable<payout_requestsWhereUniqueInput>
  }

  export type schedulesUncheckedCreateNestedManyWithoutProvidersInput = {
    create?: XOR<Enumerable<schedulesCreateWithoutProvidersInput>, Enumerable<schedulesUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<schedulesCreateOrConnectWithoutProvidersInput>
    createMany?: schedulesCreateManyProvidersInputEnvelope
    connect?: Enumerable<schedulesWhereUniqueInput>
  }

  export type walletsUncheckedCreateNestedOneWithoutProvidersInput = {
    create?: XOR<walletsCreateWithoutProvidersInput, walletsUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutProvidersInput
    connect?: walletsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumproviders_kyc_statusFieldUpdateOperationsInput = {
    set?: providers_kyc_status | null
  }

  export type conversationsUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutProvidersInput>, Enumerable<conversationsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<conversationsUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: conversationsCreateManyProvidersInputEnvelope
    set?: Enumerable<conversationsWhereUniqueInput>
    disconnect?: Enumerable<conversationsWhereUniqueInput>
    delete?: Enumerable<conversationsWhereUniqueInput>
    connect?: Enumerable<conversationsWhereUniqueInput>
    update?: Enumerable<conversationsUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<conversationsUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<conversationsScalarWhereInput>
  }

  export type payout_requestsUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<payout_requestsCreateWithoutProvidersInput>, Enumerable<payout_requestsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<payout_requestsCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<payout_requestsUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: payout_requestsCreateManyProvidersInputEnvelope
    set?: Enumerable<payout_requestsWhereUniqueInput>
    disconnect?: Enumerable<payout_requestsWhereUniqueInput>
    delete?: Enumerable<payout_requestsWhereUniqueInput>
    connect?: Enumerable<payout_requestsWhereUniqueInput>
    update?: Enumerable<payout_requestsUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<payout_requestsUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<payout_requestsScalarWhereInput>
  }

  export type usersUpdateOneRequiredWithoutProvidersNestedInput = {
    create?: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProvidersInput
    upsert?: usersUpsertWithoutProvidersInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutProvidersInput, usersUncheckedUpdateWithoutProvidersInput>
  }

  export type schedulesUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<schedulesCreateWithoutProvidersInput>, Enumerable<schedulesUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<schedulesCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<schedulesUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: schedulesCreateManyProvidersInputEnvelope
    set?: Enumerable<schedulesWhereUniqueInput>
    disconnect?: Enumerable<schedulesWhereUniqueInput>
    delete?: Enumerable<schedulesWhereUniqueInput>
    connect?: Enumerable<schedulesWhereUniqueInput>
    update?: Enumerable<schedulesUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<schedulesUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<schedulesScalarWhereInput>
  }

  export type walletsUpdateOneWithoutProvidersNestedInput = {
    create?: XOR<walletsCreateWithoutProvidersInput, walletsUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutProvidersInput
    upsert?: walletsUpsertWithoutProvidersInput
    disconnect?: boolean
    delete?: boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<walletsUpdateWithoutProvidersInput, walletsUncheckedUpdateWithoutProvidersInput>
  }

  export type conversationsUncheckedUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutProvidersInput>, Enumerable<conversationsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<conversationsUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: conversationsCreateManyProvidersInputEnvelope
    set?: Enumerable<conversationsWhereUniqueInput>
    disconnect?: Enumerable<conversationsWhereUniqueInput>
    delete?: Enumerable<conversationsWhereUniqueInput>
    connect?: Enumerable<conversationsWhereUniqueInput>
    update?: Enumerable<conversationsUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<conversationsUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<conversationsScalarWhereInput>
  }

  export type payout_requestsUncheckedUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<payout_requestsCreateWithoutProvidersInput>, Enumerable<payout_requestsUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<payout_requestsCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<payout_requestsUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: payout_requestsCreateManyProvidersInputEnvelope
    set?: Enumerable<payout_requestsWhereUniqueInput>
    disconnect?: Enumerable<payout_requestsWhereUniqueInput>
    delete?: Enumerable<payout_requestsWhereUniqueInput>
    connect?: Enumerable<payout_requestsWhereUniqueInput>
    update?: Enumerable<payout_requestsUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<payout_requestsUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<payout_requestsScalarWhereInput>
  }

  export type schedulesUncheckedUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<Enumerable<schedulesCreateWithoutProvidersInput>, Enumerable<schedulesUncheckedCreateWithoutProvidersInput>>
    connectOrCreate?: Enumerable<schedulesCreateOrConnectWithoutProvidersInput>
    upsert?: Enumerable<schedulesUpsertWithWhereUniqueWithoutProvidersInput>
    createMany?: schedulesCreateManyProvidersInputEnvelope
    set?: Enumerable<schedulesWhereUniqueInput>
    disconnect?: Enumerable<schedulesWhereUniqueInput>
    delete?: Enumerable<schedulesWhereUniqueInput>
    connect?: Enumerable<schedulesWhereUniqueInput>
    update?: Enumerable<schedulesUpdateWithWhereUniqueWithoutProvidersInput>
    updateMany?: Enumerable<schedulesUpdateManyWithWhereWithoutProvidersInput>
    deleteMany?: Enumerable<schedulesScalarWhereInput>
  }

  export type walletsUncheckedUpdateOneWithoutProvidersNestedInput = {
    create?: XOR<walletsCreateWithoutProvidersInput, walletsUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: walletsCreateOrConnectWithoutProvidersInput
    upsert?: walletsUpsertWithoutProvidersInput
    disconnect?: boolean
    delete?: boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<walletsUpdateWithoutProvidersInput, walletsUncheckedUpdateWithoutProvidersInput>
  }

  export type providersCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<providersCreateWithoutSchedulesInput, providersUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: providersCreateOrConnectWithoutSchedulesInput
    connect?: providersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type providersUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<providersCreateWithoutSchedulesInput, providersUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: providersCreateOrConnectWithoutSchedulesInput
    upsert?: providersUpsertWithoutSchedulesInput
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutSchedulesInput, providersUncheckedUpdateWithoutSchedulesInput>
  }

  export type conversationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutUsersInput>, Enumerable<conversationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutUsersInput>
    createMany?: conversationsCreateManyUsersInputEnvelope
    connect?: Enumerable<conversationsWhereUniqueInput>
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<messagesCreateWithoutUsersInput>, Enumerable<messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutUsersInput>
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: Enumerable<messagesWhereUniqueInput>
  }

  export type notificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUsersInput>, Enumerable<notificationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUsersInput>
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: Enumerable<notificationsWhereUniqueInput>
  }

  export type providersCreateNestedOneWithoutUsersInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput
    connect?: providersWhereUniqueInput
  }

  export type conversationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutUsersInput>, Enumerable<conversationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutUsersInput>
    createMany?: conversationsCreateManyUsersInputEnvelope
    connect?: Enumerable<conversationsWhereUniqueInput>
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<messagesCreateWithoutUsersInput>, Enumerable<messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutUsersInput>
    createMany?: messagesCreateManyUsersInputEnvelope
    connect?: Enumerable<messagesWhereUniqueInput>
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUsersInput>, Enumerable<notificationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUsersInput>
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: Enumerable<notificationsWhereUniqueInput>
  }

  export type providersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput
    connect?: providersWhereUniqueInput
  }

  export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: users_role | null
  }

  export type conversationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutUsersInput>, Enumerable<conversationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<conversationsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: conversationsCreateManyUsersInputEnvelope
    set?: Enumerable<conversationsWhereUniqueInput>
    disconnect?: Enumerable<conversationsWhereUniqueInput>
    delete?: Enumerable<conversationsWhereUniqueInput>
    connect?: Enumerable<conversationsWhereUniqueInput>
    update?: Enumerable<conversationsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<conversationsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<conversationsScalarWhereInput>
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<messagesCreateWithoutUsersInput>, Enumerable<messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<messagesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: Enumerable<messagesWhereUniqueInput>
    disconnect?: Enumerable<messagesWhereUniqueInput>
    delete?: Enumerable<messagesWhereUniqueInput>
    connect?: Enumerable<messagesWhereUniqueInput>
    update?: Enumerable<messagesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<messagesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<messagesScalarWhereInput>
  }

  export type notificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUsersInput>, Enumerable<notificationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<notificationsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: Enumerable<notificationsWhereUniqueInput>
    disconnect?: Enumerable<notificationsWhereUniqueInput>
    delete?: Enumerable<notificationsWhereUniqueInput>
    connect?: Enumerable<notificationsWhereUniqueInput>
    update?: Enumerable<notificationsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<notificationsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<notificationsScalarWhereInput>
  }

  export type providersUpdateOneWithoutUsersNestedInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput
    upsert?: providersUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutUsersInput, providersUncheckedUpdateWithoutUsersInput>
  }

  export type conversationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<conversationsCreateWithoutUsersInput>, Enumerable<conversationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<conversationsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<conversationsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: conversationsCreateManyUsersInputEnvelope
    set?: Enumerable<conversationsWhereUniqueInput>
    disconnect?: Enumerable<conversationsWhereUniqueInput>
    delete?: Enumerable<conversationsWhereUniqueInput>
    connect?: Enumerable<conversationsWhereUniqueInput>
    update?: Enumerable<conversationsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<conversationsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<conversationsScalarWhereInput>
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<messagesCreateWithoutUsersInput>, Enumerable<messagesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<messagesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<messagesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: messagesCreateManyUsersInputEnvelope
    set?: Enumerable<messagesWhereUniqueInput>
    disconnect?: Enumerable<messagesWhereUniqueInput>
    delete?: Enumerable<messagesWhereUniqueInput>
    connect?: Enumerable<messagesWhereUniqueInput>
    update?: Enumerable<messagesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<messagesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<messagesScalarWhereInput>
  }

  export type notificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<notificationsCreateWithoutUsersInput>, Enumerable<notificationsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<notificationsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<notificationsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: Enumerable<notificationsWhereUniqueInput>
    disconnect?: Enumerable<notificationsWhereUniqueInput>
    delete?: Enumerable<notificationsWhereUniqueInput>
    connect?: Enumerable<notificationsWhereUniqueInput>
    update?: Enumerable<notificationsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<notificationsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<notificationsScalarWhereInput>
  }

  export type providersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput
    upsert?: providersUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutUsersInput, providersUncheckedUpdateWithoutUsersInput>
  }

  export type Enumvouchers_discount_typeFieldUpdateOperationsInput = {
    set?: vouchers_discount_type
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type providersCreateNestedOneWithoutWalletsInput = {
    create?: XOR<providersCreateWithoutWalletsInput, providersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: providersCreateOrConnectWithoutWalletsInput
    connect?: providersWhereUniqueInput
  }

  export type providersUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<providersCreateWithoutWalletsInput, providersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: providersCreateOrConnectWithoutWalletsInput
    upsert?: providersUpsertWithoutWalletsInput
    connect?: providersWhereUniqueInput
    update?: XOR<providersUpdateWithoutWalletsInput, providersUncheckedUpdateWithoutWalletsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedEnumnotifications_typeNullableFilter = {
    equals?: notifications_type | null
    in?: Enumerable<notifications_type> | null
    notIn?: Enumerable<notifications_type> | null
    not?: NestedEnumnotifications_typeNullableFilter | notifications_type | null
  }

  export type NestedEnumnotifications_typeNullableWithAggregatesFilter = {
    equals?: notifications_type | null
    in?: Enumerable<notifications_type> | null
    notIn?: Enumerable<notifications_type> | null
    not?: NestedEnumnotifications_typeNullableWithAggregatesFilter | notifications_type | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumnotifications_typeNullableFilter
    _max?: NestedEnumnotifications_typeNullableFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumpayout_requests_statusNullableFilter = {
    equals?: payout_requests_status | null
    in?: Enumerable<payout_requests_status> | null
    notIn?: Enumerable<payout_requests_status> | null
    not?: NestedEnumpayout_requests_statusNullableFilter | payout_requests_status | null
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumpayout_requests_statusNullableWithAggregatesFilter = {
    equals?: payout_requests_status | null
    in?: Enumerable<payout_requests_status> | null
    notIn?: Enumerable<payout_requests_status> | null
    not?: NestedEnumpayout_requests_statusNullableWithAggregatesFilter | payout_requests_status | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumpayout_requests_statusNullableFilter
    _max?: NestedEnumpayout_requests_statusNullableFilter
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumproviders_kyc_statusNullableFilter = {
    equals?: providers_kyc_status | null
    in?: Enumerable<providers_kyc_status> | null
    notIn?: Enumerable<providers_kyc_status> | null
    not?: NestedEnumproviders_kyc_statusNullableFilter | providers_kyc_status | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedEnumproviders_kyc_statusNullableWithAggregatesFilter = {
    equals?: providers_kyc_status | null
    in?: Enumerable<providers_kyc_status> | null
    notIn?: Enumerable<providers_kyc_status> | null
    not?: NestedEnumproviders_kyc_statusNullableWithAggregatesFilter | providers_kyc_status | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumproviders_kyc_statusNullableFilter
    _max?: NestedEnumproviders_kyc_statusNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumusers_roleNullableFilter = {
    equals?: users_role | null
    in?: Enumerable<users_role> | null
    notIn?: Enumerable<users_role> | null
    not?: NestedEnumusers_roleNullableFilter | users_role | null
  }

  export type NestedEnumusers_roleNullableWithAggregatesFilter = {
    equals?: users_role | null
    in?: Enumerable<users_role> | null
    notIn?: Enumerable<users_role> | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter | users_role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumusers_roleNullableFilter
    _max?: NestedEnumusers_roleNullableFilter
  }

  export type NestedEnumvouchers_discount_typeFilter = {
    equals?: vouchers_discount_type
    in?: Enumerable<vouchers_discount_type>
    notIn?: Enumerable<vouchers_discount_type>
    not?: NestedEnumvouchers_discount_typeFilter | vouchers_discount_type
  }

  export type NestedEnumvouchers_discount_typeWithAggregatesFilter = {
    equals?: vouchers_discount_type
    in?: Enumerable<vouchers_discount_type>
    notIn?: Enumerable<vouchers_discount_type>
    not?: NestedEnumvouchers_discount_typeWithAggregatesFilter | vouchers_discount_type
    _count?: NestedIntFilter
    _min?: NestedEnumvouchers_discount_typeFilter
    _max?: NestedEnumvouchers_discount_typeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type usersCreateWithoutConversationsInput = {
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    messages?: messagesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutConversationsInput = {
    id?: number
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutConversationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput>
  }

  export type providersCreateWithoutConversationsInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    payout_requests?: payout_requestsCreateNestedManyWithoutProvidersInput
    users: usersCreateNestedOneWithoutProvidersInput
    schedules?: schedulesCreateNestedManyWithoutProvidersInput
    wallets?: walletsCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutConversationsInput = {
    user_id: number
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    payout_requests?: payout_requestsUncheckedCreateNestedManyWithoutProvidersInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutProvidersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutProvidersInput
  }

  export type providersCreateOrConnectWithoutConversationsInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutConversationsInput, providersUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateWithoutConversationsInput = {
    content?: string | null
    is_read?: boolean | null
    users: usersCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    id?: number
    sender_id: number
    content?: string | null
    is_read?: boolean | null
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateManyConversationsInputEnvelope = {
    data: Enumerable<messagesCreateManyConversationsInput>
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutConversationsInput = {
    update: XOR<usersUpdateWithoutConversationsInput, usersUncheckedUpdateWithoutConversationsInput>
    create: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput>
  }

  export type usersUpdateWithoutConversationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type providersUpsertWithoutConversationsInput = {
    update: XOR<providersUpdateWithoutConversationsInput, providersUncheckedUpdateWithoutConversationsInput>
    create: XOR<providersCreateWithoutConversationsInput, providersUncheckedCreateWithoutConversationsInput>
  }

  export type providersUpdateWithoutConversationsInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payout_requests?: payout_requestsUpdateManyWithoutProvidersNestedInput
    users?: usersUpdateOneRequiredWithoutProvidersNestedInput
    schedules?: schedulesUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutConversationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payout_requests?: payout_requestsUncheckedUpdateManyWithoutProvidersNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutProvidersNestedInput
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutMessagesInput>
  }

  export type messagesScalarWhereInput = {
    AND?: Enumerable<messagesScalarWhereInput>
    OR?: Enumerable<messagesScalarWhereInput>
    NOT?: Enumerable<messagesScalarWhereInput>
    id?: IntFilter | number
    conversation_id?: IntFilter | number
    sender_id?: IntFilter | number
    content?: StringNullableFilter | string | null
    is_read?: BoolNullableFilter | boolean | null
  }

  export type conversationsCreateWithoutMessagesInput = {
    last_message?: string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutConversationsInput
    providers: providersCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: number
    customer_id: number
    provider_id: number
    last_message?: string | null
    updated_at?: Date | string | null
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type usersCreateWithoutMessagesInput = {
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    id?: number
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutConversationsNestedInput
    providers?: providersUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutNotificationsInput = {
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type providersCreateWithoutPayout_requestsInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsCreateNestedManyWithoutProvidersInput
    users: usersCreateNestedOneWithoutProvidersInput
    schedules?: schedulesCreateNestedManyWithoutProvidersInput
    wallets?: walletsCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutPayout_requestsInput = {
    user_id: number
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutProvidersInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutProvidersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutProvidersInput
  }

  export type providersCreateOrConnectWithoutPayout_requestsInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutPayout_requestsInput, providersUncheckedCreateWithoutPayout_requestsInput>
  }

  export type providersUpsertWithoutPayout_requestsInput = {
    update: XOR<providersUpdateWithoutPayout_requestsInput, providersUncheckedUpdateWithoutPayout_requestsInput>
    create: XOR<providersCreateWithoutPayout_requestsInput, providersUncheckedCreateWithoutPayout_requestsInput>
  }

  export type providersUpdateWithoutPayout_requestsInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUpdateManyWithoutProvidersNestedInput
    users?: usersUpdateOneRequiredWithoutProvidersNestedInput
    schedules?: schedulesUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutPayout_requestsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutProvidersNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutProvidersNestedInput
  }

  export type conversationsCreateWithoutProvidersInput = {
    last_message?: string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutProvidersInput = {
    id?: number
    customer_id: number
    last_message?: string | null
    updated_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutProvidersInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutProvidersInput, conversationsUncheckedCreateWithoutProvidersInput>
  }

  export type conversationsCreateManyProvidersInputEnvelope = {
    data: Enumerable<conversationsCreateManyProvidersInput>
    skipDuplicates?: boolean
  }

  export type payout_requestsCreateWithoutProvidersInput = {
    amount: Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: payout_requests_status | null
  }

  export type payout_requestsUncheckedCreateWithoutProvidersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: payout_requests_status | null
  }

  export type payout_requestsCreateOrConnectWithoutProvidersInput = {
    where: payout_requestsWhereUniqueInput
    create: XOR<payout_requestsCreateWithoutProvidersInput, payout_requestsUncheckedCreateWithoutProvidersInput>
  }

  export type payout_requestsCreateManyProvidersInputEnvelope = {
    data: Enumerable<payout_requestsCreateManyProvidersInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProvidersInput = {
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProvidersInput = {
    id?: number
    email: string
    password: string
    full_name: string
    phone?: string | null
    avatar_url?: string | null
    role?: users_role | null
    is_active?: boolean | null
    created_at?: Date | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProvidersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
  }

  export type schedulesCreateWithoutProvidersInput = {
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    is_day_off?: boolean | null
  }

  export type schedulesUncheckedCreateWithoutProvidersInput = {
    id?: number
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    is_day_off?: boolean | null
  }

  export type schedulesCreateOrConnectWithoutProvidersInput = {
    where: schedulesWhereUniqueInput
    create: XOR<schedulesCreateWithoutProvidersInput, schedulesUncheckedCreateWithoutProvidersInput>
  }

  export type schedulesCreateManyProvidersInputEnvelope = {
    data: Enumerable<schedulesCreateManyProvidersInput>
    skipDuplicates?: boolean
  }

  export type walletsCreateWithoutProvidersInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    holding_balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUncheckedCreateWithoutProvidersInput = {
    balance?: Decimal | DecimalJsLike | number | string | null
    holding_balance?: Decimal | DecimalJsLike | number | string | null
  }

  export type walletsCreateOrConnectWithoutProvidersInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutProvidersInput, walletsUncheckedCreateWithoutProvidersInput>
  }

  export type conversationsUpsertWithWhereUniqueWithoutProvidersInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutProvidersInput, conversationsUncheckedUpdateWithoutProvidersInput>
    create: XOR<conversationsCreateWithoutProvidersInput, conversationsUncheckedCreateWithoutProvidersInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutProvidersInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutProvidersInput, conversationsUncheckedUpdateWithoutProvidersInput>
  }

  export type conversationsUpdateManyWithWhereWithoutProvidersInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutConversationsInput>
  }

  export type conversationsScalarWhereInput = {
    AND?: Enumerable<conversationsScalarWhereInput>
    OR?: Enumerable<conversationsScalarWhereInput>
    NOT?: Enumerable<conversationsScalarWhereInput>
    id?: IntFilter | number
    customer_id?: IntFilter | number
    provider_id?: IntFilter | number
    last_message?: StringNullableFilter | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type payout_requestsUpsertWithWhereUniqueWithoutProvidersInput = {
    where: payout_requestsWhereUniqueInput
    update: XOR<payout_requestsUpdateWithoutProvidersInput, payout_requestsUncheckedUpdateWithoutProvidersInput>
    create: XOR<payout_requestsCreateWithoutProvidersInput, payout_requestsUncheckedCreateWithoutProvidersInput>
  }

  export type payout_requestsUpdateWithWhereUniqueWithoutProvidersInput = {
    where: payout_requestsWhereUniqueInput
    data: XOR<payout_requestsUpdateWithoutProvidersInput, payout_requestsUncheckedUpdateWithoutProvidersInput>
  }

  export type payout_requestsUpdateManyWithWhereWithoutProvidersInput = {
    where: payout_requestsScalarWhereInput
    data: XOR<payout_requestsUpdateManyMutationInput, payout_requestsUncheckedUpdateManyWithoutPayout_requestsInput>
  }

  export type payout_requestsScalarWhereInput = {
    AND?: Enumerable<payout_requestsScalarWhereInput>
    OR?: Enumerable<payout_requestsScalarWhereInput>
    NOT?: Enumerable<payout_requestsScalarWhereInput>
    id?: IntFilter | number
    provider_id?: IntFilter | number
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    bank_info?: JsonNullableFilter
    status?: Enumpayout_requests_statusNullableFilter | payout_requests_status | null
  }

  export type usersUpsertWithoutProvidersInput = {
    update: XOR<usersUpdateWithoutProvidersInput, usersUncheckedUpdateWithoutProvidersInput>
    create: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
  }

  export type usersUpdateWithoutProvidersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | users_role | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type schedulesUpsertWithWhereUniqueWithoutProvidersInput = {
    where: schedulesWhereUniqueInput
    update: XOR<schedulesUpdateWithoutProvidersInput, schedulesUncheckedUpdateWithoutProvidersInput>
    create: XOR<schedulesCreateWithoutProvidersInput, schedulesUncheckedCreateWithoutProvidersInput>
  }

  export type schedulesUpdateWithWhereUniqueWithoutProvidersInput = {
    where: schedulesWhereUniqueInput
    data: XOR<schedulesUpdateWithoutProvidersInput, schedulesUncheckedUpdateWithoutProvidersInput>
  }

  export type schedulesUpdateManyWithWhereWithoutProvidersInput = {
    where: schedulesScalarWhereInput
    data: XOR<schedulesUpdateManyMutationInput, schedulesUncheckedUpdateManyWithoutSchedulesInput>
  }

  export type schedulesScalarWhereInput = {
    AND?: Enumerable<schedulesScalarWhereInput>
    OR?: Enumerable<schedulesScalarWhereInput>
    NOT?: Enumerable<schedulesScalarWhereInput>
    id?: IntFilter | number
    provider_id?: IntFilter | number
    day_of_week?: IntFilter | number
    start_time?: DateTimeFilter | Date | string
    end_time?: DateTimeFilter | Date | string
    is_day_off?: BoolNullableFilter | boolean | null
  }

  export type walletsUpsertWithoutProvidersInput = {
    update: XOR<walletsUpdateWithoutProvidersInput, walletsUncheckedUpdateWithoutProvidersInput>
    create: XOR<walletsCreateWithoutProvidersInput, walletsUncheckedCreateWithoutProvidersInput>
  }

  export type walletsUpdateWithoutProvidersInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    holding_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type walletsUncheckedUpdateWithoutProvidersInput = {
    balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    holding_balance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type providersCreateWithoutSchedulesInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsCreateNestedManyWithoutProvidersInput
    users: usersCreateNestedOneWithoutProvidersInput
    wallets?: walletsCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutSchedulesInput = {
    user_id: number
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsUncheckedCreateNestedManyWithoutProvidersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutProvidersInput
  }

  export type providersCreateOrConnectWithoutSchedulesInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutSchedulesInput, providersUncheckedCreateWithoutSchedulesInput>
  }

  export type providersUpsertWithoutSchedulesInput = {
    update: XOR<providersUpdateWithoutSchedulesInput, providersUncheckedUpdateWithoutSchedulesInput>
    create: XOR<providersCreateWithoutSchedulesInput, providersUncheckedCreateWithoutSchedulesInput>
  }

  export type providersUpdateWithoutSchedulesInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUpdateManyWithoutProvidersNestedInput
    users?: usersUpdateOneRequiredWithoutProvidersNestedInput
    wallets?: walletsUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutSchedulesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUncheckedUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutProvidersNestedInput
  }

  export type conversationsCreateWithoutUsersInput = {
    last_message?: string | null
    updated_at?: Date | string | null
    providers: providersCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutUsersInput = {
    id?: number
    provider_id: number
    last_message?: string | null
    updated_at?: Date | string | null
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutUsersInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput>
  }

  export type conversationsCreateManyUsersInputEnvelope = {
    data: Enumerable<conversationsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutUsersInput = {
    content?: string | null
    is_read?: boolean | null
    conversations: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    id?: number
    conversation_id: number
    content?: string | null
    is_read?: boolean | null
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesCreateManyUsersInputEnvelope = {
    data: Enumerable<messagesCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsersInput = {
    title?: string | null
    message?: string | null
    type?: notifications_type | null
    is_read?: boolean | null
  }

  export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    message?: string | null
    type?: notifications_type | null
    is_read?: boolean | null
  }

  export type notificationsCreateOrConnectWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateManyUsersInputEnvelope = {
    data: Enumerable<notificationsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type providersCreateWithoutUsersInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsCreateNestedManyWithoutProvidersInput
    schedules?: schedulesCreateNestedManyWithoutProvidersInput
    wallets?: walletsCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutUsersInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsUncheckedCreateNestedManyWithoutProvidersInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutProvidersInput
    wallets?: walletsUncheckedCreateNestedOneWithoutProvidersInput
  }

  export type providersCreateOrConnectWithoutUsersInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
  }

  export type conversationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutUsersInput, conversationsUncheckedUpdateWithoutUsersInput>
    create: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutUsersInput, conversationsUncheckedUpdateWithoutUsersInput>
  }

  export type conversationsUpdateManyWithWhereWithoutUsersInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutConversationsInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutMessagesInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: Enumerable<notificationsScalarWhereInput>
    OR?: Enumerable<notificationsScalarWhereInput>
    NOT?: Enumerable<notificationsScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    title?: StringNullableFilter | string | null
    message?: StringNullableFilter | string | null
    type?: Enumnotifications_typeNullableFilter | notifications_type | null
    is_read?: BoolNullableFilter | boolean | null
  }

  export type providersUpsertWithoutUsersInput = {
    update: XOR<providersUpdateWithoutUsersInput, providersUncheckedUpdateWithoutUsersInput>
    create: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
  }

  export type providersUpdateWithoutUsersInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUpdateManyWithoutProvidersNestedInput
    schedules?: schedulesUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutUsersInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUncheckedUpdateManyWithoutProvidersNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutProvidersNestedInput
    wallets?: walletsUncheckedUpdateOneWithoutProvidersNestedInput
  }

  export type providersCreateWithoutWalletsInput = {
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsCreateNestedManyWithoutProvidersInput
    users: usersCreateNestedOneWithoutProvidersInput
    schedules?: schedulesCreateNestedManyWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutWalletsInput = {
    user_id: number
    business_name?: string | null
    description?: string | null
    address?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    kyc_status?: providers_kyc_status | null
    trust_score?: Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedCreateNestedManyWithoutProvidersInput
    payout_requests?: payout_requestsUncheckedCreateNestedManyWithoutProvidersInput
    schedules?: schedulesUncheckedCreateNestedManyWithoutProvidersInput
  }

  export type providersCreateOrConnectWithoutWalletsInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutWalletsInput, providersUncheckedCreateWithoutWalletsInput>
  }

  export type providersUpsertWithoutWalletsInput = {
    update: XOR<providersUpdateWithoutWalletsInput, providersUncheckedUpdateWithoutWalletsInput>
    create: XOR<providersCreateWithoutWalletsInput, providersUncheckedCreateWithoutWalletsInput>
  }

  export type providersUpdateWithoutWalletsInput = {
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUpdateManyWithoutProvidersNestedInput
    users?: usersUpdateOneRequiredWithoutProvidersNestedInput
    schedules?: schedulesUpdateManyWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutWalletsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    kyc_status?: NullableEnumproviders_kyc_statusFieldUpdateOperationsInput | providers_kyc_status | null
    trust_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    conversations?: conversationsUncheckedUpdateManyWithoutProvidersNestedInput
    payout_requests?: payout_requestsUncheckedUpdateManyWithoutProvidersNestedInput
    schedules?: schedulesUncheckedUpdateManyWithoutProvidersNestedInput
  }

  export type messagesCreateManyConversationsInput = {
    id?: number
    sender_id: number
    content?: string | null
    is_read?: boolean | null
  }

  export type messagesUpdateWithoutConversationsInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type messagesUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type conversationsCreateManyProvidersInput = {
    id?: number
    customer_id: number
    last_message?: string | null
    updated_at?: Date | string | null
  }

  export type payout_requestsCreateManyProvidersInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: payout_requests_status | null
  }

  export type schedulesCreateManyProvidersInput = {
    id?: number
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    is_day_off?: boolean | null
  }

  export type conversationsUpdateWithoutProvidersInput = {
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payout_requestsUpdateWithoutProvidersInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
  }

  export type payout_requestsUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
  }

  export type payout_requestsUncheckedUpdateManyWithoutPayout_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bank_info?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableEnumpayout_requests_statusFieldUpdateOperationsInput | payout_requests_status | null
  }

  export type schedulesUpdateWithoutProvidersInput = {
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type schedulesUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type schedulesUncheckedUpdateManyWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_day_off?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type conversationsCreateManyUsersInput = {
    id?: number
    provider_id: number
    last_message?: string | null
    updated_at?: Date | string | null
  }

  export type messagesCreateManyUsersInput = {
    id?: number
    conversation_id: number
    content?: string | null
    is_read?: boolean | null
  }

  export type notificationsCreateManyUsersInput = {
    id?: number
    title?: string | null
    message?: string | null
    type?: notifications_type | null
    is_read?: boolean | null
  }

  export type conversationsUpdateWithoutUsersInput = {
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providers?: providersUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider_id?: IntFieldUpdateOperationsInput | number
    last_message?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type messagesUpdateWithoutUsersInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversation_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificationsUncheckedUpdateManyWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumnotifications_typeFieldUpdateOperationsInput | notifications_type | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
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