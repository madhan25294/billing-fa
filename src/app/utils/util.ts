import { LOCAL_STORAGE_KEY } from 'src/app/constants/local-storage';

interface callbackFunc {
  (data: any): any;
}

export class Util {
  private static events = {};

  constructor() {}

  private static getPrototypeOf = Object.getPrototypeOf;

  public static isDefined(value: any): boolean {
    return typeof value !== "undefined";
  }

  public static isDefinedAndNotNull(value: any): boolean {
    return typeof value !== "undefined" && value !== null;
  }

  public static isUndefined(value: any): boolean {
    return typeof value === "undefined";
  }

  public static isUndefinedOrNull(value: any): boolean {
    return typeof value === "undefined" || value == null;
  }

  public static isEmptyRoute(value: any): boolean {
    return value === "/" || value === "./";
  }

  public static isObject(value: any): boolean {
    return (
      value &&
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    );
  }

  public static isArray(value: any): boolean {
    return value !== null && Array.isArray(value);
  }

  public static isBlankObject(value: any): boolean {
    return (
      value !== null && typeof value === "object" && !this.getPrototypeOf(value)
    );
  }

  public static isString(value: any): boolean {
    return typeof value === "string";
  }

  public static isNumber(value: any): boolean {
    return typeof value === "number";
  }

  public static isDate(value: any): boolean {
    return toString.call(value) === "[object Date]";
  }

  public static isFunction(value:any) {
    return typeof value === "function";
  }

  public static isBoolean(value: any): boolean {
    return typeof value === "boolean";
  }

  public static trim(value: string) {
    return this.isString(value) ? value.trim() : value;
  }

  public static isEmptyString(value: string): Boolean {
    let result: Boolean = true;
    if (this.isDefinedAndNotNull(value)) {
      value = value.trim();
      result = value.length === 0;
    }
    return result;
  }
  public static isEmptyArray(value: any[]): Boolean {
    let result: Boolean = true;
    if (this.isDefinedAndNotNull(value)) {
      result = value.length === 0;
    }
    return result;
  }

  public static shallowCopyObject(obj: any): any {
    return Object.assign({}, obj);
  }

  public static shallowCopyArray(obj: any[]) {
    return Object.assign([], obj);
  }

  public static deepCopy(data: any) {
    return JSON.parse(JSON.stringify(data));
  }
  

  public static removeSpecialCharacter(value: string): string {
    value = value.trim();
    return value.replace(/[^a-zA-Z]/g, "");
  }

  public static getRandomNumber(): number {
    const number = Math.floor(Math.random() * 90000) + 10000;
    return number;
  }


  public static replace(
    value: string,
    replaceString: string,
    replaceWith: any
  ): string {
    return value.replace(replaceString, replaceWith);
  }

  public static replaceAll(
    value: string,
    replaceString: string,
    replaceWith: any
  ): string {
    return value.replace(new RegExp(replaceString, "g"), replaceWith);
  }

  public static splitIntoSubArray(
    data: Array<any>,
    start: number,
    end: number
  ): Array<any> {
    let dataSet = [];
    if (Util.isDefinedAndNotNull(data)) {
      dataSet = data.slice(start, end);
    }
    return dataSet;
  }


  public static compare(obj1: any, obj2: any) {
    for (var p in obj1) {
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
   
      switch (typeof (obj1[p])) {
        case 'object':
          if (!this.compare(obj1[p], obj2[p])) return false;
          break;
        case 'function':
          if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
          break;
        default:
          if (obj1[p] != obj2[p]) return false;
      }
    }
   
    for (var p in obj2) {
      if (typeof (obj1[p]) == 'undefined') return false;
    }
    return true;
  }

  public static setStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public static getStorage(key: string) {
    if (Util.isDefinedAndNotNull(localStorage.getItem(key))) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  public static removeStorage(key: string) {
    localStorage.removeItem(key);
  }

  public static clearStorage() {
    localStorage.clear();
  }


}
