import React, { useState } from "react";
const Button = ({ children, ...props }) => (
  <button {...props} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    {children}
  </button>
);


function InvoiceForm({ onAddInvoice }) {
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddInvoice({ clientName, amount, date: new Date().toLocaleDateString() });
    setClientName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <Button type="submit">Add Invoice</Button>
    </form>
  );
}

export default InvoiceForm;
