import React, { useState } from 'react';
import { Box } from "@mui/material";


import Exercises from "../components/Exercises.js";
import HeroBanner from "../components/HeroBanner.js";
import SearchExercises from "../components/SearchExercises.js";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      />
      <Exercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home