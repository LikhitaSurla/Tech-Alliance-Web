import React, { useState } from 'react'
import Game from './App.jsx'
import  Rps  from './Rps.jsx'
import {Button,Card,CardActions,CardContent,CardMedia,Typography} from './Material.js'

const Home=()=>{
    const [home,setHome]=useState(true)
    const [quiz,setQuiz]=useState(false)
    const [rps,setRps]=useState(false)

    const btnClicked1=()=>{
        setHome(false)
        setQuiz(true)
    }
    const btnClicked2=()=>{
        setHome(false)
        setRps(true)
    }
    if(home===true){

    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea deleniti labore odit esse? Culpa blanditiis non perferendis pariatur tempore fuga cum ab odit voluptate, itaque commodi enim reprehenderit dolor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={btnClicked1} size="small">Start</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rock-Paper-Scissors
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea deleniti labore odit esse? Culpa blanditiis non perferendis pariatur tempore fuga cum ab odit voluptate, itaque commodi enim reprehenderit dolor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={btnClicked2} size="small">Start</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
        </>
    )
    }
    else if(quiz===true){
        return(<>
        
        <Game/>
        </>
        )
    }
    else if(rps===true){
        return(
            <>
            <Rps/>
            </>
        )
    }
    
}

export default Home