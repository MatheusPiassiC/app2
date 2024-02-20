import { View, Text, StyleSheet, Pressable, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native'
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"

import useAuth from "../../hooks/useAuth"

export function Login(){
    const navigation = useNavigation()
    const {authenticateUser, registerUser} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = async () => {
        try{
            if(email === ''){
                Alert.alert("email vazio", "preencha seu email adequadamente")
            }else if(password === ''){
                Alert.alert("senha vazia", "preencha sua senha adequadamente")
            }else{
                const register = await authenticateUser({email, password})
                if(register === true){
                    Alert.alert("Sucesso no login!","Login efetuado!")
                    navigation.navigate('tab')
                }else{
                    Alert.alert("erro no login","Credenciais erradas :(")
                }
            }
        }catch(error){
            console.error('Erro durante o login:', error.message);
            Alert.alert('Erro', 'Ocorreu um erro ao processar o login. Por favor, tente novamente.')
        }
    }

    const signUp =  async () =>{
        try{
            if(email === ''){
                Alert.alert("email vazio", "preencha seu email adequadamente")
            }else if(password === ''){
                Alert.alert("senha vazia", "preencha sua senha adequadamente")
            }else{

                const register = await registerUser({email, password})

                if(register === true){
                    Alert.alert("Sucesso!","Usuário cadastrado!")
                }else{
                    Alert.alert("erro","Erro no cadastro :(")
                }
            }
        }catch(error){
            console.error('Erro durante o cadastro:', error.message);
            Alert.alert('Erro', 'Ocorreu um erro ao processar o cadastro. Por favor, tente novamente.');
        }

    }

    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Bem-vindo!
                </Text>
            </View> 
            <View style = {styles.login}>
                <TextInput
                    style={styles.textInput}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <Pressable style = {styles.loginPressable} onPress={handlePress}>
                    <Text style={{color:"white", fontWeight: "bold" }}>Entrar</Text>
                </Pressable>

                <Pressable onPress={signUp}>
                    <Text> Cadastre-se </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    },

    login:{
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: "40%",
        backgroundColor: "lightgrey",
        borderRadius: 8,
        margin: 40,
        padding: 40,

        //height: '50%',
    },

    loginPressable:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#392de9",
        width: "40%",
        height: "15%",
        borderRadius: 8,
        margin: 14,
        padding: 1
    },
    textInput:{
        backgroundColor: "white",
        borderColor: "black",
        borderWidth:1,
        color: "gray",
        width: "80%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 14,
        padding: 4,
    },

    textContainer:{
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        width: "80%",
        height: "20%",
        marginBottom: 14,
    },

    text:{
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor: "#392de9",
        textShadowOffset: {width: 20, height: 20   }
    },
})