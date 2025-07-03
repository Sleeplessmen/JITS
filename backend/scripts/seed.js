module.exports = async function () {
    await Product.destroy({});

    await Product.createEach([
        { name: 'Laptop', price: 1200, description: 'Powerful laptop' },
        { name: 'Mouse', price: 25, description: 'Wireless mouse' },
        { name: 'Keyboard', price: 40, description: 'Mechanical keyboard' },
    ]);

    console.log('Seed thành công dữ liệu sản phẩm mẫu');
};
