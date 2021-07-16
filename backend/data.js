import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'darlington',
            email: 'dalingtonuzoefuna@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'john',
            email: 'john@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id: '1', 
            name: 'Nike Slim Shirt', 
            category: 'Shirts',
            image: '/images/img1.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Nike', 
            rating: 1.5,
            numReviews: 1,
            description: 'high quality product'
        },
        {
            _id: '2', 
            name: 'Adidas FIt Shirt', 
            category: 'Shirts',
            image: '/images/img1.jpg',
            price: 100,
            countInStock: 10,
            brand: 'Adidas', 
            rating: 5.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '3', 
            name: 'Lacoste freeShirt', 
            category: 'Shirts',
            image: '/images/img1.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacostae ', 
            rating: 3.5,
            numReviews: 5,
            description: 'high quality product'
        },
        {
            _id: '4', 
            name: 'Nike Slim Shirt', 
            category: 'Shirts',
            image: '/images/img1.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike', 
            rating: 4.5,
            numReviews: 8,
            description: 'high quality product'
        },
        {
            _id: '5', 
            name: 'puma Slim Shirt', 
            category: 'pant',
            image: '/images/img1.jpg',
            price: 65,
            countInStock: 5,
            brand: 'puma', 
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id: '6', 
            name: 'Adidas Fit Pant', 
            category: 'pants',
            image: '/images/img1.jpg',
            price: 139,
            countInStock: 12,
            brand: 'adidas', 
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        },
    ],
};

export default data;