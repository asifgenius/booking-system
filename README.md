
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-02


---


# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?

   JSX stands for JavaScript XML. It is a syntax extension that lets developers write HTML-like code inside JavaScript. React uses JSX because it makes component structure easier to read, write, and maintain. JSX is converted into regular JavaScript before the code runs in the browser.

 - What is the difference between State and Props?

   Props are values passed from a parent component to a child component. They are read-only and are used to share data between components.State is data managed inside a component. It can change over time, and when it changes, React re-renders the component to show the updated UI.

 - What is the useState hook, and how does it work?

   useState is a React hook used to add state to a functional component. It returns two things:
   The current state value, A function to update that state. When the update function is called, React updates the state and re-renders the component.

 - How can you share state between components in React?
 
   A common way to share state is to lift the state up to the nearest common parent component. The parent keeps the state and passes it down to child components through props.
   For larger applications, React Context or external state management libraries can also be used.
 - How is event handling done in React?
 
   Event handling in React is done using camelCase event names such as onClick, onChange, and onSubmit. You pass a function to the event handler, and React calls that function when the event happens.

---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 



## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

> ⚠️ **Important:** The project must be built using **React.js**. Other frameworks such as Vue are not permitted.

---

## 📌 Project Rules

- ✅ At least **5 meaningful commits** are required.
- ❌ Do not use dummy text where real data can be displayed.

---

## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.


---


