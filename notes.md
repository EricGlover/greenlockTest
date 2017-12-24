# HTTPS what is ?

https is http implemented over TLS (transport layer secure), or previously over SSL (secure socket layer)

it provides protection against man-in-the-middle attacks by offering which is pretty dope

# what can an eavesdropper tell about your clients web traffic ?

amount of data being passed,

possibly the domain - depending,

length of the session

NO information about the content (under normal circumstances)

### TLS

Provides three things : Encryption, Authentication, and Integrity
So we want the communication between peers to be obfuscated from snoopy people

We also want to be able to verify one or both parties identity

And we want to easily verify that all messages passed back and forth haven't been tampered with

Integrity comes from the use of a MAC (Message Authentication Code, basically a checksum)

Server authentication is established through a certified authority ...details later ?
Client authentication is theoretically a thing

Encryption is established through the handshake where peers secretly establish a shared private key

# why have certificates ?
