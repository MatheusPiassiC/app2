import { View, Text, StyleSheet, FlatList} from "react-native"
import { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useIsFocused } from "@react-navigation/native"
import useStorage from "../../hooks/useStorage"

import { PasswordItem } from "./components/passwordItem"
import { userEmail } from "../../sharedVar"

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    //useIsFocused é um booleano, e indica que toda vez que a página
    //estiver em foco, algo acontece.
    //No caso, o efeito disso é chamar a lista de senhas
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage()

    useEffect(() => {
        async function loadPasswords(){
            const user = await getItem(userEmail)
            setListPasswords(user.generatedPasswords)
            console.log(listPasswords)
        }

        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem(userEmail, item)
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{flex:1, paddingTop:14, }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={ ({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} /> }
                />
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#392de9",
        paddingTop: 50,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title:{
        fontSize: 18,
        color:"#fff",
        fontWeight: 'bold',
    },

    content:{
        flex:1,
        paddingLeft: 14,
        paddingRight: 14,
    }
})
