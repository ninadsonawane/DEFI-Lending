import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

const Borrow = () => {
  return (
    <Paper  elevation={3}  sx={{  marginRight:"2%", backgroundColor:"#757ce8" , justifyItems:"center" ,  height:"130px" , position:"relative"}}>
    <Box  sx={{ padding:"10px" , display:"flex" , flexDirection:"column" ,  }}>
        <div> <Typography align='center'  sx={{ color:"white" , fontFamily:"'Lato', sans-serif" }} variant='h6'>Borrowed Holding</Typography></div>
      
    </Box>
</Paper>
  )
}

export default Borrow