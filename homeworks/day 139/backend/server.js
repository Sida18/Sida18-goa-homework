import express from 'express'
import cors from  "cors"
 const PORT = 5000 
 const app = express()
app.use(cors({origin: "http://localhost:5173"}))

const user = {
    id: 1,
    email: 'hellomy.N@gmail.com',
    title: 'Iphone Shop',
    img: ['assets.\backend/assets/apple-iphone-14-pro-max-1.jpg','assets.\backend/assets/fall-2023-iphone-colors-iphone-15-pro-max.png',"assets.\backend/assets/iphone__kqge21l9n26q_og.png","assets.\backend/assets/iphone-card-40-iphone16prohero-202409_FMT_WHH.jpeg"]
    
}

app.get("/iphone/Shop", (req,res)=>{
    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error : error})
    }
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})



