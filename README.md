# emissions-visualisation

This project can be previewed on https://emissions-visualisat-git-72bb72-jorge-antunes-projects-fee3859b.vercel.app/analyse

Notes taken during the creation of the project can be found [in the _Notes folder](_Notes/Notes.md)

## Instructions

### Prerequisites
NVM is used to specify which node-version is used in the project. If the below instructions fail, look up the [official docs](https://github.com/nvm-sh/nvm).
```sh
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# use specified node version
nvm use
```

We'll use yarn for faster and simpler dependency management in the project. If the below installation instructions fail, look up the [official docs](https://classic.yarnpkg.com/lang/en/docs/install/).
```sh
# install `yarn` to make sure it's available as a global command
npm i -g yarn
```

### Running the project
```sh
# install project dependencies
yarn

# run development server
yarn dev
```

### Building the project
```sh
# generates a production deploy
yarn build
```
