import { Inertia } from "@inertiajs/inertia";

interface taskType {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
}

interface Props {
    tasks: taskType[];
    token: string;
}

const List = ({ tasks, token }: Props) => {

    const fetchDelete = (id: string): void => {
        const url = route("tasks.destroy", id);

        Inertia.post(url, {
            _method: "delete",
            _token: token,
        });
    };

    const handleDelete = (id: string) => {
        if (!confirm("削除しますか？")) {
            return false;
        }

        fetchDelete(id);
    };

    return (
        <div className="max-w-6xl mx-auto mt-12">
            <h2 className="text-teal-500 text-2xl">やることリスト</h2>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li
                            className="flex items-center border-b border-teal-500 py-2 px-2"
                            key={task.id}
                        >
                            <p className="text-xl grow">{task.name}</p>
                            <div>
                                <a className="mr-6 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                href={route("tasks.edit", task.id)}
                                >
                                    編集
                                </a>
                                <button
                                    className="lex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    終了
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default List;
