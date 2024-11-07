import React, { useState } from 'react'
import "./Create.css"
import { Box } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useForm, SubmitHandler } from "react-hook-form"
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.mustafa.main,
  '&:hover': {
    backgroundColor: theme.palette.mustafa.main,
    scale: "0.99"
  },
}));
const Create = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,watch,formState: { errors },} = useForm()

  const onSubmit = ({ price, title }) => {
    price = Number(price);
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(()=>{
      navigate('/');
    });
  };
  
  return (
    
   <Box onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'  component="form" sx={{width:"380px"}}>
     <TextField
          fullWidth={true}
          label="Transaction Title"
          sx={{ mt: "22px",display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              👉
            </InputAdornment>,
          }}
          variant='filled'
          {...register("title", {
            required: { value: true, message: "Requires field" },
            minLength: { value: 3, message: "minumn length is 3" },
          })}
          error={Boolean(errors.title)}
          helperText={
            Boolean(errors.title) ? errors.title?.message.toString() : null
          }
        />
     <TextField
          fullWidth={true}
          label="Amount"
          sx={{ mt: "22px",display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              $
              </InputAdornment>,
          }}
          variant='filled'
          {...register("price", {
            required: { value: true, message: "Required filed" },
          })}
          error={Boolean(errors.price)}
          helperText={
            Boolean(errors.price) ? errors.price?.message.toString() : null
          }
        />
        <ColorButton
        type='submit'
        onClick={(params) => {}}
         sx={{mt:"22px"}}  variant="contained">
          Submit <ChevronRightIcon/>
        </ColorButton>
   </Box>
  )
}

export default Create
