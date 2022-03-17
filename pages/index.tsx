import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/header/Header';
import SearchBar from '../components/search-bar/SearchBar';

const Home: NextPage<{
  theme: string;
  changeTheme: () => void;
}> = ({ theme, changeTheme }) => {
  return (
    <>
      <Head>
        <title>GitHub user search app</title>

        <meta
          name="description"
          content="GGitHub user search app with next js"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <section>
          <Header theme={theme} onChangeTheme={changeTheme} />
          <SearchBar />
        </section>
      </main>
    </>
  );
};

export default Home;
