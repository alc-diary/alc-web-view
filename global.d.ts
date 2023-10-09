import { ExecuteEventName, AndroidFunction, IosFunction } from "@/native-api";

declare module "*.svg" {
    const component: React.FC<React.SVGProps<SVGSVGElement>>;

    export default component;
}

declare global {
    interface Window extends Record<ExecuteEventName, AndroidFunction> {
        ChannelIO: IChannelIO;
        ChannelIOInitialized?: boolean;

        webkit: {
            messageHandlers: Record<ExecuteEventName, IosFunction>;
        };
    }
}

interface IChannelIO {
    c?: (...args: any) => void;
    q?: [methodName: string, ...args: any[]][];
    (...args: any): void;
}
