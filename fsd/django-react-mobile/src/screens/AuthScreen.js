import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const AuthScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
                style={styles.input}
                placeholder="Username"

            />

            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder="Password"

                secureTextEntry={true}

            />

            <Button title="Login"/>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282C35',
        padding: 10
    },
    label: {
        fontSize: 24,
        color: 'white',
        padding: 10
    },
    input: {
        fontSize: 24,
        backgroundColor: '#fff',
        padding: 20,
        margin: 10
    },
    viewText: {
        color: 'white',
        fontSize: 20,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default AuthScreen;