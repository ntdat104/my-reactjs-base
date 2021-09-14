type ObjectOrArray = { [key: string]: any } | any[];

export class SessionStorage {
  private prefix: string;
  private sessionStorage;

  constructor() {
    this.prefix = process.env.REACT_APP_NAME || "app";
    this.sessionStorage = window.sessionStorage;
  }

  private generateKey(key: string): string {
    return `${this.prefix}_${key}`;
  }

  public get(key: string): null | string | ObjectOrArray {
    const responseData = this.sessionStorage.getItem(this.generateKey(key));
    if (!responseData) return null;
    if (typeof responseData === "string") return responseData;
    return JSON.parse(responseData);
  }

  public set(key: string, data: string | number | ObjectOrArray): void {
    if (typeof data === "string" || typeof data === "number") {
      this.sessionStorage.setItem(this.generateKey(key), data.toString());
    } else {
      this.sessionStorage.setItem(this.generateKey(key), JSON.stringify(data));
    }
  }

  public remove(key: string): void {
    this.sessionStorage.removeItem(key);
  }

  public clear(): void {
    this.sessionStorage.clear();
  }
}

export const sessionStorage = new SessionStorage();
