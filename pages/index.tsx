import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { client } from '../library/client';
import { HomeSchema } from '../model';
import css from '../styles/Home.module.css';
import { PostCard, Switch, Layout } from '../components';

interface Props {
  post_card: HomeSchema[];
}

const Home: NextPage<Props> = ({ post_card }) => {
  return (
    <div>
      <Head>
        <title>EoinDev Blog | Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Switch />
      <div className={css.contentContainer}>
        <div className={css.category}>
          <h1>Category</h1>
          {}
        </div>
        <div className={css.recentPost}>
          <h1>Recent Post</h1>
          {post_card?.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        {/* <Layout /> */}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const post = `*[_type == "post"]{
  author->{
  name,
 "image": image.asset->url,
  slug,
},
  slug,
  "image": mainImage.asset->url,
  short_description,
  title,
  featured_post,
  recommended_post,
  publishedAt,
  category->{
    name,
    slug,
  },
}`;

  const post_card = await client.fetch(post);

  if (!post_card) {
    return {
      error: true,
      data: [],
    };
  } else {
    return {
      props: {
        post_card,
      },
    };
  }
};
