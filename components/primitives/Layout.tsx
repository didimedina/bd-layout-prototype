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
    maxWidth: "1280px",
    paddingLeft: "clamp(12px, 12%, 128px)",
    paddingRight: "clamp(12px, 12%, 128px)",
    alignItems: "start",

    variants: {
        layout: {
            ['overflow']: {
                gridTemplateColumns: "1fr",
                paddingLeft: "12px",
                paddingRight: "12px", 
            },
            ['full']: {
                gridTemplateColumns: "1fr"
            },
            ['60-40']: {
                gridTemplateColumns: "0.6fr 0.4fr",
                gap: "max(8%, 64px)",
            },
            ['70-30']: {
                gridTemplateColumns: "0.7fr 0.3fr",
                gap: "max(4%, 40px)",
            },
        }
    },
})

export const Shell = StyledShell
export const Page = StyledPage
export const Section = StyledSection
export const Content = StyledContent

