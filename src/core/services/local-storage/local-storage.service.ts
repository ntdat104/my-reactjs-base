interface Object {
  [key: string]: any;
}

interface LocalStorageProps {
  clear: () => void;
  getItem: (key: string) => string | null;
  key: (index: number) => string | null;
  length: number;
  removeItem: (key: string) => void;
  setItem: (key: string, value: string) => void;
}

export class LocalStorage {
  private readonly store: Object;
  private readonly localStorage: LocalStorageProps;
  private readonly prefix: string;

  constructor(key: string) {
    this.localStorage = window.localStorage;
    this.prefix = (process.env.REACT_APP_NAME || "app") + `_${key}`;
    this.store = JSON.parse(this.localStorage.getItem(this.prefix) || "{}");
  }

  private save(): void {
    this.localStorage.setItem(this.prefix, JSON.stringify(this.store));
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
    this.localStorage.clear();
  }
}
