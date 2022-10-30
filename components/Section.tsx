import { styled } from '@stitches/react';

const SectionRoot = styled("div", {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    variants: {
        header: {
            true: { boxShadow: "0px 1px lightgrey" }
        }
    }
})

const SectionContent = styled("div", {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.8fr repeat(12, 1fr) 1.8fr",
    gap: "2%",
    maxWidth: "1280px",
    marginLeft: "24px",
    marginRight: "24px",

    variants: {
        unpadded: {
            true: { marginLeft: "0px", marginRight: "0px" }
        }
    }
    // backgroundColor: "Green"
})

const SectionContainer = styled("div", {
    backgroundColor: "#E6E8EB",
    color: "black",

    variants: {
        variant: {
            fullWidth: {
                gridColumnStart: "2",
                gridColumnEnd: "-2",
                '@media (max-width: 800px)': {
                    gridColumnStart: "1",
                    gridColumnEnd: "-1",
                }
            },
            overflow: {
                gridColumnStart: "1",
                gridColumnEnd: "-1"
            },
            left6: {
                gridColumnStart: "2",
                gridColumnEnd: "8",
                '@media (max-width: 800px)': {
                    gridColumnStart: "1",
                }
            },
            right5: {
                gridColumnStart: "9",
                gridColumnEnd: "-2",
                '@media (max-width: 800px)': {
                    gridColumnEnd: "-1",
                }
            },
            left7: {
                gridColumnStart: "2",
                gridColumnEnd: "9",
                '@media (max-width: 800px)': {
                    gridColumnStart: "1",
                }
            },
            right4: {
                gridColumnStart: "10",
                gridColumnEnd: "-2",
                '@media (max-width: 800px)': {
                    gridColumnEnd: "-1",
                }
            },
            left8: {
                gridColumnStart: "2",
                gridColumnEnd: "10",
                '@media (max-width: 800px)': {
                    gridColumnStart: "1",
                }
            },
            right3: {
                gridColumnStart: "11",
                gridColumnEnd: "-2",
                '@media (max-width: 800px)': {
                    gridColumnEnd: "-1",
                }
            },

        }
    }
})

// type layoutType = "full-width" | "overflow" | "split"

// function Layout(layout: layoutType) {
//     return (
//         <SectionContainer/>
//     )

// }










export const Root = SectionRoot
export const Content = SectionContent
export const Container = SectionContainer