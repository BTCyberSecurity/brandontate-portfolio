# Network segmentation validation worksheet

Status: in progress. I have installed OPNsense and confirmed detection of both Ethernet
interfaces. Routing, VLANs, isolation, and
recovery have not yet been validated. No screenshots or measurements exist
in this repository for this project.

## Planned equipment and topology

- Lenovo M90n-1: 8th-generation Intel i5, 8 GB RAM, 256 GB SSD.
- UGREEN USB 3.0 Gigabit Ethernet: planned WAN toward the eero/home network.
  Confirm the actual chipset and driver from the running firewall.
- Onboard Gigabit Ethernet: planned LAN trunk.
- USW-Lite-8-PoE: managed VLAN switching, 1 GbE per port.
- eero Pro 6E remains the household gateway.
- Proposed zones: management, applications, AI, security testing.

Before configuration, record the actual eero subnet, select nonoverlapping
lab subnets, and maintain console access. Do not connect the lab LAN back to
the home LAN through an unmanaged switch. Decide on IPv6 explicitly; if
enabled, validate equivalent IPv6 isolation rather than testing only IPv4.

## Configuration record

| Field | Observed value |
| --- | --- |
| OPNsense version | Pending |
| Onboard interface / driver | Pending |
| USB interface / chipset / driver | Pending |
| Upstream subnet | Pending; keep private identifiers out of public exports |
| VLAN IDs and lab subnets | Pending |
| Trunk and access port assignments | Pending |
| Allowed traffic and rule rationale | Pending |
| IPv6 configuration | Pending |

## Test matrix

Every row is pending. Record date, source, destination, protocol/port,
expected result, observed result, evidence, and corrective action.

| Test | Expected result | Observed result |
| --- | --- | --- |
| Client DHCP, DNS, external HTTPS | Lab lease and intended internet access | Pending |
| Lab to household endpoint | Denied unless a documented exception applies | Pending |
| Cross-VLAN denied path | Denied; correlate with logged rule | Pending |
| Cross-VLAN permitted path | Only the documented service is reachable | Pending |
| Management from authorized client | Firewall and switch administration reachable | Pending |
| Management from test VLAN | Administration denied | Pending |
| Firewall reboot | Interfaces return; record connectivity recovery time | Pending |
| Sustained USB WAN traffic | Record duration, load, errors, and interruptions | Pending |
| USB disconnect/reconnect | Record outage and recovery behavior | Pending |
| Configuration restore | Intended settings recovered during controlled exercise | Pending |

Use active services for denied/allowed comparisons: a timeout against an
endpoint with no listening service does not establish firewall enforcement.
Record rule counters/logs and reverse-direction tests where appropriate.
USB link speed is not a throughput measurement. Note workload, endpoint,
test duration, and firewall features for every benchmark.

## Evidence and recovery

1. Export a private configuration backup and verify it is readable.
2. Document console recovery and restore steps before changing management access.
3. Capture authentic screenshots only after executing each test.
4. Remove credentials, keys, MAC addresses, public IPs, and household identifiers
   before publishing. Do not commit raw firewall configuration backups.
5. Record failures and corrections as well as successful results.
6. Update the portfolio's completed/planned status only when evidence exists.

A separate implementation repository is planned after a reproducible first
release. This worksheet is documentation, not a published firewall configuration.
