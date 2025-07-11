const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || "my_jwt_secret";

// Middleware to verify JWT
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

// Function to generate JWT token for a user
exports.generateToken = (user) => {
    return jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};
