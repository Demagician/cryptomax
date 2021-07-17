import bcrypt from 'bcryptjs';

const data = {
    users: [
        {  
            name: 'darlington',
            username: 'admin',
            email: 'admin@gmail.com',
            mobile: '+199999999',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'john',
            username: 'john22',
            email: 'son@gmail.com',
            mobile: '09039152449',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ]
}

export default data;