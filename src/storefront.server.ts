import { createClient } from '@crystallize/js-api-client';
import { TStoreFront, TStoreFrontAdapter } from './types';

export const createStoreFront = async (
    adapter: TStoreFrontAdapter,
    withSecret: boolean = false,
): Promise<TStoreFront> => {
    const config = await adapter.config(withSecret);
    return {
        config,
        apiClient: createClient({
            tenantIdentifier: config.tenantIdentifier,
            accessTokenId: withSecret ? config.configuration?.ACCESS_TOKEN_ID || '' : '',
            accessTokenSecret: withSecret ? config.configuration?.ACCESS_TOKEN_SECRET || '' : '',
        }),
    };
};
