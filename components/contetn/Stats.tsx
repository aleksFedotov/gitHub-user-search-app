import React from 'react';

import { StatsWrapper, Stat } from './ContentStyles';
import Counter from './Counter';

const Stats: React.FC<{
  repos: number;
  followers: number;
  following: number;
}> = ({ repos, followers, following }) => {
  return (
    <StatsWrapper>
      <Stat>
        <p>Repos</p>
        <Counter from={0} to={repos} />
      </Stat>
      <Stat>
        <p>Followers</p>
        <Counter from={0} to={followers} />
      </Stat>
      <Stat>
        <p>Following</p>
        <Counter from={0} to={following} />
      </Stat>
    </StatsWrapper>
  );
};

export default Stats;
