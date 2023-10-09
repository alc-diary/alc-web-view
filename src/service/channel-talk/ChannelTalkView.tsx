"use client";
import React, { useEffect } from "react";
import channelTalk from "@/channel-talk";
import NativeAPI from "@/native-api";

const ChannelTalkView: React.FC = () => {
    useEffect(() => {
        channelTalk.showMessenger();
        channelTalk.onHideMessenger(() => {
            NativeAPI.execute("closeChannelTalk");
        });
    }, []);

    return <></>;
};

export default ChannelTalkView;
