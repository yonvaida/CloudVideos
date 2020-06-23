const express = require('express');
import MysqlConnector from '../Db/MysqlConnector';
import settings from '../../Settings/settings.json'
const fs = require('fs');

const adminApi = express();

adminApi.get('/allMovies',(req,res) => {
  let dbConnector = new MysqlConnector();
  dbConnector.getAllMovies().then((response)=>{
    res.send(response);
  }).catch((err)=>{
    console.log(err);
  })
})

adminApi.get('/settings',(req,res) => {
  res.send(settings);
})

export default adminApi;