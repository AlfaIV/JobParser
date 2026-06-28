### Game Initialization and Setup

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/examples/game/game.html

Initializes the game by creating the game piece, score display, and starting the game area. This function should be called once when the game begins.

```javascript
var myGamePiece;
var myObstacles = [];
var myScore;
function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myGamePiece.gravity = 0.05;
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}
```

--------------------------------

### Install Experimental Version

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/experimental.md

Install the experimental branch of the node-telegram-bot-api library using npm.

```bash
$ npm install yagop/node-telegram-bot-api#experimental
```

--------------------------------

### Install node-telegram-bot-api

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/README.md

Install the library using npm. For TypeScript projects, also install the type definitions.

```sh
npm i node-telegram-bot-api
```

```sh
npm install --save-dev @types/node-telegram-bot-api
```

--------------------------------

### Generate API Documentation

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/CONTRIBUTING.md

Run this command to generate the API documentation file `doc/api.md`. Ensure you have the necessary dependencies installed.

```bash
$ npm run doc
```

--------------------------------

### telegramBot.startPolling([options])

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Starts polling for updates from Telegram. Rejects the promise if a webhook is already in use. Options can be provided to control polling behavior, such as restarting.

```APIDOC
## telegramBot.startPolling([options])

### Description
Starts polling for updates from Telegram. Rejects the promise if a webhook is already in use. Options can be provided to control polling behavior, such as restarting.

### Method
`startPolling`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```javascript
// Example usage:
// bot.startPolling({ restart: true });
```

### Response
#### Success Response
Returns a Promise that resolves when polling starts successfully.

#### Response Example
```json
// Promise resolves with no specific value, indicates success.
```
```

--------------------------------

### Game Area Management

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/examples/game/game.html

Manages the HTML canvas element for the game, including setting dimensions, rendering context, and clearing the canvas between frames. The start method should be called once to set up the game area.

```javascript
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
```

--------------------------------

### telegramBot.getMyDescription

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get the current bot description for the given user language.

```APIDOC
## telegramBot.getMyDescription([options])

### Description
Use this method to get the current bot description for the given user language.

### Method
GET

### Endpoint
/getMyDescription

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "options": {}
}
```

### Response
#### Success Response (200)
- **descriptionInfo** (Object) - Returns BotDescription on success.

#### Response Example
```json
{
  "descriptionInfo": {
    "description": "A bot that does amazing things."
  }
}
```
```

--------------------------------

### getBusinessConnection

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Gets information about a business connection. Requires the business connection ID.

```APIDOC
## getBusinessConnection

### Description
Gets information about a business connection.

### Method
GET

### Endpoint
/getBusinessConnection

### Parameters
#### Path Parameters
- **businessConnectionId** (string) - Required - The business connection ID to get information about

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### telegramBot.getMyCommands

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get the current list of the bot's commands for the given scope and user language.

```APIDOC
## telegramBot.getMyCommands([options])

### Description
Use this method to get the current list of the bot's commands for the given scope and user language.

### Method
GET

### Endpoint
/getMyCommands

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "options": {}
}
```

### Response
#### Success Response (200)
- **commands** (Array) - Array of BotCommand on success. If commands aren't set, an empty list is returned.

#### Response Example
```json
{
  "commands": [
    {
      "command": "start",
      "description": "Start the bot"
    }
  ]
}
```
```

--------------------------------

### getChat

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Gets up to date information about the chat (current name of the chat, etc.).

```APIDOC
## getChat

### Description
Gets up to date information about the chat.

### Method
GET (assumed)

### Endpoint
/getChat

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **chatId** (string) - Required - Unique identifier for the target chat.
- **options** (object) - Optional - Additional options.
```

--------------------------------

### getManagedBotToken

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Gets a managed bot token for a user. Requires the user ID.

```APIDOC
## getManagedBotToken

### Description
Gets a managed bot token for a user.

### Method
GET

### Endpoint
/getManagedBotToken

### Parameters
#### Path Parameters
- **userId** (string) - Required - Unique identifier of the target user

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### telegramBot.getWebHookInfo

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get current webhook status. On success, returns a WebhookInfo object.

```APIDOC
## telegramBot.getWebHookInfo([options])

### Description
Use this method to get current webhook status. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object. If the bot is using getUpdates, will return an object with the url field empty.

### Method
Not specified (likely GET for API calls)

### Endpoint
Not specified (related to Telegram Bot API)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "options": { /* Additional Telegram query options */ }
}
```

### Response
#### Success Response (200)
- **result** (WebhookInfo) - Information about the webhook status

#### Response Example
```json
{
  "ok": true,
  "result": {
    "url": "",
    "has_custom_certificate": false,
    "pending_update_count": 0,
    "ip_address": ""
  }
}
```
```

--------------------------------

### getUserGifts

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Gets gifts owned by a regular user.

```APIDOC
## telegramBot.getUserGifts(userId, [options])

### Description
Use this method to get gifts owned by a regular user.

### Method
GET (assumed, based on typical API patterns for data retrieval)

### Endpoint
/getUserGifts

### Parameters
#### Path Parameters
None

#### Query Parameters
- **userId** (Number) - Required - Unique identifier of the target user.
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "userId": 12345,
  "options": {}
}
```

### Response
#### Success Response (200)
- **OwnedGifts** (Object) - On success, returns an [OwnedGifts](https://core.telegram.org/bots/api#ownedgifts) object.

#### Response Example
```json
{
  "ok": true,
  "result": {
    "gifts": []
  }
}
```
```

--------------------------------

### Handle Polling Errors

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Example of listening for and handling 'polling_error' events. This snippet logs the error code, which could indicate a fatal issue.

```javascript
bot.on('polling_error', (error) => {
  console.log(error.code);  // => 'EFATAL'
});
```

--------------------------------

### telegramBot.getBusinessConnection

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.

```APIDOC
## telegramBot.getBusinessConnection(businessConnectionId, [options])

### Description
Use this method to get information about the connection of the bot with a business account.

### Method
GET

### Endpoint
/getBusinessConnection

### Parameters
#### Path Parameters
- None

#### Query Parameters
- **businessConnectionId** (Number | String) - Required - Unique identifier for the group/channel
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "businessConnectionId": "BUSINESS_CONNECTION_ID"
}
```

### Response
#### Success Response (200)
- **BusinessConnection** (Object) - A BusinessConnection object.

#### Response Example
```json
{
  "id": "BUSINESS_CONNECTION_ID",
  "user": {
    "id": 123456789,
    "first_name": "BusinessUser",
    "is_bot": false
  },
  "date_start": 1678886400,
  "date_end": 1678972800,
  "can_reply": true,
  "public_username": "business_account_username",
  "private_username": "business_account_private_username",
  "max_reaction_count": 10
}
```
```

--------------------------------

### telegramBot.getUserChatBoosts

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object on success.

```APIDOC
## telegramBot.getUserChatBoosts(chatId, userId, [options])

### Description
Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat.

### Method
GET

### Endpoint
/getUserChatBoosts

### Parameters
#### Path Parameters
- None

#### Query Parameters
- **chatId** (Number | String) - Required - Unique identifier for the group/channel
- **userId** (Number) - Required - Unique identifier of the target user
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "chatId": "-1001234567890",
  "userId": 123456789
}
```

### Response
#### Success Response (200)
- **UserChatBoosts** (Object) - A UserChatBoosts object.

#### Response Example
```json
{
  "boosts": [
    {
      "user": {
        "id": 123456789,
        "first_name": "UserName"
      },
      "boost_source": {
        "source": "gift_code",
        "via_bot": {
          "id": 987654321,
          "first_name": "GiftBot",
          "username": "gift_bot"
        }
      },
      "add_date": 1678886400,
      "entropy": "some_random_string"
    }
  ]
}
```
```

--------------------------------

### Handle Telegram API Errors

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Example of catching and handling errors when sending a message to a non-existent user. It logs the error code and the Telegram response body.

```javascript
bot.sendMessage(nonExistentUserId, 'text').catch((error) => {
  console.log(error.code);  // => 'ETELEGRAM'
  console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
});
```

--------------------------------

### getChatMember

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get information about the chat member. Returns a ChatMember object on success.

```APIDOC
## getChatMember

### Description
Gets information about a chat member.

### Method
GET (assumed)

### Endpoint
/getChatMember

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **chatId** (string) - Required - Unique identifier for the target chat.
- **userId** (integer) - Required - Unique identifier of the target user.
- **options** (object) - Optional - Additional options.
```

--------------------------------

### telegramBot.getMyName

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get the current bot name for the given user language.

```APIDOC
## telegramBot.getMyName([options])

### Description
Use this method to get the current bot name for the given user language.

### Method
GET

### Endpoint
/getMyName

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "options": {}
}
```

### Response
#### Success Response (200)
- **nameInfo** (Object) - BotName on success

#### Response Example
```json
{
  "nameInfo": {
    "name": "MyAwesomeBot"
  }
}
```
```

--------------------------------

### telegramBot.getManagedBotToken

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to get the token of a managed bot. Returns the token of the managed bot as a String on success.

```APIDOC
## telegramBot.getManagedBotToken(userId, [options])

### Description
Use this method to get the token of a managed bot.

### Method
GET

### Endpoint
/getManagedBotToken

### Parameters
#### Path Parameters
- None

#### Query Parameters
- **userId** (Number | String) - Required - User identifier of the managed bot whose token will be returned
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "userId": "MANAGED_BOT_USER_ID"
}
```

### Response
#### Success Response (200)
- **token** (String) - The token of the managed bot.

#### Response Example
```json
{
  "token": "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij"
}
```
```

--------------------------------

### Interval Check Helper Function

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/examples/game/game.html

A utility function to determine if a certain number of frames have passed since the game started. Used for timing events like obstacle generation.

```javascript
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}
```

--------------------------------

### getChatGifts

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Gets gifts received by a channel chat or a business account managed by the bot. Requires the 'can_view_gifts_and_stars' administrator right if the chat is a channel.

```APIDOC
## telegramBot.getChatGifts(chatId, [options])

### Description
Use this method to get gifts received by a channel chat or a business account managed by the bot.

Requires the **can_view_gifts_and_stars** administrator right if the chat is a channel.

### Method
GET (assumed, based on typical API patterns for data retrieval)

### Endpoint
/getChatGifts

### Parameters
#### Path Parameters
None

#### Query Parameters
- **chatId** (Number | String) - Required - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`).
- **options** (Object) - Optional - Additional Telegram query options

### Request Example
```json
{
  "chatId": "@channelusername",
  "options": {}
}
```

### Response
#### Success Response (200)
- **OwnedGifts** (Object) - On success, returns an [OwnedGifts](https://core.telegram.org/bots/api#ownedgifts) object.

#### Response Example
```json
{
  "ok": true,
  "result": {
    "gifts": []
  }
}
```
```

--------------------------------

### Correct Usage of File Options

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Demonstrates the correct way to pass file options when sending audio, ensuring an empty object is used for Telegram query options if not needed.

```javascript
// WRONG!
// 'fileOptions' will be taken as additional Telegram query options!!!
bot.sendAudio(chatId, data, fileOptions);

// RIGHT!
bot.sendAudio(chatId, data, {}, fileOptions);
```

--------------------------------

### createChatSubscriptionInviteLink

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Creates a subscription invite link for a chat. The bot must be an administrator with the appropriate permissions.

```APIDOC
## createChatSubscriptionInviteLink

### Description
Creates a subscription invite link for a chat.

### Method
POST (assumed)

### Endpoint
/createChatSubscriptionInviteLink

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **chatId** (string) - Required - Unique identifier for the target chat.
- **subscriptionPeriod** (integer) - Required - The subscription period in seconds.
- **subscriptionPrice** (integer) - Required - The subscription price in the smallest units of the currency.
- **options** (object) - Optional - Additional options for creating the invite link.
```

--------------------------------

### setMyShortDescription

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Sets the bot's short description. Requires the new short description.

```APIDOC
## setMyShortDescription

### Description
Sets the bot's short description.

### Method
POST

### Endpoint
/setMyShortDescription

### Parameters
#### Path Parameters
- **options** (object) - Required - Contains the new short description for the bot.
  - **short_description** (string) - Required - New short bot description

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### getMyShortDescription

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Retrieves the bot's short description.

```APIDOC
## getMyShortDescription

### Description
Retrieves the bot's short description.

### Method
GET

### Endpoint
/getMyShortDescription

### Parameters
#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### Send Audio with File Path

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Send an audio file by providing its local file path. The library handles reading the file content.

```javascript
bot.sendAudio(chatId, 'path/to/audio.mp3');
```

--------------------------------

### Running Test Commands

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/test/README.md

Commands to execute the test suite. You can run all tests or specific test scripts like ESLint or Mocha.

```bash
# Run ALL tests
npm run test

# Run individual tests
npm run eslint              # static-analysis
npm run mocha               # mocha tests
```

--------------------------------

### setMyDescription

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Sets the bot's description. Requires the new description.

```APIDOC
## setMyDescription

### Description
Sets the bot's description.

### Method
POST

### Endpoint
/setMyDescription

### Parameters
#### Path Parameters
- **options** (object) - Required - Contains the new description for the bot.
  - **description** (string) - Required - New bot description

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### telegramBot.getFile(fileId, [options])

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Retrieves basic information about a file and prepares it for download. The returned link is valid for 1 hour.

```APIDOC
## telegramBot.getFile(fileId, [options])

### Description
Use this method to get basic info about a file and prepare it for downloading. The link will be valid for 1 hour.

### Method
Not specified (Instance method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Parameters
- **fileId** (String) - File identifier to get info about
- **[options]** (Object) - Additional Telegram query options

### Request Example
```javascript
// Example usage:
// bot.getFile('some_file_id').then(file => console.log(file))
```

### Response
#### Success Response
- **File** (Object) - On success, a File object is returned.

#### Response Example
```json
{
  "file_id": "AgADBAADG6wxG1_9GBK_1_1",
  "file_unique_id": "AQADG6wxG1_9GBK_1_1",
  "file_size": 131354,
  "file_path": "photos/file_0.jpg"
}
```

### See
https://core.telegram.org/bots/api#getfile
```

--------------------------------

### createNewStickerSet

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Creates a new sticker set. Requires user ID, name, title, PNG sticker, and emojis. Optional file options can be provided.

```APIDOC
## createNewStickerSet

### Description
Creates a new sticker set.

### Method
POST

### Endpoint
/createNewStickerSet

### Parameters
#### Path Parameters
- **userId** (string) - Required - User ID of the sticker owner
- **name** (string) - Required - Short name of the sticker set
- **title** (string) - Required - Sticker set title, 1-64 characters
- **pngSticker** (InputFile or string) - Required - PNG sticker with the maximum dimensions 512x512. Use input
- **emojis** (string) - Required - One or more emoji corresponding to the sticker

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
- **fileOptions** (object) - Optional - Options for file upload.
```

--------------------------------

### telegramBot.createChatSubscriptionInviteLink

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Creates a subscription invite link for a channel chat. The bot needs the 'can_invite_users' administrator right.

```APIDOC
## telegramBot.createChatSubscriptionInviteLink(chatId, subscriptionPeriod, subscriptionPrice, [options])

### Description
Use this method to create a subscription invite link for a channel chat.

The bot must have the can_invite_users administrator rights.

### Method
POST

### Endpoint
/createChatSubscriptionInviteLink

### Parameters
#### Path Parameters
- **chatId** (Number | String) - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
- **subscriptionPeriod** (Number) - The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
- **subscriptionPrice** (Number) - The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat (1-2500).

#### Query Parameters
- **options** (Object) - Additional Telegram query options

### Response
#### Success Response (200)
- **inviteLink** (Object) - The new invite link as a ChatInviteLink object.

### See
https://core.telegram.org/bots/api#createchatsubscriptioninvitelink
```

--------------------------------

### Environment Variables for Testing

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/test/README.md

Export these environment variables before running tests. Ensure you replace placeholders with your actual bot token, user ID, and other relevant IDs.

```bash
# Token to be used
export TEST_TELEGRAM_TOKEN=<YOUR_BOT_TOKEN>

# User Id which you want to send the messages.
export TEST_USER_ID=<USER_ID>

# Group Id which to use in some of the tests, e.g. for TelegramBot#getChat()
export TEST_GROUP_ID=<GROUP_ID>

# Game short name to use in some tests, e.g. TelegramBot#sendGame()
# Defaults to "medusalab_test".
export TEST_GAME_SHORT_NAME=<GAME_SHORT_NAME>

# Sticker set name to use in some tests, e.g. TelegramBot#getStickerSet()
# Defaults to "pusheen".
export TEST_STICKER_SET_NAME=<STICKER_SET_NAME>

# Payment provider token to be used
export TEST_PROVIDER_TOKEN=<YOUR_PROVIDER_TOKEN>
```

--------------------------------

### setMyCommands

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Sets the bot's commands. Requires an array of commands.

```APIDOC
## setMyCommands

### Description
Sets the bot's commands.

### Method
POST

### Endpoint
/setMyCommands

### Parameters
#### Path Parameters
- **commands** (array) - Required - An array of BotCommand objects representing the commands defined for the bot.

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### getMyDescription

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Retrieves the bot's description.

```APIDOC
## getMyDescription

### Description
Retrieves the bot's description.

### Method
GET

### Endpoint
/getMyDescription

### Parameters
#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### Send Audio with Buffer

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Send an audio file using a Buffer containing its contents. Note: Using readFileSync is synchronous and may not be ideal for performance.

```javascript
const buffer = fs.readFileSync('path/to/audio.mp3'); // sync! that's sad! :-( Just making a point!
bot.sendAudio(chatId, buffer);
```

--------------------------------

### getMyCommands

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Retrieves the bot's commands.

```APIDOC
## getMyCommands

### Description
Retrieves the bot's commands.

### Method
GET

### Endpoint
/getMyCommands

### Parameters
#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### savePreparedKeyboardButton

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Saves a prepared keyboard button. Requires user ID and the button object.

```APIDOC
## savePreparedKeyboardButton

### Description
Saves a prepared keyboard button.

### Method
POST

### Endpoint
/savePreparedKeyboardButton

### Parameters
#### Path Parameters
- **userId** (string) - Required - Unique identifier of the target user
- **button** (object) - Required - The button object

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
```

--------------------------------

### TelegramBot Constructor

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Initializes a new TelegramBot instance. You can configure it to use either polling or webhooks for receiving messages. Options allow for customization of polling intervals, timeouts, webhook hosts, and more.

```APIDOC
## new TelegramBot(token, [options])

### Description
Initializes a new TelegramBot instance. You can configure it to use either polling or webhooks for receiving messages. Options allow for customization of polling intervals, timeouts, webhook hosts, and more.

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Parameters Table
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>String</code> |  | Bot Token |
| [options] | <code>Object</code> |  |  |
| [options.polling] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Set true to enable polling or set options. If a WebHook has been set, it will be deleted automatically. |
| [options.polling.timeout] | <code>String</code> \| <code>Number</code> | <code>10</code> | *Deprecated. Use `options.polling.params` instead*. Timeout in seconds for long polling. |
| [options.testEnvironment] | <code>Boolean</code> | <code>false</code> | Set true to work with test enviroment. When working with the test environment, you may use HTTP links without TLS to test your Web App. |
| [options.polling.interval] | <code>String</code> \| <code>Number</code> | <code>300</code> | Interval between requests in miliseconds |
| [options.polling.autoStart] | <code>Boolean</code> | <code>true</code> | Start polling immediately |
| [options.polling.params] | <code>Object</code> |  | Parameters to be used in polling API requests. See https://core.telegram.org/bots/api#getupdates for more information. |
| [options.polling.params.timeout] | <code>Number</code> | <code>10</code> | Timeout in seconds for long polling. |
| [options.polling.params.allowed_updates] | <code>Array.&lt;String&gt;</code> \| <code>String</code> |  | A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. |
| [options.webHook] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Set true to enable WebHook or set options |
| [options.webHook.host] | <code>String</code> | <code>"0.0.0.0"</code> | Host to bind to |
| [options.webHook.port] | <code>Number</code> | <code>8443</code> | Port to bind to |
| [options.webHook.key] | <code>String</code> |  | Path to file with PEM private key for webHook server. The file is read **synchronously**! |
| [options.webHook.cert] | <code>String</code> |  | Path to file with PEM certificate (public) for webHook server. The file is read **synchronously**! |
| [options.webHook.pfx] | <code>String</code> |  | Path to file with PFX private key and certificate chain for webHook server. The file is read **synchronously**! |
| [options.webHook.autoOpen] | <code>Boolean</code> | <code>true</code> | Open webHook immediately |
| [options.webHook.https] | <code>Object</code> |  | Options to be passed to `https.createServer()`. Note that `options.webHook.key`, `options.webHook.cert` and `options.webHook.pfx`, if provided, will be used to override `key`, `cert` and `pfx` in this object, respectively. See https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener for more information. |
| [options.webHook.healthEndpoint] | <code>String</code> | <code>"/healthz"</code> | An endpoint for health checks that always responds with 200 OK |
| [options.onlyFirstMatch] | <code>Boolean</code> | <code>false</code> | Set to true to stop after first match. Otherwise, all regexps are executed |
| [options.request] | <code>Object</code> |  | Options which will be added for all requests to telegram api. See https://github.com/request/request#requestoptions-callback for more information. |
| [options.baseApiUrl] | <code>String</code> | <code>"https://api.telegram.org"</code> | API Base URl; useful for proxying and testing |
| [options.filepath] | <code>Boolean</code> | <code>true</code> | Allow passing file-paths as arguments when sending files, such as photos using `TelegramBot#sendPhoto()`. See [usage information][usage-sending-files-performance] for more information on this option and its consequences. |
| [options.badRejection] | <code>Boolean</code> | <code>false</code> | Set to `true` **if and only if** the Node.js version you're using terminates the process on unhandled rejections. This option is only for *forward-compatibility purposes*. |

### Request Example
```javascript
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Or create a bot that uses 'webHook'
// const bot = new TelegramBot(token, { webHook: { port: 8443 } });
```

### Response
#### Success Response (200)
Not applicable for constructor.

#### Response Example
Not applicable for constructor.
```

--------------------------------

### createForumTopic

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Creates a new forum topic in a forum chat. The bot must be an administrator with the appropriate permissions.

```APIDOC
## createForumTopic

### Description
Creates a new forum topic in a forum chat.

### Method
POST (assumed)

### Endpoint
/createForumTopic

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **chatId** (string) - Required - Unique identifier for the target chat.
- **name** (string) - Required - Name of the forum topic.
- **options** (object) - Optional - Additional options, such as 'icon_sticker'.
```

--------------------------------

### uploadStickerFile

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Uploads a sticker file. Requires user ID, sticker, and sticker format. Optional file options can be provided.

```APIDOC
## uploadStickerFile

### Description
Uploads a sticker file.

### Method
POST

### Endpoint
/uploadStickerFile

### Parameters
#### Path Parameters
- **userId** (string) - Required - User ID of the sticker owner
- **sticker** (InputFile or string) - Required - The uploaded sticker, must be in PNG format.
- **stickerFormat** (string) - Required - Format of the added sticker, must be “static” or “animated”.

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
- **fileOptions** (object) - Optional - Options for file upload.
```

--------------------------------

### telegramBot.openWebHook()

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Open webhook. Multiple invocations do nothing if webhook is already open. Rejects the returned promise if Polling is being used by this instance.

```APIDOC
## telegramBot.openWebHook()

### Description
Open webhook. Multiple invocations do nothing if webhook is already open. Rejects the returned promise if Polling is being used by this instance.

### Method
instance method

### Endpoint
N/A (Instance Method)

### Returns
<code>Promise</code>
```

--------------------------------

### telegramBot.answerPreCheckoutQuery

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Responds to pre-checkout queries. This method should be called within 10 seconds of receiving a pre_checkout_query update.

```APIDOC
## telegramBot.answerPreCheckoutQuery(preCheckoutQueryId, ok, [options])

### Description
Use this method to respond to pre-checkout queries. The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

### Method
Not specified (instance method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Parameters
- **preCheckoutQueryId** (String) - Unique identifier for the query to be answered
- **ok** (Boolean) - Specify if every order details are ok
- **[options]** (Object) - Additional Telegram query options

### Response
#### Success Response
On success, True is returned.

### See
https://core.telegram.org/bots/api#answerprecheckoutquery
```

--------------------------------

### Set WebHook with Certificate

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Sets a webhook URL for the bot, requiring a certificate file for HTTPS connections. Ensure the certificate path is correct.

```javascript
bot.setWebHook('public-url.com', {
  certificate: 'path/to/crt.pem' // Path to your crt.pem
});
```

--------------------------------

### Inline and Web App Query Methods

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Methods for answering inline queries and web app queries, allowing bots to provide dynamic results to users.

```APIDOC
## Inline and Web App Query Methods

### Description
Methods for answering inline queries and web app queries, allowing bots to provide dynamic results to users.

### Methods
* `.answerInlineQuery(inlineQueryId, results, [options])`
* `.answerWebAppQuery(webAppQueryId, result, [options])`
```

--------------------------------

### Transpile ES2015 Code

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/CONTRIBUTING.md

Execute this command to transpile ES2015 code to a format compatible with older Node.js versions using Babel. This is part of the build process.

```bash
$ npm run build
```

--------------------------------

### createForumTopic

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Creates a new topic in a forum supergroup. The bot requires administrator privileges (`can_manage_topics`) to perform this action. Returns information about the newly created topic.

```APIDOC
## telegramBot.createForumTopic(chatId, name, [options])

### Description
Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights. Returns information about the created topic as a [ForumTopic](https://core.telegram.org/bots/api#forumtopic) object.

### Method
POST

### Endpoint
https://core.telegram.org/bots/api#createforumtopic

### Parameters
#### Path Parameters
- **chatId** (Number | String) - Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
- **name** (String) - Topic name, 1-128 characters

#### Query Parameters
- **options** (Object) - Additional Telegram query options

### Response
#### Success Response (200)
- **result** (ForumTopic) - Information about the created topic
```

--------------------------------

### Send Audio with Readable Stream

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md

Send an audio file by providing a Readable Stream. Data will be piped from the stream.

```javascript
const stream = fs.createReadStream('path/to/audio.mp3');
bot.sendAudio(chatId, stream);
```

--------------------------------

### telegramBot.getMyShortDescription

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Retrieves the current bot short description for the specified user language.

```APIDOC
## telegramBot.getMyShortDescription([options])

### Description
Use this method to get the current bot short description for the given user language.

### Method
GET

### Endpoint
/getMyShortDescription

### Parameters
#### Query Parameters
- **options** (Object) - Optional - Additional Telegram query options

### Response
#### Success Response (200)
- **result** (BotShortDescription) - The current bot short description

### Response Example
```json
{
  "ok": true,
  "result": {
    "short_description": "Your bot's short description"
  }
}
```
```

--------------------------------

### createChatInviteLink

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Creates a new invite link for a chat. The bot must be an administrator with the appropriate permissions.

```APIDOC
## createChatInviteLink

### Description
Creates a new invite link for a chat.

### Method
POST (assumed)

### Endpoint
/createChatInviteLink

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **chatId** (string) - Required - Unique identifier for the target chat.
- **options** (object) - Optional - Additional options for creating the invite link.
```

--------------------------------

### addStickerToSet

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Adds a new sticker to a sticker set created by the bot. Requires specifying the sticker file, associated emojis, and optionally the sticker type and other options. Note the constraints on sticker set size and sticker file properties.

```APIDOC
## telegramBot.addStickerToSet(userId, name, sticker, emojis, stickerType, [options], [fileOptions])

### Description
Use this method to add a new sticker to a set created by the bot. You must use exactly one of the fields *png_sticker*, *tgs_sticker*, or *webm_sticker*. Animated stickers can be added to animated sticker sets and only to them. Emoji sticker sets can have up to 200 stickers. Static or Animated sticker sets can have up to 120 stickers.

### Method
POST (implied)

### Endpoint
(Not explicitly provided, but relates to Telegram Bot API)

### Parameters
#### Path Parameters
None

#### Query Parameters
- **userId** (Number) - Required - User identifier of sticker set owner
- **name** (String) - Required - Sticker set name
- **sticker** (String | stream.Stream | Buffer) - Required - Png image with the sticker (must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px, TGS animation with the sticker or WEBM video with the sticker.
- **emojis** (String) - Required - One or more emoji corresponding to the sticker
- **stickerType** (String) - Optional - Allow values: `png_sticker`, `tgs_sticker`, or `webm_sticker`. Defaults to `png_sticker`.
- **[options]** (Object) - Optional - Additional Telegram query options
- **[fileOptions]** (Object) - Optional - Optional file related meta-data

### Request Example
(Not provided in source)

### Response
#### Success Response (200)
- **True** (Boolean) - True on success

#### Response Example
(Not provided in source)
```

--------------------------------

### postStory

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Posts a new story for a business account.

```APIDOC
## postStory

### Description
Posts a new story for a business account.

### Method
POST (assumed, based on typical API patterns for creating content)

### Endpoint
/postStory

### Parameters
#### Path Parameters
- **businessConnectionId** (string) - Required - The ID of the business connection.
- **content** (string) - Required - The content of the story.
- **activePeriod** (integer) - Required - The duration in seconds for which the story will be active.

#### Query Parameters
- **options** (object) - Optional - Additional options for the request.

### Response
#### Success Response (200)
- **storyId** (string) - The ID of the newly posted story.

#### Response Example
{
  "storyId": "story123"
}
```

--------------------------------

### addStickerToSet

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Adds a new sticker to a set. Requires user ID, name, sticker, emojis, and sticker type. Optional file options can be provided.

```APIDOC
## addStickerToSet

### Description
Adds a new sticker to a set.

### Method
POST

### Endpoint
/addStickerToSet

### Parameters
#### Path Parameters
- **userId** (string) - Required - User ID of the sticker owner
- **name** (string) - Required - Sticker set name
- **sticker** (InputFile or string) - Required - The uploaded sticker, must be in PNG format.
- **emojis** (string) - Required - One or more emoji corresponding to the sticker
- **stickerType** (string) - Required - Type of the sticker, must be “regular”, “mask” or “custom_emoji”

#### Query Parameters
- **options** (object) - Optional - Additional options for the API call.
- **fileOptions** (object) - Optional - Options for file upload.
```

--------------------------------

### Invoice and Payment Methods

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Methods for handling invoices and payments, including sending invoices, creating invoice links, and answering shipping and pre-checkout queries.

```APIDOC
## Invoice and Payment Methods

### Description
Methods for handling invoices and payments, including sending invoices, creating invoice links, and answering shipping and pre-checkout queries.

### Methods
* `.sendInvoice(chatId, title, description, payload, providerToken, currency, prices, [options])`
* `.createInvoiceLink(title, description, payload, providerToken, currency, prices, [options])`
* `.answerShippingQuery(shippingQueryId, ok, [options])`
* `.answerPreCheckoutQuery(preCheckoutQueryId, ok, [options])`
```

--------------------------------

### getFile

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Retrieves information about a file by its file ID.

```APIDOC
## getFile

### Description
Retrieves information about a file by its file ID.

### Method
GET (assumed)

### Endpoint
/getFile

### Parameters
#### Path Parameters
None

#### Query Parameters
- **fileId** (string) - Required - The unique identifier for the file.
- **options** (object) - Optional - Additional options.
```

--------------------------------

### telegramBot.sendSticker

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Sends static .WEBP, animated .TGS, or video .WEBM stickers. Accepts chatId, sticker, and optional options/fileOptions.

```APIDOC
## telegramBot.sendSticker(chatId, sticker, [options], [fileOptions])

### Description
Use this method to send static .WEBP, [animated](https://telegram.org/blog/animated-stickers) .TGS,
or [video](https://telegram.org/blog/video-stickers-better-reactions) .WEBM stickers.

### Method
POST (inferred from context, typically for sending data)

### Endpoint
/sendSticker

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **chatId** (Number | String) - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`).
- **sticker** (String | stream.Stream | Buffer) - A file path, Stream or Buffer. Can also be a `file_id` previously uploaded. Stickers are WebP format files.
- **options** (Object) - Additional Telegram query options.
- **fileOptions** (Object) - Optional file related meta-data.

### Request Example
```json
{
  "chatId": "12345",
  "sticker": "path/to/sticker.webp",
  "options": { ... },
  "fileOptions": { ... }
}
```

### Response
#### Success Response (200)
- **Message** (Object) - On success, the sent Message is returned.

#### Response Example
```json
{
  "result": { ... } // Message object
}
```
```

--------------------------------

### telegramBot.savePreparedKeyboardButton

Source: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md

Use this method to store a message that can be sent by a user of a Mini App. Returns a PreparedKeyboardButton object on success.

```APIDOC
## telegramBot.savePreparedKeyboardButton(userId, button, [options])

### Description
Use this method to stores a message that can be sent by a user of a Mini App.

### Method
POST

### Endpoint
/savePreparedKeyboardButton

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- **userId** (Number) - Required - Unique identifier of the target user
- **button** (KeyboardButton) - Required - A JSON-serialized object describing the button to be saved. The button must be of the type request_users, request_chat, or request_managed_bot.
- **options** (Object) - Optional - Optional form data to include in the request

### Request Example
```json
{
  "userId": 123456789,
  "button": {
    "text": "Request User",
    "request_users": {
      "request_id": "req_1",
      "user_is_bot": false
    }
  }
}
```

### Response
#### Success Response (200)
- **PreparedKeyboardButton** (Object) - A PreparedKeyboardButton object.

#### Response Example
```json
{
  "text": "Request User",
  "request_users": {
    "request_id": "req_1",
    "user_is_bot": false
  }
}
```
```