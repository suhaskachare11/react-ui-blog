import React , { useState }  from 'react';
import { AppBar, makeStyles, Toolbar, Typography,alpha,InputBase , Badge ,Avatar} from '@material-ui/core'
import {Search , Mail , Notifications,Cancel}from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({
    toolbar:{
        diplay:'flex',
        justifyContent:'space-between'
    },
    logoLg:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        }
    },
    logoSm:{
        display:'block',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    search:{
        display:'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
           backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            display: (props)=>(props.open ?'flex':'none'),
            width:'70%'
        }
    },  
    cancel:{
         marginLeft:5,
         marginRight:5,
        [theme.breakpoints.up('sm')]:{
            display:'none',  
        }
    },
    searchButton:{
        marginRight:15,
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    input:{
        color:'white',
        marginLeft:10,
        width:'85%'
    },
    searchIcon:{
        padding:5,
        marginLeft: 5   
    },
    icons:{
        alignItems:'center',
        display:(props)=>(props.open?'none':'flex')
    },
    badge:{
        marginRight:20
    }
}))
const Navbar = () => {
  const [open,setOpen]=useState(false)
  const classes = useStyles({ open })
  return (
     <AppBar position='fixed'>
         <Toolbar className={classes.toolbar}>
             <Typography variant='h6' className={classes.logoLg}>
                 Suhas Kachare
             </Typography>
             <Typography variant='h6' className={classes.logoSm}>
                 SUHAS
             </Typography>
             <div className={classes.search}>
                 <Search className={classes.searchIcon} />
                 <InputBase placeholder='Search...' className={classes.input}/>  
                 <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>  
             </div>
             <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                   <Mail/>
                </Badge>
                <Badge badgeContent={2} color="secondary" className={classes.badge}>
                   <Notifications/>
                </Badge>
                <Avatar src="/broken-image.jpg" />              
             </div>
         </Toolbar>
     </AppBar>
  )
};

export default Navbar;
