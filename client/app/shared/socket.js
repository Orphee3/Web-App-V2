const socket = ($window, API, socketFactory) => {
  let sock;
  
  const connect = () => {
    if ($window.localStorage.satellizer_token && $window.localStorage.user) {
      const token = $window.localStorage.satellizer_token;
      const id = JSON.parse($window.localStorage.user)._id;
      const ioSocket = io.connect(`${API.url}?token=${token}`);
      sock = socketFactory({ ioSocket });
      sock.emit('subscribe', {channel: id});
    }
  };
  
  connect();  
  
  const emit = (e, obj) => sock.emit(e, obj);
  const disconnect = () => sock.disconnect();
  
  return {connect, emit, disconnect};
};

socket.$inject = ['$window', 'API', 'socketFactory'];

export {socket};