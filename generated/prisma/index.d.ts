
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
 * Model alerta
 * 
 */
export type alerta = $Result.DefaultSelection<Prisma.$alertaPayload>
/**
 * Model categoria_doacao
 * 
 */
export type categoria_doacao = $Result.DefaultSelection<Prisma.$categoria_doacaoPayload>
/**
 * Model doadores
 * 
 */
export type doadores = $Result.DefaultSelection<Prisma.$doadoresPayload>
/**
 * Model feedback
 * 
 */
export type feedback = $Result.DefaultSelection<Prisma.$feedbackPayload>
/**
 * Model impacto_social
 * 
 */
export type impacto_social = $Result.DefaultSelection<Prisma.$impacto_socialPayload>
/**
 * Model localizacao
 * 
 */
export type localizacao = $Result.DefaultSelection<Prisma.$localizacaoPayload>
/**
 * Model organizacao
 * 
 */
export type organizacao = $Result.DefaultSelection<Prisma.$organizacaoPayload>
/**
 * Model voluntarios
 * 
 */
export type voluntarios = $Result.DefaultSelection<Prisma.$voluntariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const alerta_tipo_alerta: {
  urgente: 'urgente',
  n_o_urgente: 'n_o_urgente'
};

export type alerta_tipo_alerta = (typeof alerta_tipo_alerta)[keyof typeof alerta_tipo_alerta]


export const feedback_critica: {
  positiva: 'positiva',
  negativa: 'negativa'
};

export type feedback_critica = (typeof feedback_critica)[keyof typeof feedback_critica]


export const categoria_doacao_tipo_doacao: {
  roupas: 'roupas',
  alimento: 'alimento',
  remedio: 'remedio',
  higiene: 'higiene'
};

export type categoria_doacao_tipo_doacao = (typeof categoria_doacao_tipo_doacao)[keyof typeof categoria_doacao_tipo_doacao]

}

export type alerta_tipo_alerta = $Enums.alerta_tipo_alerta

export const alerta_tipo_alerta: typeof $Enums.alerta_tipo_alerta

export type feedback_critica = $Enums.feedback_critica

export const feedback_critica: typeof $Enums.feedback_critica

export type categoria_doacao_tipo_doacao = $Enums.categoria_doacao_tipo_doacao

export const categoria_doacao_tipo_doacao: typeof $Enums.categoria_doacao_tipo_doacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alertas
 * const alertas = await prisma.alerta.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Alertas
   * const alertas = await prisma.alerta.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alerta`: Exposes CRUD operations for the **alerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alertas
    * const alertas = await prisma.alerta.findMany()
    * ```
    */
  get alerta(): Prisma.alertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria_doacao`: Exposes CRUD operations for the **categoria_doacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categoria_doacaos
    * const categoria_doacaos = await prisma.categoria_doacao.findMany()
    * ```
    */
  get categoria_doacao(): Prisma.categoria_doacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doadores`: Exposes CRUD operations for the **doadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doadores
    * const doadores = await prisma.doadores.findMany()
    * ```
    */
  get doadores(): Prisma.doadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.feedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.impacto_social`: Exposes CRUD operations for the **impacto_social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Impacto_socials
    * const impacto_socials = await prisma.impacto_social.findMany()
    * ```
    */
  get impacto_social(): Prisma.impacto_socialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.localizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizacao`: Exposes CRUD operations for the **organizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizacaos
    * const organizacaos = await prisma.organizacao.findMany()
    * ```
    */
  get organizacao(): Prisma.organizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voluntarios`: Exposes CRUD operations for the **voluntarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voluntarios
    * const voluntarios = await prisma.voluntarios.findMany()
    * ```
    */
  get voluntarios(): Prisma.voluntariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    alerta: 'alerta',
    categoria_doacao: 'categoria_doacao',
    doadores: 'doadores',
    feedback: 'feedback',
    impacto_social: 'impacto_social',
    localizacao: 'localizacao',
    organizacao: 'organizacao',
    voluntarios: 'voluntarios'
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
      modelProps: "alerta" | "categoria_doacao" | "doadores" | "feedback" | "impacto_social" | "localizacao" | "organizacao" | "voluntarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alerta: {
        payload: Prisma.$alertaPayload<ExtArgs>
        fields: Prisma.alertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>
          }
          findFirst: {
            args: Prisma.alertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>
          }
          findMany: {
            args: Prisma.alertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>[]
          }
          create: {
            args: Prisma.alertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>
          }
          createMany: {
            args: Prisma.alertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alertaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>[]
          }
          delete: {
            args: Prisma.alertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>
          }
          update: {
            args: Prisma.alertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>
          }
          deleteMany: {
            args: Prisma.alertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alertaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>[]
          }
          upsert: {
            args: Prisma.alertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertaPayload>
          }
          aggregate: {
            args: Prisma.AlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerta>
          }
          groupBy: {
            args: Prisma.alertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.alertaCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaCountAggregateOutputType> | number
          }
        }
      }
      categoria_doacao: {
        payload: Prisma.$categoria_doacaoPayload<ExtArgs>
        fields: Prisma.categoria_doacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoria_doacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoria_doacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>
          }
          findFirst: {
            args: Prisma.categoria_doacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoria_doacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>
          }
          findMany: {
            args: Prisma.categoria_doacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>[]
          }
          create: {
            args: Prisma.categoria_doacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>
          }
          createMany: {
            args: Prisma.categoria_doacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoria_doacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>[]
          }
          delete: {
            args: Prisma.categoria_doacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>
          }
          update: {
            args: Prisma.categoria_doacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>
          }
          deleteMany: {
            args: Prisma.categoria_doacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoria_doacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoria_doacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>[]
          }
          upsert: {
            args: Prisma.categoria_doacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoria_doacaoPayload>
          }
          aggregate: {
            args: Prisma.Categoria_doacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria_doacao>
          }
          groupBy: {
            args: Prisma.categoria_doacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Categoria_doacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoria_doacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Categoria_doacaoCountAggregateOutputType> | number
          }
        }
      }
      doadores: {
        payload: Prisma.$doadoresPayload<ExtArgs>
        fields: Prisma.doadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>
          }
          findFirst: {
            args: Prisma.doadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>
          }
          findMany: {
            args: Prisma.doadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>[]
          }
          create: {
            args: Prisma.doadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>
          }
          createMany: {
            args: Prisma.doadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>[]
          }
          delete: {
            args: Prisma.doadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>
          }
          update: {
            args: Prisma.doadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>
          }
          deleteMany: {
            args: Prisma.doadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>[]
          }
          upsert: {
            args: Prisma.doadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doadoresPayload>
          }
          aggregate: {
            args: Prisma.DoadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoadores>
          }
          groupBy: {
            args: Prisma.doadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.doadoresCountArgs<ExtArgs>
            result: $Utils.Optional<DoadoresCountAggregateOutputType> | number
          }
        }
      }
      feedback: {
        payload: Prisma.$feedbackPayload<ExtArgs>
        fields: Prisma.feedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findFirst: {
            args: Prisma.feedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findMany: {
            args: Prisma.feedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          create: {
            args: Prisma.feedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          createMany: {
            args: Prisma.feedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          delete: {
            args: Prisma.feedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          update: {
            args: Prisma.feedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          deleteMany: {
            args: Prisma.feedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          upsert: {
            args: Prisma.feedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.feedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      impacto_social: {
        payload: Prisma.$impacto_socialPayload<ExtArgs>
        fields: Prisma.impacto_socialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.impacto_socialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.impacto_socialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>
          }
          findFirst: {
            args: Prisma.impacto_socialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.impacto_socialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>
          }
          findMany: {
            args: Prisma.impacto_socialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>[]
          }
          create: {
            args: Prisma.impacto_socialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>
          }
          createMany: {
            args: Prisma.impacto_socialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.impacto_socialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>[]
          }
          delete: {
            args: Prisma.impacto_socialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>
          }
          update: {
            args: Prisma.impacto_socialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>
          }
          deleteMany: {
            args: Prisma.impacto_socialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.impacto_socialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.impacto_socialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>[]
          }
          upsert: {
            args: Prisma.impacto_socialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$impacto_socialPayload>
          }
          aggregate: {
            args: Prisma.Impacto_socialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImpacto_social>
          }
          groupBy: {
            args: Prisma.impacto_socialGroupByArgs<ExtArgs>
            result: $Utils.Optional<Impacto_socialGroupByOutputType>[]
          }
          count: {
            args: Prisma.impacto_socialCountArgs<ExtArgs>
            result: $Utils.Optional<Impacto_socialCountAggregateOutputType> | number
          }
        }
      }
      localizacao: {
        payload: Prisma.$localizacaoPayload<ExtArgs>
        fields: Prisma.localizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.localizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.localizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>
          }
          findFirst: {
            args: Prisma.localizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.localizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>
          }
          findMany: {
            args: Prisma.localizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>[]
          }
          create: {
            args: Prisma.localizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>
          }
          createMany: {
            args: Prisma.localizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.localizacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>[]
          }
          delete: {
            args: Prisma.localizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>
          }
          update: {
            args: Prisma.localizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>
          }
          deleteMany: {
            args: Prisma.localizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.localizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.localizacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>[]
          }
          upsert: {
            args: Prisma.localizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$localizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.localizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.localizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
      organizacao: {
        payload: Prisma.$organizacaoPayload<ExtArgs>
        fields: Prisma.organizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          findFirst: {
            args: Prisma.organizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          findMany: {
            args: Prisma.organizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>[]
          }
          create: {
            args: Prisma.organizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          createMany: {
            args: Prisma.organizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>[]
          }
          delete: {
            args: Prisma.organizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          update: {
            args: Prisma.organizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          deleteMany: {
            args: Prisma.organizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>[]
          }
          upsert: {
            args: Prisma.organizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacaoPayload>
          }
          aggregate: {
            args: Prisma.OrganizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizacao>
          }
          groupBy: {
            args: Prisma.organizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizacaoCountAggregateOutputType> | number
          }
        }
      }
      voluntarios: {
        payload: Prisma.$voluntariosPayload<ExtArgs>
        fields: Prisma.voluntariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voluntariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voluntariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          findFirst: {
            args: Prisma.voluntariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voluntariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          findMany: {
            args: Prisma.voluntariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>[]
          }
          create: {
            args: Prisma.voluntariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          createMany: {
            args: Prisma.voluntariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voluntariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>[]
          }
          delete: {
            args: Prisma.voluntariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          update: {
            args: Prisma.voluntariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          deleteMany: {
            args: Prisma.voluntariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voluntariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voluntariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>[]
          }
          upsert: {
            args: Prisma.voluntariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          aggregate: {
            args: Prisma.VoluntariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoluntarios>
          }
          groupBy: {
            args: Prisma.voluntariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoluntariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.voluntariosCountArgs<ExtArgs>
            result: $Utils.Optional<VoluntariosCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    alerta?: alertaOmit
    categoria_doacao?: categoria_doacaoOmit
    doadores?: doadoresOmit
    feedback?: feedbackOmit
    impacto_social?: impacto_socialOmit
    localizacao?: localizacaoOmit
    organizacao?: organizacaoOmit
    voluntarios?: voluntariosOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Categoria_doacaoCountOutputType
   */

  export type Categoria_doacaoCountOutputType = {
    impacto_social: number
  }

  export type Categoria_doacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    impacto_social?: boolean | Categoria_doacaoCountOutputTypeCountImpacto_socialArgs
  }

  // Custom InputTypes
  /**
   * Categoria_doacaoCountOutputType without action
   */
  export type Categoria_doacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_doacaoCountOutputType
     */
    select?: Categoria_doacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Categoria_doacaoCountOutputType without action
   */
  export type Categoria_doacaoCountOutputTypeCountImpacto_socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: impacto_socialWhereInput
  }


  /**
   * Count Type DoadoresCountOutputType
   */

  export type DoadoresCountOutputType = {
    alerta: number
    categoria_doacao: number
    feedback: number
    organizacao: number
  }

  export type DoadoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | DoadoresCountOutputTypeCountAlertaArgs
    categoria_doacao?: boolean | DoadoresCountOutputTypeCountCategoria_doacaoArgs
    feedback?: boolean | DoadoresCountOutputTypeCountFeedbackArgs
    organizacao?: boolean | DoadoresCountOutputTypeCountOrganizacaoArgs
  }

  // Custom InputTypes
  /**
   * DoadoresCountOutputType without action
   */
  export type DoadoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoadoresCountOutputType
     */
    select?: DoadoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoadoresCountOutputType without action
   */
  export type DoadoresCountOutputTypeCountAlertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alertaWhereInput
  }

  /**
   * DoadoresCountOutputType without action
   */
  export type DoadoresCountOutputTypeCountCategoria_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoria_doacaoWhereInput
  }

  /**
   * DoadoresCountOutputType without action
   */
  export type DoadoresCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
  }

  /**
   * DoadoresCountOutputType without action
   */
  export type DoadoresCountOutputTypeCountOrganizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizacaoWhereInput
  }


  /**
   * Count Type LocalizacaoCountOutputType
   */

  export type LocalizacaoCountOutputType = {
    impacto_social: number
  }

  export type LocalizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    impacto_social?: boolean | LocalizacaoCountOutputTypeCountImpacto_socialArgs
  }

  // Custom InputTypes
  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalizacaoCountOutputType
     */
    select?: LocalizacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeCountImpacto_socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: impacto_socialWhereInput
  }


  /**
   * Count Type OrganizacaoCountOutputType
   */

  export type OrganizacaoCountOutputType = {
    alerta: number
    categoria_doacao: number
    feedback: number
    impacto_social: number
    localizacao: number
  }

  export type OrganizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | OrganizacaoCountOutputTypeCountAlertaArgs
    categoria_doacao?: boolean | OrganizacaoCountOutputTypeCountCategoria_doacaoArgs
    feedback?: boolean | OrganizacaoCountOutputTypeCountFeedbackArgs
    impacto_social?: boolean | OrganizacaoCountOutputTypeCountImpacto_socialArgs
    localizacao?: boolean | OrganizacaoCountOutputTypeCountLocalizacaoArgs
  }

  // Custom InputTypes
  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizacaoCountOutputType
     */
    select?: OrganizacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountAlertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alertaWhereInput
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountCategoria_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoria_doacaoWhereInput
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountImpacto_socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: impacto_socialWhereInput
  }

  /**
   * OrganizacaoCountOutputType without action
   */
  export type OrganizacaoCountOutputTypeCountLocalizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: localizacaoWhereInput
  }


  /**
   * Count Type VoluntariosCountOutputType
   */

  export type VoluntariosCountOutputType = {
    organizacao: number
  }

  export type VoluntariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | VoluntariosCountOutputTypeCountOrganizacaoArgs
  }

  // Custom InputTypes
  /**
   * VoluntariosCountOutputType without action
   */
  export type VoluntariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoluntariosCountOutputType
     */
    select?: VoluntariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoluntariosCountOutputType without action
   */
  export type VoluntariosCountOutputTypeCountOrganizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alerta
   */

  export type AggregateAlerta = {
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  export type AlertaAvgAggregateOutputType = {
    id_alerta: number | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type AlertaSumAggregateOutputType = {
    id_alerta: number | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type AlertaMinAggregateOutputType = {
    id_alerta: number | null
    tipo_alerta: $Enums.alerta_tipo_alerta | null
    descricao: string | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type AlertaMaxAggregateOutputType = {
    id_alerta: number | null
    tipo_alerta: $Enums.alerta_tipo_alerta | null
    descricao: string | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type AlertaCountAggregateOutputType = {
    id_alerta: number
    tipo_alerta: number
    descricao: number
    id_organizacao: number
    id_doadores: number
    _all: number
  }


  export type AlertaAvgAggregateInputType = {
    id_alerta?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type AlertaSumAggregateInputType = {
    id_alerta?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type AlertaMinAggregateInputType = {
    id_alerta?: true
    tipo_alerta?: true
    descricao?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type AlertaMaxAggregateInputType = {
    id_alerta?: true
    tipo_alerta?: true
    descricao?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type AlertaCountAggregateInputType = {
    id_alerta?: true
    tipo_alerta?: true
    descricao?: true
    id_organizacao?: true
    id_doadores?: true
    _all?: true
  }

  export type AlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alerta to aggregate.
     */
    where?: alertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alertas to fetch.
     */
    orderBy?: alertaOrderByWithRelationInput | alertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alertas
    **/
    _count?: true | AlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaMaxAggregateInputType
  }

  export type GetAlertaAggregateType<T extends AlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerta[P]>
      : GetScalarType<T[P], AggregateAlerta[P]>
  }




  export type alertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alertaWhereInput
    orderBy?: alertaOrderByWithAggregationInput | alertaOrderByWithAggregationInput[]
    by: AlertaScalarFieldEnum[] | AlertaScalarFieldEnum
    having?: alertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaCountAggregateInputType | true
    _avg?: AlertaAvgAggregateInputType
    _sum?: AlertaSumAggregateInputType
    _min?: AlertaMinAggregateInputType
    _max?: AlertaMaxAggregateInputType
  }

  export type AlertaGroupByOutputType = {
    id_alerta: number
    tipo_alerta: $Enums.alerta_tipo_alerta | null
    descricao: string | null
    id_organizacao: number | null
    id_doadores: number | null
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  type GetAlertaGroupByPayload<T extends alertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaGroupByOutputType[P]>
        }
      >
    >


  export type alertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alerta?: boolean
    tipo_alerta?: boolean
    descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
    organizacao?: boolean | alerta$organizacaoArgs<ExtArgs>
    doadores?: boolean | alerta$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type alertaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alerta?: boolean
    tipo_alerta?: boolean
    descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
    organizacao?: boolean | alerta$organizacaoArgs<ExtArgs>
    doadores?: boolean | alerta$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type alertaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alerta?: boolean
    tipo_alerta?: boolean
    descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
    organizacao?: boolean | alerta$organizacaoArgs<ExtArgs>
    doadores?: boolean | alerta$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>

  export type alertaSelectScalar = {
    id_alerta?: boolean
    tipo_alerta?: boolean
    descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
  }

  export type alertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_alerta" | "tipo_alerta" | "descricao" | "id_organizacao" | "id_doadores", ExtArgs["result"]["alerta"]>
  export type alertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | alerta$organizacaoArgs<ExtArgs>
    doadores?: boolean | alerta$doadoresArgs<ExtArgs>
  }
  export type alertaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | alerta$organizacaoArgs<ExtArgs>
    doadores?: boolean | alerta$doadoresArgs<ExtArgs>
  }
  export type alertaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | alerta$organizacaoArgs<ExtArgs>
    doadores?: boolean | alerta$doadoresArgs<ExtArgs>
  }

  export type $alertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alerta"
    objects: {
      organizacao: Prisma.$organizacaoPayload<ExtArgs> | null
      doadores: Prisma.$doadoresPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_alerta: number
      tipo_alerta: $Enums.alerta_tipo_alerta | null
      descricao: string | null
      id_organizacao: number | null
      id_doadores: number | null
    }, ExtArgs["result"]["alerta"]>
    composites: {}
  }

  type alertaGetPayload<S extends boolean | null | undefined | alertaDefaultArgs> = $Result.GetResult<Prisma.$alertaPayload, S>

  type alertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertaCountAggregateInputType | true
    }

  export interface alertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alerta'], meta: { name: 'alerta' } }
    /**
     * Find zero or one Alerta that matches the filter.
     * @param {alertaFindUniqueArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alertaFindUniqueArgs>(args: SelectSubset<T, alertaFindUniqueArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alerta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alertaFindUniqueOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alertaFindUniqueOrThrowArgs>(args: SelectSubset<T, alertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertaFindFirstArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alertaFindFirstArgs>(args?: SelectSubset<T, alertaFindFirstArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertaFindFirstOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alertaFindFirstOrThrowArgs>(args?: SelectSubset<T, alertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alertas
     * const alertas = await prisma.alerta.findMany()
     * 
     * // Get first 10 Alertas
     * const alertas = await prisma.alerta.findMany({ take: 10 })
     * 
     * // Only select the `id_alerta`
     * const alertaWithId_alertaOnly = await prisma.alerta.findMany({ select: { id_alerta: true } })
     * 
     */
    findMany<T extends alertaFindManyArgs>(args?: SelectSubset<T, alertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alerta.
     * @param {alertaCreateArgs} args - Arguments to create a Alerta.
     * @example
     * // Create one Alerta
     * const Alerta = await prisma.alerta.create({
     *   data: {
     *     // ... data to create a Alerta
     *   }
     * })
     * 
     */
    create<T extends alertaCreateArgs>(args: SelectSubset<T, alertaCreateArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alertas.
     * @param {alertaCreateManyArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alertaCreateManyArgs>(args?: SelectSubset<T, alertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alertas and returns the data saved in the database.
     * @param {alertaCreateManyAndReturnArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alertas and only return the `id_alerta`
     * const alertaWithId_alertaOnly = await prisma.alerta.createManyAndReturn({
     *   select: { id_alerta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alertaCreateManyAndReturnArgs>(args?: SelectSubset<T, alertaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alerta.
     * @param {alertaDeleteArgs} args - Arguments to delete one Alerta.
     * @example
     * // Delete one Alerta
     * const Alerta = await prisma.alerta.delete({
     *   where: {
     *     // ... filter to delete one Alerta
     *   }
     * })
     * 
     */
    delete<T extends alertaDeleteArgs>(args: SelectSubset<T, alertaDeleteArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alerta.
     * @param {alertaUpdateArgs} args - Arguments to update one Alerta.
     * @example
     * // Update one Alerta
     * const alerta = await prisma.alerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alertaUpdateArgs>(args: SelectSubset<T, alertaUpdateArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alertas.
     * @param {alertaDeleteManyArgs} args - Arguments to filter Alertas to delete.
     * @example
     * // Delete a few Alertas
     * const { count } = await prisma.alerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alertaDeleteManyArgs>(args?: SelectSubset<T, alertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alertaUpdateManyArgs>(args: SelectSubset<T, alertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas and returns the data updated in the database.
     * @param {alertaUpdateManyAndReturnArgs} args - Arguments to update many Alertas.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alertas and only return the `id_alerta`
     * const alertaWithId_alertaOnly = await prisma.alerta.updateManyAndReturn({
     *   select: { id_alerta: true },
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
    updateManyAndReturn<T extends alertaUpdateManyAndReturnArgs>(args: SelectSubset<T, alertaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alerta.
     * @param {alertaUpsertArgs} args - Arguments to update or create a Alerta.
     * @example
     * // Update or create a Alerta
     * const alerta = await prisma.alerta.upsert({
     *   create: {
     *     // ... data to create a Alerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta we want to update
     *   }
     * })
     */
    upsert<T extends alertaUpsertArgs>(args: SelectSubset<T, alertaUpsertArgs<ExtArgs>>): Prisma__alertaClient<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertaCountArgs} args - Arguments to filter Alertas to count.
     * @example
     * // Count the number of Alertas
     * const count = await prisma.alerta.count({
     *   where: {
     *     // ... the filter for the Alertas we want to count
     *   }
     * })
    **/
    count<T extends alertaCountArgs>(
      args?: Subset<T, alertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertaAggregateArgs>(args: Subset<T, AlertaAggregateArgs>): Prisma.PrismaPromise<GetAlertaAggregateType<T>>

    /**
     * Group by Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertaGroupByArgs} args - Group by arguments.
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
      T extends alertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alertaGroupByArgs['orderBy'] }
        : { orderBy?: alertaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alerta model
   */
  readonly fields: alertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacao<T extends alerta$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, alerta$organizacaoArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doadores<T extends alerta$doadoresArgs<ExtArgs> = {}>(args?: Subset<T, alerta$doadoresArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the alerta model
   */
  interface alertaFieldRefs {
    readonly id_alerta: FieldRef<"alerta", 'Int'>
    readonly tipo_alerta: FieldRef<"alerta", 'alerta_tipo_alerta'>
    readonly descricao: FieldRef<"alerta", 'String'>
    readonly id_organizacao: FieldRef<"alerta", 'Int'>
    readonly id_doadores: FieldRef<"alerta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * alerta findUnique
   */
  export type alertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * Filter, which alerta to fetch.
     */
    where: alertaWhereUniqueInput
  }

  /**
   * alerta findUniqueOrThrow
   */
  export type alertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * Filter, which alerta to fetch.
     */
    where: alertaWhereUniqueInput
  }

  /**
   * alerta findFirst
   */
  export type alertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * Filter, which alerta to fetch.
     */
    where?: alertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alertas to fetch.
     */
    orderBy?: alertaOrderByWithRelationInput | alertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alertas.
     */
    cursor?: alertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * alerta findFirstOrThrow
   */
  export type alertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * Filter, which alerta to fetch.
     */
    where?: alertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alertas to fetch.
     */
    orderBy?: alertaOrderByWithRelationInput | alertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alertas.
     */
    cursor?: alertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * alerta findMany
   */
  export type alertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * Filter, which alertas to fetch.
     */
    where?: alertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alertas to fetch.
     */
    orderBy?: alertaOrderByWithRelationInput | alertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alertas.
     */
    cursor?: alertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alertas.
     */
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * alerta create
   */
  export type alertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * The data needed to create a alerta.
     */
    data?: XOR<alertaCreateInput, alertaUncheckedCreateInput>
  }

  /**
   * alerta createMany
   */
  export type alertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alertas.
     */
    data: alertaCreateManyInput | alertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alerta createManyAndReturn
   */
  export type alertaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * The data used to create many alertas.
     */
    data: alertaCreateManyInput | alertaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * alerta update
   */
  export type alertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * The data needed to update a alerta.
     */
    data: XOR<alertaUpdateInput, alertaUncheckedUpdateInput>
    /**
     * Choose, which alerta to update.
     */
    where: alertaWhereUniqueInput
  }

  /**
   * alerta updateMany
   */
  export type alertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alertas.
     */
    data: XOR<alertaUpdateManyMutationInput, alertaUncheckedUpdateManyInput>
    /**
     * Filter which alertas to update
     */
    where?: alertaWhereInput
    /**
     * Limit how many alertas to update.
     */
    limit?: number
  }

  /**
   * alerta updateManyAndReturn
   */
  export type alertaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * The data used to update alertas.
     */
    data: XOR<alertaUpdateManyMutationInput, alertaUncheckedUpdateManyInput>
    /**
     * Filter which alertas to update
     */
    where?: alertaWhereInput
    /**
     * Limit how many alertas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * alerta upsert
   */
  export type alertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * The filter to search for the alerta to update in case it exists.
     */
    where: alertaWhereUniqueInput
    /**
     * In case the alerta found by the `where` argument doesn't exist, create a new alerta with this data.
     */
    create: XOR<alertaCreateInput, alertaUncheckedCreateInput>
    /**
     * In case the alerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alertaUpdateInput, alertaUncheckedUpdateInput>
  }

  /**
   * alerta delete
   */
  export type alertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    /**
     * Filter which alerta to delete.
     */
    where: alertaWhereUniqueInput
  }

  /**
   * alerta deleteMany
   */
  export type alertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alertas to delete
     */
    where?: alertaWhereInput
    /**
     * Limit how many alertas to delete.
     */
    limit?: number
  }

  /**
   * alerta.organizacao
   */
  export type alerta$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
  }

  /**
   * alerta.doadores
   */
  export type alerta$doadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    where?: doadoresWhereInput
  }

  /**
   * alerta without action
   */
  export type alertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
  }


  /**
   * Model categoria_doacao
   */

  export type AggregateCategoria_doacao = {
    _count: Categoria_doacaoCountAggregateOutputType | null
    _avg: Categoria_doacaoAvgAggregateOutputType | null
    _sum: Categoria_doacaoSumAggregateOutputType | null
    _min: Categoria_doacaoMinAggregateOutputType | null
    _max: Categoria_doacaoMaxAggregateOutputType | null
  }

  export type Categoria_doacaoAvgAggregateOutputType = {
    id_doacao: number | null
    quantidade: number | null
    id_doadores: number | null
    id_organizacao: number | null
  }

  export type Categoria_doacaoSumAggregateOutputType = {
    id_doacao: number | null
    quantidade: number | null
    id_doadores: number | null
    id_organizacao: number | null
  }

  export type Categoria_doacaoMinAggregateOutputType = {
    id_doacao: number | null
    quantidade: number | null
    tipo_doacao: $Enums.categoria_doacao_tipo_doacao | null
    validade: Date | null
    id_doadores: number | null
    id_organizacao: number | null
  }

  export type Categoria_doacaoMaxAggregateOutputType = {
    id_doacao: number | null
    quantidade: number | null
    tipo_doacao: $Enums.categoria_doacao_tipo_doacao | null
    validade: Date | null
    id_doadores: number | null
    id_organizacao: number | null
  }

  export type Categoria_doacaoCountAggregateOutputType = {
    id_doacao: number
    quantidade: number
    tipo_doacao: number
    validade: number
    id_doadores: number
    id_organizacao: number
    _all: number
  }


  export type Categoria_doacaoAvgAggregateInputType = {
    id_doacao?: true
    quantidade?: true
    id_doadores?: true
    id_organizacao?: true
  }

  export type Categoria_doacaoSumAggregateInputType = {
    id_doacao?: true
    quantidade?: true
    id_doadores?: true
    id_organizacao?: true
  }

  export type Categoria_doacaoMinAggregateInputType = {
    id_doacao?: true
    quantidade?: true
    tipo_doacao?: true
    validade?: true
    id_doadores?: true
    id_organizacao?: true
  }

  export type Categoria_doacaoMaxAggregateInputType = {
    id_doacao?: true
    quantidade?: true
    tipo_doacao?: true
    validade?: true
    id_doadores?: true
    id_organizacao?: true
  }

  export type Categoria_doacaoCountAggregateInputType = {
    id_doacao?: true
    quantidade?: true
    tipo_doacao?: true
    validade?: true
    id_doadores?: true
    id_organizacao?: true
    _all?: true
  }

  export type Categoria_doacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria_doacao to aggregate.
     */
    where?: categoria_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_doacaos to fetch.
     */
    orderBy?: categoria_doacaoOrderByWithRelationInput | categoria_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoria_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categoria_doacaos
    **/
    _count?: true | Categoria_doacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Categoria_doacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Categoria_doacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Categoria_doacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Categoria_doacaoMaxAggregateInputType
  }

  export type GetCategoria_doacaoAggregateType<T extends Categoria_doacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria_doacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria_doacao[P]>
      : GetScalarType<T[P], AggregateCategoria_doacao[P]>
  }




  export type categoria_doacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoria_doacaoWhereInput
    orderBy?: categoria_doacaoOrderByWithAggregationInput | categoria_doacaoOrderByWithAggregationInput[]
    by: Categoria_doacaoScalarFieldEnum[] | Categoria_doacaoScalarFieldEnum
    having?: categoria_doacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Categoria_doacaoCountAggregateInputType | true
    _avg?: Categoria_doacaoAvgAggregateInputType
    _sum?: Categoria_doacaoSumAggregateInputType
    _min?: Categoria_doacaoMinAggregateInputType
    _max?: Categoria_doacaoMaxAggregateInputType
  }

  export type Categoria_doacaoGroupByOutputType = {
    id_doacao: number
    quantidade: number | null
    tipo_doacao: $Enums.categoria_doacao_tipo_doacao | null
    validade: Date | null
    id_doadores: number | null
    id_organizacao: number | null
    _count: Categoria_doacaoCountAggregateOutputType | null
    _avg: Categoria_doacaoAvgAggregateOutputType | null
    _sum: Categoria_doacaoSumAggregateOutputType | null
    _min: Categoria_doacaoMinAggregateOutputType | null
    _max: Categoria_doacaoMaxAggregateOutputType | null
  }

  type GetCategoria_doacaoGroupByPayload<T extends categoria_doacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Categoria_doacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Categoria_doacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Categoria_doacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Categoria_doacaoGroupByOutputType[P]>
        }
      >
    >


  export type categoria_doacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_doacao?: boolean
    quantidade?: boolean
    tipo_doacao?: boolean
    validade?: boolean
    id_doadores?: boolean
    id_organizacao?: boolean
    organizacao?: boolean | categoria_doacao$organizacaoArgs<ExtArgs>
    doadores?: boolean | categoria_doacao$doadoresArgs<ExtArgs>
    impacto_social?: boolean | categoria_doacao$impacto_socialArgs<ExtArgs>
    _count?: boolean | Categoria_doacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria_doacao"]>

  export type categoria_doacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_doacao?: boolean
    quantidade?: boolean
    tipo_doacao?: boolean
    validade?: boolean
    id_doadores?: boolean
    id_organizacao?: boolean
    organizacao?: boolean | categoria_doacao$organizacaoArgs<ExtArgs>
    doadores?: boolean | categoria_doacao$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["categoria_doacao"]>

  export type categoria_doacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_doacao?: boolean
    quantidade?: boolean
    tipo_doacao?: boolean
    validade?: boolean
    id_doadores?: boolean
    id_organizacao?: boolean
    organizacao?: boolean | categoria_doacao$organizacaoArgs<ExtArgs>
    doadores?: boolean | categoria_doacao$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["categoria_doacao"]>

  export type categoria_doacaoSelectScalar = {
    id_doacao?: boolean
    quantidade?: boolean
    tipo_doacao?: boolean
    validade?: boolean
    id_doadores?: boolean
    id_organizacao?: boolean
  }

  export type categoria_doacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_doacao" | "quantidade" | "tipo_doacao" | "validade" | "id_doadores" | "id_organizacao", ExtArgs["result"]["categoria_doacao"]>
  export type categoria_doacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | categoria_doacao$organizacaoArgs<ExtArgs>
    doadores?: boolean | categoria_doacao$doadoresArgs<ExtArgs>
    impacto_social?: boolean | categoria_doacao$impacto_socialArgs<ExtArgs>
    _count?: boolean | Categoria_doacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoria_doacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | categoria_doacao$organizacaoArgs<ExtArgs>
    doadores?: boolean | categoria_doacao$doadoresArgs<ExtArgs>
  }
  export type categoria_doacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | categoria_doacao$organizacaoArgs<ExtArgs>
    doadores?: boolean | categoria_doacao$doadoresArgs<ExtArgs>
  }

  export type $categoria_doacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria_doacao"
    objects: {
      organizacao: Prisma.$organizacaoPayload<ExtArgs> | null
      doadores: Prisma.$doadoresPayload<ExtArgs> | null
      impacto_social: Prisma.$impacto_socialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_doacao: number
      quantidade: number | null
      tipo_doacao: $Enums.categoria_doacao_tipo_doacao | null
      validade: Date | null
      id_doadores: number | null
      id_organizacao: number | null
    }, ExtArgs["result"]["categoria_doacao"]>
    composites: {}
  }

  type categoria_doacaoGetPayload<S extends boolean | null | undefined | categoria_doacaoDefaultArgs> = $Result.GetResult<Prisma.$categoria_doacaoPayload, S>

  type categoria_doacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoria_doacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Categoria_doacaoCountAggregateInputType | true
    }

  export interface categoria_doacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria_doacao'], meta: { name: 'categoria_doacao' } }
    /**
     * Find zero or one Categoria_doacao that matches the filter.
     * @param {categoria_doacaoFindUniqueArgs} args - Arguments to find a Categoria_doacao
     * @example
     * // Get one Categoria_doacao
     * const categoria_doacao = await prisma.categoria_doacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoria_doacaoFindUniqueArgs>(args: SelectSubset<T, categoria_doacaoFindUniqueArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria_doacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoria_doacaoFindUniqueOrThrowArgs} args - Arguments to find a Categoria_doacao
     * @example
     * // Get one Categoria_doacao
     * const categoria_doacao = await prisma.categoria_doacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoria_doacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, categoria_doacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria_doacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_doacaoFindFirstArgs} args - Arguments to find a Categoria_doacao
     * @example
     * // Get one Categoria_doacao
     * const categoria_doacao = await prisma.categoria_doacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoria_doacaoFindFirstArgs>(args?: SelectSubset<T, categoria_doacaoFindFirstArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria_doacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_doacaoFindFirstOrThrowArgs} args - Arguments to find a Categoria_doacao
     * @example
     * // Get one Categoria_doacao
     * const categoria_doacao = await prisma.categoria_doacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoria_doacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, categoria_doacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categoria_doacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_doacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categoria_doacaos
     * const categoria_doacaos = await prisma.categoria_doacao.findMany()
     * 
     * // Get first 10 Categoria_doacaos
     * const categoria_doacaos = await prisma.categoria_doacao.findMany({ take: 10 })
     * 
     * // Only select the `id_doacao`
     * const categoria_doacaoWithId_doacaoOnly = await prisma.categoria_doacao.findMany({ select: { id_doacao: true } })
     * 
     */
    findMany<T extends categoria_doacaoFindManyArgs>(args?: SelectSubset<T, categoria_doacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria_doacao.
     * @param {categoria_doacaoCreateArgs} args - Arguments to create a Categoria_doacao.
     * @example
     * // Create one Categoria_doacao
     * const Categoria_doacao = await prisma.categoria_doacao.create({
     *   data: {
     *     // ... data to create a Categoria_doacao
     *   }
     * })
     * 
     */
    create<T extends categoria_doacaoCreateArgs>(args: SelectSubset<T, categoria_doacaoCreateArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categoria_doacaos.
     * @param {categoria_doacaoCreateManyArgs} args - Arguments to create many Categoria_doacaos.
     * @example
     * // Create many Categoria_doacaos
     * const categoria_doacao = await prisma.categoria_doacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoria_doacaoCreateManyArgs>(args?: SelectSubset<T, categoria_doacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categoria_doacaos and returns the data saved in the database.
     * @param {categoria_doacaoCreateManyAndReturnArgs} args - Arguments to create many Categoria_doacaos.
     * @example
     * // Create many Categoria_doacaos
     * const categoria_doacao = await prisma.categoria_doacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categoria_doacaos and only return the `id_doacao`
     * const categoria_doacaoWithId_doacaoOnly = await prisma.categoria_doacao.createManyAndReturn({
     *   select: { id_doacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoria_doacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, categoria_doacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria_doacao.
     * @param {categoria_doacaoDeleteArgs} args - Arguments to delete one Categoria_doacao.
     * @example
     * // Delete one Categoria_doacao
     * const Categoria_doacao = await prisma.categoria_doacao.delete({
     *   where: {
     *     // ... filter to delete one Categoria_doacao
     *   }
     * })
     * 
     */
    delete<T extends categoria_doacaoDeleteArgs>(args: SelectSubset<T, categoria_doacaoDeleteArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria_doacao.
     * @param {categoria_doacaoUpdateArgs} args - Arguments to update one Categoria_doacao.
     * @example
     * // Update one Categoria_doacao
     * const categoria_doacao = await prisma.categoria_doacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoria_doacaoUpdateArgs>(args: SelectSubset<T, categoria_doacaoUpdateArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categoria_doacaos.
     * @param {categoria_doacaoDeleteManyArgs} args - Arguments to filter Categoria_doacaos to delete.
     * @example
     * // Delete a few Categoria_doacaos
     * const { count } = await prisma.categoria_doacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoria_doacaoDeleteManyArgs>(args?: SelectSubset<T, categoria_doacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoria_doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_doacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categoria_doacaos
     * const categoria_doacao = await prisma.categoria_doacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoria_doacaoUpdateManyArgs>(args: SelectSubset<T, categoria_doacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoria_doacaos and returns the data updated in the database.
     * @param {categoria_doacaoUpdateManyAndReturnArgs} args - Arguments to update many Categoria_doacaos.
     * @example
     * // Update many Categoria_doacaos
     * const categoria_doacao = await prisma.categoria_doacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categoria_doacaos and only return the `id_doacao`
     * const categoria_doacaoWithId_doacaoOnly = await prisma.categoria_doacao.updateManyAndReturn({
     *   select: { id_doacao: true },
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
    updateManyAndReturn<T extends categoria_doacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, categoria_doacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria_doacao.
     * @param {categoria_doacaoUpsertArgs} args - Arguments to update or create a Categoria_doacao.
     * @example
     * // Update or create a Categoria_doacao
     * const categoria_doacao = await prisma.categoria_doacao.upsert({
     *   create: {
     *     // ... data to create a Categoria_doacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria_doacao we want to update
     *   }
     * })
     */
    upsert<T extends categoria_doacaoUpsertArgs>(args: SelectSubset<T, categoria_doacaoUpsertArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categoria_doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_doacaoCountArgs} args - Arguments to filter Categoria_doacaos to count.
     * @example
     * // Count the number of Categoria_doacaos
     * const count = await prisma.categoria_doacao.count({
     *   where: {
     *     // ... the filter for the Categoria_doacaos we want to count
     *   }
     * })
    **/
    count<T extends categoria_doacaoCountArgs>(
      args?: Subset<T, categoria_doacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Categoria_doacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria_doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_doacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Categoria_doacaoAggregateArgs>(args: Subset<T, Categoria_doacaoAggregateArgs>): Prisma.PrismaPromise<GetCategoria_doacaoAggregateType<T>>

    /**
     * Group by Categoria_doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoria_doacaoGroupByArgs} args - Group by arguments.
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
      T extends categoria_doacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoria_doacaoGroupByArgs['orderBy'] }
        : { orderBy?: categoria_doacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoria_doacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoria_doacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria_doacao model
   */
  readonly fields: categoria_doacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria_doacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoria_doacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacao<T extends categoria_doacao$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, categoria_doacao$organizacaoArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doadores<T extends categoria_doacao$doadoresArgs<ExtArgs> = {}>(args?: Subset<T, categoria_doacao$doadoresArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    impacto_social<T extends categoria_doacao$impacto_socialArgs<ExtArgs> = {}>(args?: Subset<T, categoria_doacao$impacto_socialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categoria_doacao model
   */
  interface categoria_doacaoFieldRefs {
    readonly id_doacao: FieldRef<"categoria_doacao", 'Int'>
    readonly quantidade: FieldRef<"categoria_doacao", 'Int'>
    readonly tipo_doacao: FieldRef<"categoria_doacao", 'categoria_doacao_tipo_doacao'>
    readonly validade: FieldRef<"categoria_doacao", 'DateTime'>
    readonly id_doadores: FieldRef<"categoria_doacao", 'Int'>
    readonly id_organizacao: FieldRef<"categoria_doacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categoria_doacao findUnique
   */
  export type categoria_doacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_doacao to fetch.
     */
    where: categoria_doacaoWhereUniqueInput
  }

  /**
   * categoria_doacao findUniqueOrThrow
   */
  export type categoria_doacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_doacao to fetch.
     */
    where: categoria_doacaoWhereUniqueInput
  }

  /**
   * categoria_doacao findFirst
   */
  export type categoria_doacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_doacao to fetch.
     */
    where?: categoria_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_doacaos to fetch.
     */
    orderBy?: categoria_doacaoOrderByWithRelationInput | categoria_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoria_doacaos.
     */
    cursor?: categoria_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoria_doacaos.
     */
    distinct?: Categoria_doacaoScalarFieldEnum | Categoria_doacaoScalarFieldEnum[]
  }

  /**
   * categoria_doacao findFirstOrThrow
   */
  export type categoria_doacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_doacao to fetch.
     */
    where?: categoria_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_doacaos to fetch.
     */
    orderBy?: categoria_doacaoOrderByWithRelationInput | categoria_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoria_doacaos.
     */
    cursor?: categoria_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoria_doacaos.
     */
    distinct?: Categoria_doacaoScalarFieldEnum | Categoria_doacaoScalarFieldEnum[]
  }

  /**
   * categoria_doacao findMany
   */
  export type categoria_doacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which categoria_doacaos to fetch.
     */
    where?: categoria_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoria_doacaos to fetch.
     */
    orderBy?: categoria_doacaoOrderByWithRelationInput | categoria_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categoria_doacaos.
     */
    cursor?: categoria_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoria_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoria_doacaos.
     */
    skip?: number
    distinct?: Categoria_doacaoScalarFieldEnum | Categoria_doacaoScalarFieldEnum[]
  }

  /**
   * categoria_doacao create
   */
  export type categoria_doacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria_doacao.
     */
    data?: XOR<categoria_doacaoCreateInput, categoria_doacaoUncheckedCreateInput>
  }

  /**
   * categoria_doacao createMany
   */
  export type categoria_doacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categoria_doacaos.
     */
    data: categoria_doacaoCreateManyInput | categoria_doacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria_doacao createManyAndReturn
   */
  export type categoria_doacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * The data used to create many categoria_doacaos.
     */
    data: categoria_doacaoCreateManyInput | categoria_doacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categoria_doacao update
   */
  export type categoria_doacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria_doacao.
     */
    data: XOR<categoria_doacaoUpdateInput, categoria_doacaoUncheckedUpdateInput>
    /**
     * Choose, which categoria_doacao to update.
     */
    where: categoria_doacaoWhereUniqueInput
  }

  /**
   * categoria_doacao updateMany
   */
  export type categoria_doacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categoria_doacaos.
     */
    data: XOR<categoria_doacaoUpdateManyMutationInput, categoria_doacaoUncheckedUpdateManyInput>
    /**
     * Filter which categoria_doacaos to update
     */
    where?: categoria_doacaoWhereInput
    /**
     * Limit how many categoria_doacaos to update.
     */
    limit?: number
  }

  /**
   * categoria_doacao updateManyAndReturn
   */
  export type categoria_doacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * The data used to update categoria_doacaos.
     */
    data: XOR<categoria_doacaoUpdateManyMutationInput, categoria_doacaoUncheckedUpdateManyInput>
    /**
     * Filter which categoria_doacaos to update
     */
    where?: categoria_doacaoWhereInput
    /**
     * Limit how many categoria_doacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categoria_doacao upsert
   */
  export type categoria_doacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria_doacao to update in case it exists.
     */
    where: categoria_doacaoWhereUniqueInput
    /**
     * In case the categoria_doacao found by the `where` argument doesn't exist, create a new categoria_doacao with this data.
     */
    create: XOR<categoria_doacaoCreateInput, categoria_doacaoUncheckedCreateInput>
    /**
     * In case the categoria_doacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoria_doacaoUpdateInput, categoria_doacaoUncheckedUpdateInput>
  }

  /**
   * categoria_doacao delete
   */
  export type categoria_doacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    /**
     * Filter which categoria_doacao to delete.
     */
    where: categoria_doacaoWhereUniqueInput
  }

  /**
   * categoria_doacao deleteMany
   */
  export type categoria_doacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria_doacaos to delete
     */
    where?: categoria_doacaoWhereInput
    /**
     * Limit how many categoria_doacaos to delete.
     */
    limit?: number
  }

  /**
   * categoria_doacao.organizacao
   */
  export type categoria_doacao$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
  }

  /**
   * categoria_doacao.doadores
   */
  export type categoria_doacao$doadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    where?: doadoresWhereInput
  }

  /**
   * categoria_doacao.impacto_social
   */
  export type categoria_doacao$impacto_socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    where?: impacto_socialWhereInput
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    cursor?: impacto_socialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Impacto_socialScalarFieldEnum | Impacto_socialScalarFieldEnum[]
  }

  /**
   * categoria_doacao without action
   */
  export type categoria_doacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
  }


  /**
   * Model doadores
   */

  export type AggregateDoadores = {
    _count: DoadoresCountAggregateOutputType | null
    _avg: DoadoresAvgAggregateOutputType | null
    _sum: DoadoresSumAggregateOutputType | null
    _min: DoadoresMinAggregateOutputType | null
    _max: DoadoresMaxAggregateOutputType | null
  }

  export type DoadoresAvgAggregateOutputType = {
    idade: number | null
    id_doadores: number | null
  }

  export type DoadoresSumAggregateOutputType = {
    idade: number | null
    id_doadores: number | null
  }

  export type DoadoresMinAggregateOutputType = {
    nome: string | null
    idade: number | null
    email: string | null
    id_doadores: number | null
  }

  export type DoadoresMaxAggregateOutputType = {
    nome: string | null
    idade: number | null
    email: string | null
    id_doadores: number | null
  }

  export type DoadoresCountAggregateOutputType = {
    nome: number
    idade: number
    email: number
    id_doadores: number
    _all: number
  }


  export type DoadoresAvgAggregateInputType = {
    idade?: true
    id_doadores?: true
  }

  export type DoadoresSumAggregateInputType = {
    idade?: true
    id_doadores?: true
  }

  export type DoadoresMinAggregateInputType = {
    nome?: true
    idade?: true
    email?: true
    id_doadores?: true
  }

  export type DoadoresMaxAggregateInputType = {
    nome?: true
    idade?: true
    email?: true
    id_doadores?: true
  }

  export type DoadoresCountAggregateInputType = {
    nome?: true
    idade?: true
    email?: true
    id_doadores?: true
    _all?: true
  }

  export type DoadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doadores to aggregate.
     */
    where?: doadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doadores to fetch.
     */
    orderBy?: doadoresOrderByWithRelationInput | doadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doadores
    **/
    _count?: true | DoadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoadoresMaxAggregateInputType
  }

  export type GetDoadoresAggregateType<T extends DoadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateDoadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoadores[P]>
      : GetScalarType<T[P], AggregateDoadores[P]>
  }




  export type doadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doadoresWhereInput
    orderBy?: doadoresOrderByWithAggregationInput | doadoresOrderByWithAggregationInput[]
    by: DoadoresScalarFieldEnum[] | DoadoresScalarFieldEnum
    having?: doadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoadoresCountAggregateInputType | true
    _avg?: DoadoresAvgAggregateInputType
    _sum?: DoadoresSumAggregateInputType
    _min?: DoadoresMinAggregateInputType
    _max?: DoadoresMaxAggregateInputType
  }

  export type DoadoresGroupByOutputType = {
    nome: string | null
    idade: number | null
    email: string | null
    id_doadores: number
    _count: DoadoresCountAggregateOutputType | null
    _avg: DoadoresAvgAggregateOutputType | null
    _sum: DoadoresSumAggregateOutputType | null
    _min: DoadoresMinAggregateOutputType | null
    _max: DoadoresMaxAggregateOutputType | null
  }

  type GetDoadoresGroupByPayload<T extends doadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoadoresGroupByOutputType[P]>
            : GetScalarType<T[P], DoadoresGroupByOutputType[P]>
        }
      >
    >


  export type doadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    idade?: boolean
    email?: boolean
    id_doadores?: boolean
    alerta?: boolean | doadores$alertaArgs<ExtArgs>
    categoria_doacao?: boolean | doadores$categoria_doacaoArgs<ExtArgs>
    feedback?: boolean | doadores$feedbackArgs<ExtArgs>
    organizacao?: boolean | doadores$organizacaoArgs<ExtArgs>
    _count?: boolean | DoadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doadores"]>

  export type doadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    idade?: boolean
    email?: boolean
    id_doadores?: boolean
  }, ExtArgs["result"]["doadores"]>

  export type doadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nome?: boolean
    idade?: boolean
    email?: boolean
    id_doadores?: boolean
  }, ExtArgs["result"]["doadores"]>

  export type doadoresSelectScalar = {
    nome?: boolean
    idade?: boolean
    email?: boolean
    id_doadores?: boolean
  }

  export type doadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nome" | "idade" | "email" | "id_doadores", ExtArgs["result"]["doadores"]>
  export type doadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | doadores$alertaArgs<ExtArgs>
    categoria_doacao?: boolean | doadores$categoria_doacaoArgs<ExtArgs>
    feedback?: boolean | doadores$feedbackArgs<ExtArgs>
    organizacao?: boolean | doadores$organizacaoArgs<ExtArgs>
    _count?: boolean | DoadoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type doadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type doadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $doadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doadores"
    objects: {
      alerta: Prisma.$alertaPayload<ExtArgs>[]
      categoria_doacao: Prisma.$categoria_doacaoPayload<ExtArgs>[]
      feedback: Prisma.$feedbackPayload<ExtArgs>[]
      organizacao: Prisma.$organizacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nome: string | null
      idade: number | null
      email: string | null
      id_doadores: number
    }, ExtArgs["result"]["doadores"]>
    composites: {}
  }

  type doadoresGetPayload<S extends boolean | null | undefined | doadoresDefaultArgs> = $Result.GetResult<Prisma.$doadoresPayload, S>

  type doadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoadoresCountAggregateInputType | true
    }

  export interface doadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doadores'], meta: { name: 'doadores' } }
    /**
     * Find zero or one Doadores that matches the filter.
     * @param {doadoresFindUniqueArgs} args - Arguments to find a Doadores
     * @example
     * // Get one Doadores
     * const doadores = await prisma.doadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doadoresFindUniqueArgs>(args: SelectSubset<T, doadoresFindUniqueArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doadoresFindUniqueOrThrowArgs} args - Arguments to find a Doadores
     * @example
     * // Get one Doadores
     * const doadores = await prisma.doadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, doadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doadoresFindFirstArgs} args - Arguments to find a Doadores
     * @example
     * // Get one Doadores
     * const doadores = await prisma.doadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doadoresFindFirstArgs>(args?: SelectSubset<T, doadoresFindFirstArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doadoresFindFirstOrThrowArgs} args - Arguments to find a Doadores
     * @example
     * // Get one Doadores
     * const doadores = await prisma.doadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, doadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doadores
     * const doadores = await prisma.doadores.findMany()
     * 
     * // Get first 10 Doadores
     * const doadores = await prisma.doadores.findMany({ take: 10 })
     * 
     * // Only select the `nome`
     * const doadoresWithNomeOnly = await prisma.doadores.findMany({ select: { nome: true } })
     * 
     */
    findMany<T extends doadoresFindManyArgs>(args?: SelectSubset<T, doadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doadores.
     * @param {doadoresCreateArgs} args - Arguments to create a Doadores.
     * @example
     * // Create one Doadores
     * const Doadores = await prisma.doadores.create({
     *   data: {
     *     // ... data to create a Doadores
     *   }
     * })
     * 
     */
    create<T extends doadoresCreateArgs>(args: SelectSubset<T, doadoresCreateArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doadores.
     * @param {doadoresCreateManyArgs} args - Arguments to create many Doadores.
     * @example
     * // Create many Doadores
     * const doadores = await prisma.doadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doadoresCreateManyArgs>(args?: SelectSubset<T, doadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doadores and returns the data saved in the database.
     * @param {doadoresCreateManyAndReturnArgs} args - Arguments to create many Doadores.
     * @example
     * // Create many Doadores
     * const doadores = await prisma.doadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doadores and only return the `nome`
     * const doadoresWithNomeOnly = await prisma.doadores.createManyAndReturn({
     *   select: { nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, doadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doadores.
     * @param {doadoresDeleteArgs} args - Arguments to delete one Doadores.
     * @example
     * // Delete one Doadores
     * const Doadores = await prisma.doadores.delete({
     *   where: {
     *     // ... filter to delete one Doadores
     *   }
     * })
     * 
     */
    delete<T extends doadoresDeleteArgs>(args: SelectSubset<T, doadoresDeleteArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doadores.
     * @param {doadoresUpdateArgs} args - Arguments to update one Doadores.
     * @example
     * // Update one Doadores
     * const doadores = await prisma.doadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doadoresUpdateArgs>(args: SelectSubset<T, doadoresUpdateArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doadores.
     * @param {doadoresDeleteManyArgs} args - Arguments to filter Doadores to delete.
     * @example
     * // Delete a few Doadores
     * const { count } = await prisma.doadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doadoresDeleteManyArgs>(args?: SelectSubset<T, doadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doadores
     * const doadores = await prisma.doadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doadoresUpdateManyArgs>(args: SelectSubset<T, doadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doadores and returns the data updated in the database.
     * @param {doadoresUpdateManyAndReturnArgs} args - Arguments to update many Doadores.
     * @example
     * // Update many Doadores
     * const doadores = await prisma.doadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doadores and only return the `nome`
     * const doadoresWithNomeOnly = await prisma.doadores.updateManyAndReturn({
     *   select: { nome: true },
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
    updateManyAndReturn<T extends doadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, doadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doadores.
     * @param {doadoresUpsertArgs} args - Arguments to update or create a Doadores.
     * @example
     * // Update or create a Doadores
     * const doadores = await prisma.doadores.upsert({
     *   create: {
     *     // ... data to create a Doadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doadores we want to update
     *   }
     * })
     */
    upsert<T extends doadoresUpsertArgs>(args: SelectSubset<T, doadoresUpsertArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doadoresCountArgs} args - Arguments to filter Doadores to count.
     * @example
     * // Count the number of Doadores
     * const count = await prisma.doadores.count({
     *   where: {
     *     // ... the filter for the Doadores we want to count
     *   }
     * })
    **/
    count<T extends doadoresCountArgs>(
      args?: Subset<T, doadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoadoresAggregateArgs>(args: Subset<T, DoadoresAggregateArgs>): Prisma.PrismaPromise<GetDoadoresAggregateType<T>>

    /**
     * Group by Doadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doadoresGroupByArgs} args - Group by arguments.
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
      T extends doadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doadoresGroupByArgs['orderBy'] }
        : { orderBy?: doadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, doadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doadores model
   */
  readonly fields: doadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends doadores$alertaArgs<ExtArgs> = {}>(args?: Subset<T, doadores$alertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria_doacao<T extends doadores$categoria_doacaoArgs<ExtArgs> = {}>(args?: Subset<T, doadores$categoria_doacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends doadores$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, doadores$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizacao<T extends doadores$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, doadores$organizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the doadores model
   */
  interface doadoresFieldRefs {
    readonly nome: FieldRef<"doadores", 'String'>
    readonly idade: FieldRef<"doadores", 'Int'>
    readonly email: FieldRef<"doadores", 'String'>
    readonly id_doadores: FieldRef<"doadores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * doadores findUnique
   */
  export type doadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * Filter, which doadores to fetch.
     */
    where: doadoresWhereUniqueInput
  }

  /**
   * doadores findUniqueOrThrow
   */
  export type doadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * Filter, which doadores to fetch.
     */
    where: doadoresWhereUniqueInput
  }

  /**
   * doadores findFirst
   */
  export type doadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * Filter, which doadores to fetch.
     */
    where?: doadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doadores to fetch.
     */
    orderBy?: doadoresOrderByWithRelationInput | doadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doadores.
     */
    cursor?: doadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doadores.
     */
    distinct?: DoadoresScalarFieldEnum | DoadoresScalarFieldEnum[]
  }

  /**
   * doadores findFirstOrThrow
   */
  export type doadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * Filter, which doadores to fetch.
     */
    where?: doadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doadores to fetch.
     */
    orderBy?: doadoresOrderByWithRelationInput | doadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doadores.
     */
    cursor?: doadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doadores.
     */
    distinct?: DoadoresScalarFieldEnum | DoadoresScalarFieldEnum[]
  }

  /**
   * doadores findMany
   */
  export type doadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * Filter, which doadores to fetch.
     */
    where?: doadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doadores to fetch.
     */
    orderBy?: doadoresOrderByWithRelationInput | doadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doadores.
     */
    cursor?: doadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doadores.
     */
    skip?: number
    distinct?: DoadoresScalarFieldEnum | DoadoresScalarFieldEnum[]
  }

  /**
   * doadores create
   */
  export type doadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a doadores.
     */
    data?: XOR<doadoresCreateInput, doadoresUncheckedCreateInput>
  }

  /**
   * doadores createMany
   */
  export type doadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doadores.
     */
    data: doadoresCreateManyInput | doadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doadores createManyAndReturn
   */
  export type doadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * The data used to create many doadores.
     */
    data: doadoresCreateManyInput | doadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doadores update
   */
  export type doadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a doadores.
     */
    data: XOR<doadoresUpdateInput, doadoresUncheckedUpdateInput>
    /**
     * Choose, which doadores to update.
     */
    where: doadoresWhereUniqueInput
  }

  /**
   * doadores updateMany
   */
  export type doadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doadores.
     */
    data: XOR<doadoresUpdateManyMutationInput, doadoresUncheckedUpdateManyInput>
    /**
     * Filter which doadores to update
     */
    where?: doadoresWhereInput
    /**
     * Limit how many doadores to update.
     */
    limit?: number
  }

  /**
   * doadores updateManyAndReturn
   */
  export type doadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * The data used to update doadores.
     */
    data: XOR<doadoresUpdateManyMutationInput, doadoresUncheckedUpdateManyInput>
    /**
     * Filter which doadores to update
     */
    where?: doadoresWhereInput
    /**
     * Limit how many doadores to update.
     */
    limit?: number
  }

  /**
   * doadores upsert
   */
  export type doadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the doadores to update in case it exists.
     */
    where: doadoresWhereUniqueInput
    /**
     * In case the doadores found by the `where` argument doesn't exist, create a new doadores with this data.
     */
    create: XOR<doadoresCreateInput, doadoresUncheckedCreateInput>
    /**
     * In case the doadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doadoresUpdateInput, doadoresUncheckedUpdateInput>
  }

  /**
   * doadores delete
   */
  export type doadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    /**
     * Filter which doadores to delete.
     */
    where: doadoresWhereUniqueInput
  }

  /**
   * doadores deleteMany
   */
  export type doadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doadores to delete
     */
    where?: doadoresWhereInput
    /**
     * Limit how many doadores to delete.
     */
    limit?: number
  }

  /**
   * doadores.alerta
   */
  export type doadores$alertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    where?: alertaWhereInput
    orderBy?: alertaOrderByWithRelationInput | alertaOrderByWithRelationInput[]
    cursor?: alertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * doadores.categoria_doacao
   */
  export type doadores$categoria_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    where?: categoria_doacaoWhereInput
    orderBy?: categoria_doacaoOrderByWithRelationInput | categoria_doacaoOrderByWithRelationInput[]
    cursor?: categoria_doacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Categoria_doacaoScalarFieldEnum | Categoria_doacaoScalarFieldEnum[]
  }

  /**
   * doadores.feedback
   */
  export type doadores$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    cursor?: feedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * doadores.organizacao
   */
  export type doadores$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    cursor?: organizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * doadores without action
   */
  export type doadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
  }


  /**
   * Model feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id_feedback: number | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id_feedback: number | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id_feedback: number | null
    critica: $Enums.feedback_critica | null
    feedback_descricao: string | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id_feedback: number | null
    critica: $Enums.feedback_critica | null
    feedback_descricao: string | null
    id_organizacao: number | null
    id_doadores: number | null
  }

  export type FeedbackCountAggregateOutputType = {
    id_feedback: number
    critica: number
    feedback_descricao: number
    id_organizacao: number
    id_doadores: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id_feedback?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type FeedbackSumAggregateInputType = {
    id_feedback?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type FeedbackMinAggregateInputType = {
    id_feedback?: true
    critica?: true
    feedback_descricao?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id_feedback?: true
    critica?: true
    feedback_descricao?: true
    id_organizacao?: true
    id_doadores?: true
  }

  export type FeedbackCountAggregateInputType = {
    id_feedback?: true
    critica?: true
    feedback_descricao?: true
    id_organizacao?: true
    id_doadores?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedback to aggregate.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type feedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithAggregationInput | feedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: feedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id_feedback: number
    critica: $Enums.feedback_critica | null
    feedback_descricao: string | null
    id_organizacao: number | null
    id_doadores: number | null
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends feedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type feedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feedback?: boolean
    critica?: boolean
    feedback_descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
    organizacao?: boolean | feedback$organizacaoArgs<ExtArgs>
    doadores?: boolean | feedback$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feedback?: boolean
    critica?: boolean
    feedback_descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
    organizacao?: boolean | feedback$organizacaoArgs<ExtArgs>
    doadores?: boolean | feedback$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_feedback?: boolean
    critica?: boolean
    feedback_descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
    organizacao?: boolean | feedback$organizacaoArgs<ExtArgs>
    doadores?: boolean | feedback$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectScalar = {
    id_feedback?: boolean
    critica?: boolean
    feedback_descricao?: boolean
    id_organizacao?: boolean
    id_doadores?: boolean
  }

  export type feedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_feedback" | "critica" | "feedback_descricao" | "id_organizacao" | "id_doadores", ExtArgs["result"]["feedback"]>
  export type feedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | feedback$organizacaoArgs<ExtArgs>
    doadores?: boolean | feedback$doadoresArgs<ExtArgs>
  }
  export type feedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | feedback$organizacaoArgs<ExtArgs>
    doadores?: boolean | feedback$doadoresArgs<ExtArgs>
  }
  export type feedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | feedback$organizacaoArgs<ExtArgs>
    doadores?: boolean | feedback$doadoresArgs<ExtArgs>
  }

  export type $feedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedback"
    objects: {
      organizacao: Prisma.$organizacaoPayload<ExtArgs> | null
      doadores: Prisma.$doadoresPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_feedback: number
      critica: $Enums.feedback_critica | null
      feedback_descricao: string | null
      id_organizacao: number | null
      id_doadores: number | null
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type feedbackGetPayload<S extends boolean | null | undefined | feedbackDefaultArgs> = $Result.GetResult<Prisma.$feedbackPayload, S>

  type feedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface feedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedback'], meta: { name: 'feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {feedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbackFindUniqueArgs>(args: SelectSubset<T, feedbackFindUniqueArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbackFindFirstArgs>(args?: SelectSubset<T, feedbackFindFirstArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id_feedback`
     * const feedbackWithId_feedbackOnly = await prisma.feedback.findMany({ select: { id_feedback: true } })
     * 
     */
    findMany<T extends feedbackFindManyArgs>(args?: SelectSubset<T, feedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {feedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends feedbackCreateArgs>(args: SelectSubset<T, feedbackCreateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbackCreateManyArgs>(args?: SelectSubset<T, feedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {feedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id_feedback`
     * const feedbackWithId_feedbackOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id_feedback: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, feedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {feedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends feedbackDeleteArgs>(args: SelectSubset<T, feedbackDeleteArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {feedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbackUpdateArgs>(args: SelectSubset<T, feedbackUpdateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbackDeleteManyArgs>(args?: SelectSubset<T, feedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbackUpdateManyArgs>(args: SelectSubset<T, feedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {feedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id_feedback`
     * const feedbackWithId_feedbackOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id_feedback: true },
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
    updateManyAndReturn<T extends feedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, feedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {feedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends feedbackUpsertArgs>(args: SelectSubset<T, feedbackUpsertArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbackCountArgs>(
      args?: Subset<T, feedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackGroupByArgs} args - Group by arguments.
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
      T extends feedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbackGroupByArgs['orderBy'] }
        : { orderBy?: feedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedback model
   */
  readonly fields: feedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacao<T extends feedback$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, feedback$organizacaoArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doadores<T extends feedback$doadoresArgs<ExtArgs> = {}>(args?: Subset<T, feedback$doadoresArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the feedback model
   */
  interface feedbackFieldRefs {
    readonly id_feedback: FieldRef<"feedback", 'Int'>
    readonly critica: FieldRef<"feedback", 'feedback_critica'>
    readonly feedback_descricao: FieldRef<"feedback", 'String'>
    readonly id_organizacao: FieldRef<"feedback", 'Int'>
    readonly id_doadores: FieldRef<"feedback", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * feedback findUnique
   */
  export type feedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findUniqueOrThrow
   */
  export type feedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findFirst
   */
  export type feedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findFirstOrThrow
   */
  export type feedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findMany
   */
  export type feedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback create
   */
  export type feedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a feedback.
     */
    data?: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
  }

  /**
   * feedback createMany
   */
  export type feedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback createManyAndReturn
   */
  export type feedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * feedback update
   */
  export type feedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a feedback.
     */
    data: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
    /**
     * Choose, which feedback to update.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback updateMany
   */
  export type feedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback updateManyAndReturn
   */
  export type feedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * feedback upsert
   */
  export type feedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the feedback to update in case it exists.
     */
    where: feedbackWhereUniqueInput
    /**
     * In case the feedback found by the `where` argument doesn't exist, create a new feedback with this data.
     */
    create: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
    /**
     * In case the feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
  }

  /**
   * feedback delete
   */
  export type feedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter which feedback to delete.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback deleteMany
   */
  export type feedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedback.organizacao
   */
  export type feedback$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
  }

  /**
   * feedback.doadores
   */
  export type feedback$doadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    where?: doadoresWhereInput
  }

  /**
   * feedback without action
   */
  export type feedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
  }


  /**
   * Model impacto_social
   */

  export type AggregateImpacto_social = {
    _count: Impacto_socialCountAggregateOutputType | null
    _avg: Impacto_socialAvgAggregateOutputType | null
    _sum: Impacto_socialSumAggregateOutputType | null
    _min: Impacto_socialMinAggregateOutputType | null
    _max: Impacto_socialMaxAggregateOutputType | null
  }

  export type Impacto_socialAvgAggregateOutputType = {
    id_impacto: number | null
    id_organizacao: number | null
    id_localizacao: number | null
    id_doacao: number | null
  }

  export type Impacto_socialSumAggregateOutputType = {
    id_impacto: number | null
    id_organizacao: number | null
    id_localizacao: number | null
    id_doacao: number | null
  }

  export type Impacto_socialMinAggregateOutputType = {
    id_impacto: number | null
    id_organizacao: number | null
    id_localizacao: number | null
    id_doacao: number | null
  }

  export type Impacto_socialMaxAggregateOutputType = {
    id_impacto: number | null
    id_organizacao: number | null
    id_localizacao: number | null
    id_doacao: number | null
  }

  export type Impacto_socialCountAggregateOutputType = {
    id_impacto: number
    id_organizacao: number
    id_localizacao: number
    id_doacao: number
    _all: number
  }


  export type Impacto_socialAvgAggregateInputType = {
    id_impacto?: true
    id_organizacao?: true
    id_localizacao?: true
    id_doacao?: true
  }

  export type Impacto_socialSumAggregateInputType = {
    id_impacto?: true
    id_organizacao?: true
    id_localizacao?: true
    id_doacao?: true
  }

  export type Impacto_socialMinAggregateInputType = {
    id_impacto?: true
    id_organizacao?: true
    id_localizacao?: true
    id_doacao?: true
  }

  export type Impacto_socialMaxAggregateInputType = {
    id_impacto?: true
    id_organizacao?: true
    id_localizacao?: true
    id_doacao?: true
  }

  export type Impacto_socialCountAggregateInputType = {
    id_impacto?: true
    id_organizacao?: true
    id_localizacao?: true
    id_doacao?: true
    _all?: true
  }

  export type Impacto_socialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which impacto_social to aggregate.
     */
    where?: impacto_socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of impacto_socials to fetch.
     */
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: impacto_socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` impacto_socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` impacto_socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned impacto_socials
    **/
    _count?: true | Impacto_socialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Impacto_socialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Impacto_socialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Impacto_socialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Impacto_socialMaxAggregateInputType
  }

  export type GetImpacto_socialAggregateType<T extends Impacto_socialAggregateArgs> = {
        [P in keyof T & keyof AggregateImpacto_social]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImpacto_social[P]>
      : GetScalarType<T[P], AggregateImpacto_social[P]>
  }




  export type impacto_socialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: impacto_socialWhereInput
    orderBy?: impacto_socialOrderByWithAggregationInput | impacto_socialOrderByWithAggregationInput[]
    by: Impacto_socialScalarFieldEnum[] | Impacto_socialScalarFieldEnum
    having?: impacto_socialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Impacto_socialCountAggregateInputType | true
    _avg?: Impacto_socialAvgAggregateInputType
    _sum?: Impacto_socialSumAggregateInputType
    _min?: Impacto_socialMinAggregateInputType
    _max?: Impacto_socialMaxAggregateInputType
  }

  export type Impacto_socialGroupByOutputType = {
    id_impacto: number
    id_organizacao: number | null
    id_localizacao: number | null
    id_doacao: number | null
    _count: Impacto_socialCountAggregateOutputType | null
    _avg: Impacto_socialAvgAggregateOutputType | null
    _sum: Impacto_socialSumAggregateOutputType | null
    _min: Impacto_socialMinAggregateOutputType | null
    _max: Impacto_socialMaxAggregateOutputType | null
  }

  type GetImpacto_socialGroupByPayload<T extends impacto_socialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Impacto_socialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Impacto_socialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Impacto_socialGroupByOutputType[P]>
            : GetScalarType<T[P], Impacto_socialGroupByOutputType[P]>
        }
      >
    >


  export type impacto_socialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_impacto?: boolean
    id_organizacao?: boolean
    id_localizacao?: boolean
    id_doacao?: boolean
    organizacao?: boolean | impacto_social$organizacaoArgs<ExtArgs>
    localizacao?: boolean | impacto_social$localizacaoArgs<ExtArgs>
    categoria_doacao?: boolean | impacto_social$categoria_doacaoArgs<ExtArgs>
  }, ExtArgs["result"]["impacto_social"]>

  export type impacto_socialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_impacto?: boolean
    id_organizacao?: boolean
    id_localizacao?: boolean
    id_doacao?: boolean
    organizacao?: boolean | impacto_social$organizacaoArgs<ExtArgs>
    localizacao?: boolean | impacto_social$localizacaoArgs<ExtArgs>
    categoria_doacao?: boolean | impacto_social$categoria_doacaoArgs<ExtArgs>
  }, ExtArgs["result"]["impacto_social"]>

  export type impacto_socialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_impacto?: boolean
    id_organizacao?: boolean
    id_localizacao?: boolean
    id_doacao?: boolean
    organizacao?: boolean | impacto_social$organizacaoArgs<ExtArgs>
    localizacao?: boolean | impacto_social$localizacaoArgs<ExtArgs>
    categoria_doacao?: boolean | impacto_social$categoria_doacaoArgs<ExtArgs>
  }, ExtArgs["result"]["impacto_social"]>

  export type impacto_socialSelectScalar = {
    id_impacto?: boolean
    id_organizacao?: boolean
    id_localizacao?: boolean
    id_doacao?: boolean
  }

  export type impacto_socialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_impacto" | "id_organizacao" | "id_localizacao" | "id_doacao", ExtArgs["result"]["impacto_social"]>
  export type impacto_socialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | impacto_social$organizacaoArgs<ExtArgs>
    localizacao?: boolean | impacto_social$localizacaoArgs<ExtArgs>
    categoria_doacao?: boolean | impacto_social$categoria_doacaoArgs<ExtArgs>
  }
  export type impacto_socialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | impacto_social$organizacaoArgs<ExtArgs>
    localizacao?: boolean | impacto_social$localizacaoArgs<ExtArgs>
    categoria_doacao?: boolean | impacto_social$categoria_doacaoArgs<ExtArgs>
  }
  export type impacto_socialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | impacto_social$organizacaoArgs<ExtArgs>
    localizacao?: boolean | impacto_social$localizacaoArgs<ExtArgs>
    categoria_doacao?: boolean | impacto_social$categoria_doacaoArgs<ExtArgs>
  }

  export type $impacto_socialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "impacto_social"
    objects: {
      organizacao: Prisma.$organizacaoPayload<ExtArgs> | null
      localizacao: Prisma.$localizacaoPayload<ExtArgs> | null
      categoria_doacao: Prisma.$categoria_doacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_impacto: number
      id_organizacao: number | null
      id_localizacao: number | null
      id_doacao: number | null
    }, ExtArgs["result"]["impacto_social"]>
    composites: {}
  }

  type impacto_socialGetPayload<S extends boolean | null | undefined | impacto_socialDefaultArgs> = $Result.GetResult<Prisma.$impacto_socialPayload, S>

  type impacto_socialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<impacto_socialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Impacto_socialCountAggregateInputType | true
    }

  export interface impacto_socialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['impacto_social'], meta: { name: 'impacto_social' } }
    /**
     * Find zero or one Impacto_social that matches the filter.
     * @param {impacto_socialFindUniqueArgs} args - Arguments to find a Impacto_social
     * @example
     * // Get one Impacto_social
     * const impacto_social = await prisma.impacto_social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends impacto_socialFindUniqueArgs>(args: SelectSubset<T, impacto_socialFindUniqueArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Impacto_social that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {impacto_socialFindUniqueOrThrowArgs} args - Arguments to find a Impacto_social
     * @example
     * // Get one Impacto_social
     * const impacto_social = await prisma.impacto_social.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends impacto_socialFindUniqueOrThrowArgs>(args: SelectSubset<T, impacto_socialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Impacto_social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {impacto_socialFindFirstArgs} args - Arguments to find a Impacto_social
     * @example
     * // Get one Impacto_social
     * const impacto_social = await prisma.impacto_social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends impacto_socialFindFirstArgs>(args?: SelectSubset<T, impacto_socialFindFirstArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Impacto_social that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {impacto_socialFindFirstOrThrowArgs} args - Arguments to find a Impacto_social
     * @example
     * // Get one Impacto_social
     * const impacto_social = await prisma.impacto_social.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends impacto_socialFindFirstOrThrowArgs>(args?: SelectSubset<T, impacto_socialFindFirstOrThrowArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Impacto_socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {impacto_socialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Impacto_socials
     * const impacto_socials = await prisma.impacto_social.findMany()
     * 
     * // Get first 10 Impacto_socials
     * const impacto_socials = await prisma.impacto_social.findMany({ take: 10 })
     * 
     * // Only select the `id_impacto`
     * const impacto_socialWithId_impactoOnly = await prisma.impacto_social.findMany({ select: { id_impacto: true } })
     * 
     */
    findMany<T extends impacto_socialFindManyArgs>(args?: SelectSubset<T, impacto_socialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Impacto_social.
     * @param {impacto_socialCreateArgs} args - Arguments to create a Impacto_social.
     * @example
     * // Create one Impacto_social
     * const Impacto_social = await prisma.impacto_social.create({
     *   data: {
     *     // ... data to create a Impacto_social
     *   }
     * })
     * 
     */
    create<T extends impacto_socialCreateArgs>(args: SelectSubset<T, impacto_socialCreateArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Impacto_socials.
     * @param {impacto_socialCreateManyArgs} args - Arguments to create many Impacto_socials.
     * @example
     * // Create many Impacto_socials
     * const impacto_social = await prisma.impacto_social.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends impacto_socialCreateManyArgs>(args?: SelectSubset<T, impacto_socialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Impacto_socials and returns the data saved in the database.
     * @param {impacto_socialCreateManyAndReturnArgs} args - Arguments to create many Impacto_socials.
     * @example
     * // Create many Impacto_socials
     * const impacto_social = await prisma.impacto_social.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Impacto_socials and only return the `id_impacto`
     * const impacto_socialWithId_impactoOnly = await prisma.impacto_social.createManyAndReturn({
     *   select: { id_impacto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends impacto_socialCreateManyAndReturnArgs>(args?: SelectSubset<T, impacto_socialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Impacto_social.
     * @param {impacto_socialDeleteArgs} args - Arguments to delete one Impacto_social.
     * @example
     * // Delete one Impacto_social
     * const Impacto_social = await prisma.impacto_social.delete({
     *   where: {
     *     // ... filter to delete one Impacto_social
     *   }
     * })
     * 
     */
    delete<T extends impacto_socialDeleteArgs>(args: SelectSubset<T, impacto_socialDeleteArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Impacto_social.
     * @param {impacto_socialUpdateArgs} args - Arguments to update one Impacto_social.
     * @example
     * // Update one Impacto_social
     * const impacto_social = await prisma.impacto_social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends impacto_socialUpdateArgs>(args: SelectSubset<T, impacto_socialUpdateArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Impacto_socials.
     * @param {impacto_socialDeleteManyArgs} args - Arguments to filter Impacto_socials to delete.
     * @example
     * // Delete a few Impacto_socials
     * const { count } = await prisma.impacto_social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends impacto_socialDeleteManyArgs>(args?: SelectSubset<T, impacto_socialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Impacto_socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {impacto_socialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Impacto_socials
     * const impacto_social = await prisma.impacto_social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends impacto_socialUpdateManyArgs>(args: SelectSubset<T, impacto_socialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Impacto_socials and returns the data updated in the database.
     * @param {impacto_socialUpdateManyAndReturnArgs} args - Arguments to update many Impacto_socials.
     * @example
     * // Update many Impacto_socials
     * const impacto_social = await prisma.impacto_social.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Impacto_socials and only return the `id_impacto`
     * const impacto_socialWithId_impactoOnly = await prisma.impacto_social.updateManyAndReturn({
     *   select: { id_impacto: true },
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
    updateManyAndReturn<T extends impacto_socialUpdateManyAndReturnArgs>(args: SelectSubset<T, impacto_socialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Impacto_social.
     * @param {impacto_socialUpsertArgs} args - Arguments to update or create a Impacto_social.
     * @example
     * // Update or create a Impacto_social
     * const impacto_social = await prisma.impacto_social.upsert({
     *   create: {
     *     // ... data to create a Impacto_social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Impacto_social we want to update
     *   }
     * })
     */
    upsert<T extends impacto_socialUpsertArgs>(args: SelectSubset<T, impacto_socialUpsertArgs<ExtArgs>>): Prisma__impacto_socialClient<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Impacto_socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {impacto_socialCountArgs} args - Arguments to filter Impacto_socials to count.
     * @example
     * // Count the number of Impacto_socials
     * const count = await prisma.impacto_social.count({
     *   where: {
     *     // ... the filter for the Impacto_socials we want to count
     *   }
     * })
    **/
    count<T extends impacto_socialCountArgs>(
      args?: Subset<T, impacto_socialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Impacto_socialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Impacto_social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Impacto_socialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Impacto_socialAggregateArgs>(args: Subset<T, Impacto_socialAggregateArgs>): Prisma.PrismaPromise<GetImpacto_socialAggregateType<T>>

    /**
     * Group by Impacto_social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {impacto_socialGroupByArgs} args - Group by arguments.
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
      T extends impacto_socialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: impacto_socialGroupByArgs['orderBy'] }
        : { orderBy?: impacto_socialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, impacto_socialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImpacto_socialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the impacto_social model
   */
  readonly fields: impacto_socialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for impacto_social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__impacto_socialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacao<T extends impacto_social$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, impacto_social$organizacaoArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    localizacao<T extends impacto_social$localizacaoArgs<ExtArgs> = {}>(args?: Subset<T, impacto_social$localizacaoArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categoria_doacao<T extends impacto_social$categoria_doacaoArgs<ExtArgs> = {}>(args?: Subset<T, impacto_social$categoria_doacaoArgs<ExtArgs>>): Prisma__categoria_doacaoClient<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the impacto_social model
   */
  interface impacto_socialFieldRefs {
    readonly id_impacto: FieldRef<"impacto_social", 'Int'>
    readonly id_organizacao: FieldRef<"impacto_social", 'Int'>
    readonly id_localizacao: FieldRef<"impacto_social", 'Int'>
    readonly id_doacao: FieldRef<"impacto_social", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * impacto_social findUnique
   */
  export type impacto_socialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * Filter, which impacto_social to fetch.
     */
    where: impacto_socialWhereUniqueInput
  }

  /**
   * impacto_social findUniqueOrThrow
   */
  export type impacto_socialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * Filter, which impacto_social to fetch.
     */
    where: impacto_socialWhereUniqueInput
  }

  /**
   * impacto_social findFirst
   */
  export type impacto_socialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * Filter, which impacto_social to fetch.
     */
    where?: impacto_socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of impacto_socials to fetch.
     */
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for impacto_socials.
     */
    cursor?: impacto_socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` impacto_socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` impacto_socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of impacto_socials.
     */
    distinct?: Impacto_socialScalarFieldEnum | Impacto_socialScalarFieldEnum[]
  }

  /**
   * impacto_social findFirstOrThrow
   */
  export type impacto_socialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * Filter, which impacto_social to fetch.
     */
    where?: impacto_socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of impacto_socials to fetch.
     */
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for impacto_socials.
     */
    cursor?: impacto_socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` impacto_socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` impacto_socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of impacto_socials.
     */
    distinct?: Impacto_socialScalarFieldEnum | Impacto_socialScalarFieldEnum[]
  }

  /**
   * impacto_social findMany
   */
  export type impacto_socialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * Filter, which impacto_socials to fetch.
     */
    where?: impacto_socialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of impacto_socials to fetch.
     */
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing impacto_socials.
     */
    cursor?: impacto_socialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` impacto_socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` impacto_socials.
     */
    skip?: number
    distinct?: Impacto_socialScalarFieldEnum | Impacto_socialScalarFieldEnum[]
  }

  /**
   * impacto_social create
   */
  export type impacto_socialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * The data needed to create a impacto_social.
     */
    data?: XOR<impacto_socialCreateInput, impacto_socialUncheckedCreateInput>
  }

  /**
   * impacto_social createMany
   */
  export type impacto_socialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many impacto_socials.
     */
    data: impacto_socialCreateManyInput | impacto_socialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * impacto_social createManyAndReturn
   */
  export type impacto_socialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * The data used to create many impacto_socials.
     */
    data: impacto_socialCreateManyInput | impacto_socialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * impacto_social update
   */
  export type impacto_socialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * The data needed to update a impacto_social.
     */
    data: XOR<impacto_socialUpdateInput, impacto_socialUncheckedUpdateInput>
    /**
     * Choose, which impacto_social to update.
     */
    where: impacto_socialWhereUniqueInput
  }

  /**
   * impacto_social updateMany
   */
  export type impacto_socialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update impacto_socials.
     */
    data: XOR<impacto_socialUpdateManyMutationInput, impacto_socialUncheckedUpdateManyInput>
    /**
     * Filter which impacto_socials to update
     */
    where?: impacto_socialWhereInput
    /**
     * Limit how many impacto_socials to update.
     */
    limit?: number
  }

  /**
   * impacto_social updateManyAndReturn
   */
  export type impacto_socialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * The data used to update impacto_socials.
     */
    data: XOR<impacto_socialUpdateManyMutationInput, impacto_socialUncheckedUpdateManyInput>
    /**
     * Filter which impacto_socials to update
     */
    where?: impacto_socialWhereInput
    /**
     * Limit how many impacto_socials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * impacto_social upsert
   */
  export type impacto_socialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * The filter to search for the impacto_social to update in case it exists.
     */
    where: impacto_socialWhereUniqueInput
    /**
     * In case the impacto_social found by the `where` argument doesn't exist, create a new impacto_social with this data.
     */
    create: XOR<impacto_socialCreateInput, impacto_socialUncheckedCreateInput>
    /**
     * In case the impacto_social was found with the provided `where` argument, update it with this data.
     */
    update: XOR<impacto_socialUpdateInput, impacto_socialUncheckedUpdateInput>
  }

  /**
   * impacto_social delete
   */
  export type impacto_socialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    /**
     * Filter which impacto_social to delete.
     */
    where: impacto_socialWhereUniqueInput
  }

  /**
   * impacto_social deleteMany
   */
  export type impacto_socialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which impacto_socials to delete
     */
    where?: impacto_socialWhereInput
    /**
     * Limit how many impacto_socials to delete.
     */
    limit?: number
  }

  /**
   * impacto_social.organizacao
   */
  export type impacto_social$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
  }

  /**
   * impacto_social.localizacao
   */
  export type impacto_social$localizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    where?: localizacaoWhereInput
  }

  /**
   * impacto_social.categoria_doacao
   */
  export type impacto_social$categoria_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    where?: categoria_doacaoWhereInput
  }

  /**
   * impacto_social without action
   */
  export type impacto_socialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
  }


  /**
   * Model localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    id_localizacao: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_organizacao: number | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    id_localizacao: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_organizacao: number | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id_localizacao: number | null
    nome: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_organizacao: number | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id_localizacao: number | null
    nome: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_organizacao: number | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id_localizacao: number
    nome: number
    latitude: number
    longitude: number
    id_organizacao: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    id_localizacao?: true
    latitude?: true
    longitude?: true
    id_organizacao?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    id_localizacao?: true
    latitude?: true
    longitude?: true
    id_organizacao?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id_localizacao?: true
    nome?: true
    latitude?: true
    longitude?: true
    id_organizacao?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id_localizacao?: true
    nome?: true
    latitude?: true
    longitude?: true
    id_organizacao?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id_localizacao?: true
    nome?: true
    latitude?: true
    longitude?: true
    id_organizacao?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which localizacao to aggregate.
     */
    where?: localizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localizacaos to fetch.
     */
    orderBy?: localizacaoOrderByWithRelationInput | localizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: localizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type localizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: localizacaoWhereInput
    orderBy?: localizacaoOrderByWithAggregationInput | localizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: localizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id_localizacao: number
    nome: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_organizacao: number | null
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends localizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type localizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_localizacao?: boolean
    nome?: boolean
    latitude?: boolean
    longitude?: boolean
    id_organizacao?: boolean
    impacto_social?: boolean | localizacao$impacto_socialArgs<ExtArgs>
    organizacao?: boolean | localizacao$organizacaoArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type localizacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_localizacao?: boolean
    nome?: boolean
    latitude?: boolean
    longitude?: boolean
    id_organizacao?: boolean
    organizacao?: boolean | localizacao$organizacaoArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type localizacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_localizacao?: boolean
    nome?: boolean
    latitude?: boolean
    longitude?: boolean
    id_organizacao?: boolean
    organizacao?: boolean | localizacao$organizacaoArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type localizacaoSelectScalar = {
    id_localizacao?: boolean
    nome?: boolean
    latitude?: boolean
    longitude?: boolean
    id_organizacao?: boolean
  }

  export type localizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_localizacao" | "nome" | "latitude" | "longitude" | "id_organizacao", ExtArgs["result"]["localizacao"]>
  export type localizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    impacto_social?: boolean | localizacao$impacto_socialArgs<ExtArgs>
    organizacao?: boolean | localizacao$organizacaoArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type localizacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | localizacao$organizacaoArgs<ExtArgs>
  }
  export type localizacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | localizacao$organizacaoArgs<ExtArgs>
  }

  export type $localizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "localizacao"
    objects: {
      impacto_social: Prisma.$impacto_socialPayload<ExtArgs>[]
      organizacao: Prisma.$organizacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_localizacao: number
      nome: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      id_organizacao: number | null
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }

  type localizacaoGetPayload<S extends boolean | null | undefined | localizacaoDefaultArgs> = $Result.GetResult<Prisma.$localizacaoPayload, S>

  type localizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<localizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface localizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['localizacao'], meta: { name: 'localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {localizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends localizacaoFindUniqueArgs>(args: SelectSubset<T, localizacaoFindUniqueArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {localizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends localizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, localizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends localizacaoFindFirstArgs>(args?: SelectSubset<T, localizacaoFindFirstArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends localizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, localizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id_localizacao`
     * const localizacaoWithId_localizacaoOnly = await prisma.localizacao.findMany({ select: { id_localizacao: true } })
     * 
     */
    findMany<T extends localizacaoFindManyArgs>(args?: SelectSubset<T, localizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacao.
     * @param {localizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
     */
    create<T extends localizacaoCreateArgs>(args: SelectSubset<T, localizacaoCreateArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacaos.
     * @param {localizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends localizacaoCreateManyArgs>(args?: SelectSubset<T, localizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localizacaos and returns the data saved in the database.
     * @param {localizacaoCreateManyAndReturnArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localizacaos and only return the `id_localizacao`
     * const localizacaoWithId_localizacaoOnly = await prisma.localizacao.createManyAndReturn({
     *   select: { id_localizacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends localizacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, localizacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localizacao.
     * @param {localizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
     */
    delete<T extends localizacaoDeleteArgs>(args: SelectSubset<T, localizacaoDeleteArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacao.
     * @param {localizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends localizacaoUpdateArgs>(args: SelectSubset<T, localizacaoUpdateArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacaos.
     * @param {localizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends localizacaoDeleteManyArgs>(args?: SelectSubset<T, localizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends localizacaoUpdateManyArgs>(args: SelectSubset<T, localizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos and returns the data updated in the database.
     * @param {localizacaoUpdateManyAndReturnArgs} args - Arguments to update many Localizacaos.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localizacaos and only return the `id_localizacao`
     * const localizacaoWithId_localizacaoOnly = await prisma.localizacao.updateManyAndReturn({
     *   select: { id_localizacao: true },
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
    updateManyAndReturn<T extends localizacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, localizacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localizacao.
     * @param {localizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
     */
    upsert<T extends localizacaoUpsertArgs>(args: SelectSubset<T, localizacaoUpsertArgs<ExtArgs>>): Prisma__localizacaoClient<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends localizacaoCountArgs>(
      args?: Subset<T, localizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localizacaoGroupByArgs} args - Group by arguments.
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
      T extends localizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: localizacaoGroupByArgs['orderBy'] }
        : { orderBy?: localizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, localizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the localizacao model
   */
  readonly fields: localizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__localizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    impacto_social<T extends localizacao$impacto_socialArgs<ExtArgs> = {}>(args?: Subset<T, localizacao$impacto_socialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizacao<T extends localizacao$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, localizacao$organizacaoArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the localizacao model
   */
  interface localizacaoFieldRefs {
    readonly id_localizacao: FieldRef<"localizacao", 'Int'>
    readonly nome: FieldRef<"localizacao", 'String'>
    readonly latitude: FieldRef<"localizacao", 'Decimal'>
    readonly longitude: FieldRef<"localizacao", 'Decimal'>
    readonly id_organizacao: FieldRef<"localizacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * localizacao findUnique
   */
  export type localizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * Filter, which localizacao to fetch.
     */
    where: localizacaoWhereUniqueInput
  }

  /**
   * localizacao findUniqueOrThrow
   */
  export type localizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * Filter, which localizacao to fetch.
     */
    where: localizacaoWhereUniqueInput
  }

  /**
   * localizacao findFirst
   */
  export type localizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * Filter, which localizacao to fetch.
     */
    where?: localizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localizacaos to fetch.
     */
    orderBy?: localizacaoOrderByWithRelationInput | localizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for localizacaos.
     */
    cursor?: localizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * localizacao findFirstOrThrow
   */
  export type localizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * Filter, which localizacao to fetch.
     */
    where?: localizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localizacaos to fetch.
     */
    orderBy?: localizacaoOrderByWithRelationInput | localizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for localizacaos.
     */
    cursor?: localizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * localizacao findMany
   */
  export type localizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * Filter, which localizacaos to fetch.
     */
    where?: localizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localizacaos to fetch.
     */
    orderBy?: localizacaoOrderByWithRelationInput | localizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing localizacaos.
     */
    cursor?: localizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * localizacao create
   */
  export type localizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a localizacao.
     */
    data?: XOR<localizacaoCreateInput, localizacaoUncheckedCreateInput>
  }

  /**
   * localizacao createMany
   */
  export type localizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many localizacaos.
     */
    data: localizacaoCreateManyInput | localizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * localizacao createManyAndReturn
   */
  export type localizacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * The data used to create many localizacaos.
     */
    data: localizacaoCreateManyInput | localizacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * localizacao update
   */
  export type localizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a localizacao.
     */
    data: XOR<localizacaoUpdateInput, localizacaoUncheckedUpdateInput>
    /**
     * Choose, which localizacao to update.
     */
    where: localizacaoWhereUniqueInput
  }

  /**
   * localizacao updateMany
   */
  export type localizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update localizacaos.
     */
    data: XOR<localizacaoUpdateManyMutationInput, localizacaoUncheckedUpdateManyInput>
    /**
     * Filter which localizacaos to update
     */
    where?: localizacaoWhereInput
    /**
     * Limit how many localizacaos to update.
     */
    limit?: number
  }

  /**
   * localizacao updateManyAndReturn
   */
  export type localizacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * The data used to update localizacaos.
     */
    data: XOR<localizacaoUpdateManyMutationInput, localizacaoUncheckedUpdateManyInput>
    /**
     * Filter which localizacaos to update
     */
    where?: localizacaoWhereInput
    /**
     * Limit how many localizacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * localizacao upsert
   */
  export type localizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the localizacao to update in case it exists.
     */
    where: localizacaoWhereUniqueInput
    /**
     * In case the localizacao found by the `where` argument doesn't exist, create a new localizacao with this data.
     */
    create: XOR<localizacaoCreateInput, localizacaoUncheckedCreateInput>
    /**
     * In case the localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<localizacaoUpdateInput, localizacaoUncheckedUpdateInput>
  }

  /**
   * localizacao delete
   */
  export type localizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    /**
     * Filter which localizacao to delete.
     */
    where: localizacaoWhereUniqueInput
  }

  /**
   * localizacao deleteMany
   */
  export type localizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which localizacaos to delete
     */
    where?: localizacaoWhereInput
    /**
     * Limit how many localizacaos to delete.
     */
    limit?: number
  }

  /**
   * localizacao.impacto_social
   */
  export type localizacao$impacto_socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    where?: impacto_socialWhereInput
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    cursor?: impacto_socialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Impacto_socialScalarFieldEnum | Impacto_socialScalarFieldEnum[]
  }

  /**
   * localizacao.organizacao
   */
  export type localizacao$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
  }

  /**
   * localizacao without action
   */
  export type localizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
  }


  /**
   * Model organizacao
   */

  export type AggregateOrganizacao = {
    _count: OrganizacaoCountAggregateOutputType | null
    _avg: OrganizacaoAvgAggregateOutputType | null
    _sum: OrganizacaoSumAggregateOutputType | null
    _min: OrganizacaoMinAggregateOutputType | null
    _max: OrganizacaoMaxAggregateOutputType | null
  }

  export type OrganizacaoAvgAggregateOutputType = {
    id_organizacao: number | null
    id_voluntarios: number | null
    id_doadores: number | null
  }

  export type OrganizacaoSumAggregateOutputType = {
    id_organizacao: number | null
    id_voluntarios: number | null
    id_doadores: number | null
  }

  export type OrganizacaoMinAggregateOutputType = {
    id_organizacao: number | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    id_voluntarios: number | null
    id_doadores: number | null
  }

  export type OrganizacaoMaxAggregateOutputType = {
    id_organizacao: number | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    id_voluntarios: number | null
    id_doadores: number | null
  }

  export type OrganizacaoCountAggregateOutputType = {
    id_organizacao: number
    nome: number
    cnpj: number
    endereco: number
    telefone: number
    email: number
    id_voluntarios: number
    id_doadores: number
    _all: number
  }


  export type OrganizacaoAvgAggregateInputType = {
    id_organizacao?: true
    id_voluntarios?: true
    id_doadores?: true
  }

  export type OrganizacaoSumAggregateInputType = {
    id_organizacao?: true
    id_voluntarios?: true
    id_doadores?: true
  }

  export type OrganizacaoMinAggregateInputType = {
    id_organizacao?: true
    nome?: true
    cnpj?: true
    endereco?: true
    telefone?: true
    email?: true
    id_voluntarios?: true
    id_doadores?: true
  }

  export type OrganizacaoMaxAggregateInputType = {
    id_organizacao?: true
    nome?: true
    cnpj?: true
    endereco?: true
    telefone?: true
    email?: true
    id_voluntarios?: true
    id_doadores?: true
  }

  export type OrganizacaoCountAggregateInputType = {
    id_organizacao?: true
    nome?: true
    cnpj?: true
    endereco?: true
    telefone?: true
    email?: true
    id_voluntarios?: true
    id_doadores?: true
    _all?: true
  }

  export type OrganizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizacao to aggregate.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizacaos
    **/
    _count?: true | OrganizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizacaoMaxAggregateInputType
  }

  export type GetOrganizacaoAggregateType<T extends OrganizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizacao[P]>
      : GetScalarType<T[P], AggregateOrganizacao[P]>
  }




  export type organizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizacaoWhereInput
    orderBy?: organizacaoOrderByWithAggregationInput | organizacaoOrderByWithAggregationInput[]
    by: OrganizacaoScalarFieldEnum[] | OrganizacaoScalarFieldEnum
    having?: organizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizacaoCountAggregateInputType | true
    _avg?: OrganizacaoAvgAggregateInputType
    _sum?: OrganizacaoSumAggregateInputType
    _min?: OrganizacaoMinAggregateInputType
    _max?: OrganizacaoMaxAggregateInputType
  }

  export type OrganizacaoGroupByOutputType = {
    id_organizacao: number
    nome: string | null
    cnpj: string
    endereco: string | null
    telefone: string | null
    email: string | null
    id_voluntarios: number | null
    id_doadores: number | null
    _count: OrganizacaoCountAggregateOutputType | null
    _avg: OrganizacaoAvgAggregateOutputType | null
    _sum: OrganizacaoSumAggregateOutputType | null
    _min: OrganizacaoMinAggregateOutputType | null
    _max: OrganizacaoMaxAggregateOutputType | null
  }

  type GetOrganizacaoGroupByPayload<T extends organizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizacaoGroupByOutputType[P]>
        }
      >
    >


  export type organizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_organizacao?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    id_voluntarios?: boolean
    id_doadores?: boolean
    alerta?: boolean | organizacao$alertaArgs<ExtArgs>
    categoria_doacao?: boolean | organizacao$categoria_doacaoArgs<ExtArgs>
    feedback?: boolean | organizacao$feedbackArgs<ExtArgs>
    impacto_social?: boolean | organizacao$impacto_socialArgs<ExtArgs>
    localizacao?: boolean | organizacao$localizacaoArgs<ExtArgs>
    voluntarios?: boolean | organizacao$voluntariosArgs<ExtArgs>
    doadores?: boolean | organizacao$doadoresArgs<ExtArgs>
    _count?: boolean | OrganizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizacao"]>

  export type organizacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_organizacao?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    id_voluntarios?: boolean
    id_doadores?: boolean
    voluntarios?: boolean | organizacao$voluntariosArgs<ExtArgs>
    doadores?: boolean | organizacao$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["organizacao"]>

  export type organizacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_organizacao?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    id_voluntarios?: boolean
    id_doadores?: boolean
    voluntarios?: boolean | organizacao$voluntariosArgs<ExtArgs>
    doadores?: boolean | organizacao$doadoresArgs<ExtArgs>
  }, ExtArgs["result"]["organizacao"]>

  export type organizacaoSelectScalar = {
    id_organizacao?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    id_voluntarios?: boolean
    id_doadores?: boolean
  }

  export type organizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_organizacao" | "nome" | "cnpj" | "endereco" | "telefone" | "email" | "id_voluntarios" | "id_doadores", ExtArgs["result"]["organizacao"]>
  export type organizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | organizacao$alertaArgs<ExtArgs>
    categoria_doacao?: boolean | organizacao$categoria_doacaoArgs<ExtArgs>
    feedback?: boolean | organizacao$feedbackArgs<ExtArgs>
    impacto_social?: boolean | organizacao$impacto_socialArgs<ExtArgs>
    localizacao?: boolean | organizacao$localizacaoArgs<ExtArgs>
    voluntarios?: boolean | organizacao$voluntariosArgs<ExtArgs>
    doadores?: boolean | organizacao$doadoresArgs<ExtArgs>
    _count?: boolean | OrganizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntarios?: boolean | organizacao$voluntariosArgs<ExtArgs>
    doadores?: boolean | organizacao$doadoresArgs<ExtArgs>
  }
  export type organizacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntarios?: boolean | organizacao$voluntariosArgs<ExtArgs>
    doadores?: boolean | organizacao$doadoresArgs<ExtArgs>
  }

  export type $organizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizacao"
    objects: {
      alerta: Prisma.$alertaPayload<ExtArgs>[]
      categoria_doacao: Prisma.$categoria_doacaoPayload<ExtArgs>[]
      feedback: Prisma.$feedbackPayload<ExtArgs>[]
      impacto_social: Prisma.$impacto_socialPayload<ExtArgs>[]
      localizacao: Prisma.$localizacaoPayload<ExtArgs>[]
      voluntarios: Prisma.$voluntariosPayload<ExtArgs> | null
      doadores: Prisma.$doadoresPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_organizacao: number
      nome: string | null
      cnpj: string
      endereco: string | null
      telefone: string | null
      email: string | null
      id_voluntarios: number | null
      id_doadores: number | null
    }, ExtArgs["result"]["organizacao"]>
    composites: {}
  }

  type organizacaoGetPayload<S extends boolean | null | undefined | organizacaoDefaultArgs> = $Result.GetResult<Prisma.$organizacaoPayload, S>

  type organizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizacaoCountAggregateInputType | true
    }

  export interface organizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizacao'], meta: { name: 'organizacao' } }
    /**
     * Find zero or one Organizacao that matches the filter.
     * @param {organizacaoFindUniqueArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizacaoFindUniqueArgs>(args: SelectSubset<T, organizacaoFindUniqueArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizacaoFindUniqueOrThrowArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, organizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoFindFirstArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizacaoFindFirstArgs>(args?: SelectSubset<T, organizacaoFindFirstArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoFindFirstOrThrowArgs} args - Arguments to find a Organizacao
     * @example
     * // Get one Organizacao
     * const organizacao = await prisma.organizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, organizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizacaos
     * const organizacaos = await prisma.organizacao.findMany()
     * 
     * // Get first 10 Organizacaos
     * const organizacaos = await prisma.organizacao.findMany({ take: 10 })
     * 
     * // Only select the `id_organizacao`
     * const organizacaoWithId_organizacaoOnly = await prisma.organizacao.findMany({ select: { id_organizacao: true } })
     * 
     */
    findMany<T extends organizacaoFindManyArgs>(args?: SelectSubset<T, organizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizacao.
     * @param {organizacaoCreateArgs} args - Arguments to create a Organizacao.
     * @example
     * // Create one Organizacao
     * const Organizacao = await prisma.organizacao.create({
     *   data: {
     *     // ... data to create a Organizacao
     *   }
     * })
     * 
     */
    create<T extends organizacaoCreateArgs>(args: SelectSubset<T, organizacaoCreateArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizacaos.
     * @param {organizacaoCreateManyArgs} args - Arguments to create many Organizacaos.
     * @example
     * // Create many Organizacaos
     * const organizacao = await prisma.organizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizacaoCreateManyArgs>(args?: SelectSubset<T, organizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizacaos and returns the data saved in the database.
     * @param {organizacaoCreateManyAndReturnArgs} args - Arguments to create many Organizacaos.
     * @example
     * // Create many Organizacaos
     * const organizacao = await prisma.organizacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizacaos and only return the `id_organizacao`
     * const organizacaoWithId_organizacaoOnly = await prisma.organizacao.createManyAndReturn({
     *   select: { id_organizacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, organizacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizacao.
     * @param {organizacaoDeleteArgs} args - Arguments to delete one Organizacao.
     * @example
     * // Delete one Organizacao
     * const Organizacao = await prisma.organizacao.delete({
     *   where: {
     *     // ... filter to delete one Organizacao
     *   }
     * })
     * 
     */
    delete<T extends organizacaoDeleteArgs>(args: SelectSubset<T, organizacaoDeleteArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizacao.
     * @param {organizacaoUpdateArgs} args - Arguments to update one Organizacao.
     * @example
     * // Update one Organizacao
     * const organizacao = await prisma.organizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizacaoUpdateArgs>(args: SelectSubset<T, organizacaoUpdateArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizacaos.
     * @param {organizacaoDeleteManyArgs} args - Arguments to filter Organizacaos to delete.
     * @example
     * // Delete a few Organizacaos
     * const { count } = await prisma.organizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizacaoDeleteManyArgs>(args?: SelectSubset<T, organizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizacaos
     * const organizacao = await prisma.organizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizacaoUpdateManyArgs>(args: SelectSubset<T, organizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizacaos and returns the data updated in the database.
     * @param {organizacaoUpdateManyAndReturnArgs} args - Arguments to update many Organizacaos.
     * @example
     * // Update many Organizacaos
     * const organizacao = await prisma.organizacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizacaos and only return the `id_organizacao`
     * const organizacaoWithId_organizacaoOnly = await prisma.organizacao.updateManyAndReturn({
     *   select: { id_organizacao: true },
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
    updateManyAndReturn<T extends organizacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, organizacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizacao.
     * @param {organizacaoUpsertArgs} args - Arguments to update or create a Organizacao.
     * @example
     * // Update or create a Organizacao
     * const organizacao = await prisma.organizacao.upsert({
     *   create: {
     *     // ... data to create a Organizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizacao we want to update
     *   }
     * })
     */
    upsert<T extends organizacaoUpsertArgs>(args: SelectSubset<T, organizacaoUpsertArgs<ExtArgs>>): Prisma__organizacaoClient<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoCountArgs} args - Arguments to filter Organizacaos to count.
     * @example
     * // Count the number of Organizacaos
     * const count = await prisma.organizacao.count({
     *   where: {
     *     // ... the filter for the Organizacaos we want to count
     *   }
     * })
    **/
    count<T extends organizacaoCountArgs>(
      args?: Subset<T, organizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizacaoAggregateArgs>(args: Subset<T, OrganizacaoAggregateArgs>): Prisma.PrismaPromise<GetOrganizacaoAggregateType<T>>

    /**
     * Group by Organizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacaoGroupByArgs} args - Group by arguments.
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
      T extends organizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizacaoGroupByArgs['orderBy'] }
        : { orderBy?: organizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizacao model
   */
  readonly fields: organizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends organizacao$alertaArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$alertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria_doacao<T extends organizacao$categoria_doacaoArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$categoria_doacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoria_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends organizacao$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    impacto_social<T extends organizacao$impacto_socialArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$impacto_socialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$impacto_socialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    localizacao<T extends organizacao$localizacaoArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$localizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$localizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voluntarios<T extends organizacao$voluntariosArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$voluntariosArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doadores<T extends organizacao$doadoresArgs<ExtArgs> = {}>(args?: Subset<T, organizacao$doadoresArgs<ExtArgs>>): Prisma__doadoresClient<$Result.GetResult<Prisma.$doadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the organizacao model
   */
  interface organizacaoFieldRefs {
    readonly id_organizacao: FieldRef<"organizacao", 'Int'>
    readonly nome: FieldRef<"organizacao", 'String'>
    readonly cnpj: FieldRef<"organizacao", 'String'>
    readonly endereco: FieldRef<"organizacao", 'String'>
    readonly telefone: FieldRef<"organizacao", 'String'>
    readonly email: FieldRef<"organizacao", 'String'>
    readonly id_voluntarios: FieldRef<"organizacao", 'Int'>
    readonly id_doadores: FieldRef<"organizacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * organizacao findUnique
   */
  export type organizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao findUniqueOrThrow
   */
  export type organizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao findFirst
   */
  export type organizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizacaos.
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizacaos.
     */
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * organizacao findFirstOrThrow
   */
  export type organizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacao to fetch.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizacaos.
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizacaos.
     */
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * organizacao findMany
   */
  export type organizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter, which organizacaos to fetch.
     */
    where?: organizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizacaos to fetch.
     */
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizacaos.
     */
    cursor?: organizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizacaos.
     */
    skip?: number
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * organizacao create
   */
  export type organizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a organizacao.
     */
    data: XOR<organizacaoCreateInput, organizacaoUncheckedCreateInput>
  }

  /**
   * organizacao createMany
   */
  export type organizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizacaos.
     */
    data: organizacaoCreateManyInput | organizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizacao createManyAndReturn
   */
  export type organizacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * The data used to create many organizacaos.
     */
    data: organizacaoCreateManyInput | organizacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizacao update
   */
  export type organizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a organizacao.
     */
    data: XOR<organizacaoUpdateInput, organizacaoUncheckedUpdateInput>
    /**
     * Choose, which organizacao to update.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao updateMany
   */
  export type organizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizacaos.
     */
    data: XOR<organizacaoUpdateManyMutationInput, organizacaoUncheckedUpdateManyInput>
    /**
     * Filter which organizacaos to update
     */
    where?: organizacaoWhereInput
    /**
     * Limit how many organizacaos to update.
     */
    limit?: number
  }

  /**
   * organizacao updateManyAndReturn
   */
  export type organizacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * The data used to update organizacaos.
     */
    data: XOR<organizacaoUpdateManyMutationInput, organizacaoUncheckedUpdateManyInput>
    /**
     * Filter which organizacaos to update
     */
    where?: organizacaoWhereInput
    /**
     * Limit how many organizacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizacao upsert
   */
  export type organizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the organizacao to update in case it exists.
     */
    where: organizacaoWhereUniqueInput
    /**
     * In case the organizacao found by the `where` argument doesn't exist, create a new organizacao with this data.
     */
    create: XOR<organizacaoCreateInput, organizacaoUncheckedCreateInput>
    /**
     * In case the organizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizacaoUpdateInput, organizacaoUncheckedUpdateInput>
  }

  /**
   * organizacao delete
   */
  export type organizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    /**
     * Filter which organizacao to delete.
     */
    where: organizacaoWhereUniqueInput
  }

  /**
   * organizacao deleteMany
   */
  export type organizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizacaos to delete
     */
    where?: organizacaoWhereInput
    /**
     * Limit how many organizacaos to delete.
     */
    limit?: number
  }

  /**
   * organizacao.alerta
   */
  export type organizacao$alertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alerta
     */
    select?: alertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alerta
     */
    omit?: alertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertaInclude<ExtArgs> | null
    where?: alertaWhereInput
    orderBy?: alertaOrderByWithRelationInput | alertaOrderByWithRelationInput[]
    cursor?: alertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * organizacao.categoria_doacao
   */
  export type organizacao$categoria_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria_doacao
     */
    select?: categoria_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria_doacao
     */
    omit?: categoria_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoria_doacaoInclude<ExtArgs> | null
    where?: categoria_doacaoWhereInput
    orderBy?: categoria_doacaoOrderByWithRelationInput | categoria_doacaoOrderByWithRelationInput[]
    cursor?: categoria_doacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Categoria_doacaoScalarFieldEnum | Categoria_doacaoScalarFieldEnum[]
  }

  /**
   * organizacao.feedback
   */
  export type organizacao$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    cursor?: feedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * organizacao.impacto_social
   */
  export type organizacao$impacto_socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the impacto_social
     */
    select?: impacto_socialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the impacto_social
     */
    omit?: impacto_socialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: impacto_socialInclude<ExtArgs> | null
    where?: impacto_socialWhereInput
    orderBy?: impacto_socialOrderByWithRelationInput | impacto_socialOrderByWithRelationInput[]
    cursor?: impacto_socialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Impacto_socialScalarFieldEnum | Impacto_socialScalarFieldEnum[]
  }

  /**
   * organizacao.localizacao
   */
  export type organizacao$localizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localizacao
     */
    select?: localizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the localizacao
     */
    omit?: localizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: localizacaoInclude<ExtArgs> | null
    where?: localizacaoWhereInput
    orderBy?: localizacaoOrderByWithRelationInput | localizacaoOrderByWithRelationInput[]
    cursor?: localizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * organizacao.voluntarios
   */
  export type organizacao$voluntariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    where?: voluntariosWhereInput
  }

  /**
   * organizacao.doadores
   */
  export type organizacao$doadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doadores
     */
    select?: doadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doadores
     */
    omit?: doadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doadoresInclude<ExtArgs> | null
    where?: doadoresWhereInput
  }

  /**
   * organizacao without action
   */
  export type organizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
  }


  /**
   * Model voluntarios
   */

  export type AggregateVoluntarios = {
    _count: VoluntariosCountAggregateOutputType | null
    _avg: VoluntariosAvgAggregateOutputType | null
    _sum: VoluntariosSumAggregateOutputType | null
    _min: VoluntariosMinAggregateOutputType | null
    _max: VoluntariosMaxAggregateOutputType | null
  }

  export type VoluntariosAvgAggregateOutputType = {
    id_voluntarios: number | null
    idade: number | null
  }

  export type VoluntariosSumAggregateOutputType = {
    id_voluntarios: number | null
    idade: number | null
  }

  export type VoluntariosMinAggregateOutputType = {
    id_voluntarios: number | null
    nome: string | null
    idade: number | null
    email: string | null
  }

  export type VoluntariosMaxAggregateOutputType = {
    id_voluntarios: number | null
    nome: string | null
    idade: number | null
    email: string | null
  }

  export type VoluntariosCountAggregateOutputType = {
    id_voluntarios: number
    nome: number
    idade: number
    email: number
    _all: number
  }


  export type VoluntariosAvgAggregateInputType = {
    id_voluntarios?: true
    idade?: true
  }

  export type VoluntariosSumAggregateInputType = {
    id_voluntarios?: true
    idade?: true
  }

  export type VoluntariosMinAggregateInputType = {
    id_voluntarios?: true
    nome?: true
    idade?: true
    email?: true
  }

  export type VoluntariosMaxAggregateInputType = {
    id_voluntarios?: true
    nome?: true
    idade?: true
    email?: true
  }

  export type VoluntariosCountAggregateInputType = {
    id_voluntarios?: true
    nome?: true
    idade?: true
    email?: true
    _all?: true
  }

  export type VoluntariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voluntarios to aggregate.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voluntarios
    **/
    _count?: true | VoluntariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoluntariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoluntariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoluntariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoluntariosMaxAggregateInputType
  }

  export type GetVoluntariosAggregateType<T extends VoluntariosAggregateArgs> = {
        [P in keyof T & keyof AggregateVoluntarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoluntarios[P]>
      : GetScalarType<T[P], AggregateVoluntarios[P]>
  }




  export type voluntariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voluntariosWhereInput
    orderBy?: voluntariosOrderByWithAggregationInput | voluntariosOrderByWithAggregationInput[]
    by: VoluntariosScalarFieldEnum[] | VoluntariosScalarFieldEnum
    having?: voluntariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoluntariosCountAggregateInputType | true
    _avg?: VoluntariosAvgAggregateInputType
    _sum?: VoluntariosSumAggregateInputType
    _min?: VoluntariosMinAggregateInputType
    _max?: VoluntariosMaxAggregateInputType
  }

  export type VoluntariosGroupByOutputType = {
    id_voluntarios: number
    nome: string | null
    idade: number | null
    email: string | null
    _count: VoluntariosCountAggregateOutputType | null
    _avg: VoluntariosAvgAggregateOutputType | null
    _sum: VoluntariosSumAggregateOutputType | null
    _min: VoluntariosMinAggregateOutputType | null
    _max: VoluntariosMaxAggregateOutputType | null
  }

  type GetVoluntariosGroupByPayload<T extends voluntariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoluntariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoluntariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoluntariosGroupByOutputType[P]>
            : GetScalarType<T[P], VoluntariosGroupByOutputType[P]>
        }
      >
    >


  export type voluntariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voluntarios?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
    organizacao?: boolean | voluntarios$organizacaoArgs<ExtArgs>
    _count?: boolean | VoluntariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voluntarios"]>

  export type voluntariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voluntarios?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
  }, ExtArgs["result"]["voluntarios"]>

  export type voluntariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voluntarios?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
  }, ExtArgs["result"]["voluntarios"]>

  export type voluntariosSelectScalar = {
    id_voluntarios?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
  }

  export type voluntariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_voluntarios" | "nome" | "idade" | "email", ExtArgs["result"]["voluntarios"]>
  export type voluntariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacao?: boolean | voluntarios$organizacaoArgs<ExtArgs>
    _count?: boolean | VoluntariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type voluntariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type voluntariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $voluntariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voluntarios"
    objects: {
      organizacao: Prisma.$organizacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_voluntarios: number
      nome: string | null
      idade: number | null
      email: string | null
    }, ExtArgs["result"]["voluntarios"]>
    composites: {}
  }

  type voluntariosGetPayload<S extends boolean | null | undefined | voluntariosDefaultArgs> = $Result.GetResult<Prisma.$voluntariosPayload, S>

  type voluntariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voluntariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoluntariosCountAggregateInputType | true
    }

  export interface voluntariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voluntarios'], meta: { name: 'voluntarios' } }
    /**
     * Find zero or one Voluntarios that matches the filter.
     * @param {voluntariosFindUniqueArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voluntariosFindUniqueArgs>(args: SelectSubset<T, voluntariosFindUniqueArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voluntarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voluntariosFindUniqueOrThrowArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voluntariosFindUniqueOrThrowArgs>(args: SelectSubset<T, voluntariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosFindFirstArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voluntariosFindFirstArgs>(args?: SelectSubset<T, voluntariosFindFirstArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosFindFirstOrThrowArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voluntariosFindFirstOrThrowArgs>(args?: SelectSubset<T, voluntariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voluntarios
     * const voluntarios = await prisma.voluntarios.findMany()
     * 
     * // Get first 10 Voluntarios
     * const voluntarios = await prisma.voluntarios.findMany({ take: 10 })
     * 
     * // Only select the `id_voluntarios`
     * const voluntariosWithId_voluntariosOnly = await prisma.voluntarios.findMany({ select: { id_voluntarios: true } })
     * 
     */
    findMany<T extends voluntariosFindManyArgs>(args?: SelectSubset<T, voluntariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voluntarios.
     * @param {voluntariosCreateArgs} args - Arguments to create a Voluntarios.
     * @example
     * // Create one Voluntarios
     * const Voluntarios = await prisma.voluntarios.create({
     *   data: {
     *     // ... data to create a Voluntarios
     *   }
     * })
     * 
     */
    create<T extends voluntariosCreateArgs>(args: SelectSubset<T, voluntariosCreateArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voluntarios.
     * @param {voluntariosCreateManyArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntarios = await prisma.voluntarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voluntariosCreateManyArgs>(args?: SelectSubset<T, voluntariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voluntarios and returns the data saved in the database.
     * @param {voluntariosCreateManyAndReturnArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntarios = await prisma.voluntarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voluntarios and only return the `id_voluntarios`
     * const voluntariosWithId_voluntariosOnly = await prisma.voluntarios.createManyAndReturn({
     *   select: { id_voluntarios: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voluntariosCreateManyAndReturnArgs>(args?: SelectSubset<T, voluntariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voluntarios.
     * @param {voluntariosDeleteArgs} args - Arguments to delete one Voluntarios.
     * @example
     * // Delete one Voluntarios
     * const Voluntarios = await prisma.voluntarios.delete({
     *   where: {
     *     // ... filter to delete one Voluntarios
     *   }
     * })
     * 
     */
    delete<T extends voluntariosDeleteArgs>(args: SelectSubset<T, voluntariosDeleteArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voluntarios.
     * @param {voluntariosUpdateArgs} args - Arguments to update one Voluntarios.
     * @example
     * // Update one Voluntarios
     * const voluntarios = await prisma.voluntarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voluntariosUpdateArgs>(args: SelectSubset<T, voluntariosUpdateArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voluntarios.
     * @param {voluntariosDeleteManyArgs} args - Arguments to filter Voluntarios to delete.
     * @example
     * // Delete a few Voluntarios
     * const { count } = await prisma.voluntarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voluntariosDeleteManyArgs>(args?: SelectSubset<T, voluntariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voluntarios
     * const voluntarios = await prisma.voluntarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voluntariosUpdateManyArgs>(args: SelectSubset<T, voluntariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios and returns the data updated in the database.
     * @param {voluntariosUpdateManyAndReturnArgs} args - Arguments to update many Voluntarios.
     * @example
     * // Update many Voluntarios
     * const voluntarios = await prisma.voluntarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voluntarios and only return the `id_voluntarios`
     * const voluntariosWithId_voluntariosOnly = await prisma.voluntarios.updateManyAndReturn({
     *   select: { id_voluntarios: true },
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
    updateManyAndReturn<T extends voluntariosUpdateManyAndReturnArgs>(args: SelectSubset<T, voluntariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voluntarios.
     * @param {voluntariosUpsertArgs} args - Arguments to update or create a Voluntarios.
     * @example
     * // Update or create a Voluntarios
     * const voluntarios = await prisma.voluntarios.upsert({
     *   create: {
     *     // ... data to create a Voluntarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voluntarios we want to update
     *   }
     * })
     */
    upsert<T extends voluntariosUpsertArgs>(args: SelectSubset<T, voluntariosUpsertArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosCountArgs} args - Arguments to filter Voluntarios to count.
     * @example
     * // Count the number of Voluntarios
     * const count = await prisma.voluntarios.count({
     *   where: {
     *     // ... the filter for the Voluntarios we want to count
     *   }
     * })
    **/
    count<T extends voluntariosCountArgs>(
      args?: Subset<T, voluntariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoluntariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoluntariosAggregateArgs>(args: Subset<T, VoluntariosAggregateArgs>): Prisma.PrismaPromise<GetVoluntariosAggregateType<T>>

    /**
     * Group by Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosGroupByArgs} args - Group by arguments.
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
      T extends voluntariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voluntariosGroupByArgs['orderBy'] }
        : { orderBy?: voluntariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, voluntariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoluntariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voluntarios model
   */
  readonly fields: voluntariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voluntarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voluntariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacao<T extends voluntarios$organizacaoArgs<ExtArgs> = {}>(args?: Subset<T, voluntarios$organizacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the voluntarios model
   */
  interface voluntariosFieldRefs {
    readonly id_voluntarios: FieldRef<"voluntarios", 'Int'>
    readonly nome: FieldRef<"voluntarios", 'String'>
    readonly idade: FieldRef<"voluntarios", 'Int'>
    readonly email: FieldRef<"voluntarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * voluntarios findUnique
   */
  export type voluntariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios findUniqueOrThrow
   */
  export type voluntariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios findFirst
   */
  export type voluntariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voluntarios.
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voluntarios.
     */
    distinct?: VoluntariosScalarFieldEnum | VoluntariosScalarFieldEnum[]
  }

  /**
   * voluntarios findFirstOrThrow
   */
  export type voluntariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voluntarios.
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voluntarios.
     */
    distinct?: VoluntariosScalarFieldEnum | VoluntariosScalarFieldEnum[]
  }

  /**
   * voluntarios findMany
   */
  export type voluntariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voluntarios.
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    distinct?: VoluntariosScalarFieldEnum | VoluntariosScalarFieldEnum[]
  }

  /**
   * voluntarios create
   */
  export type voluntariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * The data needed to create a voluntarios.
     */
    data?: XOR<voluntariosCreateInput, voluntariosUncheckedCreateInput>
  }

  /**
   * voluntarios createMany
   */
  export type voluntariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voluntarios.
     */
    data: voluntariosCreateManyInput | voluntariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voluntarios createManyAndReturn
   */
  export type voluntariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * The data used to create many voluntarios.
     */
    data: voluntariosCreateManyInput | voluntariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voluntarios update
   */
  export type voluntariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * The data needed to update a voluntarios.
     */
    data: XOR<voluntariosUpdateInput, voluntariosUncheckedUpdateInput>
    /**
     * Choose, which voluntarios to update.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios updateMany
   */
  export type voluntariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voluntarios.
     */
    data: XOR<voluntariosUpdateManyMutationInput, voluntariosUncheckedUpdateManyInput>
    /**
     * Filter which voluntarios to update
     */
    where?: voluntariosWhereInput
    /**
     * Limit how many voluntarios to update.
     */
    limit?: number
  }

  /**
   * voluntarios updateManyAndReturn
   */
  export type voluntariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * The data used to update voluntarios.
     */
    data: XOR<voluntariosUpdateManyMutationInput, voluntariosUncheckedUpdateManyInput>
    /**
     * Filter which voluntarios to update
     */
    where?: voluntariosWhereInput
    /**
     * Limit how many voluntarios to update.
     */
    limit?: number
  }

  /**
   * voluntarios upsert
   */
  export type voluntariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * The filter to search for the voluntarios to update in case it exists.
     */
    where: voluntariosWhereUniqueInput
    /**
     * In case the voluntarios found by the `where` argument doesn't exist, create a new voluntarios with this data.
     */
    create: XOR<voluntariosCreateInput, voluntariosUncheckedCreateInput>
    /**
     * In case the voluntarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voluntariosUpdateInput, voluntariosUncheckedUpdateInput>
  }

  /**
   * voluntarios delete
   */
  export type voluntariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter which voluntarios to delete.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios deleteMany
   */
  export type voluntariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voluntarios to delete
     */
    where?: voluntariosWhereInput
    /**
     * Limit how many voluntarios to delete.
     */
    limit?: number
  }

  /**
   * voluntarios.organizacao
   */
  export type voluntarios$organizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizacao
     */
    select?: organizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizacao
     */
    omit?: organizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacaoInclude<ExtArgs> | null
    where?: organizacaoWhereInput
    orderBy?: organizacaoOrderByWithRelationInput | organizacaoOrderByWithRelationInput[]
    cursor?: organizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizacaoScalarFieldEnum | OrganizacaoScalarFieldEnum[]
  }

  /**
   * voluntarios without action
   */
  export type voluntariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
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


  export const AlertaScalarFieldEnum: {
    id_alerta: 'id_alerta',
    tipo_alerta: 'tipo_alerta',
    descricao: 'descricao',
    id_organizacao: 'id_organizacao',
    id_doadores: 'id_doadores'
  };

  export type AlertaScalarFieldEnum = (typeof AlertaScalarFieldEnum)[keyof typeof AlertaScalarFieldEnum]


  export const Categoria_doacaoScalarFieldEnum: {
    id_doacao: 'id_doacao',
    quantidade: 'quantidade',
    tipo_doacao: 'tipo_doacao',
    validade: 'validade',
    id_doadores: 'id_doadores',
    id_organizacao: 'id_organizacao'
  };

  export type Categoria_doacaoScalarFieldEnum = (typeof Categoria_doacaoScalarFieldEnum)[keyof typeof Categoria_doacaoScalarFieldEnum]


  export const DoadoresScalarFieldEnum: {
    nome: 'nome',
    idade: 'idade',
    email: 'email',
    id_doadores: 'id_doadores'
  };

  export type DoadoresScalarFieldEnum = (typeof DoadoresScalarFieldEnum)[keyof typeof DoadoresScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id_feedback: 'id_feedback',
    critica: 'critica',
    feedback_descricao: 'feedback_descricao',
    id_organizacao: 'id_organizacao',
    id_doadores: 'id_doadores'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const Impacto_socialScalarFieldEnum: {
    id_impacto: 'id_impacto',
    id_organizacao: 'id_organizacao',
    id_localizacao: 'id_localizacao',
    id_doacao: 'id_doacao'
  };

  export type Impacto_socialScalarFieldEnum = (typeof Impacto_socialScalarFieldEnum)[keyof typeof Impacto_socialScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id_localizacao: 'id_localizacao',
    nome: 'nome',
    latitude: 'latitude',
    longitude: 'longitude',
    id_organizacao: 'id_organizacao'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const OrganizacaoScalarFieldEnum: {
    id_organizacao: 'id_organizacao',
    nome: 'nome',
    cnpj: 'cnpj',
    endereco: 'endereco',
    telefone: 'telefone',
    email: 'email',
    id_voluntarios: 'id_voluntarios',
    id_doadores: 'id_doadores'
  };

  export type OrganizacaoScalarFieldEnum = (typeof OrganizacaoScalarFieldEnum)[keyof typeof OrganizacaoScalarFieldEnum]


  export const VoluntariosScalarFieldEnum: {
    id_voluntarios: 'id_voluntarios',
    nome: 'nome',
    idade: 'idade',
    email: 'email'
  };

  export type VoluntariosScalarFieldEnum = (typeof VoluntariosScalarFieldEnum)[keyof typeof VoluntariosScalarFieldEnum]


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
   * Reference to a field of type 'alerta_tipo_alerta'
   */
  export type Enumalerta_tipo_alertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'alerta_tipo_alerta'>
    


  /**
   * Reference to a field of type 'alerta_tipo_alerta[]'
   */
  export type ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'alerta_tipo_alerta[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'categoria_doacao_tipo_doacao'
   */
  export type Enumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'categoria_doacao_tipo_doacao'>
    


  /**
   * Reference to a field of type 'categoria_doacao_tipo_doacao[]'
   */
  export type ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'categoria_doacao_tipo_doacao[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'feedback_critica'
   */
  export type Enumfeedback_criticaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'feedback_critica'>
    


  /**
   * Reference to a field of type 'feedback_critica[]'
   */
  export type ListEnumfeedback_criticaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'feedback_critica[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type alertaWhereInput = {
    AND?: alertaWhereInput | alertaWhereInput[]
    OR?: alertaWhereInput[]
    NOT?: alertaWhereInput | alertaWhereInput[]
    id_alerta?: IntFilter<"alerta"> | number
    tipo_alerta?: Enumalerta_tipo_alertaNullableFilter<"alerta"> | $Enums.alerta_tipo_alerta | null
    descricao?: StringNullableFilter<"alerta"> | string | null
    id_organizacao?: IntNullableFilter<"alerta"> | number | null
    id_doadores?: IntNullableFilter<"alerta"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
  }

  export type alertaOrderByWithRelationInput = {
    id_alerta?: SortOrder
    tipo_alerta?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    organizacao?: organizacaoOrderByWithRelationInput
    doadores?: doadoresOrderByWithRelationInput
  }

  export type alertaWhereUniqueInput = Prisma.AtLeast<{
    id_alerta?: number
    AND?: alertaWhereInput | alertaWhereInput[]
    OR?: alertaWhereInput[]
    NOT?: alertaWhereInput | alertaWhereInput[]
    tipo_alerta?: Enumalerta_tipo_alertaNullableFilter<"alerta"> | $Enums.alerta_tipo_alerta | null
    descricao?: StringNullableFilter<"alerta"> | string | null
    id_organizacao?: IntNullableFilter<"alerta"> | number | null
    id_doadores?: IntNullableFilter<"alerta"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
  }, "id_alerta">

  export type alertaOrderByWithAggregationInput = {
    id_alerta?: SortOrder
    tipo_alerta?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    _count?: alertaCountOrderByAggregateInput
    _avg?: alertaAvgOrderByAggregateInput
    _max?: alertaMaxOrderByAggregateInput
    _min?: alertaMinOrderByAggregateInput
    _sum?: alertaSumOrderByAggregateInput
  }

  export type alertaScalarWhereWithAggregatesInput = {
    AND?: alertaScalarWhereWithAggregatesInput | alertaScalarWhereWithAggregatesInput[]
    OR?: alertaScalarWhereWithAggregatesInput[]
    NOT?: alertaScalarWhereWithAggregatesInput | alertaScalarWhereWithAggregatesInput[]
    id_alerta?: IntWithAggregatesFilter<"alerta"> | number
    tipo_alerta?: Enumalerta_tipo_alertaNullableWithAggregatesFilter<"alerta"> | $Enums.alerta_tipo_alerta | null
    descricao?: StringNullableWithAggregatesFilter<"alerta"> | string | null
    id_organizacao?: IntNullableWithAggregatesFilter<"alerta"> | number | null
    id_doadores?: IntNullableWithAggregatesFilter<"alerta"> | number | null
  }

  export type categoria_doacaoWhereInput = {
    AND?: categoria_doacaoWhereInput | categoria_doacaoWhereInput[]
    OR?: categoria_doacaoWhereInput[]
    NOT?: categoria_doacaoWhereInput | categoria_doacaoWhereInput[]
    id_doacao?: IntFilter<"categoria_doacao"> | number
    quantidade?: IntNullableFilter<"categoria_doacao"> | number | null
    tipo_doacao?: Enumcategoria_doacao_tipo_doacaoNullableFilter<"categoria_doacao"> | $Enums.categoria_doacao_tipo_doacao | null
    validade?: DateTimeNullableFilter<"categoria_doacao"> | Date | string | null
    id_doadores?: IntNullableFilter<"categoria_doacao"> | number | null
    id_organizacao?: IntNullableFilter<"categoria_doacao"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
    impacto_social?: Impacto_socialListRelationFilter
  }

  export type categoria_doacaoOrderByWithRelationInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrderInput | SortOrder
    tipo_doacao?: SortOrderInput | SortOrder
    validade?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    organizacao?: organizacaoOrderByWithRelationInput
    doadores?: doadoresOrderByWithRelationInput
    impacto_social?: impacto_socialOrderByRelationAggregateInput
  }

  export type categoria_doacaoWhereUniqueInput = Prisma.AtLeast<{
    id_doacao?: number
    AND?: categoria_doacaoWhereInput | categoria_doacaoWhereInput[]
    OR?: categoria_doacaoWhereInput[]
    NOT?: categoria_doacaoWhereInput | categoria_doacaoWhereInput[]
    quantidade?: IntNullableFilter<"categoria_doacao"> | number | null
    tipo_doacao?: Enumcategoria_doacao_tipo_doacaoNullableFilter<"categoria_doacao"> | $Enums.categoria_doacao_tipo_doacao | null
    validade?: DateTimeNullableFilter<"categoria_doacao"> | Date | string | null
    id_doadores?: IntNullableFilter<"categoria_doacao"> | number | null
    id_organizacao?: IntNullableFilter<"categoria_doacao"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
    impacto_social?: Impacto_socialListRelationFilter
  }, "id_doacao">

  export type categoria_doacaoOrderByWithAggregationInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrderInput | SortOrder
    tipo_doacao?: SortOrderInput | SortOrder
    validade?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    _count?: categoria_doacaoCountOrderByAggregateInput
    _avg?: categoria_doacaoAvgOrderByAggregateInput
    _max?: categoria_doacaoMaxOrderByAggregateInput
    _min?: categoria_doacaoMinOrderByAggregateInput
    _sum?: categoria_doacaoSumOrderByAggregateInput
  }

  export type categoria_doacaoScalarWhereWithAggregatesInput = {
    AND?: categoria_doacaoScalarWhereWithAggregatesInput | categoria_doacaoScalarWhereWithAggregatesInput[]
    OR?: categoria_doacaoScalarWhereWithAggregatesInput[]
    NOT?: categoria_doacaoScalarWhereWithAggregatesInput | categoria_doacaoScalarWhereWithAggregatesInput[]
    id_doacao?: IntWithAggregatesFilter<"categoria_doacao"> | number
    quantidade?: IntNullableWithAggregatesFilter<"categoria_doacao"> | number | null
    tipo_doacao?: Enumcategoria_doacao_tipo_doacaoNullableWithAggregatesFilter<"categoria_doacao"> | $Enums.categoria_doacao_tipo_doacao | null
    validade?: DateTimeNullableWithAggregatesFilter<"categoria_doacao"> | Date | string | null
    id_doadores?: IntNullableWithAggregatesFilter<"categoria_doacao"> | number | null
    id_organizacao?: IntNullableWithAggregatesFilter<"categoria_doacao"> | number | null
  }

  export type doadoresWhereInput = {
    AND?: doadoresWhereInput | doadoresWhereInput[]
    OR?: doadoresWhereInput[]
    NOT?: doadoresWhereInput | doadoresWhereInput[]
    nome?: StringNullableFilter<"doadores"> | string | null
    idade?: IntNullableFilter<"doadores"> | number | null
    email?: StringNullableFilter<"doadores"> | string | null
    id_doadores?: IntFilter<"doadores"> | number
    alerta?: AlertaListRelationFilter
    categoria_doacao?: Categoria_doacaoListRelationFilter
    feedback?: FeedbackListRelationFilter
    organizacao?: OrganizacaoListRelationFilter
  }

  export type doadoresOrderByWithRelationInput = {
    nome?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    id_doadores?: SortOrder
    alerta?: alertaOrderByRelationAggregateInput
    categoria_doacao?: categoria_doacaoOrderByRelationAggregateInput
    feedback?: feedbackOrderByRelationAggregateInput
    organizacao?: organizacaoOrderByRelationAggregateInput
  }

  export type doadoresWhereUniqueInput = Prisma.AtLeast<{
    id_doadores?: number
    AND?: doadoresWhereInput | doadoresWhereInput[]
    OR?: doadoresWhereInput[]
    NOT?: doadoresWhereInput | doadoresWhereInput[]
    nome?: StringNullableFilter<"doadores"> | string | null
    idade?: IntNullableFilter<"doadores"> | number | null
    email?: StringNullableFilter<"doadores"> | string | null
    alerta?: AlertaListRelationFilter
    categoria_doacao?: Categoria_doacaoListRelationFilter
    feedback?: FeedbackListRelationFilter
    organizacao?: OrganizacaoListRelationFilter
  }, "id_doadores">

  export type doadoresOrderByWithAggregationInput = {
    nome?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    id_doadores?: SortOrder
    _count?: doadoresCountOrderByAggregateInput
    _avg?: doadoresAvgOrderByAggregateInput
    _max?: doadoresMaxOrderByAggregateInput
    _min?: doadoresMinOrderByAggregateInput
    _sum?: doadoresSumOrderByAggregateInput
  }

  export type doadoresScalarWhereWithAggregatesInput = {
    AND?: doadoresScalarWhereWithAggregatesInput | doadoresScalarWhereWithAggregatesInput[]
    OR?: doadoresScalarWhereWithAggregatesInput[]
    NOT?: doadoresScalarWhereWithAggregatesInput | doadoresScalarWhereWithAggregatesInput[]
    nome?: StringNullableWithAggregatesFilter<"doadores"> | string | null
    idade?: IntNullableWithAggregatesFilter<"doadores"> | number | null
    email?: StringNullableWithAggregatesFilter<"doadores"> | string | null
    id_doadores?: IntWithAggregatesFilter<"doadores"> | number
  }

  export type feedbackWhereInput = {
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    id_feedback?: IntFilter<"feedback"> | number
    critica?: Enumfeedback_criticaNullableFilter<"feedback"> | $Enums.feedback_critica | null
    feedback_descricao?: StringNullableFilter<"feedback"> | string | null
    id_organizacao?: IntNullableFilter<"feedback"> | number | null
    id_doadores?: IntNullableFilter<"feedback"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
  }

  export type feedbackOrderByWithRelationInput = {
    id_feedback?: SortOrder
    critica?: SortOrderInput | SortOrder
    feedback_descricao?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    organizacao?: organizacaoOrderByWithRelationInput
    doadores?: doadoresOrderByWithRelationInput
  }

  export type feedbackWhereUniqueInput = Prisma.AtLeast<{
    id_feedback?: number
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    critica?: Enumfeedback_criticaNullableFilter<"feedback"> | $Enums.feedback_critica | null
    feedback_descricao?: StringNullableFilter<"feedback"> | string | null
    id_organizacao?: IntNullableFilter<"feedback"> | number | null
    id_doadores?: IntNullableFilter<"feedback"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
  }, "id_feedback">

  export type feedbackOrderByWithAggregationInput = {
    id_feedback?: SortOrder
    critica?: SortOrderInput | SortOrder
    feedback_descricao?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    _count?: feedbackCountOrderByAggregateInput
    _avg?: feedbackAvgOrderByAggregateInput
    _max?: feedbackMaxOrderByAggregateInput
    _min?: feedbackMinOrderByAggregateInput
    _sum?: feedbackSumOrderByAggregateInput
  }

  export type feedbackScalarWhereWithAggregatesInput = {
    AND?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    OR?: feedbackScalarWhereWithAggregatesInput[]
    NOT?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    id_feedback?: IntWithAggregatesFilter<"feedback"> | number
    critica?: Enumfeedback_criticaNullableWithAggregatesFilter<"feedback"> | $Enums.feedback_critica | null
    feedback_descricao?: StringNullableWithAggregatesFilter<"feedback"> | string | null
    id_organizacao?: IntNullableWithAggregatesFilter<"feedback"> | number | null
    id_doadores?: IntNullableWithAggregatesFilter<"feedback"> | number | null
  }

  export type impacto_socialWhereInput = {
    AND?: impacto_socialWhereInput | impacto_socialWhereInput[]
    OR?: impacto_socialWhereInput[]
    NOT?: impacto_socialWhereInput | impacto_socialWhereInput[]
    id_impacto?: IntFilter<"impacto_social"> | number
    id_organizacao?: IntNullableFilter<"impacto_social"> | number | null
    id_localizacao?: IntNullableFilter<"impacto_social"> | number | null
    id_doacao?: IntNullableFilter<"impacto_social"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableScalarRelationFilter, localizacaoWhereInput> | null
    categoria_doacao?: XOR<Categoria_doacaoNullableScalarRelationFilter, categoria_doacaoWhereInput> | null
  }

  export type impacto_socialOrderByWithRelationInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    id_localizacao?: SortOrderInput | SortOrder
    id_doacao?: SortOrderInput | SortOrder
    organizacao?: organizacaoOrderByWithRelationInput
    localizacao?: localizacaoOrderByWithRelationInput
    categoria_doacao?: categoria_doacaoOrderByWithRelationInput
  }

  export type impacto_socialWhereUniqueInput = Prisma.AtLeast<{
    id_impacto?: number
    AND?: impacto_socialWhereInput | impacto_socialWhereInput[]
    OR?: impacto_socialWhereInput[]
    NOT?: impacto_socialWhereInput | impacto_socialWhereInput[]
    id_organizacao?: IntNullableFilter<"impacto_social"> | number | null
    id_localizacao?: IntNullableFilter<"impacto_social"> | number | null
    id_doacao?: IntNullableFilter<"impacto_social"> | number | null
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableScalarRelationFilter, localizacaoWhereInput> | null
    categoria_doacao?: XOR<Categoria_doacaoNullableScalarRelationFilter, categoria_doacaoWhereInput> | null
  }, "id_impacto">

  export type impacto_socialOrderByWithAggregationInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    id_localizacao?: SortOrderInput | SortOrder
    id_doacao?: SortOrderInput | SortOrder
    _count?: impacto_socialCountOrderByAggregateInput
    _avg?: impacto_socialAvgOrderByAggregateInput
    _max?: impacto_socialMaxOrderByAggregateInput
    _min?: impacto_socialMinOrderByAggregateInput
    _sum?: impacto_socialSumOrderByAggregateInput
  }

  export type impacto_socialScalarWhereWithAggregatesInput = {
    AND?: impacto_socialScalarWhereWithAggregatesInput | impacto_socialScalarWhereWithAggregatesInput[]
    OR?: impacto_socialScalarWhereWithAggregatesInput[]
    NOT?: impacto_socialScalarWhereWithAggregatesInput | impacto_socialScalarWhereWithAggregatesInput[]
    id_impacto?: IntWithAggregatesFilter<"impacto_social"> | number
    id_organizacao?: IntNullableWithAggregatesFilter<"impacto_social"> | number | null
    id_localizacao?: IntNullableWithAggregatesFilter<"impacto_social"> | number | null
    id_doacao?: IntNullableWithAggregatesFilter<"impacto_social"> | number | null
  }

  export type localizacaoWhereInput = {
    AND?: localizacaoWhereInput | localizacaoWhereInput[]
    OR?: localizacaoWhereInput[]
    NOT?: localizacaoWhereInput | localizacaoWhereInput[]
    id_localizacao?: IntFilter<"localizacao"> | number
    nome?: StringNullableFilter<"localizacao"> | string | null
    latitude?: DecimalNullableFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: IntNullableFilter<"localizacao"> | number | null
    impacto_social?: Impacto_socialListRelationFilter
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
  }

  export type localizacaoOrderByWithRelationInput = {
    id_localizacao?: SortOrder
    nome?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    impacto_social?: impacto_socialOrderByRelationAggregateInput
    organizacao?: organizacaoOrderByWithRelationInput
  }

  export type localizacaoWhereUniqueInput = Prisma.AtLeast<{
    id_localizacao?: number
    AND?: localizacaoWhereInput | localizacaoWhereInput[]
    OR?: localizacaoWhereInput[]
    NOT?: localizacaoWhereInput | localizacaoWhereInput[]
    nome?: StringNullableFilter<"localizacao"> | string | null
    latitude?: DecimalNullableFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: IntNullableFilter<"localizacao"> | number | null
    impacto_social?: Impacto_socialListRelationFilter
    organizacao?: XOR<OrganizacaoNullableScalarRelationFilter, organizacaoWhereInput> | null
  }, "id_localizacao">

  export type localizacaoOrderByWithAggregationInput = {
    id_localizacao?: SortOrder
    nome?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    id_organizacao?: SortOrderInput | SortOrder
    _count?: localizacaoCountOrderByAggregateInput
    _avg?: localizacaoAvgOrderByAggregateInput
    _max?: localizacaoMaxOrderByAggregateInput
    _min?: localizacaoMinOrderByAggregateInput
    _sum?: localizacaoSumOrderByAggregateInput
  }

  export type localizacaoScalarWhereWithAggregatesInput = {
    AND?: localizacaoScalarWhereWithAggregatesInput | localizacaoScalarWhereWithAggregatesInput[]
    OR?: localizacaoScalarWhereWithAggregatesInput[]
    NOT?: localizacaoScalarWhereWithAggregatesInput | localizacaoScalarWhereWithAggregatesInput[]
    id_localizacao?: IntWithAggregatesFilter<"localizacao"> | number
    nome?: StringNullableWithAggregatesFilter<"localizacao"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: IntNullableWithAggregatesFilter<"localizacao"> | number | null
  }

  export type organizacaoWhereInput = {
    AND?: organizacaoWhereInput | organizacaoWhereInput[]
    OR?: organizacaoWhereInput[]
    NOT?: organizacaoWhereInput | organizacaoWhereInput[]
    id_organizacao?: IntFilter<"organizacao"> | number
    nome?: StringNullableFilter<"organizacao"> | string | null
    cnpj?: StringFilter<"organizacao"> | string
    endereco?: StringNullableFilter<"organizacao"> | string | null
    telefone?: StringNullableFilter<"organizacao"> | string | null
    email?: StringNullableFilter<"organizacao"> | string | null
    id_voluntarios?: IntNullableFilter<"organizacao"> | number | null
    id_doadores?: IntNullableFilter<"organizacao"> | number | null
    alerta?: AlertaListRelationFilter
    categoria_doacao?: Categoria_doacaoListRelationFilter
    feedback?: FeedbackListRelationFilter
    impacto_social?: Impacto_socialListRelationFilter
    localizacao?: LocalizacaoListRelationFilter
    voluntarios?: XOR<VoluntariosNullableScalarRelationFilter, voluntariosWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
  }

  export type organizacaoOrderByWithRelationInput = {
    id_organizacao?: SortOrder
    nome?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    id_voluntarios?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    alerta?: alertaOrderByRelationAggregateInput
    categoria_doacao?: categoria_doacaoOrderByRelationAggregateInput
    feedback?: feedbackOrderByRelationAggregateInput
    impacto_social?: impacto_socialOrderByRelationAggregateInput
    localizacao?: localizacaoOrderByRelationAggregateInput
    voluntarios?: voluntariosOrderByWithRelationInput
    doadores?: doadoresOrderByWithRelationInput
  }

  export type organizacaoWhereUniqueInput = Prisma.AtLeast<{
    id_organizacao?: number
    cnpj?: string
    AND?: organizacaoWhereInput | organizacaoWhereInput[]
    OR?: organizacaoWhereInput[]
    NOT?: organizacaoWhereInput | organizacaoWhereInput[]
    nome?: StringNullableFilter<"organizacao"> | string | null
    endereco?: StringNullableFilter<"organizacao"> | string | null
    telefone?: StringNullableFilter<"organizacao"> | string | null
    email?: StringNullableFilter<"organizacao"> | string | null
    id_voluntarios?: IntNullableFilter<"organizacao"> | number | null
    id_doadores?: IntNullableFilter<"organizacao"> | number | null
    alerta?: AlertaListRelationFilter
    categoria_doacao?: Categoria_doacaoListRelationFilter
    feedback?: FeedbackListRelationFilter
    impacto_social?: Impacto_socialListRelationFilter
    localizacao?: LocalizacaoListRelationFilter
    voluntarios?: XOR<VoluntariosNullableScalarRelationFilter, voluntariosWhereInput> | null
    doadores?: XOR<DoadoresNullableScalarRelationFilter, doadoresWhereInput> | null
  }, "id_organizacao" | "cnpj">

  export type organizacaoOrderByWithAggregationInput = {
    id_organizacao?: SortOrder
    nome?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    id_voluntarios?: SortOrderInput | SortOrder
    id_doadores?: SortOrderInput | SortOrder
    _count?: organizacaoCountOrderByAggregateInput
    _avg?: organizacaoAvgOrderByAggregateInput
    _max?: organizacaoMaxOrderByAggregateInput
    _min?: organizacaoMinOrderByAggregateInput
    _sum?: organizacaoSumOrderByAggregateInput
  }

  export type organizacaoScalarWhereWithAggregatesInput = {
    AND?: organizacaoScalarWhereWithAggregatesInput | organizacaoScalarWhereWithAggregatesInput[]
    OR?: organizacaoScalarWhereWithAggregatesInput[]
    NOT?: organizacaoScalarWhereWithAggregatesInput | organizacaoScalarWhereWithAggregatesInput[]
    id_organizacao?: IntWithAggregatesFilter<"organizacao"> | number
    nome?: StringNullableWithAggregatesFilter<"organizacao"> | string | null
    cnpj?: StringWithAggregatesFilter<"organizacao"> | string
    endereco?: StringNullableWithAggregatesFilter<"organizacao"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"organizacao"> | string | null
    email?: StringNullableWithAggregatesFilter<"organizacao"> | string | null
    id_voluntarios?: IntNullableWithAggregatesFilter<"organizacao"> | number | null
    id_doadores?: IntNullableWithAggregatesFilter<"organizacao"> | number | null
  }

  export type voluntariosWhereInput = {
    AND?: voluntariosWhereInput | voluntariosWhereInput[]
    OR?: voluntariosWhereInput[]
    NOT?: voluntariosWhereInput | voluntariosWhereInput[]
    id_voluntarios?: IntFilter<"voluntarios"> | number
    nome?: StringNullableFilter<"voluntarios"> | string | null
    idade?: IntNullableFilter<"voluntarios"> | number | null
    email?: StringNullableFilter<"voluntarios"> | string | null
    organizacao?: OrganizacaoListRelationFilter
  }

  export type voluntariosOrderByWithRelationInput = {
    id_voluntarios?: SortOrder
    nome?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    organizacao?: organizacaoOrderByRelationAggregateInput
  }

  export type voluntariosWhereUniqueInput = Prisma.AtLeast<{
    id_voluntarios?: number
    AND?: voluntariosWhereInput | voluntariosWhereInput[]
    OR?: voluntariosWhereInput[]
    NOT?: voluntariosWhereInput | voluntariosWhereInput[]
    nome?: StringNullableFilter<"voluntarios"> | string | null
    idade?: IntNullableFilter<"voluntarios"> | number | null
    email?: StringNullableFilter<"voluntarios"> | string | null
    organizacao?: OrganizacaoListRelationFilter
  }, "id_voluntarios">

  export type voluntariosOrderByWithAggregationInput = {
    id_voluntarios?: SortOrder
    nome?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: voluntariosCountOrderByAggregateInput
    _avg?: voluntariosAvgOrderByAggregateInput
    _max?: voluntariosMaxOrderByAggregateInput
    _min?: voluntariosMinOrderByAggregateInput
    _sum?: voluntariosSumOrderByAggregateInput
  }

  export type voluntariosScalarWhereWithAggregatesInput = {
    AND?: voluntariosScalarWhereWithAggregatesInput | voluntariosScalarWhereWithAggregatesInput[]
    OR?: voluntariosScalarWhereWithAggregatesInput[]
    NOT?: voluntariosScalarWhereWithAggregatesInput | voluntariosScalarWhereWithAggregatesInput[]
    id_voluntarios?: IntWithAggregatesFilter<"voluntarios"> | number
    nome?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
    idade?: IntNullableWithAggregatesFilter<"voluntarios"> | number | null
    email?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
  }

  export type alertaCreateInput = {
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    organizacao?: organizacaoCreateNestedOneWithoutAlertaInput
    doadores?: doadoresCreateNestedOneWithoutAlertaInput
  }

  export type alertaUncheckedCreateInput = {
    id_alerta?: number
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    id_organizacao?: number | null
    id_doadores?: number | null
  }

  export type alertaUpdateInput = {
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    organizacao?: organizacaoUpdateOneWithoutAlertaNestedInput
    doadores?: doadoresUpdateOneWithoutAlertaNestedInput
  }

  export type alertaUncheckedUpdateInput = {
    id_alerta?: IntFieldUpdateOperationsInput | number
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type alertaCreateManyInput = {
    id_alerta?: number
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    id_organizacao?: number | null
    id_doadores?: number | null
  }

  export type alertaUpdateManyMutationInput = {
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alertaUncheckedUpdateManyInput = {
    id_alerta?: IntFieldUpdateOperationsInput | number
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoria_doacaoCreateInput = {
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    organizacao?: organizacaoCreateNestedOneWithoutCategoria_doacaoInput
    doadores?: doadoresCreateNestedOneWithoutCategoria_doacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoUncheckedCreateInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_doadores?: number | null
    id_organizacao?: number | null
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoUpdateInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizacao?: organizacaoUpdateOneWithoutCategoria_doacaoNestedInput
    doadores?: doadoresUpdateOneWithoutCategoria_doacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoUncheckedUpdateInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoCreateManyInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_doadores?: number | null
    id_organizacao?: number | null
  }

  export type categoria_doacaoUpdateManyMutationInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoria_doacaoUncheckedUpdateManyInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type doadoresCreateInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutDoadoresInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresUncheckedCreateInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    id_doadores?: number
    alerta?: alertaUncheckedCreateNestedManyWithoutDoadoresInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoUncheckedCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutDoadoresNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUpdateManyWithoutDoadoresNestedInput
  }

  export type doadoresUncheckedUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: IntFieldUpdateOperationsInput | number
    alerta?: alertaUncheckedUpdateManyWithoutDoadoresNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUncheckedUpdateManyWithoutDoadoresNestedInput
  }

  export type doadoresCreateManyInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    id_doadores?: number
  }

  export type doadoresUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doadoresUncheckedUpdateManyInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: IntFieldUpdateOperationsInput | number
  }

  export type feedbackCreateInput = {
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    organizacao?: organizacaoCreateNestedOneWithoutFeedbackInput
    doadores?: doadoresCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateInput = {
    id_feedback?: number
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    id_organizacao?: number | null
    id_doadores?: number | null
  }

  export type feedbackUpdateInput = {
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    organizacao?: organizacaoUpdateOneWithoutFeedbackNestedInput
    doadores?: doadoresUpdateOneWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type feedbackCreateManyInput = {
    id_feedback?: number
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    id_organizacao?: number | null
    id_doadores?: number | null
  }

  export type feedbackUpdateManyMutationInput = {
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type feedbackUncheckedUpdateManyInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialCreateInput = {
    organizacao?: organizacaoCreateNestedOneWithoutImpacto_socialInput
    localizacao?: localizacaoCreateNestedOneWithoutImpacto_socialInput
    categoria_doacao?: categoria_doacaoCreateNestedOneWithoutImpacto_socialInput
  }

  export type impacto_socialUncheckedCreateInput = {
    id_impacto?: number
    id_organizacao?: number | null
    id_localizacao?: number | null
    id_doacao?: number | null
  }

  export type impacto_socialUpdateInput = {
    organizacao?: organizacaoUpdateOneWithoutImpacto_socialNestedInput
    localizacao?: localizacaoUpdateOneWithoutImpacto_socialNestedInput
    categoria_doacao?: categoria_doacaoUpdateOneWithoutImpacto_socialNestedInput
  }

  export type impacto_socialUncheckedUpdateInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_localizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialCreateManyInput = {
    id_impacto?: number
    id_organizacao?: number | null
    id_localizacao?: number | null
    id_doacao?: number | null
  }

  export type impacto_socialUpdateManyMutationInput = {

  }

  export type impacto_socialUncheckedUpdateManyInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_localizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type localizacaoCreateInput = {
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    impacto_social?: impacto_socialCreateNestedManyWithoutLocalizacaoInput
    organizacao?: organizacaoCreateNestedOneWithoutLocalizacaoInput
  }

  export type localizacaoUncheckedCreateInput = {
    id_localizacao?: number
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    id_organizacao?: number | null
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type localizacaoUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impacto_social?: impacto_socialUpdateManyWithoutLocalizacaoNestedInput
    organizacao?: organizacaoUpdateOneWithoutLocalizacaoNestedInput
  }

  export type localizacaoUncheckedUpdateInput = {
    id_localizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type localizacaoCreateManyInput = {
    id_localizacao?: number
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    id_organizacao?: number | null
  }

  export type localizacaoUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type localizacaoUncheckedUpdateManyInput = {
    id_localizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organizacaoCreateInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type organizacaoCreateManyInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
  }

  export type organizacaoUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizacaoUncheckedUpdateManyInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type voluntariosCreateInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    organizacao?: organizacaoCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosUncheckedCreateInput = {
    id_voluntarios?: number
    nome?: string | null
    idade?: number | null
    email?: string | null
    organizacao?: organizacaoUncheckedCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organizacao?: organizacaoUpdateManyWithoutVoluntariosNestedInput
  }

  export type voluntariosUncheckedUpdateInput = {
    id_voluntarios?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    organizacao?: organizacaoUncheckedUpdateManyWithoutVoluntariosNestedInput
  }

  export type voluntariosCreateManyInput = {
    id_voluntarios?: number
    nome?: string | null
    idade?: number | null
    email?: string | null
  }

  export type voluntariosUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type voluntariosUncheckedUpdateManyInput = {
    id_voluntarios?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type Enumalerta_tipo_alertaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.alerta_tipo_alerta | Enumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel> | $Enums.alerta_tipo_alerta | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizacaoNullableScalarRelationFilter = {
    is?: organizacaoWhereInput | null
    isNot?: organizacaoWhereInput | null
  }

  export type DoadoresNullableScalarRelationFilter = {
    is?: doadoresWhereInput | null
    isNot?: doadoresWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type alertaCountOrderByAggregateInput = {
    id_alerta?: SortOrder
    tipo_alerta?: SortOrder
    descricao?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type alertaAvgOrderByAggregateInput = {
    id_alerta?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type alertaMaxOrderByAggregateInput = {
    id_alerta?: SortOrder
    tipo_alerta?: SortOrder
    descricao?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type alertaMinOrderByAggregateInput = {
    id_alerta?: SortOrder
    tipo_alerta?: SortOrder
    descricao?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type alertaSumOrderByAggregateInput = {
    id_alerta?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
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

  export type Enumalerta_tipo_alertaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alerta_tipo_alerta | Enumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumalerta_tipo_alertaNullableWithAggregatesFilter<$PrismaModel> | $Enums.alerta_tipo_alerta | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel>
    _max?: NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type Enumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.categoria_doacao_tipo_doacao | Enumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    in?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel> | $Enums.categoria_doacao_tipo_doacao | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Impacto_socialListRelationFilter = {
    every?: impacto_socialWhereInput
    some?: impacto_socialWhereInput
    none?: impacto_socialWhereInput
  }

  export type impacto_socialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoria_doacaoCountOrderByAggregateInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrder
    tipo_doacao?: SortOrder
    validade?: SortOrder
    id_doadores?: SortOrder
    id_organizacao?: SortOrder
  }

  export type categoria_doacaoAvgOrderByAggregateInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrder
    id_doadores?: SortOrder
    id_organizacao?: SortOrder
  }

  export type categoria_doacaoMaxOrderByAggregateInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrder
    tipo_doacao?: SortOrder
    validade?: SortOrder
    id_doadores?: SortOrder
    id_organizacao?: SortOrder
  }

  export type categoria_doacaoMinOrderByAggregateInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrder
    tipo_doacao?: SortOrder
    validade?: SortOrder
    id_doadores?: SortOrder
    id_organizacao?: SortOrder
  }

  export type categoria_doacaoSumOrderByAggregateInput = {
    id_doacao?: SortOrder
    quantidade?: SortOrder
    id_doadores?: SortOrder
    id_organizacao?: SortOrder
  }

  export type Enumcategoria_doacao_tipo_doacaoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.categoria_doacao_tipo_doacao | Enumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    in?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcategoria_doacao_tipo_doacaoNullableWithAggregatesFilter<$PrismaModel> | $Enums.categoria_doacao_tipo_doacao | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel>
    _max?: NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AlertaListRelationFilter = {
    every?: alertaWhereInput
    some?: alertaWhereInput
    none?: alertaWhereInput
  }

  export type Categoria_doacaoListRelationFilter = {
    every?: categoria_doacaoWhereInput
    some?: categoria_doacaoWhereInput
    none?: categoria_doacaoWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: feedbackWhereInput
    some?: feedbackWhereInput
    none?: feedbackWhereInput
  }

  export type OrganizacaoListRelationFilter = {
    every?: organizacaoWhereInput
    some?: organizacaoWhereInput
    none?: organizacaoWhereInput
  }

  export type alertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoria_doacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type feedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doadoresCountOrderByAggregateInput = {
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    id_doadores?: SortOrder
  }

  export type doadoresAvgOrderByAggregateInput = {
    idade?: SortOrder
    id_doadores?: SortOrder
  }

  export type doadoresMaxOrderByAggregateInput = {
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    id_doadores?: SortOrder
  }

  export type doadoresMinOrderByAggregateInput = {
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    id_doadores?: SortOrder
  }

  export type doadoresSumOrderByAggregateInput = {
    idade?: SortOrder
    id_doadores?: SortOrder
  }

  export type Enumfeedback_criticaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.feedback_critica | Enumfeedback_criticaFieldRefInput<$PrismaModel> | null
    in?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeedback_criticaNullableFilter<$PrismaModel> | $Enums.feedback_critica | null
  }

  export type feedbackCountOrderByAggregateInput = {
    id_feedback?: SortOrder
    critica?: SortOrder
    feedback_descricao?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type feedbackAvgOrderByAggregateInput = {
    id_feedback?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type feedbackMaxOrderByAggregateInput = {
    id_feedback?: SortOrder
    critica?: SortOrder
    feedback_descricao?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type feedbackMinOrderByAggregateInput = {
    id_feedback?: SortOrder
    critica?: SortOrder
    feedback_descricao?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type feedbackSumOrderByAggregateInput = {
    id_feedback?: SortOrder
    id_organizacao?: SortOrder
    id_doadores?: SortOrder
  }

  export type Enumfeedback_criticaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.feedback_critica | Enumfeedback_criticaFieldRefInput<$PrismaModel> | null
    in?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeedback_criticaNullableWithAggregatesFilter<$PrismaModel> | $Enums.feedback_critica | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfeedback_criticaNullableFilter<$PrismaModel>
    _max?: NestedEnumfeedback_criticaNullableFilter<$PrismaModel>
  }

  export type LocalizacaoNullableScalarRelationFilter = {
    is?: localizacaoWhereInput | null
    isNot?: localizacaoWhereInput | null
  }

  export type Categoria_doacaoNullableScalarRelationFilter = {
    is?: categoria_doacaoWhereInput | null
    isNot?: categoria_doacaoWhereInput | null
  }

  export type impacto_socialCountOrderByAggregateInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrder
    id_localizacao?: SortOrder
    id_doacao?: SortOrder
  }

  export type impacto_socialAvgOrderByAggregateInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrder
    id_localizacao?: SortOrder
    id_doacao?: SortOrder
  }

  export type impacto_socialMaxOrderByAggregateInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrder
    id_localizacao?: SortOrder
    id_doacao?: SortOrder
  }

  export type impacto_socialMinOrderByAggregateInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrder
    id_localizacao?: SortOrder
    id_doacao?: SortOrder
  }

  export type impacto_socialSumOrderByAggregateInput = {
    id_impacto?: SortOrder
    id_organizacao?: SortOrder
    id_localizacao?: SortOrder
    id_doacao?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type localizacaoCountOrderByAggregateInput = {
    id_localizacao?: SortOrder
    nome?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_organizacao?: SortOrder
  }

  export type localizacaoAvgOrderByAggregateInput = {
    id_localizacao?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_organizacao?: SortOrder
  }

  export type localizacaoMaxOrderByAggregateInput = {
    id_localizacao?: SortOrder
    nome?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_organizacao?: SortOrder
  }

  export type localizacaoMinOrderByAggregateInput = {
    id_localizacao?: SortOrder
    nome?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_organizacao?: SortOrder
  }

  export type localizacaoSumOrderByAggregateInput = {
    id_localizacao?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_organizacao?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type LocalizacaoListRelationFilter = {
    every?: localizacaoWhereInput
    some?: localizacaoWhereInput
    none?: localizacaoWhereInput
  }

  export type VoluntariosNullableScalarRelationFilter = {
    is?: voluntariosWhereInput | null
    isNot?: voluntariosWhereInput | null
  }

  export type localizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizacaoCountOrderByAggregateInput = {
    id_organizacao?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    id_voluntarios?: SortOrder
    id_doadores?: SortOrder
  }

  export type organizacaoAvgOrderByAggregateInput = {
    id_organizacao?: SortOrder
    id_voluntarios?: SortOrder
    id_doadores?: SortOrder
  }

  export type organizacaoMaxOrderByAggregateInput = {
    id_organizacao?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    id_voluntarios?: SortOrder
    id_doadores?: SortOrder
  }

  export type organizacaoMinOrderByAggregateInput = {
    id_organizacao?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    id_voluntarios?: SortOrder
    id_doadores?: SortOrder
  }

  export type organizacaoSumOrderByAggregateInput = {
    id_organizacao?: SortOrder
    id_voluntarios?: SortOrder
    id_doadores?: SortOrder
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

  export type voluntariosCountOrderByAggregateInput = {
    id_voluntarios?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
  }

  export type voluntariosAvgOrderByAggregateInput = {
    id_voluntarios?: SortOrder
    idade?: SortOrder
  }

  export type voluntariosMaxOrderByAggregateInput = {
    id_voluntarios?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
  }

  export type voluntariosMinOrderByAggregateInput = {
    id_voluntarios?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
  }

  export type voluntariosSumOrderByAggregateInput = {
    id_voluntarios?: SortOrder
    idade?: SortOrder
  }

  export type organizacaoCreateNestedOneWithoutAlertaInput = {
    create?: XOR<organizacaoCreateWithoutAlertaInput, organizacaoUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutAlertaInput
    connect?: organizacaoWhereUniqueInput
  }

  export type doadoresCreateNestedOneWithoutAlertaInput = {
    create?: XOR<doadoresCreateWithoutAlertaInput, doadoresUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutAlertaInput
    connect?: doadoresWhereUniqueInput
  }

  export type NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput = {
    set?: $Enums.alerta_tipo_alerta | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type organizacaoUpdateOneWithoutAlertaNestedInput = {
    create?: XOR<organizacaoCreateWithoutAlertaInput, organizacaoUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutAlertaInput
    upsert?: organizacaoUpsertWithoutAlertaInput
    disconnect?: organizacaoWhereInput | boolean
    delete?: organizacaoWhereInput | boolean
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutAlertaInput, organizacaoUpdateWithoutAlertaInput>, organizacaoUncheckedUpdateWithoutAlertaInput>
  }

  export type doadoresUpdateOneWithoutAlertaNestedInput = {
    create?: XOR<doadoresCreateWithoutAlertaInput, doadoresUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutAlertaInput
    upsert?: doadoresUpsertWithoutAlertaInput
    disconnect?: doadoresWhereInput | boolean
    delete?: doadoresWhereInput | boolean
    connect?: doadoresWhereUniqueInput
    update?: XOR<XOR<doadoresUpdateToOneWithWhereWithoutAlertaInput, doadoresUpdateWithoutAlertaInput>, doadoresUncheckedUpdateWithoutAlertaInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type organizacaoCreateNestedOneWithoutCategoria_doacaoInput = {
    create?: XOR<organizacaoCreateWithoutCategoria_doacaoInput, organizacaoUncheckedCreateWithoutCategoria_doacaoInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutCategoria_doacaoInput
    connect?: organizacaoWhereUniqueInput
  }

  export type doadoresCreateNestedOneWithoutCategoria_doacaoInput = {
    create?: XOR<doadoresCreateWithoutCategoria_doacaoInput, doadoresUncheckedCreateWithoutCategoria_doacaoInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutCategoria_doacaoInput
    connect?: doadoresWhereUniqueInput
  }

  export type impacto_socialCreateNestedManyWithoutCategoria_doacaoInput = {
    create?: XOR<impacto_socialCreateWithoutCategoria_doacaoInput, impacto_socialUncheckedCreateWithoutCategoria_doacaoInput> | impacto_socialCreateWithoutCategoria_doacaoInput[] | impacto_socialUncheckedCreateWithoutCategoria_doacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutCategoria_doacaoInput | impacto_socialCreateOrConnectWithoutCategoria_doacaoInput[]
    createMany?: impacto_socialCreateManyCategoria_doacaoInputEnvelope
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
  }

  export type impacto_socialUncheckedCreateNestedManyWithoutCategoria_doacaoInput = {
    create?: XOR<impacto_socialCreateWithoutCategoria_doacaoInput, impacto_socialUncheckedCreateWithoutCategoria_doacaoInput> | impacto_socialCreateWithoutCategoria_doacaoInput[] | impacto_socialUncheckedCreateWithoutCategoria_doacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutCategoria_doacaoInput | impacto_socialCreateOrConnectWithoutCategoria_doacaoInput[]
    createMany?: impacto_socialCreateManyCategoria_doacaoInputEnvelope
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
  }

  export type NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput = {
    set?: $Enums.categoria_doacao_tipo_doacao | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type organizacaoUpdateOneWithoutCategoria_doacaoNestedInput = {
    create?: XOR<organizacaoCreateWithoutCategoria_doacaoInput, organizacaoUncheckedCreateWithoutCategoria_doacaoInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutCategoria_doacaoInput
    upsert?: organizacaoUpsertWithoutCategoria_doacaoInput
    disconnect?: organizacaoWhereInput | boolean
    delete?: organizacaoWhereInput | boolean
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutCategoria_doacaoInput, organizacaoUpdateWithoutCategoria_doacaoInput>, organizacaoUncheckedUpdateWithoutCategoria_doacaoInput>
  }

  export type doadoresUpdateOneWithoutCategoria_doacaoNestedInput = {
    create?: XOR<doadoresCreateWithoutCategoria_doacaoInput, doadoresUncheckedCreateWithoutCategoria_doacaoInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutCategoria_doacaoInput
    upsert?: doadoresUpsertWithoutCategoria_doacaoInput
    disconnect?: doadoresWhereInput | boolean
    delete?: doadoresWhereInput | boolean
    connect?: doadoresWhereUniqueInput
    update?: XOR<XOR<doadoresUpdateToOneWithWhereWithoutCategoria_doacaoInput, doadoresUpdateWithoutCategoria_doacaoInput>, doadoresUncheckedUpdateWithoutCategoria_doacaoInput>
  }

  export type impacto_socialUpdateManyWithoutCategoria_doacaoNestedInput = {
    create?: XOR<impacto_socialCreateWithoutCategoria_doacaoInput, impacto_socialUncheckedCreateWithoutCategoria_doacaoInput> | impacto_socialCreateWithoutCategoria_doacaoInput[] | impacto_socialUncheckedCreateWithoutCategoria_doacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutCategoria_doacaoInput | impacto_socialCreateOrConnectWithoutCategoria_doacaoInput[]
    upsert?: impacto_socialUpsertWithWhereUniqueWithoutCategoria_doacaoInput | impacto_socialUpsertWithWhereUniqueWithoutCategoria_doacaoInput[]
    createMany?: impacto_socialCreateManyCategoria_doacaoInputEnvelope
    set?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    disconnect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    delete?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    update?: impacto_socialUpdateWithWhereUniqueWithoutCategoria_doacaoInput | impacto_socialUpdateWithWhereUniqueWithoutCategoria_doacaoInput[]
    updateMany?: impacto_socialUpdateManyWithWhereWithoutCategoria_doacaoInput | impacto_socialUpdateManyWithWhereWithoutCategoria_doacaoInput[]
    deleteMany?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
  }

  export type impacto_socialUncheckedUpdateManyWithoutCategoria_doacaoNestedInput = {
    create?: XOR<impacto_socialCreateWithoutCategoria_doacaoInput, impacto_socialUncheckedCreateWithoutCategoria_doacaoInput> | impacto_socialCreateWithoutCategoria_doacaoInput[] | impacto_socialUncheckedCreateWithoutCategoria_doacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutCategoria_doacaoInput | impacto_socialCreateOrConnectWithoutCategoria_doacaoInput[]
    upsert?: impacto_socialUpsertWithWhereUniqueWithoutCategoria_doacaoInput | impacto_socialUpsertWithWhereUniqueWithoutCategoria_doacaoInput[]
    createMany?: impacto_socialCreateManyCategoria_doacaoInputEnvelope
    set?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    disconnect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    delete?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    update?: impacto_socialUpdateWithWhereUniqueWithoutCategoria_doacaoInput | impacto_socialUpdateWithWhereUniqueWithoutCategoria_doacaoInput[]
    updateMany?: impacto_socialUpdateManyWithWhereWithoutCategoria_doacaoInput | impacto_socialUpdateManyWithWhereWithoutCategoria_doacaoInput[]
    deleteMany?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
  }

  export type alertaCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<alertaCreateWithoutDoadoresInput, alertaUncheckedCreateWithoutDoadoresInput> | alertaCreateWithoutDoadoresInput[] | alertaUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutDoadoresInput | alertaCreateOrConnectWithoutDoadoresInput[]
    createMany?: alertaCreateManyDoadoresInputEnvelope
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
  }

  export type categoria_doacaoCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<categoria_doacaoCreateWithoutDoadoresInput, categoria_doacaoUncheckedCreateWithoutDoadoresInput> | categoria_doacaoCreateWithoutDoadoresInput[] | categoria_doacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutDoadoresInput | categoria_doacaoCreateOrConnectWithoutDoadoresInput[]
    createMany?: categoria_doacaoCreateManyDoadoresInputEnvelope
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
  }

  export type feedbackCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<feedbackCreateWithoutDoadoresInput, feedbackUncheckedCreateWithoutDoadoresInput> | feedbackCreateWithoutDoadoresInput[] | feedbackUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutDoadoresInput | feedbackCreateOrConnectWithoutDoadoresInput[]
    createMany?: feedbackCreateManyDoadoresInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type organizacaoCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<organizacaoCreateWithoutDoadoresInput, organizacaoUncheckedCreateWithoutDoadoresInput> | organizacaoCreateWithoutDoadoresInput[] | organizacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutDoadoresInput | organizacaoCreateOrConnectWithoutDoadoresInput[]
    createMany?: organizacaoCreateManyDoadoresInputEnvelope
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
  }

  export type alertaUncheckedCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<alertaCreateWithoutDoadoresInput, alertaUncheckedCreateWithoutDoadoresInput> | alertaCreateWithoutDoadoresInput[] | alertaUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutDoadoresInput | alertaCreateOrConnectWithoutDoadoresInput[]
    createMany?: alertaCreateManyDoadoresInputEnvelope
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
  }

  export type categoria_doacaoUncheckedCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<categoria_doacaoCreateWithoutDoadoresInput, categoria_doacaoUncheckedCreateWithoutDoadoresInput> | categoria_doacaoCreateWithoutDoadoresInput[] | categoria_doacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutDoadoresInput | categoria_doacaoCreateOrConnectWithoutDoadoresInput[]
    createMany?: categoria_doacaoCreateManyDoadoresInputEnvelope
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
  }

  export type feedbackUncheckedCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<feedbackCreateWithoutDoadoresInput, feedbackUncheckedCreateWithoutDoadoresInput> | feedbackCreateWithoutDoadoresInput[] | feedbackUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutDoadoresInput | feedbackCreateOrConnectWithoutDoadoresInput[]
    createMany?: feedbackCreateManyDoadoresInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type organizacaoUncheckedCreateNestedManyWithoutDoadoresInput = {
    create?: XOR<organizacaoCreateWithoutDoadoresInput, organizacaoUncheckedCreateWithoutDoadoresInput> | organizacaoCreateWithoutDoadoresInput[] | organizacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutDoadoresInput | organizacaoCreateOrConnectWithoutDoadoresInput[]
    createMany?: organizacaoCreateManyDoadoresInputEnvelope
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
  }

  export type alertaUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<alertaCreateWithoutDoadoresInput, alertaUncheckedCreateWithoutDoadoresInput> | alertaCreateWithoutDoadoresInput[] | alertaUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutDoadoresInput | alertaCreateOrConnectWithoutDoadoresInput[]
    upsert?: alertaUpsertWithWhereUniqueWithoutDoadoresInput | alertaUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: alertaCreateManyDoadoresInputEnvelope
    set?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    disconnect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    delete?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    update?: alertaUpdateWithWhereUniqueWithoutDoadoresInput | alertaUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: alertaUpdateManyWithWhereWithoutDoadoresInput | alertaUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: alertaScalarWhereInput | alertaScalarWhereInput[]
  }

  export type categoria_doacaoUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<categoria_doacaoCreateWithoutDoadoresInput, categoria_doacaoUncheckedCreateWithoutDoadoresInput> | categoria_doacaoCreateWithoutDoadoresInput[] | categoria_doacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutDoadoresInput | categoria_doacaoCreateOrConnectWithoutDoadoresInput[]
    upsert?: categoria_doacaoUpsertWithWhereUniqueWithoutDoadoresInput | categoria_doacaoUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: categoria_doacaoCreateManyDoadoresInputEnvelope
    set?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    disconnect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    delete?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    update?: categoria_doacaoUpdateWithWhereUniqueWithoutDoadoresInput | categoria_doacaoUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: categoria_doacaoUpdateManyWithWhereWithoutDoadoresInput | categoria_doacaoUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: categoria_doacaoScalarWhereInput | categoria_doacaoScalarWhereInput[]
  }

  export type feedbackUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<feedbackCreateWithoutDoadoresInput, feedbackUncheckedCreateWithoutDoadoresInput> | feedbackCreateWithoutDoadoresInput[] | feedbackUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutDoadoresInput | feedbackCreateOrConnectWithoutDoadoresInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutDoadoresInput | feedbackUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: feedbackCreateManyDoadoresInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutDoadoresInput | feedbackUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutDoadoresInput | feedbackUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type organizacaoUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<organizacaoCreateWithoutDoadoresInput, organizacaoUncheckedCreateWithoutDoadoresInput> | organizacaoCreateWithoutDoadoresInput[] | organizacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutDoadoresInput | organizacaoCreateOrConnectWithoutDoadoresInput[]
    upsert?: organizacaoUpsertWithWhereUniqueWithoutDoadoresInput | organizacaoUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: organizacaoCreateManyDoadoresInputEnvelope
    set?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    disconnect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    delete?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    update?: organizacaoUpdateWithWhereUniqueWithoutDoadoresInput | organizacaoUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: organizacaoUpdateManyWithWhereWithoutDoadoresInput | organizacaoUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: organizacaoScalarWhereInput | organizacaoScalarWhereInput[]
  }

  export type alertaUncheckedUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<alertaCreateWithoutDoadoresInput, alertaUncheckedCreateWithoutDoadoresInput> | alertaCreateWithoutDoadoresInput[] | alertaUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutDoadoresInput | alertaCreateOrConnectWithoutDoadoresInput[]
    upsert?: alertaUpsertWithWhereUniqueWithoutDoadoresInput | alertaUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: alertaCreateManyDoadoresInputEnvelope
    set?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    disconnect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    delete?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    update?: alertaUpdateWithWhereUniqueWithoutDoadoresInput | alertaUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: alertaUpdateManyWithWhereWithoutDoadoresInput | alertaUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: alertaScalarWhereInput | alertaScalarWhereInput[]
  }

  export type categoria_doacaoUncheckedUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<categoria_doacaoCreateWithoutDoadoresInput, categoria_doacaoUncheckedCreateWithoutDoadoresInput> | categoria_doacaoCreateWithoutDoadoresInput[] | categoria_doacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutDoadoresInput | categoria_doacaoCreateOrConnectWithoutDoadoresInput[]
    upsert?: categoria_doacaoUpsertWithWhereUniqueWithoutDoadoresInput | categoria_doacaoUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: categoria_doacaoCreateManyDoadoresInputEnvelope
    set?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    disconnect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    delete?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    update?: categoria_doacaoUpdateWithWhereUniqueWithoutDoadoresInput | categoria_doacaoUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: categoria_doacaoUpdateManyWithWhereWithoutDoadoresInput | categoria_doacaoUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: categoria_doacaoScalarWhereInput | categoria_doacaoScalarWhereInput[]
  }

  export type feedbackUncheckedUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<feedbackCreateWithoutDoadoresInput, feedbackUncheckedCreateWithoutDoadoresInput> | feedbackCreateWithoutDoadoresInput[] | feedbackUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutDoadoresInput | feedbackCreateOrConnectWithoutDoadoresInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutDoadoresInput | feedbackUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: feedbackCreateManyDoadoresInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutDoadoresInput | feedbackUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutDoadoresInput | feedbackUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type organizacaoUncheckedUpdateManyWithoutDoadoresNestedInput = {
    create?: XOR<organizacaoCreateWithoutDoadoresInput, organizacaoUncheckedCreateWithoutDoadoresInput> | organizacaoCreateWithoutDoadoresInput[] | organizacaoUncheckedCreateWithoutDoadoresInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutDoadoresInput | organizacaoCreateOrConnectWithoutDoadoresInput[]
    upsert?: organizacaoUpsertWithWhereUniqueWithoutDoadoresInput | organizacaoUpsertWithWhereUniqueWithoutDoadoresInput[]
    createMany?: organizacaoCreateManyDoadoresInputEnvelope
    set?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    disconnect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    delete?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    update?: organizacaoUpdateWithWhereUniqueWithoutDoadoresInput | organizacaoUpdateWithWhereUniqueWithoutDoadoresInput[]
    updateMany?: organizacaoUpdateManyWithWhereWithoutDoadoresInput | organizacaoUpdateManyWithWhereWithoutDoadoresInput[]
    deleteMany?: organizacaoScalarWhereInput | organizacaoScalarWhereInput[]
  }

  export type organizacaoCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<organizacaoCreateWithoutFeedbackInput, organizacaoUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutFeedbackInput
    connect?: organizacaoWhereUniqueInput
  }

  export type doadoresCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<doadoresCreateWithoutFeedbackInput, doadoresUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutFeedbackInput
    connect?: doadoresWhereUniqueInput
  }

  export type NullableEnumfeedback_criticaFieldUpdateOperationsInput = {
    set?: $Enums.feedback_critica | null
  }

  export type organizacaoUpdateOneWithoutFeedbackNestedInput = {
    create?: XOR<organizacaoCreateWithoutFeedbackInput, organizacaoUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutFeedbackInput
    upsert?: organizacaoUpsertWithoutFeedbackInput
    disconnect?: organizacaoWhereInput | boolean
    delete?: organizacaoWhereInput | boolean
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutFeedbackInput, organizacaoUpdateWithoutFeedbackInput>, organizacaoUncheckedUpdateWithoutFeedbackInput>
  }

  export type doadoresUpdateOneWithoutFeedbackNestedInput = {
    create?: XOR<doadoresCreateWithoutFeedbackInput, doadoresUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutFeedbackInput
    upsert?: doadoresUpsertWithoutFeedbackInput
    disconnect?: doadoresWhereInput | boolean
    delete?: doadoresWhereInput | boolean
    connect?: doadoresWhereUniqueInput
    update?: XOR<XOR<doadoresUpdateToOneWithWhereWithoutFeedbackInput, doadoresUpdateWithoutFeedbackInput>, doadoresUncheckedUpdateWithoutFeedbackInput>
  }

  export type organizacaoCreateNestedOneWithoutImpacto_socialInput = {
    create?: XOR<organizacaoCreateWithoutImpacto_socialInput, organizacaoUncheckedCreateWithoutImpacto_socialInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutImpacto_socialInput
    connect?: organizacaoWhereUniqueInput
  }

  export type localizacaoCreateNestedOneWithoutImpacto_socialInput = {
    create?: XOR<localizacaoCreateWithoutImpacto_socialInput, localizacaoUncheckedCreateWithoutImpacto_socialInput>
    connectOrCreate?: localizacaoCreateOrConnectWithoutImpacto_socialInput
    connect?: localizacaoWhereUniqueInput
  }

  export type categoria_doacaoCreateNestedOneWithoutImpacto_socialInput = {
    create?: XOR<categoria_doacaoCreateWithoutImpacto_socialInput, categoria_doacaoUncheckedCreateWithoutImpacto_socialInput>
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutImpacto_socialInput
    connect?: categoria_doacaoWhereUniqueInput
  }

  export type organizacaoUpdateOneWithoutImpacto_socialNestedInput = {
    create?: XOR<organizacaoCreateWithoutImpacto_socialInput, organizacaoUncheckedCreateWithoutImpacto_socialInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutImpacto_socialInput
    upsert?: organizacaoUpsertWithoutImpacto_socialInput
    disconnect?: organizacaoWhereInput | boolean
    delete?: organizacaoWhereInput | boolean
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutImpacto_socialInput, organizacaoUpdateWithoutImpacto_socialInput>, organizacaoUncheckedUpdateWithoutImpacto_socialInput>
  }

  export type localizacaoUpdateOneWithoutImpacto_socialNestedInput = {
    create?: XOR<localizacaoCreateWithoutImpacto_socialInput, localizacaoUncheckedCreateWithoutImpacto_socialInput>
    connectOrCreate?: localizacaoCreateOrConnectWithoutImpacto_socialInput
    upsert?: localizacaoUpsertWithoutImpacto_socialInput
    disconnect?: localizacaoWhereInput | boolean
    delete?: localizacaoWhereInput | boolean
    connect?: localizacaoWhereUniqueInput
    update?: XOR<XOR<localizacaoUpdateToOneWithWhereWithoutImpacto_socialInput, localizacaoUpdateWithoutImpacto_socialInput>, localizacaoUncheckedUpdateWithoutImpacto_socialInput>
  }

  export type categoria_doacaoUpdateOneWithoutImpacto_socialNestedInput = {
    create?: XOR<categoria_doacaoCreateWithoutImpacto_socialInput, categoria_doacaoUncheckedCreateWithoutImpacto_socialInput>
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutImpacto_socialInput
    upsert?: categoria_doacaoUpsertWithoutImpacto_socialInput
    disconnect?: categoria_doacaoWhereInput | boolean
    delete?: categoria_doacaoWhereInput | boolean
    connect?: categoria_doacaoWhereUniqueInput
    update?: XOR<XOR<categoria_doacaoUpdateToOneWithWhereWithoutImpacto_socialInput, categoria_doacaoUpdateWithoutImpacto_socialInput>, categoria_doacaoUncheckedUpdateWithoutImpacto_socialInput>
  }

  export type impacto_socialCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<impacto_socialCreateWithoutLocalizacaoInput, impacto_socialUncheckedCreateWithoutLocalizacaoInput> | impacto_socialCreateWithoutLocalizacaoInput[] | impacto_socialUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutLocalizacaoInput | impacto_socialCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: impacto_socialCreateManyLocalizacaoInputEnvelope
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
  }

  export type organizacaoCreateNestedOneWithoutLocalizacaoInput = {
    create?: XOR<organizacaoCreateWithoutLocalizacaoInput, organizacaoUncheckedCreateWithoutLocalizacaoInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutLocalizacaoInput
    connect?: organizacaoWhereUniqueInput
  }

  export type impacto_socialUncheckedCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<impacto_socialCreateWithoutLocalizacaoInput, impacto_socialUncheckedCreateWithoutLocalizacaoInput> | impacto_socialCreateWithoutLocalizacaoInput[] | impacto_socialUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutLocalizacaoInput | impacto_socialCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: impacto_socialCreateManyLocalizacaoInputEnvelope
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type impacto_socialUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<impacto_socialCreateWithoutLocalizacaoInput, impacto_socialUncheckedCreateWithoutLocalizacaoInput> | impacto_socialCreateWithoutLocalizacaoInput[] | impacto_socialUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutLocalizacaoInput | impacto_socialCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: impacto_socialUpsertWithWhereUniqueWithoutLocalizacaoInput | impacto_socialUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: impacto_socialCreateManyLocalizacaoInputEnvelope
    set?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    disconnect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    delete?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    update?: impacto_socialUpdateWithWhereUniqueWithoutLocalizacaoInput | impacto_socialUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: impacto_socialUpdateManyWithWhereWithoutLocalizacaoInput | impacto_socialUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
  }

  export type organizacaoUpdateOneWithoutLocalizacaoNestedInput = {
    create?: XOR<organizacaoCreateWithoutLocalizacaoInput, organizacaoUncheckedCreateWithoutLocalizacaoInput>
    connectOrCreate?: organizacaoCreateOrConnectWithoutLocalizacaoInput
    upsert?: organizacaoUpsertWithoutLocalizacaoInput
    disconnect?: organizacaoWhereInput | boolean
    delete?: organizacaoWhereInput | boolean
    connect?: organizacaoWhereUniqueInput
    update?: XOR<XOR<organizacaoUpdateToOneWithWhereWithoutLocalizacaoInput, organizacaoUpdateWithoutLocalizacaoInput>, organizacaoUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type impacto_socialUncheckedUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<impacto_socialCreateWithoutLocalizacaoInput, impacto_socialUncheckedCreateWithoutLocalizacaoInput> | impacto_socialCreateWithoutLocalizacaoInput[] | impacto_socialUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutLocalizacaoInput | impacto_socialCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: impacto_socialUpsertWithWhereUniqueWithoutLocalizacaoInput | impacto_socialUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: impacto_socialCreateManyLocalizacaoInputEnvelope
    set?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    disconnect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    delete?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    update?: impacto_socialUpdateWithWhereUniqueWithoutLocalizacaoInput | impacto_socialUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: impacto_socialUpdateManyWithWhereWithoutLocalizacaoInput | impacto_socialUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
  }

  export type alertaCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<alertaCreateWithoutOrganizacaoInput, alertaUncheckedCreateWithoutOrganizacaoInput> | alertaCreateWithoutOrganizacaoInput[] | alertaUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutOrganizacaoInput | alertaCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: alertaCreateManyOrganizacaoInputEnvelope
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
  }

  export type categoria_doacaoCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<categoria_doacaoCreateWithoutOrganizacaoInput, categoria_doacaoUncheckedCreateWithoutOrganizacaoInput> | categoria_doacaoCreateWithoutOrganizacaoInput[] | categoria_doacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutOrganizacaoInput | categoria_doacaoCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: categoria_doacaoCreateManyOrganizacaoInputEnvelope
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
  }

  export type feedbackCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<feedbackCreateWithoutOrganizacaoInput, feedbackUncheckedCreateWithoutOrganizacaoInput> | feedbackCreateWithoutOrganizacaoInput[] | feedbackUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrganizacaoInput | feedbackCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: feedbackCreateManyOrganizacaoInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type impacto_socialCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<impacto_socialCreateWithoutOrganizacaoInput, impacto_socialUncheckedCreateWithoutOrganizacaoInput> | impacto_socialCreateWithoutOrganizacaoInput[] | impacto_socialUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutOrganizacaoInput | impacto_socialCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: impacto_socialCreateManyOrganizacaoInputEnvelope
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
  }

  export type localizacaoCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<localizacaoCreateWithoutOrganizacaoInput, localizacaoUncheckedCreateWithoutOrganizacaoInput> | localizacaoCreateWithoutOrganizacaoInput[] | localizacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: localizacaoCreateOrConnectWithoutOrganizacaoInput | localizacaoCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: localizacaoCreateManyOrganizacaoInputEnvelope
    connect?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
  }

  export type voluntariosCreateNestedOneWithoutOrganizacaoInput = {
    create?: XOR<voluntariosCreateWithoutOrganizacaoInput, voluntariosUncheckedCreateWithoutOrganizacaoInput>
    connectOrCreate?: voluntariosCreateOrConnectWithoutOrganizacaoInput
    connect?: voluntariosWhereUniqueInput
  }

  export type doadoresCreateNestedOneWithoutOrganizacaoInput = {
    create?: XOR<doadoresCreateWithoutOrganizacaoInput, doadoresUncheckedCreateWithoutOrganizacaoInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutOrganizacaoInput
    connect?: doadoresWhereUniqueInput
  }

  export type alertaUncheckedCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<alertaCreateWithoutOrganizacaoInput, alertaUncheckedCreateWithoutOrganizacaoInput> | alertaCreateWithoutOrganizacaoInput[] | alertaUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutOrganizacaoInput | alertaCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: alertaCreateManyOrganizacaoInputEnvelope
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
  }

  export type categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<categoria_doacaoCreateWithoutOrganizacaoInput, categoria_doacaoUncheckedCreateWithoutOrganizacaoInput> | categoria_doacaoCreateWithoutOrganizacaoInput[] | categoria_doacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutOrganizacaoInput | categoria_doacaoCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: categoria_doacaoCreateManyOrganizacaoInputEnvelope
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
  }

  export type feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<feedbackCreateWithoutOrganizacaoInput, feedbackUncheckedCreateWithoutOrganizacaoInput> | feedbackCreateWithoutOrganizacaoInput[] | feedbackUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrganizacaoInput | feedbackCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: feedbackCreateManyOrganizacaoInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<impacto_socialCreateWithoutOrganizacaoInput, impacto_socialUncheckedCreateWithoutOrganizacaoInput> | impacto_socialCreateWithoutOrganizacaoInput[] | impacto_socialUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutOrganizacaoInput | impacto_socialCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: impacto_socialCreateManyOrganizacaoInputEnvelope
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
  }

  export type localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput = {
    create?: XOR<localizacaoCreateWithoutOrganizacaoInput, localizacaoUncheckedCreateWithoutOrganizacaoInput> | localizacaoCreateWithoutOrganizacaoInput[] | localizacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: localizacaoCreateOrConnectWithoutOrganizacaoInput | localizacaoCreateOrConnectWithoutOrganizacaoInput[]
    createMany?: localizacaoCreateManyOrganizacaoInputEnvelope
    connect?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type alertaUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<alertaCreateWithoutOrganizacaoInput, alertaUncheckedCreateWithoutOrganizacaoInput> | alertaCreateWithoutOrganizacaoInput[] | alertaUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutOrganizacaoInput | alertaCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: alertaUpsertWithWhereUniqueWithoutOrganizacaoInput | alertaUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: alertaCreateManyOrganizacaoInputEnvelope
    set?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    disconnect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    delete?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    update?: alertaUpdateWithWhereUniqueWithoutOrganizacaoInput | alertaUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: alertaUpdateManyWithWhereWithoutOrganizacaoInput | alertaUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: alertaScalarWhereInput | alertaScalarWhereInput[]
  }

  export type categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<categoria_doacaoCreateWithoutOrganizacaoInput, categoria_doacaoUncheckedCreateWithoutOrganizacaoInput> | categoria_doacaoCreateWithoutOrganizacaoInput[] | categoria_doacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutOrganizacaoInput | categoria_doacaoCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: categoria_doacaoUpsertWithWhereUniqueWithoutOrganizacaoInput | categoria_doacaoUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: categoria_doacaoCreateManyOrganizacaoInputEnvelope
    set?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    disconnect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    delete?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    update?: categoria_doacaoUpdateWithWhereUniqueWithoutOrganizacaoInput | categoria_doacaoUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: categoria_doacaoUpdateManyWithWhereWithoutOrganizacaoInput | categoria_doacaoUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: categoria_doacaoScalarWhereInput | categoria_doacaoScalarWhereInput[]
  }

  export type feedbackUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<feedbackCreateWithoutOrganizacaoInput, feedbackUncheckedCreateWithoutOrganizacaoInput> | feedbackCreateWithoutOrganizacaoInput[] | feedbackUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrganizacaoInput | feedbackCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutOrganizacaoInput | feedbackUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: feedbackCreateManyOrganizacaoInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutOrganizacaoInput | feedbackUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutOrganizacaoInput | feedbackUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type impacto_socialUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<impacto_socialCreateWithoutOrganizacaoInput, impacto_socialUncheckedCreateWithoutOrganizacaoInput> | impacto_socialCreateWithoutOrganizacaoInput[] | impacto_socialUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutOrganizacaoInput | impacto_socialCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: impacto_socialUpsertWithWhereUniqueWithoutOrganizacaoInput | impacto_socialUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: impacto_socialCreateManyOrganizacaoInputEnvelope
    set?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    disconnect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    delete?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    update?: impacto_socialUpdateWithWhereUniqueWithoutOrganizacaoInput | impacto_socialUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: impacto_socialUpdateManyWithWhereWithoutOrganizacaoInput | impacto_socialUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
  }

  export type localizacaoUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<localizacaoCreateWithoutOrganizacaoInput, localizacaoUncheckedCreateWithoutOrganizacaoInput> | localizacaoCreateWithoutOrganizacaoInput[] | localizacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: localizacaoCreateOrConnectWithoutOrganizacaoInput | localizacaoCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: localizacaoUpsertWithWhereUniqueWithoutOrganizacaoInput | localizacaoUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: localizacaoCreateManyOrganizacaoInputEnvelope
    set?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    disconnect?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    delete?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    connect?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    update?: localizacaoUpdateWithWhereUniqueWithoutOrganizacaoInput | localizacaoUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: localizacaoUpdateManyWithWhereWithoutOrganizacaoInput | localizacaoUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: localizacaoScalarWhereInput | localizacaoScalarWhereInput[]
  }

  export type voluntariosUpdateOneWithoutOrganizacaoNestedInput = {
    create?: XOR<voluntariosCreateWithoutOrganizacaoInput, voluntariosUncheckedCreateWithoutOrganizacaoInput>
    connectOrCreate?: voluntariosCreateOrConnectWithoutOrganizacaoInput
    upsert?: voluntariosUpsertWithoutOrganizacaoInput
    disconnect?: voluntariosWhereInput | boolean
    delete?: voluntariosWhereInput | boolean
    connect?: voluntariosWhereUniqueInput
    update?: XOR<XOR<voluntariosUpdateToOneWithWhereWithoutOrganizacaoInput, voluntariosUpdateWithoutOrganizacaoInput>, voluntariosUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type doadoresUpdateOneWithoutOrganizacaoNestedInput = {
    create?: XOR<doadoresCreateWithoutOrganizacaoInput, doadoresUncheckedCreateWithoutOrganizacaoInput>
    connectOrCreate?: doadoresCreateOrConnectWithoutOrganizacaoInput
    upsert?: doadoresUpsertWithoutOrganizacaoInput
    disconnect?: doadoresWhereInput | boolean
    delete?: doadoresWhereInput | boolean
    connect?: doadoresWhereUniqueInput
    update?: XOR<XOR<doadoresUpdateToOneWithWhereWithoutOrganizacaoInput, doadoresUpdateWithoutOrganizacaoInput>, doadoresUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<alertaCreateWithoutOrganizacaoInput, alertaUncheckedCreateWithoutOrganizacaoInput> | alertaCreateWithoutOrganizacaoInput[] | alertaUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: alertaCreateOrConnectWithoutOrganizacaoInput | alertaCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: alertaUpsertWithWhereUniqueWithoutOrganizacaoInput | alertaUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: alertaCreateManyOrganizacaoInputEnvelope
    set?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    disconnect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    delete?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    connect?: alertaWhereUniqueInput | alertaWhereUniqueInput[]
    update?: alertaUpdateWithWhereUniqueWithoutOrganizacaoInput | alertaUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: alertaUpdateManyWithWhereWithoutOrganizacaoInput | alertaUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: alertaScalarWhereInput | alertaScalarWhereInput[]
  }

  export type categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<categoria_doacaoCreateWithoutOrganizacaoInput, categoria_doacaoUncheckedCreateWithoutOrganizacaoInput> | categoria_doacaoCreateWithoutOrganizacaoInput[] | categoria_doacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: categoria_doacaoCreateOrConnectWithoutOrganizacaoInput | categoria_doacaoCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: categoria_doacaoUpsertWithWhereUniqueWithoutOrganizacaoInput | categoria_doacaoUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: categoria_doacaoCreateManyOrganizacaoInputEnvelope
    set?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    disconnect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    delete?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    connect?: categoria_doacaoWhereUniqueInput | categoria_doacaoWhereUniqueInput[]
    update?: categoria_doacaoUpdateWithWhereUniqueWithoutOrganizacaoInput | categoria_doacaoUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: categoria_doacaoUpdateManyWithWhereWithoutOrganizacaoInput | categoria_doacaoUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: categoria_doacaoScalarWhereInput | categoria_doacaoScalarWhereInput[]
  }

  export type feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<feedbackCreateWithoutOrganizacaoInput, feedbackUncheckedCreateWithoutOrganizacaoInput> | feedbackCreateWithoutOrganizacaoInput[] | feedbackUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrganizacaoInput | feedbackCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutOrganizacaoInput | feedbackUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: feedbackCreateManyOrganizacaoInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutOrganizacaoInput | feedbackUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutOrganizacaoInput | feedbackUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<impacto_socialCreateWithoutOrganizacaoInput, impacto_socialUncheckedCreateWithoutOrganizacaoInput> | impacto_socialCreateWithoutOrganizacaoInput[] | impacto_socialUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: impacto_socialCreateOrConnectWithoutOrganizacaoInput | impacto_socialCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: impacto_socialUpsertWithWhereUniqueWithoutOrganizacaoInput | impacto_socialUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: impacto_socialCreateManyOrganizacaoInputEnvelope
    set?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    disconnect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    delete?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    connect?: impacto_socialWhereUniqueInput | impacto_socialWhereUniqueInput[]
    update?: impacto_socialUpdateWithWhereUniqueWithoutOrganizacaoInput | impacto_socialUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: impacto_socialUpdateManyWithWhereWithoutOrganizacaoInput | impacto_socialUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
  }

  export type localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput = {
    create?: XOR<localizacaoCreateWithoutOrganizacaoInput, localizacaoUncheckedCreateWithoutOrganizacaoInput> | localizacaoCreateWithoutOrganizacaoInput[] | localizacaoUncheckedCreateWithoutOrganizacaoInput[]
    connectOrCreate?: localizacaoCreateOrConnectWithoutOrganizacaoInput | localizacaoCreateOrConnectWithoutOrganizacaoInput[]
    upsert?: localizacaoUpsertWithWhereUniqueWithoutOrganizacaoInput | localizacaoUpsertWithWhereUniqueWithoutOrganizacaoInput[]
    createMany?: localizacaoCreateManyOrganizacaoInputEnvelope
    set?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    disconnect?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    delete?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    connect?: localizacaoWhereUniqueInput | localizacaoWhereUniqueInput[]
    update?: localizacaoUpdateWithWhereUniqueWithoutOrganizacaoInput | localizacaoUpdateWithWhereUniqueWithoutOrganizacaoInput[]
    updateMany?: localizacaoUpdateManyWithWhereWithoutOrganizacaoInput | localizacaoUpdateManyWithWhereWithoutOrganizacaoInput[]
    deleteMany?: localizacaoScalarWhereInput | localizacaoScalarWhereInput[]
  }

  export type organizacaoCreateNestedManyWithoutVoluntariosInput = {
    create?: XOR<organizacaoCreateWithoutVoluntariosInput, organizacaoUncheckedCreateWithoutVoluntariosInput> | organizacaoCreateWithoutVoluntariosInput[] | organizacaoUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutVoluntariosInput | organizacaoCreateOrConnectWithoutVoluntariosInput[]
    createMany?: organizacaoCreateManyVoluntariosInputEnvelope
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
  }

  export type organizacaoUncheckedCreateNestedManyWithoutVoluntariosInput = {
    create?: XOR<organizacaoCreateWithoutVoluntariosInput, organizacaoUncheckedCreateWithoutVoluntariosInput> | organizacaoCreateWithoutVoluntariosInput[] | organizacaoUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutVoluntariosInput | organizacaoCreateOrConnectWithoutVoluntariosInput[]
    createMany?: organizacaoCreateManyVoluntariosInputEnvelope
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
  }

  export type organizacaoUpdateManyWithoutVoluntariosNestedInput = {
    create?: XOR<organizacaoCreateWithoutVoluntariosInput, organizacaoUncheckedCreateWithoutVoluntariosInput> | organizacaoCreateWithoutVoluntariosInput[] | organizacaoUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutVoluntariosInput | organizacaoCreateOrConnectWithoutVoluntariosInput[]
    upsert?: organizacaoUpsertWithWhereUniqueWithoutVoluntariosInput | organizacaoUpsertWithWhereUniqueWithoutVoluntariosInput[]
    createMany?: organizacaoCreateManyVoluntariosInputEnvelope
    set?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    disconnect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    delete?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    update?: organizacaoUpdateWithWhereUniqueWithoutVoluntariosInput | organizacaoUpdateWithWhereUniqueWithoutVoluntariosInput[]
    updateMany?: organizacaoUpdateManyWithWhereWithoutVoluntariosInput | organizacaoUpdateManyWithWhereWithoutVoluntariosInput[]
    deleteMany?: organizacaoScalarWhereInput | organizacaoScalarWhereInput[]
  }

  export type organizacaoUncheckedUpdateManyWithoutVoluntariosNestedInput = {
    create?: XOR<organizacaoCreateWithoutVoluntariosInput, organizacaoUncheckedCreateWithoutVoluntariosInput> | organizacaoCreateWithoutVoluntariosInput[] | organizacaoUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: organizacaoCreateOrConnectWithoutVoluntariosInput | organizacaoCreateOrConnectWithoutVoluntariosInput[]
    upsert?: organizacaoUpsertWithWhereUniqueWithoutVoluntariosInput | organizacaoUpsertWithWhereUniqueWithoutVoluntariosInput[]
    createMany?: organizacaoCreateManyVoluntariosInputEnvelope
    set?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    disconnect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    delete?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    connect?: organizacaoWhereUniqueInput | organizacaoWhereUniqueInput[]
    update?: organizacaoUpdateWithWhereUniqueWithoutVoluntariosInput | organizacaoUpdateWithWhereUniqueWithoutVoluntariosInput[]
    updateMany?: organizacaoUpdateManyWithWhereWithoutVoluntariosInput | organizacaoUpdateManyWithWhereWithoutVoluntariosInput[]
    deleteMany?: organizacaoScalarWhereInput | organizacaoScalarWhereInput[]
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

  export type NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.alerta_tipo_alerta | Enumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel> | $Enums.alerta_tipo_alerta | null
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

  export type NestedEnumalerta_tipo_alertaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alerta_tipo_alerta | Enumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    in?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.alerta_tipo_alerta[] | ListEnumalerta_tipo_alertaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumalerta_tipo_alertaNullableWithAggregatesFilter<$PrismaModel> | $Enums.alerta_tipo_alerta | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel>
    _max?: NestedEnumalerta_tipo_alertaNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.categoria_doacao_tipo_doacao | Enumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    in?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel> | $Enums.categoria_doacao_tipo_doacao | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumcategoria_doacao_tipo_doacaoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.categoria_doacao_tipo_doacao | Enumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    in?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.categoria_doacao_tipo_doacao[] | ListEnumcategoria_doacao_tipo_doacaoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcategoria_doacao_tipo_doacaoNullableWithAggregatesFilter<$PrismaModel> | $Enums.categoria_doacao_tipo_doacao | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel>
    _max?: NestedEnumcategoria_doacao_tipo_doacaoNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumfeedback_criticaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.feedback_critica | Enumfeedback_criticaFieldRefInput<$PrismaModel> | null
    in?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeedback_criticaNullableFilter<$PrismaModel> | $Enums.feedback_critica | null
  }

  export type NestedEnumfeedback_criticaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.feedback_critica | Enumfeedback_criticaFieldRefInput<$PrismaModel> | null
    in?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.feedback_critica[] | ListEnumfeedback_criticaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeedback_criticaNullableWithAggregatesFilter<$PrismaModel> | $Enums.feedback_critica | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfeedback_criticaNullableFilter<$PrismaModel>
    _max?: NestedEnumfeedback_criticaNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type organizacaoCreateWithoutAlertaInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutAlertaInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutAlertaInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutAlertaInput, organizacaoUncheckedCreateWithoutAlertaInput>
  }

  export type doadoresCreateWithoutAlertaInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresUncheckedCreateWithoutAlertaInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    id_doadores?: number
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoUncheckedCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresCreateOrConnectWithoutAlertaInput = {
    where: doadoresWhereUniqueInput
    create: XOR<doadoresCreateWithoutAlertaInput, doadoresUncheckedCreateWithoutAlertaInput>
  }

  export type organizacaoUpsertWithoutAlertaInput = {
    update: XOR<organizacaoUpdateWithoutAlertaInput, organizacaoUncheckedUpdateWithoutAlertaInput>
    create: XOR<organizacaoCreateWithoutAlertaInput, organizacaoUncheckedCreateWithoutAlertaInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutAlertaInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutAlertaInput, organizacaoUncheckedUpdateWithoutAlertaInput>
  }

  export type organizacaoUpdateWithoutAlertaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutAlertaInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type doadoresUpsertWithoutAlertaInput = {
    update: XOR<doadoresUpdateWithoutAlertaInput, doadoresUncheckedUpdateWithoutAlertaInput>
    create: XOR<doadoresCreateWithoutAlertaInput, doadoresUncheckedCreateWithoutAlertaInput>
    where?: doadoresWhereInput
  }

  export type doadoresUpdateToOneWithWhereWithoutAlertaInput = {
    where?: doadoresWhereInput
    data: XOR<doadoresUpdateWithoutAlertaInput, doadoresUncheckedUpdateWithoutAlertaInput>
  }

  export type doadoresUpdateWithoutAlertaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_doacao?: categoria_doacaoUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUpdateManyWithoutDoadoresNestedInput
  }

  export type doadoresUncheckedUpdateWithoutAlertaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: IntFieldUpdateOperationsInput | number
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUncheckedUpdateManyWithoutDoadoresNestedInput
  }

  export type organizacaoCreateWithoutCategoria_doacaoInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutCategoria_doacaoInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutCategoria_doacaoInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutCategoria_doacaoInput, organizacaoUncheckedCreateWithoutCategoria_doacaoInput>
  }

  export type doadoresCreateWithoutCategoria_doacaoInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresUncheckedCreateWithoutCategoria_doacaoInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    id_doadores?: number
    alerta?: alertaUncheckedCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoUncheckedCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresCreateOrConnectWithoutCategoria_doacaoInput = {
    where: doadoresWhereUniqueInput
    create: XOR<doadoresCreateWithoutCategoria_doacaoInput, doadoresUncheckedCreateWithoutCategoria_doacaoInput>
  }

  export type impacto_socialCreateWithoutCategoria_doacaoInput = {
    organizacao?: organizacaoCreateNestedOneWithoutImpacto_socialInput
    localizacao?: localizacaoCreateNestedOneWithoutImpacto_socialInput
  }

  export type impacto_socialUncheckedCreateWithoutCategoria_doacaoInput = {
    id_impacto?: number
    id_organizacao?: number | null
    id_localizacao?: number | null
  }

  export type impacto_socialCreateOrConnectWithoutCategoria_doacaoInput = {
    where: impacto_socialWhereUniqueInput
    create: XOR<impacto_socialCreateWithoutCategoria_doacaoInput, impacto_socialUncheckedCreateWithoutCategoria_doacaoInput>
  }

  export type impacto_socialCreateManyCategoria_doacaoInputEnvelope = {
    data: impacto_socialCreateManyCategoria_doacaoInput | impacto_socialCreateManyCategoria_doacaoInput[]
    skipDuplicates?: boolean
  }

  export type organizacaoUpsertWithoutCategoria_doacaoInput = {
    update: XOR<organizacaoUpdateWithoutCategoria_doacaoInput, organizacaoUncheckedUpdateWithoutCategoria_doacaoInput>
    create: XOR<organizacaoCreateWithoutCategoria_doacaoInput, organizacaoUncheckedCreateWithoutCategoria_doacaoInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutCategoria_doacaoInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutCategoria_doacaoInput, organizacaoUncheckedUpdateWithoutCategoria_doacaoInput>
  }

  export type organizacaoUpdateWithoutCategoria_doacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutCategoria_doacaoInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type doadoresUpsertWithoutCategoria_doacaoInput = {
    update: XOR<doadoresUpdateWithoutCategoria_doacaoInput, doadoresUncheckedUpdateWithoutCategoria_doacaoInput>
    create: XOR<doadoresCreateWithoutCategoria_doacaoInput, doadoresUncheckedCreateWithoutCategoria_doacaoInput>
    where?: doadoresWhereInput
  }

  export type doadoresUpdateToOneWithWhereWithoutCategoria_doacaoInput = {
    where?: doadoresWhereInput
    data: XOR<doadoresUpdateWithoutCategoria_doacaoInput, doadoresUncheckedUpdateWithoutCategoria_doacaoInput>
  }

  export type doadoresUpdateWithoutCategoria_doacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUpdateManyWithoutDoadoresNestedInput
  }

  export type doadoresUncheckedUpdateWithoutCategoria_doacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: IntFieldUpdateOperationsInput | number
    alerta?: alertaUncheckedUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUncheckedUpdateManyWithoutDoadoresNestedInput
  }

  export type impacto_socialUpsertWithWhereUniqueWithoutCategoria_doacaoInput = {
    where: impacto_socialWhereUniqueInput
    update: XOR<impacto_socialUpdateWithoutCategoria_doacaoInput, impacto_socialUncheckedUpdateWithoutCategoria_doacaoInput>
    create: XOR<impacto_socialCreateWithoutCategoria_doacaoInput, impacto_socialUncheckedCreateWithoutCategoria_doacaoInput>
  }

  export type impacto_socialUpdateWithWhereUniqueWithoutCategoria_doacaoInput = {
    where: impacto_socialWhereUniqueInput
    data: XOR<impacto_socialUpdateWithoutCategoria_doacaoInput, impacto_socialUncheckedUpdateWithoutCategoria_doacaoInput>
  }

  export type impacto_socialUpdateManyWithWhereWithoutCategoria_doacaoInput = {
    where: impacto_socialScalarWhereInput
    data: XOR<impacto_socialUpdateManyMutationInput, impacto_socialUncheckedUpdateManyWithoutCategoria_doacaoInput>
  }

  export type impacto_socialScalarWhereInput = {
    AND?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
    OR?: impacto_socialScalarWhereInput[]
    NOT?: impacto_socialScalarWhereInput | impacto_socialScalarWhereInput[]
    id_impacto?: IntFilter<"impacto_social"> | number
    id_organizacao?: IntNullableFilter<"impacto_social"> | number | null
    id_localizacao?: IntNullableFilter<"impacto_social"> | number | null
    id_doacao?: IntNullableFilter<"impacto_social"> | number | null
  }

  export type alertaCreateWithoutDoadoresInput = {
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    organizacao?: organizacaoCreateNestedOneWithoutAlertaInput
  }

  export type alertaUncheckedCreateWithoutDoadoresInput = {
    id_alerta?: number
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    id_organizacao?: number | null
  }

  export type alertaCreateOrConnectWithoutDoadoresInput = {
    where: alertaWhereUniqueInput
    create: XOR<alertaCreateWithoutDoadoresInput, alertaUncheckedCreateWithoutDoadoresInput>
  }

  export type alertaCreateManyDoadoresInputEnvelope = {
    data: alertaCreateManyDoadoresInput | alertaCreateManyDoadoresInput[]
    skipDuplicates?: boolean
  }

  export type categoria_doacaoCreateWithoutDoadoresInput = {
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    organizacao?: organizacaoCreateNestedOneWithoutCategoria_doacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoUncheckedCreateWithoutDoadoresInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_organizacao?: number | null
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoCreateOrConnectWithoutDoadoresInput = {
    where: categoria_doacaoWhereUniqueInput
    create: XOR<categoria_doacaoCreateWithoutDoadoresInput, categoria_doacaoUncheckedCreateWithoutDoadoresInput>
  }

  export type categoria_doacaoCreateManyDoadoresInputEnvelope = {
    data: categoria_doacaoCreateManyDoadoresInput | categoria_doacaoCreateManyDoadoresInput[]
    skipDuplicates?: boolean
  }

  export type feedbackCreateWithoutDoadoresInput = {
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    organizacao?: organizacaoCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutDoadoresInput = {
    id_feedback?: number
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    id_organizacao?: number | null
  }

  export type feedbackCreateOrConnectWithoutDoadoresInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutDoadoresInput, feedbackUncheckedCreateWithoutDoadoresInput>
  }

  export type feedbackCreateManyDoadoresInputEnvelope = {
    data: feedbackCreateManyDoadoresInput | feedbackCreateManyDoadoresInput[]
    skipDuplicates?: boolean
  }

  export type organizacaoCreateWithoutDoadoresInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutDoadoresInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutDoadoresInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutDoadoresInput, organizacaoUncheckedCreateWithoutDoadoresInput>
  }

  export type organizacaoCreateManyDoadoresInputEnvelope = {
    data: organizacaoCreateManyDoadoresInput | organizacaoCreateManyDoadoresInput[]
    skipDuplicates?: boolean
  }

  export type alertaUpsertWithWhereUniqueWithoutDoadoresInput = {
    where: alertaWhereUniqueInput
    update: XOR<alertaUpdateWithoutDoadoresInput, alertaUncheckedUpdateWithoutDoadoresInput>
    create: XOR<alertaCreateWithoutDoadoresInput, alertaUncheckedCreateWithoutDoadoresInput>
  }

  export type alertaUpdateWithWhereUniqueWithoutDoadoresInput = {
    where: alertaWhereUniqueInput
    data: XOR<alertaUpdateWithoutDoadoresInput, alertaUncheckedUpdateWithoutDoadoresInput>
  }

  export type alertaUpdateManyWithWhereWithoutDoadoresInput = {
    where: alertaScalarWhereInput
    data: XOR<alertaUpdateManyMutationInput, alertaUncheckedUpdateManyWithoutDoadoresInput>
  }

  export type alertaScalarWhereInput = {
    AND?: alertaScalarWhereInput | alertaScalarWhereInput[]
    OR?: alertaScalarWhereInput[]
    NOT?: alertaScalarWhereInput | alertaScalarWhereInput[]
    id_alerta?: IntFilter<"alerta"> | number
    tipo_alerta?: Enumalerta_tipo_alertaNullableFilter<"alerta"> | $Enums.alerta_tipo_alerta | null
    descricao?: StringNullableFilter<"alerta"> | string | null
    id_organizacao?: IntNullableFilter<"alerta"> | number | null
    id_doadores?: IntNullableFilter<"alerta"> | number | null
  }

  export type categoria_doacaoUpsertWithWhereUniqueWithoutDoadoresInput = {
    where: categoria_doacaoWhereUniqueInput
    update: XOR<categoria_doacaoUpdateWithoutDoadoresInput, categoria_doacaoUncheckedUpdateWithoutDoadoresInput>
    create: XOR<categoria_doacaoCreateWithoutDoadoresInput, categoria_doacaoUncheckedCreateWithoutDoadoresInput>
  }

  export type categoria_doacaoUpdateWithWhereUniqueWithoutDoadoresInput = {
    where: categoria_doacaoWhereUniqueInput
    data: XOR<categoria_doacaoUpdateWithoutDoadoresInput, categoria_doacaoUncheckedUpdateWithoutDoadoresInput>
  }

  export type categoria_doacaoUpdateManyWithWhereWithoutDoadoresInput = {
    where: categoria_doacaoScalarWhereInput
    data: XOR<categoria_doacaoUpdateManyMutationInput, categoria_doacaoUncheckedUpdateManyWithoutDoadoresInput>
  }

  export type categoria_doacaoScalarWhereInput = {
    AND?: categoria_doacaoScalarWhereInput | categoria_doacaoScalarWhereInput[]
    OR?: categoria_doacaoScalarWhereInput[]
    NOT?: categoria_doacaoScalarWhereInput | categoria_doacaoScalarWhereInput[]
    id_doacao?: IntFilter<"categoria_doacao"> | number
    quantidade?: IntNullableFilter<"categoria_doacao"> | number | null
    tipo_doacao?: Enumcategoria_doacao_tipo_doacaoNullableFilter<"categoria_doacao"> | $Enums.categoria_doacao_tipo_doacao | null
    validade?: DateTimeNullableFilter<"categoria_doacao"> | Date | string | null
    id_doadores?: IntNullableFilter<"categoria_doacao"> | number | null
    id_organizacao?: IntNullableFilter<"categoria_doacao"> | number | null
  }

  export type feedbackUpsertWithWhereUniqueWithoutDoadoresInput = {
    where: feedbackWhereUniqueInput
    update: XOR<feedbackUpdateWithoutDoadoresInput, feedbackUncheckedUpdateWithoutDoadoresInput>
    create: XOR<feedbackCreateWithoutDoadoresInput, feedbackUncheckedCreateWithoutDoadoresInput>
  }

  export type feedbackUpdateWithWhereUniqueWithoutDoadoresInput = {
    where: feedbackWhereUniqueInput
    data: XOR<feedbackUpdateWithoutDoadoresInput, feedbackUncheckedUpdateWithoutDoadoresInput>
  }

  export type feedbackUpdateManyWithWhereWithoutDoadoresInput = {
    where: feedbackScalarWhereInput
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyWithoutDoadoresInput>
  }

  export type feedbackScalarWhereInput = {
    AND?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
    OR?: feedbackScalarWhereInput[]
    NOT?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
    id_feedback?: IntFilter<"feedback"> | number
    critica?: Enumfeedback_criticaNullableFilter<"feedback"> | $Enums.feedback_critica | null
    feedback_descricao?: StringNullableFilter<"feedback"> | string | null
    id_organizacao?: IntNullableFilter<"feedback"> | number | null
    id_doadores?: IntNullableFilter<"feedback"> | number | null
  }

  export type organizacaoUpsertWithWhereUniqueWithoutDoadoresInput = {
    where: organizacaoWhereUniqueInput
    update: XOR<organizacaoUpdateWithoutDoadoresInput, organizacaoUncheckedUpdateWithoutDoadoresInput>
    create: XOR<organizacaoCreateWithoutDoadoresInput, organizacaoUncheckedCreateWithoutDoadoresInput>
  }

  export type organizacaoUpdateWithWhereUniqueWithoutDoadoresInput = {
    where: organizacaoWhereUniqueInput
    data: XOR<organizacaoUpdateWithoutDoadoresInput, organizacaoUncheckedUpdateWithoutDoadoresInput>
  }

  export type organizacaoUpdateManyWithWhereWithoutDoadoresInput = {
    where: organizacaoScalarWhereInput
    data: XOR<organizacaoUpdateManyMutationInput, organizacaoUncheckedUpdateManyWithoutDoadoresInput>
  }

  export type organizacaoScalarWhereInput = {
    AND?: organizacaoScalarWhereInput | organizacaoScalarWhereInput[]
    OR?: organizacaoScalarWhereInput[]
    NOT?: organizacaoScalarWhereInput | organizacaoScalarWhereInput[]
    id_organizacao?: IntFilter<"organizacao"> | number
    nome?: StringNullableFilter<"organizacao"> | string | null
    cnpj?: StringFilter<"organizacao"> | string
    endereco?: StringNullableFilter<"organizacao"> | string | null
    telefone?: StringNullableFilter<"organizacao"> | string | null
    email?: StringNullableFilter<"organizacao"> | string | null
    id_voluntarios?: IntNullableFilter<"organizacao"> | number | null
    id_doadores?: IntNullableFilter<"organizacao"> | number | null
  }

  export type organizacaoCreateWithoutFeedbackInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutFeedbackInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutFeedbackInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutFeedbackInput, organizacaoUncheckedCreateWithoutFeedbackInput>
  }

  export type doadoresCreateWithoutFeedbackInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutDoadoresInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresUncheckedCreateWithoutFeedbackInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    id_doadores?: number
    alerta?: alertaUncheckedCreateNestedManyWithoutDoadoresInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutDoadoresInput
    organizacao?: organizacaoUncheckedCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresCreateOrConnectWithoutFeedbackInput = {
    where: doadoresWhereUniqueInput
    create: XOR<doadoresCreateWithoutFeedbackInput, doadoresUncheckedCreateWithoutFeedbackInput>
  }

  export type organizacaoUpsertWithoutFeedbackInput = {
    update: XOR<organizacaoUpdateWithoutFeedbackInput, organizacaoUncheckedUpdateWithoutFeedbackInput>
    create: XOR<organizacaoCreateWithoutFeedbackInput, organizacaoUncheckedCreateWithoutFeedbackInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutFeedbackInput, organizacaoUncheckedUpdateWithoutFeedbackInput>
  }

  export type organizacaoUpdateWithoutFeedbackInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutFeedbackInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type doadoresUpsertWithoutFeedbackInput = {
    update: XOR<doadoresUpdateWithoutFeedbackInput, doadoresUncheckedUpdateWithoutFeedbackInput>
    create: XOR<doadoresCreateWithoutFeedbackInput, doadoresUncheckedCreateWithoutFeedbackInput>
    where?: doadoresWhereInput
  }

  export type doadoresUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: doadoresWhereInput
    data: XOR<doadoresUpdateWithoutFeedbackInput, doadoresUncheckedUpdateWithoutFeedbackInput>
  }

  export type doadoresUpdateWithoutFeedbackInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutDoadoresNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUpdateManyWithoutDoadoresNestedInput
  }

  export type doadoresUncheckedUpdateWithoutFeedbackInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: IntFieldUpdateOperationsInput | number
    alerta?: alertaUncheckedUpdateManyWithoutDoadoresNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutDoadoresNestedInput
    organizacao?: organizacaoUncheckedUpdateManyWithoutDoadoresNestedInput
  }

  export type organizacaoCreateWithoutImpacto_socialInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutImpacto_socialInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutImpacto_socialInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutImpacto_socialInput, organizacaoUncheckedCreateWithoutImpacto_socialInput>
  }

  export type localizacaoCreateWithoutImpacto_socialInput = {
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    organizacao?: organizacaoCreateNestedOneWithoutLocalizacaoInput
  }

  export type localizacaoUncheckedCreateWithoutImpacto_socialInput = {
    id_localizacao?: number
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    id_organizacao?: number | null
  }

  export type localizacaoCreateOrConnectWithoutImpacto_socialInput = {
    where: localizacaoWhereUniqueInput
    create: XOR<localizacaoCreateWithoutImpacto_socialInput, localizacaoUncheckedCreateWithoutImpacto_socialInput>
  }

  export type categoria_doacaoCreateWithoutImpacto_socialInput = {
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    organizacao?: organizacaoCreateNestedOneWithoutCategoria_doacaoInput
    doadores?: doadoresCreateNestedOneWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoUncheckedCreateWithoutImpacto_socialInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_doadores?: number | null
    id_organizacao?: number | null
  }

  export type categoria_doacaoCreateOrConnectWithoutImpacto_socialInput = {
    where: categoria_doacaoWhereUniqueInput
    create: XOR<categoria_doacaoCreateWithoutImpacto_socialInput, categoria_doacaoUncheckedCreateWithoutImpacto_socialInput>
  }

  export type organizacaoUpsertWithoutImpacto_socialInput = {
    update: XOR<organizacaoUpdateWithoutImpacto_socialInput, organizacaoUncheckedUpdateWithoutImpacto_socialInput>
    create: XOR<organizacaoCreateWithoutImpacto_socialInput, organizacaoUncheckedCreateWithoutImpacto_socialInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutImpacto_socialInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutImpacto_socialInput, organizacaoUncheckedUpdateWithoutImpacto_socialInput>
  }

  export type organizacaoUpdateWithoutImpacto_socialInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutImpacto_socialInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type localizacaoUpsertWithoutImpacto_socialInput = {
    update: XOR<localizacaoUpdateWithoutImpacto_socialInput, localizacaoUncheckedUpdateWithoutImpacto_socialInput>
    create: XOR<localizacaoCreateWithoutImpacto_socialInput, localizacaoUncheckedCreateWithoutImpacto_socialInput>
    where?: localizacaoWhereInput
  }

  export type localizacaoUpdateToOneWithWhereWithoutImpacto_socialInput = {
    where?: localizacaoWhereInput
    data: XOR<localizacaoUpdateWithoutImpacto_socialInput, localizacaoUncheckedUpdateWithoutImpacto_socialInput>
  }

  export type localizacaoUpdateWithoutImpacto_socialInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organizacao?: organizacaoUpdateOneWithoutLocalizacaoNestedInput
  }

  export type localizacaoUncheckedUpdateWithoutImpacto_socialInput = {
    id_localizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoria_doacaoUpsertWithoutImpacto_socialInput = {
    update: XOR<categoria_doacaoUpdateWithoutImpacto_socialInput, categoria_doacaoUncheckedUpdateWithoutImpacto_socialInput>
    create: XOR<categoria_doacaoCreateWithoutImpacto_socialInput, categoria_doacaoUncheckedCreateWithoutImpacto_socialInput>
    where?: categoria_doacaoWhereInput
  }

  export type categoria_doacaoUpdateToOneWithWhereWithoutImpacto_socialInput = {
    where?: categoria_doacaoWhereInput
    data: XOR<categoria_doacaoUpdateWithoutImpacto_socialInput, categoria_doacaoUncheckedUpdateWithoutImpacto_socialInput>
  }

  export type categoria_doacaoUpdateWithoutImpacto_socialInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizacao?: organizacaoUpdateOneWithoutCategoria_doacaoNestedInput
    doadores?: doadoresUpdateOneWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoUncheckedUpdateWithoutImpacto_socialInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialCreateWithoutLocalizacaoInput = {
    organizacao?: organizacaoCreateNestedOneWithoutImpacto_socialInput
    categoria_doacao?: categoria_doacaoCreateNestedOneWithoutImpacto_socialInput
  }

  export type impacto_socialUncheckedCreateWithoutLocalizacaoInput = {
    id_impacto?: number
    id_organizacao?: number | null
    id_doacao?: number | null
  }

  export type impacto_socialCreateOrConnectWithoutLocalizacaoInput = {
    where: impacto_socialWhereUniqueInput
    create: XOR<impacto_socialCreateWithoutLocalizacaoInput, impacto_socialUncheckedCreateWithoutLocalizacaoInput>
  }

  export type impacto_socialCreateManyLocalizacaoInputEnvelope = {
    data: impacto_socialCreateManyLocalizacaoInput | impacto_socialCreateManyLocalizacaoInput[]
    skipDuplicates?: boolean
  }

  export type organizacaoCreateWithoutLocalizacaoInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    voluntarios?: voluntariosCreateNestedOneWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutLocalizacaoInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
    id_doadores?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutLocalizacaoInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutLocalizacaoInput, organizacaoUncheckedCreateWithoutLocalizacaoInput>
  }

  export type impacto_socialUpsertWithWhereUniqueWithoutLocalizacaoInput = {
    where: impacto_socialWhereUniqueInput
    update: XOR<impacto_socialUpdateWithoutLocalizacaoInput, impacto_socialUncheckedUpdateWithoutLocalizacaoInput>
    create: XOR<impacto_socialCreateWithoutLocalizacaoInput, impacto_socialUncheckedCreateWithoutLocalizacaoInput>
  }

  export type impacto_socialUpdateWithWhereUniqueWithoutLocalizacaoInput = {
    where: impacto_socialWhereUniqueInput
    data: XOR<impacto_socialUpdateWithoutLocalizacaoInput, impacto_socialUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type impacto_socialUpdateManyWithWhereWithoutLocalizacaoInput = {
    where: impacto_socialScalarWhereInput
    data: XOR<impacto_socialUpdateManyMutationInput, impacto_socialUncheckedUpdateManyWithoutLocalizacaoInput>
  }

  export type organizacaoUpsertWithoutLocalizacaoInput = {
    update: XOR<organizacaoUpdateWithoutLocalizacaoInput, organizacaoUncheckedUpdateWithoutLocalizacaoInput>
    create: XOR<organizacaoCreateWithoutLocalizacaoInput, organizacaoUncheckedCreateWithoutLocalizacaoInput>
    where?: organizacaoWhereInput
  }

  export type organizacaoUpdateToOneWithWhereWithoutLocalizacaoInput = {
    where?: organizacaoWhereInput
    data: XOR<organizacaoUpdateWithoutLocalizacaoInput, organizacaoUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type organizacaoUpdateWithoutLocalizacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutLocalizacaoInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type alertaCreateWithoutOrganizacaoInput = {
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    doadores?: doadoresCreateNestedOneWithoutAlertaInput
  }

  export type alertaUncheckedCreateWithoutOrganizacaoInput = {
    id_alerta?: number
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    id_doadores?: number | null
  }

  export type alertaCreateOrConnectWithoutOrganizacaoInput = {
    where: alertaWhereUniqueInput
    create: XOR<alertaCreateWithoutOrganizacaoInput, alertaUncheckedCreateWithoutOrganizacaoInput>
  }

  export type alertaCreateManyOrganizacaoInputEnvelope = {
    data: alertaCreateManyOrganizacaoInput | alertaCreateManyOrganizacaoInput[]
    skipDuplicates?: boolean
  }

  export type categoria_doacaoCreateWithoutOrganizacaoInput = {
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    doadores?: doadoresCreateNestedOneWithoutCategoria_doacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoUncheckedCreateWithoutOrganizacaoInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_doadores?: number | null
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutCategoria_doacaoInput
  }

  export type categoria_doacaoCreateOrConnectWithoutOrganizacaoInput = {
    where: categoria_doacaoWhereUniqueInput
    create: XOR<categoria_doacaoCreateWithoutOrganizacaoInput, categoria_doacaoUncheckedCreateWithoutOrganizacaoInput>
  }

  export type categoria_doacaoCreateManyOrganizacaoInputEnvelope = {
    data: categoria_doacaoCreateManyOrganizacaoInput | categoria_doacaoCreateManyOrganizacaoInput[]
    skipDuplicates?: boolean
  }

  export type feedbackCreateWithoutOrganizacaoInput = {
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    doadores?: doadoresCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutOrganizacaoInput = {
    id_feedback?: number
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    id_doadores?: number | null
  }

  export type feedbackCreateOrConnectWithoutOrganizacaoInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutOrganizacaoInput, feedbackUncheckedCreateWithoutOrganizacaoInput>
  }

  export type feedbackCreateManyOrganizacaoInputEnvelope = {
    data: feedbackCreateManyOrganizacaoInput | feedbackCreateManyOrganizacaoInput[]
    skipDuplicates?: boolean
  }

  export type impacto_socialCreateWithoutOrganizacaoInput = {
    localizacao?: localizacaoCreateNestedOneWithoutImpacto_socialInput
    categoria_doacao?: categoria_doacaoCreateNestedOneWithoutImpacto_socialInput
  }

  export type impacto_socialUncheckedCreateWithoutOrganizacaoInput = {
    id_impacto?: number
    id_localizacao?: number | null
    id_doacao?: number | null
  }

  export type impacto_socialCreateOrConnectWithoutOrganizacaoInput = {
    where: impacto_socialWhereUniqueInput
    create: XOR<impacto_socialCreateWithoutOrganizacaoInput, impacto_socialUncheckedCreateWithoutOrganizacaoInput>
  }

  export type impacto_socialCreateManyOrganizacaoInputEnvelope = {
    data: impacto_socialCreateManyOrganizacaoInput | impacto_socialCreateManyOrganizacaoInput[]
    skipDuplicates?: boolean
  }

  export type localizacaoCreateWithoutOrganizacaoInput = {
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    impacto_social?: impacto_socialCreateNestedManyWithoutLocalizacaoInput
  }

  export type localizacaoUncheckedCreateWithoutOrganizacaoInput = {
    id_localizacao?: number
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type localizacaoCreateOrConnectWithoutOrganizacaoInput = {
    where: localizacaoWhereUniqueInput
    create: XOR<localizacaoCreateWithoutOrganizacaoInput, localizacaoUncheckedCreateWithoutOrganizacaoInput>
  }

  export type localizacaoCreateManyOrganizacaoInputEnvelope = {
    data: localizacaoCreateManyOrganizacaoInput | localizacaoCreateManyOrganizacaoInput[]
    skipDuplicates?: boolean
  }

  export type voluntariosCreateWithoutOrganizacaoInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
  }

  export type voluntariosUncheckedCreateWithoutOrganizacaoInput = {
    id_voluntarios?: number
    nome?: string | null
    idade?: number | null
    email?: string | null
  }

  export type voluntariosCreateOrConnectWithoutOrganizacaoInput = {
    where: voluntariosWhereUniqueInput
    create: XOR<voluntariosCreateWithoutOrganizacaoInput, voluntariosUncheckedCreateWithoutOrganizacaoInput>
  }

  export type doadoresCreateWithoutOrganizacaoInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutDoadoresInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresUncheckedCreateWithoutOrganizacaoInput = {
    nome?: string | null
    idade?: number | null
    email?: string | null
    id_doadores?: number
    alerta?: alertaUncheckedCreateNestedManyWithoutDoadoresInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutDoadoresInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutDoadoresInput
  }

  export type doadoresCreateOrConnectWithoutOrganizacaoInput = {
    where: doadoresWhereUniqueInput
    create: XOR<doadoresCreateWithoutOrganizacaoInput, doadoresUncheckedCreateWithoutOrganizacaoInput>
  }

  export type alertaUpsertWithWhereUniqueWithoutOrganizacaoInput = {
    where: alertaWhereUniqueInput
    update: XOR<alertaUpdateWithoutOrganizacaoInput, alertaUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<alertaCreateWithoutOrganizacaoInput, alertaUncheckedCreateWithoutOrganizacaoInput>
  }

  export type alertaUpdateWithWhereUniqueWithoutOrganizacaoInput = {
    where: alertaWhereUniqueInput
    data: XOR<alertaUpdateWithoutOrganizacaoInput, alertaUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type alertaUpdateManyWithWhereWithoutOrganizacaoInput = {
    where: alertaScalarWhereInput
    data: XOR<alertaUpdateManyMutationInput, alertaUncheckedUpdateManyWithoutOrganizacaoInput>
  }

  export type categoria_doacaoUpsertWithWhereUniqueWithoutOrganizacaoInput = {
    where: categoria_doacaoWhereUniqueInput
    update: XOR<categoria_doacaoUpdateWithoutOrganizacaoInput, categoria_doacaoUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<categoria_doacaoCreateWithoutOrganizacaoInput, categoria_doacaoUncheckedCreateWithoutOrganizacaoInput>
  }

  export type categoria_doacaoUpdateWithWhereUniqueWithoutOrganizacaoInput = {
    where: categoria_doacaoWhereUniqueInput
    data: XOR<categoria_doacaoUpdateWithoutOrganizacaoInput, categoria_doacaoUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type categoria_doacaoUpdateManyWithWhereWithoutOrganizacaoInput = {
    where: categoria_doacaoScalarWhereInput
    data: XOR<categoria_doacaoUpdateManyMutationInput, categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoInput>
  }

  export type feedbackUpsertWithWhereUniqueWithoutOrganizacaoInput = {
    where: feedbackWhereUniqueInput
    update: XOR<feedbackUpdateWithoutOrganizacaoInput, feedbackUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<feedbackCreateWithoutOrganizacaoInput, feedbackUncheckedCreateWithoutOrganizacaoInput>
  }

  export type feedbackUpdateWithWhereUniqueWithoutOrganizacaoInput = {
    where: feedbackWhereUniqueInput
    data: XOR<feedbackUpdateWithoutOrganizacaoInput, feedbackUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type feedbackUpdateManyWithWhereWithoutOrganizacaoInput = {
    where: feedbackScalarWhereInput
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyWithoutOrganizacaoInput>
  }

  export type impacto_socialUpsertWithWhereUniqueWithoutOrganizacaoInput = {
    where: impacto_socialWhereUniqueInput
    update: XOR<impacto_socialUpdateWithoutOrganizacaoInput, impacto_socialUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<impacto_socialCreateWithoutOrganizacaoInput, impacto_socialUncheckedCreateWithoutOrganizacaoInput>
  }

  export type impacto_socialUpdateWithWhereUniqueWithoutOrganizacaoInput = {
    where: impacto_socialWhereUniqueInput
    data: XOR<impacto_socialUpdateWithoutOrganizacaoInput, impacto_socialUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type impacto_socialUpdateManyWithWhereWithoutOrganizacaoInput = {
    where: impacto_socialScalarWhereInput
    data: XOR<impacto_socialUpdateManyMutationInput, impacto_socialUncheckedUpdateManyWithoutOrganizacaoInput>
  }

  export type localizacaoUpsertWithWhereUniqueWithoutOrganizacaoInput = {
    where: localizacaoWhereUniqueInput
    update: XOR<localizacaoUpdateWithoutOrganizacaoInput, localizacaoUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<localizacaoCreateWithoutOrganizacaoInput, localizacaoUncheckedCreateWithoutOrganizacaoInput>
  }

  export type localizacaoUpdateWithWhereUniqueWithoutOrganizacaoInput = {
    where: localizacaoWhereUniqueInput
    data: XOR<localizacaoUpdateWithoutOrganizacaoInput, localizacaoUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type localizacaoUpdateManyWithWhereWithoutOrganizacaoInput = {
    where: localizacaoScalarWhereInput
    data: XOR<localizacaoUpdateManyMutationInput, localizacaoUncheckedUpdateManyWithoutOrganizacaoInput>
  }

  export type localizacaoScalarWhereInput = {
    AND?: localizacaoScalarWhereInput | localizacaoScalarWhereInput[]
    OR?: localizacaoScalarWhereInput[]
    NOT?: localizacaoScalarWhereInput | localizacaoScalarWhereInput[]
    id_localizacao?: IntFilter<"localizacao"> | number
    nome?: StringNullableFilter<"localizacao"> | string | null
    latitude?: DecimalNullableFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"localizacao"> | Decimal | DecimalJsLike | number | string | null
    id_organizacao?: IntNullableFilter<"localizacao"> | number | null
  }

  export type voluntariosUpsertWithoutOrganizacaoInput = {
    update: XOR<voluntariosUpdateWithoutOrganizacaoInput, voluntariosUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<voluntariosCreateWithoutOrganizacaoInput, voluntariosUncheckedCreateWithoutOrganizacaoInput>
    where?: voluntariosWhereInput
  }

  export type voluntariosUpdateToOneWithWhereWithoutOrganizacaoInput = {
    where?: voluntariosWhereInput
    data: XOR<voluntariosUpdateWithoutOrganizacaoInput, voluntariosUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type voluntariosUpdateWithoutOrganizacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type voluntariosUncheckedUpdateWithoutOrganizacaoInput = {
    id_voluntarios?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type doadoresUpsertWithoutOrganizacaoInput = {
    update: XOR<doadoresUpdateWithoutOrganizacaoInput, doadoresUncheckedUpdateWithoutOrganizacaoInput>
    create: XOR<doadoresCreateWithoutOrganizacaoInput, doadoresUncheckedCreateWithoutOrganizacaoInput>
    where?: doadoresWhereInput
  }

  export type doadoresUpdateToOneWithWhereWithoutOrganizacaoInput = {
    where?: doadoresWhereInput
    data: XOR<doadoresUpdateWithoutOrganizacaoInput, doadoresUncheckedUpdateWithoutOrganizacaoInput>
  }

  export type doadoresUpdateWithoutOrganizacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutDoadoresNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUpdateManyWithoutDoadoresNestedInput
  }

  export type doadoresUncheckedUpdateWithoutOrganizacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: IntFieldUpdateOperationsInput | number
    alerta?: alertaUncheckedUpdateManyWithoutDoadoresNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutDoadoresNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutDoadoresNestedInput
  }

  export type organizacaoCreateWithoutVoluntariosInput = {
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    alerta?: alertaCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoCreateNestedManyWithoutOrganizacaoInput
    doadores?: doadoresCreateNestedOneWithoutOrganizacaoInput
  }

  export type organizacaoUncheckedCreateWithoutVoluntariosInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_doadores?: number | null
    alerta?: alertaUncheckedCreateNestedManyWithoutOrganizacaoInput
    categoria_doacao?: categoria_doacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrganizacaoInput
    impacto_social?: impacto_socialUncheckedCreateNestedManyWithoutOrganizacaoInput
    localizacao?: localizacaoUncheckedCreateNestedManyWithoutOrganizacaoInput
  }

  export type organizacaoCreateOrConnectWithoutVoluntariosInput = {
    where: organizacaoWhereUniqueInput
    create: XOR<organizacaoCreateWithoutVoluntariosInput, organizacaoUncheckedCreateWithoutVoluntariosInput>
  }

  export type organizacaoCreateManyVoluntariosInputEnvelope = {
    data: organizacaoCreateManyVoluntariosInput | organizacaoCreateManyVoluntariosInput[]
    skipDuplicates?: boolean
  }

  export type organizacaoUpsertWithWhereUniqueWithoutVoluntariosInput = {
    where: organizacaoWhereUniqueInput
    update: XOR<organizacaoUpdateWithoutVoluntariosInput, organizacaoUncheckedUpdateWithoutVoluntariosInput>
    create: XOR<organizacaoCreateWithoutVoluntariosInput, organizacaoUncheckedCreateWithoutVoluntariosInput>
  }

  export type organizacaoUpdateWithWhereUniqueWithoutVoluntariosInput = {
    where: organizacaoWhereUniqueInput
    data: XOR<organizacaoUpdateWithoutVoluntariosInput, organizacaoUncheckedUpdateWithoutVoluntariosInput>
  }

  export type organizacaoUpdateManyWithWhereWithoutVoluntariosInput = {
    where: organizacaoScalarWhereInput
    data: XOR<organizacaoUpdateManyMutationInput, organizacaoUncheckedUpdateManyWithoutVoluntariosInput>
  }

  export type impacto_socialCreateManyCategoria_doacaoInput = {
    id_impacto?: number
    id_organizacao?: number | null
    id_localizacao?: number | null
  }

  export type impacto_socialUpdateWithoutCategoria_doacaoInput = {
    organizacao?: organizacaoUpdateOneWithoutImpacto_socialNestedInput
    localizacao?: localizacaoUpdateOneWithoutImpacto_socialNestedInput
  }

  export type impacto_socialUncheckedUpdateWithoutCategoria_doacaoInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_localizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialUncheckedUpdateManyWithoutCategoria_doacaoInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_localizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type alertaCreateManyDoadoresInput = {
    id_alerta?: number
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    id_organizacao?: number | null
  }

  export type categoria_doacaoCreateManyDoadoresInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_organizacao?: number | null
  }

  export type feedbackCreateManyDoadoresInput = {
    id_feedback?: number
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    id_organizacao?: number | null
  }

  export type organizacaoCreateManyDoadoresInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_voluntarios?: number | null
  }

  export type alertaUpdateWithoutDoadoresInput = {
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    organizacao?: organizacaoUpdateOneWithoutAlertaNestedInput
  }

  export type alertaUncheckedUpdateWithoutDoadoresInput = {
    id_alerta?: IntFieldUpdateOperationsInput | number
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type alertaUncheckedUpdateManyWithoutDoadoresInput = {
    id_alerta?: IntFieldUpdateOperationsInput | number
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoria_doacaoUpdateWithoutDoadoresInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizacao?: organizacaoUpdateOneWithoutCategoria_doacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoUncheckedUpdateWithoutDoadoresInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoUncheckedUpdateManyWithoutDoadoresInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type feedbackUpdateWithoutDoadoresInput = {
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    organizacao?: organizacaoUpdateOneWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutDoadoresInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type feedbackUncheckedUpdateManyWithoutDoadoresInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organizacaoUpdateWithoutDoadoresInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    voluntarios?: voluntariosUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutDoadoresInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateManyWithoutDoadoresInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_voluntarios?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialCreateManyLocalizacaoInput = {
    id_impacto?: number
    id_organizacao?: number | null
    id_doacao?: number | null
  }

  export type impacto_socialUpdateWithoutLocalizacaoInput = {
    organizacao?: organizacaoUpdateOneWithoutImpacto_socialNestedInput
    categoria_doacao?: categoria_doacaoUpdateOneWithoutImpacto_socialNestedInput
  }

  export type impacto_socialUncheckedUpdateWithoutLocalizacaoInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialUncheckedUpdateManyWithoutLocalizacaoInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_organizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type alertaCreateManyOrganizacaoInput = {
    id_alerta?: number
    tipo_alerta?: $Enums.alerta_tipo_alerta | null
    descricao?: string | null
    id_doadores?: number | null
  }

  export type categoria_doacaoCreateManyOrganizacaoInput = {
    id_doacao?: number
    quantidade?: number | null
    tipo_doacao?: $Enums.categoria_doacao_tipo_doacao | null
    validade?: Date | string | null
    id_doadores?: number | null
  }

  export type feedbackCreateManyOrganizacaoInput = {
    id_feedback?: number
    critica?: $Enums.feedback_critica | null
    feedback_descricao?: string | null
    id_doadores?: number | null
  }

  export type impacto_socialCreateManyOrganizacaoInput = {
    id_impacto?: number
    id_localizacao?: number | null
    id_doacao?: number | null
  }

  export type localizacaoCreateManyOrganizacaoInput = {
    id_localizacao?: number
    nome?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
  }

  export type alertaUpdateWithoutOrganizacaoInput = {
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    doadores?: doadoresUpdateOneWithoutAlertaNestedInput
  }

  export type alertaUncheckedUpdateWithoutOrganizacaoInput = {
    id_alerta?: IntFieldUpdateOperationsInput | number
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type alertaUncheckedUpdateManyWithoutOrganizacaoInput = {
    id_alerta?: IntFieldUpdateOperationsInput | number
    tipo_alerta?: NullableEnumalerta_tipo_alertaFieldUpdateOperationsInput | $Enums.alerta_tipo_alerta | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoria_doacaoUpdateWithoutOrganizacaoInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doadores?: doadoresUpdateOneWithoutCategoria_doacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoUncheckedUpdateWithoutOrganizacaoInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutCategoria_doacaoNestedInput
  }

  export type categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoInput = {
    id_doacao?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_doacao?: NullableEnumcategoria_doacao_tipo_doacaoFieldUpdateOperationsInput | $Enums.categoria_doacao_tipo_doacao | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type feedbackUpdateWithoutOrganizacaoInput = {
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    doadores?: doadoresUpdateOneWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutOrganizacaoInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type feedbackUncheckedUpdateManyWithoutOrganizacaoInput = {
    id_feedback?: IntFieldUpdateOperationsInput | number
    critica?: NullableEnumfeedback_criticaFieldUpdateOperationsInput | $Enums.feedback_critica | null
    feedback_descricao?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialUpdateWithoutOrganizacaoInput = {
    localizacao?: localizacaoUpdateOneWithoutImpacto_socialNestedInput
    categoria_doacao?: categoria_doacaoUpdateOneWithoutImpacto_socialNestedInput
  }

  export type impacto_socialUncheckedUpdateWithoutOrganizacaoInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_localizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type impacto_socialUncheckedUpdateManyWithoutOrganizacaoInput = {
    id_impacto?: IntFieldUpdateOperationsInput | number
    id_localizacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type localizacaoUpdateWithoutOrganizacaoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impacto_social?: impacto_socialUpdateManyWithoutLocalizacaoNestedInput
  }

  export type localizacaoUncheckedUpdateWithoutOrganizacaoInput = {
    id_localizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type localizacaoUncheckedUpdateManyWithoutOrganizacaoInput = {
    id_localizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type organizacaoCreateManyVoluntariosInput = {
    id_organizacao?: number
    nome?: string | null
    cnpj: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    id_doadores?: number | null
  }

  export type organizacaoUpdateWithoutVoluntariosInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    alerta?: alertaUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUpdateManyWithoutOrganizacaoNestedInput
    doadores?: doadoresUpdateOneWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateWithoutVoluntariosInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
    alerta?: alertaUncheckedUpdateManyWithoutOrganizacaoNestedInput
    categoria_doacao?: categoria_doacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
    feedback?: feedbackUncheckedUpdateManyWithoutOrganizacaoNestedInput
    impacto_social?: impacto_socialUncheckedUpdateManyWithoutOrganizacaoNestedInput
    localizacao?: localizacaoUncheckedUpdateManyWithoutOrganizacaoNestedInput
  }

  export type organizacaoUncheckedUpdateManyWithoutVoluntariosInput = {
    id_organizacao?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    id_doadores?: NullableIntFieldUpdateOperationsInput | number | null
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