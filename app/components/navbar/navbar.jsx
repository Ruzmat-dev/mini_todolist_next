"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function DrawerAppBar() {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
                {" "}
                ToDoList{" "}
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "#fff" }}>
                <Link
                  href="/product"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Products
                </Link>
              </Button>
              {/* <Button sx={{ color: "#fff", marginLeft: "50px" }}>
                <Link
                  href="/activProduct"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Activ Products
                </Link>
              </Button> */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
