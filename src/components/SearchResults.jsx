import React from "react"
import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import Grid from "@mui/material/Grid2"
import Post from "./Post"
import { useSearchParams } from "react-router-dom"

const SearchResults = () => {
  const [posting, setPosting] = useState([])

  useEffect(() => {
    const fetchPosting = async () => {
      try {
        const response = await fetch("/dataPostings.json")
        if (!response.ok) {
          throw new Error("Response was not ok")
        }
        const jsonData = await response.json()
        console.log(jsonData)
        // Filter Json Data, based on search before updating the state

        setPosting(jsonData)
      } catch (error) {
        console.log("Error fetching the data:", error)
      }
    }
    fetchPosting()
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <Box
        display="flex"
        justifyContent="center"
        sx={{ backgroundColor: "#f5f5f5", height: "100vh", p: 4 }}
      > */}
      <Grid container spacing={2}>
        <Grid item size={6}>
          {posting.length === 0 ? (
            <p>Loading...</p>
          ) : (
            posting.map((p, index) => <Post post={p} />)
          )}
        </Grid>
      </Grid>
      {/* </Box> */}
      Search Results
    </div>
    // <Box
    // display="flex"
    // justifyContent="center"
    // sx={{backgroundColor: '#f5f5f5', height: '100vh', p:4}}
    // >
    //     <Card sx={{ width: 700, height: 500, p:2, borderRadius: 3 }}>
    //         <CardMedia
    //             sx={{ height: 350 }}
    //             image="https://plus.unsplash.com/premium_photo-1670275658703-33fb95fe50d8?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             title="Building"
    //         />
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="div">
    //                 Apartment
    //             </Typography>
    //             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    //                 Modern apartment in Chelsea, Manhattan.
    //             </Typography>
    //         </CardContent>
    //         <CardActions>
    //             <Button size="small">Contact</Button>
    //             <Button size="small">Learn More</Button>
    //         </CardActions>
    //     </Card>
    // </Box>
  )
}

export default SearchResults
