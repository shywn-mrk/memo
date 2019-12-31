import React from 'react';
import {
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet
} from 'react-native'

const Memmo = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => props.memoChange(props.title, props.content)} >
            <View style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.content}>
                    {props.content}
                </Text>
                <Text style={styles.date}>{props.time}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
 
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 'auto',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginTop: 5
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        marginTop: 10
    }
});

export default Memmo;