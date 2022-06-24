import client from "./client";

const endpoint = "/sourceDocuments";

const getSourceDocuments = (params) => client.get(endpoint + "/" + params);

export default { getSourceDocuments };
