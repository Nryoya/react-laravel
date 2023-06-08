import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

interface taskType {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
}

interface Props {
    token: string;
    task: taskType;
}

const EditForm = ({ token, task }: Props) => {
    const [name, setName] = useState(task.name);
    const { errors } = usePage().props;

    const fetchUpdate = (): void => {
        const url = route("tasks.update", task.id)
        Inertia.patch(url, {
            _token: token,
            name: name,
        })
    }

    const isUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        
        confirm('変更しますか？') && fetchUpdate();
    }

    return (
        <form
            className="w-full max-w-sm"
            onSubmit={(e) => {
                isUpdate(e)
            }}
            method="post"
        >
            {errors.name && (
                <p className="py-2 px-3 bg-red-500 text-white rounded">
                    {errors.name}
                </p>
            )}
            <div className="flex items-center border-b border-teal-500 py-2">
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
                    変更
                </button>
            </div>
        </form>
    );
};

export default EditForm;
