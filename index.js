const server = require('./api/server.js');
require('dotenv').config();

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`\n** Server running on port ${port}... **\n`))