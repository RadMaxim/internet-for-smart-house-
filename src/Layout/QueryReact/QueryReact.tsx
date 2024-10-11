import { QueryClient, QueryClientProvider } from 'react-query';

import React from 'react';

const queryReact = new QueryClient()

const QueryReact:React.FC<React.PropsWithChildren> = ({children})=>{

    return (<>
    <QueryClientProvider client={queryReact}>
        {children}
    </QueryClientProvider>
    
    
    </>)
}
export default QueryReact;