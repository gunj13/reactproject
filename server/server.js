const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Schema and model for blog posts
const blogPostSchema = new mongoose.Schema({
  title: String,
  previewText: String,
  content: String,
  image: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// API routes
app.get('/api/blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    console.log(blogPosts)
    res.json(blogPosts || []); // Send an empty array if there are no blog posts
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/api/blog-posts/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blogPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));