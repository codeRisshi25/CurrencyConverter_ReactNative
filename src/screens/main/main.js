import React, { useState ,useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./main.style.js";
import { Button, Surface, Divider,TextInput } from "react-native-paper";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry.js";

const endpoint = "latest";
const apiKey = "c274a8be5b821deb60105f2522817151";

let url =
  "http://api.exchangeratesapi.io/v1/" + endpoint + "?access_key=" + apiKey;


let getCurrency = () => {
  axios
    .get(url)
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

getCurrency();
function currencyConverter(from, to, amount,data) {
  if (isNaN(amount)) {
    return 0;
  }
  let fromCurrencyRate = data["rates"][from];
  let toCurrencyRate = data["rates"][to];
  let convFact = toCurrencyRate / fromCurrencyRate;
  return (amount * convFact).toFixed(3);
}

const Main = () => {
  const [selectedFromData, selectedFrom] = useState("");
  const [selectedToData, selectedTo] = useState("");
  const [text, setText] = React.useState("");
  const [showText, setShowText] = useState(false);
  const [exchangeRates, setExchangeRates] = useState();

  useEffect(() => {
    getCurrency();
  }, []);
  
  

  let from = selectedFromData
  let to = selectedToData
    let amount = Number.parseFloat(text)

  const dataDrop = [
    { key: "1", value: "INR" },
    { key: "2", value: "USD" },
    { key: "3", value: "EUR" },
    { key: "4", value: "GBP" },
    { key: "5", value: "AUD" },
    { key: "5", value: "JPY" },
    { key: "7", value: "CAD" },
    { key: "8", value: "BDT" },
    { key: "9", value: "CNY" },
    { key: "10", value: "PKR" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>CURRENCY{"\n"}CONVERTER</Text>
      <Divider bold={"True"} />
      <Surface style={styles.surface} surface={"flat"} >
        <Text style={styles.textBasic}>CONVERT FROM </Text>
        <SelectList
          setSelected={(val) => selectedFrom(val)}
          data={dataDrop}
          save="value"
          placeholder="SELECT CURRENCY"
          maxHeight={150}
          inputStyles={{color: '#F2F1EB'}}
          dropdownTextStyles={{color: '#F2F1EB'}}
        />
        <Text style={styles.textBasic}>CONVERT TO </Text>
        <SelectList
          setSelected={(val) => selectedTo(val)}
          data={dataDrop}
          save="value"
          placeholder="SELECT CURRENCY"
          maxHeight={150}
          inputStyles={{color: '#F2F1EB'}}
          dropdownTextStyles={{color: '#F2F1EB'}}
        />
        <Text style={styles.textBasic}>AMOUNT</Text>
        <TextInput 
        placeholder={from}
        placeholderTextColor="#000" 
        mode={"outlined"} style={{margin:15}} 
        keyboardType={"number-pad"}
        onChangeText={text => text==NaN ? setText(0) : setText(text)}
        />
        <Button 
        mode={'contained'} 
        buttonColor={'#5C8374'} 
        style={{ height: 50, justifyContent: 'center',marginBottom:20, marginTop:15,marginLeft:105, marginRight:105}} // Change the height as per your requirement
        labelStyle={{ fontSize: 20 }}
        onPress={() => setShowText(!showText) }> 
        CALCULATE
        </Button>
        <Divider bold={"True"} />
        <Text style={styles.textBasic}>RESULT</Text>
        <Surface 
            style={{
                height: 70,
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                margin: 15,
                marginLeft: 40,
                backgroundColor: '#3D405B',
                elevation: 3,
                borderColor: '#F2F1EB',
                borderWidth: 1,
                color: '#F2F1EB',
                padding: 10,
                borderRadius: 2
            }}
            surface={"flat"} >
        {showText? <Text style={{fontFamily: 'monospace',color: '#F2F1EB',fontSize: 22,}}>{` ${currencyConverter(from,to,amount,data)} ${to}`}</Text> : null} 
        </Surface>
      </Surface>
    </View>

  );
};

export default Main;

