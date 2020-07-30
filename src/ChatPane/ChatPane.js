import React from 'react';
import { containerStyles } from "./ChatPaneStyles";
import ChatBox from 'react-chat-plugin';
import { ROUND_STATE, ROLES } from "../App";
class ChatPane extends React.Component {
  imageBaseUrl = 'https://api.adorable.io/avatars/285/';
  imageEndUrl = '@adorable.png';

  // Function to send message in mafia group chat
  handleOnSendMessageInMafiaChat = (message) => {
    const avatarUrl = `${this.imageBaseUrl}${this.props.currentPlayerName}${this.imageEndUrl}`;
    const mafiaMessage = {
      author: {
        username: this.props.currentPlayerName,
        id: this.props.currentPlayerId,
        avatarUrl: avatarUrl
      },
      text: message,
      timestamp: +new Date(),
      type: 'text'
    };
    this.props.sendMessage(mafiaMessage, ROLES.MAFIA);
  }

  // Function to send message in village group chat
  handleOnSendMessageInVillageChat = (message) => {
    const avatarUrl = `${this.imageBaseUrl}${this.props.currentPlayerName}${this.imageEndUrl}`;
    const villageMessage = {
      author: {
        username: this.props.currentPlayerName,
        id: this.props.currentPlayerId,
        avatarUrl: avatarUrl
      },
      text: message,
      timestamp: +new Date(),
      type: 'text'
    };
    this.props.sendMessage(villageMessage, ROLES.VILLAGER);
  }
  render() {
    const showMafiaChat = (this.props.currentPlayerRole === ROLES.MAFIA && this.props.roundState ===  ROUND_STATE.NIGHT);

    return (
      <div style={containerStyles()}>
        {/* // Mafia Chat Box */}
        <div style={{ display: ((showMafiaChat) ? 'block' : 'none') }}>
          <ChatBox
            messages={this.props.mafiaMessages}
            userId={this.props.currentPlayerId}
            onSendMessage={this.handleOnSendMessageInMafiaChat}
            width={'100vw'}
            height={'70vh'}
            placeholder="Mafia Group Chat"
            disableInput={this.props.roundState === ROUND_STATE.DAY || (!(!this.props.currentPlayerDead && (this.props.currentPlayerRole === ROLES.MAFIA)))}
          />
        </div>

        {/* // Village Chat Box */}
        <div style={{ display: (showMafiaChat ? 'none' : 'block') }}>
          <ChatBox
            messages={this.props.villageMessages}
            userId={this.props.currentPlayerId}
            onSendMessage={this.handleOnSendMessageInVillageChat}
            width={'100vw'}
            height={'70vh'}
            placeholder="Village Group Chat"
            disableInput={this.props.roundState ===  ROUND_STATE.NIGHT || (this.props.currentPlayerDead)}
          />
        </div>
      </div>
    )
  };
}

export default ChatPane;
