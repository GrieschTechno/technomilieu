# TEKKNO MILIEU RADIO – AzuraCast Umsetzung

Stand: 27.11.2026
Status: technische Vorbereitung, noch nicht installiert oder live geschaltet.

## Zielentscheidung
AzuraCast wird als eigenständige zentrale Radiosteuerung vorbereitet. Listen2MyRadio bleibt während Aufbau und Test unverändert als bestehender Traktor-Pro-Liveweg erhalten. Es wird nichts am laufenden Stream umgestellt, bevor ein Paralleltest erfolgreich ist.

## Zielarchitektur
- Traktor Pro -> bestehender Listen2MyRadio-Eingang (unverändert in Phase 1).
- AzuraCast auf einem separaten Linux-VPS mit persistentem Speicher.
- AzuraCast AutoDJ/Liquidsoap verwaltet die freigegebenen DJ-Sets und Jingles.
- AzuraCast/Icecast liefert den Archiv-/AutoDJ-Stream.
- Die Website bleibt die öffentliche Oberfläche und erhält Status-/Now-Playing-Daten über die öffentliche AzuraCast-Now-Playing-Schnittstelle.
- Geschützte API-Aktionen (Upload, Playlist-Verwaltung, Streamsteuerung) laufen ausschließlich serverseitig. API-Schlüssel dürfen niemals in index.html, JavaScript oder öffentlichen GitHub-Dateien stehen.
- Erst nach erfolgreichem Paralleltest wird entschieden, ob Listen2MyRadio als Live-Zuspieler/Relay eingebunden oder der Live-Eingang direkt zu AzuraCast verlegt wird.

## Betriebslogik
1. LIVE DJ hat höchste Priorität.
2. Wenn ein bestätigter Live-DJ-Eingang aktiv ist, wird der Live-Stream ausgespielt.
3. Wenn kein Live-DJ-Eingang aktiv ist, spielt die konfigurierte Archiv-Playlist automatisch weiter.
4. Jingles werden als geplante Playlist-Elemente im Archivbetrieb integriert (Zielintervall: 60 Minuten; 30 Minuten bleibt eine spätere Option).
5. Die Website zeigt LIVE nur bei bestätigtem Live-Input, nicht allein weil AutoDJ Audio sendet.
6. Bei Ausfall des neuen Systems bleibt der bisherige Listen2MyRadio-Link als Rückfallweg erhalten.

## Voraussetzungen vor Installation
Offizielle Mindestanforderungen laut AzuraCast-Dokumentation:
- 64-bit x86_64/amd64 oder ARM64
- mindestens 2 GB RAM
- mindestens 20 GB Speicher
- Linux-Host mit Docker oder Podman und Root-/sudo-Zugriff
Empfohlene Hobby-Konfiguration: 4 CPU-Kerne, 4 GB RAM und mindestens 40 GB Speicher. Der Speicherbedarf für DJ-Sets kommt zusätzlich dazu.

## Hosting-Entscheidung
Kein kostenloser Hostingbetrieb wird als dauerhaft verfügbar vorausgesetzt. Ein echter 24/7-Radiobetrieb braucht einen dauerhaft laufenden Host, persistenten Speicher und ausreichend ausgehende Bandbreite. Ein Railway-/Serverless-Webhosting ist nicht automatisch ein geeigneter Ersatz für einen vollständigen AzuraCast-Docker-Host.
Vor einem kostenpflichtigen VPS muss der Nutzer den konkreten Anbieter/Preis ausdrücklich bestätigen. Bis dahin wird kein kostenpflichtiger Dienst bestellt und keine bestehende Radioverbindung verändert.

## Integrationsreihenfolge
### Phase A – parallel vorbereiten
- Bestehende Website und Listen2MyRadio unverändert lassen.
- AzuraCast-Host bereitstellen und Installation dokumentieren.
- Eine private Teststation anlegen.
- Test-DJ-Zugang für Traktor/Encoder einrichten.
- Einen einzelnen freigegebenen DJ-Mix hochladen und AutoDJ testen.
- Live-Eingang, AutoDJ-Fallback, HTTPS-Player und Now-Playing-Daten separat testen.

### Phase B – Website anbinden
- Öffentliche Stationsdaten/Now Playing aus AzuraCast abrufen.
- Live-Status anhand des tatsächlichen Live-Inputs darstellen.
- Player-URL auf den AzuraCast-Stream zeigen lassen, sobald der Stream stabil geprüft ist.
- Private API-Aktionen ausschließlich über einen geschützten Backend-Endpunkt führen.

### Phase C – Umschaltung und Betrieb
- Listen2MyRadio zunächst als bestehende Quelle/Reserve erhalten.
- Umschaltung erst nach erfolgreichem Hörer- und Mobiltest.
- Rollback auf bisherigen Live-Link jederzeit möglich halten.

## Sicherheitsregeln
- Keine Streampasswörter oder API-Schlüssel in GitHub einchecken.
- Keine Admin-API direkt aus dem Browser aufrufen.
- Keine DJ-Mixes ohne Freigabe veröffentlichen.
- Backups von Datenbank, Konfiguration und Audiomaterial vor Updates.
- Keine ON AIR-Anzeige ohne verifizierten Live-DJ-Status.

## Aktueller Blocker
Es ist noch kein AzuraCast-Server vorhanden und es liegen keine Serveradresse, Zugangsdaten oder API-Schlüssel vor. Deshalb kann die API noch nicht live verbunden oder getestet werden. Die Installation benötigt einen geeigneten Server; die offizielle Dokumentation nennt mindestens 2 GB RAM und 20 GB Speicher.

## Offizielle Dokumentation
- Anforderungen: https://www.azuracast.com/docs/getting-started/requirements/
- Installation: https://www.azuracast.com/docs/getting-started/installation/
- Docker-Installation: https://www.azuracast.com/docs/getting-started/installation/docker/
- Stationsverwaltung/AutoDJ: https://www.azuracast.com/docs/user-guide/station-management/
- API: https://www.azuracast.com/docs/developers/apis/
