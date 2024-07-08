import { Text, View,  ScrollView } from "react-native";
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Index() {
  return (
    <ScrollView style={tw`bg-white px-2`}>
    <View style={tw`justify-between flex-row flex`}>
       <View>
      <Text style={tw`pt-10 text-2xl text-black`}>Dashboard</Text>
      </View>
      <View style={tw`flex items-center justify-center mt-8`}>
      <Entypo name="menu" size={24} color="black" />
    </View>
    </View>
    
    <View style={tw`bg-[#1E1E1E] w-full h-20 rounded-lg px-2 mt-8  flex `}>
      <View style={tw`justify-between flex-row flex py-2`}>
      <View>
      <View style={tw`rounded-full bg-gray-300 flex justify-center items-center w-10 h-10 `}>
     
     <Text><Entypo name="bell" size={24} color="black" /></Text>
      </View>
      </View>
      <View style={tw`flex flex-row`}>

      <View>
        <Text style={tw`text-white text-xl font-bold pr-2`}>Econet Wireless</Text>
      <Text style={tw`text-white bold`}>Mr Frank</Text>
      
      </View>

      <View>
      <Text style={tw` text-white rounded-full bg-white w-10 h-10 `}></Text>
      </View>

      </View>

      </View>

    </View>

    <View style={tw`flex flex-row mt-8`}>

    <View style={tw`flex flex-row bg-[#54289E] mr-1 h-20 w-44 rounded-5`}>
      </View>
     
      
    <View style={tw`flex flex-row bg-[#54289E] h-20 w-44 ml-1 rounded-5`}>
      </View>
     
    
    </View>
   




    </ScrollView>
  );
}
