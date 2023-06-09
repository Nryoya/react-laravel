import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";

interface token {
    token: string
}

const Form = ({ token } : token) => {
    const [name, setName] = useState("");
    const { errors } = usePage().props;

    return (
        <form
            className="w-full max-w-sm"
            action={route('tasks.store')}
            onSubmit={(e) => {
                if(!confirm("追加しますか？")) { e.preventDefault(); e.stopPropagation(); }}
            }
            method="post"
        >
            {errors.name && <p className="py-2 px-3 bg-red-500 text-white rounded">{errors.name}</p>}
            <div className="flex items-center border-b border-teal-500 py-2">
                <input type="hidden" name="_token" value={token} />
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="やること"
                    aria-label="Full name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                >
                    追加
                </button>
            </div>
        </form>
    );
};

export default Form;
