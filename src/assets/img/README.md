<img src="./src/assets/img/logo-2x.png" class="shadow">

### Principali attività del cliente descritte sul sito

Il sito che mi è stato sottoposto è quello di un'allenatrice di fitness e del suo online brand che coinsiste in:
- workout one to one personalizzato con il cliente
- vendita di attrezatura per la palestra
- piattaforma online per trovare compagni di allenamento
- canale youtube con video inediti riguardanti il fitness
- una newsletter sul mondo del fitness e sconti esclusivi per il sito e/o partners
- blog online con articoli relativi al fitness

### Obbiettivi per il sito

Il sito ha l'obbiettivo di promuovere i vari prodotti del cliente, offrire un servizio di shop online per i prodotti e di aumentare l'audience del cliente tramite il blog degli articoli e i compagni di allenamento.

### Struttura del sito

###### Header

L'header del sito contiene al suo interno la navbar con i relativi link alle varie sezioni del sito e dei bottoni per un'interazione rapida con il visitatore

<img src="./src/assets/img/readme_img/app-header.png">

###### Jumbotron

Il jumbotron è il banner principale del sito e contiene:
- bottone al canale youtube del cliente
- bottone allo shop del sito
- bottone alla sezione videos del sito

<img src="./src/assets/img/readme_img/jumbotron.jpeg">

###### Sezione Main Products

In questa sezione vengono promossi i principali articoli del cliente e una citazione di un noto atleta per ispirare il visitatore.

<img src="./src/assets/img/readme_img/main-products.jpeg">

###### Sezione YouTube

In questa sezione viene promosso il canale YouTube del cliente con un bottone al link del canale, un'altro al video di presentazione del canale e una lista della playlist consigliate dal cliente all'interno del suo canale

<img src="./src/assets/img/readme_img/youtube-section-top.jpeg">
<img src="./src/assets/img/readme_img/youtube-section-bottom.jpeg">

###### Sezione Newsletter

Sezione dove si invita il visitatore ad iscriversi alla mailing list del cliente per ricevere i vantaggi e le informazioni descritte nella sezione

<img src="./src/assets/img/readme_img/mailing-list.jpeg">

###### Pannello delle attività

Sezione simile a Main Products contente dei rimandi alle varie sezioni del sito

<img src="./src/assets/img/readme_img/activity-panel.png">

###### Sezione latest articles

Sezione contente gli ultimi articoli scritti nel blog del sito con relativi link e un tasto per accedere al blog

<img src="./src/assets/img/readme_img/latest-articles.jpeg">

###### Banner 'Buy product'

Banner con lo scopo di spingere il visitatore ad aquistare all'interno della sezione shop gli articoli del cliente

<img src="./src/assets/img/readme_img/buy-product-banner.jpeg">

###### Lista degli sponsor

Sezione descrittiva contenente gli sponsor del cliente con relativa descrizione e link ai siti

<img src="./src/assets/img/readme_img/sponsor-list.png">

###### Sezione 'Latest workout'

Sezione descrittiva contenente un richiamo alla sezione video del sito e che mostra l'ultima sessione di allenamento pubblica del cliente

<img src="./src/assets/img/readme_img/latest-video.jpeg">

###### Footer

Il footer si suddivide in tre colonne:
- La prima contiene le note legali obbligatorie, il logo e i social del cliente
- La seconda contiene gli articoli recenti inseriti nel blog
- La terza contiene i contatti del cliente

<img src="./src/assets/img/readme_img/app-footer.png">

### Tecnologie utilizzate e perché

Le tecnologie utilizzate per lo sviluppo del sito sono: 
- _**Vite**_ per lo scaffolding del progetto e la gestione dei moduli Vue
- _**Vue**_ per le sue funzionalità dinamiche e i componenti
- _**Bootstrap**_ per la sua libreria di css e gamma di regole incentrate verso il responsive
- _**Sass**_ per la creazioni di variabili e regole css più mantenibili
- _**Font Awesome**_ per la sua ampia libreria di icone personalizzabili

Grazie a queste tecnologie è stato possibile rendere dinamico e responsive tutto il sito.
Tutto i componenti del sito, eccetto, Jumbotron, Mailing list, Buy product banner, Featured video e footer bottom, sono realizzate in modo da ricevere contenuti dinamici e altamente modificabili.

Il sito grazie alle funzionalità di bootstrap e a qualche regola sass si presenta già pronto per il mobile grazie ad un resize e riodine dei componenti a seconda della dimensione dello schermo.

Il progetto essendo suddiviso in componenti è facilmente mantenibile e ampliabile, con la potenza di vue e vite si può facilmente aggiungere una nuova sezione all'interno del sito in pochi minuti e con il potere di sass e bootstrap le regole da applicare sono poche e ben leggibile, la palette cromatica è modificabile al volo essendo racchiusa all'intenro di un solo file.

I **possibili miglioramenti** che si possono apportare sono:
- l'aggiunta di animazioni personalizzate allo scorrere della pagina
- aggiungere le varie pagine presenti nell'header
- integrale il player di YouTube all'interno del sito in modo da mantenere il visitare all'interno di esso e facilitare le vendite
- inserire un possibile tema notturno
- inserire degli strumenti di accessibilità per una migliore fruizione

<style>

    .shadow {
        filter: drop-shadow(0 0 6px black)
    }

</style>