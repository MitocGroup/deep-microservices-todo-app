/*<DEEP_CFG_START> (10/6/2017, 10:31:53 PM)*/
global.__DEEP_CFG__ =
  global.__DEEP_CFG__ ||
  {"env":"dev","deployId":"e2a55049","awsRegion":"us-east-1","models":[{"task":{"Title":"string","Completed":"boolean","Id":"timeUUID"}}],"identityPoolId":"us-east-1:ec5b142c-d498-47ed-b94c-24e5127115b1","identityProviders":{},"microservices":{"ng-todo":{"isRoot":true,"parameters":{"runAsApi":true},"resources":{"task":{"create":{"type":"lambda","methods":["POST"],"forceUserIdentity":true,"apiCache":{"enabled":false,"ttl":-1},"region":"us-east-1","scope":"public","source":{"api":"https://cm7ql70gb4.execute-api.us-east-1.amazonaws.com/v1/ng-todo/task/create","original":"arn:aws:lambda:us-east-1:722084099005:function:DeepDevTaskCreate069665612b21"},"api":{"authorization":"AWS_IAM","keyRequired":false}},"retrieve":{"type":"lambda","methods":["GET"],"forceUserIdentity":true,"apiCache":{"enabled":false,"ttl":-1},"region":"us-east-1","scope":"public","source":{"api":"https://cm7ql70gb4.execute-api.us-east-1.amazonaws.com/v1/ng-todo/task/retrieve","original":"arn:aws:lambda:us-east-1:722084099005:function:DeepDevTaskRetrieve069665612b21"},"api":{"authorization":"AWS_IAM","keyRequired":false}},"update":{"type":"lambda","methods":["PUT"],"forceUserIdentity":true,"apiCache":{"enabled":false,"ttl":-1},"region":"us-east-1","scope":"public","source":{"api":"https://cm7ql70gb4.execute-api.us-east-1.amazonaws.com/v1/ng-todo/task/update","original":"arn:aws:lambda:us-east-1:722084099005:function:DeepDevTaskUpdate069665612b21"},"api":{"authorization":"AWS_IAM","keyRequired":false}},"delete":{"type":"lambda","methods":["DELETE"],"forceUserIdentity":true,"apiCache":{"enabled":false,"ttl":-1},"region":"us-east-1","scope":"public","source":{"api":"https://cm7ql70gb4.execute-api.us-east-1.amazonaws.com/v1/ng-todo/task/delete","original":"arn:aws:lambda:us-east-1:722084099005:function:DeepDevTaskDelete069665612b21"},"api":{"authorization":"AWS_IAM","keyRequired":false}}}}}},"globals":{},"searchDomains":{},"validationSchemas":[],"modelsSettings":[{"task":{"readCapacity":1,"writeCapacity":1,"maxReadCapacity":10000,"maxWriteCapacity":10000}}],"website":{"cloudfront":"d3ojuy3e2p8zve.cloudfront.net","apigateway":"https://cm7ql70gb4.execute-api.us-east-1.amazonaws.com/v1"},"rumQueue":{},"forceUserIdentity":true,"microserviceIdentifier":"ng-todo","awsAccountId":722084099005,"appIdentifier":"c1c2ff2f892e9689076a0af6fce94598","timestamp":1507318313149,"buckets":{"private":{"name":"deep-dev-private-65612b21"},"public":{"website":"deep-dev-public-65612b21.s3-website-us-east-1.amazonaws.com","name":"deep-dev-public-65612b21"}},"tablesNames":{"task":"DeepDevTask65612b21"},"nonPartitionedModels":[],"api":{"id":"cm7ql70gb4","name":"DeepDevApi65612b21","baseUrl":"https://cm7ql70gb4.execute-api.us-east-1.amazonaws.com/v1","usagePlan":{"id":"2iwqnt","name":"DeepDevApiDefaultPlan65612b21","stages":[{"apiId":"cm7ql70gb4","stage":"v1"}]}},"dbOffloadQueues":{"task":{"name":"DeepDevDbol-taskQueue65612b21","url":"https://sqs.us-east-1.amazonaws.com/722084099005/DeepDevDbol-taskQueue65612b21"}}}
;
/*<DEEP_CFG_END>*/
'use strict';

const DeepFramework = require('deep-framework');
const Handler = require('./Handler');

module.exports = DeepFramework.LambdaHandler(Handler);
