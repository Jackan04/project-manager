class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "API Error";
    this.statusCode = statusCode;
  }
}

export default ApiError;
