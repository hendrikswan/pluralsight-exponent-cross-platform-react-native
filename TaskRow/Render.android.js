import React from 'react-native';
const {
    Text,
    View,
    TouchableHighlight,
} = React;


export default function () {
    return (
        <View style={{
            borderColor: '#E7E7E7',
            borderWidth: 1,
            backgroundColor: '#fff',
            padding: 20,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
        }}
        >

            <Text style={{
                fontSize: 20,
                fontWeight: '600',
            }}
            >
                {this.props.todo.task}
            </Text>


            <TouchableHighlight
                onPress={this.handleDonePress.bind(this)}
                style={{
                    borderRadius: 5,
                    padding: 5,
                    backgroundColor: '#EAEAEA',
                }}
                underlayColor="#ddd"
            >
                <Text>Done</Text>
            </TouchableHighlight>
        </View>

    );
}
