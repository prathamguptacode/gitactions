import "dotenv/config"
import express, { type Request, type Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello test 2" })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on port ${port}`))
