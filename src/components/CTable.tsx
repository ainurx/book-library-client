'use client'

import React from 'react';
import _ from 'lodash'
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, Paper } from '@mui/material'

import { CTableProps } from '@/ts/interfaces';
import CButton from './CButton';


function createData(
  id: number,
  name: string,
) {
  return { id, name };
}

const rows = [
  createData(1, 'Frozen yoghurt'),
  createData(2, 'Ice cream sandwich'),
  createData(3, 'Eclair'),
  createData(4, 'Cupcake'),
  createData(5, 'Gingerbread'),
];

const CTable: React.FC<CTableProps> = ({data, onEdit, onDelete}) => {

  const onPageChange = (e, newPage) =>{
      console.log(newPage)
  } 

  return (
    <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell sx={{ width: '20%'}} align="center">Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
              data.map((row) => (
                  <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" scope="row">
                      {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">
                      <div className='space-evenly'>
                          <CButton text="Edit" onClick={() => onEdit(row)}/>
                          <CButton text="Hapus" variant='outlined' onClick={()=> onDelete(row)}/>
                      </div>
                  </TableCell>
                  </TableRow>
              ))
            }
            </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={1}
          onPageChange={onPageChange}
        />
    </>
  );
}

export default CTable;