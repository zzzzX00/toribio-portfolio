import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Blog.css';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    return (
        <div className="blog-container">
            <motion.h1 
                className="blog-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Educational Tour Blog
            </motion.h1>
            
            <motion.p 
                className="blog-subtitle"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Follow my journey through the educational tour
            </motion.p>
            
            <div className="blog-grid">
                {blogPosts.map((post, index) => (
                    <motion.div 
                        className="blog-card" 
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="blog-card-image">
                            <img src={post.coverImage} alt={post.title} />
                            <div className="blog-day-badge">Day {post.day}</div>
                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">{post.title}</h3>
                            <p className="blog-card-excerpt">{post.excerpt}</p>
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link to={`/blog/${post.id}`} className="read-more-link">
                                    Read More
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;