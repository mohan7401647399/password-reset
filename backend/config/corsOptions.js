const corsOptions = {
    origin: ["http://localhost:5173", "https://password-reset-odmp.onrender.com", "*"],
    // origin: "https://password-reset-odmp.onrender.com",
    methods: ["GET", "POST"],
    credentials: true
}

module.exports = corsOptions;
