export default function apiResponse(statusCode, data, message, additon = null) {
    return { statusCode, data, message, additon };
}
