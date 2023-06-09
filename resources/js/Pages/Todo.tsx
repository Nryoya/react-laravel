import Header from "@/components/Header";
import Form from "@/components/Form";
import List from "@/components/List";
import csrf_token from "@/components/Token";

interface taskType {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
}

interface Props {
    tasks: taskType[];
}

const ToDo = ({ tasks }: Props) => {

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto mt-5">
                <Form token={csrf_token}/>
            </div>
            <List tasks={tasks} token={csrf_token} />
        </>
    );
};

export default ToDo;
