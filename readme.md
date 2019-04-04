# <div align="center"><img src="./icon.png" width=256><br>alfred-slack-status</div>

[![Build Status](https://travis-ci.org/importre/alfred-slack-status.svg?branch=master)](https://travis-ci.org/importre/alfred-slack-status)

> :speech_balloon: Alfred 3 workflow to change Slack statuses at once


## Install

```
$ npm i -g alfred-slack-status
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

### Create legacy slack tokens

1. [Sign in](https://slack.com/signin) to all your teams with the slack web app
2. Visit https://api.slack.com/custom-integrations/legacy-tokens
3. Add a token for every team in there (in the `Legacy token generator` section)
4. Type `slacktoken key value` foreach team as explained `Save slack tokens` section bellow.

### Save slack tokens

<img src="https://cloud.githubusercontent.com/assets/1744446/25580054/67b07962-2eb8-11e7-84ff-eab135dca671.png" alt="token" width=694>

In Alfred, type `slacktoken`, <kbd>Space</kbd>, key(maybe team name, **no whitespaces**), <kbd>Space</kbd>, and value(token).

### Set status

There are two options.

#### [Select suggested](./statuses.json)

<img src="https://cloud.githubusercontent.com/assets/1744446/25580104/d7577432-2eb8-11e7-8198-80e60fea2595.png" alt="custom" width=694>

In Alfred, type `slackstatus`, select a status.

#### Customize

<img src="https://cloud.githubusercontent.com/assets/1744446/25578941/371a4bb6-2eae-11e7-97d4-e2cd262d8afc.png" alt="custom" width=694>

In Alfred, type `slackstatus`, <kbd>Space</kbd>, and your query.

The query is

```
:sunglasses: your status
```

or

```
😎 your status
```

And then check your profile :tada:

<img src="https://cloud.githubusercontent.com/assets/1744446/25579095/945f5c2a-2eaf-11e7-8db9-a1c211a2c02b.png" alt="result" width=119>

### Remove status

In Alfred, type `slackstatus clear` or `slackstatus clean`.


## License

MIT © [Jaewe Heo](http://importre.com)

