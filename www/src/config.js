// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3qn4um721sssmnahghd0t47g3i",     // CognitoClientID
  "api_base_url": "https://gocn4wkd79.execute-api.ap-northeast-2.amazonaws.com/prod",    // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-refarch.auth.ap-northeast-2.amazoncognito.com",  // CognitoDomainName
  "redirect_url": "https://master.d2nq74g7a5x51y.amplifyapp.com"         // AmplifyURL
  //"redirect_url": "http://127.0.0.1:8080"                              // AmplifyURL
};

export default config;
