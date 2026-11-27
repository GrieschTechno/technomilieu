# TEKKNO MILIEU RADIO – DJ-MIX-ARCHIV

Stand: 27.11.2026  
Kostenloser Archivweg: Internet Archive + `playlist.json` + vorhandener Webplayer.

## Was bereits vorbereitet ist

Die Website besitzt einen Archivplayer mit:
- HTML5-Audiowiedergabe
- Titel-/Showanzeige
- Playlist-Liste
- Vorheriger/Nächster-Mix
- automatischem Wechsel zum nächsten Mix
- Visualizer während der Wiedergabe

Der Player liest die Datei `playlist.json`. Aktuell ist die Liste leer. Daher kann noch kein Mix starten.

## Einmalige Vorbereitung

1. Bei Internet Archive ein kostenloses Konto anlegen und E-Mail bestätigen.
2. Nur eigene Mixe oder Aufnahmen hochladen, für die du alle erforderlichen Veröffentlichungsrechte besitzt.
3. Beim Upload einen eindeutigen Identifier wählen, zum Beispiel `tekkno-milieu-radio-mix-001`.
4. Mixdatei hochladen und Verarbeitung abwarten.
5. Die direkte Dateiadresse kopieren. Sie sieht so aus:

`https://archive.org/download/tekkno-milieu-radio-mix-001/DATEINAME.mp3`

Der tatsächliche Identifier und Dateiname müssen exakt aus deinem Upload übernommen werden.

## Playlist pflegen

Öffne im GitHub-Repository die Datei `playlist.json` und ergänze die Mixe in dieser Form:

```json
{
  "tracks": [
    {
      "title": "Griesch Tech – Session 001",
      "url": "https://archive.org/download/tekkno-milieu-radio-mix-001/session-001.mp3",
      "show": "TEKKNO MILIEU RADIO"
    },
    {
      "title": "Guest DJ – Session 002",
      "url": "https://archive.org/download/tekkno-milieu-radio-mix-002/session-002.mp3",
      "show": "TEKKNO MILIEU RADIO"
    }
  ]
}
```

Die Beispielnamen sind Platzhalter. Sie funktionieren erst, wenn genau diese Items und Dateien tatsächlich bei Internet Archive existieren.

## Regeln für stabile Wiedergabe

- Direkte MP3-Datei-URL verwenden, nicht die Archive-Detailseite.
- Dateinamen und Identifier exakt übernehmen.
- Erst nach abgeschlossener Verarbeitung testen.
- Möglichst MP3 mit konstanter Bitrate verwenden.
- Keine privaten oder fremden, nicht freigegebenen Aufnahmen veröffentlichen.
- Bei Ausfall eines Mixes dessen URL prüfen und den Eintrag korrigieren.

## Was damit noch NICHT entsteht

- Kein Uploadformular auf der Website.
- Kein automatischer Import aller Dateien aus dem Archive.org-Konto.
- Kein serverseitiger 24/7-Stream.
- Kein automatischer Übergang zwischen Listen2MyRadio-Live und Archiv im selben Radiostream.
- Keine automatische Jingle-Einfügung im Archivplayer.

Diese Funktionen würden einen dauerhaft laufenden Host oder eine andere geeignete Streaming-Infrastruktur erfordern. Sie werden nicht als kostenlos oder bereits vorhanden ausgegeben.

## Quellen

- Internet Archive Upload-Anleitung: https://archivesupport.zendesk.com/hc/en-us/articles/360017788831-How-to-upload-files-to-create-a-new-item-page
- GitHub Pages Limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
