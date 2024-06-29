const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} = require('react-native');
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({props}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleSubmit() {
    let valid = true;

    if (email === '') {
      setEmailError('Ce chant est obligatoire');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError(' Le Mot de passe est obligatoire');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) {
      return;
    }

    const userData = {
      email: email,
      password,
    };

    axios.post('http://192.168.100.132:5001/login-user', userData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Connexion réussie');
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        AsyncStorage.setItem('userType', res.data.userType)
        if(res.data.userType === "Medecin") {
          navigation.navigate('MedecinScreen');
        } else {
          navigation.navigate('Home');
        }
      } else {
        Alert.alert('Erreur', 'Les informations saisies sont incorrectes');
      }
    }).catch(err => {
      console.error(err);
      Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
    });
  }

  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log(data, 'at app.jsx');
  }

  useEffect(() => {
    getData();
    console.log("");
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'always'}>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/2.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Connexion</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#008000"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Adresse Mail ou Telephone"
              style={styles.textInput}
              onChange={e => setEmail(e.nativeEvent.text)}
            />
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          <View style={styles.action}>
            <FontAwesome name="lock" color="#008000" style={styles.smallIcon} />
            <TextInput
              placeholder="Mot de passe"
              style={styles.textInput}
              onChange={e => setPassword(e.nativeEvent.text)}
            />
          </View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 8,
              marginRight: 10,
            }}>
            <Text style={{color: '#808080', fontWeight: '700'}}>
            Mot de passe oublié?
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
            <View>
              <Text style={styles.textSign}>Se Connecter</Text>
            </View>
          </TouchableOpacity>

          <View style={{padding: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
              ----Ou continuer avec----
            </Text>
          </View>

          <TouchableOpacity style={styles.inBut4} >
            <View>
              <Text style={styles.textSign}>Google</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.bottomButton}>
            <View style={styles.text7}>
              <Text style={styles.text9}>Pas de compte?</Text>
              <TouchableOpacity onPress={()=> {navigation.navigate('Register')}}>
                <Text style={styles.text8}>Créer un compte</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginPage;
