import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        transform: 'translateZ(0)',
        height: 400,
        flexGrow: 1,
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
}))


const Delete = (props) => {
    const deleteid = (id) => {
        fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
            method: 'DELETE'
        });
        setdelete(true);
    }
    const classes = useStyles();
    const [isdeleted, setdelete] = useState(false);
    return (
        <div className={classes.root}>
            <Modal
                disableAutoFocus
                disablePortal
                open
                className={classes.modal}>
                <div className={classes.paper}>
                    
                        {isdeleted ? (
                            <div>
                                <h3>Click to go Home</h3>
                                <Button variant='contained' color='primary' onClick={() => deleteid(props.id)}>
                                <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
                                </Button>
                                
                            </div>

                        ) : (
                                <div>
                                    <h3>Are you sure you want to delete {props.name}?</h3>
                                    <Button variant='contained' color='primary' onClick={() => deleteid(props.id)}>
                                    <Link to={{
                                        pathname: `delete/${props.id}`
                                    }} style={{textDecoration:'none',color:'white'}}>Delete</Link>
                                    </Button>
                                </div>)
                        }
                    
                </div>
            </Modal>
        </div>
    )
}

export default Delete;