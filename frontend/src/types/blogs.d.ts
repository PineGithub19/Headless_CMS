// Root response type
export interface BlogApiResponse {
  meta: {
    total_count: number;
  };
  items: BlogItem[];
}

// Blog item type
export interface BlogItem {
  id: number;
  meta: {
    first_published_at: string; // ISO date string
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
  };
  title: string;
}
