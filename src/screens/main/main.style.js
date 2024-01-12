import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5C8374',
    },
    mainWrapper: {
        flex: 1,
        backgroundColor: '#3D405B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
        margin: 180,
        marginTop: 50,
        borderRadius: 20,
    },
    textMain : {
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#F2F1EB',
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'center'
    },
    textBasic : {
        fontSize: 20,
        fontFamily: 'monospace',
        color: '#F2F1EB',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 15,
    },
    textInputFied: {
        backgroundColor: '#3D405B',
        height: 40,
        width: 100,
        borderColor: '#F2F1EB',
        borderWidth: 1,
        color: '#F2F1EB',
        margin: 10,
        padding: 10,
        borderRadius: 2
    },
    surface: {
        flex: 1,
        borderRadius: 0,
        backgroundColor: '#3D405B',
      },
});

export default styles;