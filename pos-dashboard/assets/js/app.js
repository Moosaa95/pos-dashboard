async function loadData() {
  const querySnapshot = await getDocs(collection(db, "transactions"));
  allTransactions = querySnapshot.docs.map(doc => doc.data());

  console.log("All Transactions:", allTransactions);

  // ➤ CALCULATION 1: Total number of transactions
  const totalCount = allTransactions.length;
  console.log("Total Transactions:", totalCount);

  // ➤ CALCULATION 2: Total transaction amount
  const totalAmount = allTransactions.reduce((sum, tx) => sum + Number(tx.amount || 0), 0);
  console.log("Total Amount:", totalAmount.toFixed(2));

  // ➤ CALCULATION 3: Status breakdown (Success, Failed, etc.)
  const statusCounts = allTransactions.reduce((counts, tx) => {
    const status = tx.status || "Unknown";
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});
  console.log("Status Breakdown:", statusCounts);

  // Optionally: Show these stats on your UI
  updateDashboardStats({ totalCount, totalAmount, statusCounts });

  // Continue with your app logic
  applyFilters();
}