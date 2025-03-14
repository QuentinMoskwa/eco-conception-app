const Category = require('../model/category.model');
const Product = require('../model/product.model');

exports.dataset = async () => {
    const categories = [
        { name: 'Électronique', parentId: null, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Mode', parentId: null, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Maison & Jardin', parentId: null, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Sports', parentId: null, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Livres', parentId: null, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Smartphones', parentId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Vêtements', parentId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Meubles', parentId: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Vélos', parentId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Mangas', parentId: 5, createdAt: new Date(), updatedAt: new Date() },
    ];
    await Category.bulkCreate(categories);

    // Récupération des IDs des catégories
    const categoriesData = await Category.findAll();

    const categoryMap = categoriesData.reduce((map, category) => {
        map[category.name] = category.id;
        return map;
    }, {});

    // Création des produits
    const products = [
        { name: 'iPhone 14', price: 999.99, picture: 'https://picsum.photos/seed/iphone/200/300', categoryId: categoryMap['Smartphones'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Samsung Galaxy S23', price: 899.99, picture: 'https://picsum.photos/seed/galaxy/200/300', categoryId: categoryMap['Smartphones'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'MacBook Pro M2', price: 1999.99, picture: 'https://picsum.photos/seed/macbook/200/300', categoryId: categoryMap['Électronique'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Apple Watch Series 9', price: 429.99, picture: 'https://picsum.photos/seed/applewatch/200/300', categoryId: categoryMap['Électronique'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Jean Levi’s', price: 59.99, picture: 'https://picsum.photos/seed/jean/200/300', categoryId: categoryMap['Vêtements'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Robe Zara', price: 39.99, picture: 'https://picsum.photos/seed/robe/200/300', categoryId: categoryMap['Vêtements'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Nike Air Max', price: 129.99, picture: 'https://picsum.photos/seed/nike/200/300', categoryId: categoryMap['Mode'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Montre Fossil', price: 159.99, picture: 'https://picsum.photos/seed/montre/200/300', categoryId: categoryMap['Mode'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Canapé IKEA', price: 399.99, picture: 'https://picsum.photos/seed/canape/200/300', categoryId: categoryMap['Meubles'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Table en bois', price: 149.99, picture: 'https://picsum.photos/seed/table/200/300', categoryId: categoryMap['Meubles'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Vélo de route Giant', price: 1200.00, picture: 'https://picsum.photos/seed/velo/200/300', categoryId: categoryMap['Vélos'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Casque vélo Kask', price: 150.00, picture: 'https://picsum.photos/seed/casque/200/300', categoryId: categoryMap['Vélos'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'One Piece Vol.1', price: 9.99, picture: 'https://picsum.photos/seed/onepiece/200/300', categoryId: categoryMap['Mangas'], createdAt: new Date(), updatedAt: new Date() },
        { name: 'Naruto Vol.1', price: 8.99, picture: 'https://picsum.photos/seed/naruto/200/300', categoryId: categoryMap['Mangas'], createdAt: new Date(), updatedAt: new Date() },
    ];

    for (let i = 0; i < 5000; i++) {
      products.push({
        name: "Product" + i,
        description: "Product desc" + i,
        price: Math.floor(Math.random() * 1000) / 100,
        categoryId: Math.floor(Math.random() * 10) + 1,
      });
    }

    await Product.bulkCreate(products);
}

