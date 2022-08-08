const {sequelize} = require('../models/index')

async function main(){
    await sequelize.sync()
}

main()