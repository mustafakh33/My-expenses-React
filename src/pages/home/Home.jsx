import React, { useEffect, useState } from "react";
import "./Home.css";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Home = () => {
  const [myData , setMyData] = useState([]);
  useEffect(()=>{
    
       fetch("http://localhost:3100/mydata")
       .then((response)=> response.json())
       .then((data)=> setMyData(data))
     
  },[])
  const handleDelete = (item) => {
    fetch(`http://localhost:3100/mydata/${item.id}`, {method: "DELETE"})
    const newArr = myData.filter((myobject)=>{
      return myobject.id !== item.id;
        })
        setMyData(newArr);
  }
  let totalPrice = 0;
  return (
    <Box>
      {myData.map((item, index)=>{
        totalPrice += item.price;
        return(
          <Paper
          key={index}
          sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }}
        >
          <Typography sx={{ ml: "16px", fontSize: "1.3rem" }} variant="h6">
            {item.title}
          </Typography>
          <Typography
            sx={{
              mr: "33px",
              fontSize: "1.4rem",
              fontWeight: 500,
              opacity: "0.8",
            }}
            variant="h6"
          >
            ${item.price}
          </Typography>
          <IconButton
          onClick={()=>{
            handleDelete(item)
          }}
           sx={{ position: "absolute", top: "0", right: "0" }}>
            <CloseIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
        )
      })}

<Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend {totalPrice}
      </Typography>
     
    </Box>
  );
};

export default Home;
