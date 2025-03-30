import axios from "axios";


export default function UploadDocument(file: File) {
    const form = new FormData();
    form.append("file", file);
    return axios.post("https://octopush.blackprince.tech/files/upload", form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}