import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// class
export class Authservice {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // call another method
                return this.logIn({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async logIn({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;

    }

    async logOut() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}



// object
const authservice = new Authservice();

export default authservice;


