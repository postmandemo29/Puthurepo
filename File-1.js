const platformClient = require("purecloud-platform-client-v2");

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.us_east_1); // Genesys Cloud region

// Set client credentials
const clientId = "cdac8e6e-e86d-4086-89e9-001a064e4b2f";
const clientSecret = "q9cFgkwjFGHGgBpcnnkqpTHGtTIUxOEGvkMMq_piFCE";
// Authenticate and get an access token
client.loginClientCredentialsGrant(clientId, clientSecret)
    .then(() => {
let apiInstance = new platformClient.UsersApi();

let opts = { 
  "pageSize": 25, // Number | Page size
  "pageNumber": 1, // Number | Page number
  //"id": ["id_example"], // [String] | A list of user IDs to fetch by bulk
  //"jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  "sortOrder": "ASC", // String | Ascending or descending sort order
  "expand": ["expand_example"], // [String] | Which fields, if any, to expand
  //"integrationPresenceSource": "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  "state": "active" // String | Only list users of this state
};

// Get the list of available users.
apiInstance.getUsers(opts)
  .then((data) => {
    console.log(`getUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log("There was a failure calling getUsers");
    console.error(err);
  });
})
.catch((err) => {
    console.log("There was a failure calling loginClientCredentialsGrant");
    console.error(err);
});
