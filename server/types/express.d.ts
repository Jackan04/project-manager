declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      name: string;
      createdAt: Date;
      updatedAt: Date;
    }
  }
}

export {};
