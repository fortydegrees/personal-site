// @flow
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import WeblogFeed from '../components/WeblogFeed';
import { useSiteMetadata, useWeblogsList } from '../hooks';

const WeblogsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useWeblogsList();

  const { edges } = tags;

  return (
    <Layout title="Weblogs">
      <Sidebar/>
      <Page>
        <WeblogFeed edges={edges} />
      </Page>
    </Layout>
  );
};

export default WeblogsListTemplate;