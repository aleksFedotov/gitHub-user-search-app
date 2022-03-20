import React from 'react';
import { motion } from 'framer-motion';
import { ContentHeader, UserName, ContentText } from './ContentStyles';
import { senteceVariants, wordAnimation } from '../../helpers/index';

const Header: React.FC<{
  id: number;
  name: string;
  login: string;
  created_at: string;
}> = ({ id, name, login, created_at }) => {
  const date = new Date(created_at);
  const month = date.toLocaleString('en-us', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <ContentHeader>
      <UserName>
        <motion.h2
          variants={senteceVariants}
          initial="hidden"
          animate="visible"
          key={`${id}-name`}
        >
          {wordAnimation(name)}
        </motion.h2>
        <motion.p
          variants={senteceVariants}
          initial="hidden"
          animate="visible"
          key={`${id}-login`}
        >
          {wordAnimation(`@${login}`)}
        </motion.p>
      </UserName>
      <ContentText
        variants={senteceVariants}
        initial="hidden"
        animate="visible"
        key={id}
      >
        {wordAnimation(`Joined ${day} ${month} ${year}`)}
      </ContentText>
    </ContentHeader>
  );
};

export default Header;
