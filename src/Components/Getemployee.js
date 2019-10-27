import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Edit from './edit';
import Deleteid from './Delete';



class Getemployee extends Component {
   
    state = {
        todelete:false,
        toedit:false,
        activeEmployee: []
    }
    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const req = await fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
        const res = await req.json();
        this.setState({ activeEmployee: res });
    }
    deleteUser=()=>{
        this.setState({
            todelete:!this.state.todelete
        })
    }
    toedit=()=>{
        this.setState({
            toedit:!this.state.toedit
        });
    }
    render() {
        const employee = this.state.activeEmployee;
        return (
            <div>
            <Header />
            <Card>
                <CardActionArea>
                    <CardContent>
                            
                                <Typography variant="h4" gutterBottom>
                                    Employee Details</Typography>
                                <div>
                                    <h3>Employee-ID: {employee.id}</h3>
                                    <h3>Name: {employee.employee_name}</h3>
                                    <h3>Salary: {employee.employee_salary}</h3>
                                    <h3>Age:  {employee.employee_age}</h3>
                                </div>
                            
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant='contained' color='secondary' onClick={()=>this.deleteUser(employee.id)}>Delete</Button>
                    <Button variant='contained' color='secondary' onClick={this.toedit}>Edit</Button>
                </CardActions>
            </Card>  
            {this.state.todelete && <Deleteid id={employee.id} name={employee.employee_name} />}
            {this.state.toedit && <Edit activeEmployee={employee} />}             
            </div>
        );
    }
}


export default Getemployee;