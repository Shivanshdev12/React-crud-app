import React,{Component} from 'react';
import Header from './Components/Header';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Getemployees from './Components/Getemployees';

class App extends Component {
  state={
    employees:[]
  }
  componentDidMount=async (e)=>{
    const api_call=await fetch(`http://dummy.restapiexample.com/api/v1/employees`);
    const data=await api_call.json();
    this.setState({employees:data});
    console.log(this.state.employees);
  }
  render() {
    return (
      <div>
        <Header/>
          <Box textAlign='right' margin="1rem">
          <Button variant="contained" color="secondary">Create New User</Button>
          </Box>
        <Getemployees employees={this.state.employees}/>
      </div>
    )
  }
}


export default App;