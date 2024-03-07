import React from "react";
import BlogCard from "../../components/UI/BlogCard";
import styles from "./Blog.module.css";
import { blogs } from "./data/BlogData";

const Blog = () => {

  return (
    <div className={styles.blogPage}>
      <h1>Our Latest Blogs</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={process.env.PUBLIC_URL + "/images/office.jpg"}
            title={blog.title}
            content={blog.content.slice(0,200)}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
