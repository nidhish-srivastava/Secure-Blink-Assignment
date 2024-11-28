import express from "express"
import dataRoutes from "./routes/data.routes.js"
import insightsRoutes from "./routes/insights.routes.js"
import statsRoutes from "./routes/stats.routes.js"

const app = express()
const port = 3000

app.use(express.json({limit : '50mb'}))

app.use('/data', dataRoutes);
app.use('/stats', statsRoutes);
app.use('/insights', insightsRoutes);

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
})
