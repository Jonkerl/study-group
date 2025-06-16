
export default function getUserFromToken(token: string) {
    try {
        const payload = token.split('.')[1];
        const decoded = atob(payload);
        return JSON.parse(decoded).sub;
    } catch (err) {
        console.error("Invalid token", err);
        return null;
    }
}
