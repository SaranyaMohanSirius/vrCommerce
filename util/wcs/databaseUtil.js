import constants from '../../constants/wcs/constants'
import q from 'q';
import {getLogger} from './util.js';
var database;
let logger= getLogger();
/**
 * 
 * lets import the mongodb native drivers.
 *We need to work with "MongoClient" interface in order to connect to a mongodb server.
*/
import { MongoClient } from 'mongodb';

/**
 * 
 *  Use connect method to connect to the Server
 *  Init method
 */
MongoClient.connect(constants.DB_URL, function(err, db) {
    if (err) {
        logger.info('Unable to connect to the mongoDB server. Error:', err);
    } else {
        logger.info('Connection established to: ' + constants.DB_URL);
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
            logger.info(JSON.stringify(result));
           if (err) {
                logger.info(err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                logger.info('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },
    /* 
    * Method for getting the records from DB  Old Function
    * Params: Keyword
    */
   getRecords: function(keyword) {
    var deferred = q.defer();
    var collection = database.collection('seo');
    collection.find({ "URLKEYWORD" : keyword}).toArray(function(err, result) {
        var response = {};
        logger.info(JSON.stringify(result));
        if (err) {
            logger.info('Errror in getRecords'+err);
            response.errorObject = err;
            deferred.reject(response);
        } else if (result.length) {
            deferred.resolve(result);
        } else {
            logger.info('No document(s) found with defined "find" criteria!');
            deferred.resolve(result);
        }
    });

    return deferred.promise;
    },
    /* 
    * Method for getting the records from DB
    * Params:  keyWord, TokenName ,langId,storeId
    */
    getRecordsByKeyword: function(keyword, tokenName,langId, storeId) {
        var deferred = q.defer();
        var collection = database.collection('seo');
        collection.find({ "URLKEYWORD" : keyword,"TOKENNAME": tokenName, "STOREENT_ID": parseInt(storeId) , "STATUS" : 1, "LANGUAGE_ID": langId }).toArray(function(err, result) {
            var response = {};
            logger.info(JSON.stringify(result));
            if (err) {
                logger.info('Errror in getRecordsByKeyword'+err);
                response.errorObject = err;
                deferred.reject(response);
            } else if (result.length) {
                deferred.resolve(result);
            } else {
                logger.info('No document(s) found with defined "find" criteria!');
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },
    /* 
    * Method for getting the records from DB
    * Params: ProductId, TokenName ,langId,storeId
    */
   getRecordsByProductId: function(productId, tokenName,langId, storeId) {
    var deferred = q.defer();
    var collection = database.collection('seo');
    collection.find({ "TOKENVALUE" : parseInt(productId),"TOKENNAME": tokenName, "STOREENT_ID": parseInt(storeId) , "STATUS" : 1, "LANGUAGE_ID": langId }).toArray(function(err, result) {
        var response = {};
        logger.info(JSON.stringify(result));
        if (err) {
            logger.info('Errror in getRecordsByProductId'+err);
            response.errorObject = err;
            deferred.reject(response);
        } else if (result.length) {
            deferred.resolve(result);
        } else {
            logger.info('No document(s) found with defined "find" criteria!');
            deferred.resolve(result);
        }
    });

    return deferred.promise;
}
};
