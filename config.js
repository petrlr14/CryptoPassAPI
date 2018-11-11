module.exports ={
    port: process.env.PORT || 3001,
    bd: process.env.MONGODB || "mongodb://Crypty:Andresp3ndejo@cryptopasscloud-shard-00-00-xpegu.gcp.mongodb.net:27017,cryptopasscloud-shard-00-01-xpegu.gcp.mongodb.net:27017,cryptopasscloud-shard-00-02-xpegu.gcp.mongodb.net:27017/cryptopass?ssl=true&replicaSet=CryptoPassCloud-shard-0&authSource=admin&retryWrites=true",
    SECRET_TOKEN: '4ndr3sp3nd3j0'
}