import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD9NtJjMVVyS4DHd5t7R_WayPJTnkiylmI",
  authDomain: "pos-b43f8.firebaseapp.com",
  projectId: "pos-b43f8",
  storageBucket: "pos-b43f8.appspot.com",
  messagingSenderId: "551854411983",
  appId: "1:551854411983:web:d7aa9f594a1e1ff05227ba",
  measurementId: "G-SL6PB9L4CS"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let allTransactions = [];

// Add report
document.getElementById("reports-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const terminal = document.getElementById("terminal").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const status = document.getElementById("status").value;
  const date = document.getElementById("date").value;
  
  const newTxn = { terminal, amount, status, date };

  try {
    await addDoc(collection(db, "transactions"), newTxn);
    allTransactions.push(newTxn);
    applyFilters();
    document.getElementById("reports-form").reset();
    bootstrap.Modal.getInstance(document.getElementById("addModal")).hide();
  } catch (err) {
    console.error("Error adding document:", err);
  }
});

// Filter and render
window.applyFilters = function () {
  const terminal = document.getElementById("terminalFilter").value;
  const status = document.getElementById("statusFilter").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const filtered = allTransactions.filter(txn => {
    return (
      (!terminal || txn.terminal === terminal) &&
      (!status || txn.status === status) &&
      (!startDate || new Date(txn.date) >= new Date(startDate)) &&
      (!endDate || new Date(txn.date) <= new Date(endDate))
    );
  });

  const tbody = document.getElementById("reportBody");
  tbody.innerHTML = "";

  filtered.forEach((txn, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${txn.terminal}</td>
      <td>NGN${txn.amount.toLocaleString()}</td>
      <td>${txn.status}</td>
      <td>${txn.date}</td>
      <td>
        <button class="btn btn-sm btn-primary editButton"><i class="fa fa-edit"></i></button>
        <button class="btn btn-sm btn-danger deleteButton"><i class="fa fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Load initial data from Firestore
async function loadData() {
  const querySnapshot = await getDocs(collection(db, "transactions"));
  allTransactions = querySnapshot.docs.map(doc => doc.data());
  console.log(allTransactions);
  
  applyFilters();
}
loadData();

// Export CSV
document.getElementById("csv-button").addEventListener("click", () => {
  const table = document.querySelector(".report-table");
  let csv = Array.from(table.rows).map(row =>
    Array.from(row.cells).map(cell => `"${cell.innerText}"`).join(",")
  ).join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Transaction_Report.csv";
  link.click();
});

// Export PDF
document.getElementById("pdf-button").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.autoTable({ html: '.report-table', styles: { fontSize: 10 } });
  doc.save("Transaction_Report.pdf");
});
