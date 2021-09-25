type ObjectOrArray = { [key: string]: any } | any[];

export class LocalStorage {
  private prefix: string;
  private localStorage;

  constructor() {
    this.prefix = process.env.REACT_APP_NAME || "app";
    this.localStorage = window.localStorage;
  }

  private generateKey(key: string): string {
    return `${this.prefix}_${key}`;
  }

  public get(key: string): null | string | ObjectOrArray {
    const responseData = this.localStorage.getItem(this.generateKey(key));
    if (!responseData) return null;
    if (typeof responseData === "string") return responseData;
    return JSON.parse(responseData);
  }

  public set(key: string, data: string | number | ObjectOrArray): void {
    if (typeof data === "string" || typeof data === "number") {
      this.localStorage.setItem(this.generateKey(key), data.toString());
    } else {
      this.localStorage.setItem(this.generateKey(key), JSON.stringify(data));
    }
  }

  public remove(key: string): void {
    this.localStorage.removeItem(key);
  }

  public clear(): void {
    this.localStorage.clear();
  }
}

export const localStorage = new LocalStorage();
