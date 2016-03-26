class chatController {
  constructor(Users) {
    this.Users = Users;
    
    this.getFriends(); 
    console.log('chat controller !');
  }
  
  getFriends() {
    this.Users.getFriends()
      .then(friends => {
        this.friends = friends;
        console.log('friends', friends);
      });
  }

  openChat(friend) {
    this.selectedFriend = friend;
    console.log('friend', friend);
  }
}

chatController.$inject = ['Users'];

export {chatController};