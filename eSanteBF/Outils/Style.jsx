import { StyleSheet } from "react-native"
import { COLORS, PADDING } from "./Constantes"

const navStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',

    },

    userImg:{
        width:50,
        height:50,
        borderRadius:50/2
    },
    userName: {
        fontSize:16,
        fontWeight:'bold'
    },

    scrollableList:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical

    },
    title:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    titleBold:{
        fontWeight:'bold'
    },
    title_space_between:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    link:{
        color: COLORS.main
    },
    DoctorsContainer:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    doctorCard:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        elevation:5,
        padding:10,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        marginBottom:10,
        borderRadius:5
    },
    doctorImg:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginRight:15
    },
    DoctorInfos:{
        flexDirection:'column'
    },
    DoctorName:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:6
    },
    DoctorSpec:{
        backgroundColor:COLORS.main,
        padding:5,
        fontSize:14,
        borderRadius:15,
        color:'white',
        paddingHorizontal:PADDING.horizontal
    }

});

export default navStyles;