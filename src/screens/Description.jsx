import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Text, Box, useTheme, VStack, HStack } from "native-base";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ImageButton from "../components/ImageButton";
import { WhatsappButton } from "../components/WhatsappButton";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonBack } from "../components/ButtonBack";

export function Description() {
  const { colors } = useTheme();
  const route = useRoute();
  const { productId } = route.params;
  const [amount, setAmount] = useState(1);

  let btnDisabled = amount === 1 ? true : false;
  return (
    <VStack style={styles.container}>
      <ButtonBack />

      <Box style={styles.imagebox}>
        <Image source={require("../assets/banana.png")} style={styles.image} />
      </Box>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignContent: "center",
            marginBottom: 0,
          }}
        >
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <ImageButton urlImage="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80">
              1
            </ImageButton>
          </ScrollView>
        </View>
        <HStack
          marginTop={-10}
          justifyContent="space-between"
          alignSelf="center"
          px="2%"
          w="90%"
        >
          <Text style={styles.text} paddingTop="10">
            produto {productId}
          </Text>
          <Text style={styles.text} paddingTop="10">
            R$ 8,00
          </Text>
        </HStack>
        <View style={styles.descriptionBox}>
          <Text style={{ fontSize: 14 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            cupiditate quos voluptas, vel autem, numquam illo voluptate, minima
            atque sunt a qui quasi nisi natus veniam nihil! Numquam, sed
            corrupti.
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            { fontSize: 20, marginLeft: "7%", marginTop: 20 },
          ]}
        >
          Quantidade
        </Text>
        <HStack
          marginTop={5}
          alignSelf="center"
          h="16"
          w="1/3"
          justifyContent="space-between"
          alignItems="center"
          borderWidth={1}
          borderColor={colors.blue[700]}
        >
          <TouchableOpacity
            disabled={btnDisabled}
            onPress={() => setAmount(amount - 1)}
            style={styles.qtdButton}
          >
            <MaterialIcons size={30} name="remove" />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20 }}>{amount}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setAmount(amount + 1)}
            style={styles.qtdButton}
          >
            <MaterialIcons size={30} name="add" />
          </TouchableOpacity>
        </HStack>
        <WhatsappButton />
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    resizeMode: "center",
    height: "100%",
  },
  imagebox: {
    height: "30%",
    width: "70%",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "-5%",
  },
  descriptionBox: {
    height: "auto",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    padding: 12,
  },
  qtdButton: {
    height: "100%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#0088a7",
  },
  text: {
    fontSize: 30,
    fontFamily: "Montserrat_400Regular",
    marginVertical: 15,
  },
});
