import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView, KeyboardAvoidingView} from 'react-native'
import React, {useLayoutEffect,useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//importing icon packs
import { AntDesign } from '@expo/vector-icons';


//importing colors
import {colors} from '../assets/colors'


//importing api 
import { Api } from '../assets/api';
const CreateNote = () => {
  const navigation = useNavigation()
const [description, setDescription] = useState("")
const [title, setTitle] = useState("")
const [tags, setTags] = useState("")
const handleSubmit =()=>{
  navigation.navigate("bottom-tabs",{screen:"favorites"})
}
  useLayoutEffect(() => {
   navigation.setOptions({
    headerShown:false,
   })
  }, [])
  return (
    <SafeAreaView className='flex-1 w-full items-center pt-10 px-3'>
      <View 
      style={{borderBottomWidth:1, borderColor:colors.white}}
      className="flex-row justify-between w-full items-center full mt-2 pb-5">
        <TouchableOpacity onPress={()=>navigation.navigate("bottom-tabs")}>
        <AntDesign name="closecircleo" size={24} color={colors.black} />
        </TouchableOpacity>
      <Text 
      className="text-base font-base"
      style={{color:colors.black}}>Create Note</Text>
          <TouchableOpacity onPress={handleSubmit}>
          <AntDesign name="checkcircleo" size={24} color="green" />
          </TouchableOpacity>
      </View>
      <KeyboardAvoidingView  className="w-full">
        {/* TITLE OF THE NOTE */}
        <View className="w-full mt-4">
          <Text>Title</Text>
          <View 
          style={{borderBottomWidth:1, borderColor:colors.blackLight}}
          className="">
          <TextInput 
          value={title}
          onChangeText={setTitle}
          style={{color:colors.black}}
          placeholderTextColor={colors.blackLight}
          placeholder='Enter title here'/>
          </View>
        </View>
{/* DESCRIPTION OF THE NOTE */}
        <View className="w-full mt-4">
          <Text>Description</Text>
          <View 
          style={{borderBottomWidth:1, borderColor:colors.blackLight,justifyContent:"flex-start"}}
          className="">
          <TextInput 
          multiline={true}
          value={description}
          onChangeText={setDescription}
          style={{color:colors.black,height:"auto"}}
          placeholderTextColor={colors.blackLight}
          placeholder='Enter note description.....'/>
          </View>
        </View>
{/* TAGS OF THE NOTE */}
        <View className="w-full mt-4">
          <Text>Tags</Text>
          <View 
          style={{borderBottomWidth:1, borderColor:colors.blackLight}}
          className="">
          <TextInput
          value={tags}
          onChangeText={setTags} 
          style={{color:colors.black}}
          placeholderTextColor={colors.blackLight}
          placeholder='Enter tags of your note'/>
          </View>
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default CreateNote

const styles = StyleSheet.create({})