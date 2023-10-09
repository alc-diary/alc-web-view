declare module "*.svg" {
    const component: React.FC<React.SVGProps<SVGSVGElement>>;

    export default component;
}

declare global {
    interface Window {
        ChannelIO: IChannelIO;
        ChannelIOInitialized?: boolean;
    }
}

interface Window {
    ChannelIO?: IChannelIO;
    ChannelIOInitialized?: boolean;
}
interface IChannelIO {
    c?: (...args: any) => void;
    q?: [methodName: string, ...args: any[]][];
    (...args: any): void;
}
