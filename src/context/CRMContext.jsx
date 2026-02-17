
import React, { createContext, useState } from "react";


export const CRMContext = createContext();

const initialDeals = [
  { id: 1, title: "TechCorp Merger", client: "Harvey Specter", value: "$2.5M", stage: "negotiation", priority: "High" },
  { id: 2, title: "Class Action Suit", client: "Jessica Pearson", value: "$12M", stage: "discovery", priority: "Medium" },
  { id: 3, title: "Estate Planning", client: "Louis Litt", value: "$450k", stage: "intake", priority: "Low" },
  { id: 4, title: "IP Infringement", client: "Mike Ross", value: "$1.2M", stage: "discovery", priority: "High" },
  { id: 5, title: "Real Estate Closing", client: "Rachel Zane", value: "$800k", stage: "settled", priority: "Medium" },
];

export function CRMProvider({ children }) {

  const [deals, setDeals] = useState(initialDeals);
  const [contacts, setContacts] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  const logEvent = (event) => {
    setEvents(prev => [...prev, event]);
  };

  return (
    <CRMContext.Provider
      value={{
        deals,
        contacts,
        tasks,
        events,
        addTask,
        addContact,
        logEvent,
        setDeals
      }}
    >
      {children}
    </CRMContext.Provider>
  );
}
