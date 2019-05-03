import AWSAppsyncClient, { AUTH_TYPE } from 'aws-appsync'
import * as AWS from 'aws-sdk'
let awsConfig = {
  aws_project_region: 'ap-southeast-2',
  aws_appsync_graphqlEndpoint:
    'https://q3ckq5u6dvds7b3pxdtswxzjii.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  aws_appsync_region: 'ap-southeast-2',
  aws_appsync_authenticationType: 'AWS_IAM',
}
let {
  aws_project_region: projectRegion,
  aws_appsync_graphqlEndpoint: url,
  aws_appsync_region: region,
  aws_appsync_authenticationType: type,
} = awsConfig

const IdentityPoolId = 'ap-southeast-2:43d98a1a-65ef-496d-ba6d-ca788632a755'
let client: AWSAppsyncClient<any> | null = null

const init = async () => {
  if (client) return client
  client = new AWSAppsyncClient({
    url,
    region: projectRegion,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: new AWS.CognitoIdentityCredentials(
        {
          IdentityPoolId,
        },
        {
          region,
        }
      ),
    },
  })

  // client.hydrated().then(client => {
  //   console.log('hydrated completed')
  // })
  return client
}

export default init
