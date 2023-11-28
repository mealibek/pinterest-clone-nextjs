import createWebStorage from "redux-persist/lib/storage/createWebStorage";

interface NoopStorage {
    getItem: (key: string) => Promise<string | null>;
    setItem: (key: string, value: any) => Promise<any>;
    removeItem: (key: string) => Promise<void>;
}

const createNoopStorage = (): NoopStorage => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage: NoopStorage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;