class chatController {
  constructor(Users, ChatService, Socket, Auth) {
    this.Users = Users;
    this.ChatService = ChatService;
    this.Socket = Socket;
    this.Auth = Auth;
    
    this.getFriends();
    this.getInvitations();

    this.Socket.on('private message', (data) => {
      if (!this.selectedFriend) {


        return;
      } 
      if (JSON.stringify(data.source._id) === JSON.stringify(this.selectedFriend)) {
        this.messages.push(data.message);
      }
    });

    this.Socket.on('friend', () => {
      this.getInvitations();
    });

    this.Socket.on('newFriend', () => {
      this.getFriends();
    });
  }
  
  getFriends() {
    this.Users.getFriends()
      .then(friends => this.friends = friends);
  }

  getInvitations() {
    this.Users.getFriendInvitation()
      .then(invitations => this.invitations = invitations);
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

  acceptFriend(friend) {
    this.Users.acceptFriend(friend._id)
      .then(() => this.getInvitations())
      .then(() => this.getFriends())
  }

  deleteFriend(friend) {
    this.Users.deleteFriend(friend._id)
      .then(() => this.getFriends());
  }

  sendInvitation(email) {
    this.Users.get()
      .then((users) => (users.find(user => user.username == email)))
      .then(user => {
        if (!user) return;
        this.Users.askFriend(user._id);
      });
  }
}

chatController.$inject = ['Users', 'ChatService', 'Socket', 'Auth'];

export {chatController};