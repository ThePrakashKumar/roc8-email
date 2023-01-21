import axios from "axios";

export const fetchEmail = async () => {
    try {
        const response = await axios.get("https://flipkart-email-mock.now.sh/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
