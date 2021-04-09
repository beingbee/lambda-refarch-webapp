// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2hlo1m87r533tgf32bi9uskrv0",     // CognitoClientID
  "api_base_url": "https://8zu1jf4yse.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-refarch.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d357a9s84vny26.amplifyapp.com"                                      // AmplifyURL
  //"redirect_url": "http://127.0.0.1:8080"                                      // AmplifyURL
};

export default config;
