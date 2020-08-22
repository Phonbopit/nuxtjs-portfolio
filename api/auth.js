const express = require('express')
const cors = require('cors')

const mockToken =
  'e9f83342e47d658b9c64a02fc6503c2736d333d151595b273b525653ba1cebc2'
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@doe.com',
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/me', (req, res) => {
  const headers = req.headers.authorization

  const token = headers && headers.split(' ')[1] // Bearer <TOKEN>

  if (token === mockToken) {
    return res.json({
      user: mockUser,
    })
  } else {
    return res.status(401).json({ message: 'Invalid token' })
  }
})
app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'admin@admin.com' && password === '123456') {
    return res.json({
      user: mockUser,
      token: mockToken,
    })
  } else {
    return res.status(401).json({ message: 'Invalid password' })
  }
})

module.exports = {
  path: '/api',
  handler: app,
}
