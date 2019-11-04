import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/bg.jpg' //Imagem fundo
import logo from '../../assets/logo.png'



function Login( props ) {
    return (
        <ScrollView>
            <ImageBackground source={background} style={styles.background}>
                <Image source={logo} style={styles.image} />

                <View style = {styles.viewLogin}>
                    <View style={styles.sectionStyle}>
                        <Icon name="email" color="#fff" style={styles.iconStyle} />
                        <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.input} />
                    </View>
                    <View style={styles.viewPassword}>
                        <Icon name="lock" color="#fff" style={styles.iconStyle} />
                        <TextInput secureTextEntry={true} placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.input} />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {() => props.navigation.navigate('Register')}>
                        <Text> Register </Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.forgotPassword} >
                        <Text>Forgot password</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </ScrollView>
    )
}

//Nossos estilos de páginas
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 700

    },
    viewLogin: {
        backgroundColor: '#2F3236',
        width: '80%',
        padding: 15,
        marginTop: 40
    },
    input: {
        width: '100%',
        padding: 0,
        paddingLeft: 30,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#000'
        
    },
    button: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 5,
        alignItems: 'center'
    },
    image: {
        width: 285,
        height: 225,

    },
    forgotPassword: {
        marginTop: 10,
        marginBottom: -20
    },
    scrollView: {
        flex: 1
        //marginHorizontal: 10,
    },
    iconStyle:{
        position: "absolute",
        left: 0,
        fontSize: 20,

    },
    viewPassword:{
    marginTop: 20,
    }
  


    
    
})

export default Login