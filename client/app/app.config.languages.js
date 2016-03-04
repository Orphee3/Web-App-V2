export const languages = ($translateProvider) => {
		$translateProvider.translations('en', {
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