import { View, Text, Button} from "react-native"

export default function Homescreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
    <Button
      title="Go to details"
     onPress={() => navigation.navigate('Details')}
     />
     <Button
      title="Go to Profile"
     onPress={() => navigation.navigate('Profile')}
     />
    </View>
  );
}