// @flow
// This demo is using react-emotion for styling, but that is
// NOT a requirement for using SimpleWebRTC

import styled, { css, injectGlobal } from "react-emotion";

injectGlobal`
body {
    margin: 0;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

img {
    vertical-align: middle;
    margin: 5px;
    border-radius: 5px;
}

button {
    margin: 5px;
    cursor:pointer;
}
`;

const greyish = "#ddd";

export const StyledUIContainer = styled("div")`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;
export const StyledButtonSend = css`
    margin-right: 16px;
    background: #007BFF;
    color: #ffffff;
    border-radius: 24px;
    padding: 9px;
    font-weight: bold;
    font-size: 14px;
    border:none
`;

export const StyledToolbar = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    background: #fff;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.2) -1px 3px 1px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    z-index: 1;
    min-width:1024px;

    & h1 {
        font-size: 20px;
        color: #007BFF;
        margin-left: 16px;
        font-weight: 400;
    }
    & .cancel-button {
            background: #FD6F6F;
    }
    & button {
        margin-right: 16px;
        background: #007BFF;
        color: #ffffff;
        border-radius: 24px;
        padding: 9px;
        font-weight: bold;
        font-size: 14px;
        border:none
    }

    & .display-name-editor {
        display: inline;
        padding:20px;
        margin-right:10px
    }
    
    & .btn :hover {
        background:#FD6F6F;
    }
`;

export const StyledMainContainer = styled("div")`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "video video video chat";
    background: #e6eaed;
    min-width:1024px;

`;

export const StyledVideoContainer = styled("div")`
    grid-area: video;
    overflow: hidden;

    & .videogrid {
        height: 100%;
    }

    & video {
        object-fit: contain;
        width: 100%;
        height: 100%;
        margin: auto;
        justify-self: center;
        align-self: center;
    }
`;

export const StyledMessageGroup = styled("div")`
    margin-top: 16px;
    padding: 0 10px;

    & img {
        height: 32px;
        width: 32px;
        float: left;
    }
`;

export const StyledDisplayName = styled("span")`
    font-weight: bold;
    padding:10px
`;

export const StyledTimestamp = styled("span")`
    color: ${greyish};
    font-size: 14px;
`;

export const StyledMessageMetadata = styled("p")`
    margin: 0;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
`;

export const StyledMessage = styled("p")`
    margin: 0;
    margin-left: 40px;
`;

export const StyledTyping = styled("div")`
    height: 20px;
    font-size: 12px;
    padding-left: 10px;
`;

export const StyledChatListContainer = css`
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
`;

export const StyledChatContainer = styled("div")`
    grid-area: chat;
    overflow: hidden;
    border-left: 2px solid ${greyish};
    background: #fafafa;
    display: flex;
    flex-direction: column;
`;

export const StyledChatInputContainer = styled("div")`
    padding: 5px;
    border-top: 0px solid ${greyish};

    & textarea {
        border-radius: 2px;
        border-color: ${greyish};
        width: 100%;
        height: 50px;
        padding: 5px;
        overflow-y: auto;
        resize: none;
    }
`;
