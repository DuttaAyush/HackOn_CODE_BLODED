import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";

const BillingSystem = () => {
  const [clients, setClients] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", email: "", subscription: "" });

  // Fetch initial data
  useEffect(() => {
    fetchClients();
    fetchInvoices();
  }, []);

  const fetchClients = async () => {
    // Simulate API call
    const response = await fetch('/api/clients');
    const data = await response.json();
    setClients(data);
  };

  const fetchInvoices = async () => {
    // Simulate API call
    const response = await fetch('/api/invoices');
    const data = await response.json();
    setInvoices(data);
  };

  const handleAddClient = async () => {
    // Simulate API call
    await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient),
    });
    setNewClient({ name: "", email: "", subscription: "" });
    fetchClients();
  };

  const generateInvoice = async (clientId) => {
    await fetch(/api/invoices, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId }),
    });
    fetchInvoices();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Automated Billing & Invoicing System</h1>

      {/* Add New Client */}
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-2xl mb-4">Add New Client</h2>
          <div className="flex gap-4">
            <Input
              placeholder="Client Name"
              value={newClient.name}
              onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            />
            <Input
              placeholder="Client Email"
              value={newClient.email}
              onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            />
            <Input
              placeholder="Subscription Type"
              value={newClient.subscription}
              onChange={(e) => setNewClient({ ...newClient, subscription: e.target.value })}
            />
            <Button onClick={handleAddClient}>Add Client</Button>
          </div>
        </CardContent>
      </Card>

      {/* Clients List */}
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-2xl mb-4">Clients</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subscription</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.subscription}</td>
                  <td>
                    <Button onClick={() => generateInvoice(client.id)}>Generate Invoice</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>

      {/* Invoices List */}
      <Card>
        <CardContent>
          <h2 className="text-2xl mb-4">Invoices</h2>
          <Table>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.clientName}</td>
                  <td>${invoice.amount}</td>
                  <td>{invoice.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingSystem;