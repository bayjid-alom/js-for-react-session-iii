## ⚙️ JavaScript for React

> A focused JavaScript practice repository covering the core concepts and modern syntax needed to build a strong foundation before learning React.


### 📁 Repository Structure

```text
js-for-react-session-iii/
├── 01_variable.js
├── 02_data_types.js
├── 03_truthy_falsy.js
├── 04_function.js
├── 05_spread_rest_operator.js
├── 06_destructuring.js
├── 07_data_fetching.js
├── 08_array_methods.js
├── 09_shortcut_condition.js
├── 10_index.js
├── 11_index_two.js
└── README.md
```


---

## 📝 **Notes**

### 📌 Export & Import

JavaScript-এর `export` ব্যবহার করে একটি file-এর variable অন্য file-এ পাঠানো যায়। আর `import` ব্যবহার করে সেই variable অন্য file থেকে নেওয়া যায়।

### `data.js`

    const name = "Bayjid";
    const age = 19;

    export { name, age };

### `app.js`

    import { name, age } from "./data.js";

    console.log(name); // Bayjid
    console.log(age);  // 19

### 📌 Quick Note

- `export` → অন্য file-এ data পাঠায়
- `import` → অন্য file থেকে data নেয়

<details>
<summary>❔ Single Item Export & Import</summary>
<br>

**`data.js`**

    const name = "Bayjid";

    export default name;

**`app.js`**

    import name from "./data.js";

    console.log(name); // Bayjid

</details>

<br>



## 👨‍💻 Author

**Bayjid Alom**

> Learning JavaScript step by step, strengthening core concepts, and building the foundation needed to move confidently into React development.