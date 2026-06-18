export declare const raw: (json: string | object, query: string, flags?: string[]) => Promise<{
    stdout: string;
    stderr: string;
    exitCode: number;
}>, json: (json: string | object, query: string, flags?: string[]) => Promise<object | object[] | null>, version: () => Promise<string>;
