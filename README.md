## About project

Redirecting Internet traffic only for specified domains through a proxy server.
It is a local web server that just returns the Proxy Auto-Configuration (PAC) file.
For more details about the file settings, see the [documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file).

### Requirements

- Docker
- Docker Compose (optional)
- Make (optional)

### Installation

Run `make install` to install and run web server.
Server will be running on port `8181`.
On MAC you can setup proxy auto confuguration in network settings.
Also you can use Chrome plugin like `Falcon` to turn on/off quickly.
