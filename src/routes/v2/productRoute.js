import express from 'express'
import productV2Controller from '~/controllers/productV2Controller'
import { redisCachingMiddleware } from '~/middlewares/redis.middleware'
import { INVALID_REDIS_KEY } from '~/utils/constants'
import productV2Validation from '~/validations/productV2Validation'

const router = express.Router()

router.use(redisCachingMiddleware({ EX: 21600, NX: false }, false, INVALID_REDIS_KEY.INVALID_CACHE_PRODUCT))

router
  .route('/get-by-slug/:slug')
  .get(productV2Validation.getProductBySlug, productV2Controller.getProductBySlug)

router
  .route('/search')
  .get(productV2Validation.search, productV2Controller.search)

router.route('/big-discount').get(productV2Controller.getBigDiscountProducts)

router.route('/').get(productV2Validation.getProducts, productV2Controller.getProducts)

router
  .route('/:id')
  .get(productV2Validation.getProduct, productV2Controller.getProduct)

export default router
