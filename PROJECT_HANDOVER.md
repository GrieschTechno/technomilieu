# TEKKNO MILIEU RADIO – Projektübergabe
Stand: 18.11.2026

## Marken
- Dachmarke: AUDIOCORE.
- Radiosender: TEKKNO MILIEU RADIO.
- Claim: RAW DARK FREQUENCIES BROADCAST.
- Verbindlicher Live-Spruch: **WIR SIND AUF SENDUNG!! LIVE!!**
- Stil: Schwarz/Anthrazit/Weiß/Signalrot, industriell und underground.

## Plattformen
- Radio-Hörseite (bisheriger externer Link): https://technomilieu.radio12345.com/
- Vorheriger Base44-Testlink, nicht als finale Seite bewerben: https://tekkno-milieu-radio.base44.app
- Telegram-Kanal: https://t.me/technomilieu
- Telegram-Bot: https://t.me/TECHNOMILIEUBOT
- Telegram-Gruppe: https://t.me/+viuzWT1YdQIxZDli
- WhatsApp-Kanal: https://whatsapp.com/channel/0029Vb9fVOAKLaHguUfjr425
- SoundCloud-Profil: https://soundcloud.com/techno-milieu
- Discogs: https://www.discodogs.de

## Bot-Ziel
1. Neue Gruppenmitglieder automatisch begrüßen und auf den Radiosender verweisen.
2. Bei echtem DJ-Live-Start automatisch im Telegram-Kanal posten:
   **WIR SIND AUF SENDUNG!! LIVE!!**
3. Keine Offline-Meldungen, keine Musikwünsche, kein Jukebox.
4. AutoDJ/Fallback darf nicht fälschlich als DJ-Livebetrieb gemeldet werden.

Begrüßungsvorschlag:
> Willkommen bei TEKKNO MILIEU RADIO! Hier gibt es Hardtekno, Industrial und kompromisslose Underground-Sounds. Einschalten: https://technomilieu.radio12345.com/ – RAW DARK FREQUENCIES BROADCAST.

## Website-Repository
- Repository: https://github.com/GrieschTechno/technomilieu
- Letzter Website-Commit: aa4c5901c27204ee6f3dc81ca69c01a978456492
- Änderungen: Telegram-Gruppen-Einladungslink ergänzt; Community-Card hinzugefügt; Live-Spruch im Telegram-Kanaltext ergänzt.
- Frühere Community-Links-Änderung: 21774492e4c3a8770f5d55bf2d8601ed80d12762.

## Veröffentlichungsstatus
Die Website-Änderungen sind im GitHub-Repository gespeichert. Öffentliche Veröffentlichung ist **nicht bestätigt**. Repository-Metadaten melden `has_pages: false`. Frühere Pages-Workflows scheiterten beim Aktivieren der Pages-Site mit `Resource not accessible by integration`; der zweite Workflow fand keine Pages-Site. Das Repository ist ein Fork. Der Kontoinhaber muss in GitHub unter Settings → Pages die Pages-Veröffentlichung aktivieren (Build and deployment: GitHub Actions), falls GitHub Pages verwendet werden soll. Danach Deploy erneut prüfen und die öffentliche URL testen. Cloudflare Pages ist bislang nicht eingerichtet/bestätigt.

## Telegram-Bot – noch offen
- Bot @TECHNOMILIEUBOT muss vom Kontoinhaber zur Gruppe und zum Kanal hinzugefügt werden.
- Administratorrechte zum Senden von Nachrichten erteilen.
- Bot-Token ausschließlich als Secret in einer Server-/Worker-Umgebung speichern; niemals in Chat, Website, Repository oder Übergabedatei ablegen.
- Noch keine Bot-Konfiguration oder Veröffentlichung der Bot-Nachrichten bestätigt.
- Vor automatischen Live-Meldungen eine verlässliche Statusquelle anbinden, die DJ-Live von AutoDJ unterscheidet.

## Streamdaten
- Listen2MyRadio Host: uk21freenew.listen2myradio.com
- Port: 22961
- Mount: /stream
- bestätigte IP: 82.145.41.8
- Wenn kein DJ sendet, ist fehlendes Live-Signal normal.

## Arbeitsregeln
- Möglichst kostenlose, automatisierte Umsetzung ohne Programmierarbeit des Nutzers.
- Keine Veröffentlichung als abgeschlossen melden, solange Plattform und öffentlicher Link nicht geprüft sind.
- Keine Geheimnisse in öffentliche Dateien aufnehmen.
- Projektstand bei jeder wesentlichen Änderung aktualisieren.
