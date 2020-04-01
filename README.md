# learnTS

## Software required

**AWS CLI** - *maybe* For deploying application.  
- Alternative `.gitignore` with `.env.dev` storing keys.
- Prod will have keys stored in *Secrets*.

[**VSCode**](https://code.visualstudio.com/download) - For IDE with Typescript.

## Goals

Build an application with typescript.

### Application

#### Infrastructure

#### CI/CD

Accomplished using Github Actions for **free**.

> secrets

**SLACK_WEBHOOK** - this is for semantic-release to notify Slack.  
**TRILOM_BOT_TOKEN** - this is because some GH Actions require a non-action token to trigger certain sub-actions.  
**NPM_TOKEN** - this is a token to release our package to NPM.  

##### **On Pull Request**

`.github/workflows/pr.yaml` will run.

This will:

- `build` - with [yarn](https://classic.yarnpkg.com/en/docs/cli/install/) as a packager and [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) as a compiler
- `test` - with [jest](https://jestjs.io/) using [ts-jest](https://github.com/kulshekhar/ts-jest) as the [preprocessor](https://jestjs.io/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object) and [jest-circus](https://github.com/facebook/jest/tree/master/packages/jest-circus) as a [testRunner](https://jestjs.io/docs/en/configuration#testrunner-string).
- `lint` - with [eslint](https://eslint.org/) using [action-eslint](https://github.com/reviewdog/action-eslint) this will lint and comment back to the PR if problems and not a fork.
- `format` - with [prettier](https://prettier.io/) and push back lint fixes if not a fork.

##### **On Push**

`.github/workflows/release.yaml` will run if branch is `master, next, alpha, or beta`.  

This will:

- `build` - with [yarn](https://classic.yarnpkg.com/en/docs/cli/install/) as a packager and [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) as a compiler
- `test` - with [jest](https://jestjs.io/) using [ts-jest](https://github.com/kulshekhar/ts-jest) as the [preprocessor](https://jestjs.io/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object) and [jest-circus](https://github.com/facebook/jest/tree/master/packages/jest-circus) as a [testRunner](https://jestjs.io/docs/en/configuration#testrunner-string).
- `release` - with [semantic-release](https://github.com/semantic-release/semantic-release) if triggered by:
  - `fix` **(1.0.X)** - adding `fix:` or `fix(page): your message` to a git commit message
  - `feat` **(1.X.0)** - adding `feat:` or `feat(thing): your message` to a git commit message
  - `perf BREAKING CHANGE` **(X.0.1)** - adding `perf:` or `perf(change): your message` to git commit message or `BREAKING CHANGE:` to the git body
Github Action to run `yarn deploy --prod` this will deploy to prod.  `yarn deploy` will deploy a dev environment to your current AWS account.
  - Semantic release will use:
    - [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer#options) to parse commits.
    - [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator#options) to generate release notes.
    - [semantic-release-slack-bot](https://github.com/juliuscc/semantic-release-slack-bot#readme) to notify slack.
    - [@semantic-release/changelog](https://github.com/semantic-release/changelog) to create a changelog.
    - [@semantic-release/npm](https://github.com/semantic-release/npm) to release to NPM
    - [@semantic-release/github](https://github.com/semantic-release/github) to release to Github
    - [@semantic-release/git](https://github.com/semantic-release/git) to push release commit.
  - After semantic release, `deploy` will to deploy the application to [AWS](https://aws.amazon.com/) using [CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html).
  
#### View

Slack App
OR
React App

#### Backend

[AWS Lambda](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html)

#### Datastore

[AWS DynamoDB](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-dynamodb.Table.html)
