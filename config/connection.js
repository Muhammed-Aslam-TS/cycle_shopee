const MongoClient = require('mongodb').MongoClient
const state = { db: null }

module.exports.connect = function (done) {
    const url = 'mongodb+srv://aslam123:aslam123@cluster0.re2ljg7.mongodb.net/test'

    const dbname = 'shopping'
    MongoClient.connect(url, (err, data) => {
        if (err) return done(err)
        state.db = data.db(dbname)
        done()
    })
}
module.exports.get = function () {
    return state.db
}


