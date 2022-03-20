import React from 'react';

import { GitHubData } from '../../pages';

import Header from './Header';
import Stats from './Stats';
import Conatcts from './Conatcts';

import { senteceVariants, imageVariants, wordAnimation } from '../../helpers';

import {
  ContnetWrapper,
  Avatar,
  ContentMain,
  ContentText,
} from './ContentStyles';

const Content: React.FC<{ data: GitHubData }> = ({ data }) => {
  const bio = data.bio ? data.bio : 'This profile has no bio';
  const location = data.location ? data.location : 'Not Available';

  const twitter = data.twitter_username
    ? data.twitter_username
    : 'Not Available';
  const company = data.company ? data.company : 'Not Available';

  return (
    <ContnetWrapper>
      <Avatar
        src={data.avatar_url}
        alt={data.login}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        key={data.id}
      />
      <Header
        id={data.id}
        login={data.login}
        created_at={data.created_at}
        name={data.name}
      />
      <ContentMain>
        <ContentText
          variants={senteceVariants}
          initial="hidden"
          animate="visible"
          key={data.id}
        >
          {wordAnimation(bio)}
        </ContentText>
        <Stats
          repos={data.public_repos}
          followers={data.followers}
          following={data.following}
        />
        <Conatcts
          blog={data.blog}
          company={data.company}
          location={data.location}
          twitter={data.twitter_username}
          id={data.id}
        />
      </ContentMain>
    </ContnetWrapper>
  );
};

export default Content;
