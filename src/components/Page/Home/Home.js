import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import ME from "../../../assets/me.jpg";
import BACKGROUND from "../../../assets/background.png";

const styles = {
  homeBox: {
    backgroundImage: `url(${BACKGROUND})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain", //background-size: auto|length|cover|contain|initial|inherit;
    // backgroundColor: "#880000",
    height: "93vh",
  },
};

const Home = () => {
  return (
    <Box style={styles.homeBox}>
      <Container maxWidth="xl" style={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
          styles={styles.homeBox}
        >
          {/* Left */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              // background: "#008000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">This is joel, programmers</Typography>
          </Box>

          {/* Right */}
          <Box
            sx={{
              flexGrow: 5,
              display: "flex",
              // background: "#800080",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={ME} alt={"joel-face"} loading="lazy" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
