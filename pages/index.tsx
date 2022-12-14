import Head from 'next/head';
import Cards from '../components/Cards';
import CTA from '../components/CTA';
import LinkList from '../components/LinkList';
import Box from '../components/primitives/Box';
import * as Layout from '../components/primitives/Layout';
import Table from '../components/primitives/Table';
import Nav from '../components/SubNav';

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

                <Layout.Section css={{ backgroundColor: "white", boxShadow: "inset 0px -1px #E0E3E6", position: "sticky", top: "0"}}>
                    <Layout.Content layout="full">
                        <Nav/>
                    </Layout.Content>
                </Layout.Section>

                <Layout.Section>
                    <Layout.Content layout="full">
                        <Box css={{backgroundColor: "Blue", maxWidth: 1024, width: "100%", height: 200, marginLeft: "auto", marginRight: "auto"}}>Your component</Box>
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

            </Layout.Page>
        </Layout.Shell>
      </>
  )
}

