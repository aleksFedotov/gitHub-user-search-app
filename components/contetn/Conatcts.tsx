import React from 'react';
import { motion } from 'framer-motion';

import { ContactWrapper, Conctact } from './ContentStyles';
import { senteceVariants, wordAnimation } from '../../helpers';

import LocationIcon from '../../assets/icon-location.svg';
import WebsiteIcon from '../../assets/icon-website.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import CompanyIcon from '../../assets/icon-company.svg';

const Conatcts: React.FC<{
  blog: string | null;
  company: string | null;
  location: string | null;
  twitter: string | null;
  id: number;
}> = ({ blog, company, location, twitter, id }) => {
  const locationText = location ? location : 'Not Available';
  const twitterText = twitter ? twitter : 'Not Available';
  const companyText = company ? company : 'Not Available';

  return (
    <ContactWrapper>
      <div>
        <Conctact isNotAvailable={!location}>
          <LocationIcon />
          <motion.p
            variants={senteceVariants}
            initial="hidden"
            animate="visible"
            key={id}
          >
            {wordAnimation(locationText)}
          </motion.p>
        </Conctact>
        <Conctact isNotAvailable={!blog}>
          <WebsiteIcon />
          {blog ? (
            <motion.a
              href={blog!}
              variants={senteceVariants}
              initial="hidden"
              animate="visible"
              key={id}
            >
              {wordAnimation(blog!)}
            </motion.a>
          ) : (
            <motion.p
              variants={senteceVariants}
              initial="hidden"
              animate="visible"
              key={id}
            >
              {wordAnimation('Not Avalaible')}
            </motion.p>
          )}
        </Conctact>
      </div>
      <div>
        <Conctact isNotAvailable={!twitter}>
          <TwitterIcon />
          <motion.p
            variants={senteceVariants}
            initial="hidden"
            animate="visible"
            key={id}
          >
            {wordAnimation(twitterText)}
          </motion.p>
        </Conctact>
        <Conctact isNotAvailable={!company}>
          <CompanyIcon />
          <motion.p
            variants={senteceVariants}
            initial="hidden"
            animate="visible"
            key={id}
          >
            {wordAnimation(companyText)}
          </motion.p>
        </Conctact>
      </div>
    </ContactWrapper>
  );
};

export default Conatcts;
