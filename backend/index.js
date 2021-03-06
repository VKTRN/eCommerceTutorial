import express      from "express"
import mongoose     from "mongoose"
import dotenv       from "dotenv"

import cors         from "cors"

import authRoute    from "./routes/auth.js"
import userRoute    from "./routes/user.js"
import productRoute from "./routes/product.js"
import cartRoute    from "./routes/cart.js"
import orderRoute   from "./routes/order.js"
import stripeRoute  from "./routes/stripe.js"

const app = express()

dotenv.config()

const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.MONGO_URL, options, () => {console.log("Connected to mongoDB.")})

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use("/api/auth",     authRoute);
app.use("/api/users",    userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts",    cartRoute);
app.use("/api/orders",   orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {console.log("http://localhost:5000")})