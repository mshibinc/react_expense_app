import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/expense_react/Expense",
  headers: {
    "Content-type": "multipart/form"
  }
});