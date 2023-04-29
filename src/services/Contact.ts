import axios from "axios";
import Contact from "../models/Contact";


class ContactService {
    http = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    });

    /**
     * @description Helps to fetch the all the contact information
     * @returns {Contact}
     */
    async fetchContacts() {
        const response = await this.http.get<Contact[]>('/users');
        return response.data;
    }

    /**
     * @description Helps to store the Contact information 
     * @param user : {Contact} 
     * @returns 
     */
    async storeContact(user: Contact) {
        return (await this.http.post<Contact>('/users', user)).data;
    }

    /**
     * @description Delete the contact information
     * @param id : number
     * @returns 
     */
    async removeContact(id: number) {
        return (await this.http.post<Contact>('/users/' + id)).data;
    }
}

export default new ContactService();