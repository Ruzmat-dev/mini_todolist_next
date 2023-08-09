"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getData } from "@/api/data";
import { getDate } from "@/utils/helpers";
import { Button } from "@mui/material";
import axios from "axios";
import { inctance } from "@/api/inctance";


const Product = ({ item }) => {

  // const navigate =  useNavigate


  const getName = (id) => {
    const confirm = window.confirm('Xaqiqadan ham ochirmoqchi misiz?');
    if(confirm) {
        inctance.delete(`/data/${id}`)
      window.location.reload()
    }   
  };

  return (
    <TableRow
      key={item.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {item.id}
      </TableCell>
      <TableCell   align="right">
        {item.title}
      </TableCell>
      <TableCell align="right">{item.price} $</TableCell>
      <TableCell align="right">{item.weight}</TableCell>
      <TableCell align="right">{item.gender}</TableCell>
      <TableCell  align="right">{getDate(item.created_at)} </TableCell>
      <TableCell align="right">
        
        <Button
          sx={{
            width: "50px",
            backgroundColor: "crimson",
            cursor: "pointer",
            ":hover": {
              bgcolor: "red",
              color: "white",
            },
          }}
          onClick={(e) => getName(item.id)}
          variant="contained"
        >
          Delete
        </Button>{" "}
      </TableCell>
    </TableRow>
  );
};

export default Product;
