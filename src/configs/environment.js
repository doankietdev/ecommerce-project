import 'dotenv/config'
import ms from 'ms'
import { DEV_ENV, PROD_ENV } from '~/utils/constants'

const {
  NODE_ENV,
  MONGODB_URI,
  DATABASE_NAME,
  APP_HOST,
  APP_PORT,
  BRAND_NAME,
  CLIENT_URL,
  CLIENT_OTP_FORM_PATH,
  CLIENT_PAID_ORDERS_PATH,
  EMAIL_VERIFICATION_TOKEN_LIFE,
  ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_LIFE,
  PASSWORD_RESET_OTP_LIFE,
  PASSWORD_RESET_TOKEN_LIFE,
  NEW_PASSWORD_NOT_SAME_OLD_PASSWORD_TIME,
  MAX_SESSIONS,
  EMAIL_APP_PASSWORD,
  EMAIL_NAME,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  GHN_TOKEN,
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  CURRENCY_FREAKS_API_KEY,
  MOMO_PARTNER_CODE,
  MOMO_ACCESS_KEY,
  MOMO_SECRET_KEY,
  MOMO_ORDER_EXPIRE_TIME,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_USER,
  REDIS_PASSWORD,
  MAX_AVATAR_SIZE
} = process.env

export const BUILD_MODE = NODE_ENV !== DEV_ENV && NODE_ENV !== PROD_ENV ? DEV_ENV : NODE_ENV

export const APP = {
  HOST: APP_HOST || 'localhost',
  PORT: APP_PORT || 5600,
  BRAND_NAME: BRAND_NAME || 'Digital Shop',
  MAX_AVATAR_SIZE: +MAX_AVATAR_SIZE || 5242880
}

export const CLIENT = {
  URL: CLIENT_URL || 'http://localhost:3000',
  CLIENT_OTP_FORM_PATH: CLIENT_OTP_FORM_PATH || '/auth/password-reset-otp',
  PAID_ORDERS_PATH: CLIENT_PAID_ORDERS_PATH || '/user/purchase?status=PAID'
}

export const MONGODB = {
  URI: MONGODB_URI || 'mongodb://localhost:27017/', DATABASE_NAME: DATABASE_NAME || ''
}

export const AUTH = {
  EMAIL_VERIFICATION_TOKEN_LIFE: ms(EMAIL_VERIFICATION_TOKEN_LIFE || '15m'),
  ACCESS_TOKEN_LIFE: ACCESS_TOKEN_LIFE || '1h',
  REFRESH_TOKEN_LIFE: REFRESH_TOKEN_LIFE || '30 days',
  PASSWORD_RESET_OTP_LIFE: ms(PASSWORD_RESET_OTP_LIFE || '2m'),
  PASSWORD_RESET_TOKEN_LIFE: ms(PASSWORD_RESET_TOKEN_LIFE || '2m'),
  NEW_PASSWORD_NOT_SAME_OLD_PASSWORD_TIME: ms(NEW_PASSWORD_NOT_SAME_OLD_PASSWORD_TIME || '90 days'),
  MAX_SESSIONS: +MAX_SESSIONS || 5,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET
}

export const EMAIL = {
  APP_PASSWORD: EMAIL_APP_PASSWORD, NAME: EMAIL_NAME
}

export const CLOUDINARY = {
  NAME: CLOUDINARY_NAME, API_KEY: CLOUDINARY_API_KEY, API_SECRET: CLOUDINARY_API_SECRET
}

export const PARTNERS = {
  GHN: {
    TOKEN: GHN_TOKEN
  },
  PAYPAL: {
    CLIENT_ID: PAYPAL_CLIENT_ID, SECRET_KEY: PAYPAL_CLIENT_SECRET
  },
  CURRENCY_FREAKS: {
    API_KEY: CURRENCY_FREAKS_API_KEY
  },
  MOMO: {
    PARTNER_CODE: MOMO_PARTNER_CODE,
    ACCESS_KEY: MOMO_ACCESS_KEY,
    SECRET_KEY: MOMO_SECRET_KEY,
    ORDER_EXPIRE_TIME: Number(MOMO_ORDER_EXPIRE_TIME) || 30
  }
}

export const REDIS = {
  HOST: REDIS_HOST,
  PORT: REDIS_PORT,
  PASSWORD: REDIS_PASSWORD || null,
  USER: REDIS_USER || null
}