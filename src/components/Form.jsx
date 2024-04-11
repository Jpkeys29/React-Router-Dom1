import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Form() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text"
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        value={form.firstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        value={form.lastName} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}