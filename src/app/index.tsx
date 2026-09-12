import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [date, setDate] = useState(new Date().toDateString())
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expenses</Text>
      <Text style={styles.label}>Total spent: <Text style={styles.total}>$0.00</Text></Text>
      <View style={styles.card}>
        <View style={styles.card_header}>
          <Text style={styles.expense_name}>Groceries</Text>
          <Text style={styles.expense_category}>Category: household expense</Text>
        </View>
        <View style={styles.card_body}>
          <Text style={styles.card_date}>Date: {date}</Text>
          <View style={styles.card_amount}>
            <Text>Amount:</Text>
            <Text >$50.00</Text>
          </View>  
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  card: {
    backgroundColor: "#e4e4e4",
    width: 250,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  card_header: {
    width: "100%",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  expense_name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expense_category: {
    fontSize: 12,
    color: "#666",
  },
  card_body: {
    width: "100%",
  },
  card_date: {
    fontSize: 12,
    color: "#666",
  },
  card_amount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
