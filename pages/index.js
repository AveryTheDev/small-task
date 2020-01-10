import React from "react";
import { styled } from "@material-ui/core/styles";
import {
  borders,
  compose,
  display,
  flexbox,
  palette,
  shadows,
  sizing,
  spacing,
  typography
} from "@material-ui/system";

const Box = styled("div")(
  compose(
    borders,
    display,
    flexbox,
    palette,
    shadows,
    sizing,
    spacing,
    typography
  )
);
const Image = styled("img")(compose(borders, flexbox, sizing));

const IMAGE_SRC = `https://images.unsplash.com/photo-1567742364484-024e82826777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=100`;

const width = {
  // The grey container width should change on breakpoint (container is also a Box)
  xs: "100%",
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1680
};
const maxImageHeight = {
  xs: "320px",
  md: "200px"
};
const maxImageWidth = {
  xs: "320px",
  md: "200px"
};
const cardWidth = {
  xs: "320px",
  md: "450px"
};

const Home = () => (
  <Box maxWidth="100%" display="flex" justifyContent="center">
    <Box
      display="flex"
      justifyContent="center"
      width={width}
      m={1}
      p={{ xs: 4, sm: 5, md: 6 }}
      //need to lighten to make clear that the box shadow is present
      bgcolor="success.main"
    >
      <Box
        bgcolor="white"
        boxShadow={3}
        borderRadius={8}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        overflow="hidden"
        width={cardWidth}
      >
        <Image
          maxHeight={maxImageHeight}
          maxWidth={maxImageWidth}
          src={IMAGE_SRC}
          alt="a relaxed lizard"
        ></Image>
        <Box p={{ xs: 2, sm: 3 }}>
          <Box
            fontSize={26}
            fontWeight="fontWeightMedium"
            mb={{ xs: 2, sm: 2, md: 2 }}
          >
            Lizard
          </Box>
          <Box fontSize={14} color="gray" mb={{ xs: 4 }} lineHeight={1.2}>
            {" "}
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Box>
          <Box
            fontSize={15}
            fontWeight="fontWeightMedium"
            color="secondary.main"
          >
            LEARN MORE
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Home;
