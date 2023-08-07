import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavigateCard from '../components/NavigateCard'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import RideOptionsCard from '../components/RideOptionsCard'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    return (
        <View>
<TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={tw`bg-gray-200 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
    <Icon name="home"/>
</TouchableOpacity>

            <View style={tw`h-1/2`}>
<Map/>
            </View>
            <View style={tw `h-1/2`}>
<Stack.Navigator   screenOptions={{
            gestureEnabled: true, // Enable gestures for screen transitions
            gestureDirection: 'horizontal', // Specify the direction of the swipe gesture
          }}>
    <Stack.Screen
    name='NavigateCard'
    component={NavigateCard}
    options={{
        headerShown: false,
    }}>

    </Stack.Screen>
    <Stack.Screen
    name='RideOptionsCard'
    component={RideOptionsCard}
    options={{
        headerShown: false,
    }}>

    </Stack.Screen>
</Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen