function FindProxyForURL(url, host) {
    PROXY = "PROXY your.proxy.server:port"

    // Apple.com via proxy
    if (shExpMatch(host,"*apple.com")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
