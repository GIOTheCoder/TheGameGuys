const daoCommon = require('./common/daoCommon')

const gameDao = {
    ...daoCommon, 
    ...require('./api/gameDao')
}

const categoryDao = {
    ...daoCommon,
    ...require('./api/categoryDao')
}

const publisherDao = {
    ...daoCommon,
    ...require('./api/publisherDao')
}
module.exports = {
    gameDao,
    categoryDao,
    publisherDao
}