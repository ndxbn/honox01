import { createRoute } from 'honox/factory'

export default createRoute((c) => {
	const name = c.req.query('name') ?? 'Hono'
	return c.json({ message: `Hello, ${name}!` });
})
