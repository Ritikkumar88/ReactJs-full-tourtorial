import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    Client = new Client();
    databases;
    bucket;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteBucketId)
        this.databases = new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite service :: createPost error", error);
        }
    }

    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
        } catch (error) {
            console.log("app write service update post errror", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("appwrite service delete post error", error);
            return false;
        }

    }

    async getPost(slug) {
        try {
        return await this.databases.getDocument(
            appwriteDatabaseId,
            appwriteCollectionId,
            slug
        )
        } catch (error) {
            console.log("error of appwrite in getpost : ",  error);
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("appwrite error" , error)
            return false;
        }

    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite service error" , error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("appwrite service error" , error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )

    }

}

// object
const service = new Service()
export default Service;
