import { styled } from '@stitches/react';

const Shell = styled("div", {
    width: "100%",
    height: "fit-content",
    display: "grid",
    backgroundColor: "#F8F9FA",
    gridTemplateRows: "auto 1fr",
    gap: "24px"
})

const Heading = styled("p", {
    width: "100%",
    height: "fit-content",
    color: "black",
    fontSize: "32px"
})

const Data = styled("div", {
    width: "100%",
    overflowY: "scroll",
    height: "fit-content",
    display: "flex",
    backgroundColor: "#F8F9FA",
    gap: "8px",
    boxShadow: "0 0 0 2px black",
    borderRadius: "12px",
    padding: "6px"
})

const Box = styled("div", {backgroundColor: "red", width: "200px", height: "200px", flexShrink: 0})



function Table() {
    return (
        <Shell>
            <Heading>Proxies</Heading>
            <Data>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </Data>
        </Shell>
    )
}

export default Table