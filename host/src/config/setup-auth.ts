import { BaseAuthConfig, DreamMFAuthConfig } from "@dream.mf/oidc";

const setupAuthentication = () => {
    return {
        ...BaseAuthConfig,
        skipSigninCallback: false,
        authority: process.env.OAUTH_AUTHORITY || '',
        client_id: process.env.OAUTH_CLIENT_ID || '',
        client_secret: process.env.OAUTH_CLIENT_SECRET || '',
        redirect_uri: process.env.OAUTH_REDIRECT_URL || '',
        scope: process.env.OAUTH_SCOPE || '',
        post_logout_redirect_uri: process.env.OAUTH_POST_LOGOUT_URL || '',
        metadataUrl: process.env.OAUTH_WELL_KNOWN_URL || '',
        useFetchInterceptor: true,
    } as DreamMFAuthConfig;
};

export default setupAuthentication;