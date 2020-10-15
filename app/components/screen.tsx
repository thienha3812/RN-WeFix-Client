import React from 'react'
import { Layout, Text } from '@ui-kitten/components'





const Screen: React.FC = ({ children }) => {
    return (
        <Layout style={{ flex: 1 }}>
            {children}
        </Layout>
    )
}
export default Screen