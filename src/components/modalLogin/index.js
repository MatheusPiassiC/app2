import { View, Text, StyleSheet, Pressable, Alert } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"

import useAuth from "../../hooks/useAuth"

export function ModalLogin({handleClose}){
    const {registerUser} = useAuth()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp =  async () =>{
        try{
            if(email === ''){
                Alert.alert("email vazio", "preencha seu email adequadamente")
            }else if(password === ''){
                Alert.alert("senha vazia", "preencha sua senha adequadamente")
            }else{

                const register = await registerUser({email, password})

                if(register === true){
                    Alert.alert("Sucesso no cadastro!","Usuário cadastrado!")
                }else{
                    Alert.alert("Erro no cadastro","Erro no cadastro :(")
                }
            }
        }catch(error){
            console.error('Erro durante o cadastro:', error.message);
            Alert.alert('Erro', 'Ocorreu um erro ao processar o cadastro. Por favor, tente novamente.');
        }
        handleClose()
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
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
                <View style={{alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
                    <Pressable style={styles.back} onPress={handleClose}>
                        <Text>Voltar</Text>
                    </Pressable>
                    <Pressable style={styles.pressable} onPress={signUp}>
                        <Text>Cadastre-se</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
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

    pressable:{
        backgroundColor: '#392de9',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 14,
        margin: 14,
    },

    back:{
        backgroundColor: 'grey',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 14,
        margin: 14,
    }
})