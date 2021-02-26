const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Blog = require('../models/blog')
const initialBlog = [
  {
    title: 'Docker and Kubernetes',
    author: 'Bret Fisher',
    url: 'https://www.bretfisher.com/',
    likes: 5
  }
]

test('identifier is named id', async () => {
  await Blog.deleteMany({})
  const blogObject = new Blog(initialBlog[0])
  await blogObject.save()
  await api
  expect(blogObject.id).toBeDefined()
})

afterAll(() => {
  mongoose.connection.close()
})