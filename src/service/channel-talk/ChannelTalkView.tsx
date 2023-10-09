"use client";
import React, { useEffect } from "react";
import ChannelTalk from "@/app/channel-talk/page";
import channelTalk from "@/channel-talk";

const ChannelTalkView: React.FC = () => {
    useEffect(() => {
        channelTalk.openChat();
    }, []);

    return <></>;
};

export default ChannelTalkView;
