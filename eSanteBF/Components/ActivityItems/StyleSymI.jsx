import { PADDING } from "../../Outils/Constantes";

const { StyleSheet } = require("react-native");

const StyleSymI = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection:'row',
        fontWeight:'bold',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'white',
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        color: 'black',
    },
    itemImg:{
        width:40, height:50, marginRight:5,
        
    },
});


export default StyleSymI;