export const definitions = {
    "S2": "SPANISHAn attacker could squat on the random port or socket that the server normally uses",
    "S3": "An attacker could try one credential after another and there's nothing to slow them down (online or offline)",
    "S4": "An attacker can anonymously connect, because we expect authentication to be done at a higher level",
    "S5": "An attacker can confuse a client because there are too many ways to identify a server",
    "S6": "An attacker can spoof a server because identifiers aren't stored on the client and checked for consistency on re-connection (that is, there's no key persistence)",
    "S7": "An attacker can connect to a server or peer over a link that isn't authenticated (and encrypted)",
    "S8": "An attacker could steal credentials stored on the server and reuse them (for example, a key is stored in a world readable file)",
    "S9": "An attacker who gets a password can reuse it (Use stronger authenticators)",
    "S10": "An attacker can choose to use weaker or no authentication",
    "SJ": "An attacker could steal credentials stored on the client and reuse them",
    "SQ": "An attacker could go after the way credentials are updated or recovered (account recovery doesn't require disclosing the old password)",
    "SK": "Your system ships with a default admin password, and doesn't force a change",
    "SA": "You've invented a new Spoofing attack",
    "T3": "An attacker can take advantage of your custom key exchange or integrity control which you built instead of using standard crypto",
    "T4": "Your code makes access control decisions all over the place, rather than with a security kernel",
    "T5": "An attacker can replay data without detection because your code doesn't provide timestamps or sequence numbers",
    "T6": "An attacker can write to a data store your code relies on",
    "T7": "An attacker can bypass permissions because you don't make names canonical before checking access permissions",
    "T8": "An attacker can manipulate data because there's no integrity protection for data on the network",
    "T9": "An attacker can provide or control state information",
    "T10": "An attacker can alter information in a data store because it has weak ACLs or includes a group which is equivalent to everyone (\"all Live ID holders\")",
    "TJ": "An attacker can write to some resource because permissions are granted to the world or there are no ACLs",
    "TQ": "An attacker can change parameters over a trust boundary and after validation (for example, important parameters in a hidden field in HTML, or passing a pointer to critical memory)",
    "TK": "An attacker can load code inside your process via an extension point",
    "TA": "You've invented a new Tampering attack",
    "R2": "An attacker can pass data through the log to attack a log reader, and there's no documentation of what sorts of validation are done",
    "R3": "A low privilege attacker can read interesting security information in the logs",
    "R4": "An attacker can alter digital signatures because the digital signature system you're implementing is weak, or uses MACs where it should use a signature",
    "R5": "An attacker can alter log messages on a network because they lack strong integrity controls",
    "R6": "An attacker can create a log entry without a timestamp (or no log entry is timestamped)",
    "R7": "An attacker can make the logs wrap around and lose data",
    "R8": "An attacker can make a log lose or confuse security information",
    "R9": "An attacker can use a shared key to authenticate as different principals, confusing the information in the logs",
    "R10": "An attacker can get arbitrary data into logs from unauthenticated (or weakly authenticated) outsiders",
    "RJ": "An attacker can edit logs and there's no way to tell (perhaps because there's no heartbeat option for the logging system)",
    "RQ": "An attacker can say \"I didn't do that,\" and you'd have no way to prove them wrong",
    "RK": "The system has no logs",
    "RA": "You've invented a new Repudiation attack",
    "I2": "An attacker can brute-force file encryption because there's no defense in place (example defense:  password stretching)",
    "I3": "An attacker can see error messages with security sensitive content",
    "I4": "An attacker can read content because messages (say, an email or HTTP cookie) aren't encrypted even if the channel is encrypted",
    "I5": "An attacker may be able to read a document or data because it's encrypted with a non-standard algorithm",
    "I6": "An attacker can read data because it's hidden or occluded (for undo or change tracking) and the user might forget that it's there",
    "I7": "An attacker can act as a 'man in the middle' because you don't authenticate endpoints of a network connection",
    "I8": "An attacker can access information through a search indexer, logger, or other such mechanism",
    "I9": "An attacker can read sensitive information in a file with bad ACLs",
    "I10": "An attacker can read information in files with no ACLs",
    "IJ": "An attacker can discover the fixed key being used to encrypt",
    "IQ": "An attacker can read the entire channel because the channel (say, HTTP or SMTP) isn't encrypted",
    "IK": "An attacker can read network information because there's no cryptography used",
    "IA": "You've invented a new Information Disclosure attack",
    "D2": "An attacker can make your authentication system unusable or unavailable",
    "D3": "An attacker can make a client unavailable or unusable but the problem goes away when the attacker stops",
    "D4": "An attacker can make a server unavailable or unusable but the problem goes away when the attacker stops",
    "D5": "An attacker can make a client unavailable or unusable without ever authenticating but the problem goes away when the attacker stops",
    "D6": "An attacker can make a server unavailable or unusable without ever authenticating but the problem goes away when the attacker stops",
    "D7": "An attacker can make a client unavailable or unusable and the problem persists after the attacker goes away",
    "D8": "An attacker can make a server unavailable or unusable and the problem persists after the attacker goes away",
    "D9": "An attacker can make a client unavailable or unusable without ever authenticating and the problem persists after the attacker goes away",
    "D10": "An attacker can make a server unavailable or unusable without ever authenticating and the problem persists after the attacker goes away",
    "DJ": "An attacker can cause the logging subsystem to stop working",
    "DQ": "An attacker can amplify a Denial of Service attack through this component with amplification on the order of 10: 1",
    "DK": "An attacker can amplify a Denial of Service attack through this component with amplification on the order of 100: 1",
    "DA": "You've invented a new Denial of Service attack",
    "E5": "An attacker can force data through different validation paths which give different results",
    "E6": "An attacker could take advantage of .NET permissions you ask for, but don't use",
    "E7": "An attacker can provide a pointer across a trust boundary, rather than data which can be validated",
    "E8": "An attacker can enter data that is checked while still under their control and used later on the other side of a trust boundary",
    "E9": "There's no reasonable way for a caller to figure out what validation of tainted data you perform before passing it to them",
    "E10": "There's no reasonable way for a caller to figure out what security assumptions you make",
    "EJ": "An attacker can reflect input back to a user, like cross site scripting",
    "EQ": "You include user-generated content within your page, possibly including the content of random URLs",
    "EK": "An attacker can inject a command that the system will run at a higher privilege level",
    "EA": "You've invented a new Elevation of Privilege attack",
  }