import React from 'react-native';
const {
    Animated,
    Easing,
    Text,
    View,
    Image,
    TouchableHighlight,
} = React;


class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            doneAnimation: new Animated.Value(0),
        };
    }

    handleDonePress() {
        Animated.timing(          // Uses easing functions
            this.state.doneAnimation, {
                toValue: 1,
                duration: 300,
                easing: Easing.easeOutSine,
            },
        ).start();

        setTimeout(()=> {
            this.props.onTodoDone(this.props.todo);
            this.setState({deleted: true});
        }, 500);
    }

    render() {


        return (
                <Animated.View style={{
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    translateX: this.state.doneAnimation.interpolate({
                        inputRange: [0, 0.1, 1],
                        outputRange: [0, -100, -1200],  // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                }}
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
                </Animated.View>

        );
    }
}

export default TaskRow;
