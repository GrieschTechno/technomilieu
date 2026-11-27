# TEKKNO MILIEU RADIO – verbindlicher Gratis-Umsetzungsplan

Stand: 27.11.2026  
Priorität: funktionierendes Radio zuerst.  
Kostenrahmen: 0,00 € laufende Kosten.

## Verbindliche Architektur

1. **Website:** statische Website aus dem Repository `GrieschTechno/technomilieu`, Veröffentlichung über GitHub Pages.
2. **Live:** Traktor Pro bleibt auf dem bestehenden Listen2MyRadio-Sendepfad. Keine Änderung an Host, Port, Mount oder Zugangsdaten.
3. **DJ-Archiv:** Internet Archive für Mixdateien, die der Rechteinhaber selbst hochlädt.
4. **Webplayer:** `index.html` liest `playlist.json`; die Playlist enthält direkte HTTPS-Datei-URLs.
5. **Community:** bestehende Telegram-Verweise bleiben erhalten.

## Bereits im Repository vorbereitet

- `index.html`: Radiooberfläche, Live-Link, Archivplayer, Playlistliste, Vor/Zurück, automatische Weiterschaltung im Browser und Audio-Visualizer.
- `playlist.json`: öffentliche Playlist-Datei. Sie ist derzeit leer, da noch keine Mix-Datei-URL im Repository hinterlegt ist.
- `ARCHIV_ANLEITUNG.md`: Upload- und Playlist-Anleitung.
- `README.md`: aktueller Projekt- und Gratisstatus.
- `.github/workflows/pages.yml`: automatischer GitHub-Pages-Workflow.
- `.nojekyll`: vorbereitet für statische Veröffentlichung.
- `AZURACAST_SERVER_SETUP.md`: ausdrücklich als NICHT AKTIV markiert.

## Was kostenlos bereits funktioniert bzw. erreichbar ist

- Die bestehende Listen2MyRadio-Hörseite ist öffentlich erreichbar.
- Die statische Website und der Browser-Archivplayer sind im Quellcode vorhanden.
- Internet Archive ermöglicht Uploads nach Kontoerstellung; hochgeladen werden dürfen nur Inhalte, für die die nötigen Rechte bestehen.

## Noch offen / nicht als fertig ausgeben

- Die GitHub-Pages-Adresse `https://grieschtechno.github.io/technomilieu/` lieferte beim letzten externen Test HTTP 404. Die Veröffentlichung ist deshalb **noch nicht bestätigt**. Repository-Einstellung „Settings → Pages“ muss auf „GitHub Actions“ stehen bzw. der Pages-Workflow muss erfolgreich durchlaufen.
- `playlist.json` enthält noch keine Mixe. Ein echter Archiv-Wiedergabetest ist erst mit einer hochgeladenen, verarbeiteten MP3-Datei möglich.
- Der Archivplayer läuft im Browser des Besuchers und nicht als 24/7-Server-AutoDJ.
- Eine automatische Live-vor-Archiv-Umschaltung innerhalb desselben Streams ist noch nicht realisiert.
- Jingles alle 60 Minuten sind noch nicht automatisch eingebunden.

## Gratisgrenze

Ein echter 24/7-Stream mit Live-Priorität, Archiv-Fallback und Jingleplanung benötigt einen ständig laufenden Streaming-Host. Ohne Mietserver ist das nur mit einem eigenen dauerhaft eingeschalteten PC und passender Streamingsoftware realistisch. Es wird keine kostenlose Cloud-Serverlösung behauptet, solange sie nicht nachweislich dauerhaft verfügbar ist.

## Nächste technische Reihenfolge

1. GitHub Pages aktivieren und erfolgreiche Veröffentlichung prüfen.
2. Einen eigenen Testmix bei Internet Archive hochladen.
3. Direkte MP3-URL in `playlist.json` eintragen.
4. Wiedergabe auf PC und Smartphone prüfen.
5. Erst danach weitere Mixe und die mögliche PC-basierte 24/7-Lösung angehen.

## Sicherheitsregeln

- Keine Passwörter oder API-Schlüssel in GitHub.
- Listen2MyRadio bleibt unverändert.
- Keine falsche ON-AIR-Anzeige.
- Keine kostenpflichtigen Bestellungen oder Abos.
