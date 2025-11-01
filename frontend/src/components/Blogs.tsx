import { useEffect, useState } from "react";

import type { BlogApiResponse } from "../types/blogs";
import BlogItemComponent from "./BlogItem";
import styles from "./Blog.module.css";

function BlogPage() {
  const [data, setData] = useState<BlogApiResponse>();
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v2/pages/?type=blog.BlogPage"
        );

        if (response.ok) {
          const res: BlogApiResponse = await response.json();
          setData(res);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsButtonClicked(false);
      }
    };

    if (!isButtonClicked) return;

    fetchBlogs();
  }, [isButtonClicked]);

  return (
    <div className={styles.blog}>
      {data && data.items.map((item) => <BlogItemComponent data={item} />)}
      {!data && <p>No data</p>}
      <button onClick={() => setIsButtonClicked(true)}>Fetch Blogs</button>
    </div>
  );
}

export default BlogPage;
