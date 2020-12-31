export default function successHandler(message: string, status: number, data: any) {
    return {
        data,
        message,
        status,
    };
}
