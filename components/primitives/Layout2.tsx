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
    justifyContent: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem"
})

const StyledContent = styled("div", {
    display: "grid",
    width: "100%",
    maxWidth: "1280px",
    alignItems: "start",

    variants: {
        layout: {
            ['overflow']: {
                gridTemplateColumns: "1fr",
            },
            ['full']: {
                gridTemplateColumns: "1fr",
                '@media (min-width: 520px)': { paddingLeft: "2rem", paddingRight: "2rem" },
                '@media (min-width: 1024px)': { paddingLeft: "4rem", paddingRight: "4rem" },
                '@media (min-width: 1280px)': { paddingLeft: "8rem", paddingRight: "8rem" },
            },
            ['60-40']: {
                gridTemplateColumns: "0.6fr 0.4fr",
                '@media (min-width: 520px)': { gap: "2rem", paddingLeft: "2rem", paddingRight: "2rem" },
                '@media (min-width: 1024px)': { gap: "4rem", paddingLeft: "4rem", paddingRight: "4rem" },
                '@media (min-width: 1280px)': { gap: "8rem", paddingLeft: "8rem", paddingRight: "8rem" },
            },
            ['70-30']: {
                gridTemplateColumns: "0.7fr 0.3fr",
                '@media (min-width: 520px)': { gap: "1rem", paddingLeft: "2rem", paddingRight: "2rem" },
                '@media (min-width: 1024px)': { gap: "2rem", paddingLeft: "4rem", paddingRight: "4rem" },
                '@media (min-width: 1280px)': { gap: "4rem", paddingLeft: "8rem", paddingRight: "8rem" },
            },
        },
    },
})

export const Shell = StyledShell
export const Page = StyledPage
export const Section = StyledSection
export const Content = StyledContent

