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
import Fontisto from 'react-native-vector-icons/Fontisto';
import Error from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {RadioButton} from 'react-native-paper';

function RegisterPage({props}) {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [secretText, setSecretText] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();

  function handleSubmit() {
    let valid = true;

    if (name === '' || !nameVerify) {
      Alert.alert('Le nom est obligatoire');
      valid = false;
    }

    if (email === '' || !emailVerify) {
      Alert.alert('Adresse mail incorrecte');
      valid = false;
    }

    if (mobile === '' || !mobileVerify) {
      Alert.alert('Numéro de téléphone incorrect');
      valid = false;
    }

    if (password === '' || !passwordVerify) {
      Alert.alert('Le mot de passe est obligatoire');
      valid = false;
    }

    if (userType === '') {
      Alert.alert('Vous devez choisir un type d\'utilisateur');
      valid = false;
    }

    if (userType === 'Medecin' && secretText !== 'Text1243') {
      Alert.alert('Code secret incorrect pour le médecin');
      valid = false;
    }

    if (!valid) {
      return;
    }

    const userData = {
      name,
      email,
      mobile,
      password,
      userType
    };

    axios
      .post('http://192.168.100.132:5001/register', userData)
      .then(res => {
        console.log(res.data);
        if (res.data.status === 'ok') {
          Alert.alert('Inscription réussie');
          navigation.navigate('Login');
        } else if (res.data.status === 'user_exists') {
          Alert.alert('Utilisateur déjà existant');
        } else {
          Alert.alert('Utilisateur déjà existant');
        }
      })
      .catch(e => {
        console.log(e);
        Alert.alert('Utilisateur déjà existant');
      });
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(nameVar.length > 1);
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar));
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);
    if (/^\+?[1-9]\d{7,14}$/.test(mobileVar)) {
      setMobileVerify(true);
    }
  }


  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar));
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}
      style={{backgroundColor: 'white'}}>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/2.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Inscription</Text>

          <View style={styles.radioButton_div}>
            <Text style={styles.radioButton_title}>Statut</Text>
            <View style={styles.radioButton_inner_div}>
              <Text style={styles.radioButton_text}>Patient</Text>
              <RadioButton
                value="Patient"
                status={userType === 'Patient' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('Patient')}
              />
            </View>
            <View style={styles.radioButton_inner_div}>
              <Text style={styles.radioButton_text}>Medecin</Text>
              <RadioButton
                value="Medecin"
                status={userType === 'Medecin' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('Medecin')}
              />
            </View>
          </View>

          {userType === 'Medecin' ? (
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#008000"
                style={styles.smallIcon}
              />
              <TextInput
                placeholder="Code secret"
                style={styles.textInput}
                onChange={e => setSecretText(e.nativeEvent.text)}
              />
            </View>
          ) : null}

          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#008000"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Nom complet"
              style={styles.textInput}
              onChange={e => handleName(e)}
            />
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Le nom doit comporter au minimum 1 caractère.
            </Text>
          )}
          <View style={styles.action}>
            <Fontisto
              name="email"
              color="#008000"
              size={24}
              style={{marginLeft: 0, paddingRight: 5}}
            />
            <TextInput
              placeholder="Adresse Email"
              style={styles.textInput}
              onChange={e => handleEmail(e)}
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Adresse mail incorrecte
            </Text>
          )}
          <View style={styles.action}>
            <FontAwesome
              name="mobile"
              color="#008000"
              size={35}
              style={{paddingRight: 10, marginTop: -7, marginLeft: 5}}
            />
            <TextInput
              placeholder="Téléphone"
              style={styles.textInput}
              onChange={e => handleMobile(e)}
              maxLength={20}
              keyboardType="phone-pad"
            />
            {mobile.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Numéro de téléphone incorrect
            </Text>
          )}
          <View style={styles.action}>
            <FontAwesome name="lock" color="#008000" style={styles.smallIcon} />
            <TextInput
              placeholder="Mot de passe"
              style={styles.textInput}
              onChange={e => handlePassword(e)}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather
                  name="eye-off"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              ) : (
                <Feather
                  name="eye"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              )}
            </TouchableOpacity>
          </View>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Le mot de passe doit contenir des majuscules, minuscules, chiffres et au moins 6 caractères.
            </Text>
          )}
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
            <View>
              <Text style={styles.textSign}>S'inscrire</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.text4}>
            <Text style={styles.text5}>Vous avez déjà un compte?</Text>

            <TouchableOpacity
              style={styles.text6}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text6}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default RegisterPage;
