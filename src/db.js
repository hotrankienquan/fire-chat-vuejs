import firebase from "firebase/app";
import "firebase/database";

const config = {
	//API keys
	apiKey: "AIzaSyBAlV5PHuuIPbtzyudqkZMQ2AyK2g66qMI",
	authDomain: "firechatvuejs.firebaseapp.com",
	projectId: "firechatvuejs",
	storageBucket: "firechatvuejs.appspot.com",
	messagingSenderId: "894473136339",
	appId: "1:894473136339:web:91611814ef84ad47318c26"

}
const db = firebase.initializeApp(config);
export default db