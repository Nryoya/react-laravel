import Header from "@/components/Header";
import EditForm from "@/components/EditForm";
import csrf_token from "@/components/Token";

interface taskType {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
}

interface Props {
    task: taskType;
}

const Edit = ({ task }: Props) => {
    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto mt-5">
                <EditForm token={csrf_token} task={task} />
            </div>
        </>
    );
};

export default Edit;
