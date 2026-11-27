# AzuraCast – Serverbereitstellung ohne manuelles Programmieren

Stand: 27.11.2026
Zweck: vorbereitete, möglichst einfache Installation auf einem frischen Hetzner-Cloud-Server. Dieses Dokument bestellt keinen Server und löst keine Zahlung aus.

## Ausgewähltes Startprofil

Vorgeschlagener Test-/Hobby-Server: Hetzner Cloud CAX21, ARM64, 2 vCPU, 4 GB RAM, 40 GB NVMe.
AzuraCast unterstützt ARM64. Die AzuraCast-Mindestanforderung liegt bei 2 GB RAM und 20 GB Speicher; empfohlen werden 4 CPU-Kerne, 4 GB RAM und mindestens 40 GB Speicher.
Der CAX21 erfüllt RAM und Speicher, hat aber nur 2 vCPU. Bei steigender Last kann ein Upgrade nötig sein.

Laut aktueller Hetzner-Preisliste (Deutschland/Finnland, inklusive 19 % MwSt.) liegt CAX21 bei 12,48 €/Monat, zuzüglich möglicher IPv4-Kosten. Preise und Verfügbarkeit vor Bestellung in der Hetzner-Konsole prüfen. Der Server wird erst nach ausdrücklicher Freigabe durch den Kontoinhaber bestellt.

## Region und Betrieb
- Standort: Deutschland (Nürnberg oder Falkenstein), sofern bei Bestellung verfügbar.
- Betriebssystem: Ubuntu LTS, frische Minimalinstallation.
- Keine zusätzlichen Docker-Installationen vorab.
- Persistente Daten auf dem Serverlaufwerk; regelmäßige externe Backups zusätzlich einrichten.
- Server bleibt dauerhaft eingeschaltet, damit 24/7-AutoDJ möglich ist.

## Cloud-init – vorbereitete Erstinstallation

Beim Erstellen des Servers kann der folgende Cloud-init-Inhalt in das Feld „Cloud config“ eingefügt werden. Er aktualisiert das Basissystem und installiert AzuraCast über das offizielle Docker-Installationsskript. Er legt keine Admin-Zugangsdaten an und veröffentlicht keine API-Schlüssel.

```yaml
#cloud-config
package_update: true
package_upgrade: true
packages:
  - curl
  - git
  - ca-certificates
runcmd:
  - [bash, -lc, "mkdir -p /var/azuracast"]
  - [bash, -lc, "cd /var/azuracast && curl -fsSL https://raw.githubusercontent.com/AzuraCast/AzuraCast/main/docker.sh -o docker.sh"]
  - [bash, -lc, "chmod +x /var/azuracast/docker.sh"]
  - [bash, -lc, "cd /var/azuracast && yes '' | ./docker.sh install"]
```

Die Installation kann mehrere Minuten dauern. Danach wird die öffentliche Server-IP im Browser geöffnet und das AzuraCast-Admin-Konto wird vom Kontoinhaber selbst eingerichtet.

## Netzwerk / Firewall
Vor dem ersten Start sicherstellen, dass eingehend erlaubt sind:
- TCP 22: SSH-Administration (möglichst auf eigene IP beschränken)
- TCP 80 und 443: Weboberfläche und HTTPS
- TCP 8000–8500: Standard-Streamports von AzuraCast
Nicht benötigte Ports geschlossen lassen. SSH nicht mit Passwort-Root-Login öffentlich betreiben; SSH-Schlüssel verwenden.

## Nach der Installation
1. Admin-Konto und sichere Passphrase selbst erstellen.
2. HTTPS-Zertifikat/Domain konfigurieren.
3. Station „TEKKNO MILIEU RADIO“ anlegen.
4. AutoDJ zunächst mit einem einzigen Testmix prüfen.
5. DJ-/Streamer-Zugang für Traktor konfigurieren.
6. Live-Eingang und AutoDJ-Fallback im Parallelbetrieb testen.
7. Öffentliche Now-Playing-Daten und Stream-URL in die Website integrieren.
8. Erst nach erfolgreichem Test eine spätere Umschaltung erwägen.

## Sicherheits- und Betriebsgrenzen
- Niemals Admin-Passwort, Stream-Passwort oder API-Key in dieses öffentliche Repository schreiben.
- Private API-Aufrufe nur serverseitig über Secrets.
- Listen2MyRadio bleibt bis zum bestandenen Paralleltest unverändert.
- Keine ON-AIR-Meldung ohne bestätigten Live-DJ-Eingang.
- 24/7-Betrieb und tatsächliche Hörerlast erst nach Live-Test als erreicht melden.
- Audioarchiv-Speicher wächst mit den Mixdateien; 40 GB ist nur ein Startpunkt. Bei größerem Archiv Speicher erweitern oder externes Archiv getrennt betreiben.

## Offizielle Quellen
- AzuraCast Anforderungen: https://www.azuracast.com/docs/getting-started/requirements/
- AzuraCast Installation: https://www.azuracast.com/docs/getting-started/installation/
- AzuraCast Docker-Installation: https://www.azuracast.com/docs/getting-started/installation/docker/
- Hetzner Preisänderung ab 15.06.2026: https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/
- Hetzner IPv4-Preise: https://docs.hetzner.com/general/infrastructure-and-availability/ipv4-pricing/
