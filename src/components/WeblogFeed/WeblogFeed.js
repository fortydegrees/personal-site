// @flow
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './WeblogFeed.module.scss';

type Props = {
  edges: Edges
};

const WeblogFeed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div>
         <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMM DD \'YY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
        {edge.node.frontmatter.title && 
        <h2 className={styles['feed__item-title']}>
          {edge.node.frontmatter.title}
        </h2>
        }
        <div className={styles['post__content']}>
        <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: edge.node.html }} />
      </div>
        </div>
    ))}
  </div>
);

export default WeblogFeed;
