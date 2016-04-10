export const languages = ($translateProvider) => {
		$translateProvider.translations('en', {
      HEADER_LOGIN: 'Log in',
      HEADER_LOGOUT: 'Log out',

      SIDENAV_EXPLORE: 'Explore',
      SIDENAV_FRIENDS: 'Friends',
      SIDENAV_PLAYLIST: 'New playlist',
      SIDENAV_SEARCH: 'Search',

      CHAT_FRIENDS: 'Friends',
      CHAT_INVITATIONS: 'Friend Request',
      CHAT_ADDFRIENDS: 'Add New Friends',
      CHAT_REMOVE: 'Remove',
      CHAT_ACCEPT: 'Accept',
      CHAT_EMAIL: 'Enter email',
      CHAT_SEND: 'Send Invatation',
      CHAT_TYPE: 'Type message ...',

      CREATIONLIST_COMMENT: 'comment',

      PROFILE_NOCREATIONS: 'does not have creations',

      HOME_POPULAR_SONG: 'Popular song',
      HOME_ARTISTS: 'Artists',

      LOGIN_CONNECT: 'Log in to your account',
			LOGIN_ERROR: 'Oops, that\'s not a match.',
      LOGIN_EMAIL: 'Login',
      LOGIN_NAME: 'Name',
      LOGIN_PASSWORD: 'Password',
      LOGIN_CONTINUE: 'Continue',
		  LOGIN_NEW: 'New to Orphee',
      SIGN_UP: 'Sign up',

      SIGNUP_TITLE: 'Create your Orphee account',
      SIGNUP_ALREADY: 'Already have an account',
      SIGNUP_FILL: 'Fill the form please',
      SIGNUP_TOO_SHORT: 'Use at leash 5 characters for your password',
      SIGNUP_PASSWORD_NOT_MATCH: 'These passwords don\'t match. Try again?',
      SIGNUP_EMAIL_ALREADY_USE: 'Email already use',
      LOGIN: 'Log in',
      OR: 'or',

      SIGNUP_CONFIRM_PASSWORD: 'Confirm your password',
      SIGNUP_CREATE: 'Create music...',
      SIGNUP_CREATE_CONTENT: 'Orphee lets you create music with simplicity no matter your musical background.',
      SIGNUP_TOGETHER: '...Together...',
      SIGNUP_TOGETHER_CONTENT: 'Create music with your friend in real time ! Just find a name for your band !',
      SIGNUP_SHARE: '...And share it!',
      SIGNUP_SHARE_CONTENT: 'Sharing is important, That\'s why we give you the possibility to let your friends help you in creating music!'
    });

		$translateProvider.translations('fr', {
      HEADER_LOGIN: 'Se connecter',
      HEADER_LOGOUT: 'Se déconnecter',

      SIDENAV_EXPLORE: 'Explorer',
      SIDENAV_FRIENDS: 'Amis',
      SIDENAV_PLAYLIST: 'Nouvelle playlist',
      SIDENAV_SEARCH: 'Rechercher',

      CHAT_FRIENDS: 'Mes Amis',
      CHAT_INVITATIONS: 'Mes Invitations',
      CHAT_ADDFRIENDS: 'Ajouter des amis',
      CHAT_REMOVE: 'Supprimer',
      CHAT_ACCEPT: 'Accepter',
      CHAT_EMAIL: 'Entrer email',
      CHAT_SEND: 'Envoyer l\'invitation',
      CHAT_TYPE: 'Message ...',

      CREATIONLIST_COMMENT: 'commentaire',

      PROFILE_NOCREATIONS: 'n\'a pas de créations',

      HOME_POPULAR_SONG: 'Morceaux les plus populaires',
      HOME_ARTISTS: 'Artistes',

      LOGIN_CONNECT: 'Connectez-vous sur Orphée',
      LOGIN_ERROR: 'Les informations saisies ne correspondent pas.',
      LOGIN_EMAIL: 'Email',
      LOGIN_NAME: 'Nom',
      LOGIN_PASSWORD: 'Mot de passe',
      LOGIN_CONTINUE: 'Continuer',
		  LOGIN_NEW: 'Nouveau sur Orphée',
      SIGN_UP: 'Créer un compte',

      SIGNUP_TITLE: 'Créez votre compte',          
      SIGNUP_ALREADY: 'Vous avez déjà un compte',
      SIGNUP_FILL: 'Remplissez le formulaire',
      SIGNUP_TOO_SHORT: 'Utilisez au moins 5 caractères pour votre mot de passe',
      SIGNUP_PASSWORD_NOT_MATCH: 'Les mots de passe ne correspondent pas. Voulez-vous réessayer ?',
      SIGNUP_EMAIL_ALREADY_USE: 'Email déjà utilisé',
      LOGIN: 'Connectez-vous',
      OR: 'ou',

      SIGNUP_CONFIRM_PASSWORD: 'Confirmez votre mot de passe',
      SIGNUP_CREATE: 'Créez de la musique...',
      SIGNUP_CREATE_CONTENT: 'Avec Orphée, vous pouvez créer votre musique en toute simplicité, quelque soit votre niveau musical',
      SIGNUP_TOGETHER: '...Ensemble...',
      SIGNUP_TOGETHER_CONTENT: 'Créez directement vos morceaux avec vos amis, en simultané et tous ensemble. Vous n\'avez plus qu\'à trouver le nom de votre groupe',
      SIGNUP_SHARE: '...Et partagez!',
      SIGNUP_SHARE_CONTENT: 'Le partage est très important! c\'est pourquoi vous pouvez laisser la liberté à vos amis de vous aidez à composer votre musique. Profitez-en!'
    });

		$translateProvider.preferredLanguage('fr');
};