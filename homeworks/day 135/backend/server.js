import express from 'express'
import cors from  "cors"
 const PORT = 3000 
 const app = express()
app.use(cors({origin: "http://localhost:5176"}))

const user = {
   Team1: 'Manchester city vs Real madrid',
   Team2: 'sporting vs borrusia dortmund',
   Team3:' brest vs PSG',
   Team4:'monaco vs benfica',
   Team5:'club brugge vs atlanta',
   Team6: 'juvents vs PSV',
   Team7: 'celtic vs bayern',
   Team8:'feyenoord vs milan'
    
}

app.get("/hllo/hello", (req,res)=>{
    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error : error})
    }
})

app.listen(PORT, () => {
    console.log(`server is running on http://loacalhost:${PORT}`)
})



