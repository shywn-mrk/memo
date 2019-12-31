import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'
import Memo from '../../components/Memo/Memo'
import NewButton from '../../components/NewButton/NewButton'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        memos: [
            // {
            //     title: 'Hello',
            //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            //     time: 'asd'
            // }
        ]
    }

    memoChangeHandler = (title, content) => {
        this.props.navigation.navigate('NewMemo', { title: title, content: content })
    }

    newButtonHandler = () => {
        this.props.navigation.navigate('NewMemo', { 
            newMemoSave: memo => this.setState(prevState => ({ memos: prevState.memos.concat([memo]) })) 
        })
    }

    render() { 
        return (
            <View style={styles.container}>
                {
                    this.state.memos.length !== 0 ? 
                        (
                            <ScrollView contentContainerStyle={styles.scrollView}>
                                {
                                    this.state.memos.map((memo, index) => {
                                        return (
                                            <Memo title={memo.title} content={memo.content} time={memo.time} memoChange={this.memoChangeHandler} key={index} />
                                        )
                                    })
                                }
                            </ScrollView>
                        ) :
                        (
                            <View style={styles.noMemoView}>
                                <Text style={styles.noMemoText}>No Memo To Show :D</Text>
                            </View>
                        )

                }
                <NewButton newMemo={this.newButtonHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noMemoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noMemoText: {
        color: 'black',
        fontSize: 26
    }
})
 
export default HomeScreen;