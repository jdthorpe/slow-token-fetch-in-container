# Why

A minimal reproducible example where fetching a token using `@azure/identity`
takes upwards of 5 minutes in a docker container using the `@azure/identity`
library but fetching the same token using the AZ CLI in that same docker
container finishes almost immediately.

## Usage

```bash
npm install
az login
docker-compose run test
```

### Result

After building the container, a message similar to the following is printed to the screen:

```Text
Fetched a token with AzureCliCredential in 0.8 seconds
Fetched a token with DefaultAzureCredential in 328.7 seconds
```

whereas using the similar commands run in the same docker container using the az cli directly complete almost immediately:

```bash
dc run test bash -c "az account get-access-token"
```

and running the main script on the host machine yields:

```bash
$ node ./index.js
Fetched a token in 2.4 seconds
```
