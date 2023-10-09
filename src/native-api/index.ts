"use client";
class NativeAPI {
    device: "web" | "android" | "ios";
    execute: CloseChannelTalk;

    constructor() {
        if (typeof window !== "undefined") {
            const userAgent = window?.navigator.userAgent.toLowerCase();
            const ios = userAgent.indexOf("in_app_ios") > -1;
            const android = userAgent.indexOf("in_app_aos") > -1;

            if (ios) {
                this.device = "ios";
            } else if (android) {
                this.device = "android";
            } else {
                this.device = "web";
            }

            this.execute = (eventName: ExecuteEventName, data?: any) => {
                const postData = data ? JSON.stringify(data) : undefined;
                this.getEventFunction(eventName, postData);
            };
        } else {
            this.device = "web";
            this.execute = () => {};
        }
    }

    private getEventFunction(eventName: ExecuteEventName, data?: any) {
        switch (this.device) {
            case "android":
                if (window[eventName]) {
                    return data ? window[eventName].execute(data) : window[eventName].execute();
                } else {
                    return null;
                }

            case "ios":
                if (!window.webkit) return null;
                if (!window.webkit.messageHandlers) return null;
                if (!window.webkit.messageHandlers[eventName]) return null;

                return window.webkit.messageHandlers[eventName].postMessage(data);
            default:
                return null;
        }
    }
}

//execute name 정리
export type ExecuteEventName = "closeChannelTalk";
export type AndroidFunction = { execute: (stringifyData?: string) => void };
export type IosFunction = { postMessage: (stringityData?: string) => void };

type CloseChannelTalk = (eventName: "closeChannelTalk") => void;

export default new NativeAPI();
