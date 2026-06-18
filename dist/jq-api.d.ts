export interface JqModule {
    raw: (jsonString: string, query: string, flags?: string[]) => Promise<{
        stdout: string;
        stderr: string;
        exitCode: number;
    }>;
    version: () => Promise<string>;
}
type GetInstance = () => Promise<JqModule>;
export declare function createApi(getInstance: GetInstance): {
    raw: (json: string | object, query: string, flags?: string[]) => Promise<{
        stdout: string;
        stderr: string;
        exitCode: number;
    }>;
    json: (json: string | object, query: string, flags?: string[]) => Promise<object | object[] | null>;
    version: () => Promise<string>;
};
export {};
