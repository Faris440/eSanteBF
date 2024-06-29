import {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


function Prescription(props) {
  console.log(props);
  useEffect(() => {
    console.log('Hello');
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Prescription</Text>
      <Button title="Aucune Prescription pour le moment"  />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
export default Prescription;
