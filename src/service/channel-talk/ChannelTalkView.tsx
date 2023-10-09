"use client";
import React, { useEffect } from "react";
import channelTalk from "@/channel-talk";
import NativeAPI from "@/native-api";

const ChannelTalkView: React.FC = () => {
    useEffect(() => {
        const nativeAPI = new NativeAPI();
        channelTalk.showMessenger();
        channelTalk.onHideMessenger(() => {
            nativeAPI.execute("closeChannelTalk");
        });
    }, []);

    return <></>;
};

export default ChannelTalkView;
