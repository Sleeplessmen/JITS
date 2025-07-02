/* eslint-disable indent */
/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find: async function (req, res) {
        try {
            const products = await Product.find();
            return res.json({
                success: true,
                message: 'Products retrieved successfully',
                data: products
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },
    findOne: async function (req, res) {
        try {
            const product = await Product.findOne({ id: req.params.id });
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }
            return res.json({
                success: true,
                message: 'Product retrieved successfully',
                data: product
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },
    create: async function (req, res) {
        try {
            const { name, price } = req.body;
            if (!name || !price) {
                return res.status(400).json({
                    sucess: false,
                    message: 'Name and price are required'
                });
            }
            if (typeof price !== 'number' || price < 0) {
                return res.status(400).json({
                    sucess: false,
                    message: 'Price must be a non-negative number'
                });
            }
            const existingProduct = await Product.findOne({ name });
            if (existingProduct) {
                return res.status(400).json({
                    sucess: false,
                    message: 'Product with this name already exists'
                });
            }

            const newProduct = await Product.create({ name, price }).fetch();

            return res.status(201).json({
                sucess: true,
                message: 'Product created successfully',
                data: newProduct
            });
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
    },
    // This method updates a product by its ID.
    // It allows updating either the name or the price, or both.
    // If neither is provided, it returns a 400 error.
    // If the product does not exist, it returns a 404 error.
    // If the price is provided, it must be a non-negative number.
    // If the name is provided, it must be a non-empty string.
    // If the update is successful, it returns the updated product.
    // If an error occurs, it returns a 500 error with the error message.
    update: async function (req, res) {
        try {

            const { name, price } = req.body;

            const existingProduct = await Product.findOne({ id: req.params.id });
            if (!existingProduct) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }

            const isNameValid = typeof name === 'string' && name.trim() !== '';
            const isPriceValid = price !== undefined;

            if (!isNameValid && !isPriceValid) {
                return res.status(400).json({
                    success: false,
                    message: 'At least one valid field (name or price) must be provided for update'
                });
            }

            const updatedFields = {};

            if (isNameValid) {
                updatedFields.name = name.trim();
            }

            if (isPriceValid) {
                if (typeof price !== 'number' || price < 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'Price must be a non-negative number'
                    });
                }
                updatedFields.price = price;
            }

            const updatedProduct = await Product.updateOne({ id: req.params.id }).set(updatedFields);

            return res.json({
                success: true,
                message: 'Product updated successfully',
                data: updatedProduct
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },
    destroy: async function (req, res) {
        try {
            const deletedProduct = await Product.destroyOne({ id: req.params.id });
            if (!deletedProduct) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
};

