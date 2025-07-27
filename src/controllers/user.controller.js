import {asyncHandler} from "../utils/asyncHandler.js";

const rejisterUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "backend with chai -- yt"
    })
})

export {rejisterUser}