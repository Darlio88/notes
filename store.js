import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import { combineReducers } from 'redux';
import thunk  from'redux-thunk'

//importing the user reducer from the useSlice
import userReducer from "./features/userSlice"

const reducers = combineReducers({
  userDetails:userReducer
})

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  startReconciler:autoMergeLevel1,
}


const persistedReducer = persistReducer(persistConfig,reducers )


export const store = configureStore({
  reducer: {
    userDetails:persistedReducer,
  },
  middleware:[thunk]
})



export const persistor = persistStore(store)


