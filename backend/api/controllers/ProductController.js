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
            const { name, price, description } = req.body;
            if (!name || !price || !description) {
                return res.status(400).json({
                    success: false,
                    message: 'Name, price, and description are required'
                });
            }
            if (typeof price !== 'number' || price < 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Price must be a non-negative number'
                });
            }
            const existingProduct = await Product.findOne({ name });
            if (existingProduct) {
                return res.status(400).json({
                    success: false,
                    message: 'Product with this name already exists'
                });
            }

            const newProduct = await Product.create({ name, price, description }).fetch();

            return res.status(201).json({
                success: true,
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
    update: async function (req, res) {
        try {
            const { name, price, description } = req.body;

            const existingProduct = await Product.findOne({ id: req.params.id });
            if (!existingProduct) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }

            const isNameValid = typeof name === 'string' && name.trim() !== '';
            const isPriceValid = price !== undefined;
            const isDescriptionValid = typeof description === 'string' && description.trim() !== '';

            if (!isNameValid && !isPriceValid && !isDescriptionValid) {
                return res.status(400).json({
                    success: false,
                    message: 'At least one valid field (name, price, or description) must be provided for update'
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

            if (isDescriptionValid) {
                updatedFields.description = description.trim();
            }

            const updatedProduct = await Product.updateOne({ id: req.params.id }).set(updatedFields);

            if (!updatedProduct) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }

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

