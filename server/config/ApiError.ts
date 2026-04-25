class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = "API Error";
    this.statusCode = statusCode;
  }
}

export default ApiError;
