import React from 'react'
import { Platform, SafeAreaView,View } from "react-native"









const withSafeView = () => (WrappedComponent : React.FC) =>{ 
    if(Platform.OS === 'android'){
        return (
            <View>
                <WrappedComponent/>
            </View>
        )
    }
    if(Platform.OS === "ios"){
        return (
            <SafeAreaView>
                <WrappedComponent/>
            </SafeAreaView>
        )
    }
}

export default withSafeView