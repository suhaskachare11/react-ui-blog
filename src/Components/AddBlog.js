import React , {useState} from 'react';
import { Tooltip,Fab,makeStyles,Modal,Container,TextField, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Snackbar} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme)=>({
    fab:{
        position:'fixed',
        bottom:20,
        right:20
    },
    container:{
        width:500,
        height:550,
        backgroundColor:'white',
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100vw',
            height:'100vh'
        }
    },
    form:{
        padding:20
    },
    item:{
        marginBottom:20
    }
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const AddBlog = () => {
  const classes = useStyles()
  const [open,setOpen]=useState(false)
  const [openAlert,setOpenAlert]=useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <Add />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete='off'>
                    <div className={classes.item}>
                       <TextField id="standard-basic" label="Standard" size='small' style={{width:'100%'}}/>
                    </div>
                    <div className={classes.item}>  
                       <TextField
                            id="outlined-multiline-static"
                            label="Decription"
                            multiline
                            rows={4}
                            defaultValue="Tell Your Story....."
                            variant="outlined"
                            size='small'
                            style={{width:'100%'}}
                         />
                    </div>
                    <div className={classes.item}>
                        <TextField select label='visibility' value='public'>
                            <MenuItem value='public'>Public</MenuItem>
                            <MenuItem value='private'>Private</MenuItem>
                            <MenuItem value='unlisted'>Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                    <FormLabel component="legend">Who Can Comment</FormLabel>
                        <RadioGroup >
                            <FormControlLabel value="everybody" control={<Radio size='small' />} label="Everybody" />
                            <FormControlLabel value="my Friends" control={<Radio size='small' />} label="My Friends" />
                            <FormControlLabel value="nobody" control={<Radio size='small' />} label="Nobody" />
                            <FormControlLabel value="custom" disabled control={<Radio size='small' />} label="Custom(Premium Account)" />
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant='outlined' color='primary' style={{marginRight:20}}
                        onClick={()=>setOpenAlert(true)}>
                            Create
                        </Button>
                        <Button variant='outlined' color='secondary' onClick={()=>setOpen(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}  anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
            <Alert onClose={handleClose} severity="success">
                This is a success message!
            </Alert>
         </Snackbar>
    </>
  )
};

export default AddBlog;
