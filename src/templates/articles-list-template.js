// @flow
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import Feed from '../components/Feed';
import { useSiteMetadata, useArticlesList } from '../hooks';

const ArticlesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useArticlesList();

  const { edges } = tags;

  return (
    <Layout title="Articles">
      <Sidebar/>
      <Page>
        <Feed edges={edges} />
      </Page>
    </Layout>
  );
};

export default ArticlesListTemplate;