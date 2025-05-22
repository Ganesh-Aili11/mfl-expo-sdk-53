import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
    const handleStart = () => {
        // Navigate to the next screen, e.g., 'Home'
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to MFL App</Text>
            <TouchableOpacity style={styles.button} onPress={handleStart}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default StartScreen;