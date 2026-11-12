# Rtyňáci — pracovní verze v GitHub Desktop

## Co je v balíčku
Tento malý ZIP je **sada změn pro rozbalenou původní zálohu**, není kompletní web. Důvodem jsou velká videa a fotografie, která už máte v původním archivu.

- `index.html`, `novy-web.css`, `novy-web.js`: návrh nového veřejného webu podle přiloženého screenshotu.
- `volby2026/index.html`, `volby2026/style.css`, `volby2026/script.js`: kopie původního volebního webu se změněnými relativními cestami k obrázkům a videím (`../assets/`).
- `assets/` **zůstává v původní složce** a není potřeba ji kopírovat ani upravovat.
- `vizertyne2035/` zůstává beze změny.
- `nohejbal/` zůstává beze změny, pokud ji máte v plném lokálním webu.

## Jak připravit lokální pracovní verzi
1. Rozbalte **původní zálohu** webu do složky, např. `C:\Web\rtynaci-pracovni`. Je-li v ZIPu ještě vnitřní složka `web_...`, pracujte **uvnitř ní**, kde je původní `index.html`.
2. Pro jistotu udělejte další kopii původního `index.html`, `style.css` a `script.js` mimo pracovní složku. Původní volební verze je ale také obsažena v `volby2026/` v tomto balíčku.
3. Rozbalte obsah **tohoto** balíčku přes kořen původního webu. `index.html` přepište, ale **složku `assets` nemažte**. Tento balíček žádné soubory `assets` ani `nohejbal` neobsahuje.
4. V GitHub Desktop zvolte `File → Add local repository`, pak `Create a repository here` (pokud zatím není inicializováno). Pojmenujte např. `rtynaci-web`.
5. Před prvním commitem zkontrolujte seznam změn; nikdy nepřidávejte soubory s hesly nebo citlivými údaji. Pokud jsou v projektu obří videa, můžete jejich verzování předem řešit přes Git LFS, nebo je ponechat mimo Git repozitář.
6. Vytvořte větev `pracovni-novy-web` a commitněte změny. Na ostrý hosting zatím nic nenahrávejte.

## Jak otestovat
- Otevřete složku ve VS Code, spusťte rozšíření Live Server nebo v terminálu ve složce `python -m http.server 8000`.
- Otevřete `http://localhost:8000/` a `http://localhost:8000/volby2026/`.
- Ověřte úvod, mobilní menu, obrázky, video galerii a odkazy na další projekty.

## Poznámky před publikováním
- Aktuality jsou **pracovní ukázky podle poslaného screenshotu**, nikoli ověřené zprávy; upravte je a přidejte skutečné fotografie i detailní články.
- Kontaktní a týmovou část je potřeba doplnit.
- Pro společnou práci v GitHub Desktop doporučujeme soukromý repozitář; bez Git LFS neodesílejte stovky MB videí na GitHub.
- Nový web lze publikovat až po ověření funkčnosti. Prozatím není změněn ostrý web na hostingu.

## Odstranění plakátu vila a úklid obrázků
- V pracovní kopii smažte soubor `assets/plakat-vila.jpg`. V `volby2026/index.html`, `script.js` a `style.css` je již odstraněn související plakátový modal.
- Originální ZIP zálohu nemažte a **na produkčním serveru zatím nic nemažte**.
- Ostatní fotky v `assets` zatím nemažte: některé mohou být používány v dalších stránkách, skriptech či v projektu `vizertyne2035`.
- Pokud už máte v pracovní složce starší rozpracované změny, nejprve proveďte commit, než tento balíček rozbalíte.
