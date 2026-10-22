const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<h1>Cities I Would Like to Visit</h1>')

  res.write('<table border="1" cellpadding="5" cellspacing="0">')

  res.write('<tr>')
  res.write('<th>City</th>')
  res.write('<th>Reason</th>')
  res.write('<th>Distance From Zurich</th>')
  res.write('<th>Travel Cost</th>')
  res.write('</tr>')

  res.write('<tr>')
  res.write('<td>Tokyo</td>')
  res.write('<td>Technology and culture</td>')
  res.write('<td>Approx. 5,900 miles</td>')
  res.write('<td>Approx. $900</td>')
  res.write('</tr>')

  res.write('<tr>')
  res.write('<td>Paris</td>')
  res.write('<td>Architecture and landmarks</td>')
  res.write('<td>Approx. 300 miles</td>')
  res.write('<td>Approx. $150</td>')
  res.write('</tr>')

  res.write('<tr>')
  res.write('<td>Dubai</td>')
  res.write('<td>Modern architecture</td>')
  res.write('<td>Approx. 2,900 miles</td>')
  res.write('<td>Approx. $500</td>')
  res.write('</tr>')

  res.write('<tr>')
  res.write('<td>Singapore</td>')
  res.write('<td>Food and attractions</td>')
  res.write('<td>Approx. 6,400 miles</td>')
  res.write('<td>Approx. $800</td>')
  res.write('</tr>')

  res.write('</table>')

  res.end('</body></html>')
})


server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})