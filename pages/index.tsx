import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from '../components/header/Header';
import SearchBar from '../components/search-bar/SearchBar';
import Content from '../components/contetn/Content';

export interface GitHubData {
  id: number;
  name: string;
  login: string;
  avatar_url: string | undefined;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  location: string | null;
  twitter_username: string | null;
}

const Home: NextPage<{
  theme: string;
  changeTheme: () => void;
  initialData: GitHubData;
}> = ({ theme, changeTheme, initialData }) => {
  const github = useSelector((state: RootState) => state.github);

  const data: GitHubData | [] = github.data ? github.data : initialData;
  return (
    <>
      <Head>
        <title>GitHub user search app</title>

        <meta
          name="description"
          content="GitHub user search app with next js"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <section>
          <Header theme={theme} onChangeTheme={changeTheme} />
          <SearchBar />

          <Content data={data} />
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/octocat');

  const resData = await res.json();

  const {
    name,
    login,
    avatar_url,
    followers,
    following,
    public_repos,
    created_at,
    bio,
    blog,
    company,
    location,
    twitter_username,
    id,
  }: GitHubData = resData;

  const initialData = {
    id,
    name,
    login,
    avatar_url,
    followers,
    following,
    public_repos,
    created_at,
    bio,
    blog,
    company,
    location,
    twitter_username,
  };

  return {
    props: {
      initialData,
    },
  };
};

export default Home;
