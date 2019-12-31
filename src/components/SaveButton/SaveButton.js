import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const SaveButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.save}>
            <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})
 
export default SaveButton;
