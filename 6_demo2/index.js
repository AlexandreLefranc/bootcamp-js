import express from 'express'
const app = express()
app.use(express.urlencoded({ extended: true }))

const people = [
	{ name: 'Flavio' },
	{ name: 'Roger' }
  ]

app.get('/', (req, res) => {
	res.send(`
	  <html>
		<body>
		  <h1>Enter a new person:</h1>
		  <form action="/person" method="POST">
			<input type="text" name="name" />
			<input type="submit">
		  </form>
		  <h2>List of people:</h2>
		  <ul>
		  ${people.map(person => `<li>${person.name}</li>`).join('')}
		  </ul>
		</body>
	  </html>
	`)
  })

app.post('/person', (req, res) => {
	console.log('Received a new person data!')
  
	const name = req.body.name
	people.push({ name: name })
	res.redirect('/')
	console.log(name)
  })
app.listen(3000, () => console.log('Server ready'))