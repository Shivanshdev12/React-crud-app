import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));


const Edit=(props)=>{
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id:props.activeEmployee.id,
    name: props.activeEmployee.employee_name,
    age: props.activeEmployee.employee_age,
    salary:props.activeEmployee.employee_salary
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        label="ID"
        className={classes.textField}
        onChange={handleChange('name')}
        value={values.id}
        margin="normal"
      />
       <TextField
        label="Name"
        className={classes.textField}
        value={values.name}
        margin="normal"
      />
       <TextField
        label="Age"
        className={classes.textField}
        value={values.age}
        margin="normal"
      />
       <TextField
        label="Salary"
        className={classes.textField}
        value={values.salary}
        margin="normal"
      />
    </form>
  );
}

export default Edit;