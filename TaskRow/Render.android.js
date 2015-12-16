import React from 'react-native';
const {
    Text,
    View,
    TouchableHighlight,
    Image,
    Animated,
    Easing,
} = React;


export default function () {
    let doneAnimation = new Animated.Value(0);

    function decoratedPress(){
        Animated.timing(          // Uses easing functions
            doneAnimation, {
                toValue: 1,
                duration: 300,
                easing: Easing.easeOutSine,
            }
        )
        .start();

        this.handleDonePress();
    }


    return (
        <Animated.View style={{
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
            translateX: doneAnimation.interpolate({
                inputRange: [0, 0.1, 1],
                outputRange: [0, -100, -1200],  // 0 : 150, 0.5 : 75, 1 : 0
            }),
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
                onPress={decoratedPress.bind(this)}
                style={{
                    borderRadius: 5,
                    padding: 5,
                }}
                underlayColor="#ddd"
            >
                <Image
                    source={require('../images/done.png')}
                    style={{
                        marginTop: 0,
                    }}
                />
            </TouchableHighlight>
        </Animated.View>

    );
}
