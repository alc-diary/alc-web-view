class ChannelTalk {
    constructor() {
        if (typeof window !== "undefined" && window.ChannelIO) {
            window.ChannelIO("boot", {
                pluginKey: "039ab381-0a3f-4ed9-8bef-3d186bbf2b1b",
            });
        }
    }

    openChat() {
        window.ChannelIO && window.ChannelIO("openChat");
    }

    hideChannelButton() {
        window.ChannelIO && window.ChannelIO("hideChannelButton");
    }
}

export default new ChannelTalk();
