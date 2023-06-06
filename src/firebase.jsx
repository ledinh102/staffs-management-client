import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyBtak11nsyRhApzvRDv3aktNLaRruztwPI",
	authDomain: "staff-management-5af24.firebaseapp.com",
	projectId: "staff-management-5af24",
	storageBucket: "staff-management-5af24.appspot.com",
	messagingSenderId: "1012509939276",
	appId: "1:1012509939276:web:b94ebe5c1d235089f7c6e9",
	measurementId: "G-JDB1F2DDF7",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
export const staffsRef = collection(db, 'staffs')
export const employeesRef = collection(db, 'employees')
export const personalsRef = collection(db, 'personals')
