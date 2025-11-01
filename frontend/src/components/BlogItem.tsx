import type { BlogItem } from "../types/blogs";

const BlogItemComponent: React.FC<{ data: BlogItem }> = ({ data }) => {
  return (
    <div>
      <h2>
        {data.title} - {data.id}
      </h2>
      <ul>
        <li>
          <p>{data.meta.first_published_at}</p>
        </li>
        <li>
          <p>{data.meta.detail_url}</p>
        </li>
        <li>
          <p>{data.meta.html_url}</p>
        </li>
        <li>
          <p>{data.meta.slug}</p>
        </li>
        <li>
          <p>{data.meta.type}</p>
        </li>
      </ul>
    </div>
  );
};

export default BlogItemComponent;
