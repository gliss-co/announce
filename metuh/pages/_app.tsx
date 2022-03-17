import type { AppProps } from 'next/app'

import { Providers } from '@/providers/index'

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Providers>
            <Component { ...pageProps } />
        </Providers>
    </>
}

export default MyApp
