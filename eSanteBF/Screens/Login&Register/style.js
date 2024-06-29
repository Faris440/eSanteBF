import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 300,
    width: 300,
    marginTop: 30,
  },
  text_footer: {
    color: '#008000',
    fontSize: 18,
    fontWeight: '900',
  },
  action: {
    width:'100%',
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 5,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: '#008000',
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    color: '#808080',
  },
  loginContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: -20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
  },
  inBut: {
    width: '90%',
    backgroundColor: '#008000',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
  },
  inBut4:{

    width: '90%',
    backgroundColor: '#dc143c',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,

  },
  inBut2: {
    width: '90%',
    backgroundColor: '#420475',
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallIcon2: {
    fontSize: 40,
    // marginRight: 10,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  radioButton_div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButton_inner_div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton_title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '900',
  },
  radioButton_text: {
    fontSize: 16,
    color: 'black',
  },
  text4:{

    flexDirection: 'row',
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical:10,
    paddingTop:10,
    paddingHorizontal:5,
    marginBottom:20,
  },
  text5:{
    
    color: '#000000',
    fontWeight: '900',
  },


  text6:{
    paddingLeft: 10,
    color: '#0000cd',
    fontWeight: '900',
  },
  text7:{
    color: '#000000',
    fontWeight: '900',
    textAlign : 'center',
    padding: 15,
    paddingLeft: 50,
    flexDirection: 'row',
  },
  text8:{
    color: '#0000cd',
    fontWeight: '900',
    textAlign : 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  text9:{
    color: '#000000',
    fontWeight: '900',
    textAlign : 'center',
    paddingLeft: 40,
    flexDirection: 'row',
  },
});
export default styles;
