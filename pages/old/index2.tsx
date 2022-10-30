import type { NextPage } from 'next';
import Nav from '../../components/Nav';
import Page from '../../components/Page';
import * as Section from '../../components/Section';
import Shell from '../../components/Shell';

const NextPage: NextPage = () => {
    return (
        <Shell>
            <Nav/>
            <Page>
                <Section.Root header>
                    <Section.Content>
                        <Section.Container css={{ height: "80px"}} variant={"fullWidth"}>Full Width</Section.Container>
                    </Section.Content>
                </Section.Root>
                <Section.Root>
                    <Section.Content unpadded>
                        <Section.Container  css={{ height: "320px"}} variant={"overflow"}>Overflow</Section.Container>
                    </Section.Content>
                </Section.Root>
                <Section.Root>
                    <Section.Content>
                        <Section.Container css={{ height: "320px"}} variant={"left6"}>Left</Section.Container>
                        <Section.Container css={{ height: "200px"}} variant={"right5"}>Right</Section.Container>
                    </Section.Content>
                </Section.Root>
                <Section.Root>
                    <Section.Content>
                        <Section.Container css={{ height: "320px"}} variant={"left7"}>Left</Section.Container>
                        <Section.Container css={{ height: "200px"}} variant={"right4"}>Right</Section.Container>
                    </Section.Content>
                </Section.Root>
                <Section.Root>
                    <Section.Content>
                        <Section.Container css={{ height: "320px"}} variant={"left8"}>Left</Section.Container>
                        <Section.Container css={{ height: "200px"}} variant={"right3"}>Right</Section.Container>
                    </Section.Content>
                </Section.Root>
            </Page>
        </Shell>
    )
}

export default NextPage