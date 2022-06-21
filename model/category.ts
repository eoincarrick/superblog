export interface Category {
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  image: string;
  body: string;
  id: number;
  post: {
    author: {
      name: string;
      slug: {
        _type: string;
        current: string;
      };
      image: string;
    };
    slug: {
      _type: string;
      current: string;
    };
    image: string;
    category: {
      name: string;
      slug: {
        _type: string;
        current: string;
      };
    };
    body: string;
    title: string;
    featured_post: boolean;
    recommended_post: boolean;
    publishedAt: string;
  };
}
