//https://yuuvis.io/docs/services/yuuvis-dms-core/operations/ObjectsPost?
//https://yuuvis.io/Getting-Started
//https://yuuvis.io/how-to/import
const request = require('request')

const fs = require('fs')

var key = "7e60b51545be4afb901c3a862a4553ee"
var baseUrl = "https://api.yuuvis.io/"

var doc_name = ""
var doc_filename = ""
var cid = ""
var doc_mimeType = ""

export function createDocumentMetadata(doc_title, doc_fileName, doc_cid, doc_contentType) {
  return {
    "objects":[
      {
        "properties": {
            "enaio:objectTypeId": {
                "value": "document"
            },
            "Name": {
                "value": doc_title
            }
        },
        "contentStreams": [{
            "mimeType": doc_contentType,
            "fileName": doc_fileName,
            "cid": doc_cid
        }]
      }
    ]
  };
}

export function createImportFormdata(doc_title, doc_fileName, doc_cid, doc_contentType){
  var formData = {}
  formData['data'] = {
    value: JSON.stringify(createDocumentMetadata(doc_title, doc_fileName, doc_cid, doc_contentType)),
    options: {
      contentType: 'application/json'
    }
  }
  formData[doc_cid]= {
    // reads file
    value: fs.createReadStream(doc_fileName),
    options: {
      contentType: doc_contentType,
      filename: doc_fileName
    }
  }
  return formData;
}

export function createRequest(doc_title, doc_fileName, doc_cid, doc_contentType) {
  return{
    method: 'POST',
    uri: baseUrl + 'dms/objects/',
    headers: {
      'Accept': 'application/json',
      'Ocp-Apim-Subscription-Key': key
    },
    formData: createImportFormdata(doc_title, doc_fileName, doc_cid, doc_contentType)
  }
}

var requestObject = createRequest(doc_name, doc_filename, doc_cid, doc_mimeType)


export function executeRequest(request_object){
  request.post(request_object, export function callback(err, httpResponse, body) {
    if(err) throw err;
    else {
      console.log(httpResponse.statusCode)
      console.log(body)
    }
  })
}

executeRequest(requestObject)
