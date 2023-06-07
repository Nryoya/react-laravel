import Header from "@/components/Header";
import Form from "@/components/Form";
import List from "@/components/List";
const ToDo = ({tasks}) => {
    console.log(tasks);
    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto mt-5">
                <Form />
            </div>
            <List tasks={tasks}/>
        </>
    );
};

export default ToDo;
