export interface HomeSchema {
  author: {
    name: string;
    image: string;
    slug: {
      _type: string;
      current: string;
    };
  };
  slug: {
    _type: string;
    current: string;
  };
  image: string;
  short_description: string;
  title: string;
  featured_post: boolean;
  recommended_post: boolean;
  publishedAt: string;
  category: {
    name: string;
    slug: {
      _type: string;
      current: string;
    };
  };
}
