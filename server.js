import http from 'http';
import path from 'path';
import fs from 'fs';
import colors from 'colors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config();
const port = process.env.SERVER_PORT || 505;

http.createServer((req,res) => {
 
    if (req.url === '/') {
        const homepage = fs.readFileSync(path.join(__dirname,'/public/index.html'))
        res.writeHead(200,{"content-type":"text/html"})
        res.write(homepage)
        res.end();
    } else if (req.url === '/home') {
        const homepage = fs.readFileSync(path.join(__dirname,'/public/index.html'))
        res.writeHead(200,{"content-type":"text/html"})
        res.write(homepage)
        res.end();
    } else if (req.url === '/about') {
    const aboutpage = fs.readFileSync(path.join(__dirname,'/public/about.html'))
    res.writeHead(200,{"content-type":"text/html"})
    res.write(aboutpage)
    res.end();
    } else if (req.url === '/contact') {
    const contactpage = fs.readFileSync(path.join(__dirname,'/public/contact.html'))
    res.writeHead(200,{"content-type":"text/html"})
    res.write(contactpage)
    res.end();
    } else if (req.url === '/course') {
   const coursepage = fs.readFileSync(path.join(__dirname,'/public/course.html'))
    res.writeHead(200,{"content-type":"text/html"})
    res.write(coursepage)
    res.end();
    } else if (req.url === '/ashraful') {
        let body = '';

        req.on('data',(chunk)=> {
            body += chunk.toString();
        }) 
        req.on('end', () => {
        res.writeHead(200,{"content-type":"text/html"})
         res.write(body)
         res.end();
        })


         
         }
    else {
    res.writeHead(200,{"content-type":"text/html"})
    res.write('404 page not found')
    res.end();
}
   
}).listen(port,() => {
    console.log(`server running on port ${port}`.bgGreen.black);
})