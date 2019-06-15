// @flow
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import WeblogFeed from '../components/WeblogFeed';
import { useSiteMetadata, usePioneerList } from '../hooks';

const PioneerListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = usePioneerList();

  const { edges } = tags;

  return (
    <Layout title="Pioneer">
      <Sidebar/>
      <Page>
        <WeblogFeed edges={edges} />
      </Page>
    </Layout>
  );
};

export default PioneerListTemplate;