import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function VideoLibraryIndex() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <Button
              component={Link}
              to="user-login"
              variant="contained"
              color="success"
              size="large"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              User Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="admin-login"
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Admin Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
