import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = () => {
    //Buscar os itens salvos
    const getItem = async (key) => {
        try{
            const user = await AsyncStorage.getItem(key)
            return JSON.parse(user)
        }catch(error){
            console.log("Erro ao buscar ", error)
            return []
        }
    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try{
            let user = await getItem(key)

            console.log(user)
            user.generatedPasswords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(user))
        
        }catch(error){
            console.log("ERRO AO SALVAR ", error)
        }
    }

    //Remover algo do storage
    const removeItem = async (key, item) => {
        try{
            let user = await getItem(key)

            let myPasswords = user.generatedPasswords.filter((password) => {
                return (password !== item)
            })

            user.generatedPasswords=myPasswords

            await AsyncStorage.setItem(key, JSON.stringify(user))
            return myPasswords
        }catch{
            console.log("ERRO AO DELETAR", error)
        }
    }

    return{
        getItem, 
        saveItem, 
        removeItem,
    }
}

export default useStorage