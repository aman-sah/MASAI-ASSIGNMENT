function filterContacts(contacts, query) {
  const lowerQuery = query.toLowerCase();
  
  return contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(lowerQuery) ||
      contact.email.toLowerCase().includes(lowerQuery)
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

const contacts = [
  { id: 1, name: "John Smith", email: "john.smith@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Doe", email: "jane.doe@company.org", phone: "234-567-8901" },
  { id: 3, name: "Robert Johnson", email: "rob@example.com", phone: "345-678-9012" },
  { id: 4, name: "Emily Davis", email: "emily.davis@company.org", phone: "456-789-0123" },
  { id: 5, name: "Michael Brown", email: "michael@example.com", phone: "567-890-1234" }
];

const result = filterContacts(contacts, "company");
console.log(result);
