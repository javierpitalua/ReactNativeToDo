import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default class MoreScreen extends React.Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#2f323e' },
        headerTintColor: '#ffffff',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <ScrollView style={TaskDetailStyles.mainContainer}>
                <Text style={TaskDetailStyles.titleText}>Name</Text>
                <Text style={TaskDetailStyles.innerText}>My project name{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Client name</Text>
                <Text style={TaskDetailStyles.innerText}>My client name{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Client address</Text>
                <Text style={TaskDetailStyles.innerText}>This street #123456789 P.C. 789456123{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Client contact phone</Text>
                <Text style={TaskDetailStyles.innerText}>+52 01 8110738340{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Start date</Text>
                <Text style={TaskDetailStyles.innerText}>2017/01/01{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Delivery date</Text>
                <Text style={TaskDetailStyles.innerText}>2017/01/01{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Notes</Text>
                <Text style={TaskDetailStyles.innerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam neque et leo sagittis porta. Nullam vulputate, ligula et finibus semper, nulla magna mattis turpis, sit amet condimentum lacus nisl at justo. Nam odio velit, fermentum id aliquam at, laoreet et nibh. Morbi quam ipsum, imperdiet tempor malesuada a, eleifend vitae mauris. Morbi vel leo ipsum. Integer mattis, nunc at porta consectetur, risus justo dignissim enim, a blandit odio mauris eu felis. Duis lobortis eu tortor at condimentum. Donec in risus sollicitudin, vulputate ligula sed, vestibulum lacus. Fusce consectetur ipsum ex, sit amet tristique sem tempus nec. Integer suscipit tincidunt elit ut condimentum. Aliquam rutrum, orci in tincidunt dapibus, urna sapien efficitur arcu, at venenatis nunc enim tempor enim. Pellentesque id libero nec nunc mattis mollis id ac neque. Curabitur sit amet elementum massa.{'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Qr code</Text>
                <Text style={TaskDetailStyles.innerText}>3Tr28439r4fihrUi4hFinbui4={'\n'}</Text>
                <Text style={TaskDetailStyles.titleText}>Project status</Text>
                <Text style={TaskDetailStyles.innerText}>My project status{'\n'}</Text>
            </ScrollView>
        );
    }
}

const TaskDetailStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eeeeee',
        width: '100%',
        padding: 5
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
    },
    innerText: {
        width: '100%',
        textAlign: 'left',
    }
});
