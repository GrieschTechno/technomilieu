# TEKKNO MILIEU UNIVERSUM – WEBSITE MASTERPLAN

Stand: 27.11.2026
Leitentscheidung: Zuerst TEKKNO MILIEU RADIO zuverlässig zum Laufen bringen.

## 1. Gemeinsame Ausrichtung
TEKKNO MILIEU ist eine unabhängige Underground-Musikplattform. Das Radio ist der zentrale Einstieg und ein wichtiger Bereich, aber nicht das gesamte Projekt.

Die Website wird als modularer Hub aufgebaut: gemeinsames Design, eine Navigation und klar getrennte Bereiche. Neue Funktionen dürfen den laufenden Radiobetrieb nicht gefährden.

### Markenstruktur
- Dachmarke: AUDIOCORE
- Plattform: TEKKNO MILIEU
- Radio-Bereich: TEKKNO MILIEU RADIO
- Radio-Claim: RAW DARK FREQUENCIES BROADCAST
- Stil: Schwarz, Anthrazit, Weiß und Signalrot; industriell und Underground.
- Im Projekt-Branding die Schreibweise Tekkno verwenden.

## 2. Geplante Website-Bereiche
| Bereich | Zweck | Reihenfolge |
|---|---|---:|
| RADIO | Live-Stream, Status, Player und Sendungsinformationen | 1 |
| AUDIO ARCHIV | Fertige DJ-Sets und Mixe, Playlist und Wiedergabe | 1 |
| DOWNLOADS | Kostenlose Sample-Packs, Loops, Sounds und freigegebene Mixe | 2 |
| AUDIO TOOLS | Fertige Audio-Tools, VST3/VST/VSTi-Plugins und Utilities | 3 |
| ARTISTS & PARTNER | Befreundete DJs, Musiker, Labels, Projekte und Partnerlinks | 4 |
| COMMUNITY | Telegram, WhatsApp und später moderierter Website-Chat | 2 |
| SUPPORT | Freiwilliger Donate-/Support-Button | 4 |
| ABOUT / KONTAKT | Projekt, Kontakt, Nutzungs- und Lizenzhinweise | 2 |

Die Bereiche 2–4 werden zunächst vorbereitet und erst umgesetzt, wenn Radio und Archiv stabil funktionieren.

## 3. RADIO – höchste Priorität

### Zielbetrieb
1. DJ startet Traktor Pro und sendet den Mix über Listen2MyRadio.
2. Die Website bietet einen klaren Live-Einstieg und zeigt nur einen bestätigten Live-Status an.
3. Wird kein DJ-Live-Signal gesendet, soll das veröffentlichte Mix-Archiv verfügbar sein.
4. T.M.R.- und RDFB-Jingles sollen später automatisch in den Archiv-/AutoDJ-Ablauf eingebunden werden, zunächst im 60-Minuten-Rhythmus.
5. Echter DJ-Live-Status muss technisch vom Archiv-/AutoDJ-Betrieb unterschieden werden.

### Dokumentierte Streamdaten
- Host: uk21freenew.listen2myradio.com
- Port: 22961
- Mount: /stream
- Bestätigte IP: 82.145.41.8
- Öffentliche Hörseite: https://technomilieu.radio12345.com/

### Ehrliche technische Grenze
Ein Button auf einer statischen Website kann Traktor Pro nicht fernsteuern und den Streamanbieter nicht ohne passende API-/Backend-Anbindung zuverlässig auf Live/Offline setzen. Bis eine verlässliche Statusquelle angebunden ist, darf die Website keinen Livebetrieb vortäuschen. Der aktuelle Live-Button führt zur offiziellen Hörseite.

### Archiv-Stand
- Die Website liest eine playlist.json.
- Die Playlist ist derzeit leer.
- Der Browser-Player kann Titel nacheinander abspielen, sobald gültige öffentliche HTTPS-Audio-URLs eingetragen sind.
- Das ist noch kein serverseitiger 24/7-AutoDJ.
- Ein Upload- und Verwaltungsbereich benötigt eine sichere Speicher-/Backend-Lösung. Zugangsdaten dürfen niemals in öffentliche Dateien geschrieben werden.

## 4. Umsetzung in klaren Phasen

### PHASE 1 – RADIO ZUM LAUFEN BRINGEN (JETZT)
- Bestehende GitHub-Website als Ausgangsbasis erhalten.
- Netlify-Veröffentlichung und HTTPS prüfen.
- Live-Hörseite und Streamdaten prüfen; fehlendes Signal außerhalb einer aktiven Sendung ist kein Fehler.
- Mindestens einen freigegebenen DJ-Mix ins Archiv einbinden und Browser-Wiedergabe testen.
- Live-/Offline-Anzeige erst nach Anbindung einer belastbaren Statusquelle aktivieren.
- Ergebnis erst dann als funktionsfähig melden, wenn öffentliche Seite und Wiedergabe tatsächlich getestet wurden.

### PHASE 2 – RADIO-AUTOMATISIERUNG
- Sichere Statusquelle für DJ-Live vs. Archiv/AutoDJ.
- Automatische Live-/Archiv-Umschaltung.
- Serverseitige Playlist-Wiedergabe / AutoDJ, falls der Audiohost dies unterstützt.
- T.M.R.- und RDFB-Jingles im gewünschten Intervall.
- Sicherer Adminbereich für Upload, Titelpflege und Track-Freigaben.

### PHASE 3 – DOWNLOADS & COMMUNITY
- Download-Katalog mit Sample-Packs, Loops, Sounds und freigegebenen Mixen.
- Dateiformat, Dateigröße, Lizenz und Urheberhinweis je Download.
- Community-Verlinkungen und später Website-Chat mit Moderation.

### PHASE 4 – AUDIOCORE & MUSIK-UNIVERSUM
- Audio Tools und VST/VSTi-Plugin-Katalog mit Versionen, Systemanforderungen und Downloads.
- Künstler-, DJ-, Label- und Partnerprofile.
- Support-/Donate-Bereich.
- AUDIOCORE als Dachmarke integrieren, ohne den Radioauftritt zu überladen.

## 5. Technische Leitlinien
- Bestehendes GitHub-Projekt weiterverwenden; kein unnötiger Neubau und kein Base44-Zwang.
- Möglichst kostenlose und automatisierte Dienste bevorzugen.
- HTTPS für Website und Audioquellen.
- Keine Tokens oder privaten Zugangsdaten in HTML, JSON oder öffentlichen GitHub-Dateien.
- Keine leeren Funktionen als fertig darstellen.
- Mobile Bedienbarkeit und schnelle Ladezeit.
- Änderungen klein und überprüfbar halten; funktionierende Radio-Bestandteile nicht durch spätere Funktionen gefährden.

## 6. Aktueller Ist-Stand (27.11.2026)
- index.html enthält Radio-Einstieg, Browser-Archivplayer, Community-Links und Musiklinks.
- playlist.json enthält aktuell keine Tracks.
- netlify.toml ist vorhanden; Publish-Verzeichnis ist das Repository-Wurzelverzeichnis.
- GitHub-Pages-Workflow ist vorhanden, Pages-Veröffentlichung war laut Übergabe aber nicht aktiviert.
- Öffentliche Veröffentlichung und funktionierende Archiv-Wiedergabe sind noch nicht bestätigt.

## 7. Letzter Funktionstest und nächster Schritt
Am 27.11.2026 wurde die offizielle Listen2MyRadio-Hörseite öffentlich erreicht. Der bisher bekannte Netlify-Link raw-dark-frequency-boradcast.netlify.app liefert HTTP 404. playlist.json ist leer. Deshalb ist die Website-Veröffentlichung und Archiv-Wiedergabe noch nicht bestätigt.

Nächster Schritt: Netlify-Projekt bzw. korrekte Site-URL identifizieren und das GitHub-Repository als Deploy-Quelle verbinden. Danach HTTPS-Seite prüfen. Erst anschließend einen freigegebenen DJ-Mix einbinden und testen.
