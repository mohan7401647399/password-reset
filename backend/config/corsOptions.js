const corsOptions = {
    //origin: ["http://localhost:5173","*"],
    origin:["https://keen-melomakarona-8c650c.netlify.app","http://localhost:5173"]
    methods: ["GET", "POST"],
    credentials: true
}

module.exports = corsOptions;
