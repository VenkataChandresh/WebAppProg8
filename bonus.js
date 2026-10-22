
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

// Ingredients for Chocolate Cake
const ingredients = [
    { name: 'Flour', amount: 2, unit: 'cups' },
    { name: 'Sugar', amount: 1, unit: 'cup' },
    { name: 'Cocoa Powder', amount: 0.5, unit: 'cup' },
    { name: 'Eggs', amount: 2, unit: 'pieces' },
    { name: 'Milk', amount: 1, unit: 'cup' }
]

// Track which ingredients have been used
const used = [false, false, false, false, false]

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write('<html><head><title>Chocolate Cake</title></head>')
    res.write('<body>')
    res.write('<h1>Chandresh lists an ingredient</h1>')
    res.write('<h2>Chocolate Cake Ingredients</h2>')

    // Generate a random index
    let index = Math.floor(Math.random() * ingredients.length)

    // Find an unused ingredient
    if (used.every(value => value === true)) {
        res.write('<p>nothing left</p>')
    } else {

        // Move to the next unused ingredient
        while (used[index] === true) {
            index = (index + 1) % ingredients.length
        }

        // Get the ingredient
        const ingredient = ingredients[index]

        // Mark ingredient as used
        used[index] = true

        res.write(`<p>Index: ${index}</p>`)
        res.write(`<p>Ingredient: ${ingredient.name}</p>`)
        res.write(`<p>Amount: ${ingredient.amount} ${ingredient.unit}</p>`)
    }

    res.end('</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
