import Navbar from "./Components/Navbar";
import { Grid ,makeStyles } from '@material-ui/core'
import Rightbar from "./Components/Rightbar";
import Leftbar from "./Components/Leftbar";
import Feed from "./Components/Feed";
import AddBlog from "./Components/AddBlog";


const useStyles = makeStyles((theme)=>({
  right:{
     [theme.breakpoints.down('sm')]:{
       display:'none'   
    }
  }
}))
function App() {
  const classes = useStyles()
  return (
    <div className="App">
        <Navbar/>
        <Grid container>
         <Grid item sm={2} xs={2}>
           <Leftbar/>
         </Grid>
         <Grid item sm={7} xs={10}>
           <Feed/>
         </Grid>
         <Grid item sm={3} className={classes.right}>
           <Rightbar/>
         </Grid>      
        </Grid>
        <AddBlog/>
    </div>
  );
}

export default App;
