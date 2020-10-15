import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage';


// Config console.log for reactotron
const yeOldeConsoleLog = console.log
console.log = (...args) => {
  yeOldeConsoleLog(...args)
  Reactotron.display({
    name: args,
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
  })
}

Reactotron
  .configure({
    name: "React Native App"
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: { veto: (stackFrame) => false },
    overlay: false,

  })
  .connect();