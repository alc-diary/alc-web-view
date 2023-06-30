declare module "global" {
    interface Window{
        ChannelIO:() => void
    }

    export default Window
}