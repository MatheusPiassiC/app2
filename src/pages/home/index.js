import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { useState } from "react"
import { ModalPassword } from "../../components/modal"

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890"

export function Home(){
  //primeiro, size que é o nome do useState usado,
  //depois setSize, usado para trocar o valor do useState
  //dentro do parentese está o valor inicial do use state
  //é como se size fosse uma variável de valor 10, e setSize troca seu valor
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordVAlue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  //dar uma olhada em melhores maneiras de gerar senhas aleatórias
  function generatePassword(){
    //concatena caracteres à string password
    let password = ""
    for(let i=0, n = charset.length; i<size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordVAlue(password)
    setModalVisible(true)
  }

  return(
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />
      
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={styles.slide}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: "center"
  },

  logo:{
    marginBottom:60,
  },

  title:{
    fontSize: 20,
    fontWeight: "bold",
  },

  slide:{
    height:50,
  },

  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },

  button:{
    backgroundColor:"#392de9",
    width: "80%",
    height:50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },

  buttonText:{
    color: "#FFF",
    fontSize: 20,

  }
})