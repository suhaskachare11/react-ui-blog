import React from 'react';
import { makeStyles, Card,CardActionArea,CardMedia,CardContent,Typography, CardActions, Button} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    media:{
        height:250,
          [theme.breakpoints.down('sm')]:{
            height:150
        }
    },
    card:{
       marginBottom:30,
    }
}))

const Post = ({image , title}) => {
  const classes = useStyles()
  return (
      <Card className={classes.card}>
         <CardActionArea>
           <CardMedia className={classes.media} image={image} title='My Post'/>
           <CardContent>
            <Typography gutterBottom variant='h5'>{title}</Typography>
            <Typography variant='body2'>Below is an interactive demo that lets you explore the visual results of the different settings.
            Below is an interactive demo that lets you explore the visual results of the different settings.
            Below is an interactive demo that lets you explore the visual results of the different settings.
            Below is an interactive demo that lets you explore the visual results of the different settings.      
            </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button size='small' color='primary'>Like</Button>
            <Button size='small' color='primary'>Show More</Button>
         </CardActions>
      </Card>
  )
};

export default Post;
