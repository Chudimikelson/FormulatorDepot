import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Chudi Mikelson',
    email: 'chudimikelson@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Cheche Mikelson',
    email: 'chemikelson@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
