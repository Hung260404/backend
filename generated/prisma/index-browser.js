
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.0
 * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
 */
Prisma.prismaVersion = {
  client: "4.16.0",
  engine: "b20ead4d3ab9e78ac112966e242ded703f4a052c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  icon_url: 'icon_url'
};

exports.Prisma.ConversationsScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  provider_id: 'provider_id',
  last_message: 'last_message',
  updated_at: 'updated_at'
};

exports.Prisma.MessagesScalarFieldEnum = {
  id: 'id',
  conversation_id: 'conversation_id',
  sender_id: 'sender_id',
  content: 'content',
  is_read: 'is_read'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  message: 'message',
  type: 'type',
  is_read: 'is_read'
};

exports.Prisma.Payout_requestsScalarFieldEnum = {
  id: 'id',
  provider_id: 'provider_id',
  amount: 'amount',
  bank_info: 'bank_info',
  status: 'status'
};

exports.Prisma.ProvidersScalarFieldEnum = {
  user_id: 'user_id',
  business_name: 'business_name',
  description: 'description',
  address: 'address',
  latitude: 'latitude',
  longitude: 'longitude',
  kyc_status: 'kyc_status',
  trust_score: 'trust_score'
};

exports.Prisma.SchedulesScalarFieldEnum = {
  id: 'id',
  provider_id: 'provider_id',
  day_of_week: 'day_of_week',
  start_time: 'start_time',
  end_time: 'end_time',
  is_day_off: 'is_day_off'
};

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.VouchersScalarFieldEnum = {
  id: 'id',
  code: 'code',
  discount_type: 'discount_type',
  value: 'value',
  min_order_price: 'min_order_price',
  owner_id: 'owner_id'
};

exports.Prisma.WalletsScalarFieldEnum = {
  provider_id: 'provider_id',
  balance: 'balance',
  holding_balance: 'holding_balance'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.notifications_type = {
  BOOKING: 'BOOKING',
  SYSTEM: 'SYSTEM',
  PROMOTION: 'PROMOTION'
};

exports.payout_requests_status = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.providers_kyc_status = {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

exports.users_role = {
  CUSTOMER: 'CUSTOMER',
  PROVIDER: 'PROVIDER',
  ADMIN: 'ADMIN'
};

exports.vouchers_discount_type = {
  PERCENT: 'PERCENT',
  FIXED: 'FIXED'
};

exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
