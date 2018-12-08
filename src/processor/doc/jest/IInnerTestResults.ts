import { ILocation } from "./ILocation";

/**
 * Jest interface
 * @export
 * @interface IInnerTestResults
 */
export interface IInnerTestResults {
    title: string;
    status: "failed" | "pending" | "passed";
    ancestorTitles: string[];
    duration: number;
    fullname: string;
    failureMessages: string;
    numPassingAsserts: number;
    location: ILocation;
}
