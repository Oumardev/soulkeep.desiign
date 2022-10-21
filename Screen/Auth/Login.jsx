import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import WelcomeLogo from '../../assets/img/userspace.jpg'

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.welcomeBox}>
            <Image style={styles.imgWelcome} source={WelcomeLogo}/>
            <Text style={styles.txtWelcome}>Bienvenue dans Soul Keeper</Text>
            <View style={styles.barWelcome} />
        </View>

        <View style={styles.signinContainer}>
          <TextInput style={styles.txtInputStyle} placeholder={'Identifiant'} placeholderTextColor={'#A0A0A0'} />
          <TextInput style={styles.txtInputStyle} secureTextEntry={true} placeholder={'Mot de passe'} placeholderTextColor={'#A0A0A0'} />
          <Text style={styles.textForgetPwd}>Mot de passe oublié?</Text>
          <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTxt}>Se connecter</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcomeBox:{
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 330,
    borderRadius: 30,
    shadowOffset: {width: -2, height: 5},  
    shadowColor: '#171717',  
    shadowOpacity: 0.1,  
    shadowRadius: 3,  
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  imgWelcome: {
    width: 228,
    height: 158,
    marginBottom:28
  },
  txtWelcome:{
    fontSize: 22,
    color: '#000000',
    lineHeight: 27,
    fontWeight: '600'
  },
  barWelcome:{
    height:3,
    width:134,
    backgroundColor:"#FA4A0C",
    borderRadius:30,
    marginTop:12
  },
  signinContainer:{
    justifyContent: 'center',
    alignItems:'center'
  },
  txtInputStyle:{
    backgroundColor:'#FFFFFF',
    height: 58,
    width: 319,
    borderRadius: 12,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12
  },
  textForgetPwd:{
    color:'#FA4A0C',
    fontSize:14,
    fontWeight: '600'
  },
  loginButton:{
    backgroundColor: '#F8774A',
    height: 50,
    width: 321,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:30,
    marginTop: 80
  },
  loginButtonTxt:{
    fontSize:17,
    fontWeight:'600',
    color: 'white'
  }
});
