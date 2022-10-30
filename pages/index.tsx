import Head from 'next/head';
import Cards from '../components/Cards';
import CTA from '../components/CTA';
import Form from '../components/Form';
import LinkList from '../components/LinkList';
import Box from '../components/primitives/Box';
import * as Layout from '../components/primitives/Layout';
import Nav from '../components/SubNav';
import Table from '../components/Table';

export default function Home() {
  return (
      <>
        <Head>
          <title>BrightData </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout.Shell layout="control-panel">
            <Box css={{ boxShadow: "inset -1px 0px #E0E3E6" }}/>
            <Layout.Page>
                <Layout.Section css={{ boxShadow: "inset 0px -1px #E0E3E6" }}>
                    <Layout.Content layout="full">
                        <Nav/>
                    </Layout.Content>
                </Layout.Section>
                <Layout.Section>
                    <Layout.Content layout="overflow">
                        <Table/>
                    </Layout.Content>
                </Layout.Section>
                <Layout.Section>
                    <Layout.Content layout="70-30">
                        <Cards/>
                        <LinkList/>
                    </Layout.Content>
                </Layout.Section>
                <Layout.Section>
                    <Layout.Content layout="60-40">
                        <Form/>
                        <CTA/>
                    </Layout.Content>
                </Layout.Section>
            </Layout.Page>
        </Layout.Shell>
      </>
  )
}

