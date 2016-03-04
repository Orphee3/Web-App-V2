export const social = ($authProvider, API) => {
  $authProvider.baseUrl = null;

  $authProvider.facebook({
    clientId: '560109060810772',
    url: `${API.url}/auth/facebook`
  });

  $authProvider.google({
    clientId: '1091784243585-o32t5dd6sg2bk7aelpiolftfris4q4le.apps.googleusercontent.com',
    url: `${API.url}/auth/google`
  });
};