import { StyleSheet } from "react-native";

const stylesA = StyleSheet.create({
    scrollableListItem:{
        flexDirection:'column',
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'white',
        borderBlockColor:'red',
        marginRight:15,
        elevation:1,
        alignItems: 'center',
        color:'black',
        fontWeight: '900'

    },
    mainText:{
        fontWeight:'bold',
        fontSize:16,
        color: 'black'
    },
    subText:{
        marginTop:10,
        fontSize:12,
        fontWeight: '900',
        color:'black'
    },
});

export default stylesA;