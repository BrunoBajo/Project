const dbConfig = {
        synchronize:false
};

switch(process.env.NODE_ENV){
    case "development":
        Object.assign(dbConfig,{
            type:"sqlite",
            database: "test.sqlite",
            entities: ["**/*.entity.ts"],
        })
    case "test":
    case "production":
    default:
        throw new Error("Unknown Environment!")
}

module.exports=dbConfig;