# TEKKNO MILIEU RADIO – RAW DARK FREQUENCIES BROADCAST

Kostenlose statische Radio-Website. Die Seite wird aus diesem Repository veröffentlicht; es gibt keinen bezahlten Server und keinen AzuraCast-Betrieb.

## Aktueller Stand

- Website: statisches HTML/CSS/JavaScript.
- Veröffentlichung: GitHub Pages über `.github/workflows/pages.yml`.
- Live: Der Button öffnet die bestehende Listen2MyRadio-Hörseite. Der Traktor-Pro-Sendebetrieb bleibt unverändert.
- Archiv: Der Webplayer liest `playlist.json`, spielt die dort eingetragenen Mixe ab und wechselt nach Ende automatisch zum nächsten Mix.
- Archivspeicher: Internet Archive. Uploads erfolgen durch den Rechteinhaber über dessen kostenloses Konto.
- Keine Zugangsdaten, Stream-Passwörter oder API-Schlüssel im Repository.

## DJ-Mixe ins Archiv aufnehmen

1. Einen eigenen DJ-Mix (oder Material, für das du die nötigen Veröffentlichungsrechte besitzt) bei Internet Archive hochladen.
2. Nach Abschluss der Verarbeitung die direkte MP3-Datei-URL kopieren. Das Format lautet:
   `https://archive.org/download/ITEM_IDENTIFIER/DATEINAME.mp3`
3. In `playlist.json` einen Eintrag ergänzen:

```json
{
  "tracks": [
    {
      "title": "DJ Name – Mix Titel",
      "url": "https://archive.org/download/ITEM_IDENTIFIER/DATEINAME.mp3",
      "show": "TEKKNO MILIEU RADIO"
    }
  ]
}
```

4. Änderungen an `playlist.json` speichern/committen. Nach dem GitHub-Pages-Deployment lädt die Website die aktualisierte Playlist.

Wichtig: Nur direkte Datei-URLs verwenden, nicht die Item- oder Detailseite. Internet Archive kann Uploads und Dateiverarbeitung verzögert bereitstellen.

## Grenzen, offen und ehrlich

- Solange `playlist.json` leer ist, gibt es noch keine DJ-Mixe zum Abspielen.
- Der Archivplayer läuft im geöffneten Browser, nachdem ein Besucher Start gedrückt hat. Er ist kein serverseitiger 24/7-AutoDJ.
- Live-/Archiv-Umschaltung innerhalb eines einzigen dauerhaften Radiostreams ist mit der aktuellen kostenlosen statischen Website nicht realisiert.
- Der bestehende Listen2MyRadio-Livestream wird nicht verändert.
- Kein falscher ON-AIR-Status: Die Website behauptet keinen bestätigten Live-Status, solange keine zuverlässige Statusquelle angebunden ist.
- Die Website enthält derzeit kein Admin-Upload-Backend. Mixe werden im Internet Archive hochgeladen und anschließend in `playlist.json` eingetragen.

## Dateien

- `index.html`: Website und Player
- `playlist.json`: öffentliche Mix-Playlist
- `ARCHIV_ANLEITUNG.md`: ausführliche Schritt-für-Schritt-Anleitung
- `netlify.toml`: optionale Netlify-Header-Konfiguration; nicht für GitHub Pages erforderlich
