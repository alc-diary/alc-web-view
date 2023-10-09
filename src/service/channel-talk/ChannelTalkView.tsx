"use client";
import React, { useEffect } from "react";
import channelTalk from "@/channel-talk";

// channelTalk.onHideMessenger(() => {
//     console.log("하이드!");
// });

const ChannelTalkView: React.FC = () => {
    useEffect(() => {
        channelTalk.showMessenger();
        channelTalk.onHideMessenger(() => {
            console.log("확인!");
        });
    }, []);

    return <></>;
};

export default ChannelTalkView;
