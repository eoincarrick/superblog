export interface AuthorSchema {
  name: string;
  slug: {
    _type: string;
    current: string;
  };
  image: string;
  bio: string;
  _id: string;
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
    body: [object];
    title: string;
    featured_post: boolean;
    recommended_post: boolean;
    publishedAt: string;
  };
}
