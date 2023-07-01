"use client"
import React, { useEffect } from "react";

const ChannelTalk: React.FC = () => {
    useEffect(() => {
        if(typeof window !== "undefined") {
            if(window.ChannelIO){
                window.ChannelIO('boot', {
                    "pluginKey": "039ab381-0a3f-4ed9-8bef-3d186bbf2b1b"
                    });
            }
        }
    })

    return(
        <></>
    )
}

export default ChannelTalk;

declare global {
    interface Window {
      ChannelIO?: IChannelIO;
      ChannelIOInitialized?: boolean;
    }
  }
  
  interface IChannelIO {
    c?: (...args: any) => void;
    q?: [methodName: string, ...args: any[]][];
    (...args: any): void;
  }
