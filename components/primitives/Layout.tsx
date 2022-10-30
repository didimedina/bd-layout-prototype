import { styled } from '@stitches/react';

const StyledShell = styled("div", {
    width: "100vw",
    height: "100vh",
    display: "grid",
    backgroundColor: "#F8F9FA",
    overflow: "clip",

    variants: {
        layout: {
            ['control-panel']: {
                gridTemplateColumns: "80px 1fr",
            },
            ['marketing-page']: {
                gridTemplateRows: "80px 1fr",
            },
        }
    }
})

const StyledPage = styled("div", {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    overflowX: "hidden",
    overflowY: "auto"
})

const StyledSection = styled("div", {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center"
})

const StyledContent = styled("div", {
    display: "grid",
    width: "100%",
    maxWidth: "1540px",
    '@media (min-width: 520px)': {
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
    '@media (min-width: 1024px)': {
        paddingLeft: "8rem",
        paddingRight: "8rem",
    },
    '@media (min-width: 1280px)': {
        paddingLeft: "12rem",
        paddingRight: "12rem",
    },
    alignItems: "start",

    variants: {
        layout: {
            ['overflow']: {
                gridTemplateColumns: "1fr",
                paddingLeft: "2rem",
                paddingRight: "2rem", 
            },
            ['full']: {
                gridTemplateColumns: "1fr"
            },
            ['60-40']: {
                gridTemplateColumns: "0.6fr 0.4fr",
                '@media (min-width: 520px)': { gap: "2rem" },
                '@media (min-width: 1024px)': { gap: "4rem" },
                '@media (min-width: 1280px)': { gap: "8rem" },
            },
            ['70-30']: {
                gridTemplateColumns: "0.7fr 0.3fr",
                '@media (min-width: 520px)': { gap: "2rem" },
                '@media (min-width: 1024px)': { gap: "3rem" },
                // '@media (min-width: 1280px)': { gap: "6rem" },
            },
        }
    },
})

export const Shell = StyledShell
export const Page = StyledPage
export const Section = StyledSection
export const Content = StyledContent

