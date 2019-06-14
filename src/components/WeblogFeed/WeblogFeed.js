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
        <h2 className={styles['feed__item-title']}>
          {edge.node.frontmatter.title}
        </h2>
    ))}
  </div>
);

export default WeblogFeed;
