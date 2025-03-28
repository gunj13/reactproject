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
// app.get('/api/blog-posts', async (req, res) => {
//   try {
//     const blogPosts = await BlogPost.find();
//     res.json(blogPosts || []); // Send an empty array if there are no blog posts
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// ORIGINAL 

//NEW
app.get('/api/blog-posts', async (req, res) => {
  res.json([
    {
      title: "Unlocking Business Growth with Lean Six Sigma",
      previewText: "A Strategic Approach to Excellence",
      content: `In today's competitive landscape, businesses—whether MSMEs, startups, or large corporations—must navigate challenges with agility, efficiency, and a strong customer focus.

      The ability to transform obstacles into opportunities is what defines successful enterprises. This is where Lean Six Sigma consultancy plays a pivotal role in driving sustainable growth and operational excellence.

      ## The Power of Lean Six Sigma in Business Transformation
      Lean Six Sigma is more than just a process improvement methodology; it is a philosophy that empowers organizations to optimize resources, reduce waste, and enhance customer satisfaction.

      By strategically applying data-driven decision-making and change management principles, businesses can achieve long-term success while continuously improving their operational capabilities.
      
      ## Achieve Excellence with Lean Six Sigma
      Businesses that adopt Lean Six Sigma unlock higher efficiency, profitability, and customer loyalty.`,
      image: "https://www.100pceffective.com/examples-of-projects-for-lean-six-sigma-training/",
    }
  ]);
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