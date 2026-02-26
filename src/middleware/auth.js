import jwt from "jsonwebtoken";
import { config } from "dotenv";

config({ path: ".env" });

export const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res
                .status(401)
                .json({ message: "Unauthorized - Token missing" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Unauthorized - Invalid token" });
    }
};

export const createToken = (user) => {
    return jwt.sign(
        user,
        process.env.JWT_SECRET,
        {
            expiresIn: "1d", // token expired 1 hari
        }
    );
};

export const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Forbidden - Access denied",
            });
        }

        next();
    };
};