import productService from '~/services/productService'
import SuccessResponse from '~/utils/SuccessResponse'
import asyncHandler from '~/utils/asyncHandler'

const createNew = asyncHandler(async (req, res) => {
  new SuccessResponse({
    message: 'Create new product successfully',
    metadata: {
      product: await productService.createNew(req.body)
    }
  }).send(res)
})

const getProduct = asyncHandler(async (req, res) => {
  new SuccessResponse({
    message: 'Get product successfully',
    metadata: {
      product: await productService.getProduct(req.params.id)
    }
  }).send(res)
})

const getProducts = asyncHandler(async (req, res) => {
  new SuccessResponse({
    message: 'Get products successfully',
    metadata: {
      product: await productService.getProducts(req.query)
    }
  }).send(res)
})

const updateProduct = asyncHandler(async (req, res) => {
  new SuccessResponse({
    message: 'Update product successfully',
    metadata: {
      product: await productService.updateProduct(req.params.id, req.body)
    }
  }).send(res)
})

const deleteProduct = asyncHandler(async (req, res) => {
  new SuccessResponse({
    message: 'Delete product successfully',
    metadata: {
      product: await productService.deleteProduct(req.params.id)
    }
  }).send(res)
})

export default {
  createNew,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct
}