# learnTS

## Software required

**AWS CLI** - *maybe* For deploying application.  
- Alternative `.gitignore` with `.env.dev` storing keys.
- Prod will have keys stored in *Secrets*.

## Goals

Build an application with typescript.

### Application

#### Infrastructure

[AWS CDK aws-lambda-nodejs module](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html) to `import` our function code and deploy to an AWS account.

#### CI/CD

Github Action to run `yarn deploy --prod` this will deploy to prod.  `yarn deploy` will deploy a dev environment to your current AWS account.

#### View


#### Backend


#### Datastore



### How

Use:
    - Typescript 3.8
    - VSCode
### What