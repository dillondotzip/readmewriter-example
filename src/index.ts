import { Hono } from 'hono'
import { getRandomInt } from './lib/helpers'

const app = new Hono()

app
.get('/', (c) => {
  return c.text('Hello Hono!')
})
.get('/random', (c) => {
  return c.text(getRandomInt(1, 50).toString())
})



export default app
