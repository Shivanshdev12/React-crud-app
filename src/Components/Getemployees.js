import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const Getemployees=(props)=>{
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Employee-Id(Click on Id)
            </TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.employees.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.employee_name}</TableCell>
              <TableCell component="th">
                <Link to={{
                  pathname:`/employee/${row.id}`
                }} style={{textDecoration:'none'}}>{row.id}</Link>
              </TableCell>
              <TableCell align="right">{row.employee_salary}</TableCell>
              <TableCell align="right">{row.employee_age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Getemployees;