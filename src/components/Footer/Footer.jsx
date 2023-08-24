import { Box } from "@mui/material";
import styled from "styled-components";

const AppFooter = styled(Box)`
  z-index: 100;
  p {
    font-weight: 500;
  }
`;

function Footer() {
  return (
    <AppFooter
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #e9ecef",
        padding: "1rem",
        textAlign: "center",
        position: "sticky",
        bottom: 0,
      }}
    >
      <p>Empowering Open-source Development 🚀</p>
    </AppFooter>
  );
}

export default Footer;
