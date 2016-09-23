OC.L10N.register(
    "news",
    {
    "Feed contains invalid XML" : "Vir vsebuje neveljaven zapis XML.",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Vira ni mogoče najti: najverjetneje vira na spletišču ni, ali pa blokira dostop. Slednje lahko preverite tako, da prejmete vir prek strežniške ukazne vrstice z uporabo ukaza curl: curl",
    "Detected feed format is not supported" : "Zaznan zapis vira ni podprt.",
    "Website not found" : "Spletišča ni mogoče najti.",
    "More redirects than allowed, aborting" : "Zaznanih je več preusmeritev, zato bo opravilo preklicano.",
    "Bigger than maximum allowed size" : "Več od največje dovoljene velikosti.",
    "Request timed out" : "Zahteva je časovno potekla!",
    "Required credentials for feed were either missing or incorrect" : "Zahtevana poverila za ta vir so nepravilna, ali pa jih ni",
    "Forbidden to access feed" : "Dostop do vira je prepovedan",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Napaka potrdila: prišlo je do napake med izmenjavo podatkov SSL/TLS. Napaka je lahko v potrdilu (zapis datoteke, pot, dovoljenja), v geslih ali drugje.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Napaka potrdila: potrdilo oddaljenega strežnika SSL oziroma prstni odtis SSH md5 je označen kot nepotrjen!",
    "Certificate error: Problem with the local client certificate." : "Napaka potrdila: napaka krajevnega potrdila odjemalca.",
    "Certificate error: Couldn't use specified cipher." : "Napaka potrdila: navedene števke ni mogoče uporabiti.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Napaka potrdila: potrdila ni mogoče overiti z znanimi potrdili CA.",
    "Certificate error: Requested FTP SSL level failed." : "Napaka potrdila: zahteva prijave prek FTP SSL je spodletela.",
    "Certificate error: Initiating the SSL Engine failed." : "Napaka potrdila: začenjanje programnika SSL je spodletelo.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Napaka potrdila: napaka branja potrdila SSL CA (je napačno navedena pot?, ni ustreznih dovoljenj?).",
    "Certificate error: Issuer check failed" : "Napaka potrdila: preverjanje izdajatelja je spodletelo",
    "Unknown SSL certificate error!" : "Neznana napaka potrdila SSL!",
    "Request failed, network connection unavailable!" : "Zahteva je spodletela. Omrežna povezava trenutno ni na voljo!",
    "Request unauthorized. Are you logged in?" : "Zahteva ni ustrezno overjena. Ali ste prijavljeni?",
    "Request forbidden. Are you an admin?" : "Zahteva je zavrnjena. Ali ste prijavljeni kot skrbnik?",
    "Token expired or app not enabled! Reload the page!" : "Ključ je potekel ali pa program ni omogočen! Poskusite osvežiti stran!",
    "Internal server error! Please check your data/owncloud.log file for additional information!" : "Notranja napaka strežnika! Več podrobnosti je zapisanih v datoteki data/owncloud.log.",
    "Request failed, ownCloud is in currently in maintenance mode!" : "Zahteva je spodletela. Sistem OwnCloud je trenutno v načinu vzdrževanja!",
    "Can not add feed: Exists already" : "Vira ni mogoče dodati: ta že obstaja",
    "Articles without feed" : "Članki brez virov",
    "Can not add folder: Exists already" : "Ni mogoče dodati mape: mapa že obstaja.",
    "Use ownCloud cron for updates" : "Za posodobitve uporabi ownCloud cron.",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Možnost onemogočite, če uporabljate posodabljalnik po meri, kot je na primer posodabljalnik Python, vključen v programski paket",
    "Purge interval" : "Časovni razmik odstranjevanja",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Najkrajši čas, po katerem bodo viri in mape odstranjeni iz podatkovne zbirke. Vrednosti pod 60 sekundami so prezrte.",
    "Maximum read count per feed" : "Največje število prikazanih virov",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "Določa največje število prispevkov vira, ki bodo ostali vidni po čiščenju zgodovine. Če se pojavljajo starejši prispevki, je določilo nastavljeno prenizko. Vrednost -1 onemogoči izvajanje možnosti.",
    "Maximum redirects" : "Največje število preusmeritev",
    "How many redirects the feed fetcher should follow" : "Koliko preusmeritev naj bralnik virov sledi",
    "Maximum feed page size" : "Največja velikost strani vira",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Največja dovoljena velikost vira v bajtih. Če je vir RSS/ATOM večji od te vrednosti, bo posodobitev prekinjena.",
    "Feed fetcher timeout" : "Čas nalaganja vira",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Čas, ki je namenjen za nalaganje virov RSS ali Atom. Po tem času je nalaganje virov prekinjeno.",
    "Explore Service URL" : "Razišči spletni naslov storitve",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Če je naslov URL podan, bo prek povezave potekala poizvedba za prikaz virov. Za uporabo vgrajene storitve raziskovanja virov pustite to polje prazno.",
    "For more information check the Wiki" : "Za več podrobnosti obiščite Wiki",
    "Saved" : "Shranjeno",
    "Download" : "Prejmi",
    "Close" : "Zapri",
    "Ajax or Web cron mode detected! Your feeds will not be updated!" : "Zaznano je način opravila cron Ajax oziroma Web! Vira ne bo mogoče posodobiti!",
    "How to set up the operating system cron" : "Kako nastaviti opravila cron operacijskega sistema",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Namesti in nastavi hitrejši vzporedni posodabljalnik, ki za posodobitev uporablja  API programa  News",
    "filter" : "filter",
    "Language" : "Jezik",
    "Subscribe" : "Naročilo",
    "Got more awesome feeds? Share them with us!" : "Ali ste prejeli več odličnih virov? Pokažite jih tudi nam!",
    "No articles available" : "Ni prispevkov",
    "No unread articles available" : "Ni neprebranih prispevkov",
    "Open website" : "Odpri spletišče",
    "Star article" : "Označi prispevek z zvezdico",
    "Unstar article" : "Odstrani oznako prispevka",
    "Keep article unread" : "Obdrži kot neprebrano",
    "Remove keep article unread" : "Odstrani možnost neprebrano",
    "by" : "od",
    "from" : "od",
    "Play audio" : "Predvajaj zvok",
    "Download video" : "Prejmi video",
    "Download audio" : "Prejmi zvok",
    "Keyboard shortcut" : "Tipkovna bližnica",
    "Description" : "Opis",
    "right" : "desno",
    "Jump to next article" : "Skoči na naslednji posnetek",
    "left" : "levo",
    "Jump to previous article" : "Skoči na predhodni posnetek",
    "Toggle star article" : "Preklopi označevanje z zvezdico",
    "Star article and jump to next one" : "Označi prispevek z zvezdico in skoči na naslednjega",
    "Toggle keep current article unread" : "Preklopi ohranjanje prispevka kot neprebranega",
    "Open article in new tab" : "Odpri prispevek v novem zavihku",
    "Toggle expand article in compact view" : "Preklopi razširitev prispevka v skrčenem pogledu",
    "Refresh" : "Osveži",
    "Load next feed" : "Naloži naslednji vir",
    "Load previous feed" : "Naloži predhodni vir",
    "Load next folder" : "Naloži naslednjo mapo",
    "Load previous folder" : "Naloži predhodno mapo",
    "Scroll to active navigation entry" : "Pomakni se na predmet v žarišču",
    "Focus search field" : "Postavi iskalno polje v žarišče",
    "Mark current article's feed/folder read" : "Označi trenutni predmet kot prebran",
    "Web address" : "Spletni naslov",
    "Feed exists already!" : "Vir že obstaja!",
    "Folder" : "Mapa",
    "No folder" : "Ni mape",
    "New folder" : "Nova mapa",
    "Folder name" : "Ime mape",
    "Go back" : "Nazaj",
    "Folder exists already!" : "Mapa že obstaja!",
    "Advanced settings" : "Napredne nastavitve",
    "Credentials" : "Poverila",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Osnovna poverila HTTP so shranjena nešifrirano! Vsakdo z dostopom do strežnika oziroma do podatkovne zbirke, lahko dostopa do njih!",
    "Username" : "Uporabniško ime",
    "Password" : "Geslo",
    "New Folder" : "Nova Mapa",
    "Create" : "Ustvari",
    "Explore" : "Razišči",
    "Update failed more than 50 times" : "Posodobitev je spodletela več kot 50-krat",
    "Deleted feed" : "Izbrisan vir",
    "Undo delete feed" : "Razveljavi brisanje vira",
    "Rename" : "Preimenuj",
    "Menu" : "Meni",
    "Unpin feed from the top" : "Odpni vir z vrha",
    "Pin feed to the top" : "Pripni vir na vrh seznama",
    "No feed ordering" : "Ni razvrščanja vira",
    "Reversed feed ordering" : "Obrnjeno razvrščanje vira",
    "Normal feed ordering" : "Običajno razvrščanje vira",
    "Enable full text feed fetching" : "Omogoči pridobivanje virov s celotnim besedilom",
    "Disable full text feed fetching" : "Onemogoči pridobivanje virov s celotnim besedilom",
    "Keep updated articles as is" : "Ohrani posodobljene prispevke kot že so",
    "Mark updated articles unread" : "Označi posodobljene prispevke kot neprebrane",
    "Rename feed" : "Preimenuj vir",
    "Delete feed" : "Izbriši vir",
    "Mark all articles read" : "Označi vse prispevke kot prebrane",
    "Dismiss" : "Opusti",
    "Collapse" : "Skrči",
    "Deleted folder" : "Izbrisana mapa",
    "Undo delete folder" : "Razveljavi brisanje mape",
    "Rename folder" : "Preimenuj mapo",
    "Delete folder" : "Izbriši mapo",
    "Starred" : "Z zvezdico",
    "Unread articles" : "Neprebrani prispevki",
    "All articles" : "Vsi prispevki",
    "Settings" : "Nastavitve",
    "Disable mark read through scrolling" : "Onemogoči označevanje prebranosti med drsenjem",
    "Compact view" : "Stisnjen pogled",
    "Expand articles on key navigation" : "Razširi prispevek s tipkovnim krmarjenjem",
    "Show all articles" : "Pokaži vse prispevke",
    "Reverse ordering (oldest on top)" : "Obrni razvrstitev (najstarejši na vrh)",
    "Subscriptions (OPML)" : "Naročnine (OPML)",
    "Import" : "Uvozi",
    "Export" : "Izvozi",
    "Error when importing: file does not contain valid OPML" : "Napaka med uvažanjem: datoteka ne vsebuje veljavnega OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Napaka med uvažanjem: datoteka OPML ne vsebuje niti virov niti map",
    "Unread/Starred Articles" : "Neprebrani/Označeni prispevki",
    "Error when importing: file does not contain valid JSON" : "Napaka uvoza: datoteka ne vsebuje veljavnih podatkov JSON.",
    "Help" : "Pomoč",
    "Keyboard shortcuts" : "Tipkovne bližnjice",
    "Documentation" : "Dokumentacija",
    "Report a bug" : "Pošlji poročilo o hrošču"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
