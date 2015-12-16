import React from 'react-native';

const {
    Text,
    View,
} = React;

import Swipeout from 'react-native-swipeout';


export default function () {
    const swipeoutBtns = [
        {
            text: 'Done',
            backgroundColor: '#05A5D1',
            underlayColor: '#273539',
            onPress: this.handleDonePress.bind(this),
        },
    ];


    return (
        <View
            style={{
                marginBottom: 20,
            }}
        >
            <Swipeout
                backgroundColor="#fff"
                right={swipeoutBtns}
            >

                <View style={{
                    borderColor: '#E7E7E7',
                    borderWidth: 1,
                    backgroundColor: '#fff',
                    padding: 20,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >

                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                        }}
                        >
                            {this.props.todo.task}
                        </Text>

                </View>
            </Swipeout>
        </View>
    );
}
