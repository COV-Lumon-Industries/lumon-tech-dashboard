import axios from "axios";


export default function UploadDocument(file:File){
    const form = new FormData();
    form.append("file", file);
    return axios.post("http://65.21.5.249:8081/files/upload",form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}