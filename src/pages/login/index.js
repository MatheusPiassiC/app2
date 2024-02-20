import { View, Text, StyleSheet, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native'
import { TextInput } from "react-native-gesture-handler"

export function Login(){
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('tab')
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
                    defaultValue="E-mail"
                />

                <TextInput
                    defaultValue="Senha"
                    style={styles.textInput}
                />

                <Pressable style = {styles.loginPressable} onPress={handlePress}>
                    <Text style={{color:"white", fontWeight: "bold" }}>Entrar</Text>
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