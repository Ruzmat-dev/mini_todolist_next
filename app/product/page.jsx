import { getData } from "@/api/data";
import Product from "../components/product/product";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Page = async () => {
  const { data } = await getData();
  return(
    <>
         <TableContainer component={Paper} style={{width: "800px" , marginLeft: "20%" , marginBottom: "50px"}}>
      <Table sx={{ minWidth: 650 , padding: "50px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">KG</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{padding:"50px"}}>
        {data.map((item) => (
            <Product key={item.id} item={item} />
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
};

export default Page;


  
