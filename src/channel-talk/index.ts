"use client";
class ChannelTalk {
    constructor() {
        this.boot();
    }

    showMessenger() {
        window.ChannelIO && window.ChannelIO("showMessenger");
    }

    openChat() {
        window.ChannelIO && window.ChannelIO("openChat", 123);
    }

    hideChannelButton() {
        window.ChannelIO && window.ChannelIO("hideChannelButton");
    }

    onHideMessenger(hide: () => void) {
        window.ChannelIO &&
            window.ChannelIO("onHideMessenger", () => {
                hide();
            });
    }

    private boot() {
        if (typeof window !== "undefined" && window.ChannelIO) {
            window.ChannelIO("boot", {
                pluginKey: "039ab381-0a3f-4ed9-8bef-3d186bbf2b1b",
            });
        }
    }
}

export default new ChannelTalk();
