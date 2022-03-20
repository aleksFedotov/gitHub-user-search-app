import React from 'react';

import { StatsWrapper, Stat } from './ContentStyles';
import Counter from './Counter';

const Stats: React.FC<{
  repos: number;
  followers: number;
  following: number;
  isInitial: boolean;
}> = ({ repos, followers, following, isInitial }) => {
  return (
    <StatsWrapper>
      <Stat>
        <p>Repos</p>
        {isInitial ? <h3>{repos}</h3> : <Counter from={0} to={repos} />}
      </Stat>
      <Stat>
        <p>Followers</p>
        {isInitial ? <h3>{followers}</h3> : <Counter from={0} to={followers} />}
      </Stat>
      <Stat>
        <p>Following</p>
        {isInitial ? <h3>{following}</h3> : <Counter from={0} to={following} />}
      </Stat>
    </StatsWrapper>
  );
};

export default Stats;
