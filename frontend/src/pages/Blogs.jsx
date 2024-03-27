import React, { useState, useEffect } from 'react';
import Header from './Header';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blogs'); 
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
              {loading ? (
                <p>Loading...</p>
              ) : (
                posts.map(post => (
                  <BlogPost key={post._id} post={post} /> // Assuming your post object has an '_id' property
                ))
              )}
            </div>
            <div className="md:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
