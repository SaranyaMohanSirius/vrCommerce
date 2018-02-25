import constants from '../../constants/wcs/constants'
import q from 'q';
import getLogger from 'util';

//lets import the mongodb native drivers.
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
import { MongoClient } from 'mongodb';
var database;
// let logger= getLogger();

// Use connect method to connect to the Server
// Init method
MongoClient.connect(constants.DB_URL, function(err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to: ' + constants.DB_URL);
        database = db;
    }
});

export default {
   /* 
    * Method for getting the keywords from DB
    * Params: uniqueId, tokenType
    */
    getKeyword: function(uniqueId, tokenType, langId, storeId) {

        var deferred = q.defer();
        var collection = database.collection('seo');
        collection.find({ "TOKENNAME" : tokenType, "TOKENVALUE" : parseInt(uniqueId), "STOREENT_ID": storeId, "STATUS": 1, "LANGUAGE_ID": langId}).toArray(function(err, result) {
            var response = {};
            console.log(JSON.stringify(result));
           if (err) {
                console.log(err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },

    /* 
    * Method for getting the records from DB
    * Params: uniqueId, tokenType
    */
    getRecords: function(keyword, tokenName,langId, storeId) {

        var deferred = q.defer();
        var collection = database.collection('seo');
        collection.find({ "URLKEYWORD" : keyword,"TOKENNAME": tokenName,"STOREENT_ID": storeId, "STATUS": 1, "LANGUAGE_ID": langId}).toArray(function(err, result) {
            var response = {};
            console.log(JSON.stringify(result));
            if (err) {
                console.log(err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    }
};
