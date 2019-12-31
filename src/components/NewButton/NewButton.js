import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

const NewButton = (props) => {
    return ( 
        <TouchableOpacity style={styles.container} onPress={props.newMemo}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 35,
        backgroundColor: 'black',
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: 'center',
        bottom: 16,
        right: 16,
        position: 'absolute'
    },
    text: {
        color: 'white',
        fontSize: 50,
        fontWeight: '900'
    }
});

export default NewButton;