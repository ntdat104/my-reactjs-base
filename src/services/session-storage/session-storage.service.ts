interface Object {
  [key: string]: any;
}

interface SessionStorageProps {
  clear: () => void;
  getItem: (key: string) => string | null;
  key: (index: number) => string | null;
  length: number;
  removeItem: (key: string) => void;
  setItem: (key: string, value: string) => void;
}

export class SessionStorage {
  private readonly store: Object;
  private readonly sessionStorage: SessionStorageProps;
  private readonly prefix: string;

  constructor(key: string) {
    this.sessionStorage = window.sessionStorage;
    this.prefix = (process.env.REACT_APP_NAME || "app") + `_${key}`;
    this.store = JSON.parse(this.sessionStorage.getItem(this.prefix) || "{}");
  }

  private save(): void {
    this.sessionStorage.setItem(this.prefix, JSON.stringify(this.store));
  }

  public get(key: string): any {
    return this.store[key];
  }

  public set(key: string, value: any): void {
    this.store[key] = value;
    this.save();
  }

  public remove(key: string): void {
    delete this.store[key];
    this.save();
  }

  public clear(): void {
    this.sessionStorage.clear();
  }
}
