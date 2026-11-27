# TEKKNO MILIEU RADIO – Projektübergabe
Stand: 27.11.2026

## Marken und Gesamtprojekt
- Dachmarke: AUDIOCORE.
- Plattform / Universum: TEKKNO MILIEU.
- Radiosender und aktueller Hauptfokus: TEKKNO MILIEU RADIO.
- Claim: RAW DARK FREQUENCIES BROADCAST.
- Verbindlicher Live-Spruch: WIR SIND AUF SENDUNG!! LIVE!!
- Stil: Schwarz/Anthrazit/Weiß/Signalrot, industriell und underground.
- Im Projekt-Branding die Schreibweise Tekkno verwenden.
- Das Radio ist ein Bereich des TEKKNO MILIEU Universums, nicht die gesamte Plattform.

## Verbindliche Priorität
JETZT ZUERST DEN RADIO-SENDER ZUM FUNKTIONIEREN UND LAUFEN BRINGEN.
Keine Ablenkung durch Shop, Downloads, Plugins oder Partnerseiten, bevor Radio und Archiv-Grundbetrieb geprüft funktionieren.

Die gemeinsame Website-Strategie und Umsetzungsphasen stehen in SITE_MASTERPLAN.md.

## Website-Bereiche – Zielbild
1. RADIO – Live-Stream, Status und Player.
2. AUDIO ARCHIV – veröffentlichte DJ-Sets und Mixe.
3. DOWNLOADS – kostenlose Sample-Packs, Loops, Sounds und freigegebene Mixe.
4. AUDIO TOOLS – fertige Audio-Tools sowie VST/VSTi-Plugins.
5. ARTISTS & PARTNER – befreundete DJs, Musiker, Labels und Partner.
6. COMMUNITY – Telegram, WhatsApp, später moderierter Website-Chat.
7. SUPPORT – freiwilliger Donate-/Support-Button.
8. ABOUT / KONTAKT – Projektinformationen und Kontakt.

Die Bereiche außerhalb Radio/Archiv werden erst in späteren Phasen umgesetzt.

## Plattformen und Community
- Radio-Hörseite: https://technomilieu.radio12345.com/
- Telegram-Kanal: https://t.me/technomilieu
- Telegram-Bot: https://t.me/TECHNOMILIEUBOT
- Telegram-Gruppe: https://t.me/+viuzWT1YdQIxZDli
- WhatsApp-Kanal: https://whatsapp.com/channel/0029Vb9fVOAKLaHguUfjr425
- SoundCloud-Profil: https://soundcloud.com/techno-milieu
- Discogs: https://www.discogs.com/

## Radio – Streamdaten
- Listen2MyRadio Host: uk21freenew.listen2myradio.com
- Port: 22961
- Mount: /stream
- Bestätigte IP: 82.145.41.8
- Fehlendes Live-Signal ist normal, wenn Traktor Pro gerade nicht sendet.

## Radio – Betriebsziel
1. DJ sendet aus Traktor Pro über Listen2MyRadio.
2. Website ermöglicht einen klaren Live-Einstieg.
3. Bei fehlendem DJ-Live-Signal soll das veröffentlichte Archiv verfügbar sein.
4. T.M.R.- und RDFB-Jingles sollen später im Archiv-/AutoDJ-Betrieb im 60-Minuten-Rhythmus eingebunden werden.
5. DJ-Live muss technisch von Archiv-/AutoDJ-Wiedergabe unterscheidbar sein.

### Technische Einschränkungen
- Eine statische Website kann Traktor Pro nicht per Knopfdruck fernsteuern.
- Ein Live-Status darf erst angezeigt werden, wenn eine zuverlässige Statusquelle den DJ-Livebetrieb bestätigt.
- Der aktuelle Live-Button führt zur offiziellen Listen2MyRadio-Hörseite.
- Der Browser-Archivplayer ist kein serverseitiger 24/7-AutoDJ.
- Die aktuelle playlist.json ist leer. Archivwiedergabe ist daher noch nicht praktisch bestätigt.
- Für Upload/Admin/AutoDJ wird eine sichere Speicher- und Backend-Lösung benötigt.

## Website-Repository
- Repository: https://github.com/GrieschTechno/technomilieu
- Hauptdatei: index.html
- Playlist: playlist.json
- Netlify-Konfiguration: netlify.toml
- GitHub-Pages-Workflow: .github/workflows/deploy.yml
- Letzter zuvor dokumentierter Website-Commit: aa4c5901c27204ee6f3dc81ca69c01a978456492.
- index.html enthält Radio-Einstieg, Browser-Archivplayer, Community-Links und Musiklinks.
- netlify.toml veröffentlicht das Repository-Wurzelverzeichnis.
- Öffentliche Veröffentlichung ist weiterhin nicht als erfolgreich bestätigt.
- Frühere Pages-Workflows scheiterten mit Resource not accessible by integration; laut vorheriger Übergabe ist das Repository ein Fork und Pages war nicht aktiviert.
- Base44 ist für den aktuellen Veröffentlichungsweg nicht vorgesehen.

## Telegram-Bot – noch offen
- Bot @TECHNOMILIEUBOT muss vom Kontoinhaber zur Gruppe und zum Kanal hinzugefügt werden.
- Administratorrechte zum Senden von Nachrichten erteilen.
- Bot-Token ausschließlich als Secret in einer Server-/Worker-Umgebung speichern.
- Keine Bot-Konfiguration oder Veröffentlichung der Bot-Nachrichten bestätigt.
- Vor automatischen Live-Meldungen eine verlässliche Statusquelle anbinden, die DJ-Live von AutoDJ unterscheidet.
- Keine Offline-Meldungen, keine Musikwünsche, kein Jukebox.

## Arbeitsregeln
- Ein Schritt nach dem anderen; möglichst automatisiert und ohne Programmierarbeit des Nutzers.
- Bestehendes Projekt weiterentwickeln, keinen unnötigen Neubau starten.
- Möglichst kostenlose Dienste bevorzugen.
- Keine Geheimnisse in öffentliche Dateien aufnehmen.
- Keine Veröffentlichung oder Funktion als abgeschlossen melden, bevor sie öffentlich geprüft wurde.
- Projektübergabe bei wesentlichen Änderungen aktualisieren.

## Nächster Schritt
PHASE 1 / SCHRITT 1: Netlify-Deployment prüfen und eine erreichbare HTTPS-Seite bestätigen. Danach Streamzugang und einen ersten freigegebenen Archiv-Mix testen.
