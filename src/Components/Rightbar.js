import React from 'react';
import { makeStyles ,Container, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

const useStyles = makeStyles((theme)=>({
   container:{
    paddingTop:theme.spacing(10),
    position:'sticky',
    top:0
  },
  title:{
    fontSize:16,
    fontWeight:500,

  },
  link:{
    fontSize:16,
    color:'#555',
    marginRight:10
  }
}))
const Rightbar = () => {
    const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={6} style={{marginBottom:15}}>
          <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Brett lee" src="https://v4.mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Brett lee" src="https://v4.mui.com/static/images/avatar/6.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom >Gallery</Typography>
      <ImageList rowHeight={120} style={{marginBottom:15}} cols={2}>
              <ImageListItem>
                <img src='https://v4.mui.com/static/images/image-list/breakfast.jpg' alt='' />
              </ImageListItem>
              <ImageListItem>
                <img src='https://v4.mui.com/static/images/image-list/burgers.jpg' alt='' />
              </ImageListItem>
              <ImageListItem>
                <img src='https://v4.mui.com/static/images/image-list/camera.jpg' alt='' />
                </ImageListItem>
                <ImageListItem>
                <img src='https://v4.mui.com/static/images/image-list/honey.jpg' alt='' />
                </ImageListItem>
                <ImageListItem>
                <img src='https://v4.mui.com/static/images/image-list/bike.jpg' alt='' />
                </ImageListItem>
                <ImageListItem>
                <img src='https://v4.mui.com/static/images/image-list/olive.jpg' alt='' />
              </ImageListItem>
       </ImageList>
       <Typography className={classes.title} gutterBottom>Categories</Typography>
       <Link href="#" className={classes.link} variant='body2'>
         Sports
       </Link>
       <Link href="#" className={classes.link} variant='body2'>
         Food
       </Link>
       <Link href="#" className={classes.link} variant='body2'>
         Music
       </Link>
       <Divider flexItem style={{marginBottom:3}}/>
       <Link href="#" className={classes.link} variant='body2'>
         Movies
       </Link>
       <Link href="#" className={classes.link} variant='body2'>
         Science
       </Link>
       <Link href="#" className={classes.link} variant='body2'>
         Life
       </Link>
    </Container>
  )
};

export default Rightbar;
