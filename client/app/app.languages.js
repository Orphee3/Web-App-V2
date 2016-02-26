export const languages = ($translateProvider) => {
		$translateProvider.translations('en', {
			LOGIN_ERROR: 'Oops, that\'s not a match.'
		});

		$translateProvider.translations('fr', {
			LOGIN_ERROR: 'Les informations saisies ne correspondent pas.'
		});

		$translateProvider.preferredLanguage('fr');
};