const http = require('http');
const fs = require('fs');
const path = require('path');
const process = require('process');

const replicaId = Math.random().toString(36).substring(7);

const server = http.createServer((req, res) => {

  if (req.method === 'GET') {
    const urlParts = req.url.split('/');

    switch (urlParts[1]) {
      case 'replicaid':
        console.log('processing path: ' + req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('replicaId: ' + replicaId);
        break;
      case 'print-env':
        console.log('processing path: ' + req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(listEnv());
        break;
      case 'persistent-data':
        console.log('processing path: ' + req.url);

        const extname = path.extname(urlParts[2]);
        switch (extname) {
          case '.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            break;
          default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            break;
        }
        res.end(readFile('/persistent-data', urlParts[2]));
        break;
      case 'lorem-ipsum':
        console.log('processing path: ' + req.url);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(readFile('./src', 'lorem-ipsum-node.html'));
        break;
      default:
        console.error('unsupported path: ' + req.url);
        res.writeHead(404);
        res.end();
    }
  }
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});

function readFile(folder, filename) {
  let loremIpsum = '';

  try {
    loremIpsum = fs.readFileSync(`${folder}/${filename}`, 'utf8');
  } catch (err) {
    console.error(`readFile: error reading file ${folder}/${filename}: ${err}`);
  }

  console.log('readFile:\n' + loremIpsum)
  return loremIpsum;
}

function listEnv() {
  let envVars = '';
  for (const envVar in process.env) {
    envVars += `${envVar}=${process.env[envVar]}\n`;
  }

  console.log('listEnv:\n' + envVars)
  return envVars;
}