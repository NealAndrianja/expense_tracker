import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const expense = {
    name: "Groceries",
    category: "Household expense",
    date: new Date().toDateString(),
    amount: 50,
  };

  const formattedAmount = `$${expense.amount.toFixed(2)}`;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expenses</Text>
      <Text style={styles.label}>
        Total spent: <Text style={styles.total}>{formattedAmount}</Text>
      </Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.expenseName}>{expense.name}</Text>
          <Text style={styles.expenseCategory}>
            Category: {expense.category}
          </Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardDate}>Date: {expense.date}</Text>
          <View style={styles.cardAmount}>
            <Text>Amount:</Text>
            <Text>{formattedAmount}</Text>
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
    padding: 24,
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
    width: "100%",
    maxWidth: 480,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardHeader: {
    width: "100%",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  expenseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseCategory: {
    fontSize: 12,
    color: "#666",
  },
  cardBody: {
    width: "100%",
  },
  cardDate: {
    fontSize: 12,
    color: "#666",
  },
  cardAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
