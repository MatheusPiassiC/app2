import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {

	const authenticateUser = async (userData) => {
		try {
			//getIte recebe o email como chave, e guarda o email e a senha no existingUser
			const existingUser = await AsyncStorage.getItem(userData.email)

			if (existingUser !== null) {
				//transforma os dados guardados em existingUser em um objeto
				const user = JSON.parse(existingUser)
				
				if(user.password === userData.password){
					return true
				}else{
					return false
				}

			} else {
				return false
			}

		} catch (error) {
			console.error('Erro na autenticação:', error.message)
			return false
		}
	}

	const registerUser = async (userData) => {
		try {
			// Verificar se o nome de usuário já está em uso
			const existingUser = await AsyncStorage.getItem(userData.email);
			if (existingUser !== null) {
				throw new Error('Email de usuário já está em uso.');
			}

			// Armazenar as informações do novo usuário no AsyncStorage
			// setItem deve receber uma chave, que será o email, e para armazenar um objeto, no caso
			//email e senha, utiliza-se esta transformação
			await AsyncStorage.setItem(userData.email, JSON.stringify(userData));

			// Registro bem-sucedido
			return true;
		}catch (error) {
			console.error('Erro durante o registro:', error.message);
			return false;
		}
	}

	return {
		authenticateUser,
		registerUser,
	}
}

export default useAuth