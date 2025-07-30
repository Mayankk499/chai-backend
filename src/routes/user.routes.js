import { Router } from "express";
import { logoutUser, refreshAccessToken, rejisterUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { loginUser } from "../controllers/user.controller.js";
import { rejisterUser } from "../controllers/user.controller.js";
import { refreshAccessToken } from "../controllers/user.controller.js";


const router = Router()

router.route("/rejister").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    rejisterUser
)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router