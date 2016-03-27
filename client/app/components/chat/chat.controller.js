class chatController {
  constructor(Users, ChatService, Socket, Auth) {
    this.Users = Users;
    this.ChatService = ChatService;
    this.Socket = Socket;
    this.Auth = Auth;
    
    this.getFriends();

    this.Socket.on('private message', (data) => {
      if (!this.selectedFriend) {
        

        return;
      } 
      if (JSON.stringify(data.source._id) === JSON.stringify(this.selectedFriend)) {
        this.messages.push(data.message);
      }
    });
  }
  
  getFriends() {
    this.Users.getFriends()
      .then(friends => this.friends = friends);
  }

  openChat(friend) {
    this.selectedFriend = friend;
    this.ChatService.getPrivateChat(friend._id)
      .then(messages => this.messages = messages);
  }

  send(message) {
    this.Socket.emit('private message', {to: this.selectedFriend._id, message});
    const user = this.Auth.getUser();
    this.messages.push({creator: {name: user.name, picture: user.picture}, message});
  }
}

chatController.$inject = ['Users', 'ChatService', 'Socket', 'Auth'];

export {chatController};