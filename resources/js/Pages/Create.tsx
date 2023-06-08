import Header from "@/components/Header";
import Form from "@/components/Form";
import csrf_token from "@/components/Token";

const Create = () => {
    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto mt-5">
                <Form token={csrf_token}/>
            </div>
        </>
    );
};

export default Create;
