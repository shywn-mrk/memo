import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import SaveButton from '../../components/SaveButton/SaveButton'

class NewMemoScreen extends Component {
    static navigationOptions = {
        title: 'Memo Editor'
    }
    
    state = {
        title: this.props.navigation.state.params.title,
        content: this.props.navigation.state.params.content
    }

    titleChangeHandler = (value) => {
        this.setState({
            title: value
        })
    }

    contentChangeHandler = (value) => {
        this.setState({
            content: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.title}
                    placeholder="Enter Title"
                    defaultValue={this.state.title}
                    placeholderTextColor='black'
                    onChangeText={this.titleChangeHandler} />
                <TextInput style={styles.content}
                    placeholder="Enter Memo"
                    defaultValue={this.state.content}
                    placeholderTextColor='black' multiline={true}
                    textAlignVertical='top'
                    onChangeText={this.contentChangeHandler} />
                <SaveButton save={ () => {
                    if (this.state.title && this.state.content) {
                        const now = new Date().toString()
                        this.props.navigation.state.params.newMemoSave({title: this.state.title, content: this.state.content, time: now})
                        this.props.navigation.navigate('Home')
                    } else {
                        alert('No Content To Save')
                        this.props.navigation.navigate('Home')
                    }
                } }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        width: '90%',
        height: 'auto',
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    content: {
        width: '90%',
        height: 300,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginBottom: 20,
        textAlign: 'auto'
    }
})
 
export default NewMemoScreen;