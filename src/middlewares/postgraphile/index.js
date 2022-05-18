const express = require('express');

//Postgraphile imports
const { postgraphile, makePluginHook } = require('postgraphile');
const ConnectionFilterPlugin = require('postgraphile-plugin-connection-filter');
const PgPubsub = require('@graphile/pg-pubsub');
const { giveMeConnectionString } = require("./../../utils");


const pluginHook = makePluginHook([PgPubsub]);
const postgraphileRouter = express.Router()
const connStr = giveMeConnectionString();
// let connStr = "";
// if (process.env.NODE_ENV === "production") {
//   console.log(process.env.NODE_ENV, "NODE_ENV");
//   connStr = `postgres://${process.env.PROD_DB_USER_NAME}:${process.env.PROD_DB_SECRET}@${process.env.PROD_DB_HOST}:5432/${process.env.PROD_DB}`;
// } else if (process.env.NODE_ENV === "staging") {
//   connStr = `postgres://${process.env.STAGE_DB_USER_NAME}:${process.env.STAGE_DB_SECRET}@${process.env.STAGE_DB_HOST}:5432/${process.env.STAGE_DB}`;
// } else {
//   connStr = `postgres://${process.env.LOCAL_DB_USER_NAME}:${process.env.LOCAL_DB_SECRET}@${process.env.LOCAL_DB_HOST}:5432/${process.env.LOCAL_DB}`;
// }
console.log(connStr,"==========");

postgraphileRouter.use(
    postgraphile(
        connStr, {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        pluginHook,
        subscriptions: true,
        simpleSubscriptions: true,
        appendPlugins: [
            ConnectionFilterPlugin,
        ],
        graphileBuildOptions: {
            connectionFilterRelations: true,
        },
}))


module.exports =  postgraphileRouter;

