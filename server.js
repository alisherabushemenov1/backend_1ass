const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware for JSON
app.use(express.json());

// Read data 
function readData() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { objects: [] };
  }
}

// Write data 
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// GET /
app.get('/', (req, res) => {
  res.send('Server is running');
});

// GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// GET /time
app.get('/time', (req, res) => {
  const currentTime = new Date();
  res.send(currentTime.toString());
});

// GET /status
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK' });
});



// GET /objects
app.get('/objects', (req, res) => {
  const data = readData();
  res.json(data.objects);
});

// POST /objects 
app.post('/objects', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const data = readData();
  
  const newId = data.objects.length > 0 
    ? Math.max(...data.objects.map(obj => obj.id)) + 1 
    : 1;

  const newObject = {
    id: newId,
    name: name
  };

  data.objects.push(newObject);
  writeData(data);

  res.status(201).json(newObject);
});

// PUT /objects/:id 
app.put('/objects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const data = readData();
  const objectIndex = data.objects.findIndex(obj => obj.id === id);

  if (objectIndex === -1) {
    return res.status(404).json({ error: 'Object not found' });
  }

  data.objects[objectIndex].name = name;
  writeData(data);

  res.json(data.objects[objectIndex]);
});

// DELETE /objects/:id 
app.delete('/objects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = readData();
  
  const objectIndex = data.objects.findIndex(obj => obj.id === id);

  if (objectIndex === -1) {
    return res.status(404).json({ error: 'Object not found' });
  }

  data.objects.splice(objectIndex, 1);
  writeData(data);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});