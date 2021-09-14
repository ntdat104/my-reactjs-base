type Object = { [key: string]: any };

export interface Headers {
  "Content-Type": "application/json" | "application/x-www-form-urlencoded";
}

export interface Option {
  method: "GET" | "POST" | "PUT" | "DELETE";
  mode?: "cors" | "no-cors" | "same-origin";
  cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
  credentials?: "same-origin" | "include" | "omit";
  headers?: Headers;
  redirect?: "follow" | "manual" | "error";
  referrerPolicy?: "no-referrer-when-downgrade" | "no-referrer" | "origin";
  body?: string;
}

export class Fetch {
  constructor() {}

  public async get(url: string): Promise<Object> {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      return { message: "error" };
    }
  }

  public async post(url: string, data: Object): Promise<Object> {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      return { message: "error" };
    }
  }

  public async put(url: string, data: Object): Promise<Object> {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      return { message: "error" };
    }
  }

  public async delete(url: string): Promise<Object> {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      return { message: "error" };
    }
  }
}

export const fetchClient = new Fetch();
