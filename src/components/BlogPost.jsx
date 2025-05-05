import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(post => post.id === parseInt(id));
    
    if (!post) {
        return (
            <div className="blog-post-not-found">
                <h2>Blog post not found</h2>
                <Link to="/blog" className="back-to-blog">Back to Blog</Link>
            </div>
        );
    }
    
    return (
        <div className="blog-post-container">
            <div className="blog-post-header">
                <span className="blog-post-day">Day {post.day}</span>
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-date">{post.date}</p>
            </div>
            
            <div className="blog-post-cover">
                <img src={post.coverImage} alt={post.title} />
            </div>
            
            <div className="blog-post-content">
                {post.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            
            {post.images && post.images.length > 0 && (
                <div className="blog-post-gallery">
                    <h3>Photo Gallery</h3>
                    <div className="blog-post-images">
                        {post.images.map((image, index) => (
                            <div className="blog-post-image" key={index}>
                                <img src={image.url} alt={image.caption || `Image ${index + 1}`} />
                                {image.caption && <p className="image-caption">{image.caption}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="blog-post-navigation">
                {post.id > 1 && (
                    <Link to={`/blog/${post.id - 1}`} className="prev-post">
                        ← Previous Day
                    </Link>
                )}
                <Link to="/blog" className="back-to-blog">
                    Back to All Posts
                </Link>
                {post.id < blogPosts.length && (
                    <Link to={`/blog/${post.id + 1}`} className="next-post">
                        Next Day →
                    </Link>
                )}
            </div>
        </div>
    );
};

export default BlogPost;