# Code Structure
## Entry
- `Index.js` - Entry Point
- `App.js` - Sets up global state

## Common Code
- `AppConnector.js` - Sets up SignalR Connection
- `AppRouter.js` - Sets up header and actual view - handling all the callbacks here too
- `HeaderLayout/HeaderLayout.js` -  Shows Mafia logo, Text div, Round text (based on global game state)
- `HeaderLayout/HeaderLayoutStyles.js` -  CSS For Header

## FullScreenSpinner
- `FullScreenSpinner/FullScreenSpinner.js` -  Spinner
- `FullScreenSpinner/FullScreenSpinnerStyles.js` -  CSS for Spinner

## Login
- `LoginLayout/LoginLayout.js` -  Sets up Login screen with input and logo
- `LoginLayout/LoginLayoutStyles.js` -  CSS for Login Layout
- `LoginLayout/InputLayout.js` -  Sets up Input layout with component state handling whether it's to create room or join room
- `LoginLayout/InputLayoutStyles.js` -  CSS for Input

## Lobby
- `LobbyLayout/LobbyLayout.js` -  Sets up Lobby Screen
- `LobbyLayout/LobbyLayoutStykes.js` -  CSS for Lobby Screen
- `LobbyLayout/GameSettings.js`-  Display Code + input call link
- `LobbyLayout/GameSettingsStyles.js`-  CSS for Game Settings

## Game
- `GameLayout/GameLayout.js` - [EMPTY] Sets up Game Screen
- `GameLayout/GameLayoutStyles.js` - [EMPTY] CSS for Game Screen

## Players Grid
- `PlayersGrid/PlayersGrid.js`- [EMPTY] Needs to set up the players with icons - needed in both lobby and game
- `PlayersGrid/PlayersGridStyles.js`-  CSS for Players Grid

## Players List
- `PlayersList/PlayersList.js` - [EMPTY] Sync roles, highlight role, voting options, voting count display
- `PlayersList/PlayersListStyles.js` -  CSS for Players List

## Chat Pane
- `ChatPane/ChatPane.js` - [EMPTY] roster control + syncing messages + handle whether for all/mafia + disabling during nighttime
- `ChatPane/ChatPaneStyles.js` -  CSS for Chat Pane

