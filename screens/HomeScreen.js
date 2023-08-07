import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={[tw`bg-white h-full`, { marginTop: StatusBar.currentHeight },]}>
            <View style={tw`p-5`}>
                <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' }} />
                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    nearbyPlacesAPI='GooglePacesSearch'
                    debounce={400}
                />
                <GooglePlacesAutocomplete
                placeholder='Where From?'
                styles={{container: {
                    flex: 0,
                },
            textInput:{
                fontSize: 18,
            },}}
            onPress={(data, details = null) => {
dispatch(setOrigin({
    location: details.geometry.location,
    description: data.description
}))
dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
                key:"1239eibdodbcrandomkeyoewb42",
                language: 'en'
            }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                />

                <NavOptions />
                <NavFavourites/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen


const styles = StyleSheet.create({})