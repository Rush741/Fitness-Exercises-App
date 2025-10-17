import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";


const SearchExercises = () => {
  return (
    <Stack 
      alignItems="center" 
      justifyContent="center" 
      mt="37px"
      p="20px"
    >
      <Typography 
        textAlign="center"
        sx = {{
          fontSize: { lg: "44px", xs: "30px"}
        }}
        mb="50px"
        fontWeight={700}
      >
        Awesome exercises You <br />
        Should Know
      </Typography>
      <Box 
        position="relative" 
        mb="72px"
      >
        <TextField 
          sx = {{
            input : {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            width: {lg: "800px", xs: "350px"},
            backgroundColor: "white",
            borderRadius: "40px"

          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercise" 
          type="text"
        />
        <Button
          className="search-btn"
          sx = {{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0"
          }}
        >
          Search
        </Button>
      </Box>
      <Box 
        pt="1000px"
      >

      </Box>
    </Stack>
  )
}

export default SearchExercises;