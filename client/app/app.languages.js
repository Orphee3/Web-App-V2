export const languages = ($translateProvider) => {
		$translateProvider.translations('en', {
      LOGIN_CONNECT: 'Log in to your account',
			LOGIN_ERROR: 'Oops, that\'s not a match.',
      LOGIN_NAME: 'login',
      LOGIN_PASSWORD: 'password',
      LOGIN_CONTINUE: 'Continue',
		  LOGIN_NEW: 'New to Orphee',
      SIGN_UP: 'Sign up'
    });

		$translateProvider.translations('fr', {
      LOGIN_CONNECT: 'Connectez-vous sur Orphée',
      LOGIN_ERROR: 'Les informations saisies ne correspondent pas.',
      LOGIN_NAME: 'Email',
      LOGIN_PASSWORD: 'Mot de passe',
      LOGIN_CONTINUE: 'Continuer',
		  LOGIN_NEW: 'Nouveau sur Orphée',
      SIGN_UP: 'Créer un compte'
    });

		$translateProvider.preferredLanguage('fr');
};