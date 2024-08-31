export class ServerError extends Error {
  name: string;
  stack?: string | undefined;
  constructor(message: string) {
    super(message);
    this.name = "Server Error";
  }
}
