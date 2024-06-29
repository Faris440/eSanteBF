import {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function NotificationScreen(props) {
  console.log(props);
  useEffect(() => {
    console.log('Hello');
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Notification</Text>
      <Button title="Aucune notification pour le moment"  />
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
export default NotificationScreen;
