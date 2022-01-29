import React from 'react';
import { makeStyles, Container} from '@material-ui/core'
import Post from "./Post";

const useStyles = makeStyles((theme)=>({
   container:{
    paddingTop:theme.spacing(10)
  }
}))

const Feed = () => {
  const classes = useStyles()
  return  (
    <Container className={classes.container}>
       <Post image='https://unsplash.it/600/300' title='My First Post'/>
       <Post image='https://unsplash.it/600/299' title='My Second Post'/>
       <Post image='https://unsplash.it/599/300' title='My Third Post'/>
       <Post image='https://unsplash.it/598/300' title='My Fourth Post'/>
       <Post image='https://unsplash.it/599/299' title='My Fifth Post'/>
       <Post image='https://unsplash.it/598/299' title='My Sixth Post'/>
    </Container>
  )
};

export default Feed;
