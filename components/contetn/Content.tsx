import React from 'react';

import { GitHubData } from '../../pages';

import LocationIcon from '../../assets/icon-location.svg';
import WebsiteIcon from '../../assets/icon-website.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import CompanyIcon from '../../assets/icon-company.svg';

import {
  ContnetWrapper,
  Avatar,
  ContentMain,
  ContentHeader,
  UserName,
  ContentText,
  StatsWrapper,
  Stat,
  ContactWrapper,
  Conctact,
} from './ContentStyles';

const Content: React.FC<{ data: GitHubData }> = ({ data }) => {
  const date = new Date(data.created_at);
  const month = date.toLocaleString('en-us', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <ContnetWrapper>
      <Avatar src={data.avatar_url} alt="octocat" />
      <ContentHeader>
        <UserName>
          <h2>{data.name}</h2>
          <p>@{data.login}</p>
        </UserName>
        <ContentText>
          Joined {day} {month} {year}
        </ContentText>
      </ContentHeader>
      <ContentMain>
        <ContentText>
          {data.bio ? data.bio : 'This profile has no bio'}
        </ContentText>
        <StatsWrapper>
          <Stat>
            <p>Repos</p>
            <h3>{data.public_repos}</h3>
          </Stat>
          <Stat>
            <p>Followers</p>
            <h3>{data.followers}</h3>
          </Stat>
          <Stat>
            <p>Following</p>
            <h3>{data.following}</h3>
          </Stat>
        </StatsWrapper>
        <ContactWrapper>
          <div>
            <Conctact isAvailable={data.location === null}>
              <LocationIcon />
              <p>{data.location ? data.location : 'Not Available'}</p>
            </Conctact>
            <Conctact isAvailable={data.blog === null || !data.blog}>
              <WebsiteIcon />
              {data.blog ? (
                <a href={data.blog}>{data.blog}</a>
              ) : (
                <p>Not Available</p>
              )}
            </Conctact>
          </div>
          <div>
            <Conctact isAvailable={data.twitter_username === null}>
              <TwitterIcon />
              <p>
                {data.twitter_username
                  ? data.twitter_username
                  : 'Not Available'}
              </p>
            </Conctact>
            <Conctact isAvailable={data.company === null}>
              <CompanyIcon />
              <p>{data.company ? data.company : 'Not Available'}</p>
            </Conctact>
          </div>
        </ContactWrapper>
      </ContentMain>
    </ContnetWrapper>
  );
};

export default Content;
