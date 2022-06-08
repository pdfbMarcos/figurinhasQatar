import client from "./client";

const endpoint = "/documents";

const getDocuments = (params) => client.get(endpoint + params);

const addDocument = (document) => client.post(endpoint, document);

const updDocument = (document, params) =>
  client.put(endpoint + params, document);

export default { addDocument, getDocuments, updDocument };
