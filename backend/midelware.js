const { getTheUser } = require("./token")
const path = require("path")

async function midelware(req, res, next) {
    const userId = req.cookies.uid
    if (!userId) return res.sendFile(path.resolve(__dirname, '../public', 'signin.html'))
    const user = getTheUser(userId)
    if (!user) return res.sendFile(path.resolve(__dirname, '../public', 'signin.html'))
    req.user = user
    next()
}

module.exports = {
    midelware
}