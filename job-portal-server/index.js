const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


// verify a token 
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).send("Unauthorized: No token provided");
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(403).send("Unauthorized: Invalid token");
        }
        req.user = decoded
        next()
    })

}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mf5r9.mongodb.net/?appName=Cluster0`;
// const uri = process.env.DB_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API versionnnnn
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = client.db('job-portal');
        const jobsCollection = db.collection('jobs')


        // jwt related APIS
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' })
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                })
                .send({ success: true })
        })

        // signOut user & cookie token remove
        app.post('/logout', async (req, res) => {
            console.log('object');
            res
                .clearCookie('token', {
                    httpOnly: true,
                    secure: false
                })
                .send({ success: true })
        })


        // all jobs get
        app.get('/jobs', verifyToken, async (req, res) => {
            const token = req.cookies
            console.log(token);
            const jobs = await jobsCollection.find({}).toArray()
            res.send(jobs)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Job portal server is running....!')
})

app.listen(port, () => {
    console.log(`JOB server running on port....! ${port}`,);
})


