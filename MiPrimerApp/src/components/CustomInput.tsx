import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


type Props = {
    type: "text" | "email" | "password" | "number";
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}




export default function CustoInput({type, placeholder,value, onChange }:Props) {

    return (

        <View>
            <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            />
        <TouchableOpacity>
            <Text>Icon Button</Text>
            <Ionicons name={"eye"}/>
        </TouchableOpacity>

        </View>
    );
}